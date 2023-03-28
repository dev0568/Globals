// on load
$(document).ready(function () {
  tinyi18n.loadTranslations("./translation/i18n.json");
  const appLanguage = localStorage?.getItem("lang");

  // img
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
  $(".migrationnetworkLink").attr(
    "href",
    getAnchorLInk("migrationnetworkLinkKey", appLanguage)
  );
  document
    .getElementById("firstaccordianLink")
    .setAttribute("href", getAnchorLInk("firstaccordianKeyLink", appLanguage));
  document
    .getElementById("secondaccordianLink")
    .setAttribute("href", getAnchorLInk("secondaccordianKeyLink", appLanguage));
  document
    .getElementById("thirdaccordianLink")
    .setAttribute("href", getAnchorLInk("thirdaccordianKeyLink", appLanguage));
  $("#firstaccordianLink").text(
    getAnchorLInk("firstaccordianKeyLink", appLanguage)
  );
  $("#secondaccordianLink").text(
    getAnchorLInk("secondaccordianKeyLink", appLanguage)
  );
  $("#thirdaccordianLink").text(
    getAnchorLInk("thirdaccordianKeyLink", appLanguage)
  );
  // 1
  document
    .getElementById("accor1p1link")
    .setAttribute("href", getAnchorLInk("accor1p1linkKey", appLanguage));
  document
    .getElementById("accor1p2link")
    .setAttribute("href", getAnchorLInk("accor1p2linkKey", appLanguage));
  document
    .getElementById("accor1p3link")
    .setAttribute("href", getAnchorLInk("accor1p3linkKey", appLanguage));
  $("#accor1p1link").text(getAnchorLInk("accor1p1linkKey", appLanguage));
  $("#accor1p2link").text(getAnchorLInk("accor1p2linkKey", appLanguage));
  $("#accor1p3link").text(getAnchorLInk("accor1p3linkKey", appLanguage));
  // 2
  document
    .getElementById("accor2p1link")
    .setAttribute("href", getAnchorLInk("accor2p1linkKey", appLanguage));
  document
    .getElementById("accor2p2link")
    .setAttribute("href", getAnchorLInk("accor2p2linkKey", appLanguage));
  document
    .getElementById("accor2p3link")
    .setAttribute("href", getAnchorLInk("accor2p3linkKey", appLanguage));
  $("#accor2p3link").text(getAnchorLInk("accor2p3linkKey", appLanguage));
  document
    .getElementById("accor2p4link")
    .setAttribute("href", getAnchorLInk("accor2p4linkKey", appLanguage));
  document
    .getElementById("accor2p5link")
    .setAttribute("href", getAnchorLInk("accor2p5linkKey", appLanguage));
  $("#accor2p1link").text(getAnchorLInk("accor2p1linkKey", appLanguage));
  $("#accor2p2link").text(getAnchorLInk("accor2p2linkKey", appLanguage));
  $("#accor2p3link").text(getAnchorLInk("accor2p3linkKey", appLanguage));
  $("#accor2p4link").text(getAnchorLInk("accor2p4linkKey", appLanguage));
  $("#accor2p5link").text(getAnchorLInk("accor2p5linkKey", appLanguage));
  // 3
  document
    .getElementById("accor3p1link")
    .setAttribute("href", getAnchorLInk("accor3p1linkKey", appLanguage));
  document
    .getElementById("accor3p2link")
    .setAttribute("href", getAnchorLInk("accor3p2linkKey", appLanguage));
  document
    .getElementById("accor3p3link")
    .setAttribute("href", getAnchorLInk("accor3p3linkKey", appLanguage));
  $("#accor3p1link").text(getAnchorLInk("accor3p1linkKey", appLanguage));
  $("#accor3p2link").text(getAnchorLInk("accor3p2linkKey", appLanguage));
  $("#accor3p3link").text(getAnchorLInk("accor3p3linkKey", appLanguage));
  // 4
  document
    .getElementById("accor4p1link")
    .setAttribute("href", getAnchorLInk("accor4p1linkKey", appLanguage));
  document
    .getElementById("accor4p2link")
    .setAttribute("href", getAnchorLInk("accor4p2linkKey", appLanguage));
  document
    .getElementById("accor4p3link")
    .setAttribute("href", getAnchorLInk("accor4p3linkKey", appLanguage));
  document
    .getElementById("accor4p4link")
    .setAttribute("href", getAnchorLInk("accor4p4linkKey", appLanguage));
  $("#accor4p1link").text(getAnchorLInk("accor4p1linkKey", appLanguage));
  $("#accor4p2link").text(getAnchorLInk("accor4p2linkKey", appLanguage));
  $("#accor4p3link").text(getAnchorLInk("accor4p3linkKey", appLanguage));
  $("#accor4p4link").text(getAnchorLInk("accor4p4linkKey", appLanguage));
  // 5
  document
    .getElementById("accor5p1link")
    .setAttribute("href", getAnchorLInk("accor5p1linkKey", appLanguage));
  document
    .getElementById("accor5p2link")
    .setAttribute("href", getAnchorLInk("accor5p2linkKey", appLanguage));
  document
    .getElementById("accor5p3link")
    .setAttribute("href", getAnchorLInk("accor5p3linkKey", appLanguage));
  document
    .getElementById("accor5p4link")
    .setAttribute("href", getAnchorLInk("accor5p4linkKey", appLanguage));
  document
    .getElementById("accor5p5link")
    .setAttribute("href", getAnchorLInk("accor5p5linkKey", appLanguage));
  document
    .getElementById("accor5p6link")
    .setAttribute("href", getAnchorLInk("accor5p6linkKey", appLanguage));
  $("#accor5p1link").text(getAnchorLInk("accor5p1linkKey", appLanguage));
  $("#accor5p2link").text(getAnchorLInk("accor5p2linkKey", appLanguage));
  $("#accor5p3link").text(getAnchorLInk("accor5p3linkKey", appLanguage));
  $("#accor5p4link").text(getAnchorLInk("accor5p4linkKey", appLanguage));
  $("#accor5p5link").text(getAnchorLInk("accor5p5linkKey", appLanguage));
  $("#accor5p6link").text(getAnchorLInk("accor5p6linkKey", appLanguage));
});

