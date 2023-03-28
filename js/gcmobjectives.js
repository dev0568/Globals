// onLoad
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
    .getElementById("Guidingprp")
    .setAttribute("src", getImageUrl("PrincipleImage", appLanguage));
  document
    .getElementById("6step")
    .setAttribute("src", getImageUrl("StepImage", appLanguage));
  document
    .getElementById("headerImg1")
    .setAttribute("src", getImageUrl("headerImg", appLanguage));
  $(".img1").attr("src", getImageUrl("img1key", appLanguage));
  $(".img2").attr("src", getImageUrl("img2key", appLanguage));
  $(".img3").attr("src", getImageUrl("img3key", appLanguage));
  $(".img4").attr("src", getImageUrl("img4key", appLanguage));
  $(".img5").attr("src", getImageUrl("img5key", appLanguage));
  $(".img6").attr("src", getImageUrl("img6key", appLanguage));
  $(".img7").attr("src", getImageUrl("img7key", appLanguage));
  $(".img8").attr("src", getImageUrl("img8key", appLanguage));
  $(".img9").attr("src", getImageUrl("img9key", appLanguage));
  $(".img10").attr("src", getImageUrl("img10key", appLanguage));
  $(".img11").attr("src", getImageUrl("img11key", appLanguage));
  $(".img12").attr("src", getImageUrl("img12key", appLanguage));
  $(".img13").attr("src", getImageUrl("img13key", appLanguage));
  $(".img14").attr("src", getImageUrl("img14key", appLanguage));
  $(".img15").attr("src", getImageUrl("img15key", appLanguage));
  $(".img16").attr("src", getImageUrl("img16key", appLanguage));
  $(".img17").attr("src", getImageUrl("img17key", appLanguage));
  $(".guidepdf").attr("href", getImageUrl("GuidepdfKey", appLanguage));
  $(".bookletpdf").attr("href", getImageUrl("BookletpdfKey", appLanguage));

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
  document
    .getElementById("eleventhTabImg")
    .setAttribute("src", getImageUrl("eleventhTabImgkey", appLanguage));
  document
    .getElementById("twelfthTabImg")
    .setAttribute("src", getImageUrl("twelvethImgkey", appLanguage));
  document
    .getElementById("thirteenthTabImg")
    .setAttribute("src", getImageUrl("thirteenthImgkey", appLanguage));
  document
    .getElementById("fourteenthTabImg")
    .setAttribute("src", getImageUrl("fourteenthTabImgkey", appLanguage));
  document
    .getElementById("fifteenthTabImg")
    .setAttribute("src", getImageUrl("fifteenthTabImgkey", appLanguage));
  document
    .getElementById("sixteenthTabImg")
    .setAttribute("src", getImageUrl("sixteenthImgkey", appLanguage));
  document
    .getElementById("seventeenthTabImg")
    .setAttribute("src", getImageUrl("seventeenthImgkey", appLanguage));
  document
    .getElementById("eighteenthTabImg")
    .setAttribute("src", getImageUrl("eighteenthImgkey", appLanguage));
  document
    .getElementById("nineteenthTabImg")
    .setAttribute("src", getImageUrl("nineteenthImgkey", appLanguage));
  document
    .getElementById("twentythTabImg")
    .setAttribute("src", getImageUrl("twentythImgkey", appLanguage));
  document
    .getElementById("twentyonethTabImg")
    .setAttribute("src", getImageUrl("twentyonethImgkey", appLanguage));
  document
    .getElementById("twentytwothTabImg")
    .setAttribute("src", getImageUrl("twentytwothImgkey", appLanguage));
  document
    .getElementById("twentythreethTabImg")
    .setAttribute("src", getImageUrl("twentythreethImgkey", appLanguage));

  // pdf
  document
    .getElementById("tab1pdf")
    .setAttribute("href", getImageUrl("Tab1pdf", appLanguage));
  document
    .getElementById("tab2pdf")
    .setAttribute("href", getImageUrl("Tab2pdf", appLanguage));
  document
    .getElementById("tab3pdf")
    .setAttribute("href", getImageUrl("Tab3pdf", appLanguage));
  document
    .getElementById("tab4pdf")
    .setAttribute("href", getImageUrl("Tab4pdf", appLanguage));
  document
    .getElementById("tab5pdf")
    .setAttribute("href", getImageUrl("Tab5pdf", appLanguage));
  document
    .getElementById("tab6pdf")
    .setAttribute("href", getImageUrl("Tab6pdf", appLanguage));
  document
    .getElementById("tab7pdf")
    .setAttribute("href", getImageUrl("Tab7pdf", appLanguage));
  document
    .getElementById("tab8pdf")
    .setAttribute("href", getImageUrl("Tab8pdf", appLanguage));
  document
    .getElementById("tab9pdf")
    .setAttribute("href", getImageUrl("Tab9pdf", appLanguage));
  document
    .getElementById("tab10pdf")
    .setAttribute("href", getImageUrl("Tab10pdf", appLanguage));
  document
    .getElementById("tab11pdf")
    .setAttribute("href", getImageUrl("Tab11pdf", appLanguage));
  document
    .getElementById("tab12pdf")
    .setAttribute("href", getImageUrl("Tab12pdf", appLanguage));
  document
    .getElementById("tab13pdf")
    .setAttribute("href", getImageUrl("Tab13pdf", appLanguage));
  document
    .getElementById("tab14pdf")
    .setAttribute("href", getImageUrl("Tab14pdf", appLanguage));
  document
    .getElementById("tab15pdf")
    .setAttribute("href", getImageUrl("Tab15pdf", appLanguage));
  document
    .getElementById("tab16pdf")
    .setAttribute("href", getImageUrl("Tab16pdf", appLanguage));
  document
    .getElementById("tab17pdf")
    .setAttribute("href", getImageUrl("Tab17pdf", appLanguage));
  document
    .getElementById("tab18pdf")
    .setAttribute("href", getImageUrl("Tab18pdf", appLanguage));
  document
    .getElementById("tab19pdf")
    .setAttribute("href", getImageUrl("Tab19pdf", appLanguage));
  document
    .getElementById("tab20pdf")
    .setAttribute("href", getImageUrl("Tab20pdf", appLanguage));
  document
    .getElementById("tab21pdf")
    .setAttribute("href", getImageUrl("Tab21pdf", appLanguage));
  document
    .getElementById("tab22pdf")
    .setAttribute("href", getImageUrl("Tab22pdf", appLanguage));
  document
    .getElementById("tab23pdf")
    .setAttribute("href", getImageUrl("Tab23pdf", appLanguage));
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
    .getElementById("VisittheWebLink")
    .setAttribute("href", getAnchorLInk("VisittheWebLinkkey", appLanguage));
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
});
// onLoad

