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

    trackEvent: function (id) {
      let data = trackify.getDataFromCookie(id);
      if (!validUrl) {
        if (!data) {
          console.log("No valid action to track.");
          return;
        }
      } else {
        data = { userId, urlCode, actionId, fingerId };
      }
      if (
        !data ||
        !data.userId ||
        !data.urlCode ||
        !data.actionId ||
        !data.fingerId
      ) {
        console.log("No valid partner referral found. Skipping tracking.");
        return;
      }
      if (data.actionId !== id) {
        console.log(
          `Action mismatch: Expected ${id}, but found ${data.actionId}`
        );
        return;
      }
      console.log("Action matched:", id);
      console.log("Sending event data to API...");

      const payload = {
        tid: data.userId,
        code: data.urlCode,
        aid: data.actionId,
        fid: data.fingerId,
        dUrl: window.location.href,
      };

      console.log("Payload:", payload);

      // API call to send data
      fetch("http://192.168.1.38:8080/scp/affiliateCampaign/trackCPA", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
        .then((res) => console.log("Event sent successfully:", res.status))
        .catch((err) => console.error("Error sending event:", err));
      trackify.deleteCookie(id);
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
  let validUrl = userId && urlCode && actionId && fingerId;

  if (validUrl) {
    trackify.storeDataInCookie(
      { userId, urlCode, actionId, fingerId },
      actionId
    );
  }
})();
