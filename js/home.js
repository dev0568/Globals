// Home onLoad
$(document).ready(function () {
  tinyi18n.loadTranslations("./translation/i18n.json");
  const appLanguage = localStorage?.getItem("lang");
  if (appLanguage == "fr") {
    $(".threecard p").css("margin-bottom", "80px");
  } else {
    $(".threecard p").css("margin-bottom", "10px");
  }
  document
    .getElementById("headerunited")
    .setAttribute("src", getImageUrl("HeaderRightImage", appLanguage));
  document
    .getElementById("headerunited2")
    .setAttribute("src", getImageUrl("HeaderRightImage", appLanguage));
  document
    .getElementById("footerglobal")
    .setAttribute("src", getImageUrl("FooterLeftImage", appLanguage));
  // document.getElementById('footerunited').setAttribute('src', getImageUrl("FooterRightImage", appLanguage))
  document
    .getElementById("Guide")
    .setAttribute("src", getImageUrl("GuideImage", appLanguage));
  document
    .getElementById("Booklet")
    .setAttribute("src", getImageUrl("BookletImage", appLanguage));
  document
    .getElementById("card1img")
    .setAttribute("src", getImageUrl("card1", appLanguage));
  document
    .getElementById("card2img")
    .setAttribute("src", getImageUrl("card2", appLanguage));
  document
    .getElementById("card3img")
    .setAttribute("src", getImageUrl("card3", appLanguage));
  // document.getElementById('slide1img').setAttribute('src', getImageUrl("slide1imgLink", appLanguage))

  // Links
  document
    .getElementById("HeaderRightLink")
    .setAttribute("href", getAnchorLInk("HeaderRightImageLink", appLanguage));
  document
    .getElementById("HeaderLeftLink")
    .setAttribute("href", getAnchorLInk("HeaderLeftImageLink", appLanguage));
  // document.getElementById('FooterLeftLink').setAttribute('href', getAnchorLInk("FooterLeftImageLink", appLanguage));
  // document.getElementById('FooterRightLink').setAttribute('href', getAnchorLInk("FooterRightImageLink", appLanguage));
  document
    .getElementById("copyRight")
    .setAttribute("href", getAnchorLInk("copyRightImageLink", appLanguage));
  document
    .getElementById("fraudAlert")
    .setAttribute("href", getAnchorLInk("fraudAlertImageLink", appLanguage));
  document
    .getElementById("PrivacyNotice")
    .setAttribute("href", getAnchorLInk("PrivacyNoticeImageLink", appLanguage));
  document
    .getElementById("termsofUse")
    .setAttribute("href", getAnchorLInk("termsofUseImageLink", appLanguage));
  // footerlinks
  document
    .getElementById("UNNLink")
    .setAttribute("href", getAnchorLInk("UNNfooterLink", appLanguage));
  document
    .getElementById("GCMImmplementLink")
    .setAttribute(
      "href",
      getAnchorLInk("GCMImmplementfooterLink", appLanguage)
    );
  document
    .getElementById("MigrationNetHubLink")
    .setAttribute(
      "href",
      getAnchorLInk("MigrationNetHubfooterLink", appLanguage)
    );
  document
    .getElementById("NutshellLink")
    .setAttribute("href", getAnchorLInk("NutshellfooterLink", appLanguage));
  document
    .getElementById("PledgesLink")
    .setAttribute("href", getAnchorLInk("PledgesLinkfooterLink", appLanguage));
  document
    .getElementById("RepoofPracticeLink")
    .setAttribute(
      "href",
      getAnchorLInk("RepoofPracticefooterLink", appLanguage)
    );
  document
    .getElementById("TrustFundLink")
    .setAttribute("href", getAnchorLInk("TrustFundfooterLink", appLanguage));
  document
    .getElementById("InternationalMigrationLink")
    .setAttribute(
      "href",
      getAnchorLInk("InternationalMigrationfooterLink", appLanguage)
    );
  document
    .getElementById("EventsLink")
    .setAttribute("href", getAnchorLInk("EventsfooterLink", appLanguage));
  $(".guidepdf").attr("href", getImageUrl("GuidepdfKey", appLanguage));
  $(".bookletpdf").attr("href", getImageUrl("BookletpdfKey", appLanguage));
});
// Home onLoad end

