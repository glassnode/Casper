!(function (n) {
  "use strict";
  (n.fn.fitVids = function (e) {
    var t,
      i,
      o = { customSelector: null, ignore: null };
    return (
      document.getElementById("fit-vids-style") ||
        ((t = document.head || document.getElementsByTagName("head")[0]),
        ((i = document.createElement("div")).innerHTML =
          '<p>x</p><style id="fit-vids-style">.fluid-width-video-container{flex-grow: 1;width:100%;}.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>'),
        t.appendChild(i.childNodes[1])),
      e && n.extend(o, e),
      this.each(function () {
        var e = [
          'iframe[src*="player.vimeo.com"]',
          'iframe[src*="youtube.com"]',
          'iframe[src*="youtube-nocookie.com"]',
          'iframe[src*="kickstarter.com"][src*="video.html"]',
          "object",
          "embed",
        ];
        o.customSelector && e.push(o.customSelector);
        var r = ".fitvidsignore";
        o.ignore && (r = r + ", " + o.ignore);
        e = n(this).find(e.join(","));
        (e = (e = e.not("object object")).not(r)).each(function () {
          var e,
            t,
            i = n(this);
          0 < i.parents(r).length ||
            ("embed" === this.tagName.toLowerCase() &&
              i.parent("object").length) ||
            i.parent(".fluid-width-video-wrapper").length ||
            (i.css("height") ||
              i.css("width") ||
              (!isNaN(i.attr("height")) && !isNaN(i.attr("width"))) ||
              (i.attr("height", 9), i.attr("width", 16)),
            (e =
              ("object" === this.tagName.toLowerCase() ||
              (i.attr("height") && !isNaN(parseInt(i.attr("height"), 10)))
                ? parseInt(i.attr("height"), 10)
                : i.height()) /
              (isNaN(parseInt(i.attr("width"), 10))
                ? i.width()
                : parseInt(i.attr("width"), 10))),
            i.attr("name") ||
              ((t = "fitvid" + n.fn.fitVids._count),
              i.attr("name", t),
              n.fn.fitVids._count++),
            i
              .wrap(
                '<div class="fluid-width-video-container"><div class="fluid-width-video-wrapper"></div></div>'
              )
              .parent(".fluid-width-video-wrapper")
              .css("padding-top", 100 * e + "%"),
            i.removeAttr("height").removeAttr("width"));
        });
      })
    );
  }),
    (n.fn.fitVids._count = 0);
})(window.jQuery || window.Zepto),
  (function (e, t) {
    var i = "glassnode.dark-mode",
      r = "dark-mode",
      e = e.matchMedia("(prefers-color-scheme: dark)"),
      o = t.querySelector("html"),
      t = t.querySelector(".js-toggle-mode");
    ("true" !== localStorage.getItem(i) && !e.matches) || o.classList.toggle(r),
      t.addEventListener("click", () => {
        localStorage.setItem(i, !o.classList.contains(r)),
          o.classList.toggle(r);
      });
  })(window, document),
  (function (e) {
    e.addEventListener("DOMContentLoaded", function () {
      e.querySelectorAll(".kg-gallery-image img").forEach(function (e) {
        var t = e.closest(".kg-gallery-image"),
          e = e.attributes.width.value / e.attributes.height.value;
        t.style.flex = e + " 1 0%";
      });
    });
  })((window, document)),
  (function (t, i) {
    var r,
      o,
      n,
      s,
      d,
      a,
      l,
      c = i.querySelector("link[rel=next]");
    function h() {
      if (404 === this.status)
        return (
          t.removeEventListener("scroll", m),
          void t.removeEventListener("resize", f)
        );
      this.response.querySelectorAll("article.post-card").forEach(function (e) {
        r.appendChild(i.importNode(e, !0));
      });
      var e = this.response.querySelector("link[rel=next]");
      e
        ? (c.href = e.href)
        : (t.removeEventListener("scroll", m),
          t.removeEventListener("resize", f)),
        (l = i.documentElement.scrollHeight),
        (s = n = !1);
    }
    function e() {
      var e;
      s ||
        (d + a <= l - o
          ? (n = !1)
          : ((s = !0),
            ((e = new t.XMLHttpRequest()).responseType = "document"),
            e.addEventListener("load", h),
            e.open("GET", c.href),
            e.send(null)));
    }
    function u() {
      n || t.requestAnimationFrame(e), (n = !0);
    }
    function m() {
      (d = t.scrollY), u();
    }
    function f() {
      (a = t.innerHeight), (l = i.documentElement.scrollHeight), u();
    }
    !c ||
      ((r = i.querySelector(".post-feed")) &&
        ((s = n = !(o = 300)),
        (d = t.scrollY),
        (a = t.innerHeight),
        (l = i.documentElement.scrollHeight),
        t.addEventListener("scroll", m, { passive: !0 }),
        t.addEventListener("resize", f),
        u()));
  })(window, document);
//# sourceMappingURL=casper.js.map