// on Language change
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
    .getElementById("Guidingprp")
    .setAttribute("src", getImageUrl("PrincipleImage", selectedValue));
  document
    .getElementById("6step")
    .setAttribute("src", getImageUrl("StepImage", selectedValue));
  document
    .getElementById("headerImg1")
    .setAttribute("src", getImageUrl("headerImg", selectedValue));
  $(".img1").attr("src", getImageUrl("img1key", selectedValue));
  $(".img2").attr("src", getImageUrl("img2key", selectedValue));
  $(".img3").attr("src", getImageUrl("img3key", selectedValue));
  $(".img4").attr("src", getImageUrl("img4key", selectedValue));
  $(".img5").attr("src", getImageUrl("img5key", selectedValue));
  $(".img6").attr("src", getImageUrl("img6key", selectedValue));
  $(".img7").attr("src", getImageUrl("img7key", selectedValue));
  $(".img8").attr("src", getImageUrl("img8key", selectedValue));
  $(".img9").attr("src", getImageUrl("img9key", selectedValue));
  $(".img10").attr("src", getImageUrl("img10key", selectedValue));
  $(".img11").attr("src", getImageUrl("img11key", selectedValue));
  $(".img12").attr("src", getImageUrl("img12key", selectedValue));
  $(".img13").attr("src", getImageUrl("img13key", selectedValue));
  $(".img14").attr("src", getImageUrl("img14key", selectedValue));
  $(".img15").attr("src", getImageUrl("img15key", selectedValue));
  $(".img16").attr("src", getImageUrl("img16key", selectedValue));
  $(".img17").attr("src", getImageUrl("img17key", selectedValue));
  $(".guidepdf").attr("href", getImageUrl("GuidepdfKey", selectedValue));
  $(".bookletpdf").attr("href", getImageUrl("BookletpdfKey", selectedValue));

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
  document
    .getElementById("eleventhTabImg")
    .setAttribute("src", getImageUrl("eleventhTabImgkey", selectedValue));
  document
    .getElementById("twelfthTabImg")
    .setAttribute("src", getImageUrl("twelvethImgkey", selectedValue));
  document
    .getElementById("thirteenthTabImg")
    .setAttribute("src", getImageUrl("thirteenthImgkey", selectedValue));
  document
    .getElementById("fourteenthTabImg")
    .setAttribute("src", getImageUrl("fourteenthTabImgkey", selectedValue));
  document
    .getElementById("fifteenthTabImg")
    .setAttribute("src", getImageUrl("fifteenthTabImgkey", selectedValue));
  document
    .getElementById("sixteenthTabImg")
    .setAttribute("src", getImageUrl("sixteenthImgkey", selectedValue));
  document
    .getElementById("seventeenthTabImg")
    .setAttribute("src", getImageUrl("seventeenthImgkey", selectedValue));
  document
    .getElementById("eighteenthTabImg")
    .setAttribute("src", getImageUrl("eighteenthImgkey", selectedValue));
  document
    .getElementById("nineteenthTabImg")
    .setAttribute("src", getImageUrl("nineteenthImgkey", selectedValue));
  document
    .getElementById("twentythTabImg")
    .setAttribute("src", getImageUrl("twentythImgkey", selectedValue));
  document
    .getElementById("twentyonethTabImg")
    .setAttribute("src", getImageUrl("twentyonethImgkey", selectedValue));
  document
    .getElementById("twentytwothTabImg")
    .setAttribute("src", getImageUrl("twentytwothImgkey", selectedValue));
  document
    .getElementById("twentythreethTabImg")
    .setAttribute("src", getImageUrl("twentythreethImgkey", selectedValue));

  // pdf
  document
    .getElementById("tab1pdf")
    .setAttribute("href", getImageUrl("Tab1pdf", selectedValue));
  document
    .getElementById("tab2pdf")
    .setAttribute("href", getImageUrl("Tab2pdf", selectedValue));
  document
    .getElementById("tab3pdf")
    .setAttribute("href", getImageUrl("Tab3pdf", selectedValue));
  document
    .getElementById("tab4pdf")
    .setAttribute("href", getImageUrl("Tab4pdf", selectedValue));
  document
    .getElementById("tab5pdf")
    .setAttribute("href", getImageUrl("Tab5pdf", selectedValue));
  document
    .getElementById("tab6pdf")
    .setAttribute("href", getImageUrl("Tab6pdf", selectedValue));
  document
    .getElementById("tab7pdf")
    .setAttribute("href", getImageUrl("Tab7pdf", selectedValue));
  document
    .getElementById("tab8pdf")
    .setAttribute("href", getImageUrl("Tab8pdf", selectedValue));
  document
    .getElementById("tab9pdf")
    .setAttribute("href", getImageUrl("Tab9pdf", selectedValue));
  document
    .getElementById("tab10pdf")
    .setAttribute("href", getImageUrl("Tab10pdf", selectedValue));
  document
    .getElementById("tab11pdf")
    .setAttribute("href", getImageUrl("Tab11pdf", selectedValue));
  document
    .getElementById("tab12pdf")
    .setAttribute("href", getImageUrl("Tab12pdf", selectedValue));
  document
    .getElementById("tab13pdf")
    .setAttribute("href", getImageUrl("Tab13pdf", selectedValue));
  document
    .getElementById("tab14pdf")
    .setAttribute("href", getImageUrl("Tab14pdf", selectedValue));
  document
    .getElementById("tab15pdf")
    .setAttribute("href", getImageUrl("Tab15pdf", selectedValue));
  document
    .getElementById("tab16pdf")
    .setAttribute("href", getImageUrl("Tab16pdf", selectedValue));
  document
    .getElementById("tab17pdf")
    .setAttribute("href", getImageUrl("Tab17pdf", selectedValue));
  document
    .getElementById("tab18pdf")
    .setAttribute("href", getImageUrl("Tab18pdf", selectedValue));
  document
    .getElementById("tab19pdf")
    .setAttribute("href", getImageUrl("Tab19pdf", selectedValue));
  document
    .getElementById("tab20pdf")
    .setAttribute("href", getImageUrl("Tab20pdf", selectedValue));
  document
    .getElementById("tab21pdf")
    .setAttribute("href", getImageUrl("Tab21pdf", selectedValue));
  document
    .getElementById("tab22pdf")
    .setAttribute("href", getImageUrl("Tab22pdf", selectedValue));
  document
    .getElementById("tab23pdf")
    .setAttribute("href", getImageUrl("Tab23pdf", selectedValue));
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
    .getElementById("VisittheWebLink")
    .setAttribute("href", getAnchorLInk("VisittheWebLinkkey", selectedValue));
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
}
// on Language change End

