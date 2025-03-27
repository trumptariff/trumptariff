! function(N) {
    "use strict";

    function h() {
        "block" == N("#mobile-menu-trigger").css("display") ? (N("body").removeClass("is-header-desktop"), N("body").addClass("is-header-mobile")) : (N("body").addClass("is-header-desktop"), N("body").removeClass("is-header-mobile"))
    }
    N(document).ready(function() {
        h(), 768 < N(window).width() && N(".nav").on("mouseenter focus", ".level-1-trigger", function(e) {
            var t = N(this);
            t.toggleClass("has-focus"), t.parents(".has-dropdown-menu").attr("aria-expanded", "true"), t.siblings(".dropdown-menu").attr("aria-hidden", "false")
        }).on("mouseleave blur", ".level-1-trigger", function(e) {
            var t = N(this);
            t.toggleClass("has-focus"), setTimeout(function() {
                "true" !== t.siblings(".dropdown-menu").attr("data-has-focus") && (t.parents(".has-dropdown-menu").attr("aria-expanded", "false"), t.siblings(".dropdown-menu").attr("aria-hidden", "true"))
            }, 100)
        }).on("mouseenter focusin", ".dropdown-menu", function(e) {
            var t = N(this);
            t.attr("data-has-focus", "true"), t.attr("aria-hidden", "false")
        }).on("mouseleave focusout", ".dropdown-menu", function(e) {
            var t = N(this);
            setTimeout(function() {
                0 === t.find(":focus").length && (t.attr("data-has-focus", "false"), t.attr("aria-hidden", "true"), 0 === t.siblings(".level-1-trigger.has-focus").length) && (t.parents(".has-dropdown-menu").attr("aria-expanded", "false"), t.siblings(".dropdown-menu").attr("aria-hidden", "true"))
            }, 100)
        }), N("#mobile-menu-trigger").click(function(e) {
            "false" == N(this).attr("aria-expanded") ? (N("html,body").animate({
                scrollTop: 0
            }, 0), N(this).attr("aria-expanded", "true"), N(this).attr("aria-label", "Close Menu"), N(this).stop().addClass("is-open"), N("#header").stop().addClass("is-mobile-open")) : (N(this).attr("aria-expanded", "false"), N(this).attr("aria-label", "Open Menu"), N(this).stop().removeClass("is-open"), N("#header").stop().removeClass("is-mobile-open"))
        }); {
            var t = N("#header"),
                a = N("body");
            let e = "";
            e = 610 < N(window).width() ? "-35" : "0", t.length && (t.wrap('<div class="menu-sticky-node-wrapper">'), t.parent().waypoint(function(e) {
                "down" == e ? (a.addClass("header-fixed"), t.addClass("is-fixed")) : (a.removeClass("header-fixed"), t.removeClass("is-fixed"))
            }, {
                offset: e
            }))
        }
        var n, s, i, o, r;

        function e() {
            var e = r.matchingItems.length;
            N("#news-page-first").on("click", function() {
                r.show(1, 20)
            }), N("#news-page-last").on("click", function() {
                r.show(e - (e % 20 || 20) + 1, 20)
            })
        }

        function l() {
            var e = N("#news .pagination li.active .page").text(),
                t = 20 * e - 19,
                e = 20 * e - (20 - r.visibleItems.length);
            0 === r.visibleItems.length || 0 === r.matchingItems.length ? (N("#news-pagination-record").hide(), N("#news-pagination-record-msg").show(), N("#news-pagination-record-msg").text("No results found."), N("#news-page-first-item-number, #news-page-last-item-number, #news-record-count-total").text("0")) : (N("#news-pagination-record").show(), N("#news-pagination-record-msg").hide(), N("#news-page-first-item-number").text(t), N("#news-page-last-item-number").text(e), N("#news-record-count-total").text(r.matchingItems.length))
        }

        function d() {
            0 === r.visibleItems.length || 0 === r.matchingItems.length ? (N("#news-page-first").hide(), N("#news-page-last").hide()) : (N("#news .pagination li:first").hasClass("active") ? N("#news-page-first").hide() : N("#news-page-first").show(), N("#news .pagination li:last").hasClass("active") ? N("#news-page-last").hide() : N("#news-page-last").show())
        }

        function c() {
            N(".news-pagination li").length <= 1 ? N(".news-pagination").hide() : N(".news-pagination").show()
        }

        function p(e) {
            u(e.target), N(".line-slide .categories .item").not(this).removeClass("active"), N(this).addClass("active")
        }

        function u(e) {
            var t = document.querySelector(".line-slide .line");
            t.style.left = e.offsetLeft + "px", t.style.width = e.clientWidth + "px"
        }
        N(window).width(), m = N("footer").outerHeight(), N("#wrapper").css("margin-bottom", -m), N("#wrapper").css("padding-bottom", m), n = N(".hover-bars"), s = N(".hover-bars .bars .bar"), i = N(".hover-bars .info .panel"), o = N(".hover-bars .bars .mobile-panel"), 677 < N(window).width() ? s.on("click", function() {
            var e = N(this).attr("data-panel"),
                e = N("#" + e);
            "false" === N(this).attr("aria-expanded") ? (n.addClass("panel-open"), s.not(this).attr("aria-expanded", "false"), N(this).attr("aria-expanded", "true"), i.not(e).attr("aria-hidden", "true"), e.attr("aria-hidden", "false")) : (n.removeClass("panel-open"), N(this).attr("aria-expanded", "false"), e.attr("aria-hidden", "true"))
        }) : s.on("click", function() {
            var e = N(this).attr("data-panel"),
                e = N("#mobile-" + e);
            "false" === N(this).attr("aria-expanded") ? (s.not(this).attr("aria-expanded", "false"), N(this).attr("aria-expanded", "true"), o.not(e).attr("aria-hidden", "true"), e.attr("aria-hidden", "false")) : (N(this).attr("aria-expanded", "false"), e.attr("aria-hidden", "true"))
        }), new Swiper(".video-slider", {
            spaceBetween: 0,
            watchSlidesVisibility: !0,
            slideToClickedSlide: !0,
            simulateTouch: !1,
            navigation: {
                nextEl: ".vid-button-next",
                prevEl: ".vid-button-prev"
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    loop: !1,
                    centeredSlides: !1,
                    autoHeight: !0
                },
                677: {
                    slidesPerView: 3,
                    loop: !0,
                    centeredSlides: !0
                }
            }
        }), N("body").hasClass("list-landing") && (r = new List("news", {
            valueNames: ["classes", "news-title", "news-summary"],
            page: 20,
            pagination: !0,
            pagination: {
                prev: !0,
                next: !0
            }
        }), m = N(".news-pagination .page"), N("#news-page-first-item-number, #news-page-last-item-number, #news-record-count-total").text("0"), l(), N(document).on("click", m, function() {
            l(), d()
        }), N(".news-pagination-inner-container").prepend('<button class="page firstBtn" id="news-page-first">Go To First Page</button>'), N(".news-pagination-inner-container").append('<button class="page lastBtn" id="news-page-last">Go To Last Page</button>'), r.on("updated", l), r.on("updated", e), r.on("updated", d), r.on("updated", c), r.on("searchComplete", l), r.on("searchComplete", e), r.on("searchComplete", d), r.on("searchComplete", c), r.on("filterComplete", l), r.on("filterComplete", e), r.on("filterComplete", d), r.on("filterComplete", c), r.on("sortComplete", l), r.on("sortComplete", e), r.on("sortComplete", d), r.on("sortComplete", c), e(), d(), N(".sort-btn").on("click", function() {
            var s = N(this).text();
            if (!N(this).hasClass("active")) return N(".sort-btn-all").removeClass("active"), N(".sort-btn").not(this).removeClass("active"), N(this).addClass("active"), r.filter(function(e) {
                for (var t = e.values().classes.split(","), a = 0, n = t.length; a < n; a++)
                    if (t[a] == s) return !0;
                return !1
            }), !1;
            N(".sort-btn-all").addClass("active"), N(".sort-btn").not(this).removeClass("active"), N(this).removeClass("active"), r.filter()
        }), N(".sort-btn-all").on("click", function() {
            N(".sort-btn").removeClass("active"), N(this).addClass("active"), r.filter()
        }), N("#expand-search-news").click(function() {
            "false" == N(this).attr("aria-expanded") ? (N(this).attr("aria-expanded", "true"), N(this).siblings("form").attr("data-hidden", "false")) : (N(this).attr("aria-expanded", "false"), N(this).siblings("form").attr("data-hidden", "true"))
        }), N("#expand-search-news").siblings("form").submit(function(e) {
            e.preventDefault()
        }), N("body").hasClass("news") && N('button[data-sort="news"]').click(), N("body").hasClass("videos") && N('button[data-sort="agenda47"]').click(), document.querySelectorAll(".line-slide .categories .item").forEach((e, t) => {
            e.onclick = p, 0 == t && u(e)
        })), N("body").hasClass("issues") && "" != (m = window.location.pathname.split("/")[2]) && 0 < (m = N("#" + m).parents(".section")).length && m.animatescroll({
            scrollSpeed: 500,
            padding: 70
        }), N(".truth-feed").find(".post").each(function() {
            var e, t = N(this).find(".linked");
            t.length && (0 <= (t = t.find(".site").text().toLowerCase().match(/^https?\:\/\/([^\/:?#]+)(?:[\/:?#]|$)/i))[1].indexOf("www.") ? (e = t[1].replace(/^www\./, ""), N(this).find(".site").text(e)) : N(this).find(".site").text(t[1]))
        });
        var m = N(".accordion .section .bar");
        N(".accordion .section .panel"), m.on("click", function() {
            var e = N(this).attr("data-panel"),
                e = N("#" + e);
            N(this).children(".rms").fadeToggle(), "false" === N(this).attr("aria-expanded") ? (N(this).attr("aria-expanded", "true"), e.attr("aria-hidden", "false")) : (N(this).attr("aria-expanded", "false"), e.attr("aria-hidden", "true"))
        }), N("body").hasClass("has-popup") && N("body").hasClass("home") && (m = N(".popup").find(".key").text(), N(".close-popup").click(function() {
            N(this).parents(".popup").attr("aria-hidden", "true"), N(".popup").find("iframe").attr("src", "")
        }), null === localStorage.getItem("popup") ? (N(".popup").attr("aria-hidden", "false"), localStorage.setItem("popup", m)) : (localStorage.getItem("popup") != m && localStorage.setItem("popup", m), N(".popup").attr("aria-hidden", "false"))), 1 == N("body").hasClass("events") && async function() {
            var e = await fetch("https://djt.campaignnucleus.com/feeds/events");
            e = await e.json();
            var t = await fetch("https://saveamerica.campaignnucleus.com/feeds/events");
            var t = await t.json(),
                a = e.data.concat(t.data),
                n = document.getElementById("nucleus-event-feed").children[0],
                e = N("#no-events");
            if (0 == a.length) e.show();
            else
                for (var s = 0; s < a.length; s++) {
                    var i = document.createElement("div"),
                        o = a[s].starts_at,
                        r = a[s].timezone,
                        l = (o = "US/Eastern" == r ? moment.tz(o, "America/New_York") : "US/Central" == r ? moment.tz(o, "America/Chicago") : "US/Mountain" == r ? moment.tz(o, "America/Denver") : "US/Pacific" == r ? moment.tz(o, "America/Los_Angeles") : moment.tz(o, r)).format("ddd, MMMM DD, YYYY"),
                        o = o.format("hh:mm a"),
                        d = a[s].location_city,
                        c = a[s].location_state,
                        i = (i.classList.add("nef-list-item"), i.classList.add("list-item"), i.classList.add("item"), document.createElement("div")),
                        p = document.createElement("a"),
                        u = document.createElement("div"),
                        m = document.createElement("div"),
                        h = document.createElement("span"),
                        f = document.createElement("span"),
                        g = document.createElement("div"),
                        w = document.createElement("h2"),
                        v = document.createElement("p"),
                        b = document.createElement("div"),
                        C = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
                        x = document.createElementNS("http://www.w3.org/2000/svg", "path"),
                        y = document.createElement("div"),
                        S = document.createElement("div"),
                        E = document.createElement("p"),
                        L = document.createElement("span");
                    i.className = "nef-list-item list-item item", p.className = "nef-event", u.className = "event-mobile-box", m.className = "event-mobile-container", h.className = "mobile-link", f.className = "visually-hidden", g.className = "title", b.className = "tags", y.className = "info", L.className = "btn", C.setAttributeNS(null, "width", "15px"), C.setAttributeNS(null, "height", "24px"), C.setAttributeNS(null, "viewBox", "0 0 15 24"), x.setAttributeNS(null, "d", "M0,3l3.1-3L15,12L3.1,24L0,21l9-9L0,3z"), E.innerHTML = l + "<br><span class='mobile-spacer'>&nbsp;|&nbsp;</span>" + o + " (" + r + ")", L.innerHTML = "Get Tickets", w.innerHTML = a[s].label, f.innerHTML = "Go to " + a[s].label, p.setAttribute("href", a[s].url_public), g.appendChild(w), y.appendChild(S), S.appendChild(E), S.appendChild(L), C.appendChild(x), h.appendChild(C), h.appendChild(f), m.appendChild(g), m.appendChild(b), u.appendChild(m), u.appendChild(h), p.appendChild(u), p.appendChild(y), i.appendChild(p), null !== a[s].description && (v.innerHTML = a[s].description, g.appendChild(v)), !0 === a[s].featured && (l = document.createElement("span"), o = document.createElementNS("http://www.w3.org/2000/svg", "svg"), r = document.createElementNS("http://www.w3.org/2000/svg", "polygon"), l.className = "tag featured", o.setAttributeNS(null, "width", "100%"), o.setAttributeNS(null, "height", "8px"), o.setAttributeNS(null, "viewBox", "0 0 20 10"), o.setAttributeNS(null, "preserveAspectRatio", "none"), r.setAttributeNS(null, "points", "10,10 20,0 0,0"), l.innerHTML = "Featured", o.appendChild(r), l.appendChild(o), p.classList.add("has-tags", "featured"), b.appendChild(l)), null != d && (w = document.createElement("span"), E = document.createElementNS("http://www.w3.org/2000/svg", "svg"), S = document.createElementNS("http://www.w3.org/2000/svg", "polygon"), w.className = "tag city", E.setAttributeNS(null, "width", "100%"), E.setAttributeNS(null, "height", "8px"), E.setAttributeNS(null, "viewBox", "0 0 20 10"), E.setAttributeNS(null, "preserveAspectRatio", "none"), S.setAttributeNS(null, "points", "10,10 20,0 0,0"), w.innerHTML = d + ", " + c, E.appendChild(S), w.appendChild(E), p.classList.add("has-tags"), b.appendChild(w)), n.append(i)
                }
        }()
    }), N(window).resize(function() {
        h()
    }), N(document).mouseup(function(e) {
        var t = N(".popup").find(".content");
        t.is(e.target) || 0 !== t.has(e.target).length || (N(".popup").attr("aria-hidden", "true"), N(".popup").find("iframe").attr("src", ""))
    })
}((window, jQuery)), document.addEventListener("DOMContentLoaded", function() {
    let i;

    function t() {
        const s = document.querySelector(".chatter-message");
        if (s) {
            clearTimeout(i), [...s.children].forEach(e => e.style.display = "none");
            let n = 0;
            ! function e() {
                if (!(n >= s.children.length)) {
                    const a = s.children[n];
                    a.style.display = "block";
                    var t = a.classList.contains("loader") ? 1800 : 0;
                    i = setTimeout(() => {
                        a.classList.contains("loader") && (a.style.display = "none"), n++, e()
                    }, t)
                }
            }()
        }
    }
    const a = document.querySelector(".chatter");
    a && a.addEventListener("click", function() {
        var e = document.querySelector(".chatter-box");
        e && (e.classList.toggle("active"), a.classList.add("cushide"), e.classList.contains("active")) && t()
    });
    var e = document.querySelector(".chatter-icons .minimize"),
        e = (e && e.addEventListener("click", function() {
            var e = document.querySelector(".chatter"),
                e = (e && e.classList.remove("cushide"), document.querySelector(".chatter-box"));
            e && (e.classList.remove("active"), clearTimeout(i))
        }), document.querySelector(".chatter-icons .close"));
    e && e.addEventListener("click", function() {
        var e = document.querySelector(".chatter"),
            e = (e && (e.style.display = "none"), document.querySelector(".chatter-box"));
        e && (e.classList.remove("active"), clearTimeout(i))
    })
}), window.onload = function() {
    var e, t = document.querySelector('label[for="fields[26]-3"]');
    t && document.getElementById(t.getAttribute("for")) && ((e = document.createElement("div")).classList.add("informer"), e.innerHTML = `
        <img src="/assets/images/icons/information.png">
        <p>Trump Captains will be responsible for turning out targeted voters from a list provided by to them. They are vital to victory in November.</p>
      `, t.insertAdjacentElement("afterend", e))
};
//# sourceMappingURL=maps/app.js.map