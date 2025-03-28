const fetchedFormMapping = [
  {
    id: 1,
    name: "Employee's First Name",
    defaultKeyName: "firstName",
    added: true,
    isRequired: true,
    placeholder: "Enter your first name",
    fieldType: "input",
  },
  {
    id: 2,
    name: "Employee's Last Name",
    defaultKeyName: "lastName",
    added: true,
    isRequired: true,
    placeholder: "Enter your last name",
    fieldType: "input",
  },
  {
    id: 3,
    name: "Employee's Email",
    defaultKeyName: "email",
    added: true,
    isRequired: true,
    placeholder: "Enter your email address",
    fieldType: "input",
  },
  {
    id: 4,
    name: "Employee's Company",
    defaultKeyName: "companyName",
    added: true,
    isRequired: true,
    placeholder: "Enter your company name",
    fieldType: "input",
  },
  {
    id: 5,
    name: "Employee's Status",
    defaultKeyName: "status",
    added: true,
    isRequired: true,
    placeholder: "Select",
    fieldType: "singleSelectDropDown",
  },
  {
    id: 23,
    name: "Employee's Subscription Type",
    defaultKeyName: "subscriptionType",
    added: true,
    isRequired: true,
    fieldType: "singleSelectDropDown",
  },
  {
    id: 17,
    name: "Employee's City",
    defaultKeyName: "city",
    added: true,
    isRequired: true,
    placeholder: "Enter Referral City",
    fieldType: "input",
  },
  {
    id: 13,
    name: "Employee's Company Size",
    defaultKeyName: "companySize",
    added: true,
    isRequired: false,
    placeholder: "Enter Referral Company Size",
    fieldType: "multiSelectDropDown",
  },
  {
    id: 12,
    name: "Employee's Current Application Stack",
    defaultKeyName: "currentStack",
    added: true,
    isRequired: false,
    placeholder: "Enter Referral Current Technology Stack",
    fieldType: "multiSelectDropDown",
  },
  {
    id: 10,
    name: "Employee's Focus Industry",
    defaultKeyName: "industry",
    added: true,
    isRequired: false,
    placeholder: "Enter Referral Industry",
    fieldType: "multiSelectDropDown",
  },
  {
    id: 9,
    name: "Employee's Average Budget",
    defaultKeyName: "spBudget",
    added: true,
    isRequired: false,
    placeholder: "Enter Referral Budget",
    fieldType: "multiSelectDropDown",
  },
  {
    id: 11,
    name: "Employee's Location",
    defaultKeyName: "country",
    added: true,
    isRequired: false,
    placeholder: "Enter Referral Location",
    fieldType: "singleSelectDropDown",
  },
  {
    id: 8,
    name: "Employee's Phone",
    defaultKeyName: "phone",
    added: true,
    isRequired: false,
    placeholder: "Enter Referral Phone Number",
    fieldType: "phoneInput",
  },
  {
    id: 7,
    name: "Employee's Services Required",
    defaultKeyName: "services",
    added: true,
    isRequired: false,
    placeholder: "Enter Referral Services",
    fieldType: "multiSelectDropDown",
  },
  {
    id: 16,
    name: "Employee's Preferred Communication Type",
    defaultKeyName: "preferredContactType",
    added: true,
    isRequired: false,
    placeholder: "Enter Referral Preferred Contact Type",
    fieldType: "multiSelectDropDown",
  },
  {
    id: 18,
    name: "Employee's When service should be started?",
    defaultKeyName: "serviceTiming",
    added: true,
    isRequired: false,
    placeholder: "Enter Referral Service Timings",
    fieldType: "multiSelectDropDown",
  },
  {
    id: 19,
    name: "Employee's Preferred Language",
    defaultKeyName: "preferredLanguage",
    added: true,
    isRequired: false,
    placeholder: "Enter Referral Preferred Language",
    fieldType: "multiSelectDropDown",
  },
  {
    id: 15,
    name: "Employee's Job Title",
    defaultKeyName: "jobTitle",
    added: true,
    isRequired: false,
    placeholder: "Enter Referral Job Title",
    fieldType: "input",
  },
  {
    id: 14,
    name: "Employee's Company Annual Revenue",
    defaultKeyName: "spCompanyRevenue",
    added: true,
    isRequired: false,
    placeholder: "Enter Referral Company Revenue",
    fieldType: "multiSelectDropDown",
  },
  {
    id: 21,
    name: "Employee's Products",
    defaultKeyName: "products",
    added: true,
    isRequired: false,
    placeholder: "Enter Referral Product",
    fieldType: "multiSelectDropDown",
  },
  {
    id: 6,
    name: "Employee's Company Website",
    defaultKeyName: "companyWebsite",
    added: true,
    isRequired: false,
    placeholder: "Enter Referral Website",
    fieldType: "input",
  },
  {
    id: 20,
    name: "Employee's Comments",
    defaultKeyName: "comments",
    added: true,
    isRequired: false,
    placeholder: "Enter Referral Comments",
    fieldType: "input",
  },
];
const leadStatuses = ["New", "Qualified", "Unqualified", "Won", "Lost"];

