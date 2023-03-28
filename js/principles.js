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
  document
    .getElementById("objective")
    .setAttribute("src", getImageUrl("ObjectiveImage", appLanguage));
  document
    .getElementById("6step")
    .setAttribute("src", getImageUrl("StepImage", appLanguage));
  document
    .getElementById("heroImgLink")
    .setAttribute("src", getImageUrl("heroImgLinkKey", appLanguage));

  // tabimg
  document
    .getElementById("firstTabImg")
    .setAttribute("src", getImageUrl("firstTabImgkey", appLanguage));
  document
    .getElementById("secondTabImg")
    .setAttribute("src", getImageUrl("secondTabImgkey", appLanguage));
  document
    .getElementById("thirdTabImg")
    .setAttribute("src", getImageUrl("thirdTabImgkey", appLanguage));
  document
    .getElementById("fourthTabImg")
    .setAttribute("src", getImageUrl("fourthTabImgkey", appLanguage));
  document
    .getElementById("fifthTabImg")
    .setAttribute("src", getImageUrl("fifthTabImgkey", appLanguage));
  document
    .getElementById("sixthTabImg")
    .setAttribute("src", getImageUrl("sixthTabImgkey", appLanguage));
  document
    .getElementById("seventhTabImg")
    .setAttribute("src", getImageUrl("seventhTabImgkey", appLanguage));
  document
    .getElementById("eighthTabImg")
    .setAttribute("src", getImageUrl("eighthTabImgkey", appLanguage));
  document
    .getElementById("ninthTabImg")
    .setAttribute("src", getImageUrl("ninthTabImgkey", appLanguage));
  document
    .getElementById("tenthTabImg")
    .setAttribute("src", getImageUrl("tenthTabImgkey", appLanguage));
  // pdfs
  document
    .getElementById("Tab1Spalink")
    .setAttribute("href", getImageUrl("Tab1Spalink", appLanguage));
  document
    .getElementById("Tab2Spalink")
    .setAttribute("href", getImageUrl("Tab2Spalink", appLanguage));
  document
    .getElementById("Tab3Spalink")
    .setAttribute("href", getImageUrl("Tab3Spalink", appLanguage));
  document
    .getElementById("Tab4Spalink")
    .setAttribute("href", getImageUrl("Tab4Spalink", appLanguage));
  document
    .getElementById("Tab5Spalink")
    .setAttribute("href", getImageUrl("Tab5Spalink", appLanguage));
  document
    .getElementById("Tab6Spalink")
    .setAttribute("href", getImageUrl("Tab6Spalink", appLanguage));
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
  document
    .getElementById("tab1subtab2Link")
    .setAttribute("href", getAnchorLInk("tab1subtab2LinkKey", appLanguage));
  document
    .getElementById("tab4subtab2Link")
    .setAttribute("href", getAnchorLInk("tab4subtab2LinkKey", appLanguage));

  $("#tab1subtab2Link").text(getAnchorLInk("tab1subtab2LinkKey", appLanguage));
  $("#tab4subtab2Link").text(getAnchorLInk("tab4subtab2LinkKey", appLanguage));

  // tab links resources section
  // 1
  document
    .getElementById("Tab1R1Link")
    .setAttribute("href", getAnchorLInk("Tab1R1LinkKey", appLanguage));
  document
    .getElementById("Tab1R2Link")
    .setAttribute("href", getAnchorLInk("Tab1R2LinkKey", appLanguage));
  document
    .getElementById("Tab1R3Link")
    .setAttribute("href", getAnchorLInk("Tab1R3LinkKey", appLanguage));
  document
    .getElementById("Tab1R4Link")
    .setAttribute("href", getAnchorLInk("Tab1R4LinkKey", appLanguage));
  $("#Tab1R1Link").text(getAnchorLInk("Tab1R1LinkKey", appLanguage));
  $("#Tab1R2Link").text(getAnchorLInk("Tab1R2LinkKey", appLanguage));
  $("#Tab1R3Link").text(getAnchorLInk("Tab1R3LinkKey", appLanguage));
  $("#Tab1R4Link").text(getAnchorLInk("Tab1R4LinkKey", appLanguage));
  // 2
  document
    .getElementById("Tab2R1Link")
    .setAttribute("href", getAnchorLInk("Tab2R1LinkKey", appLanguage));
  document
    .getElementById("Tab2R2Link")
    .setAttribute("href", getAnchorLInk("Tab2R2LinkKey", appLanguage));
  document
    .getElementById("Tab2R3Link")
    .setAttribute("href", getAnchorLInk("Tab2R3LinkKey", appLanguage));
  document
    .getElementById("Tab2R4Link")
    .setAttribute("href", getAnchorLInk("Tab2R4LinkKey", appLanguage));
  document
    .getElementById("Tab2R5Link")
    .setAttribute("href", getAnchorLInk("Tab2R5LinkKey", appLanguage));
  document
    .getElementById("Tab2R6Link")
    .setAttribute("href", getAnchorLInk("Tab2R6LinkKey", appLanguage));
  $("#Tab2R1Link").text(getAnchorLInk("Tab2R1LinkKey", appLanguage));
  $("#Tab2R2Link").text(getAnchorLInk("Tab2R2LinkKey", appLanguage));
  $("#Tab2R3Link").text(getAnchorLInk("Tab2R3LinkKey", appLanguage));
  $("#Tab2R4Link").text(getAnchorLInk("Tab2R4LinkKey", appLanguage));
  $("#Tab2R5Link").text(getAnchorLInk("Tab2R5LinkKey", appLanguage));
  $("#Tab2R6Link").text(getAnchorLInk("Tab2R6LinkKey", appLanguage));
  // 3
  document
    .getElementById("Tab3R1Link")
    .setAttribute("href", getAnchorLInk("Tab3R1LinkKey", appLanguage));
  document
    .getElementById("Tab3R2Link")
    .setAttribute("href", getAnchorLInk("Tab3R2LinkKey", appLanguage));
  document
    .getElementById("Tab3R3Link")
    .setAttribute("href", getAnchorLInk("Tab3R3LinkKey", appLanguage));
  $("#Tab3R1Link").text(getAnchorLInk("Tab3R1LinkKey", appLanguage));
  $("#Tab3R2Link").text(getAnchorLInk("Tab3R2LinkKey", appLanguage));
  $("#Tab3R3Link").text(getAnchorLInk("Tab3R3LinkKey", appLanguage));
  // 4
  document
    .getElementById("Tab4R1Link")
    .setAttribute("href", getAnchorLInk("Tab4R1LinkKey", appLanguage));
  document
    .getElementById("Tab4R2Link")
    .setAttribute("href", getAnchorLInk("Tab4R2LinkKey", appLanguage));
  $("#Tab4R1Link").text(getAnchorLInk("Tab4R1LinkKey", appLanguage));
  $("#Tab4R2Link").text(getAnchorLInk("Tab4R2LinkKey", appLanguage));
  // 5
  document
    .getElementById("Tab5R1Link")
    .setAttribute("href", getAnchorLInk("Tab5R1LinkKey", appLanguage));
  document
    .getElementById("Tab5R2Link")
    .setAttribute("href", getAnchorLInk("Tab5R2LinkKey", appLanguage));
  document
    .getElementById("Tab5R3Link")
    .setAttribute("href", getAnchorLInk("Tab5R3LinkKey", appLanguage));
  document
    .getElementById("Tab5R4Link")
    .setAttribute("href", getAnchorLInk("Tab5R4LinkKey", appLanguage));
  document
    .getElementById("Tab5R5Link")
    .setAttribute("href", getAnchorLInk("Tab5R5LinkKey", appLanguage));
  document
    .getElementById("Tab5R6Link")
    .setAttribute("href", getAnchorLInk("Tab5R6LinkKey", appLanguage));
  document
    .getElementById("Tab5R7Link")
    .setAttribute("href", getAnchorLInk("Tab5R7LinkKey", appLanguage));
  document
    .getElementById("Tab5R8Link")
    .setAttribute("href", getAnchorLInk("Tab5R8LinkKey", appLanguage));
  $("#Tab5R1Link").text(getAnchorLInk("Tab5R1LinkKey", appLanguage));
  $("#Tab5R2Link").text(getAnchorLInk("Tab5R2LinkKey", appLanguage));
  $("#Tab5R3Link").text(getAnchorLInk("Tab5R3LinkKey", appLanguage));
  $("#Tab5R4Link").text(getAnchorLInk("Tab5R4LinkKey", appLanguage));
  $("#Tab5R5Link").text(getAnchorLInk("Tab5R5LinkKey", appLanguage));
  $("#Tab5R6Link").text(getAnchorLInk("Tab5R6LinkKey", appLanguage));
  $("#Tab5R7Link").text(getAnchorLInk("Tab5R7LinkKey", appLanguage));
  $("#Tab5R8Link").text(getAnchorLInk("Tab5R8LinkKey", appLanguage));
  // 6
  document
    .getElementById("Tab6R1Link")
    .setAttribute("href", getAnchorLInk("Tab6R1LinkKey", appLanguage));
  $("#Tab6R1Link").text(getAnchorLInk("Tab6R1LinkKey", appLanguage));

  $(".readmoreBtnLink").attr(
    "href",
    getAnchorLInk("readmoreLinkKey", appLanguage)
  );
  document
    .getElementById("readmoreLinkTab1")
    .setAttribute("href", getAnchorLInk("readmoreLinkTab1Key", appLanguage));
  document
    .getElementById("readmoreLinkTab2")
    .setAttribute("href", getAnchorLInk("readmoreLinkTab2Key", appLanguage));
  document
    .getElementById("readmoreLinkTab3")
    .setAttribute("href", getAnchorLInk("readmoreLinkTab3Key", appLanguage));
  document
    .getElementById("readmoreLinkTab4")
    .setAttribute("href", getAnchorLInk("readmoreLinkTab4Key", appLanguage));
  document
    .getElementById("readmoreLinkTab5")
    .setAttribute("href", getAnchorLInk("readmoreLinkTab5Key", appLanguage));
  document
    .getElementById("readmoreLinkTab6")
    .setAttribute("href", getAnchorLInk("readmoreLinkTab6Key", appLanguage));
  document
    .getElementById("readmoreLinkTab7")
    .setAttribute("href", getAnchorLInk("readmoreLinkTab7Key", appLanguage));
  document
    .getElementById("readmoreLinkTab8")
    .setAttribute("href", getAnchorLInk("readmoreLinkTab8Key", appLanguage));
  document
    .getElementById("readmoreLinkTab9")
    .setAttribute("href", getAnchorLInk("readmoreLinkTab9Key", appLanguage));
  document
    .getElementById("readmoreLinkTab10")
    .setAttribute("href", getAnchorLInk("readmoreLinkTab10Key", appLanguage));

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

