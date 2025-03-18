(function () {
  const trackify = {
    storeDataInCookie: function (data, actionId) {
      const maxAge = 86400;
      const serializedData = JSON.stringify(data);
      document.cookie = `td${actionId}=${encodeURIComponent(
        serializedData
      )}; path=/; max-age=${maxAge}`;
    },

    getDataFromCookie: function (actionId) {
      const name = `td${actionId}=`;
      const decodedCookie = decodeURIComponent(document.cookie);
      const cookieArray = decodedCookie.split(";");
      for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i].trim();
        if (cookie.indexOf(name) === 0) {
          return JSON.parse(cookie.substring(name.length, cookie.length));
        }
      }
      return null;
    },

    deleteCookie: function (actionId) {
      document.cookie = `td${actionId}=; path=/; max-age=0`;
    },

    getUrlParams: function (param) {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(param);
    },

    trackEvent: function (id, formData = {}, attempt = 1) {
      let data = trackify.getDataFromCookie(id);
      if (!validUrl) {
        if (!data) {
          return;
        }
      } else {
        data = { userId, urlCode, actionId, fingerId, dUrl };
      }
      if (
        !data ||
        !data.userId ||
        !data.urlCode ||
        !data.actionId ||
        !data.fingerId ||
        !data.dUrl
      ) {
        return;
      }
      if (data.actionId !== id) {
        return;
      }

      if (userId === "provider") {
        data.userId = formData?.tid;
        data.dUrl = null;
      }

      const payload = {
        tid: data.userId,
        code: data.urlCode,
        aid: data.actionId,
        fid: data.fingerId,
        des: data.dUrl,
      };
      if (formData?.leadId) {
        payload.aid = formData.leadId;
        payload.formId = data.actionId;
      }

      fetch("https://api-beta.channelboost.com/sc/affiliateCampaign/trackCPA", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
        .then(async (res) => {
          if (!res.ok) {
            const errorText = await res.text();
            throw new Error(`HTTP ${res.status}: ${errorText}`);
          }
          console.log("Event sent successfully:", res.status);
          trackify.deleteCookie(id);
        })
        .catch((err) => {
          console.error(
            `Error sending event (Attempt ${attempt}):`,
            err.message
          );
          const isRetriable =
            err.message.includes("500") ||
            err.message.includes("Tracking failed");

          if (isRetriable && attempt < 3) {
            const retryDelay = 10 * attempt * 1000;
            setTimeout(() => {
              trackify.trackEvent(id, formData, attempt + 1);
            }, retryDelay);
          } else {
            console.error("Max retries reached, event tracking failed.");
          }
        });
    },
  };

  window.trackify = trackify;

  function getScriptParams() {
    let scripts = document.getElementsByTagName("script");
    for (let script of scripts) {
      if (script.src.includes("cts.js")) {
        let urlParams = new URL(script.src).searchParams;
        return {
          userId: urlParams.get("uid"),
        };
      }
    }
    return null;
  }
  let userId = getScriptParams()?.userId;
  let urlCode = trackify.getUrlParams("urlCode") || "";
  let actionId = trackify.getUrlParams("aid") || "";
  let fingerId = trackify.getUrlParams("fid") || "";
  let dUrl = window.location.href;
  let validUrl = userId && urlCode && actionId && fingerId && dUrl;

  if (validUrl && userId !== "provider") {
    trackify.storeDataInCookie(
      { userId, urlCode, actionId, fingerId, dUrl },
      actionId
    );
  }
})();
