// for internationalization
$(document).ready(function () {
  $("#overlay").click(function () {
    $(this).removeClass("overlay-block");
    $("body").removeClass("overflowHidden");
    $(".menu__btn").trigger("click");
  });

  $("#menu__toggle").click(function () {
    if ($("#overlay").hasClass("overlay-block")) {
      $("#overlay").removeClass("overlay-block");
      $("body").removeClass("overflowHidden");
    } else {
      $("#overlay").addClass("overlay-block");
      $("body").addClass("overflowHidden");
    }
  });

  if ($(window).scrollTop() > 20) {
    $(".header").addClass("headerActive");
  } else {
    $(".header").removeClass("headerActive");
  }
  const appLanguage = localStorage?.getItem("lang");
  if (!appLanguage) {
    localStorage?.setItem("lang", "en");
  } else {
    const options = document.querySelectorAll("select#selectBox>option");
    options.forEach((option) => {
      const { value } = option;
      if (value === appLanguage) {
        option.setAttribute("selected", true);
      }
    });
    tinyi18n.setLang(appLanguage);
  }
  // for language dropdown icon
  $(".dropdown").click(function () {
    $(this).toggleClass("transform");
  });
});
//for language dropdown Button
function myFunction() {
  document.getElementById("selectBox").classList.toggle("show");
}
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

// for header
$(function () {
  $(window).on("scroll", function () {
    const windowScroll = window.innerWidth < 990 ? 0 : 20;
    if ($(window).scrollTop() > windowScroll) {
      $(".header").addClass("headerActive");
    } else {
      $(".header").removeClass("headerActive");
    }
  });
});

$(document).ready(function () {
  // 1

  $(".clickme").click(function () {
    $(".clickme").removeClass("active");
    $(this).addClass("active");
    var tagid = $(this).data("tag");
    var dataId = $(this).data("id");
    $("button[data-tag = " + tagid + "]").addClass("active");
    if (tagid == "27") {
      $("#" + tagid + " ." + dataId).addClass("active");
      $("#" + tagid + " ." + dataId).css("max-height", "2572px");
    }
    if (tagid == "firstContent") {
      $(".tab-inner4").addClass("hide").removeClass("active");
      $(".btn3").removeClass("active").addClass("hide");
      $(".btn1").addClass("active").removeClass("hide");
      $(".step1 .tabcontent").addClass("active").removeClass("hide");
    }
    $(".tab-inner").removeClass("active").addClass("hide");
    $("#" + tagid)
      .addClass("active")
      .removeClass("hide");
  });
});

$(document).ready(function () {
  // 2
  // actions to tools TOOLACCORDIAN
  $(".toolaccordin").click(function () {
    // #24 29 34 39 for close tools
    $("#24 .panel").css("max-height", "0px");
    $("#24 .accordion").removeClass("active");
    $("#29 .panel").css("max-height", "0px");
    $("#29 .accordion").removeClass("active");
    $("#34 .panel").css("max-height", "0px");
    $("#34 .accordion").removeClass("active");
    $("#29 .panel").css("max-height", "0px");
    $("#29 .accordion").removeClass("active");
    $(".clickme").removeClass("active");
    $(this).addClass("active");
    var tagid = $(this).data("tag");
    var dataId = $(this).data("id");
    $("button[data-tag = " + tagid + "]").addClass("active");
    $("#" + tagid + " ." + dataId).addClass("active");
    $("#" + tagid + " ." + dataId).css("max-height", "2572px");
    $(".tab-inner").removeClass("active").addClass("hide");
    $("#" + tagid)
      .addClass("active")
      .removeClass("hide");
  });
});

// for objective page tabs
$(document).ready(function () {
  // 3
  $(".clickme2").click(function () {
    $(".clickme2").removeClass("active");
    $(this).addClass("active");
    $(".clickme.active").removeClass("active");
    $(".clickme:first-child").removeClass("hide").addClass("active");
    $(".tab-data .tab-inner:first-child")
      .removeClass("hide")
      .addClass("active");
    var tagid = $(this).data("tag");
    $(".tab-inner2").removeClass("active").addClass("hide");
    $(".tab-inner2#" + tagid)
      .addClass("active")
      .removeClass("hide");
  });
});

// for principle page tabs
$(document).ready(function () {
  // 4
  $(".clickme3").click(function () {
    $(".clickme3").removeClass("active");
    $(this).addClass("active");
    $(".clickme.active").removeClass("active");
    $(".clickme:first-child").removeClass("hide").addClass("active");
    $(".tab-data .tab-inner:first-child")
      .removeClass("hide")
      .addClass("active");
    var tagid = $(this).data("tag");
    $(".tab-inner3").removeClass("active").addClass("hide");
    $(".tab-inner3#" + tagid)
      .addClass("active")
      .removeClass("hide");
  });
});