const serviceCategoryOptions = [
  { label: "Software Integration", value: "Software Integration" },
  { label: "Software Implementation", value: "Software Implementation" },
  { label: "Business Consulting", value: "Business Consulting" },
  { label: "Accounting Services", value: "Accounting Services" },
  {
    label: "Strategic Planning Technology",
    value: "Strategic Planning Technology",
  },
  {
    label: "Assessment and Recommendations",
    value: "Assessment and Recommendations",
  },
  { label: "Bookkeeping", value: "Bookkeeping" },
  {
    label: "Cloud Services and Migration",
    value: "Cloud Services and Migration",
  },
  {
    label: "Custom Software Development",
    value: "Custom Software Development",
  },
  { label: "Cybersecurity Consulting", value: "Cybersecurity Consulting" },
  {
    label: "Data Analytics and Business Intelligence",
    value: "Data Analytics and Business Intelligence",
  },
  { label: "Data Migration", value: "Data Migration" },
  { label: "Designing Services", value: "Designing Services" },
  {
    label: "Legacy System Modernization",
    value: "Legacy System Modernization",
  },
  {
    label: "Market Research and Feasibility Studies",
    value: "Market Research and Feasibility Studies",
  },
  { label: "Mobile App Development", value: "Mobile App Development" },
  { label: "Performance Optimization", value: "Performance Optimization" },
  { label: "Project Management", value: "Project Management" },
  {
    label: "Quality Assurance and Testing",
    value: "Quality Assurance and Testing",
  },

  {
    label: "Software Maintenance and Support",
    value: "Software Maintenance and Support",
  },
  { label: "Training", value: "Training" },
  {
    label: "Vendor / Software Selection",
    value: "Vendor / Software Selection",
  },
];

const budgetOptionsObj = {
  "Less than 5,000": "Less than #cur*5,000",
  "5,000 - 10,000": "#cur*5,000 - #cur*10,000",
  "10,000 - 30,000": "#cur*10,000 - #cur*30,000",
  "30,000 - 50,000": "#cur*30,000 - #cur*50,000",
  "More than 50,000": "More than #cur*50,000",
};

const dropdownBudgetOptions = [
  {
    label: budgetOptionsObj["Less than 5,000"],
    value: "Less than 5,000",
  },
  {
    label: budgetOptionsObj["5,000 - 10,000"],
    value: "5,000 - 10,000",
  },
  {
    label: budgetOptionsObj["10,000 - 30,000"],
    value: "10,000 - 30,000",
  },
  {
    label: budgetOptionsObj["30,000 - 50,000"],
    value: "30,000 - 50,000",
  },
  {
    label: budgetOptionsObj["More than 50,000"],
    value: "More than 50,000",
  },
];

const companySizeOptions = [
  {
    label: "Self-employed",
    value: "Self-employed",
  },
  {
    label: "1-10 employees",
    value: "1-10 employees",
  },
  {
    label: "11-50 employees",
    value: "11-50 employees",
  },
  {
    label: "51-200 employees",
    value: "51-200 employees",
  },
  {
    label: "201-500 employees",
    value: "201-500 employees",
  },
  {
    label: "501-1000 employees",
    value: "501-1000 employees",
  },
  {
    label: "More than 1000 employees",
    value: "More than 1000 employees",
  },
];