// on Language Change
function changeFunc(selectedValue) {
  var selectBox = document.getElementById("selectBox");
  var selectedValue = selectedValue || "en";
  tinyi18n.setLang(selectedValue);
  localStorage?.setItem("lang", selectedValue);
  const printedText =
    selectedValue === "fr"
      ? "Français"
      : selectedValue === "spa"
      ? "Español"
      : "English";
  $("#dropdowntext").text(printedText);
  if (selectedValue == "fr") {
    $(".threecard p").css("margin-bottom", "80px");
  } else {
    $(".threecard p").css("margin-bottom", "10px");
  }
  // Imgages
  document
    .getElementById("headerunited")
    .setAttribute("src", getImageUrl("HeaderRightImage", selectedValue));
  document
    .getElementById("headerunited2")
    .setAttribute("src", getImageUrl("HeaderRightImage", selectedValue));
  document
    .getElementById("footerglobal")
    .setAttribute("src", getImageUrl("FooterLeftImage", selectedValue));
  // document.getElementById('footerunited').setAttribute('src', getImageUrl("FooterRightImage", selectedValue))
  document
    .getElementById("Guide")
    .setAttribute("src", getImageUrl("GuideImage", selectedValue));
  document
    .getElementById("Booklet")
    .setAttribute("src", getImageUrl("BookletImage", selectedValue));
  document
    .getElementById("card1img")
    .setAttribute("src", getImageUrl("card1", selectedValue));
  document
    .getElementById("card2img")
    .setAttribute("src", getImageUrl("card2", selectedValue));
  document
    .getElementById("card3img")
    .setAttribute("src", getImageUrl("card3", selectedValue));
  // document.getElementById('slide1img').setAttribute('src', getImageUrl("slide1imgLink", selectedValue))

  // Links
  document
    .getElementById("HeaderRightLink")
    .setAttribute("href", getAnchorLInk("HeaderRightImageLink", selectedValue));
  document
    .getElementById("HeaderLeftLink")
    .setAttribute("href", getAnchorLInk("HeaderLeftImageLink", selectedValue));
  // document.getElementById('FooterLeftLink').setAttribute('href', getAnchorLInk("FooterLeftImageLink", selectedValue));
  // document.getElementById('FooterRightLink').setAttribute('href', getAnchorLInk("FooterRightImageLink", selectedValue));
  document
    .getElementById("copyRight")
    .setAttribute("href", getAnchorLInk("copyRightImageLink", selectedValue));
  document
    .getElementById("fraudAlert")
    .setAttribute("href", getAnchorLInk("fraudAlertImageLink", selectedValue));
  document
    .getElementById("PrivacyNotice")
    .setAttribute(
      "href",
      getAnchorLInk("PrivacyNoticeImageLink", selectedValue)
    );
  document
    .getElementById("termsofUse")
    .setAttribute("href", getAnchorLInk("termsofUseImageLink", selectedValue));
  // footerlinks
  document
    .getElementById("UNNLink")
    .setAttribute("href", getAnchorLInk("UNNfooterLink", selectedValue));
  document
    .getElementById("GCMImmplementLink")
    .setAttribute(
      "href",
      getAnchorLInk("GCMImmplementfooterLink", selectedValue)
    );
  document
    .getElementById("MigrationNetHubLink")
    .setAttribute(
      "href",
      getAnchorLInk("MigrationNetHubfooterLink", selectedValue)
    );
  document
    .getElementById("NutshellLink")
    .setAttribute("href", getAnchorLInk("NutshellfooterLink", selectedValue));
  document
    .getElementById("PledgesLink")
    .setAttribute(
      "href",
      getAnchorLInk("PledgesLinkfooterLink", selectedValue)
    );
  document
    .getElementById("RepoofPracticeLink")
    .setAttribute(
      "href",
      getAnchorLInk("RepoofPracticefooterLink", selectedValue)
    );
  document
    .getElementById("TrustFundLink")
    .setAttribute("href", getAnchorLInk("TrustFundfooterLink", selectedValue));
  document
    .getElementById("InternationalMigrationLink")
    .setAttribute(
      "href",
      getAnchorLInk("InternationalMigrationfooterLink", selectedValue)
    );
  document
    .getElementById("EventsLink")
    .setAttribute("href", getAnchorLInk("EventsfooterLink", selectedValue));
  $(".guidepdf").attr("href", getImageUrl("GuidepdfKey", selectedValue));
  $(".bookletpdf").attr("href", getImageUrl("BookletpdfKey", selectedValue));
}
// End on Language change

