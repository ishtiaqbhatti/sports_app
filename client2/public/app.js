!(function(o) {
  "use strict";

  var t = function() {
    (this.$body = o("body")),
      (this.$wrapper = o("#wrapper")),
      (this.$leftMenuButton = o(".button-menu-mobile")),
      (this.$menuItem = o(".has_sub > a"));
  };

  (t.prototype.intSlimscrollmenu = function() {
    o(".slimscrollleft").slimscroll({
      height: "auto",

      position: "right",

      size: "7px",

      color: "#9ea5ab"
    });
  }),
    (t.prototype.initSlimscroll = function() {
      o(".slimscroll").slimscroll({
        height: "auto",

        position: "right",

        size: "5px",

        color: "#9ea5ab",

        touchScrollStep: 50
      });
    }),
    (t.prototype.initLeftMenuCollapse = function() {
      var i = this;

      this.$leftMenuButton.on("click", function(t) {
        t.preventDefault(),
          i.$body.toggleClass("fixed-left-void"),
          i.$wrapper.toggleClass("enlarged");
      });
    }),
    (t.prototype.initComponents = function() {
      o('[data-toggle="tooltip"]').tooltip(),
        o('[data-toggle="popover"]').popover();
    }),
    (t.prototype.initMenu = function() {
      var e = this;

      function n() {
        var t = o(document).height();

        t > o(".body-content").height() && o(".body-content").height(t);
      }

      e.$menuItem.on("click", function() {
        var t = o(this).parent(),
          i = t.find("> ul");

        return (
          e.$body.hasClass("sidebar-collapsed") ||
            (i.is(":visible")
              ? i.slideUp(300, function() {
                  t.removeClass("nav-active"),
                    o(".body-content").css({
                      height: ""
                    }),
                    n();
                })
              : (o(".has_sub").each(function() {
                  var t = o(this);

                  t.hasClass("nav-active") &&
                    t.find("> ul").slideUp(300, function() {
                      t.removeClass("nav-active");
                    });
                }),
                t.addClass("nav-active"),
                i.slideDown(300, function() {
                  n();
                }))),
          !1
        );
      });
    }),
    (t.prototype.activateMenuItem = function() {
      o("#sidebar-menu a").each(function() {
        this.href == window.location.href &&
          (o(this).addClass("active"),
          o(this)
            .parent()
            .addClass("active"),
          o(this)
            .parent()
            .parent()
            .prev()
            .addClass("active"),
          o(this)
            .parent()
            .parent()
            .parent()
            .addClass("active"),
          o(this)
            .parent()
            .parent()
            .prev()
            .click());
      });
    }),
    (t.prototype.Preloader = function() {
      o(window).on("load", function() {
        o("#status").fadeOut(),
          o("#preloader")
            .delay(350)
            .fadeOut("slow"),
          o("body")
            .delay(350)
            .css({
              overflow: "visible"
            });
      });
    }),
    (t.prototype.init = function() {
      this.intSlimscrollmenu(),
        this.initSlimscroll(),
        this.initLeftMenuCollapse(),
        this.initComponents(),
        this.initMenu(),
        this.activateMenuItem(),
        this.Preloader();
    }),
    (o.MainApp = new t()),
    (o.MainApp.Constructor = t);
})(window.jQuery),
  (function(t) {
    "use strict";

    window.jQuery.MainApp.init();

    var maxLength = 300;

    $("textarea").each(function() {
      var length = $(this).val().length;

      var length = maxLength - length;

      $(".chars").text(length);
    });

    $("input[type='file']").on("change", function(event1) {
      src1 = URL.createObjectURL(event1.target.files[0]);

      this.parentNode.parentNode.querySelector("label").style.backgroundImage =
        "url(" + src1 + ")";

      this.parentNode.parentNode.querySelector("label span").style.display =
        "none";

      this.parentNode.parentNode.querySelector("button").style.display =
        "block";

      // remove image

      this.parentNode.parentNode
        .querySelector("button")
        .addEventListener("click", function(event) {
          this.parentNode.parentNode.querySelector(
            "label"
          ).style.backgroundImage = "";

          this.style.display = "none";
        });
    });

    // function format(item, state) {
    //   if (!item.id) {
    //     return item.text;
    //   }
    //   var countryUrl = "https://lipis.github.io/flag-icon-css/flags/4x3/";
    //   var stateUrl = "https://oxguy3.github.io/flags/svg/us/";
    //   var url = state ? stateUrl : countryUrl;
    //   var img = $("<img>", {
    //     class: "img-flag",
    //     width: 26,
    //     src: url + item.element.value.toLowerCase() + ".svg"
    //   });
    //   var span = $("<span>", {
    //     text: " " + item.text
    //   });
    //   span.prepend(img);
    //   return span;
    // }

    // $(document).ready(function() {
    //   $("#countries").select2({
    //     templateResult: function(item) {
    //       return format(item, true);
    //     }
    //   });
    //   $("#us-states").select2({
    //     templateResult: function(item) {
    //       return format(item, true);
    //     }
    //   });
    // });

    $(".tag-select").select2({
      maximumSelectionLength: 2
    });
    $(".tag-select2").select2({
      maximumSelectionLength: 5
    });

    $(function() {
      // Turn input element into a pond
      $(".filepond").filepond({
        allowImagePreview: true
      });
    });

    $("texta.services-textarea").maxlength({
      alwaysShow: true,
      threshold: 10,
      warningClass: "label label-info",
      limitReachedClass: "label label-warning",
      placement: "top",
      message: "used %charsTyped% of %charsTotal% chars."
    });

    function formatState(state) {
      if (!state.id) {
        return state.text;
      }
      var baseUrl = "https://lipis.github.io/flag-icon-css/flags/4x3/";
      var $state = $(
        '<span><img src="' +
          baseUrl +
          "/" +
          state.element.value.toLowerCase() +
          '.svg" class="img-flag" /> ' +
          state.text +
          "</span>"
      );
      return $state;
    }

    $("#countries,#countries2").select2({
      templateSelection: formatState
    });
  })();
