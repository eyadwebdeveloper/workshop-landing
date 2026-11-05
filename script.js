      (function () {
        var CONTACT = "workshop@eyadashraf.dev";
        var titles = {
          eg: "WorkShop | برنامج إدارة ورش تغيير الزيوت على ويندوز",
          ar: "WorkShop | برنامج إدارة ورش تغيير الزيوت على ويندوز",
          en: "WorkShop | Oil Change Workshop Software for Windows",
        };
        var descs = {
          eg: "WorkShop برنامج لإدارة ورشة تغيير الزيوت على ويندوز: نقطة بيع، تغيير زيت، عملاء وعربيات، مخزون ومصاريف. شغّال من غير نت وبتدفع مرة واحدة.",
          ar: "WorkShop برنامج لإدارة ورشة تغيير الزيوت على ويندوز: نقطة بيع، تغيير زيت، عملاء وسيارات، مخزون ومصروفات. يعمل بدون إنترنت وتدفع مرة واحدة.",
          en: "WorkShop runs your oil-change workshop from one Windows app: point of sale, oil changes, customers, vehicles, stock and expenses. Works offline. Pay once.",
        };
        function meta(sel, v) {
          var m = document.querySelector(sel);
          if (m) m.setAttribute("content", v);
        }
        var langs = {
          eg: ["ar-EG", "rtl"],
          ar: ["ar", "rtl"],
          en: ["en", "ltr"],
        };
        var nodes = document.querySelectorAll("[data-en]");
        nodes.forEach(function (n) {
          n.setAttribute("data-eg", n.innerHTML);
        });
        var btns = document.querySelectorAll(".langs button");
        function setLang(l) {
          document.documentElement.lang = langs[l][0];
          document.documentElement.dir = langs[l][1];
          nodes.forEach(function (n) {
            n.innerHTML = n.getAttribute("data-" + l);
          });
          document.title = titles[l];
          meta('meta[name="description"]', descs[l]);
          meta('meta[property="og:title"]', titles[l]);
          meta('meta[property="og:description"]', descs[l]);
          btns.forEach(function (b) {
            b.setAttribute(
              "aria-pressed",
              b.getAttribute("data-l") === l ? "true" : "false",
            );
          });
          try {
            localStorage.setItem("ws-lang", l);
          } catch (e) {}
        }
        var saved = null;
        try {
          saved = localStorage.getItem("ws-lang");
        } catch (e) {}
        setLang(langs[saved] ? saved : "eg");
        btns.forEach(function (b) {
          b.addEventListener("click", function () {
            setLang(b.getAttribute("data-l"));
          });
        });
        var subject = encodeURIComponent("WorkShop license request");
        document.querySelectorAll("[data-mail]").forEach(function (a) {
          a.href = "mailto:" + CONTACT + "?subject=" + subject;
        });
        document.querySelectorAll("[data-mail-text]").forEach(function (t) {
          t.textContent = CONTACT;
        });
        document.getElementById("year").textContent = new Date().getFullYear();
      })();