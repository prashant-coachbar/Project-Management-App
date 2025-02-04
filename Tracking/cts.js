(function () {
  console.log("PRM Tracking Script Loaded...");

  const trackify = {
    storeDataInCookie: function (data) {
      const maxAge = 86400; // Store for 24 hours
      const serializedData = JSON.stringify(data);
      document.cookie = `trackingData=${encodeURIComponent(
        serializedData
      )}; path=/; max-age=${maxAge}`;
    },

    getDataFromCookie: function () {
      const name = "trackingData=";
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

    getUrlParams: function (param) {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(param);
    },

    trackEvent: function (id) {
      if (actionId === id) {
        console.log("Action matched:", id);
        console.log("Sending event data to API...");
        const payload = {
          userId,
          urlCode,
          actionId,
          fingerId,
          destinationUrl: window.location.href,
          urlDomain: window.location.hostname,
        };
        console.log("Payload:", payload);

        //API call to send data
        // fetch("https://api.yourprm.com/track-event", {
        //   method: "POST",
        //   headers: { "Content-Type": "application/json" },
        //   body: JSON.stringify(data),
        // }).then((res) => console.log("Event sent:", eventType));
      } else {
        console.log("Sorry Action doesn't match");
      }
    },
  };

  window.trackify = trackify; // Expose to global scope

  // Extract query parameters from the script tag
  function getScriptParams() {
    let scripts = document.getElementsByTagName("script");
    for (let script of scripts) {
      console.log("Checking script:", script.src);
      if (script.src.includes("cts.js")) {
        let urlParams = new URL(script.src).searchParams;
        console.log(urlParams.get("uid"));
        return {
          userId: urlParams.get("uid"),
        };
      }
    }
    return null;
  }
  let validUrl = true;
  let userId = getScriptParams()?.userId;
  let urlCode = trackify.getUrlParams("urlCode") || "";
  let actionId = trackify.getUrlParams("aid") || "";
  let fingerId = trackify.getUrlParams("fid") || "";

  if (userId && urlCode && actionId && fingerId) {
    trackify.storeDataInCookie({ userId, urlCode, actionId, fingerId });
  } else {
    console.log("Fetching data from cookie");
    const data = trackify.getDataFromCookie();
    if (data) {
      userId = data?.userId;
      urlCode = data?.urlCode;
      actionId = data?.actionId;
      fingerId = data?.fingerId;
    } else {
      validUrl = false;
    }
  }
  console.log("User ID:", userId);
  console.log("UrlCode:", urlCode);
  console.log("Action Id:", actionId);
  console.log("Finger Id:", fingerId);
})();