const serviceTimingOptions = [
  {
    label: "Less than in 2 weeks",
    value: "Less than in 2 weeks",
  },
  {
    label: "In 2 - 4 weeks",
    value: "In 2 - 4 weeks",
  },
  {
    label: "In 4 - 6 weeks",
    value: "In 4 - 6 weeks",
  },
  {
    label: "In 6 - 9 weeks",
    value: "In 6 - 9 weeks",
  },
  {
    label: "In 9 - 12 weeks",
    value: "In 9 - 12 weeks",
  },
  {
    label: "In 12 - 16 weeks",
    value: "In 12 - 16 weeks",
  },
  {
    label: "More than in 16 weeks",
    value: "More than in 16 weeks",
  },
];

const companyRevenueObj = {
  "Less than 1M/Year": "Less than #cur*1M/Year",
  "1-5M/Year": "#cur*1-5M/Year",
  "5-10M/Year": "#cur*5-10M/Year",
  "10-25M/Year": "#cur*10-25M/Year",
  "More than 25M/Year": "More than #cur*25M/Year",
};

const companyRevenueOptions = [
  {
    label: companyRevenueObj["Less than 1M/Year"],
    value: "Less than 1M/Year",
  },
  {
    label: companyRevenueObj["1-5M/Year"],
    value: "1-5M/Year",
  },
  {
    label: companyRevenueObj["5-10M/Year"],
    value: "5-10M/Year",
  },
  {
    label: companyRevenueObj["10-25M/Year"],
    value: "10-25M/Year",
  },
  {
    label: companyRevenueObj["More than 25M/Year"],
    value: "More than 25M/Year",
  },
];