const translatedImages = {
  HeaderRightImage: {
    en: "./images/UNNM-Logo-TAG.png",
    fr: "./images/french_logo_PNG3.png",
    spa: "./images/spanish_logo_PNG3.png",
  },
  FooterRightImage: {
    en: "./images/UNNM-Logo-TAG.png",
    fr: "./images/french/2.png",
    spa: "./images/spanish/2.png",
  },
  FooterLeftImage: {
    en: "./images/GCM_LOGO_Horizontal_EN.jpg",
    fr: "./images/GCM_LOGO_Horizontal_FR.jpg",
    spa: "./images/GCM_LOGO_Horizontal_SP.jpg",
  },
  GuideImage: {
    en: "./images/guide.png",
    fr: "./images/french/COVERS fr_GUIDE_page1.svg",
    spa: "./images/spanish/SPANISH_COVER_GUIA.jpg",
  },
  BookletImage: {
    en: "./images/booklet.png",
    fr: "./images/french/COVERS fr_BROCHURE_page1.svg",
    spa: "./images/spanish/SPANISH_COVER_CUADERNO.jpg",
  },
  card1: {
    en: "./images/pic2_EN.jpg",
    fr: "./images/french/home/PMM_PRINCIPESDIRECTEURS_FR.jpg",
    spa: "./images/spanish/00_GCM_box_Guiding_Principles.jpg",
  },
  card2: {
    en: "./images/GCMbox2.svg",
    fr: "./images/french/home/PMM_OBJECTIFS_FR.jpg",
    spa: "./images/spanish/thirdimg.jpg",
  },
  card3: {
    en: "./images/pic1_EN_.jpg",
    fr: "./images/french/home/6-step-French.jpg",
    spa: "./images/spanish/6STEPPROCESS_ES_1.jpg",
  },
  slide1imgLink: {
    en: "./images/Frame2.png",
    fr: "./images/slider/homepage_image_FR.png",
    spa: "./images/slider/homepage_image_SP.png",
  },
  GuidepdfKey: {
    en: "./pdf/guide.pdf",
    fr: "./pdf/French/guide_PDF_FR.pdf",
    spa: "./pdf/Spanish/guide_PDF_ES.pdf",
  },
  BookletpdfKey: {
    en: "./pdf/booklet.pdf",
    fr: "./pdf/French/booklet_PDF_FR.pdf",
    spa: "./pdf/Spanish/booklet_PDF_ES.pdf",
  },
};

