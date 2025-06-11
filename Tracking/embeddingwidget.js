(async function () {
  function getScriptParams() {
    let scripts = document.getElementsByTagName("script");
    for (let script of scripts) {
      if (script.src.includes("embeddingwidget.js")) {
        let urlParams = new URL(script.src).searchParams;
        return {
          userId: urlParams.get("uid"),
        };
      }
    }
    return null;
  }
  function getUrlParams(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }
  const TENANT_ID = getScriptParams()?.userId;
  const API_PREFIX = "https://api-beta.channelboost.com";
  const LOCAL_API_PREFIX = "http://localhost:8080";
  const PARTNER_DIRECTORY_API_KEY = "partner-directory";
  const domainName = await getDomainName();
  const REFERRAL_LINK_PREFIX = `${domainName ?? "referrer"}.coachbar.info/`;
  const trackify = {
    trackLead: function (formData = {}, attempt = 1) {
      console.log("Tracking event:", formData, attempt);

      const referrerCode = getUrlParams("urlCode");
      const firstName = formData?.firstName || "";
      const lastName = formData?.lastName || "";
      const email = formData?.email || "";
      const companyName = formData?.companyName || "";

      let validData = referrerCode && email;

      if (!validData) {
        console.log("Data has missing fields or is incorrect");
        return;
      }

      const payload = {
        referrerCode,
        firstName,
        lastName,
        email,
        companyName,
      };

      fetch(`${API_PREFIX}/sc/referralProgram/createLead`, {
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
              trackify.trackLead(formData, attempt + 1);
            }, retryDelay);
          } else {
            console.error("Max retries reached, event tracking failed.");
          }
        });
    },
  };
  window.trackify = trackify;

  function injectStyles() {
    const style = document.createElement("style");
    style.innerHTML = `
      .banner {
        margin-bottom: 1rem;
        padding: 1rem;
      }
  
      .banner-logo {
        width:auto;
        height: auto;
        object-fit: contain;
        border-radius: 8px;
      }
  
      #referral-input::placeholder {
        color: #5E6977;
        font-size: 14px;
        font-weight: 500;
        font-family: "Inter", sans-serif;
        opacity: 1;
        align-self: center;
      }
    .spinner {
    border: 2px solid #f3f3f3;
    border-top: 2px solid #fff;
    border-radius: 50%;
    width: 14px;
    height: 14px;
    animation: spin 0.8s linear infinite;
    display: inline-block;
    vertical-align: middle;
    margin-right: 8px;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
    `;
    document.head.appendChild(style);
  }

  function createHeader(data, theme) {
    const section = document.createElement("div");
    section.className = "referral-widget-section section-header";
    section.style.textAlign = data.alignment || "center";

    const heading = document.createElement("h2");
    heading.textContent = data.text || "Referral Program";
    heading.style.color =
      data.textColor || theme?.colors?.headerTextColor || "#000";
    heading.style.fontFamily = theme?.typography?.headerFontFamily || "inherit";
    heading.style.fontSize = theme?.typography?.headerFontSize || "22px";
    heading.style.fontWeight = "600";

    section.appendChild(heading);
    return section;
  }

  function createBanner(data, theme) {
    const section = document.createElement("div");
    section.className = "referral-widget-section section-banner";
    section.style.backgroundColor = data.sectionBg || "#f0f0f0";
    section.style.padding = "60px 24px";

    const img = document.createElement("img");
    img.src = data.image;
    img.alt = "Logo";
    img.className = "banner-logo";

    const text = document.createElement("p");
    text.textContent = data.text || "";
    text.style.color =
      data.textColor || theme?.colors?.bannerTextColor || "#333";
    text.style.fontFamily = theme?.typography?.bannerFontFamily || "inherit";
    text.style.fontSize = theme?.typography?.bannerFontSize || "22px";
    text.style.fontWeight = "600";

    if (data.alignment === "center") {
      section.style.display = "flex";
      section.style.flexDirection = "column";
      section.style.alignItems = "center";
      section.style.justifyContent = "center";
      section.style.textAlign = "center";
      section.style.gap = "16px";
      section.append(img, text);
    } else {
      section.style.display = "flex";
      section.style.flexDirection = "row";
      section.style.alignItems = "center";
      section.style.justifyContent = "space-between";
      section.style.gap = "12px";
      section.style.textAlign = "left";

      if (data.alignment === "right") {
        section.append(img, text);
      } else if (data.alignment === "left") {
        section.append(text, img);
      }
    }

    return section;
  }

  function createParagraph(data, theme) {
    const section = document.createElement("div");
    section.className = "referral-widget-section section-paragraph";

    const para = document.createElement("p");
    para.textContent = data.text || "";
    para.style.color =
      data.textColor || theme?.colors?.paragraphTextColor || "#333";
    para.style.fontFamily = theme?.typography?.paragraphFontFamily || "inherit";
    para.style.fontSize = theme?.typography?.paragraphFontSize || "14px";
    para.style.textAlign = data.alignment || "center";
    para.style.fontWeight = "600";

    section.appendChild(para);
    return section;
  }

  function createInputButton(data, theme) {
    const section = document.createElement("div");
    section.className = "referral-widget-section section-input-button";

    const form = document.createElement("form");
    form.style.display = "flex";
    form.style.flexDirection = "column";
    form.style.gap = "16px";
    form.style.alignItems = "flex-start";
    form.style.width = "100%";

    const alignment = data.alignment || "left";
    const buttonPosition = data?.buttonPosition || "side";

    const inputWrapper = document.createElement("div");
    inputWrapper.style.display = "flex";
    inputWrapper.style.flexDirection = "column";
    inputWrapper.style.flex = "1";
    inputWrapper.style.width = "100%";

    const label = document.createElement("label");
    label.textContent = data.inputLabel || "Your Email";
    label.setAttribute("for", "referral-input");
    label.style.fontWeight = "500";
    label.style.color = data?.inputLabelColor || "#131518";
    label.style.fontFamily = theme?.typography?.headerFontFamily || "inherit";
    label.style.fontSize = "16px";
    label.style.marginBottom = "6px";
    label.style.textAlign = "left";

    const input = document.createElement("input");
    input.type = "email";
    input.id = "referral-input";
    input.placeholder = data.inputPlaceholder || "Enter your email";
    input.style.padding = "8px 16px";
    input.style.border = "1px solid #c4ccd8";
    input.style.borderColor =
      data.inputBorderColor || theme?.colors?.inputBorderColor || "#c4ccd8";
    input.style.borderRadius = "8px";
    input.style.width = "100%";
    input.style.height = "40px";

    if (data?.inputLabelVisible) {
      inputWrapper.appendChild(label);
    }
    inputWrapper.appendChild(input);

    const button = document.createElement("button");
    button.type = "submit";
    button.textContent = data.primaryBtnText || "Submit";
    button.style.padding = "10px 16px";
    button.style.backgroundColor =
      data?.primaryBtnBgColor || theme?.colors?.btnBgColor || "#0C94AC";
    button.style.color =
      data?.primaryBtnTextColor || theme?.colors?.buttonText || "#fff";
    button.style.border = "1px solid";
    button.style.borderColor =
      data?.primaryBtnBorderColor || theme?.colors?.btnBorderColor || "#0C94AC";
    button.style.borderRadius = "8px";
    button.style.cursor = "pointer";
    button.style.fontWeight = "500";
    button.style.fontSize = theme?.typography?.btnFontSize || "14px";
    button.style.fontFamily = theme?.typography?.btnFontFamily || "inherit";
    button.style.height = "40px";
    button.style.minWidth = "160px";

    if (buttonPosition === "below") {
      if (alignment === "center") {
        inputWrapper.style.width = "100%";
        button.style.width = "100%";
        button.style.alignSelf = "stretch";

        form.style.alignItems = "center";
        form.appendChild(inputWrapper);
        form.appendChild(button);
      } else {
        inputWrapper.style.width = "100%";
        button.style.alignSelf =
          alignment === "left" ? "flex-start" : "flex-end";

        form.appendChild(inputWrapper);
        form.appendChild(button);
      }
    } else {
      const responsiveWrapper = document.createElement("div");
      responsiveWrapper.className = "responsive-input-button-wrapper";
      responsiveWrapper.style.display = "flex";
      responsiveWrapper.style.flexWrap = "wrap";
      responsiveWrapper.style.justifyContent = "space-between";
      responsiveWrapper.style.alignItems = "flex-start";
      responsiveWrapper.style.width = "100%";
      responsiveWrapper.style.gap = "16px";

      inputWrapper.style.flex = "1";
      inputWrapper.style.minWidth = "160px";
      button.style.alignSelf = "flex-end";
      let left = inputWrapper;
      let right = button;
      if (alignment === "left") {
        left = button;
        right = inputWrapper;
      }

      responsiveWrapper.appendChild(left);
      responsiveWrapper.appendChild(right);
      form.appendChild(responsiveWrapper);

      const styleTag = document.createElement("style");
      styleTag.textContent = `
        @media (max-width: 600px) {
          .responsive-input-button-wrapper {
            flex-direction: column !important;
          }
  
          .responsive-input-button-wrapper button {
            width: 100% !important;
            align-self: stretch !important;
          }
        }
      `;
      document.head.appendChild(styleTag);
    }

    const errorMessage = document.createElement("p");
    errorMessage.style.color = "#C81E1E";
    errorMessage.style.fontSize = "14px";
    errorMessage.style.fontWeight = "400";
    errorMessage.style.fontFamily =
      theme?.typography?.paragraphFontFamily || "inherit";
    errorMessage.style.marginTop = "8px";
    errorMessage.style.display = "none";
    errorMessage.id = "error-message";

    input.addEventListener("input", function () {
      errorMessage.style.display = "none";
    });

    let hasSubmitted = false;
    let referralLink = "";

    form.addEventListener("submit", async function (event) {
      event.preventDefault();
      if (hasSubmitted) {
        navigator.clipboard.writeText(referralLink || "").then(() => {
          button.textContent = "Copied!";
          setTimeout(() => {
            button.textContent = data.secondaryBtnText || "Copy Link";
          }, 2000);
        });
        return;
      }
      button.disabled = true;
      const originalButtonText = button.textContent;
      button.innerHTML = `<span class="spinner"></span>`;
      try {
        const response = await fetch(
          API_PREFIX + "/sc/referralProgram/trackParticipant",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: input.value || "",
              programId: data.programId,
              verifyEmail: data.verifyEmail,
              spTenantId: TENANT_ID,
              linkSource: "widget",
            }),
          }
        );

        if (!response.ok) {
          const errorResponse = await response.json();
          errorMessage.textContent = errorResponse?.message || "Error occurred";
          errorMessage.style.display = "block";
          return;
        }

        const res = await response.json();
        if (res.code === 200 && res.success) {
          const participantData = res.data?.participantDetail;
          referralLink = participantData?.referralLink || "";
          const urlCode = participantData?.referrerCode;

          if (urlCode) {
            referralLink = `${REFERRAL_LINK_PREFIX}${urlCode}`;
          }
          input.value = referralLink;
          input.readOnly = true;
          input.style.backgroundColor = "#f0f0f0";
          label.textContent = "Your Referral Link:";
          button.innerHTML = data.secondaryBtnText || "Copy Link";
          button.style.backgroundColor = data?.secondaryBtnBgColor;
          button.style.color = data?.secondaryBtnTextColor;
          button.style.borderColor = data?.secondaryBtnBorderColor;
          hasSubmitted = true;
        }
      } catch (error) {
        console.error("Network or runtime error:", error);
        errorMessage.textContent = "Something went wrong. Please try again.";
        errorMessage.style.display = "block";
      } finally {
        if (!hasSubmitted) {
          button.innerHTML = originalButtonText;
        }
        button.disabled = false;
      }
    });

    section.appendChild(form);
    section.appendChild(errorMessage);
    return section;
  }

  function createSection(slug, data, theme) {
    switch (slug) {
      case "header":
        return createHeader(data, theme);
      case "banner":
        return createBanner(data);
      case "paragraph":
        return createParagraph(data, theme);
      case "input":
        return createInputButton(data, theme);
      default:
        return null;
    }
  }

  async function createForm(containerId, cmsData, themeSetting, verifyEmail) {
    const container = document.getElementById(containerId);
    if (!container) return;

    try {
      if (!Array.isArray(cmsData)) throw new Error("Invalid cmsData");

      injectStyles();

      const bannerSection = cmsData.find((s) => s?.slug === "banner");
      const headerSection = cmsData.find((s) => s?.slug === "header");
      const paragraphSection = cmsData.find((s) => s?.slug === "paragraph");
      const inputButtonSection = cmsData.find((s) => s?.slug === "input");

      if (bannerSection && bannerSection?.data?.isVisible) {
        const bannerEl = createSection(
          "banner",
          bannerSection?.data,
          themeSetting
        );
        if (bannerEl) container.appendChild(bannerEl);
      }

      const contentContainer = document.createElement("div");
      contentContainer.style.padding = "30px";
      contentContainer.style.display = "flex";
      contentContainer.style.flexDirection = "column";
      contentContainer.style.backgroundColor =
        themeSetting?.colors?.sectionBg || "#fff";

      if (headerSection || paragraphSection) {
        const headerParagraphContainer = document.createElement("div");
        headerParagraphContainer.style.display = "flex";
        headerParagraphContainer.style.flexDirection = "column";
        headerParagraphContainer.style.gap = "12px";

        if (headerSection && headerSection?.data?.isVisible) {
          const headerEl = createSection(
            "header",
            headerSection.data,
            themeSetting
          );
          if (headerEl) {
            headerEl.style.marginLeft = "auto";
            headerEl.style.marginRight = "auto";
            headerEl.style.width = "75%";
            headerParagraphContainer.appendChild(headerEl);
          }
        }

        if (paragraphSection && paragraphSection?.data?.isVisible) {
          const paragraphEl = createSection(
            "paragraph",
            paragraphSection.data,
            themeSetting
          );
          if (paragraphEl) {
            paragraphEl.style.marginLeft = "auto";
            paragraphEl.style.marginRight = "auto";
            paragraphEl.style.width = "75%";
            headerParagraphContainer.appendChild(paragraphEl);
          }
        }

        contentContainer.appendChild(headerParagraphContainer);
      }

      if (inputButtonSection && inputButtonSection?.data?.isVisible) {
        const inputCmsData = inputButtonSection.data;
        inputCmsData.programId = containerId || null;
        inputCmsData.verifyEmail = verifyEmail || null;
        const inputBtnEl = createSection("input", inputCmsData, themeSetting);
        if (inputBtnEl) {
          inputBtnEl.style.width = "50%";
          inputBtnEl.style.margin = "20px auto 0px auto";
          inputBtnEl.style.justifyContent = "center";
          contentContainer.appendChild(inputBtnEl);
        }
      }
      container.appendChild(contentContainer);
    } catch (err) {
      console.error("[Referral Widget Error]", err.message);
    }
  }

  initReferralWidgets();

  async function initReferralWidgets() {
    try {
      const configData = await fetchReferralProgramConfig();
      const widgetConfigs = filterWidgetConfigs(configData);

      widgetConfigs.forEach((configItem) => {
        waitForContainerAndRenderForm(configItem);
      });
    } catch (error) {
      console.error("Error initializing referral widgets:", error);
    }
  }

  async function getDomainName() {
    try {
      const response = await fetch(
        `${API_PREFIX}/sc/referralProgram/subDomain`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            tenantId: TENANT_ID,
            domainType: PARTNER_DIRECTORY_API_KEY,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch domain Name");
      }
      const config = await response.json();
      return config?.data?.data?.subDomain || null;
    } catch (error) {
      console.error("Error fetching Domain:", error);
      return null;
    }
  }

  async function fetchReferralProgramConfig() {
    const response = await fetch(
      `${API_PREFIX}/sp/referral-program-page/list`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ tenantId: TENANT_ID }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch config");
    }

    const config = await response.json();
    return config?.data?.referralProgramPageList || [];
  }

  function filterWidgetConfigs(items) {
    const widgets = items.filter((item) => item?.pageType === "widget");
    return widgets;
  }

  function waitForContainerAndRenderForm({
    cmsData,
    themeSetting,
    verifyEmail,
    programId,
  }) {
    const checkExist = setInterval(() => {
      const container = document.getElementById(programId);
      if (container) {
        createForm(programId, cmsData, themeSetting, verifyEmail);
        clearInterval(checkExist);
      }
    }, 500);
  }
})();