const currenciesList = [
  {
    id: 1,
    name: "United States Dollar",
    code: "USD",
    symbol: "$",
    countryCode: "US",
    country: "United States",
    formatLocale: "en-US",
  },
  {
    id: 2,
    name: "Japanese Yen",
    code: "JPY",
    symbol: "�",
    countryCode: "JP",
    country: "Japan",
    formatLocale: "ja-JP",
  },
  {
    id: 3,
    name: "Bulgarian Lev",
    code: "BGN",
    symbol: "??",
    countryCode: "BG",
    country: "Bulgaria",
    formatLocale: "bg-BG",
  },
  {
    id: 4,
    name: "Czech Koruna",
    code: "CZK",
    symbol: "K?",
    countryCode: "CZ",
    country: "Czech Republic",
    formatLocale: "cs-CZ",
  },
  {
    id: 5,
    name: "Danish Krone",
    code: "DKK",
    symbol: "kr",
    countryCode: "DK",
    country: "Denmark",
    formatLocale: "da-DK",
  },
  {
    id: 6,
    name: "British Pound Sterling",
    code: "GBP",
    symbol: "�",
    countryCode: "UK",
    country: "United Kingdom",
    formatLocale: "en-GB",
  },
  {
    id: 7,
    name: "Hungarian Forint",
    code: "HUF",
    symbol: "Ft",
    countryCode: "HU",
    country: "Hungary",
    formatLocale: "hu-HU",
  },
  {
    id: 8,
    name: "Polish Z?oty",
    code: "PLN",
    symbol: "z?",
    countryCode: "PL",
    country: "Poland",
    formatLocale: "pl-PL",
  },
  {
    id: 9,
    name: "Romanian Leu",
    code: "RON",
    symbol: "lei",
    countryCode: "RO",
    country: "Romania",
    formatLocale: "ro-RO",
  },
  {
    id: 10,
    name: "Swedish Krona",
    code: "SEK",
    symbol: "kr",
    countryCode: "SE",
    country: "Sweden",
    formatLocale: "sv-SE",
  },
  {
    id: 11,
    name: "Swiss Franc",
    code: "CHF",
    symbol: "CHF",
    countryCode: "CH",
    country: "Switzerland",
    formatLocale: "de-CH",
  },
  {
    id: 12,
    name: "Icelandic Kr�na",
    code: "ISK",
    symbol: "kr",
    countryCode: "IS",
    country: "Iceland",
    formatLocale: "is-IS",
  },
  {
    id: 13,
    name: "Norwegian Krone",
    code: "NOK",
    symbol: "kr",
    countryCode: "NO",
    country: "Norway",
    formatLocale: "nb-NO",
  },
  {
    id: 14,
    name: "Turkish Lira",
    code: "TRY",
    symbol: "?",
    countryCode: "TR",
    country: "Turkey",
    formatLocale: "tr-TR",
  },
  {
    id: 15,
    name: "Australian Dollar",
    code: "AUD",
    symbol: "A$",
    countryCode: "AU",
    country: "Australia",
    formatLocale: "en-AU",
  },
  {
    id: 16,
    name: "Brazilian Real",
    code: "BRL",
    symbol: "R$",
    countryCode: "BR",
    country: "Brazil",
    formatLocale: "pt-BR",
  },
  {
    id: 17,
    name: "Canadian Dollar",
    code: "CAD",
    symbol: "CA$",
    countryCode: "CA",
    country: "Canada",
    formatLocale: "en-CA",
  },
  {
    id: 18,
    name: "Chinese Renminbi",
    code: "CNY",
    symbol: "�",
    countryCode: "CN",
    country: "China",
    formatLocale: "zh-CN",
  },
  {
    id: 19,
    name: "Hong Kong Dollar",
    code: "HKD",
    symbol: "HK$",
    countryCode: "HK",
    country: "Hong Kong",
    formatLocale: "zh-HK",
  },
  {
    id: 20,
    name: "Indonesian Rupiah",
    code: "IDR",
    symbol: "Rp",
    countryCode: "ID",
    country: "Indonesia",
    formatLocale: "id-ID",
  },
  {
    id: 21,
    name: "Israeli New Shekel",
    code: "ILS",
    symbol: "?",
    countryCode: "IL",
    country: "Israel",
    formatLocale: "he-IL",
  },
  {
    id: 22,
    name: "Indian Rupee",
    code: "INR",
    symbol: "?",
    countryCode: "IN",
    country: "India",
    formatLocale: "en-IN",
  },
  {
    id: 23,
    name: "South Korean Won",
    code: "KRW",
    symbol: "?",
    countryCode: "KR",
    country: "South Korea",
    formatLocale: "ko-KR",
  },
  {
    id: 24,
    name: "Mexican Peso",
    code: "MXN",
    symbol: "Mex$",
    countryCode: "MX",
    country: "Mexico",
    formatLocale: "es-MX",
  },
  {
    id: 25,
    name: "Malaysian Ringgit",
    code: "MYR",
    symbol: "RM",
    countryCode: "MY",
    country: "Malaysia",
    formatLocale: "ms-MY",
  },
  {
    id: 26,
    name: "New Zealand Dollar",
    code: "NZD",
    symbol: "NZ$",
    countryCode: "NZ",
    country: "New Zealand",
    formatLocale: "en-NZ",
  },
  {
    id: 27,
    name: "Philippine Peso",
    code: "PHP",
    symbol: "?",
    countryCode: "PH",
    country: "Philippines",
    formatLocale: "en-PH",
  },
  {
    id: 28,
    name: "Singapore Dollar",
    code: "SGD",
    symbol: "S$",
    countryCode: "SG",
    country: "Singapore",
    formatLocale: "en-SG",
  },
  {
    id: 29,
    name: "Thai Baht",
    code: "THB",
    symbol: "?",
    countryCode: "TH",
    country: "Thailand",
    formatLocale: "th-TH",
  },
  {
    id: 30,
    name: "South African Rand",
    code: "ZAR",
    symbol: "R",
    countryCode: "ZA",
    country: "South Africa",
    formatLocale: "en-ZA",
  },
  {
    id: 31,
    name: "European Union Euro",
    code: "EUR",
    symbol: "�",
    countryCode: "EU",
    country: "European Union",
    formatLocale: "de-DE",
  },
];

const SubscriptionTypeKeys = {
  Customer: "Customer",
  Prospect: "Prospect",
};

