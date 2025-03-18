(function () {
  const scriptTag = document.currentScript;
  const userId = scriptTag.getAttribute("data-user-id");
  console.log("formScript loaded", userId);

  // Create an iframe
  const iframe = document.createElement("iframe");
  iframe.src = `http://localhost:3002/service-request-page?provider=${userId}`;
  // iframe.style.width = "auto";
  // iframe.style.height = "auto"; // Adjust height as needed
  iframe.style.border = "none";

  console.log(iframe.src);
  console.log(iframe);

  // Wait until the placeholder div is available
  // const checkExist = setInterval(() => {
  //   const targetDiv = document.getElementById("prm-lead-form");
  //   if (targetDiv) {
  //     targetDiv.appendChild(iframe);
  //     clearInterval(checkExist); // Stop checking once found
  //   } else {
  //     console.warn("Waiting for PRM Lead Form placeholder...");
  //   }
  // }, 500); // Check every 500ms
})();
