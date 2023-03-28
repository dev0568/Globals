// on load
$(document).ready(function () {
  tinyi18n.loadTranslations("./translation/i18n.json");
  const appLanguage = localStorage?.getItem("lang");
  // step btn 6
  if (appLanguage == "fr") {
    $(".step6links").css("right", "32%");
  } else if (appLanguage == "spa") {
    $(".step6links").css("right", "32%%");
  } else {
    $(".step6links").css("right", "40%");
  }
  // step btn 4
  if (appLanguage == "fr") {
    $(".step4links").css("right", "65%");
  } else if (appLanguage == "spa") {
    $(".step4links").css("right", "68%");
  } else {
    $(".step4links").css("right", "62%");
  }
  // step btn 2
  if (appLanguage == "fr") {
    $(".step2links").css("right", "9%");
  } else if (appLanguage == "spa") {
    $(".step2links").css("right", "11%");
  } else {
    $(".step2links").css("right", "9%");
  }
  if (appLanguage == "fr") {
    $(".cardhide").css("display", "none");
  } else {
    $(".cardhide").css("display", "block");
  }
  if (appLanguage == "spa") {
    $(".cardhideES").css("display", "none");
  } else {
    $(".cardhideES").css("display", "block");
  }

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
    .getElementById("objective")
    .setAttribute("src", getImageUrl("ObjectiveImage", appLanguage));
  // pdf
  // step1
  document
    .getElementById("step1pdf")
    .setAttribute("href", getImageUrl("Step1pdf", appLanguage));
  document
    .getElementById("step1questionpdf")
    .setAttribute("href", getImageUrl("Step1questionpdf", appLanguage));
  document
    .getElementById("step1actionpdf")
    .setAttribute("href", getImageUrl("Step1actionpdf", appLanguage));
  document
    .getElementById("step1checklistpdf")
    .setAttribute("href", getImageUrl("Step1checklistpdf", appLanguage));
  document
    .getElementById("step1toolpdf")
    .setAttribute("href", getImageUrl("Step1toolpdf", appLanguage));
  // step2
  document
    .getElementById("step2pdf")
    .setAttribute("href", getImageUrl("Step2pdf", appLanguage));
  document
    .getElementById("step2questionpdf")
    .setAttribute("href", getImageUrl("Step2questionpdf1", appLanguage));
  document
    .getElementById("step2actionpdf")
    .setAttribute("href", getImageUrl("Step2actionpdf", appLanguage));
  document
    .getElementById("step2checklistpdf")
    .setAttribute("href", getImageUrl("Step2checklistpdf", appLanguage));
  document
    .getElementById("step2toolpdf")
    .setAttribute("href", getImageUrl("Step2toolpdf", appLanguage));
  // step3
  document
    .getElementById("step3pdf")
    .setAttribute("href", getImageUrl("Step3pdf", appLanguage));
  document
    .getElementById("step3questionpdf")
    .setAttribute("href", getImageUrl("Step3questionpdf", appLanguage));
  document
    .getElementById("step3actionpdf")
    .setAttribute("href", getImageUrl("Step3actionpdf", appLanguage));
  document
    .getElementById("step3checklistpdf")
    .setAttribute("href", getImageUrl("Step3checklistpdf", appLanguage));
  document
    .getElementById("step3toolpdf")
    .setAttribute("href", getImageUrl("Step3toolpdf", appLanguage));
  // step4
  document
    .getElementById("step4pdf")
    .setAttribute("href", getImageUrl("Step4pdf", appLanguage));
  document
    .getElementById("step4questionpdf")
    .setAttribute("href", getImageUrl("Step4questionpdf", appLanguage));
  document
    .getElementById("step4actionpdf")
    .setAttribute("href", getImageUrl("Step4actionpdf", appLanguage));
  document
    .getElementById("step4checklistpdf")
    .setAttribute("href", getImageUrl("Step4checklistpdf", appLanguage));
  document
    .getElementById("step4toolpdf")
    .setAttribute("href", getImageUrl("Step4toolpdf", appLanguage));
  // step5
  document
    .getElementById("step5pdf")
    .setAttribute("href", getImageUrl("Step5pdf", appLanguage));
  document
    .getElementById("step5questionpdf")
    .setAttribute("href", getImageUrl("Step5questionpdf", appLanguage));
  document
    .getElementById("step5actionpdf")
    .setAttribute("href", getImageUrl("Step5actionpdf", appLanguage));
  document
    .getElementById("step5checklistpdf")
    .setAttribute("href", getImageUrl("Step5checklistpdf", appLanguage));
  document
    .getElementById("step5toolpdf")
    .setAttribute("href", getImageUrl("Step5toolpdf", appLanguage));
  // step6
  document
    .getElementById("step6pdf")
    .setAttribute("href", getImageUrl("Step6pdf", appLanguage));
  document
    .getElementById("step6questionpdf")
    .setAttribute("href", getImageUrl("Step6questionpdf", appLanguage));
  document
    .getElementById("step6actionpdf")
    .setAttribute("href", getImageUrl("Step6actionpdf", appLanguage));
  document
    .getElementById("step6checklistpdf")
    .setAttribute("href", getImageUrl("Step6checklistpdf", appLanguage));
  document
    .getElementById("step6toolpdf")
    .setAttribute("href", getImageUrl("Step6toolpdf", appLanguage));
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
    .getElementById("step1too1Link")
    .setAttribute("href", getAnchorLInk("step1too1LinkKey", appLanguage));
  document
    .getElementById("step3action1Link1")
    .setAttribute("href", getAnchorLInk("step3action1Link1Key", appLanguage));
  $("#step1too1Link").text(getAnchorLInk("step1too1LinkKey", appLanguage));
  $("#step3action1Link1").text(
    getAnchorLInk("step3action1Link1Key", appLanguage)
  );

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
  // steps links
  $(".ochrLink").attr("href", getAnchorLInk("ochrLinkKey", appLanguage));
  $(".ochrLink2").attr("href", getAnchorLInk("ochrLink2Key", appLanguage));

  $(".unwomenLink").attr("href", getAnchorLInk("unwomenLinkKey", appLanguage));
  $(".iloLink").attr("href", getAnchorLInk("iloLinkKey", appLanguage));
  $(".unicefLink").attr("href", getAnchorLInk("unicefLinkKey", appLanguage));
  $(".hrbaLink").attr("href", getAnchorLInk("hrbaLinkKey", appLanguage));
  $(".migrationdataportalLink").attr(
    "href",
    getAnchorLInk("migrationdataportalLinkKey", appLanguage)
  );
  $(".migrationdataportalLink").text(
    getAnchorLInk("migrationdataportalLinkKey", appLanguage)
  );
  $(".migrationdataportalhubLink").attr(
    "href",
    getAnchorLInk("migrationdataportalhubLinkKey", appLanguage)
  );
  $(".migrationdataportalhubLink").text(
    getAnchorLInk("migrationdataportalhubLinkKey", appLanguage)
  );
  $(".iloLink").text(getAnchorLInk("iloLinkKey", appLanguage));
  $(".ochrLink").text(getAnchorLInk("ochrLinkKey", appLanguage));
  $(".ochrLink2").text(getAnchorLInk("ochrLink2Key", appLanguage));
  $(".unicefLink").text(getAnchorLInk("unicefLinkKey", appLanguage));
  $(".unwomenLink").text(getAnchorLInk("unwomenLinkKey", appLanguage));
  document
    .getElementById("Link00")
    .setAttribute("href", getAnchorLInk("Link00key", appLanguage));
  document
    .getElementById("Link0")
    .setAttribute("href", getAnchorLInk("Link0key", appLanguage));
  document
    .getElementById("Link1")
    .setAttribute("href", getAnchorLInk("Link1key", appLanguage));
  document
    .getElementById("Link2")
    .setAttribute("href", getAnchorLInk("Link2key", appLanguage));
  document
    .getElementById("Link3")
    .setAttribute("href", getAnchorLInk("Link3key", appLanguage));
  document
    .getElementById("Link4")
    .setAttribute("href", getAnchorLInk("Link4key", appLanguage));
  document
    .getElementById("Link5")
    .setAttribute("href", getAnchorLInk("Link5key", appLanguage));
  document
    .getElementById("Link6")
    .setAttribute("href", getAnchorLInk("Link6key", appLanguage));
  document
    .getElementById("Link7")
    .setAttribute("href", getAnchorLInk("Link7key", appLanguage));
  document
    .getElementById("Link8")
    .setAttribute("href", getAnchorLInk("Link8key", appLanguage));
  document
    .getElementById("Link9")
    .setAttribute("href", getAnchorLInk("Link9key", appLanguage));
  document
    .getElementById("Link10")
    .setAttribute("href", getAnchorLInk("Link10key", appLanguage));
  document
    .getElementById("Link11")
    .setAttribute("href", getAnchorLInk("Link11key", appLanguage));
  document
    .getElementById("Link12a")
    .setAttribute("href", getAnchorLInk("Link12akey", appLanguage));
  document
    .getElementById("Link12")
    .setAttribute("href", getAnchorLInk("Link12key", appLanguage));
  document
    .getElementById("Link13")
    .setAttribute("href", getAnchorLInk("Link13key", appLanguage));
  document
    .getElementById("Link14")
    .setAttribute("href", getAnchorLInk("Link14key", appLanguage));
  document
    .getElementById("Link15")
    .setAttribute("href", getAnchorLInk("Link15key", appLanguage));
  document
    .getElementById("Link16")
    .setAttribute("href", getAnchorLInk("Link16key", appLanguage));
  document
    .getElementById("Link17")
    .setAttribute("href", getAnchorLInk("Link17key", appLanguage));
  document
    .getElementById("Link18")
    .setAttribute("href", getAnchorLInk("Link18key", appLanguage));
  document
    .getElementById("Link19")
    .setAttribute("href", getAnchorLInk("Link19key", appLanguage));
  document
    .getElementById("Link20")
    .setAttribute("href", getAnchorLInk("Link20key", appLanguage));
  document
    .getElementById("Link21")
    .setAttribute("href", getAnchorLInk("Link21key", appLanguage));
  document
    .getElementById("Link22")
    .setAttribute("href", getAnchorLInk("Link22key", appLanguage));
  document
    .getElementById("Link23")
    .setAttribute("href", getAnchorLInk("Link23key", appLanguage));
  document
    .getElementById("Link24")
    .setAttribute("href", getAnchorLInk("Link24key", appLanguage));
  document
    .getElementById("Link25")
    .setAttribute("href", getAnchorLInk("Link25key", appLanguage));
  document
    .getElementById("Link26")
    .setAttribute("href", getAnchorLInk("Link26key", appLanguage));
  document
    .getElementById("Link27")
    .setAttribute("href", getAnchorLInk("Link27key", appLanguage));
  document
    .getElementById("Link28")
    .setAttribute("href", getAnchorLInk("Link28key", appLanguage));
  document
    .getElementById("Link29")
    .setAttribute("href", getAnchorLInk("Link29key", appLanguage));
  document
    .getElementById("Link30")
    .setAttribute("href", getAnchorLInk("Link30key", appLanguage));
  document
    .getElementById("Link31")
    .setAttribute("href", getAnchorLInk("Link31key", appLanguage));
  document
    .getElementById("Link32")
    .setAttribute("href", getAnchorLInk("Link32key", appLanguage));
  document
    .getElementById("Link33")
    .setAttribute("href", getAnchorLInk("Link33key", appLanguage));
  document
    .getElementById("Link34")
    .setAttribute("href", getAnchorLInk("Link34key", appLanguage));
  document
    .getElementById("Link35")
    .setAttribute("href", getAnchorLInk("Link35key", appLanguage));
  document
    .getElementById("Link21b")
    .setAttribute("href", getAnchorLInk("Link21key", appLanguage));
  document
    .getElementById("Link36")
    .setAttribute("href", getAnchorLInk("Link36key", appLanguage));
  document
    .getElementById("Link37")
    .setAttribute("href", getAnchorLInk("Link37key", appLanguage));
  document
    .getElementById("Link38")
    .setAttribute("href", getAnchorLInk("Link38key", appLanguage));
  document
    .getElementById("Link39")
    .setAttribute("href", getAnchorLInk("Link39key", appLanguage));
  document
    .getElementById("Link40")
    .setAttribute("href", getAnchorLInk("Link40key", appLanguage));
  document
    .getElementById("Link41")
    .setAttribute("href", getAnchorLInk("Link41key", appLanguage));
  document
    .getElementById("Link42")
    .setAttribute("href", getAnchorLInk("Link42key", appLanguage));
  document
    .getElementById("Link43")
    .setAttribute("href", getAnchorLInk("Link43key", appLanguage));
  document
    .getElementById("Link44")
    .setAttribute("href", getAnchorLInk("Link44key", appLanguage));
  document
    .getElementById("Link45")
    .setAttribute("href", getAnchorLInk("Link45key", appLanguage));
  document
    .getElementById("Link46")
    .setAttribute("href", getAnchorLInk("Link46key", appLanguage));
  document
    .getElementById("Link47")
    .setAttribute("href", getAnchorLInk("Link47key", appLanguage));
  document
    .getElementById("Link48")
    .setAttribute("href", getAnchorLInk("Link48key", appLanguage));
  document
    .getElementById("Link49")
    .setAttribute("href", getAnchorLInk("Link49key", appLanguage));
  document
    .getElementById("Link50")
    .setAttribute("href", getAnchorLInk("Link50key", appLanguage));
  document
    .getElementById("Link51")
    .setAttribute("href", getAnchorLInk("Link51key", appLanguage));
  $("#Link00").text(getAnchorLInk("Link00key", appLanguage));
  $("#Link0").text(getAnchorLInk("Link0key", appLanguage));
  $("#Link1").text(getAnchorLInk("Link1key", appLanguage));
  $("#Link2").text(getAnchorLInk("Link2key", appLanguage));
  $("#Link3").text(getAnchorLInk("Link3key", appLanguage));
  $("#Link4").text(getAnchorLInk("Link4key", appLanguage));
  $("#Link5").text(getAnchorLInk("Link5key", appLanguage));
  $("#Link6").text(getAnchorLInk("Link6key", appLanguage));
  $("#Link7").text(getAnchorLInk("Link7key", appLanguage));
  $("#Link8").text(getAnchorLInk("Link8key", appLanguage));
  $("#Link9").text(getAnchorLInk("Link9key", appLanguage));
  $("#Link10").text(getAnchorLInk("Link10key", appLanguage));
  $("#Link11").text(getAnchorLInk("Link11key", appLanguage));
  $("#Link12a").text(getAnchorLInk("Link12akey", appLanguage));
  $("#Link12").text(getAnchorLInk("Link12key", appLanguage));
  $("#Link13").text(getAnchorLInk("Link13key", appLanguage));
  $("#Link14").text(getAnchorLInk("Link14key", appLanguage));
  $("#Link15").text(getAnchorLInk("Link15key", appLanguage));
  $("#Link16").text(getAnchorLInk("Link16key", appLanguage));
  $("#Link17").text(getAnchorLInk("Link17key", appLanguage));
  $("#Link18").text(getAnchorLInk("Link18key", appLanguage));
  $("#Link19").text(getAnchorLInk("Link19key", appLanguage));
  $("#Link20").text(getAnchorLInk("Link20key", appLanguage));
  $("#Link21").text(getAnchorLInk("Link21key", appLanguage));
  $("#Link22").text(getAnchorLInk("Link22key", appLanguage));
  $("#Link23").text(getAnchorLInk("Link23key", appLanguage));
  $("#Link24").text(getAnchorLInk("Link24key", appLanguage));
  $("#Link25").text(getAnchorLInk("Link25key", appLanguage));
  $("#Link26").text(getAnchorLInk("Link26key", appLanguage));
  $("#Link27").text(getAnchorLInk("Link27key", appLanguage));
  $("#Link28").text(getAnchorLInk("Link28key", appLanguage));
  $("#Link29").text(getAnchorLInk("Link29key", appLanguage));
  $("#Link30").text(getAnchorLInk("Link30key", appLanguage));
  $("#Link31").text(getAnchorLInk("Link31key", appLanguage));
  $("#Link32").text(getAnchorLInk("Link32key", appLanguage));
  $("#Link33").text(getAnchorLInk("Link33key", appLanguage));
  $("#Link34").text(getAnchorLInk("Link34key", appLanguage));
  $("#Link35").text(getAnchorLInk("Link35key", appLanguage));
  $("#Link21b").text(getAnchorLInk("Link21key", appLanguage));
  $("#Link36").text(getAnchorLInk("Link36key", appLanguage));
  $("#Link37").text(getAnchorLInk("Link37key", appLanguage));
  $("#Link38").text(getAnchorLInk("Link38key", appLanguage));
  $("#Link39").text(getAnchorLInk("Link39key", appLanguage));
  $("#Link40").text(getAnchorLInk("Link40key", appLanguage));
  $("#Link41").text(getAnchorLInk("Link41key", appLanguage));
  $("#Link42").text(getAnchorLInk("Link42key", appLanguage));
  $("#Link43").text(getAnchorLInk("Link43key", appLanguage));
  $("#Link44").text(getAnchorLInk("Link44key", appLanguage));
  $("#Link45").text(getAnchorLInk("Link45key", appLanguage));
  $("#Link46").text(getAnchorLInk("Link46key", appLanguage));
  $("#Link47").text(getAnchorLInk("Link47key", appLanguage));
  $("#Link48").text(getAnchorLInk("Link48key", appLanguage));
  $("#Link49").text(getAnchorLInk("Link49key", appLanguage));
  $("#Link50").text(getAnchorLInk("Link50key", appLanguage));
  $("#Link51").text(getAnchorLInk("Link51key", appLanguage));

  $(".guidepdf").attr("href", getImageUrl("GuidepdfKey", appLanguage));
  $(".bookletpdf").attr("href", getImageUrl("BookletpdfKey", appLanguage));
});