const SubscriptionTypeOptions = [
  {
    label: SubscriptionTypeKeys.Customer,
    value: SubscriptionTypeKeys.Customer,
    description: "Assign if the referral corresponds to an existing customer.",
  },
  {
    label: SubscriptionTypeKeys.Prospect,
    value: SubscriptionTypeKeys.Prospect,
    description: "Assign if the referral is for a new or unknown contact.",
  },
];

const INDUSTRY_API_URL =
  "https://api-beta.channelboost.com/sc/directory/industries";
const SOFTWARES_API_URL =
  "https://api-beta.channelboost.com/sc/directory/softwares";
const PRODUCTS_API_URL =
  "https://api-beta.channelboost.com/sp/setup/directory/formData";
const FORM_MAPPING_API_URL = "http://localhost:8080/sp/sc/setting/customForm";

const getAllIndustriesList = async (tenantId) => {
  try {
    const url = tenantId
      ? `${INDUSTRY_API_URL}?tenantId=${tenantId}`
      : INDUSTRY_API_URL;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching industries:", error);
    return null;
  }
};
const getAllSoftwaresList = async (tenantId) => {
  try {
    const url = tenantId
      ? `${SOFTWARES_API_URL}?tenantId=${tenantId}`
      : SOFTWARES_API_URL;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching softwares:", error);
    return null;
  }
};
const getAllProductsList = async (tenantId) => {
  try {
    const url = tenantId
      ? `${PRODUCTS_API_URL}?tenantId=${tenantId}`
      : PRODUCTS_API_URL;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Products:", error);
    return null;
  }
};
const getFormMapping = async (tenantId) => {
  try {
    const url = tenantId
      ? `${FORM_MAPPING_API_URL}?tenantId=${tenantId}`
      : FORM_MAPPING_API_URL;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching formData:", error);
    return null;
  }
};
const prepareIndustriesOptions = (industries) => {
  if (!industries || !Array.isArray(industries)) {
    console.warn("Invalid industry data");
    return [];
  }
  return industries.map((industry) => ({
    label: industry,
    value: industry,
  }));
};
const prepareSoftwareOptions = (softwares) => {
  if (!softwares || !Array.isArray(softwares)) {
    console.warn("Invalid Softwares data");
    return [];
  }
  return softwares.map((softwares) => ({
    label: softwares,
    value: softwares,
  }));
};
const prepareProductOptions = (products) => {
  if (!products || !Array.isArray(products)) {
    console.warn("Invalid Product data");
    return [];
  }
  return products?.map(({ name, ...p }) => {
    return { ...p, label: name, value: name };
  });
};

const getCountryList = () => {
  return [
    { label: "United States", value: "United States" },
    { label: "Canada", value: "Canada" },
  ];
};