const translatedLinks = {
  HeaderRightImageLink: {
    en: "https://migrationnetwork.un.org",
    fr: "https://migrationnetwork.un.org/fr",
    spa: "https://migrationnetwork.un.org/es",
  },
  HeaderLeftImageLink: {
    en: "https://migrationnetwork.un.org/migration-network-hub",
    fr: "https://migrationnetwork.un.org/fr/migration-network-hub",
    spa: "https://migrationnetwork.un.org/es/migration-network-hub",
  },
  FooterLeftImageLink: {
    en: "https://migrationnetwork.un.org/migration-network-hub",
    fr: "https://migrationnetwork.un.org/fr/migration-network-hub",
    spa: "https://migrationnetwork.un.org/es/migration-network-hub",
  },
  FooterRightImageLink: {
    en: "https://migrationnetwork.un.org",
    fr: "https://migrationnetwork.un.org/fr",
    spa: "https://migrationnetwork.un.org/es",
  },
  copyRightImageLink: {
    en: "https://www.un.org/en/about-us/copyright",
    fr: "https://www.un.org/fr/about-us/copyright",
    spa: "https://www.un.org/es/about-us/copyright",
  },
  fraudAlertImageLink: {
    en: "https://www.un.org/en/about-us/fraud-alert",
    fr: "https://www.un.org/fr/about-us/fraud-alert",
    spa: "https://www.un.org/es/about-us/fraud-alert",
  },
  PrivacyNoticeImageLink: {
    en: "https://www.un.org/en/about-us/privacy-notice",
    fr: "https://www.un.org/fr/about-us/privacy-notice",
    spa: "https://www.un.org/es/about-us/privacy-notice",
  },
  termsofUseImageLink: {
    en: "https://www.un.org/en/about-us/terms-of-use",
    fr: "https://www.un.org/fr/about-us/terms-of-use",
    spa: "https://www.un.org/es/about-us/terms-of-use",
  },
  UNNfooterLink: {
    en: "https://migrationnetwork.un.org",
    fr: "https://migrationnetwork.un.org/fr",
    spa: "https://migrationnetwork.un.org/es",
  },
  GCMImmplementfooterLink: {
    en: "https://migrationnetwork.un.org/gcm-guidance",
    fr: "https://migrationnetwork.un.org/fr/gcm-guidance",
    spa: "https://migrationnetwork.un.org/es/gcm-guidance",
  },
  MigrationNetHubfooterLink: {
    en: "https://migrationnetwork.un.org/migration-network-hub",
    fr: "https://migrationnetwork.un.org/fr/migration-network-hub",
    spa: "https://migrationnetwork.un.org/es/migration-network-hub",
  },
  NutshellfooterLink: {
    en: "https://migrationnetwork.un.org/global-compact-for-migration",
    fr: "https://migrationnetwork.un.org/fr/node/2312",
    spa: "https://migrationnetwork.un.org/es/global-compact-for-migration",
  },
  PledgesLinkfooterLink: {
    en: "https://migrationnetwork.un.org/the-pledging-dashboard",
    fr: "https://migrationnetwork.un.org/fr/the-pledging-dashboard",
    spa: "https://migrationnetwork.un.org/es/the-pledging-dashboard",
  },
  RepoofPracticefooterLink: {
    en: "https://migrationnetwork.un.org/hub/repository-of-practices",
    fr: "https://migrationnetwork.un.org/fr/hub/repository-of-practices",
    spa: "https://migrationnetwork.un.org/es/hub/repository-of-practices",
  },
  TrustFundfooterLink: {
    en: "https://migrationnetwork.un.org/mptf",
    fr: "https://migrationnetwork.un.org/fr/mptf",
    spa: "https://migrationnetwork.un.org/es/mptf",
  },
  InternationalMigrationfooterLink: {
    en: "https://migrationnetwork.un.org/international-migration-review-forum-2022",
    fr: "https://migrationnetwork.un.org/fr/node/2313",
    spa: "https://migrationnetwork.un.org/es/node/2313",
  },
  EventsfooterLink: {
    en: "https://migrationnetwork.un.org/events",
    fr: "https://migrationnetwork.un.org/fr/events",
    spa: "https://migrationnetwork.un.org/es/events",
  },
};
// For images acc to selected language
var getImageUrl = (objectKey, lang) => {
  const imageObject = translatedImages[objectKey];
  return imageObject[lang];
};

const getAnchorLInk = (url, lang) => {
  const LinkUrl = translatedLinks[url];
  return LinkUrl[lang];
};