// on loade end

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
  // step btn 6
  if (selectedValue == "fr") {
    $(".step6links").css("right", "32%");
  } else if (selectedValue == "spa") {
    $(".step6links").css("right", "32%%");
  } else {
    $(".step6links").css("right", "40%");
  }
  // step btn 4
  if (selectedValue == "fr") {
    $(".step4links").css("right", "65%");
  } else if (selectedValue == "spa") {
    $(".step4links").css("right", "68%");
  } else {
    $(".step4links").css("right", "62%");
  }
  // step btn 2
  if (selectedValue == "fr") {
    $(".step2links").css("right", "9%");
  } else if (selectedValue == "spa") {
    $(".step2links").css("right", "11%");
  } else {
    $(".step2links").css("right", "9%");
  }
  if (selectedValue == "fr") {
    $(".cardhide").css("display", "none");
  } else {
    $(".cardhide").css("display", "block");
  }
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
    .getElementById("objective")
    .setAttribute("src", getImageUrl("ObjectiveImage", selectedValue));
  // pdf
  // step1
  document
    .getElementById("step1pdf")
    .setAttribute("href", getImageUrl("Step1pdf", selectedValue));
  document
    .getElementById("step1questionpdf")
    .setAttribute("href", getImageUrl("Step1questionpdf", selectedValue));
  document
    .getElementById("step1actionpdf")
    .setAttribute("href", getImageUrl("Step1actionpdf", selectedValue));
  document
    .getElementById("step1checklistpdf")
    .setAttribute("href", getImageUrl("Step1checklistpdf", selectedValue));
  document
    .getElementById("step1toolpdf")
    .setAttribute("href", getImageUrl("Step1toolpdf", selectedValue));
  // step2
  document
    .getElementById("step2pdf")
    .setAttribute("href", getImageUrl("Step2pdf", selectedValue));
  document
    .getElementById("step2questionpdf")
    .setAttribute("href", getImageUrl("Step2questionpdf1", selectedValue));
  document
    .getElementById("step2actionpdf")
    .setAttribute("href", getImageUrl("Step2actionpdf", selectedValue));
  document
    .getElementById("step2checklistpdf")
    .setAttribute("href", getImageUrl("Step2checklistpdf", selectedValue));
  document
    .getElementById("step2toolpdf")
    .setAttribute("href", getImageUrl("Step2toolpdf", selectedValue));
  // step3
  document
    .getElementById("step3pdf")
    .setAttribute("href", getImageUrl("Step3pdf", selectedValue));
  document
    .getElementById("step3questionpdf")
    .setAttribute("href", getImageUrl("Step3questionpdf", selectedValue));
  document
    .getElementById("step3actionpdf")
    .setAttribute("href", getImageUrl("Step3actionpdf", selectedValue));
  document
    .getElementById("step3checklistpdf")
    .setAttribute("href", getImageUrl("Step3checklistpdf", selectedValue));
  document
    .getElementById("step3toolpdf")
    .setAttribute("href", getImageUrl("Step3toolpdf", selectedValue));
  // step4
  document
    .getElementById("step4pdf")
    .setAttribute("href", getImageUrl("Step4pdf", selectedValue));
  document
    .getElementById("step4questionpdf")
    .setAttribute("href", getImageUrl("Step4questionpdf", selectedValue));
  document
    .getElementById("step4actionpdf")
    .setAttribute("href", getImageUrl("Step4actionpdf", selectedValue));
  document
    .getElementById("step4checklistpdf")
    .setAttribute("href", getImageUrl("Step4checklistpdf", selectedValue));
  document
    .getElementById("step4toolpdf")
    .setAttribute("href", getImageUrl("Step4toolpdf", selectedValue));
  // step5
  document
    .getElementById("step5pdf")
    .setAttribute("href", getImageUrl("Step5pdf", selectedValue));
  document
    .getElementById("step5questionpdf")
    .setAttribute("href", getImageUrl("Step5questionpdf", selectedValue));
  document
    .getElementById("step5actionpdf")
    .setAttribute("href", getImageUrl("Step5actionpdf", selectedValue));
  document
    .getElementById("step5checklistpdf")
    .setAttribute("href", getImageUrl("Step5checklistpdf", selectedValue));
  document
    .getElementById("step5toolpdf")
    .setAttribute("href", getImageUrl("Step5toolpdf", selectedValue));
  // step6
  document
    .getElementById("step6pdf")
    .setAttribute("href", getImageUrl("Step6pdf", selectedValue));
  document
    .getElementById("step6questionpdf")
    .setAttribute("href", getImageUrl("Step6questionpdf", selectedValue));
  document
    .getElementById("step6actionpdf")
    .setAttribute("href", getImageUrl("Step6actionpdf", selectedValue));
  document
    .getElementById("step6checklistpdf")
    .setAttribute("href", getImageUrl("Step6checklistpdf", selectedValue));
  document
    .getElementById("step6toolpdf")
    .setAttribute("href", getImageUrl("Step6toolpdf", selectedValue));
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
    .getElementById("step1too1Link")
    .setAttribute("href", getAnchorLInk("step1too1LinkKey", selectedValue));
  document
    .getElementById("step3action1Link1")
    .setAttribute("href", getAnchorLInk("step3action1Link1Key", selectedValue));
  $("#step1too1Link").text(getAnchorLInk("step1too1LinkKey", selectedValue));
  $("#step3action1Link1").text(
    getAnchorLInk("step3action1Link1Key", selectedValue)
  );
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
  // steps links
  $(".ochrLink").attr("href", getAnchorLInk("ochrLinkKey", selectedValue));
  $(".ochrLink2").attr("href", getAnchorLInk("ochrLink2Key", selectedValue));
  $(".unwomenLink").attr(
    "href",
    getAnchorLInk("unwomenLinkKey", selectedValue)
  );
  $(".iloLink").attr("href", getAnchorLInk("iloLinkKey", selectedValue));
  $(".unicefLink").attr("href", getAnchorLInk("unicefLinkKey", selectedValue));
  $(".hrbaLink").attr("href", getAnchorLInk("hrbaLinkKey", selectedValue));
  $(".migrationdataportalLink").attr(
    "href",
    getAnchorLInk("migrationdataportalLinkKey", selectedValue)
  );
  $(".iloLink").text(getAnchorLInk("iloLinkKey", selectedValue));
  $(".migrationdataportalLink").text(
    getAnchorLInk("migrationdataportalLinkKey", selectedValue)
  );
  $(".migrationdataportalhubLink").attr(
    "href",
    getAnchorLInk("migrationdataportalhubLinkKey", selectedValue)
  );
  $(".migrationdataportalhubLink").text(
    getAnchorLInk("migrationdataportalhubLinkKey", selectedValue)
  );
  $(".ochrLink").text(getAnchorLInk("ochrLinkKey", selectedValue));
  $(".ochrLink2").text(getAnchorLInk("ochrLink2Key", selectedValue));
  $(".unicefLink").text(getAnchorLInk("unicefLinkKey", selectedValue));
  $(".unwomenLink").text(getAnchorLInk("unwomenLinkKey", selectedValue));
  document
    .getElementById("Link00")
    .setAttribute("href", getAnchorLInk("Link00key", selectedValue));
  document
    .getElementById("Link0")
    .setAttribute("href", getAnchorLInk("Link0key", selectedValue));
  document
    .getElementById("Link1")
    .setAttribute("href", getAnchorLInk("Link1key", selectedValue));
  document
    .getElementById("Link2")
    .setAttribute("href", getAnchorLInk("Link2key", selectedValue));
  document
    .getElementById("Link3")
    .setAttribute("href", getAnchorLInk("Link3key", selectedValue));
  document
    .getElementById("Link4")
    .setAttribute("href", getAnchorLInk("Link4key", selectedValue));
  document
    .getElementById("Link5")
    .setAttribute("href", getAnchorLInk("Link5key", selectedValue));
  document
    .getElementById("Link6")
    .setAttribute("href", getAnchorLInk("Link6key", selectedValue));
  document
    .getElementById("Link7")
    .setAttribute("href", getAnchorLInk("Link7key", selectedValue));
  document
    .getElementById("Link8")
    .setAttribute("href", getAnchorLInk("Link8key", selectedValue));
  document
    .getElementById("Link9")
    .setAttribute("href", getAnchorLInk("Link9key", selectedValue));
  document
    .getElementById("Link10")
    .setAttribute("href", getAnchorLInk("Link10key", selectedValue));
  document
    .getElementById("Link10")
    .setAttribute("href", getAnchorLInk("Link10key", selectedValue));
  document
    .getElementById("Link11")
    .setAttribute("href", getAnchorLInk("Link11key", selectedValue));
  document
    .getElementById("Link12a")
    .setAttribute("href", getAnchorLInk("Link12akey", selectedValue));
  document
    .getElementById("Link12")
    .setAttribute("href", getAnchorLInk("Link12key", selectedValue));
  document
    .getElementById("Link13")
    .setAttribute("href", getAnchorLInk("Link13key", selectedValue));
  document
    .getElementById("Link14")
    .setAttribute("href", getAnchorLInk("Link14key", selectedValue));
  document
    .getElementById("Link15")
    .setAttribute("href", getAnchorLInk("Link15key", selectedValue));
  document
    .getElementById("Link16")
    .setAttribute("href", getAnchorLInk("Link16key", selectedValue));
  document
    .getElementById("Link17")
    .setAttribute("href", getAnchorLInk("Link17key", selectedValue));
  document
    .getElementById("Link18")
    .setAttribute("href", getAnchorLInk("Link18key", selectedValue));
  document
    .getElementById("Link19")
    .setAttribute("href", getAnchorLInk("Link19key", selectedValue));
  document
    .getElementById("Link20")
    .setAttribute("href", getAnchorLInk("Link20key", selectedValue));
  document
    .getElementById("Link21")
    .setAttribute("href", getAnchorLInk("Link21key", selectedValue));
  document
    .getElementById("Link22")
    .setAttribute("href", getAnchorLInk("Link22key", selectedValue));
  document
    .getElementById("Link23")
    .setAttribute("href", getAnchorLInk("Link23key", selectedValue));
  document
    .getElementById("Link24")
    .setAttribute("href", getAnchorLInk("Link24key", selectedValue));
  document
    .getElementById("Link25")
    .setAttribute("href", getAnchorLInk("Link25key", selectedValue));
  document
    .getElementById("Link26")
    .setAttribute("href", getAnchorLInk("Link26key", selectedValue));
  document
    .getElementById("Link27")
    .setAttribute("href", getAnchorLInk("Link27key", selectedValue));
  document
    .getElementById("Link28")
    .setAttribute("href", getAnchorLInk("Link28key", selectedValue));
  document
    .getElementById("Link29")
    .setAttribute("href", getAnchorLInk("Link29key", selectedValue));
  document
    .getElementById("Link30")
    .setAttribute("href", getAnchorLInk("Link30key", selectedValue));
  document
    .getElementById("Link31")
    .setAttribute("href", getAnchorLInk("Link31key", selectedValue));
  document
    .getElementById("Link32")
    .setAttribute("href", getAnchorLInk("Link32key", selectedValue));
  document
    .getElementById("Link33")
    .setAttribute("href", getAnchorLInk("Link33key", selectedValue));
  document
    .getElementById("Link34")
    .setAttribute("href", getAnchorLInk("Link34key", selectedValue));
  document
    .getElementById("Link35")
    .setAttribute("href", getAnchorLInk("Link35key", selectedValue));
  document
    .getElementById("Link21b")
    .setAttribute("href", getAnchorLInk("Link21key", selectedValue));
  document
    .getElementById("Link36")
    .setAttribute("href", getAnchorLInk("Link36key", selectedValue));
  document
    .getElementById("Link37")
    .setAttribute("href", getAnchorLInk("Link37key", selectedValue));
  document
    .getElementById("Link38")
    .setAttribute("href", getAnchorLInk("Link38key", selectedValue));
  document
    .getElementById("Link39")
    .setAttribute("href", getAnchorLInk("Link39key", selectedValue));
  document
    .getElementById("Link40")
    .setAttribute("href", getAnchorLInk("Link40key", selectedValue));
  document
    .getElementById("Link41")
    .setAttribute("href", getAnchorLInk("Link41key", selectedValue));
  document
    .getElementById("Link42")
    .setAttribute("href", getAnchorLInk("Link42key", selectedValue));
  document
    .getElementById("Link43")
    .setAttribute("href", getAnchorLInk("Link43key", selectedValue));
  document
    .getElementById("Link44")
    .setAttribute("href", getAnchorLInk("Link44key", selectedValue));
  document
    .getElementById("Link45")
    .setAttribute("href", getAnchorLInk("Link45key", selectedValue));
  document
    .getElementById("Link46")
    .setAttribute("href", getAnchorLInk("Link46key", selectedValue));
  document
    .getElementById("Link47")
    .setAttribute("href", getAnchorLInk("Link47key", selectedValue));
  document
    .getElementById("Link48")
    .setAttribute("href", getAnchorLInk("Link48key", selectedValue));
  document
    .getElementById("Link49")
    .setAttribute("href", getAnchorLInk("Link49key", selectedValue));
  document
    .getElementById("Link50")
    .setAttribute("href", getAnchorLInk("Link50key", selectedValue));
  document
    .getElementById("Link51")
    .setAttribute("href", getAnchorLInk("Link51key", selectedValue));
  $("#Link00").text(getAnchorLInk("Link00key", selectedValue));
  $("#Link0").text(getAnchorLInk("Link0key", selectedValue));
  $("#Link1").text(getAnchorLInk("Link1key", selectedValue));
  $("#Link2").text(getAnchorLInk("Link2key", selectedValue));
  $("#Link3").text(getAnchorLInk("Link3key", selectedValue));
  $("#Link4").text(getAnchorLInk("Link4key", selectedValue));
  $("#Link5").text(getAnchorLInk("Link5key", selectedValue));
  $("#Link6").text(getAnchorLInk("Link6key", selectedValue));
  $("#Link7").text(getAnchorLInk("Link7key", selectedValue));
  $("#Link8").text(getAnchorLInk("Link8key", selectedValue));
  $("#Link9").text(getAnchorLInk("Link9key", selectedValue));
  $("#Link10").text(getAnchorLInk("Link10key", selectedValue));
  $("#Link11").text(getAnchorLInk("Link11key", selectedValue));
  $("#Link12a").text(getAnchorLInk("Link12akey", selectedValue));
  $("#Link12").text(getAnchorLInk("Link12key", selectedValue));
  $("#Link13").text(getAnchorLInk("Link13key", selectedValue));
  $("#Link14").text(getAnchorLInk("Link14key", selectedValue));
  $("#Link15").text(getAnchorLInk("Link15key", selectedValue));
  $("#Link16").text(getAnchorLInk("Link16key", selectedValue));
  $("#Link17").text(getAnchorLInk("Link17key", selectedValue));
  $("#Link18").text(getAnchorLInk("Link18key", selectedValue));
  $("#Link19").text(getAnchorLInk("Link19key", selectedValue));
  $("#Link20").text(getAnchorLInk("Link20key", selectedValue));
  $("#Link21").text(getAnchorLInk("Link21key", selectedValue));
  $("#Link22").text(getAnchorLInk("Link22key", selectedValue));
  $("#Link23").text(getAnchorLInk("Link23key", selectedValue));
  $("#Link24").text(getAnchorLInk("Link24key", selectedValue));
  $("#Link25").text(getAnchorLInk("Link25key", selectedValue));
  $("#Link26").text(getAnchorLInk("Link26key", selectedValue));
  $("#Link27").text(getAnchorLInk("Link27key", selectedValue));
  $("#Link28").text(getAnchorLInk("Link28key", selectedValue));
  $("#Link29").text(getAnchorLInk("Link29key", selectedValue));
  $("#Link30").text(getAnchorLInk("Link30key", selectedValue));
  $("#Link31").text(getAnchorLInk("Link31key", selectedValue));
  $("#Link32").text(getAnchorLInk("Link32key", selectedValue));
  $("#Link33").text(getAnchorLInk("Link33key", selectedValue));
  $("#Link34").text(getAnchorLInk("Link34key", selectedValue));
  $("#Link35").text(getAnchorLInk("Link35key", selectedValue));
  $("#Link21b").text(getAnchorLInk("Link21key", selectedValue));
  $("#Link36").text(getAnchorLInk("Link36key", selectedValue));
  $("#Link37").text(getAnchorLInk("Link37key", selectedValue));
  $("#Link38").text(getAnchorLInk("Link38key", selectedValue));
  $("#Link39").text(getAnchorLInk("Link39key", selectedValue));
  $("#Link40").text(getAnchorLInk("Link40key", selectedValue));
  $("#Link41").text(getAnchorLInk("Link41key", selectedValue));
  $("#Link42").text(getAnchorLInk("Link42key", selectedValue));
  $("#Link43").text(getAnchorLInk("Link43key", selectedValue));
  $("#Link44").text(getAnchorLInk("Link44key", selectedValue));
  $("#Link45").text(getAnchorLInk("Link45key", selectedValue));
  $("#Link46").text(getAnchorLInk("Link46key", selectedValue));
  $("#Link47").text(getAnchorLInk("Link47key", selectedValue));
  $("#Link48").text(getAnchorLInk("Link48key", selectedValue));
  $("#Link49").text(getAnchorLInk("Link49key", selectedValue));
  $("#Link50").text(getAnchorLInk("Link50key", selectedValue));
  $("#Link51").text(getAnchorLInk("Link51key", selectedValue));
  $(".guidepdf").attr("href", getImageUrl("GuidepdfKey", selectedValue));
  $(".bookletpdf").attr("href", getImageUrl("BookletpdfKey", selectedValue));
}