(function () {
  function getScriptParams() {
    let scripts = document.getElementsByTagName("script");
    for (let script of scripts) {
      if (script.src.includes("embeddingform")) {
        let urlParams = new URL(script.src).searchParams;
        return {
          userId: urlParams.get("uid"),
          formId: urlParams.get("formId"),
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
  const FORM_ID = getScriptParams()?.formId;
  const FORM_CONTAINER_IDs = [
    `channelboost-form-container-${FORM_ID}`,
    `channelboost-form-container-456`,
  ];
  let urlCode = getUrlParams("urlCode") || "";

  async function fetchFormMapping() {
    try {
      const response = await getFormMapping(TENANT_ID);
      const formMapping = response?.data?.customForm?.formMapping;
      //   console.log(formMapping);
      return formMapping;
    } catch (error) {
      console.error("Error fetching industries:", error);
      return [];
    }
    // return fetchedFormMapping;
  }
  const getCurrency = () => {
    let currencyObj = localStorage.getItem("currency");
    if (currencyObj) {
      return JSON.parse(currencyObj);
    }
    let obj = getSelectedCurrencyObj();
    return obj;
  };

  const getSelectedCurrencyObj = (currencyCode = "USD") => {
    let obj = currenciesList.find((x) => x.code === currencyCode);
    return obj;
  };

  const replaceCurrencyInLabel = (label) => {
    let currencyObj = getCurrency();
    return label?.replaceAll("#cur*", currencyObj.symbol);
  };

  async function fetchOptionsForField(field) {
    switch (field.id) {
      case 10: {
        try {
          const response = await getAllIndustriesList(TENANT_ID);
          const industryOptions = prepareIndustriesOptions(
            response?.data?.industryList
          );

          return {
            options: industryOptions,
            selectedOption: [],
          };
        } catch (error) {
          console.error("Error fetching industries:", error);
          return {
            options: [],
            selectedOption: [],
          };
        }
      }

      case 12: {
        try {
          const response = await getAllSoftwaresList(TENANT_ID);
          const softwareOptions = prepareSoftwareOptions(
            response?.data?.softwareList
          );
          return {
            options: softwareOptions,
            selectedOption: [],
          };
        } catch (error) {
          console.error("Error fetching softwares:", error);
          return {
            options: [],
            selectedOption: [],
          };
        }
      }
      case 21: {
        try {
          const response = await getAllProductsList(TENANT_ID);
          const productOptions = prepareProductOptions(
            response?.data?.productSetting
          );
          return {
            options: productOptions,
            selectedOption: [],
          };
        } catch (error) {
          console.error("Error fetching products:", error);
          return {
            options: [],
            selectedOption: [],
          };
        }
      }
      case 23:
        return {
          options: SubscriptionTypeOptions,
          selectedOption: [],
        };
      case 5:
        return {
          options: leadStatuses?.map((status) => {
            return {
              label: status,
              value: status,
            };
          }),
          selectedOption: { label: "New", value: "New" },
        };
      case 7:
        return {
          options: serviceCategoryOptions,
          selectedOption: [],
        };
      case 9:
        return {
          options: dropdownBudgetOptions.map((x) => ({
            ...x,
            label: replaceCurrencyInLabel(x.label),
          })),
          selectedOption: [],
        };
      case 11:
        return {
          options: [{ label: "Select", value: "" }, ...getCountryList()],
          selectedOption: [],
        };
      case 13:
        return {
          options: companySizeOptions,
          selectedOption: [],
        };
      case 16:
        return {
          options: [
            { label: "Email", value: "Email" },
            { label: "Phone", value: "Phone" },
            { label: "Offline", value: "Offline" },
          ],
          selectedOption: [],
        };
      case 18:
        return {
          options: serviceTimingOptions,
          selectedOption: [],
        };
      case 14:
        return {
          options: companyRevenueOptions.map((x) => ({
            ...x,
            label: replaceCurrencyInLabel(x.label),
          })),
          selectedOption: [],
        };
      case 19:
        return {
          options: [
            { label: "English", value: "en" },
            { label: "Spanish", value: "es" },
            { label: "Portuguese", value: "pt" },
            { label: "French", value: "fr" },
            { label: "German", value: "de" },
            { label: "Italian", value: "it" },
            { label: "Japanese", value: "ja" },
            { label: "Hindi", value: "hi" },
            { label: "Arabic", value: "ar" },
            { label: "Chinese", value: "zh" },
          ],
          selectedOption: [{ label: "English", value: "en" }],
        };
      default:
        return {
          options: [
            { value: "1", label: "Option 1" },
            { value: "2", label: "Option 2" },
            { value: "3", label: "Option 3" },
            { value: "4", label: "Option 4" },
          ],
          selectionOption: [],
        };
    }
  }

  function createMultiSelectField(field, options) {
    const wrapper = document.createElement("div");
    wrapper.classList.add("multi-select-wrapper");
    wrapper.style.position = "relative";
    wrapper.style.border = "1px solid #ccc";
    wrapper.style.padding = "5px";
    wrapper.style.cursor = "pointer";
    wrapper.style.backgroundColor = "#fff";
    wrapper.addEventListener("click", positionDropdown);

    const selectedContainer = document.createElement("div");
    selectedContainer.classList.add("selected-options");
    selectedContainer.style.minHeight = "24px";
    selectedContainer.style.display = "flex";
    selectedContainer.style.flexWrap = "wrap";
    selectedContainer.style.backgroundColor = "#fff";
    wrapper.appendChild(selectedContainer);

    const dropdown = document.createElement("div");
    dropdown.classList.add("dropdown-options");
    dropdown.style.position = "absolute";
    dropdown.style.left = "0";
    dropdown.style.right = "0";
    dropdown.style.border = "1px solid #e6e7e9";
    dropdown.style.background = "white";
    dropdown.style.display = "none";
    dropdown.style.maxHeight = "300px";
    dropdown.style.overflowY = "auto";
    dropdown.style.zIndex = "10";
    dropdown.style.borderRadius = "8px";
    dropdown.style.padding = "2px";
    dropdown.style.marginTop = "4px";
    dropdown.style.marginBottom = "4px";
    wrapper.appendChild(dropdown);

    const searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.placeholder = "Search...";
    searchInput.style.width = "100%";
    searchInput.style.padding = "8px";
    searchInput.style.borderBottom = "1px solid #ccc";
    searchInput.addEventListener("keyup", filterOptions);
    dropdown.appendChild(searchInput);

    function positionDropdown() {
      dropdown.style.display = "block";
      const rect = wrapper.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      const spaceAbove = rect.top;
      if (spaceBelow < 350 && spaceAbove > spaceBelow) {
        dropdown.style.bottom = "100%";
        dropdown.style.top = "auto";
      } else {
        dropdown.style.top = "100%";
        dropdown.style.bottom = "auto";
      }
    }

    function updateDropdown() {
      dropdown.innerHTML = "";
      dropdown.appendChild(searchInput);
      options.forEach((option) => {
        if (
          !selectedContainer.querySelector(`[data-value='${option.value}']`)
        ) {
          const optionElement = document.createElement("div");
          optionElement.textContent = option.label;
          optionElement.style.padding = "8px 16px";
          optionElement.style.cursor = "pointer";
          optionElement.style.textAlign = "left";
          optionElement.style.transition = "background 0.2s ease-in-out";
          optionElement.style.borderRadius = "8px";
          optionElement.setAttribute("data-value", option.value);
          optionElement.addEventListener("mouseenter", () => {
            optionElement.style.background = "#e7fafd";
          });
          optionElement.addEventListener("mouseleave", () => {
            optionElement.style.background = "transparent";
          });
          optionElement.addEventListener("click", (e) => {
            e.stopPropagation();
            const selectedItem = document.createElement("div");
            selectedItem.classList.add("selected-item");
            selectedItem.setAttribute("data-value", option.value);
            selectedItem.style.display = "flex";
            selectedItem.style.alignItems = "center";
            selectedItem.style.padding = "4px 8px";
            selectedItem.style.margin = "2px";
            selectedItem.style.background = "#f3f7ff";
            selectedItem.style.border = "1px solid #dee8f8";
            selectedItem.style.borderRadius = "16px";
            selectedItem.style.cursor = "pointer";
            selectedItem.textContent = option.label;

            const removeButton = document.createElement("span");
            removeButton.textContent = "x";
            removeButton.style.marginLeft = "4px";
            removeButton.style.cursor = "pointer";
            removeButton.style.color = "#383f47";
            removeButton.style.padding = "4px";
            removeButton.style.fontWeight = "bold";
            removeButton.addEventListener("click", (e) => {
              e.stopPropagation();
              selectedContainer.removeChild(selectedItem);
              updateDropdown();
            });
            selectedItem.appendChild(removeButton);
            selectedContainer.appendChild(selectedItem);
            updateDropdown();
          });
          dropdown.appendChild(optionElement);
        }
      });
    }

    function filterOptions() {
      const searchValue = searchInput.value.toLowerCase();
      Array.from(dropdown.children).forEach((option) => {
        if (option !== searchInput) {
          option.style.display = option.textContent
            .toLowerCase()
            .includes(searchValue)
            ? "block"
            : "none";
        }
      });
    }

    updateDropdown();

    document.addEventListener("click", (event) => {
      if (!wrapper.contains(event.target) && event.target !== searchInput) {
        dropdown.style.display = "none";
      }
    });

    return wrapper;
  }

  async function createForm(FORM_CONTAINER_ID) {
    const formMapping = await fetchFormMapping();
    const formContainer = document.getElementById(FORM_CONTAINER_ID);
    if (!formContainer) return;

    const form = document.createElement("form");
    form.id = "customForm";
    // form.style.maxWidth = "400px";
    form.style.margin = "16px";

    for (let field of formMapping) {
      if (!field.added) continue;
      const label = document.createElement("label");
      label.textContent = field.name + (field.isRequired ? " *" : "");
      label.htmlFor = field.defaultKeyName;
      label.style.fontWeight = "500";
      label.style.color = "#5e6977";
      label.style.textAlign = "left";
      label.style.fontSize = "14px";
      label.style.display = "block";
      label.style.marginBottom = "6px";
      form.appendChild(label);

      let input;
      if (field.fieldType === "singleSelectDropDown") {
        input = document.createElement("select");
        const { options, selectionOption } = await fetchOptionsForField(field);
        options.forEach((option) => {
          const opt = document.createElement("option");
          opt.value = option.value;
          opt.textContent = option.label;
          input.appendChild(opt);
        });
      } else if (field.fieldType === "multiSelectDropDown") {
        const { options, selectionOption } = await fetchOptionsForField(field);
        input = createMultiSelectField(field, options);
      } else {
        input = document.createElement("input");
        input.type = field.fieldType === "phoneInput" ? "tel" : "text";
      }

      input.id = field.defaultKeyName;
      input.name = field.defaultKeyName;
      input.placeholder = field.placeholder;
      input.required = field.isRequired;
      input.style.display = "block";
      input.style.width = "100%";
      input.style.padding = "8px 16px";
      input.style.border = "1px solid #c4ccd8";
      input.style.borderRadius = "8px";
      input.style.marginBottom = "10px";
      form.appendChild(input);
    }

    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Submit";
    submitButton.style.display = "block";
    submitButton.style.marginTop = "20px";
    submitButton.style.padding = "8px 16px";
    submitButton.style.border = "1px solid #0C94AC";
    submitButton.style.fontWeight = "500";
    submitButton.style.backgroundColor = "#0C94AC";
    submitButton.style.color = "#fff";
    submitButton.style.borderRadius = "5px";
    submitButton.style.cursor = "pointer";
    submitButton.style.justifySelf = "right";
    form.appendChild(submitButton);

    form.addEventListener("submit", async function (event) {
      event.preventDefault();
      const formData = {};

      formMapping.forEach((field) => {
        if (field?.fieldType === "multiSelectDropDown") {
          // Locate the multi-select wrapper by field ID
          const selectedContainer = document.querySelector(
            `#${field?.defaultKeyName} .selected-options`
          );

          if (selectedContainer) {
            const selectedItems = Array.from(selectedContainer.children).map(
              (el) => el.getAttribute("data-value")
            );
            formData[field?.defaultKeyName] = selectedItems;
          } else {
            formData[field?.defaultKeyName] = [];
          }
        } else {
          const inputElement = document?.getElementById(field?.defaultKeyName);
          formData[field?.defaultKeyName] = inputElement?.value || "";
        }
      });

      try {
        const response = await fetch(
          "https://api-beta.channelboost.com/sc/matchMakingRequest/addFromForm",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              ...formData,
              tenantId: TENANT_ID,
              requestType: "Lead",
              campaignCode: urlCode,
            }),
          }
        );

        const res = await response.json();
        if (res.code === 200 && res.success) {
          window.trackify.trackEvent(FORM_ID, {
            tid: TENANT_ID,
            leadId: res?.data?.matchMakingRequest?.leadDTOList[0]?.id,
          });
          console.log(res.message || "Form submitted successfully!");
        }
      } catch (error) {
        console.log("Error submitting form:", error);
      }
    });

    formContainer.appendChild(form);
  }
  for (let FORM_CONTAINER_ID of FORM_CONTAINER_IDs) {
    const checkExist = setInterval(() => {
      if (document.getElementById(FORM_CONTAINER_ID)) {
        createForm(FORM_CONTAINER_ID);
        clearInterval(checkExist);
      } else {
        console.warn("Waiting for form container...");
        return;
      }
    }, 500);
  }
})();