const translatedImages = {
  // img
  HeaderRightImage: {
    en: "./images/UNNM-Logo-TAG.png",
    fr: "./images/french_logo_PNG3.png",
    spa: "./images/spanish_logo_PNG3.png",
  },
  FooterLeftImage: {
    en: "./images/GCM_LOGO_Horizontal_EN.jpg",
    fr: "./images/GCM_LOGO_Horizontal_FR.jpg",
    spa: "./images/GCM_LOGO_Horizontal_SP.jpg",
  },
  FooterRightImage: {
    en: "./images/UNNM-Logo-TAG.png",
    fr: "./images/french/2.png",
    spa: "./images/spanish/2.png",
  },
  PrincipleImage: {
    en: "./images/00_THE_GUIDING_PRINCIPLES.jpg",
    fr: "./images/french/PMM_FR_2.jpg",
    spa: "./images/spanish/PMM_ES_2.jpg",
  },
  StepImage: {
    en: "./images/6step_process_square.jpg",
    fr: "./images/french/6StepProcess_FR.jpg",
    spa: "./images/spanish/6StepProcess_ES.jpg",
  },
  headerImg: {
    en: "./images/gif/Cover_Mp4.gif",
    fr: "./images/french/obj_GCM_LOGO_Vertical_FR.jpg",
    spa: "./images/spanish/GIF_PMM_SP.gif",
  },
  img1key: {
    en: "./images/goals/E_SDG_PRINT-01.jpg",
    fr: "./images/goals/french/1.png",
    spa: "./images/goals/spanish/1.png",
  },
  img2key: {
    en: "./images/goals/E_SDG_PRINT-02.jpg",
    fr: "./images/goals/french/2.png",
    spa: "./images/goals/spanish/2.png",
  },
  img3key: {
    en: "./images/goals/E_SDG_PRINT-03.jpg",
    fr: "./images/goals/french/3.png",
    spa: "./images/goals/spanish/3.png",
  },
  img4key: {
    en: "./images/goals/E_SDG_PRINT-04.jpg",
    fr: "./images/goals/french/4.png",
    spa: "./images/goals/spanish/4.png",
  },
  img5key: {
    en: "./images/goals/E_SDG_PRINT-05.jpg",
    fr: "./images/goals/french/5.png",
    spa: "./images/goals/spanish/5.png",
  },
  img6key: {
    en: "./images/goals/E_SDG_PRINT-06.jpg",
    fr: "./images/goals/french/6.png",
    spa: "./images/goals/spanish/6.png",
  },
  img7key: {
    en: "./images/goals/E_SDG_PRINT-07.jpg",
    fr: "./images/goals/french/7.png",
    spa: "./images/goals/spanish/7.png",
  },
  img8key: {
    en: "./images/goals/E_SDG_PRINT-08.jpg",
    fr: "./images/goals/french/8.png",
    spa: "./images/goals/spanish/8.png",
  },
  img9key: {
    en: "./images/goals/E_SDG_PRINT-09.jpg",
    fr: "./images/goals/french/9.png",
    spa: "./images/goals/spanish/9.png",
  },
  img10key: {
    en: "./images/goals/E_SDG_PRINT-10.jpg",
    fr: "./images/goals/french/10.png",
    spa: "./images/goals/spanish/10.png",
  },
  img11key: {
    en: "./images/goals/E_SDG_PRINT-11.jpg",
    fr: "./images/goals/french/11.png",
    spa: "./images/goals/spanish/11.png",
  },
  img12key: {
    en: "./images/goals/E_SDG_PRINT-12.jpg",
    fr: "./images/goals/french/12.png",
    spa: "./images/goals/spanish/12.png",
  },
  img13key: {
    en: "./images/goals/E_SDG_PRINT-13.jpg",
    fr: "./images/goals/french/13.png",
    spa: "./images/goals/spanish/13.png",
  },
  img14key: {
    en: "./images/goals/E_SDG_PRINT-14.jpg",
    fr: "./images/goals/french/14.png",
    spa: "./images/goals/spanish/14.png",
  },
  img15key: {
    en: "./images/goals/E_SDG_PRINT-15.jpg",
    fr: "./images/goals/french/15.png",
    spa: "./images/goals/spanish/15.png",
  },
  img16key: {
    en: "./images/goals/E_SDG_PRINT-16.jpg",
    fr: "./images/goals/french/16.png",
    spa: "./images/goals/spanish/16.png",
  },
  img17key: {
    en: "./images/goals/E_SDG_PRINT-17.jpg",
    fr: "./images/goals/french/17.png",
    spa: "./images/goals/spanish/17.jpg",
  },
  firstTabImgkey: {
    en: "./images/objectivesImg/GCM_01_EN.svg",
    fr: "./images/objectivesImg/french/GCM_01_FR.svg",
    spa: "./images/objectivesImg/spanish/GCM_01_ES.svg",
  },
  secondTabImgkey: {
    en: "./images/objectivesImg/GCM_02_EN.svg",
    fr: "./images/objectivesImg/french/GCM_02_FR.svg",
    spa: "./images/objectivesImg/spanish/GCM_02_ES.svg",
  },
  thirdTabImgkey: {
    en: "./images/objectivesImg/GCM_03_EN.svg",
    fr: "./images/objectivesImg/french/GCM_03_FR.svg",
    spa: "./images/objectivesImg/spanish/GCM_03_ES.svg",
  },
  fourthTabImgkey: {
    en: "./images/objectivesImg/GCM_04_EN.svg",
    fr: "./images/objectivesImg/french/GCM_04_FR.svg",
    spa: "./images/objectivesImg/spanish/GCM_04_ES.svg",
  },
  fifthTabImgkey: {
    en: "./images/objectivesImg/GCM_05_EN.svg",
    fr: "./images/objectivesImg/french/GCM_05_FR.svg",
    spa: "./images/objectivesImg/spanish/GCM_05_ES.svg",
  },
  sixthTabImgkey: {
    en: "./images/objectivesImg/GCM_06_EN.svg",
    fr: "./images/objectivesImg/french/GCM_06_FR.svg",
    spa: "./images/objectivesImg/spanish/GCM_06_ES.svg",
  },
  seventhTabImgkey: {
    en: "./images/objectivesImg/GCM_07_EN.svg",
    fr: "./images/objectivesImg/french/GCM_07_FR.svg",
    spa: "./images/objectivesImg/spanish/GCM_07_ES.svg",
  },
  eighthTabImgkey: {
    en: "./images/objectivesImg/GCM_08_EN.svg",
    fr: "./images/objectivesImg/french/GCM_08_FR.svg",
    spa: "./images/objectivesImg/spanish/GCM_08_ES.svg",
  },
  ninthTabImgkey: {
    en: "./images/objectivesImg/GCM_09_EN.svg",
    fr: "./images/objectivesImg/french/GCM_09_FR.svg",
    spa: "./images/objectivesImg/spanish/GCM_09_ES.png",
  },
  tenthTabImgkey: {
    en: "./images/objectivesImg/GCM_10_EN.svg",
    fr: "./images/objectivesImg/french/GCM_10_FR.svg",
    spa: "./images/objectivesImg/spanish/GCM_10_ES.svg",
  },
  eleventhTabImgkey: {
    en: "./images/objectivesImg/GCM_11_EN.svg",
    fr: "./images/objectivesImg/french/GCM_11_FR.svg",
    spa: "./images/objectivesImg/spanish/GCM_11_ES.svg",
  },
  twelvethImgkey: {
    en: "./images/objectivesImg/GCM_12_EN.svg",
    fr: "./images/objectivesImg/french/GCM_12_FR.svg",
    spa: "./images/objectivesImg/spanish/GCM_12_ES.svg",
  },
  thirteenthImgkey: {
    en: "./images/objectivesImg/GCM_13_EN.svg",
    fr: "./images/objectivesImg/french/GCM_13_FR.svg",
    spa: "./images/objectivesImg/spanish/GCM_13_ES.svg",
  },
  fourteenthTabImgkey: {
    en: "./images/objectivesImg/GCM_14_EN.svg",
    fr: "./images/objectivesImg/french/GCM_14_FR.svg",
    spa: "./images/objectivesImg/spanish/GCM_14_ES.svg",
  },
  fifteenthTabImgkey: {
    en: "./images/objectivesImg/GCM_15_EN.svg",
    fr: "./images/objectivesImg/french/GCM_15_FR.svg",
    spa: "./images/objectivesImg/spanish/GCM_15_ES.svg",
  },
  sixteenthImgkey: {
    en: "./images/objectivesImg/GCM_16_EN.svg",
    fr: "./images/objectivesImg/french/GCM_16_FR.svg",
    spa: "./images/objectivesImg/spanish/GCM_16_ES.svg",
  },
  seventeenthImgkey: {
    en: "./images/objectivesImg/GCM_17_EN.svg",
    fr: "./images/objectivesImg/french/GCM_17_FR.svg",
    spa: "./images/objectivesImg/spanish/GCM_17_ES.svg",
  },
  eighteenthImgkey: {
    en: "./images/objectivesImg/GCM_18_EN.svg",
    fr: "./images/objectivesImg/french/GCM_18_FR.svg",
    spa: "./images/objectivesImg/spanish/GCM_18_ES.svg",
  },
  nineteenthImgkey: {
    en: "./images/objectivesImg/GCM_19_EN.svg",
    fr: "./images/objectivesImg/french/GCM_19_FR.svg",
    spa: "./images/objectivesImg/spanish/GCM_19_ES.svg",
  },
  twentythImgkey: {
    en: "./images/objectivesImg/GCM_20_EN.svg",
    fr: "./images/objectivesImg/french/GCM_20_FR.svg",
    spa: "./images/objectivesImg/spanish/GCM_20_ES.svg",
  },
  twentyonethImgkey: {
    en: "./images/objectivesImg/GCM_21_EN.svg",
    fr: "./images/objectivesImg/french/GCM_21_FR.svg",
    spa: "./images/objectivesImg/spanish/GCM_21_ES.svg",
  },
  twentytwothImgkey: {
    en: "./images/objectivesImg/GCM_22_EN.svg",
    fr: "./images/objectivesImg/french/GCM_22_FR.svg",
    spa: "./images/objectivesImg/spanish/GCM_22_ES.svg",
  },
  twentythreethImgkey: {
    en: "./images/objectivesImg/GCM_23_EN.svg",
    fr: "./images/objectivesImg/french/GCM_23_FR.svg",
    spa: "./images/objectivesImg/spanish/GCM_23_ES.svg",
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
  Tab1pdf: {
    en: "./pdf/English/23 GCM Objectives/1-DATA.pdf",
    fr: "./pdf/French/Objectifs du GCM/1 - DONNEES.pdf",
    spa: "./pdf/Spanish/Objetivos del GCM/1 DATOS.pdf",
  },
  Tab2pdf: {
    en: "./pdf/English/23 GCM Objectives/2-MINIMIZE THE ADVERSE DRIVERS.pdf",
    fr: "./pdf/French/Objectifs du GCM/2 - REDUIRE LES FACTEURS NEGATIFS.pdf",
    spa: "./pdf/Spanish/Objetivos del GCM/2 REDUCIR LOS FACTORES ADVERSOS.pdf",
  },
  Tab3pdf: {
    en: "./pdf/English/23 GCM Objectives/3-INFORMATION PROVISION.pdf",
    fr: "./pdf/French/Objectifs du GCM/3 - FOURNITURE D_INFORMATIONS.pdf",
    spa: "./pdf/Spanish/Objetivos del GCM/3 PROVISION DE INFORMACION.pdf",
  },
  Tab4pdf: {
    en: "./pdf/English/23 GCM Objectives/4-LEGAL IDENTITY.pdf",
    fr: "./pdf/French/Objectifs du GCM/4 - IDENTITE LEGALE ET PAPIERS.pdf",
    spa: "./pdf/Spanish/Objetivos del GCM/4 IDENTIDAD JURIDICA Y DOCUMENTACION.pdf",
  },
  Tab5pdf: {
    en: "./pdf/English/23 GCM Objectives/5-REGULAR PATHWAYS.pdf",
    fr: "./pdf/French/Objectifs du GCM/5 - FILIERES DE MIGRATION REGULIERE.pdf",
    spa: "./pdf/Spanish/Objetivos del GCM/5 VIAS DE MIGRACION REGULAR.pdf",
  },
  Tab6pdf: {
    en: "./pdf/English/23 GCM Objectives/6-RECRUITMENT AND DECENT WORK.pdf",
    fr: "./pdf/French/Objectifs du GCM/6 - RECRUTEMENT ET TRAVAIL DECENT.pdf",
    spa: "./pdf/Spanish/Objetivos del GCM/6 CONTRATACION Y TRABAJO DECENTE.pdf",
  },
  Tab7pdf: {
    en: "./pdf/English/23 GCM Objectives/7-REDUCE VULNERABILITIES.pdf",
    fr: "./pdf/French/Objectifs du GCM/7 - REDUIRE LA VULNERABILITE.pdf",
    spa: "./pdf/Spanish/Objetivos del GCM/7 REDUCIR VULNERABILIDADES.pdf",
  },
  Tab8pdf: {
    en: "./pdf/English/23 GCM Objectives/8-SAVE LIVES.pdf",
    fr: "./pdf/French/Objectifs du GCM/8 - SAUVER DES VIES.pdf",
    spa: "./pdf/Spanish/Objetivos del GCM/8 SALVADOR VIDAS.pdf",
  },
  Tab9pdf: {
    en: "./pdf/English/23 GCM Objectives/9-COUNTER SMUGGLING.pdf",
    fr: "./pdf/French/Objectifs du GCM/9 - COMBATTRE LE TRAFIC DE MIGRANTS.pdf",
    spa: "./pdf/Spanish/Objetivos del GCM/9 COMBATIR EL TRAFICO ILICITO DE MIGRANTES.pdf",
  },
  Tab10pdf: {
    en: "./pdf/English/23 GCM Objectives/10-ERADICATE TRAFFIKING.pdf",
    fr: "./pdf/French/Objectifs du GCM/10 - ERADIQUER LA TRAITE DE PERSONNES.pdf",
    spa: "./pdf/Spanish/Objetivos del GCM/10 ERRADICAS LA TRATA DE PERSONAS.pdf",
  },
  Tab11pdf: {
    en: "./pdf/English/23 GCM Objectives/11-MANAGE BORDERS.pdf",
    fr: "./pdf/French/Objectifs du GCM/11 - GERER LES FRONTIERES.pdf",
    spa: "./pdf/Spanish/Objetivos del GCM/11 GESTION DE FRONTERAS.pdf",
  },
  Tab12pdf: {
    en: "./pdf/English/23 GCM Objectives/12-SCREENING AND REFERRAL.pdf",
    fr: "./pdf/French/Objectifs du GCM/12 - CONTROLE, EVALUATION ET ORIENTATION.pdf",
    spa: "./pdf/Spanish/Objetivos del GCM/12 CONTROL EVALUACION Y ORIENTACION.pdf",
  },
  Tab13pdf: {
    en: "./pdf/English/23 GCM Objectives/13-ALTERNATIVES TO DETENTION.pdf",
    fr: "./pdf/French/Objectifs du GCM/13 - ALTERNATIVESA LA RETENCION.pdf",
    spa: "./pdf/Spanish/Objetivos del GCM/13 ALTERNATIVAS A LA DETENCION.pdf",
  },
  Tab14pdf: {
    en: "./pdf/English/23 GCM Objectives/14-CONSULAR PROTECTION.pdf",
    fr: "./pdf/French/Objectifs du GCM/14 - PROTECTION CONSULAIRE.pdf",
    spa: "./pdf/Spanish/Objetivos del GCM/14 PROTECCION CONSULAR.pdf",
  },
  Tab15pdf: {
    en: "./pdf/English/23 GCM Objectives/15-ACCESS TO BASIC SERVICES.pdf",
    fr: "./pdf/French/Objectifs du GCM/15 - ACCES AUX SERVICES DE BASE.pdf",
    spa: "./pdf/Spanish/Objetivos del GCM/15 ACCESO A SERVICIOS BASICOS.pdf",
  },
  Tab16pdf: {
    en: "./pdf/English/23 GCM Objectives/16-INCLUSION AND SOCIAL COHESION.pdf",
    fr: "./pdf/French/Objectifs du GCM/16 - INTEGRATION ET COHESION SOCIALE.pdf",
    spa: "./pdf/Spanish/Objetivos del GCM/16 INCLUSION Y COHESION SOCIAL.pdf",
  },
  Tab17pdf: {
    en: "./pdf/English/23 GCM Objectives/17-ELIMINATE DISCRIMINATION.pdf",
    fr: "./pdf/French/Objectifs du GCM/17 - ELIMINER LES DISCIMINATIONS.pdf",
    spa: "./pdf/Spanish/Objetivos del GCM/17 ELIMINAR LAS DISCRIMINACIONES.pdf",
  },
  Tab18pdf: {
    en: "./pdf/English/23 GCM Objectives/18-SKILLS DEVELOPMENT AND RECOGNITION.pdf",
    fr: "./pdf/French/Objectifs du GCM/18 - PERFECTIONNEMENT ET RECONNAISSANCE DES QUALIFICATIONS.pdf",
    spa: "./pdf/Spanish/Objetivos del GCM/18 DESARROLLO Y CONOCIMIENTO DE CUALIFICACIONES.pdf",
  },
  Tab19pdf: {
    en: "./pdf/English/23 GCM Objectives/19-MIGRANT AND DIASPORA CONTRIBUTIONS.pdf",
    fr: "./pdf/French/Objectifs du GCM/19 - CONTRIBUTION DES MIGRANTS ET DIASPORA.pdf",
    spa: "./pdf/Spanish/Objetivos del GCM/19 CONTRIBUCION DE LOS MIGRANTES Y LAS DIASPORAS.pdf",
  },
  Tab20pdf: {
    en: "./pdf/English/23 GCM Objectives/20-REMITTANCES.pdf",
    fr: "./pdf/French/Objectifs du GCM/20 - ENVOIS DE FONDS.pdf",
    spa: "./pdf/Spanish/Objetivos del GCM/20 TRANSFERENCIAS DE REMESAS.pdf",
  },
  Tab21pdf: {
    en: "./pdf/English/23 GCM Objectives/21-DIGNIFIED RETURN AND REINTEGRATION.pdf",
    fr: "./pdf/French/Objectifs du GCM/21 - RETOUR DIGNE ET REINTEGRATION DURABLE.pdf",
    spa: "./pdf/Spanish/Objetivos del GCM/21 RETORNO DIGNO Y REINTEGRACION.pdf",
  },
  Tab22pdf: {
    en: "./pdf/English/23 GCM Objectives/22-SOCIAL PROTECTION.pdf",
    fr: "./pdf/French/Objectifs du GCM/22 - PROTECTION SOCIALE.pdf",
    spa: "./pdf/Spanish/Objetivos del GCM/22 PROTECCION SOCIAL.pdf",
  },
  Tab23pdf: {
    en: "./pdf/English/23 GCM Objectives/23-INTERNATIONAL COOPERATION.pdf",
    fr: "./pdf/French/Objectifs du GCM/23 - COOPERATION INTERNATIONALE.pdf",
    spa: "./pdf/Spanish/Objetivos del GCM/23 COOPERACION INTERNACIONAL.pdf",
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
  VisittheWebLinkkey: {
    en: "https://migrationnetwork.un.org/hub/repository-of-practices",
    fr: "https://migrationnetwork.un.org/fr/hub/repository-of-practices",
    spa: "https://migrationnetwork.un.org/es/hub/repository-of-practices",
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