// on change language end

const translatedImages = {
  // img
  HeaderRightImage: {
    en: "./images/UNNM-Logo-TAG.png",
    fr: "./images/french_logo_PNG3.png",
    spa: "./images/spanish_logo_PNG3.png"
  },
  FooterRightImage: {
    en: "./images/UNNM-Logo-TAG.png",
    fr: "./images/french/2.png",
    spa: "./images/spanish/2.png"
  },
  FooterLeftImage: {
    en: "./images/GCM_LOGO_Horizontal_EN.jpg",
    fr: "./images/GCM_LOGO_Horizontal_FR.jpg",
    spa: "./images/GCM_LOGO_Horizontal_SP.jpg"
  },
  PrincipleImage: {
    en: "./images/00_THE_GUIDING_PRINCIPLES.jpg",
    fr: "./images/french/PMM_FR_2.jpg",
    spa: "./images/spanish/PMM_ES_2.jpg"
  },
  ObjectiveImage: {
    en: "./images/GCM176.png",
    fr: "./images/french/GCMObjectives_FR_2.jpg",
    spa: "./images/spanish/PMMObjectivos-ES.png"
  },
  // pdf
  GuidepdfKey: {
    en: "./pdf/guide.pdf",
    fr: "./pdf/French/guide_PDF_FR.pdf",
    spa: "./pdf/Spanish/guide_PDF_ES.pdf"
  },
  BookletpdfKey: {
    en: "./pdf/booklet.pdf",
    fr: "./pdf/French/booklet_PDF_FR.pdf",
    spa: "./pdf/Spanish/booklet_PDF_ES.pdf"
  },
  // Step1
  Step1pdf: {
    en: "./pdf/English/Implementation Steps/Step 1 Kick-off/STEP 1 - KICK OFF.pdf",
    fr: "./pdf/French/Etapes de mise en ouvre/Etape 1 Demarrer/STEP 1 - LANCEMENT.pdf",
    spa: "./pdf/Spanish/Pasosdeimplementacion/Etapa 1 Comenzar/STEP 1 - PUESTA EN MARCHA.pdf"
  },
  Step1questionpdf: {
    en: "./pdf/English/Implementation Steps/Step 1 Kick-off/STEP 1 - GUIDING QUESTIONS.pdf",
    fr: "./pdf/French/Etapes de mise en ouvre/Etape 1 Demarrer/STEP 1 - QUESTIONS D_ORIENTATION.pdf",
    spa: "./pdf/Spanish/Pasosdeimplementacion/Etapa 1 Comenzar/STEP 1 - PREGUNTAS ORIENTATIVAS.pdf"
  },
  Step1actionpdf: {
    en: "./pdf/English/Implementation Steps/Step 1 Kick-off/STEP 1 - ACTIONS.pdf",
    fr: "./pdf/French/Etapes de mise en ouvre/Etape 1 Demarrer/STEP 1 - ACTION.pdf",
    spa: "./pdf/Spanish/Pasosdeimplementacion/Etapa 1 Comenzar/STEP 1 - ACCION.pdf"
  },
  Step1checklistpdf: {
    en: "./pdf/English/Implementation Steps/Step 1 Kick-off/STEP 1 - CHECKLIST.pdf",
    fr: "./pdf/French/Etapes de mise en ouvre/Etape 1 Demarrer/STEP 1 - LISTE DE VERIFICATION.pdf",
    spa: "./pdf/Spanish/Pasosdeimplementacion/Etapa 1 Comenzar/STEP 1 - LISTA DE VERIFICACION.pdf"
  },
  Step1toolpdf: {
    en: "./pdf/English/Implementation Steps/Step 1 Kick-off/STEP 1 - TOOLS.pdf",
    fr: "./pdf/French/Etapes de mise en ouvre/Etape 1 Demarrer/STEP 1 - OUTIL.pdf",
    spa: "./pdf/Spanish/Pasosdeimplementacion/Etapa 1 Comenzar/STEP 1 - HERRAMIENTA.pdf"
  },
  // Step2
  Step2pdf: {
    en: "./pdf/English/Implementation Steps/Step 2 Need Assessment/STEP 2 - NEEDS ASSESSMENT.pdf",
    fr: "./pdf/French/Etapes de mise en ouvre/Etape 2 Evaluation des besoins/STEP 2 - EVALUATION DES BESOINS.pdf",
    spa: "./pdf/Spanish/Pasosdeimplementacion/Etapa 2 Necesita Valoracion/STEP 2 - EVALUATION DE LAS NECESIDADES.pdf"
  },
  Step2questionpdf1: {
    en: "./pdf/English/Implementation Steps/Step 2 Need Assessment/STEP 2 - GUIDING QUESTIONS.pdf",
    fr: "./pdf/French/Etapes de mise en ouvre/Etape 2 Evaluation des besoins/STEP 2 - QUESTIONS D_ORIENTATION.pdf",
    spa: "./pdf/Spanish/Pasosdeimplementacion/Etapa 2 Necesita Valoracion/STEP 2 - PREGUNTAS ORIENTATIVAS.pdf"
  },
  Step2actionpdf: {
    en: "./pdf/English/Implementation Steps/Step 2 Need Assessment/STEP 2 -  ACTIONS.pdf",
    fr: "./pdf/French/Etapes de mise en ouvre/Etape 2 Evaluation des besoins/STEP 2 - ACTION.pdf",
    spa: "./pdf/Spanish/Pasosdeimplementacion/Etapa 2 Necesita Valoracion/STEP 2 - ACCION.pdf"
  },
  Step2checklistpdf: {
    en: "./pdf/English/Implementation Steps/Step 2 Need Assessment/STEP 2 - CHECKLIST.pdf",
    fr: "./pdf/French/Etapes de mise en ouvre/Etape 2 Evaluation des besoins/STEP 2 - LISTE DE VERIFICATION.pdf",
    spa: "./pdf/Spanish/Pasosdeimplementacion/Etapa 2 Necesita Valoracion/STEP 2 - LISTA DE VERIFICACION.pdf"
  },
  Step2toolpdf: {
    en: "./pdf/English/Implementation Steps/Step 2 Need Assessment/STEP 2 - TOOLS.pdf",
    fr: "./pdf/French/Etapes de mise en ouvre/Etape 2 Evaluation des besoins/STEP 2 - OUTIL.pdf",
    spa: "./pdf/Spanish/Pasosdeimplementacion/Etapa 2 Necesita Valoracion/STEP 2 - HERRAMIENTA.pdf"
  },
  // Step3
  Step3pdf: {
    en: "./pdf/English/Implementation Steps/Step 3 Design/STEP 3 - DESIGN.pdf",
    fr: "./pdf/French/Etapes de mise en ouvre/Etape 3 Motif/STEP 3 - CONCEPTION.pdf",
    spa: "./pdf/Spanish/Pasosdeimplementacion/Etapa 3 Patron/STEP 3 - DISENO.pdf"
  },
  Step3questionpdf: {
    en: "./pdf/English/Implementation Steps/Step 3 Design/STEP 3 - GUIDING QUESTIONS.pdf",
    fr: "./pdf/French/Etapes de mise en ouvre/Etape 3 Motif/STEP 3 - QUESTIONS D_ORIENTATION.pdf",
    spa: "./pdf/Spanish/Pasosdeimplementacion/Etapa 3 Patron/STEP 3 - PREGUNTAS ORIENTATIVAS.pdf"
  },
  Step3actionpdf: {
    en: "./pdf/English/Implementation Steps/Step 3 Design/STEP 3 - ACTIONS.pdf",
    fr: "./pdf/French/Etapes de mise en ouvre/Etape 3 Motif/STEP 3 - ACTION.pdf",
    spa: "./pdf/Spanish/Pasosdeimplementacion/Etapa 3 Patron/STEP 3 - ACCION.pdf"
  },
  Step3checklistpdf: {
    en: "./pdf/English/Implementation Steps/Step 3 Design/STEP 3 - CHECKLIST.pdf",
    fr: "./pdf/French/Etapes de mise en ouvre/Etape 3 Motif/STEP 3 - LIST DE VERIFICATION.pdf",
    spa: "./pdf/Spanish/Pasosdeimplementacion/Etapa 3 Patron/STEP 3 - LISTA DE VERIFICACION.pdf"
  },
  Step3toolpdf: {
    en: "./pdf/English/Implementation Steps/Step 3 Design/STEP 3 - TOOLS.pdf",
    fr: "./pdf/French/Etapes de mise en ouvre/Etape 3 Motif/STEP 3 - OUTIL.pdf",
    spa: "./pdf/Spanish/Pasosdeimplementacion/Etapa 3 Patron/STEP 3 - HERRAMIENTA.pdf"
  },
  // Step4
  Step4pdf: {
    en: "./pdf/English/Implementation Steps/Step 4 Implementation/STEP 4 -  IMPLEMENTATION.pdf",
    fr: "./pdf/French/Etapes de mise en ouvre/Etape 4 La mise en oeuvre/STEP 4 - MISE EN CUVRE.pdf",
    spa: "./pdf/Spanish/Pasosdeimplementacion/Etapa 4 Implementacion/STEP 4 - APLICACION.pdf"
  },
  Step4questionpdf: {
    en: "./pdf/English/Implementation Steps/Step 4 Implementation/STEP 4 -  GUIDING QUESTIONS.pdf",
    fr: "./pdf/French/Etapes de mise en ouvre/Etape 4 La mise en oeuvre/STEP 4 - QUESTIONS D_ORIENTATION.pdf",
    spa: "./pdf/Spanish/Pasosdeimplementacion/Etapa 4 Implementacion/STEP 4  - PREGUNTAS ORIENTATIVAS.pdf"
  },
  Step4actionpdf: {
    en: "./pdf/English/Implementation Steps/Step 4 Implementation/STEP 4 - ACTIONS.pdf",
    fr: "./pdf/French/Etapes de mise en ouvre/Etape 4 La mise en oeuvre/STEP 4 - ACTION.pdf",
    spa: "./pdf/Spanish/Pasosdeimplementacion/Etapa 4 Implementacion/STEP 4 - ACCION.pdf"
  },
  Step4checklistpdf: {
    en: "./pdf/English/Implementation Steps/Step 4 Implementation/STEP 4 - CHECKLIST.pdf",
    fr: "./pdf/French/Etapes de mise en ouvre/Etape 4 La mise en oeuvre/STEP 4 - LISTE DE VERIFICATION.pdf",
    spa: "./pdf/Spanish/Pasosdeimplementacion/Etapa 4 Implementacion/STEP 4  - LISTA DE VERIFICACION.pdf"
  },
  Step4toolpdf: {
    en: "./pdf/English/Implementation Steps/Step 4 Implementation/STEP 4 - TOOLS.pdf",
    fr: "./pdf/French/Etapes de mise en ouvre/Etape 4 La mise en oeuvre/STEP 4 - OUTIL.pdf",
    spa: "./pdf/Spanish/Pasosdeimplementacion/Etapa 4 Implementacion/STEP 4 - HERRAMIENTA.pdf"
  },
  // Step5
  Step5pdf: {
    en: "./pdf/English/Implementation Steps/Step 5 Monitoring, Evaluation, Review/STEP 5 - MONITORING.pdf",
    fr: "./pdf/French/Etapes de mise en ouvre/Etape 5 Suivi Evaluation Examen/STEP 5 - SUIVI, EVALUATION ET EXAMEN.pdf",
    spa: "./pdf/Spanish/Pasosdeimplementacion/Etapa 5 Monitoreo Y Evaluacion Examen/STEP 5 - SEGUIMIENTO EVALUACION Y EXAMEN.pdf"
  },
  Step5questionpdf: {
    en: "./pdf/English/Implementation Steps/Step 5 Monitoring, Evaluation, Review/STEP 5 - GUIDING QUESTIONS.pdf",
    fr: "./pdf/French/Etapes de mise en ouvre/Etape 5 Suivi Evaluation Examen/STEP 5 - QUESTIONS D_ORIENTATION.pdf",
    spa: "./pdf/Spanish/Pasosdeimplementacion/Etapa 5 Monitoreo Y Evaluacion Examen/STEP 5 - PREGUNTAS ORIENTATIVAS.pdf"
  },
  Step5actionpdf: {
    en: "./pdf/English/Implementation Steps/Step 5 Monitoring, Evaluation, Review/STEP 5 - ACTIONS.pdf",
    fr: "./pdf/French/Etapes de mise en ouvre/Etape 5 Suivi Evaluation Examen/STEP 5 - ACTION.pdf",
    spa: "./pdf/Spanish/Pasosdeimplementacion/Etapa 5 Monitoreo Y Evaluacion Examen/STEP 5 - ACCION.pdf"
  },
  Step5checklistpdf: {
    en: "./pdf/English/Implementation Steps/Step 5 Monitoring, Evaluation, Review/STEP 5 - CHECKLIST.pdf",
    fr: "./pdf/French/Etapes de mise en ouvre/Etape 5 Suivi Evaluation Examen/STEP 5 - LISTE DE VERIFICATION.pdf",
    spa: "./pdf/Spanish/Pasosdeimplementacion/Etapa 5 Monitoreo Y Evaluacion Examen/STEP 5 - LISTA DE VERIFICACION.pdf"
  },
  Step5toolpdf: {
    en: "./pdf/English/Implementation Steps/Step 5 Monitoring, Evaluation, Review/STEP 5 - TOOLS.pdf",
    fr: "./pdf/French/Etapes de mise en ouvre/Etape 5 Suivi Evaluation Examen/STEP 5 - OUTIL.pdf",
    spa: "./pdf/Spanish/Pasosdeimplementacion/Etapa 5 Monitoreo Y Evaluacion Examen/STEP 5 - HERRAMIENTA.pdf"
  },
  // Step6
  Step6pdf: {
    en: "./pdf/English/Implementation Steps/Step 6 Reporting/STEP 6 - REPORTING.pdf",
    fr: "./pdf/French/Etapes de mise en ouvre/Etape 6 Rapports/STEP 6 - ETABLISSEMENT DE RAPPORTS.pdf",
    spa: "./pdf/Spanish/Pasosdeimplementacion/Etapa 6 Informes/STEP 6 - PRESENTACION DE INFORMES.pdf"
  },
  Step6questionpdf: {
    en: "./pdf/English/Implementation Steps/Step 6 Reporting/STEP 6 - GUIDING QUESTIONS.pdf",
    fr: "./pdf/French/Etapes de mise en ouvre/Etape 6 Rapports/STEP 6 - QUESTIONS D_ORIENTATION.pdf",
    spa: "./pdf/Spanish/Pasosdeimplementacion/Etapa 6 Informes/STEP 6 - PREGUNTAS ORIENTATIVAS.pdf"
  },
  Step6actionpdf: {
    en: "./pdf/English/Implementation Steps/Step 6 Reporting/STEP 6 - ACTIONS.pdf",
    fr: "./pdf/French/Etapes de mise en ouvre/Etape 6 Rapports/STEP 6 - ACTION.pdf",
    spa: "./pdf/Spanish/Pasosdeimplementacion/Etapa 6 Informes/STEP 6 - ACCION.pdf"
  },
  Step6checklistpdf: {
    en: "./pdf/English/Implementation Steps/Step 6 Reporting/STEP 6 - CHECKLIST.pdf",
    fr: "./pdf/French/Etapes de mise en ouvre/Etape 6 Rapports/STEP 6 - LISTE DE VERIFICATION POUR L_ETAPE.pdf",
    spa: "./pdf/Spanish/Pasosdeimplementacion/Etapa 6 Informes/STEP 6 - LISTA DE VERIFICACION.pdf"
  },
  Step6toolpdf: {
    en: "./pdf/English/Implementation Steps/Step 6 Reporting/STEP 6 - TOOLS.pdf",
    fr: "./pdf/French/Etapes de mise en ouvre/Etape 6 Rapports/STEP 6 - ETABLISSEMENT DE RAPPORTS.pdf",
    spa: "./pdf/Spanish/Pasosdeimplementacion/Etapa 6 Informes/STEP 6 - HERRAMIENTA.pdf"
  },
};