// on load end

// on language change
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
  $(".migrationnetworkLink").attr(
    "href",
    getAnchorLInk("migrationnetworkLinkKey", selectedValue)
  );
  document
    .getElementById("firstaccordianLink")
    .setAttribute(
      "href",
      getAnchorLInk("firstaccordianKeyLink", selectedValue)
    );
  document
    .getElementById("secondaccordianLink")
    .setAttribute(
      "href",
      getAnchorLInk("secondaccordianKeyLink", selectedValue)
    );
  document
    .getElementById("thirdaccordianLink")
    .setAttribute(
      "href",
      getAnchorLInk("thirdaccordianKeyLink", selectedValue)
    );
  $("#firstaccordianLink").text(
    getAnchorLInk("firstaccordianKeyLink", selectedValue)
  );
  $("#secondaccordianLink").text(
    getAnchorLInk("secondaccordianKeyLink", selectedValue)
  );
  $("#thirdaccordianLink").text(
    getAnchorLInk("thirdaccordianKeyLink", selectedValue)
  );
  // 1
  document
    .getElementById("accor1p1link")
    .setAttribute("href", getAnchorLInk("accor1p1linkKey", selectedValue));
  document
    .getElementById("accor1p2link")
    .setAttribute("href", getAnchorLInk("accor1p2linkKey", selectedValue));
  document
    .getElementById("accor1p3link")
    .setAttribute("href", getAnchorLInk("accor1p3linkKey", selectedValue));
  $("#accor1p1link").text(getAnchorLInk("accor1p1linkKey", selectedValue));
  $("#accor1p2link").text(getAnchorLInk("accor1p2linkKey", selectedValue));
  $("#accor1p3link").text(getAnchorLInk("accor1p3linkKey", selectedValue));
  // 2
  document
    .getElementById("accor2p1link")
    .setAttribute("href", getAnchorLInk("accor2p1linkKey", selectedValue));
  document
    .getElementById("accor2p2link")
    .setAttribute("href", getAnchorLInk("accor2p2linkKey", selectedValue));
  document
    .getElementById("accor2p3link")
    .setAttribute("href", getAnchorLInk("accor2p3linkKey", selectedValue));
  document
    .getElementById("accor2p4link")
    .setAttribute("href", getAnchorLInk("accor2p4linkKey", selectedValue));
  document
    .getElementById("accor2p5link")
    .setAttribute("href", getAnchorLInk("accor2p5linkKey", selectedValue));
  $("#accor2p1link").text(getAnchorLInk("accor2p1linkKey", selectedValue));
  $("#accor2p2link").text(getAnchorLInk("accor2p2linkKey", selectedValue));
  $("#accor2p3link").text(getAnchorLInk("accor2p3linkKey", selectedValue));
  $("#accor2p4link").text(getAnchorLInk("accor2p4linkKey", selectedValue));
  $("#accor2p5link").text(getAnchorLInk("accor2p5linkKey", selectedValue));
  // 3
  document
    .getElementById("accor3p1link")
    .setAttribute("href", getAnchorLInk("accor3p1linkKey", selectedValue));
  document
    .getElementById("accor3p2link")
    .setAttribute("href", getAnchorLInk("accor3p2linkKey", selectedValue));
  document
    .getElementById("accor3p3link")
    .setAttribute("href", getAnchorLInk("accor3p3linkKey", selectedValue));
  $("#accor3p1link").text(getAnchorLInk("accor3p1linkKey", selectedValue));
  $("#accor3p2link").text(getAnchorLInk("accor3p2linkKey", selectedValue));
  $("#accor3p3link").text(getAnchorLInk("accor3p3linkKey", selectedValue));
  // 4
  document
    .getElementById("accor4p1link")
    .setAttribute("href", getAnchorLInk("accor4p1linkKey", selectedValue));
  document
    .getElementById("accor4p2link")
    .setAttribute("href", getAnchorLInk("accor4p2linkKey", selectedValue));
  document
    .getElementById("accor4p3link")
    .setAttribute("href", getAnchorLInk("accor4p3linkKey", selectedValue));
  document
    .getElementById("accor4p4link")
    .setAttribute("href", getAnchorLInk("accor4p4linkKey", selectedValue));
  $("#accor4p1link").text(getAnchorLInk("accor4p1linkKey", selectedValue));
  $("#accor4p2link").text(getAnchorLInk("accor4p2linkKey", selectedValue));
  $("#accor4p3link").text(getAnchorLInk("accor4p3linkKey", selectedValue));
  $("#accor4p4link").text(getAnchorLInk("accor4p4linkKey", selectedValue));

  // 5
  document
    .getElementById("accor5p1link")
    .setAttribute("href", getAnchorLInk("accor5p1linkKey", selectedValue));
  document
    .getElementById("accor5p2link")
    .setAttribute("href", getAnchorLInk("accor5p2linkKey", selectedValue));
  document
    .getElementById("accor5p3link")
    .setAttribute("href", getAnchorLInk("accor5p3linkKey", selectedValue));
  document
    .getElementById("accor5p4link")
    .setAttribute("href", getAnchorLInk("accor5p4linkKey", selectedValue));
  document
    .getElementById("accor5p5link")
    .setAttribute("href", getAnchorLInk("accor5p5linkKey", selectedValue));
  document
    .getElementById("accor5p6link")
    .setAttribute("href", getAnchorLInk("accor5p6linkKey", selectedValue));
  $("#accor5p1link").text(getAnchorLInk("accor5p1linkKey", selectedValue));
  $("#accor5p2link").text(getAnchorLInk("accor5p2linkKey", selectedValue));
  $("#accor5p3link").text(getAnchorLInk("accor5p3linkKey", selectedValue));
  $("#accor5p4link").text(getAnchorLInk("accor5p4linkKey", selectedValue));
  $("#accor5p5link").text(getAnchorLInk("accor5p5linkKey", selectedValue));
  $("#accor5p6link").text(getAnchorLInk("accor5p6linkKey", selectedValue));
}
// on language change end