// on load end

// on change language
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
  // img
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
    .getElementById("objective")
    .setAttribute("src", getImageUrl("ObjectiveImage", selectedValue));
  document
    .getElementById("6step")
    .setAttribute("src", getImageUrl("StepImage", selectedValue));
  document
    .getElementById("heroImgLink")
    .setAttribute("src", getImageUrl("heroImgLinkKey", selectedValue));
  // tabimg
  document
    .getElementById("firstTabImg")
    .setAttribute("src", getImageUrl("firstTabImgkey", selectedValue));
  document
    .getElementById("secondTabImg")
    .setAttribute("src", getImageUrl("secondTabImgkey", selectedValue));
  document
    .getElementById("thirdTabImg")
    .setAttribute("src", getImageUrl("thirdTabImgkey", selectedValue));
  document
    .getElementById("fourthTabImg")
    .setAttribute("src", getImageUrl("fourthTabImgkey", selectedValue));
  document
    .getElementById("fifthTabImg")
    .setAttribute("src", getImageUrl("fifthTabImgkey", selectedValue));
  document
    .getElementById("sixthTabImg")
    .setAttribute("src", getImageUrl("sixthTabImgkey", selectedValue));
  document
    .getElementById("seventhTabImg")
    .setAttribute("src", getImageUrl("seventhTabImgkey", selectedValue));
  document
    .getElementById("eighthTabImg")
    .setAttribute("src", getImageUrl("eighthTabImgkey", selectedValue));
  document
    .getElementById("ninthTabImg")
    .setAttribute("src", getImageUrl("ninthTabImgkey", selectedValue));
  document
    .getElementById("tenthTabImg")
    .setAttribute("src", getImageUrl("tenthTabImgkey", selectedValue));
  // pdfs
  document
    .getElementById("Tab1Spalink")
    .setAttribute("href", getImageUrl("Tab1Spalink", selectedValue));
  document
    .getElementById("Tab2Spalink")
    .setAttribute("href", getImageUrl("Tab2Spalink", selectedValue));
  document
    .getElementById("Tab3Spalink")
    .setAttribute("href", getImageUrl("Tab3Spalink", selectedValue));
  document
    .getElementById("Tab4Spalink")
    .setAttribute("href", getImageUrl("Tab4Spalink", selectedValue));
  document
    .getElementById("Tab5Spalink")
    .setAttribute("href", getImageUrl("Tab5Spalink", selectedValue));
  document
    .getElementById("Tab6Spalink")
    .setAttribute("href", getImageUrl("Tab6Spalink", selectedValue));
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
  document
    .getElementById("EventsLink")
    .setAttribute("href", getAnchorLInk("EventsfooterLink", selectedValue));
  document
    .getElementById("tab1subtab2Link")
    .setAttribute("href", getAnchorLInk("tab1subtab2LinkKey", selectedValue));
  document
    .getElementById("tab4subtab2Link")
    .setAttribute("href", getAnchorLInk("tab4subtab2LinkKey", selectedValue));
  $("#tab1subtab2Link").text(
    getAnchorLInk("tab1subtab2LinkKey", selectedValue)
  );
  $("#tab4subtab2Link").text(
    getAnchorLInk("tab4subtab2LinkKey", selectedValue)
  );

  // tab links resources section
  // 1
  document
    .getElementById("Tab1R1Link")
    .setAttribute("href", getAnchorLInk("Tab1R1LinkKey", selectedValue));
  document
    .getElementById("Tab1R2Link")
    .setAttribute("href", getAnchorLInk("Tab1R2LinkKey", selectedValue));
  document
    .getElementById("Tab1R3Link")
    .setAttribute("href", getAnchorLInk("Tab1R3LinkKey", selectedValue));
  document
    .getElementById("Tab1R4Link")
    .setAttribute("href", getAnchorLInk("Tab1R4LinkKey", selectedValue));
  $("#Tab1R1Link").text(getAnchorLInk("Tab1R1LinkKey", selectedValue));
  $("#Tab1R2Link").text(getAnchorLInk("Tab1R2LinkKey", selectedValue));
  $("#Tab1R3Link").text(getAnchorLInk("Tab1R3LinkKey", selectedValue));
  $("#Tab1R4Link").text(getAnchorLInk("Tab1R4LinkKey", selectedValue));
  // 2
  document
    .getElementById("Tab2R1Link")
    .setAttribute("href", getAnchorLInk("Tab2R1LinkKey", selectedValue));
  document
    .getElementById("Tab2R2Link")
    .setAttribute("href", getAnchorLInk("Tab2R2LinkKey", selectedValue));
  document
    .getElementById("Tab2R3Link")
    .setAttribute("href", getAnchorLInk("Tab2R3LinkKey", selectedValue));
  document
    .getElementById("Tab2R4Link")
    .setAttribute("href", getAnchorLInk("Tab2R4LinkKey", selectedValue));
  document
    .getElementById("Tab2R5Link")
    .setAttribute("href", getAnchorLInk("Tab2R5LinkKey", selectedValue));
  document
    .getElementById("Tab2R6Link")
    .setAttribute("href", getAnchorLInk("Tab2R6LinkKey", selectedValue));
  $("#Tab2R1Link").text(getAnchorLInk("Tab2R1LinkKey", selectedValue));
  $("#Tab2R2Link").text(getAnchorLInk("Tab2R2LinkKey", selectedValue));
  $("#Tab2R3Link").text(getAnchorLInk("Tab2R3LinkKey", selectedValue));
  $("#Tab2R4Link").text(getAnchorLInk("Tab2R4LinkKey", selectedValue));
  $("#Tab2R5Link").text(getAnchorLInk("Tab2R5LinkKey", selectedValue));
  $("#Tab2R6Link").text(getAnchorLInk("Tab2R6LinkKey", selectedValue));
  // 3
  document
    .getElementById("Tab3R1Link")
    .setAttribute("href", getAnchorLInk("Tab3R1LinkKey", selectedValue));
  document
    .getElementById("Tab3R2Link")
    .setAttribute("href", getAnchorLInk("Tab3R2LinkKey", selectedValue));
  document
    .getElementById("Tab3R3Link")
    .setAttribute("href", getAnchorLInk("Tab3R3LinkKey", selectedValue));
  $("#Tab3R1Link").text(getAnchorLInk("Tab3R1LinkKey", selectedValue));
  $("#Tab3R2Link").text(getAnchorLInk("Tab3R2LinkKey", selectedValue));
  $("#Tab3R3Link").text(getAnchorLInk("Tab3R3LinkKey", selectedValue));
  // 4
  document
    .getElementById("Tab4R1Link")
    .setAttribute("href", getAnchorLInk("Tab4R1LinkKey", selectedValue));
  document
    .getElementById("Tab4R2Link")
    .setAttribute("href", getAnchorLInk("Tab4R2LinkKey", selectedValue));
  $("#Tab4R1Link").text(getAnchorLInk("Tab4R1LinkKey", selectedValue));
  $("#Tab4R2Link").text(getAnchorLInk("Tab4R2LinkKey", selectedValue));
  // 5
  document
    .getElementById("Tab5R1Link")
    .setAttribute("href", getAnchorLInk("Tab5R1LinkKey", selectedValue));
  document
    .getElementById("Tab5R2Link")
    .setAttribute("href", getAnchorLInk("Tab5R2LinkKey", selectedValue));
  document
    .getElementById("Tab5R3Link")
    .setAttribute("href", getAnchorLInk("Tab5R3LinkKey", selectedValue));
  document
    .getElementById("Tab5R4Link")
    .setAttribute("href", getAnchorLInk("Tab5R4LinkKey", selectedValue));
  document
    .getElementById("Tab5R5Link")
    .setAttribute("href", getAnchorLInk("Tab5R5LinkKey", selectedValue));
  document
    .getElementById("Tab5R6Link")
    .setAttribute("href", getAnchorLInk("Tab5R6LinkKey", selectedValue));
  document
    .getElementById("Tab5R7Link")
    .setAttribute("href", getAnchorLInk("Tab5R7LinkKey", selectedValue));
  document
    .getElementById("Tab5R8Link")
    .setAttribute("href", getAnchorLInk("Tab5R8LinkKey", selectedValue));
  $("#Tab5R1Link").text(getAnchorLInk("Tab5R1LinkKey", selectedValue));
  $("#Tab5R2Link").text(getAnchorLInk("Tab5R2LinkKey", selectedValue));
  $("#Tab5R3Link").text(getAnchorLInk("Tab5R3LinkKey", selectedValue));
  $("#Tab5R4Link").text(getAnchorLInk("Tab5R4LinkKey", selectedValue));
  $("#Tab5R5Link").text(getAnchorLInk("Tab5R5LinkKey", selectedValue));
  $("#Tab5R6Link").text(getAnchorLInk("Tab5R6LinkKey", selectedValue));
  $("#Tab5R7Link").text(getAnchorLInk("Tab5R7LinkKey", selectedValue));
  $("#Tab5R8Link").text(getAnchorLInk("Tab5R8LinkKey", selectedValue));
  // 6
  document
    .getElementById("Tab6R1Link")
    .setAttribute("href", getAnchorLInk("Tab6R1LinkKey", selectedValue));
  $("#Tab6R1Link").text(getAnchorLInk("Tab6R1LinkKey", selectedValue));
  $(".readmoreBtnLink").attr(
    "href",
    getAnchorLInk("readmoreLinkKey", selectedValue)
  );
  document
    .getElementById("readmoreLinkTab1")
    .setAttribute("href", getAnchorLInk("readmoreLinkTab1Key", selectedValue));
  document
    .getElementById("readmoreLinkTab2")
    .setAttribute("href", getAnchorLInk("readmoreLinkTab2Key", selectedValue));
  document
    .getElementById("readmoreLinkTab3")
    .setAttribute("href", getAnchorLInk("readmoreLinkTab3Key", selectedValue));
  document
    .getElementById("readmoreLinkTab4")
    .setAttribute("href", getAnchorLInk("readmoreLinkTab4Key", selectedValue));
  document
    .getElementById("readmoreLinkTab5")
    .setAttribute("href", getAnchorLInk("readmoreLinkTab5Key", selectedValue));
  document
    .getElementById("readmoreLinkTab6")
    .setAttribute("href", getAnchorLInk("readmoreLinkTab6Key", selectedValue));
  document
    .getElementById("readmoreLinkTab7")
    .setAttribute("href", getAnchorLInk("readmoreLinkTab7Key", selectedValue));
  document
    .getElementById("readmoreLinkTab8")
    .setAttribute("href", getAnchorLInk("readmoreLinkTab8Key", selectedValue));
  document
    .getElementById("readmoreLinkTab9")
    .setAttribute("href", getAnchorLInk("readmoreLinkTab9Key", selectedValue));
  document
    .getElementById("readmoreLinkTab10")
    .setAttribute("href", getAnchorLInk("readmoreLinkTab10Key", selectedValue));

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
  $(".guidepdf").attr("href", getImageUrl("GuidepdfKey", selectedValue));
  $(".bookletpdf").attr("href", getImageUrl("BookletpdfKey", selectedValue));
}
// on change language end

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
  ObjectiveImage: {
    en: "./images/GCMObjectives_ENG.jpg",
    fr: "./images/french/GCMObjectives_FR_2.jpg",
    spa: "./images/spanish/PMMObjectivos-ES.png",
  },
  StepImage: {
    en: "./images/6step_process_square.jpg",
    fr: "./images/french/6StepProcess_FR.jpg",
    spa: "./images/spanish/6StepProcess_ES.jpg",
  },
  heroImgLinkKey: {
    en: "./images/Guiding-Principles.png",
    fr: "./images/GuidingPrinciples_Overview_FR.png",
    spa: "./images/GuidingPrinciples_Overview_SP.png",
  },
  firstTabImgkey: {
    en: "./images/principleimg/06_HUMAN RIGHTS.jpg",
    fr: "./images/principleimg/french/6.png",
    spa: "./images/principleimg/spanish/6.png",
  },
  secondTabImgkey: {
    en: "./images/principleimg/05_SUSTAINABLE DEVELOPMENT .jpg",
    fr: "./images/principleimg/french/5.png",
    spa: "./images/principleimg/spanish/5.png",
  },
  thirdTabImgkey: {
    en: "./images/principleimg/08_CHILD-SENSITIVE.jpg",
    fr: "./images/principleimg/french/8.png",
    spa: "./images/principleimg/spanish/8.png",
  },
  fourthTabImgkey: {
    en: "./images/principleimg/07_GENDER-RESPONSIVE.jpg",
    fr: "../images/principleimg/french/7.png",
    spa: "./images/principleimg/spanish/7.png",
  },
  fifthTabImgkey: {
    en: "./images/principleimg/09_WHOLE-OF-GOVERNMENT APPROACH.jpg",
    fr: "./images/principleimg/french/9.png",
    spa: "./images/principleimg/spanish/9.png",
  },
  sixthTabImgkey: {
    en: "./images/principleimg/10_WHOLE-OF-SOCIETY APPROACH.jpg",
    fr: "./images/principleimg/french/10.png",
    spa: "./images/principleimg/spanish/10.png",
  },
  seventhTabImgkey: {
    en: "./images/principleimg/04_RULE OF LAW AND DUE PROCESS .jpg",
    fr: "./images/principleimg/french/4.png",
    spa: "./images/principleimg/spanish/4.png",
  },
  eighthTabImgkey: {
    en: "./images/principleimg/03_NATIONAL SOVEREIGNTY.jpg",
    fr: "./images/principleimg/french/3.png",
    spa: "./images/principleimg/spanish/3.png",
  },
  ninthTabImgkey: {
    en: "./images/principleimg/02_INTERNATIONAL COOPERATION.jpg",
    fr: "./images/principleimg/french/2.png",
    spa: "./images/principleimg/spanish/2.png",
  },
  tenthTabImgkey: {
    en: "./images/principleimg/01_PEOPLE-CENTRED.jpg",
    fr: "./images/principleimg/french/1.png",
    spa: "./images/principleimg/spanish/1.png",
  },
  // pdf
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
  Tab1Spalink: {
    en: "./pdf/English/Guiding Principles/HUMAN RIGHTS BASED APPROACH.pdf",
    fr: "./pdf/French/Des Principes/APPROCHE FONDEE SUR LES DROITS DE L_HOMME.pdf",
    spa: "./pdf/Spanish/prpESpdf/ENFOQUE BASADO EN LOS DERECHO HUMANOS.pdf",
  },
  Tab2Spalink: {
    en: "./pdf/English/Guiding Principles/SUSTAINABLE DEVELOPMENT APPROACH.pdf",
    fr: "./pdf/French/Des Principes/APPROCHE FONDEE SUR LE DEVELOPPEMENT DURABLE.pdf",
    spa: "./pdf/Spanish/prpESpdf/ENFOQUE BASADO EN EL DESARROLLO SOSTENIBLE.pdf",
  },
  Tab3Spalink: {
    en: "./pdf/English/Guiding Principles/CHILD SENSITIVE APPROACH.pdf",
    fr: "./pdf/French/Des Principes/APPROCHE ADAPTEE AUX BESOINS DES ENGANTS.pdf",
    spa: "./pdf/Spanish/prpESpdf/ENFOQUE CON PERSPECTIVA INFANTIL.pdf",
  },
  Tab4Spalink: {
    en: "./pdf/English/Guiding Principles/GENDER RESPONSIVE APPROACH.pdf",
    fr: "./pdf/French/Des Principes/APPROCHE SOUCIEUSE DE LA PROBLEMATIQUE FEMMES-HOMMES.pdf",
    spa: "./pdf/Spanish/prpESpdf/ENFOQUE CON PERSPECTIVA DE GENERO.pdf",
  },
  Tab5Spalink: {
    en: "./pdf/English/Guiding Principles/WHOLE OF GOVERNMENT APPROACH.pdf",
    fr: "./pdf/French/Des Principes/APPROCHE MOBILISANT L_ENSEMBLE DES POUVOIRS PUBLICS.pdf",
    spa: "./pdf/Spanish/prpESpdf/ENFOQUE PANGUBERNAMENTAL.pdf",
  },
  Tab6Spalink: {
    en: "./pdf/English/Guiding Principles/WHOLE OF SOCIETY APPROACH.pdf",
    fr: "./pdf/French/Des Principes/APPROCHE MOBILISANT L_ENSEMBLE DE LA SOCIETE.pdf",
    spa: "./pdf/Spanish/prpESpdf/ENFOQUE PANSOCIAL.pdf",
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
  Tab1R1LinkKey: {
    en: "https://migrationnetwork.un.org/statements/covid-19-does-not-discriminate-nor-should-our-response",
    fr: "https://migrationnetwork.un.org/statements/le-covid-19-netablit-pas-de-discrimination-notre-riposte-doit-faire-de-meme",
    spa: "https://migrationnetwork.un.org/statements/covid-19-does-not-discriminate-nor-should-our-response-sp",
  },
  Tab1R2LinkKey: {
    en: "https://migrationnetwork.un.org/resources/policy-brief-covid-19-immigration-detention-what-can-governments-and-other-stakeholders",
    fr: "https://migrationnetwork.un.org/fr/resources/policy-brief-covid-19-immigration-detention-what-can-governments-and-other-stakeholders",
    spa: "https://migrationnetwork.un.org/sites/g/files/tmzbdl416/files/docs/un_network_on_migration_wg_atd_policy_brief_covid-19_and_immigration_detention-es.pdf",
  },
  Tab1R3LinkKey: {
    en: "https://www.ohchr.org/sites/default/files/Documents/Publications/HR_PUB_16_1_NMRF_PracticalGuide.pdf",
    fr: "https://www.ohchr.org/sites/default/files/Documents/Publications/HR_PUB_16_1_NMRF_PracticalGuide.pdf",
    spa: "https://www.ohchr.org/sites/default/files/Documents/Publications/HR_PUB_16_1_NMRF_PracticalGuide.pdf",
  },
  Tab1R4LinkKey: {
    en: "https://www.ohchr.org/instruments-and-mechanisms/international-human-rights-law",
    fr: "https://www.ohchr.org/fr/instruments-and-mechanisms/international-human-rights-law",
    spa: "https://www.ohchr.org/es/instruments-and-mechanisms/international-human-rights-law",
  },
  Tab2R1LinkKey: {
    en: "https://migrationnetwork.un.org/gcm-unct-training",
    fr: "https://migrationnetwork.un.org/fr/gcm-unct-training",
    spa: "https://migrationnetwork.un.org/es/gcm-unct-training",
  },
  Tab2R2LinkKey: {
    en: "https://migrationnetwork.un.org/resources/policy-brief-global-compact-migration-gcm-well-governed-migration-essential-element",
    fr: "https://migrationnetwork.un.org/resources/policy-brief-global-compact-migration-gcm-well-governed-migration-essential-element",
    spa: "https://migrationnetwork.un.org/resources/policy-brief-global-compact-migration-gcm-well-governed-migration-essential-element",
  },
  Tab2R3LinkKey: {
    en: "https://publications.iom.int/books/migration-and-2030-agenda-guide-practitioners",
    fr: "https://publications.iom.int/books/la-migration-et-le-programme-2030-un-guide-lusage-des-praticiens",
    spa: "https://publications.iom.int/es/books/la-migracion-en-la-agenda-2030-guia-para-profesionales",
  },
  Tab2R4LinkKey: {
    en: "https://migration4development.org/en/resources/iom-submission-hlpf-2021-leveraging-migration-recover-better-covid-19-and-achieve-2030",
    fr: "https://migration4development.org/en/resources/iom-submission-hlpf-2021-leveraging-migration-recover-better-covid-19-and-achieve-2030",
    spa: "https://migration4development.org/en/resources/iom-submission-hlpf-2021-leveraging-migration-recover-better-covid-19-and-achieve-2030",
  },
  Tab2R5LinkKey: {
    en: "https://migrationnetwork.un.org/statements/unlocking-positive-impact-migration-sustainable-development-recover-better-faster-and",
    fr: "https://migrationnetwork.un.org/fr/statements/unlocking-positive-impact-migration-sustainable-development-recover-better-faster-and",
    spa: "https://migrationnetwork.un.org/es/statements/unlocking-positive-impact-migration-sustainable-development-recover-better-faster-and",
  },
  Tab2R6LinkKey: {
    en: "https://www.ifad.org/en/web/knowledge/-/publication/sending-money-home-contributing-to-the-sdgs-one-family-at-a-time",
    fr: "https://www.ifad.org/fr/web/knowledge/-/publication/sending-money-home-contributing-to-the-sdgs-one-family-at-a-time",
    spa: "https://www.ifad.org/es/web/knowledge/-/sending-money-home-contributing-to-the-sdgs-one-family-at-a-time-1",
  },
  Tab3R1LinkKey: {
    en: "https://www.unicef.org/",
    fr: "https://www.unicef.org/fr/",
    spa: "https://www.unicef.org/es/",
  },
  Tab3R2LinkKey: {
    en: "https://www.unicef.org/migrant-refugee-internally-displaced-children",
    fr: "https://www.unicef.org/fr/enfants-migrants-refugies-deplaces",
    spa: "https://www.unicef.org/es/ninos-desplazados-migrantes-refugiados",
  },
  Tab3R3LinkKey: {
    en: "https://lumos.contentfiles.net/media/documents/document/2020/08/UMRC_Report_2020_v3_NEW_BRAND_WEB.pdf",
    fr: "https://lumos.contentfiles.net/media/documents/document/2020/08/UMRC_Report_2020_v3_NEW_BRAND_WEB.pdf",
    spa: "https://lumos.contentfiles.net/media/documents/document/2020/08/UMRC_Report_2020_v3_NEW_BRAND_WEB.pdf",
  },
  Tab4R1LinkKey: {
    en: "https://ppguide.unwomen.org/",
    fr: "https://ppguide.unwomen.org/fr/",
    spa: "https://ppguide.unwomen.org/es/",
  },
  Tab4R2LinkKey: {
    en: "https://www2.ohchr.org/english/bodies/cedaw/docs/gr_26_on_women_migrant_workers_en.pdf",
    fr: "https://www.refworld.org/cgi-bin/texis/vtx/rwmain/opendocpdf.pdf?reldoc=y&docid=4ae55c452",
    spa: "https://www2.ohchr.org/english/bodies/cedaw/docs/GR_26_on_women_migrant_workers_sp.pdf",
  },
  Tab5R1LinkKey: {
    en: "https://migration4development.org/en/resources/guidelines-mainstreaming-migration-local-development-planning",
    fr: "https://migration4development.org/sites/default/files/2021-09/guide_de_mise_en_oeuvre_pour_lintegration_transversale_de_la_migration.pdf",
    spa: "https://migration4development.org/sites/default/files/2021-09/directrices_para_la_integracion_transversal_de_la_migracion%20%282%29.pdf",
  },
  Tab5R2LinkKey: {
    en: "https://migration4development.org/en/resources/mainstreaming-migration-development-planning-handbook-policy-makers-and-practitioners",
    fr: "https://migration4development.org/sites/default/files/2021-10/integration_de_la_migration_dans_la_planification_du_developpement_FR.pdf",
    spa: "https://migration4development.org/sites/default/files/2021-10/la_transversalizacion_de_la_migracion_en_la_planificacion_del_desarrollo_SP.pdf",
  },
  Tab5R3LinkKey: {
    en: "https://www.oecd.org/",
    fr: "https://www.oecd-ilibrary.org/development/interactions-entre-politiques-publiques-migrations-et-developpement_9789264274136-fr",
    spa: "https://www.oecd-ilibrary.org/fr/development/interacciones-entre-politicas-publicas-migracion-y-desarrollo_9789264276710-es",
  },
  Tab5R4LinkKey: {
    en: "https://eea.iom.int/mmicd",
    fr: "https://eea.iom.int/mmicd",
    spa: "https://eea.iom.int/mmicd",
  },
  Tab5R5LinkKey: {
    en: "https://www.knomad.org/publication/measuring-policy-coherence-migration-and-development-new-set-tested-tools",
    fr: "https://www.knomad.org/publication/measuring-policy-coherence-migration-and-development-new-set-tested-tools",
    spa: "https://www.knomad.org/publication/measuring-policy-coherence-migration-and-development-new-set-tested-tools",
  },
  Tab5R6LinkKey: {
    en: "https://migration4development.org/en",
    fr: "https://www.itcilo.org/fr/resources/ma-boite-outils-icmd-sur-la-migration-et-le-developpement",
    spa: "https://migration4development.org/sites/default/files/2021-10/JMDI%20User%20Guide_ESP.pdf",
  },
  Tab5R7LinkKey: {
    en: "https://migration4development.org/en/about/our-programmes",
    fr: "https://migration4development.org/fr/A%20propos/de-nos-programmes",
    spa: "https://migration4development.org/es/sobre/nuestros-programas",
  },
  Tab5R8LinkKey: {
    en: "https://www.iom.int/mainstreaming-migration-national-development-strategies",
    fr: "https://www.iom.int/fr/integrer-la-migration-dans-les-strategies-nationales-de-developpement",
    spa: "https://www.iom.int/es/incorporacion-de-la-migracion-en-las-estrategias-nacionales-de-desarrollo",
  },
  Tab6R1LinkKey: {
    en: "https://migrationnetwork.un.org/statements/standing-solidarity-migrants-supporting-civil-society-other-stakeholders-responding",
    fr: "https://migrationnetwork.un.org/sites/g/files/tmzbdl416/files/nw-statement-for-csos-final-version-french.pdf",
    spa: "https://migrationnetwork.un.org/sites/g/files/tmzbdl416/files/nw-statement-for-csos-final-version-spanish.pdf",
  },
  readmoreLinkKey: {
    en: "https://migrationnetwork.un.org/hub?gcm_objectives=All&cross_cutting_theme=741&region=All&country=All&text=&type_of_resource=All",
    fr: "https://migrationnetwork.un.org/fr/hub?gcm_objectives%3DAll%26cross_cutting_theme%3D259%26region%3DAll%26country%3DAll%26text%3D&sa=D&source=docs&ust=1670847201533216&usg=AOvVaw29o7OnCW48KAVA8wIF5if_",
    spa: "https://migrationnetwork.un.org/es/hub?gcm_objectives=All&cross_cutting_theme=741&region=All&country=All&text=&type_of_resource=All",
  },
  readmoreLinkTab1Key: {
    en: "https://migrationnetwork.un.org/hub?gcm_objectives=All&cross_cutting_theme=259&region=All&country=All&text=&type_of_resource=All",
    fr: "https://migrationnetwork.un.org/fr/hub?gcm_objectives=All&cross_cutting_theme=259&region=All&country=All&text=&type_of_resource=All",
    spa: "https://migrationnetwork.un.org/es/hub?gcm_objectives=All&cross_cutting_theme=259&region=All&country=All&text=&type_of_resource=All",
  },
  readmoreLinkTab2Key: {
    en: "https://migrationnetwork.un.org/hub?gcm_objectives=All&cross_cutting_theme=740&region=All&country=All&text=&type_of_resource=All",
    fr: "https://migrationnetwork.un.org/fr/hub?gcm_objectives=All&cross_cutting_theme=740&region=All&country=All&text=&type_of_resource=All",
    spa: "https://migrationnetwork.un.org/es/hub?gcm_objectives=All&cross_cutting_theme=740&region=All&country=All&text=&type_of_resource=All",
  },
  readmoreLinkTab3Key: {
    en: "https://migrationnetwork.un.org/hub?gcm_objectives=All&cross_cutting_theme=257&region=All&country=All&text=&type_of_resource=All",
    fr: "https://migrationnetwork.un.org/fr/hub?gcm_objectives=All&cross_cutting_theme=257&region=All&country=All&text=&type_of_resource=All",
    spa: "https://migrationnetwork.un.org/es/hub?gcm_objectives=All&cross_cutting_theme=257&region=All&country=All&text=&type_of_resource=All",
  },
  readmoreLinkTab4Key: {
    en: "https://migrationnetwork.un.org/hub?gcm_objectives=All&cross_cutting_theme=258&region=All&country=All&text=&type_of_resource=All",
    fr: "https://migrationnetwork.un.org/fr/hub?gcm_objectives=All&cross_cutting_theme=258&region=All&country=All&text=&type_of_resource=All",
    spa: "https://migrationnetwork.un.org/es/hub?gcm_objectives=All&cross_cutting_theme=258&region=All&country=All&text=&type_of_resource=All",
  },
  readmoreLinkTab5Key: {
    en: "https://migrationnetwork.un.org/hub?gcm_objectives=All&cross_cutting_theme=737&region=All&country=All&text=&type_of_resource=All",
    fr: "https://migrationnetwork.un.org/fr/hub?gcm_objectives=All&cross_cutting_theme=737&region=All&country=All&text=&type_of_resource=All",
    spa: "https://migrationnetwork.un.org/es/hub?gcm_objectives=All&cross_cutting_theme=737&region=All&country=All&text=&type_of_resource=All",
  },
  readmoreLinkTab6Key: {
    en: "https://migrationnetwork.un.org/hub?gcm_objectives=All&cross_cutting_theme=736&region=All&country=All&text=&type_of_resource=All",
    fr: "https://migrationnetwork.un.org/fr/hub?gcm_objectives=All&cross_cutting_theme=736&region=All&country=All&text=",
    spa: "https://migrationnetwork.un.org/es/hub?gcm_objectives=All&cross_cutting_theme=736&region=All&country=All&text=&type_of_resource=All",
  },
  readmoreLinkTab7Key: {
    en: "https://migrationnetwork.un.org/hub?gcm_objectives=All&cross_cutting_theme=741&region=All&country=All&text=&type_of_resource=All",
    fr: "https://migrationnetwork.un.org/fr/hub?gcm_objectives=All&cross_cutting_theme=741&region=All&country=All&text=&type_of_resource=All",
    spa: "https://migrationnetwork.un.org/es/hub?gcm_objectives=All&cross_cutting_theme=741&region=All&country=All&text=&type_of_resource=All",
  },
  readmoreLinkTab8Key: {
    en: "https://migrationnetwork.un.org/hub?gcm_objectives=All&cross_cutting_theme=742&region=All&country=All&text=&type_of_resource=All",
    fr: "https://migrationnetwork.un.org/fr/hub?gcm_objectives=All&cross_cutting_theme=742&region=All&country=All&text=&type_of_resource=All",
    spa: "https://migrationnetwork.un.org/es/hub?gcm_objectives=All&cross_cutting_theme=742&region=All&country=All&text=&type_of_resource=All",
  },
  readmoreLinkTab9Key: {
    en: "https://migrationnetwork.un.org/hub?gcm_objectives=All&cross_cutting_theme=739&region=All&country=All&text=&type_of_resource=All",
    fr: "https://migrationnetwork.un.org/fr/hub?gcm_objectives=All&cross_cutting_theme=739&region=All&country=All&text=",
    spa: "https://migrationnetwork.un.org/es/hub?gcm_objectives=All&cross_cutting_theme=739&region=All&country=All&text=&type_of_resource=All",
  },
  readmoreLinkTab10Key: {
    en: "https://migrationnetwork.un.org/hub?gcm_objectives=All&cross_cutting_theme=738&region=All&country=All&text=&type_of_resource=All",
    fr: "https://migrationnetwork.un.org/fr/hub?gcm_objectives=All&cross_cutting_theme=738&region=All&country=All&text=",
    spa: "https://migrationnetwork.un.org/es/hub?gcm_objectives=All&cross_cutting_theme=738&region=All&country=All&text=&type_of_resource=All",
  },
  tab1subtab2LinkKey: {
    en: "https://www.ohchr.org/Pages/Home.aspx",
    fr: "https://www.ohchr.org/fr/Pages/Home.aspx",
    spa: "https://www.ohchr.org/es/Pages/Home.aspx",
  },
  tab4subtab2LinkKey: {
    en: "https://ppguide.unwomen.org/",
    fr: "https://ppguide.unwomen.org/fr",
    spa: "https://ppguide.unwomen.org/es",
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