const translatedLinks = {
  HeaderRightImageLink: {
    en: 'https://migrationnetwork.un.org',
    fr: 'https://migrationnetwork.un.org/fr',
    spa: 'https://migrationnetwork.un.org/es'
  },
  HeaderLeftImageLink: {
    en: 'https://migrationnetwork.un.org/migration-network-hub',
    fr: 'https://migrationnetwork.un.org/fr/migration-network-hub',
    spa: 'https://migrationnetwork.un.org/es/migration-network-hub'
  },
  FooterLeftImageLink: {
    en: 'https://migrationnetwork.un.org/migration-network-hub',
    fr: 'https://migrationnetwork.un.org/fr/migration-network-hub',
    spa: 'https://migrationnetwork.un.org/es/migration-network-hub'
  },
  FooterRightImageLink: {
    en: 'https://migrationnetwork.un.org',
    fr: 'https://migrationnetwork.un.org/fr',
    spa: 'https://migrationnetwork.un.org/es'
  },
  copyRightImageLink: {
    en: 'https://www.un.org/en/about-us/copyright',
    fr: 'https://www.un.org/fr/about-us/copyright',
    spa: 'https://www.un.org/es/about-us/copyright'
  },
  fraudAlertImageLink: {
    en: 'https://www.un.org/en/about-us/fraud-alert',
    fr: 'https://www.un.org/fr/about-us/fraud-alert',
    spa: 'https://www.un.org/es/about-us/fraud-alert'
  },
  PrivacyNoticeImageLink: {
    en: 'https://www.un.org/en/about-us/privacy-notice',
    fr: 'https://www.un.org/fr/about-us/privacy-notice',
    spa: 'https://www.un.org/es/about-us/privacy-notice'
  },
  termsofUseImageLink: {
    en: 'https://www.un.org/en/about-us/terms-of-use',
    fr: 'https://www.un.org/fr/about-us/terms-of-use',
    spa: 'https://www.un.org/es/about-us/terms-of-use'
  },
  UNNfooterLink: {
    en: 'https://migrationnetwork.un.org',
    fr: 'https://migrationnetwork.un.org/fr',
    spa: 'https://migrationnetwork.un.org/es'
  },
  GCMImmplementfooterLink: {
    en: 'https://migrationnetwork.un.org/gcm-guidance',
    fr: 'https://migrationnetwork.un.org/fr/gcm-guidance',
    spa: 'https://migrationnetwork.un.org/es/gcm-guidance'
  },
  MigrationNetHubfooterLink: {
    en: 'https://migrationnetwork.un.org/migration-network-hub',
    fr: 'https://migrationnetwork.un.org/fr/migration-network-hub',
    spa: 'https://migrationnetwork.un.org/es/migration-network-hub'
  },
  NutshellfooterLink: {
    en: 'https://migrationnetwork.un.org/global-compact-for-migration',
    fr: 'https://migrationnetwork.un.org/fr/global-compact-for-migration',
    spa: 'https://migrationnetwork.un.org/es/global-compact-for-migration'
  },
  PledgesLinkfooterLink: {
    en: 'https://migrationnetwork.un.org/the-pledging-dashboard',
    fr: 'https://migrationnetwork.un.org/fr/the-pledging-dashboard',
    spa: 'https://migrationnetwork.un.org/es/the-pledging-dashboard'
  },
  RepoofPracticefooterLink: {
    en: 'https://migrationnetwork.un.org/hub/repository-of-practices',
    fr: 'https://migrationnetwork.un.org/fr/hub/repository-of-practices',
    spa: 'https://migrationnetwork.un.org/es/hub/repository-of-practices'
  },
  TrustFundfooterLink: {
    en: 'https://migrationnetwork.un.org/mptf',
    fr: 'https://migrationnetwork.un.org/fr/mptf',
    spa: 'https://migrationnetwork.un.org/es/mptf'
  },
  InternationalMigrationfooterLink: {
    en: 'https://migrationnetwork.un.org/international-migration-review-forum-2022',
    fr: 'https://migrationnetwork.un.org/fr/node/2313',
    spa: 'https://migrationnetwork.un.org/es/node/2313'
  },
  EventsfooterLink: {
    en: 'https://migrationnetwork.un.org/events',
    fr: 'https://migrationnetwork.un.org/fr/events',
    spa: 'https://migrationnetwork.un.org/es/events'
  },
  step1too1LinkKey: {
    en: 'https://www.ohchr.org/en/ohchr_homepage',
    fr: 'https://www.ohchr.org/fr/ohchr_home',
    spa: 'https://www.ohchr.org/es/ohchr_homepage'
  },
  step3action1Link1Key: {
    en: 'http://www.gfmd.org/pfp/policy-tools/migration-profiles/repository',
    fr: 'http://www.gfmd.org/pfp/policy-tools/migration-profiles/repository',
    spa: 'http://www.gfmd.org/pfp/policy-tools/migration-profiles/repository'
  },
  Link00key: {
    en: 'https://data.unicef.org/',
    fr: 'https://data.unicef.org/fr',
    spa: 'https://data.unicef.org/'
  },
  Link0key: {
    en: 'https://migrationnetwork.un.org/hub',
    fr: 'https://migrationnetwork.un.org/fr/hub',
    spa: 'https://migrationnetwork.un.org/es/hub'
  },
  Link1key: {
    en: 'https://www.ilo.org/surveyLib/index.php/catalog/LFS/?page=1&ps=15&repo=LFS',
    fr: 'https://www.ilo.org/surveyLib/index.php/catalog/LFS.?page=1&ps=15',
    spa: 'https://www.ilo.org/surveyLib/index.php/catalog/LFS/?page=1&ps=15&repo=LFS'
  },
  Link2key: {
    en: 'https://migrationnetwork.un.org/covid-19',
    fr: 'https://migrationnetwork.un.org/covid-19',
    spa: 'https://migrationnetwork.un.org/es/covid-19'
  },
  Link3key: {
    en: 'https://covid-19-data.unstatshub.org/',
    fr: 'https://covid-19-data.unstatshub.org/',
    spa: 'https://covid-19-data.unstatshub.org/'
  },
  Link4key: {
    en: 'https://www.migrationdataportal.org/themes/migration-data-relevant-covid-19-pandemic',
    fr: 'https://www.migrationdataportal.org/fr/themes/donnees-migratoires-pertinentes-pour-la-pandemie-de-la-covid-19',
    spa: 'https://www.migrationdataportal.org/es/themes/datos-sobre-migracion-relevantes-para-la-pandemia-de-covid-19'
  },
  Link5key: {
    en: 'https://www.fao.org/policy-support/tools-and-publications/resources-details/en/c/1270461/',
    fr: 'https://www.fao.org/documents/card/fr/c/CA8559FR',
    spa: 'https://www.fao.org/publications/card/es/c/CA8559ES'
  },
  Link6key: {
    en: 'https://www.unicef.org/documents/quick-tips-covid-19-and-migrant-refugee-and-internally-displaced-children',
    fr: 'https://www.unicef.org/sites/default/files/2020-08/COVID19%20and%20Children%20on%20the%20Move%20Quick%20Tips%20Public_FR.pdf',
    spa: 'https://www.unicef.org/sites/default/files/2020-08/COVID-19-y-los-ninos-desplazados.pdf'
  },
  Link7key: {
    en: 'https://migration.iom.int/mobility-impacts-covid-19-methodology',
    fr: 'https://migration.iom.int/mobility-impacts-covid-19-methodology',
    spa: 'https://migration.iom.int/mobility-impacts-covid-19-methodology'
  },
  Link8key: {
    en: 'https://www.ey.com/en_uk',
    fr: 'https://www.ey.com/fr_fr',
    spa: 'https://www.ey.com/es_es'
  },
  Link9key: {
    en: 'https://www.unicef.org/media/83546/file/Migrant-and-displaced-children-in-the-age-of-COVID-19.pdf',
    fr: 'https://www.unicef.org/media/83546/file/Migrant-and-displaced-children-in-the-age-of-COVID-19.pdf',
    spa: 'https://www.unicef.org/media/83546/file/Migrant-and-displaced-children-in-the-age-of-COVID-19.pdf'
  },
  Link10key: {
    en: 'https://www.unicef.org/media/83531/file/Social-Protection-for-Children-and-Families-in-the-Context-of-Migration-and-Displacement-during-COVID-19.pdf',
    fr: 'https://www.unicef.org/media/83531/file/Social-Protection-for-Children-and-Families-in-the-Context-of-Migration-and-Displacement-during-COVID-19.pdf',
    spa: 'https://www.unicef.org/media/83531/file/Social-Protection-for-Children-and-Families-in-the-Context-of-Migration-and-Displacement-during-COVID-19.pdf'
  },
  Link11key: {
    en: 'https://www.ilo.org/global/docs/WCMS_748791/lang--en/index.htm',
    fr: 'https://www.ilo.org/global/docs/WCMS_748791/lang--en/index.htm',
    spa: 'https://www.ilo.org/global/docs/WCMS_748791/lang--en/index.htm'
  },
  Link12akey: {
    en: 'https://publications.iom.int/books/iom-data-protection-manual',
    fr: 'https://publications.iom.int/books/manuel-de-protection-des-donnees-de-loim',
    spa: 'https://publications.iom.int/books/iom-data-protection-manual'
  },
  Link12key: {
    en: 'https://migration4development.org/sites/default/files/2021-09/guidelines_on_mainstreaming_migration.pdf',
    fr: 'https://migration4development.org/sites/default/files/2021-09/guide_de_mise_en_oeuvre_pour_lintegration_transversale_de_la_migration.pdf',
    spa: 'https://migration4development.org/sites/default/files/2021-09/directrices_para_la_integracion_transversal_de_la_migracion%20%282%29.pdf'
  },
  Link13key: {
    en: 'https://migration4development.org/sites/default/files/2021-10/Mainstreaming%20Migration%20into%20Development%20Planning_A%20Handbook%20for%20Policy-makers%20and%20Practitioners.pdf',
    fr: 'https://migration4development.org/sites/default/files/2021-10/integration_de_la_migration_dans_la_planification_du_developpement_FR.pdf',
    spa: 'https://migration4development.org/sites/default/files/2021-10/la_transversalizacion_de_la_migracion_en_la_planificacion_del_desarrollo_SP.pdf'
  },
  Link14key: {
    en: 'https://www.oecd-ilibrary.org/development/interrelations-between-public-policies-migration-and-development_9789264265615-en',
    fr: 'https://www.oecd-ilibrary.org/development/interactions-entre-politiques-publiques-migrations-et-developpement_9789264274136-fr',
    spa: 'https://www.oecd-ilibrary.org/development/interacciones-entre-politicas-publicas-migracion-y-desarrollo_9789264276710-es'
  },
  Link15key: {
    en: 'https://eea.iom.int/mainstreaming-migration-international-cooperation-and-development-mmicd',
    fr: 'https://eea.iom.int/mainstreaming-migration-international-cooperation-and-development-mmicd',
    spa: 'https://eea.iom.int/mainstreaming-migration-international-cooperation-and-development-mmicd'
  },
  Link16key: {
    en: 'https://publications.iom.int/books/migration-and-2030-agenda-guide-practitioners',
    fr: 'https://publications.iom.int/books/la-migration-et-le-programme-2030-un-guide-lusage-des-praticiens',
    spa: 'https://publications.iom.int/books/la-migracion-en-la-agenda-2030-guia-para-profesionales'
  },
  Link17key: {
    en: 'https://www.knomad.org/sites/default/files/2017-11/Handbook%20for%20Improving%20the%20Production%20and%20Use%20of%20Migration%20Data%20for%20Development.pdf',
    fr: 'https://www.knomad.org/sites/default/files/2017-11/Handbook%20for%20Improving%20the%20Production%20and%20Use%20of%20Migration%20Data%20for%20Development.pdf',
    spa: 'https://www.knomad.org/sites/default/files/2017-11/Handbook%20for%20Improving%20the%20Production%20and%20Use%20of%20Migration%20Data%20for%20Development.pdf'
  },
  Link18key: {
    en: 'https://www.unicef.org/sdgs/resources',
    fr: 'https://www.unicef.org/sdgs/resources',
    spa: 'https://www.unicef.org/sdgs/resources'
  },
  Link19key: {
    en: 'https://unsdg.un.org/resources/un-framework-immediate-socio-economic-response-covid-19',
    fr: 'https://unsdg.un.org/fr/resources/cadre-des-nations-unies-pour-la-reponse-socio-economique-immediate-la-covid-19-0',
    spa: 'https://unsdg.un.org/es/resources/marco-de-la-onu-para-la-respuesta-socioeconomica-inmediata-ante-la-covid-19'
  },
  Link20key: {
    en: 'https://unesdoc.unesco.org/ark:/48223/pf0000245570',
    fr: 'https://unesdoc.unesco.org/ark:/48223/pf0000245570',
    spa: 'https://unesdoc.unesco.org/ark:/48223/pf0000245570'
  },
  Link21key: {
    en: 'https://migrationnetwork.un.org/covid-19',
    fr: 'https://migrationnetwork.un.org/covid-19',
    spa: 'https://migrationnetwork.un.org/es/covid-19'
  },
  Link22key: {
    en: 'https://migrationnetwork.un.org/hub/discussion-space',
    fr: 'https://migrationnetwork.un.org/fr/hub/discussion-space',
    spa: 'https://migrationnetwork.un.org/es/hub/discussion-space'
  },
  Link23key: {
    en: 'https://www.migrationdataportal.org/',
    fr: 'https://www.migrationdataportal.org/fr',
    spa: 'https://www.migrationdataportal.org/es'
  },
  Link24key: {
    en: 'https://ec.europa.eu/eurostat',
    fr: 'https://ec.europa.eu/eurostat/fr/home',
    spa: 'https://ec.europa.eu/eurostat/?language=es&etrans=es'
  },
  Link25key: {
    en: 'http://www.migrationdataportal.org',
    fr: 'http://www.migrationdataportal.org/fr',
    spa: 'https://www.migrationdataportal.org/es'
  },
  Link26key: {
    en: 'https://uhri.ohchr.org',
    fr: 'https://uhri.ohchr.org/fr',
    spa: 'https://uhri.ohchr.org/es'
  },
  Link27key: {
    en: 'http://www.ohchr.org/EN/HRBodies/HRC/Pages/SpecialProcedures.aspx',
    fr: 'https://www.ohchr.org/fr/hr-bodies/hrc/special-procedures',
    spa: 'https://www.ohchr.org/es/hr-bodies/hrc/special-procedures'
  },
  Link28key: {
    en: 'https://publications.iom.int/books/leave-no-migrant-behind-2030-agenda-and-data-disaggregation',
    fr: 'https://publications.iom.int/books/ne-laisser-aucun-migrant-de-cote-le-programme-2030-et-la-ventilation-des-donnees',
    spa: 'https://publications.iom.int/books/no-dejar-ningun-migrante-atras-la-agenda-2030-y-el-desglose-de-datos'
  },
  Link29key: {
    en: 'https://migrationnetwork.un.org/sites/g/files/tmzbdl416/files/docs/imrf.pdf',
    fr: 'https://migrationnetwork.un.org/sites/g/files/tmzbdl416/files/docs/imrf_french.pdf',
    spa: 'https://documents-dds-ny.un.org/doc/UNDOC/GEN/N19/226/00/PDF/N1922600.pdf?OpenElement'
  },
  Link30key: {
    en: 'https://www.un.org/migration2022',
    fr: 'https://www.un.org/fr/migration2022',
    spa: 'https://www.un.org/es/migration2022'
  },
  Link31key: {
    en: 'https://migrationnetwork.un.org/regional-reviews',
    fr: 'https://migrationnetwork.un.org/regional-reviews',
    spa: 'https://migrationnetwork.un.org/regional-reviews'
  },
  Link32key: {
    en: 'https://migrationnetwork.un.org/about/united-nations-network-migration-workplan',
    fr: 'https://migrationnetwork.un.org/about/united-nations-network-migration-workplan',
    spa: 'https://migrationnetwork.un.org/es/about/united-nations-network-migration-workplan'
  },
  Link33key: {
    en: 'https://migrationnetwork.un.org/international-migration-review-forum-2022#',
    fr: 'https://migrationnetwork.un.org/sites/g/files/tmzbdl416/files/resources_files/imrf_roadmap_final_francais.pdf',
    spa: 'https://migrationnetwork.un.org/sites/g/files/tmzbdl416/files/resources_files/imrf_roadmap_final_espagnol.pdf'
  },
  Link34key: {
    en: 'https://migrationnetwork.un.org/sites/g/files/tmzbdl416/files/resources_files/imrf_roadmap_3_pages.pdf',
    fr: 'https://migrationnetwork.un.org/sites/g/files/tmzbdl416/files/resources_files/imrf_roadmap_final_francais.pdf',
    spa: 'https://migrationnetwork.un.org/sites/g/files/tmzbdl416/files/resources_files/imrf_roadmap_final_espagnol.pdf'
  },
  Link35key: {
    en: 'https://migrationnetwork.un.org/regional-reviews',
    fr: 'https://migrationnetwork.un.org/regional-reviews',
    spa: 'https://migrationnetwork.un.org/regional-reviews'
  },
  Link36key: {
    en: 'https://www.unicef-irc.org/publications/706-ethical-research-involving-children.html',
    fr: 'https://www.unicef-irc.org/publications/771-recherche-%C3%A9thique-impliquant-des-enfants.html',
    spa: 'https://www.unicef-irc.org/publications/772-investigaci%C3%B3n-%C3%A9tica-con-ni%C3%B1os.html'
  },
  Link37key: {
    en: 'https://sites.unicef.org/csr/files/UNICEF_Childrens_Online_Privacy_and_Freedom_of_Expression(1).pdf',
    fr: 'https://sites.unicef.org/csr/files/UNICEF_Childrens_Online_Privacy_and_Freedom_of_Expression(1).pdf',
    spa: 'https://sites.unicef.org/csr/files/UNICEF_Childrens_Online_Privacy_and_Freedom_of_Expression(1).pdf'
  },
  Link38key: {
    en: 'https://www.unicef-irc.org/publications/1086-ethical-considerations-for-evidence-generation-involving-children-on-the-covid-19.html',
    fr: 'https://www.unicef-irc.org/publications/1086-ethical-considerations-for-evidence-generation-involving-children-on-the-covid-19.html',
    spa: 'https://www.unicef-irc.org/publications/1086-ethical-considerations-for-evidence-generation-involving-children-on-the-covid-19.html'
  },
  Link39key: {
    en: 'https://hrbaportal.org',
    fr: 'https://hrbaportal.org',
    spa: 'https://hrbaportal.org'
  },
  Link40key: {
    en: 'https://www.ohchr.org/sites/default/files/Documents/Publications/HR_PUB_16_1_NMRF_PracticalGuide.pdf',
    fr: 'https://www.ohchr.org/sites/default/files/Documents/Publications/HR_PUB_16_1_NMRF_PracticalGuide_FR.pdf',
    spa: 'https://www.ohchr.org/es/publications/policy-and-methodological-publications/national-mechanisms-reporting-and-follow'
  },
  Link41key: {
    en: 'https://www.ohchr.org/sites/default/files/Documents/Publications/training10en.pdf',
    fr: 'https://www.ohchr.org/sites/default/files/Documents/Publications/training10en.pdf',
    spa: 'https://www.ohchr.org/sites/default/files/Documents/Publications/training10en.pdf'
  },
  Link42key: {
    en: 'https://www.ohchr.org/sites/default/files/Documents/Issues/Migration/PrinciplesAndGuidelines.pdf',
    fr: 'https://www.ohchr.org/fr/migration/migrants-vulnerable-situations',
    spa: 'https://www.ohchr.org/es/migration/migrants-vulnerable-situations'
  },
  Link43key: {
    en: 'https://www.ohchr.org/sites/default/files/Documents/Issues/Migration/OHCHR_Recommended_Principles_Guidelines.pdf',
    fr: 'https://www.ohchr.org/sites/default/files/Documents/Issues/Migration/OHCHR_Recommended_Principles_Guidelines_FR.pdf',
    spa: 'https://acnudh.org/principios-y-directrices-recomendados-sobre-los-derechos-humanos-en-las-fronteras-internacionales/'
  },
  Link44key: {
    en: 'https://ppguide.unwomen.org/',
    fr: 'https://ppguide.unwomen.org/fr',
    spa: 'https://ppguide.unwomen.org/es'
  },
  Link45key: {
    en: 'https://www.ilo.org/wcmsp5/groups/public/---dgreports/---exrel/documents/publication/wcms_172612.pdf',
    fr: 'https://www.ilo.org/wcmsp5/groups/public/---dgreports/---exrel/documents/publication/wcms_172613.pdf',
    spa: 'https://www.ilo.org/wcmsp5/groups/public/---dgreports/---exrel/documents/publication/wcms_172615.pdf'
  },
  Link46key: {
    en: 'https://migrationnetwork.un.org/resources/guidance-assessing-situation-children-move-national-context',
    fr: 'https://migrationnetwork.un.org/resources/guidance-assessing-situation-children-move-national-context',
    spa: 'https://migrationnetwork.un.org/resources/guidance-assessing-situation-children-move-national-context'
  },
  Link47key: {
    en: 'https://www.unicef.org/media/73296/file/ADAP-Guidelines-for-Participation.pdf',
    fr: 'https://www.unicef.org/media/73296/file/ADAP-Guidelines-for-Participation.pdf',
    spa: 'https://www.unicef.org/media/73296/file/ADAP-Guidelines-for-Participation.pdf'
  },
  Link48key: {
    en: 'https://www.ohchr.org/sites/default/files/Documents/Publications/Human_rights_indicators_en.pdf',
    fr: 'https://www.ohchr.org/sites/default/files/Documents/Publications/Human_rights_indicators_fr.pdf',
    spa: 'https://www.ohchr.org/sites/default/files/Documents/Publications/Human_rights_indicators_sp.pdf'
  },
  Link49key: {
    en: 'https://www.knomad.org/publication/human-rights-indicators-migrants-and-their-families',
    fr: 'https://www.knomad.org/sites/default/files/2017-04/KNOMAD%20Doc%20de%20Travail%205%20Indicateurs%20des%20droits%20de%20lhomme%20des%20migrants.pdf',
    spa: 'https://www.knomad.org/publication/indicadores-de-derechos-humanos-para-migrantes-y-sus-familias'
  },
  Link50key: {
    en: 'https://migrationnetwork.un.org/migration-network-hub',
    fr: 'https://migrationnetwork.un.org/',
    spa: 'https://migrationnetwork.un.org/es/hub'
  },
  Link51key: {
    en: 'https://www.ohchr.org/en/instruments-and-mechanisms',
    fr: 'https://www.ohchr.org/fr/instruments-and-mechanisms',
    spa: 'https://www.ohchr.org/es/instruments-and-mechanisms'
  },
  ochrLinkKey: {
    en: 'https://www.ohchr.org/en/ohchr_homepage',
    fr: 'https://www.ohchr.org/fr/ohchr_home',
    spa: 'https://www.ohchr.org/es/ohchr_home'
  },
  ochrLink2Key: {
    en: 'https://www.ohchr.org/',
    fr: 'https://www.ohchr.org/fr/ohchr_home',
    spa: 'https://www.ohchr.org/en/ohchr_homepage'
  },
  unwomenLinkKey: {
    en: 'https://www.unwomen.org/en',
    fr: 'https://www.unwomen.org/fr',
    spa: 'https://www.unwomen.org/en'
  },
  iloLinkKey: {
    en: 'https://www.ilo.org/global/lang--en/index.htm',
    fr: 'https://www.ilo.org/global/lang--fr/index.htm',
    spa: 'https://www.ilo.org/global/lang--es/index.htm'
  },
  unicefLinkKey: {
    en: 'https://www.unicef.org/',
    fr: 'https://www.unicef.org/fr',
    spa: 'https://www.unicef.org/es'
  },
  hrbaLinkKey: {
    en: 'https://hrbaportal.org/',
    fr: 'https://hrbaportal.org/fr',
    spa: 'https://hrbaportal.org/es'
  },
  migrationdataportalLinkKey: {
    en: 'https://www.migrationdataportal.org/',
    fr: 'https://www.migrationdataportal.org/fr',
    spa: 'https://www.migrationdataportal.org/es'
  },
  migrationdataportalhubLinkKey: {
    en: 'https://www.migrationdataportal.org/hub',
    fr: 'https://migrationnetwork.un.org/fr/hub',
    spa: 'https://www.migrationdataportal.org/hub'
  },


}
const arrowImagesData = {
  firstContent: "./images/Arrow_Circular_5.png",
  secondContent: "./images/Arrow_Circular_4.png",
  thirdContent: "./images/Arrow_Circular_1.png",
  fourthContent: "./images/Arrow_Circular_2.png",
  fifthContent: "./images/Arrow_Circular_7.png",
  sixthContent: "./images/Arrow_Circular_6.png",
}
var getImageUrl = (objectKey, lang) => {
  const imageObject = translatedImages[objectKey];
  return imageObject[lang]
}
const getAnchorLInk = (url, lang) => {
  const LinkUrl = translatedLinks[url];
  return LinkUrl[lang]
};