const translatedImages = {
  // img
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
    fr: "https://migrationnetwork.un.org/fr/global-compact-for-migration",
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
  migrationnetworkLinkKey: {
    en: "https://migrationnetwork.un.org/migration-network-hub",
    fr: "https://migrationnetwork.un.org/fr/migration-network-hub",
    spa: "https://migrationnetwork.un.org/es/migration-network-hub",
  },
  firstaccordianKeyLink: {
    en: "https://migrationnetwork.un.org/migration-network-hub",
    fr: "https://migrationnetwork.un.org/fr/migration-network-hub",
    spa: "https://migrationnetwork.un.org/es/migration-network-hub",
  },
  secondaccordianKeyLink: {
    en: "https://migrationnetwork.un.org/",
    fr: "https://migrationnetwork.un.org/fr",
    spa: "https://migrationnetwork.un.org/es",
  },
  thirdaccordianKeyLink: {
    en: "https://migrationnetwork.un.org/sites/g/files/tmzbdl416/files/docs/gcm.pdf",
    fr: "https://documents-dds-ny.un.org/doc/UNDOC/GEN/N18/452/00/PDF/N1845200.pdf?OpenElement",
    spa: "https://migrationnetwork.un.org/sites/g/files/tmzbdl416/files/docs/gcm_spanish.pdf",
  },
  accor1p1linkKey: {
    en: "https://migrationnetwork.un.org/migration-network-hub",
    fr: "https://migrationnetwork.un.org/fr/migration-network-hub",
    spa: "https://migrationnetwork.un.org/es/migration-network-hub",
  },
  accor1p2linkKey: {
    en: "https://migrationnetwork.un.org/",
    fr: "https://migrationnetwork.un.org/fr",
    spa: "https://migrationnetwork.un.org/es",
  },
  accor1p3linkKey: {
    en: "https://www.migrationdataportal.org/",
    fr: "https://www.migrationdataportal.org/fr",
    spa: "https://www.migrationdataportal.org/es",
  },
  accor2p1linkKey: {
    en: "https://migrationnetwork.un.org/sites/g/files/tmzbdl416/files/docs/gcm.pdf",
    fr: "https://documents-dds-ny.un.org/doc/UNDOC/GEN/N18/452/00/PDF/N1845200.pdf?OpenElement",
    spa: "https://migrationnetwork.un.org/sites/g/files/tmzbdl416/files/docs/gcm_spanish.pdf",
  },
  accor2p2linkKey: {
    en: "https://www.unhcr.org/the-global-compact-on-refugees.html",
    fr: "https://www.unhcr.org/fr-fr/vers-un-pacte-mondial-sur-les-refugies.html?query=le%20pacte%20mondial",
    spa: "https://www.acnur.org/pacto-mundial-sobre-refugiados.html",
  },
  accor2p3linkKey: {
    en: "https://www.ohchr.org/instruments-mechanisms/instruments/international-convention-protection-rights-all-migrant-workers",
    fr: "https://www.ohchr.org/fr/instruments-mechanisms/instruments/international-convention-protection-rights-all-migrant-workers",
    spa: "https://www.ohchr.org/es/instruments-mechanisms/instruments/international-convention-protection-rights-all-migrant-workers",
  },
  accor2p4linkKey: {
    en: "https://refugeesmigrants.un.org/summit-refugees-and-migrants",
    fr: "https://refugeesmigrants.un.org/fr/summit",
    spa: "https://refugeesmigrants.un.org/es/summit-refugees-and-migrants",
  },
  accor2p5linkKey: {
    en: "https://www.un.org/en/development/desa/population/migration/generalassembly/docs/globalcompact/A_RES_71_1.pdf",
    fr: "https://www.unhcr.org/fr/591ae6f84",
    spa: "https://www.acnur.org/prot/instr/5b4d0eee4/declaracion-de-nueva-york-para-los-refugiados-y-los-migrantes.html",
  },
  accor3p1linkKey: {
    en: "https://habitat3.org/wp-content/uploads/NUA-English.pdf",
    fr: "https://habitat3.org/wp-content/uploads/NUA-French.pdf",
    spa: "https://habitat3.org/wp-content/uploads/NUA-Spanish.pdf",
  },
  accor3p2linkKey: {
    en: "https://unfccc.int/process-and-meetings/the-paris-agreement/the-paris-agreement",
    fr: "https://unfccc.int/fr/a-propos-des-ndcs/l-accord-de-paris",
    spa: "https://unfccc.int/es/acerca-de-las-ndc/el-acuerdo-de-paris",
  },
  accor3p3linkKey: {
    en: "http://www.unisdr.org/we/coordinate/sendai-framework",
    fr: "https://www.unisdr.org/files/43291_frenchsendaiframeworkfordisasterris.pdf",
    spa: "https://www.undrr.org/es/implementando-el-marco-de-sendai/que-es-el-marco-de-sendai-para-la-reduccion-del-riesgo-de",
  },
  accor4p1linkKey: {
    en: "https://hrbaportal.org/",
    fr: "https://hrbaportal.org/",
    spa: "https://hrbaportal.org/",
  },
  accor4p2linkKey: {
    en: "https://www.ohchr.org/instruments-and-mechanisms",
    fr: "https://www.ohchr.org/fr/instruments-and-mechanisms",
    spa: "https://www.ohchr.org/es/instruments-and-mechanisms",
  },
  accor4p3linkKey: {
    en: "https://unsdg.un.org/resources/unsdg-guidance-note-human-rights-resident-coordinators-and-un-country-teams",
    fr: "https://unsdg.un.org/fr/resources/note-dorientation-du-gnud-sur-les-droits-de-lhomme-lintention-des-coordonnateurs",
    spa: "https://unsdg.un.org/es/resources/nota-orientativa-del-gnuds-sobre-derechos-humanos-para-coordinadoresas-residentes-y",
  },
  accor4p4linkKey: {
    en: "https://www.ohchr.org/en/instruments-mechanisms/instruments/international-convention-protection-rights-all-migrant-workers",
    fr: "https://www.ohchr.org/fr/instruments-mechanisms/instruments/international-convention-protection-rights-all-migrant-workers",
    spa: "https://www.ohchr.org/es/instruments-mechanisms/instruments/international-convention-protection-rights-all-migrant-workers",
  },
  accor5p1linkKey: {
    en: "https://reform.un.org/",
    fr: "https://reform.un.org/fr",
    spa: "https://reform.un.org/es",
  },
  accor5p2linkKey: {
    en: "http://www.gfmd.org/",
    fr: "http://www.gfmd.org/",
    spa: "http://www.gfmd.org/",
  },
  accor5p3linkKey: {
    en: "https://sdgs.un.org/",
    fr: "https://sdgs.un.org/fr",
    spa: "https://sdgs.un.org/es",
  },
  accor5p4linkKey: {
    en: "https://hlpf.un.org/vnrs",
    fr: "https://hlpf.un.org/vnrs",
    spa: "https://hlpf.un.org/vnrs",
  },
  accor5p5linkKey: {
    en: "https://www.un.org/sustainabledevelopment/",
    fr: "https://www.un.org/sustainabledevelopment/fr/",
    spa: "https://www.un.org/sustainabledevelopment/es/",
  },
  accor5p6linkKey: {
    en: "https://unctad.org/system/files/official-document/ares69d313_en.pdf",
    fr: "https://unctad.org/system/files/official-document/ares69d313_fr.pdf",
    spa: "https://unctad.org/system/files/official-document/ares69d313_es.pdf",
  },
};
var getImageUrl = (objectKey, lang) => {
  const imageObject = translatedImages[objectKey];
  return imageObject[lang];
};
const getAnchorLInk = (url, lang) => {
  const LinkUrl = translatedLinks[url];
  return LinkUrl[lang];
};