// for steps page tabs
$(document).ready(function () {
  // 5
  $(".clickme4").click(function () {
    $(".clickme4").removeClass("active");
    $(this).addClass("active");
    $(".clickme.active").removeClass("active");
    $(".clickme:first-child").removeClass("hide").addClass("active");
    $(".type-inner-wrap  .tab-inner:first-child")
      .removeClass("hide")
      .addClass("active");
    var tagid = $(this).data("tag");
    var dataId = $(this).data("id");
    $("img#arrowImages").attr("src", arrowImagesData[tagid]);
    if (tagid == "thirdContent" && dataId == "29") {
      $("#thirdContent .inner-tabs .tab-link.clickme")
        .removeClass("active")
        .addClass("hide");
      $("#thirdContent .tabcontent").removeClass("active").addClass("hide");
      $("#thirdContent .inner-tabs button:nth-child(4)").addClass("active");
      $("#29").removeClass("hide").addClass("active");
      $(".tool5").addClass("active");
      $("#29 .tool5").addClass("active");
      $("#29 .tool5").css("max-height", "2572px");
    }

    $("button[data-tag = " + tagid + "]").addClass("active");
    $(".tab-inner4").removeClass("active").addClass("hide");
    $(".tab-inner4#" + tagid)
      .addClass("active")
      .removeClass("hide");
  });

  $(".actionaccordian").click(function () {
    // 6
    $(".tab-inner").removeClass("active");
    $(this).addClass("active");
    $(".clickme.active").removeClass("active");
    $(".clickme:first-child").removeClass("hide").addClass("active");
    $(".type-inner-wrap  .tab-inner:first-child")
      .removeClass("hide")
      .addClass("active");
    var tagid = $(this).data("tag");
    $("button[data-tag = " + tagid + "]").addClass("active");
    $(".tab-inner4").removeClass("active").addClass("hide");
    $(".tab-inner4#" + tagid)
      .addClass("active")
      .removeClass("hide");
  });
});

// for about page slider
$(document).ready(function () {
  // 7
  $(".nextButton").click(function () {
    const firstSlide = $("#slider-input").val();
    const nextSlide = Number(firstSlide) + 20;
    $("#slider-input").val(nextSlide);
    if (nextSlide >= 600) {
      return;
    }
    $(".secondWrap").css("margin-left", `-${nextSlide}px`);
  });
  $(".left-arrow").click(function () {
    const firstSlide = $("#slider-input").val();
    const nextSlide = Number(firstSlide) + 20;
    if (nextSlide < 50 || nextSlide >= 480) {
      return;
    }
    $("#slider-input").val(nextSlide);
    $(".secondWrap").css("margin-left", "+=20px");
  });
});
// end

// for read more button objective page
$(document).ready(function () {
  // 8
  var showChar = 150;
  var ellipsestext = ".";
  var moretext = "Read more";
  var lesstext = "Read less";

  $(".more").each(function () {
    var content = $(this).html();

    if (content.length > showChar) {
      var c = content.substr(0, showChar);
      var h = content.substr(showChar, content.length - showChar);

      var html =
        c +
        '<span class="moreellipses">' +
        ellipsestext +
        '&nbsp;</span><span class="morecontent"><span>' +
        h +
        '</span><a href="" class="morelink">' +
        moretext +
        "</a></span>";

      $(this).html(html);
    }
  });

  $(".morelink").click(function () {
    if ($(this).hasClass("less")) {
      $(this).removeClass("less");
      $(this).html(moretext);
    } else {
      $(this).addClass("less");
      $(this).html(lesstext);
    }
    $(this).parent().prev().toggle();
    $(this).prev().toggle();
    return false;
  });
  // end

  // for mobile view dropdown
  (() => {
    const optionValues = document.querySelectorAll(".search-form__value");
    const searchOptions = document.querySelector(".search-form__selector");
    const dropdown = document.querySelector(".search-form__dropdown");
    const input = document.getElementById("search-form-loc");
    const selectorText = document.querySelector(".search-form__label--loc");

    searchOptions?.addEventListener("click", function () {
      dropdownHandler();
    });

    optionValues.forEach((option) => {
      option?.addEventListener("click", function () {
        updateUI(input, selectorText, this);
      });
    });

    window?.addEventListener("mouseup", function (event) {
      if (event.target != dropdown) {
        dropdown.classList.remove("search-form__dropdown--show");
      }
    });

    function dropdownHandler() {
      dropdown.classList.toggle("search-form__dropdown--show");
    }

    function updateUI(input, selectorText, referedThis) {
      input.value = referedThis.textContent.trim();
      selectorText.textContent = referedThis.textContent.trim();
      dropdown.classList.remove("search-form__dropdown--show");
    }
  })();
  // end
});
