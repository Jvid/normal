/*2017-02-13 14:12:25 smartisan*/ 
! function (e, t, i) {
    function r(e, t) {
        return typeof e === t
    }
    function n() {
        var e, t, i, n, s, a, o;
        for (var l in w) if (w.hasOwnProperty(l)) {
                if (e = [], t = w[l], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options
                    .aliases.length)) for (i = 0; i < t.options.aliases.length; i++) e.push(t.options.aliases[i].toLowerCase());
                for (n = r(t.fn, "function") ? t.fn() : t.fn, s = 0; s < e.length; s++) a = e[s], o = a.split("."), 1 ===
                        o.length ? b[o[0]] = n : (!b[o[0]] || b[o[0]] instanceof Boolean || (b[o[0]] = new Boolean(b[o[
                        0]])), b[o[0]][o[1]] = n), g.push((n ? "" : "no-") + o.join("-"))
            }
    }
    function s(e) {
        var t = x.className,
            i = b._config.classPrefix || "";
        if (C && (t = t.baseVal), b._config.enableJSClass) {
            var r = new RegExp("(^|\\s)" + i + "no-js(\\s|$)");
            t = t.replace(r, "$1" + i + "js$2")
        }
        b._config.enableClasses && (t += " " + i + e.join(" " + i), C ? x.className.baseVal = t : x.className = t)
    }
    function a() {
        return "function" != typeof t.createElement ? t.createElement(arguments[0]) : C ? t.createElementNS.call(t,
            "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
    }
    function o(e) {
        return e.replace(/([a-z])-([a-z])/g, function (e, t, i) {
            return t + i.toUpperCase()
        }).replace(/^-/, "")
    }
    function l(e, t) {
        return !!~("" + e).indexOf(t)
    }
    function c() {
        var e = t.body;
        return e || (e = a(C ? "svg" : "body"), e.fake = !0), e
    }
    function u(e, i, r, n) {
        var s, o, l, u, h = "modernizr",
            d = a("div"),
            f = c();
        if (parseInt(r, 10)) for (; r--;) l = a("div"), l.id = n ? n[r] : h + (r + 1), d.appendChild(l);
        return s = a("style"), s.type = "text/css", s.id = "s" + h, (f.fake ? f : d).appendChild(s), f.appendChild(d),
            s.styleSheet ? s.styleSheet.cssText = e : s.appendChild(t.createTextNode(e)), d.id = h, f.fake && (f.style.background =
            "", f.style.overflow = "hidden", u = x.style.overflow, x.style.overflow = "hidden", x.appendChild(f)), o =
            i(d, e), f.fake ? (f.parentNode.removeChild(f), x.style.overflow = u, x.offsetHeight) : d.parentNode.removeChild(
            d), !! o
    }
    function h(e) {
        return e.replace(/([A-Z])/g, function (e, t) {
            return "-" + t.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }
    function d(t, r) {
        var n = t.length;
        if ("CSS" in e && "supports" in e.CSS) {
            for (; n--;) if (e.CSS.supports(h(t[n]), r)) return !0;
            return !1
        }
        if ("CSSSupportsRule" in e) {
            for (var s = []; n--;) s.push("(" + h(t[n]) + ":" + r + ")");
            return s = s.join(" or "), u("@supports (" + s + ") { #modernizr { position: absolute; } }", function (e) {
                return "absolute" == getComputedStyle(e, null).position
            })
        }
        return i
    }
    function f(e, t, n, s) {
        function c() {
            h && (delete R.style, delete R.modElem)
        }
        if (s = !r(s, "undefined") && s, !r(n, "undefined")) {
            var u = d(e, n);
            if (!r(u, "undefined")) return u
        }
        for (var h, f, p, m, v, _ = ["modernizr", "tspan"]; !R.style;) h = !0, R.modElem = a(_.shift()), R.style = R.modElem
                .style;
        for (p = e.length, f = 0; f < p; f++) if (m = e[f], v = R.style[m], l(m, "-") && (m = o(m)), R.style[m] !== i) {
                if (s || r(n, "undefined")) return c(), "pfx" != t || m;
                try {
                    R.style[m] = n
                } catch (g) {}
                if (R.style[m] != v) return c(), "pfx" != t || m
            }
        return c(), !1
    }
    function p(e, t) {
        return function () {
            return e.apply(t, arguments)
        }
    }
    function m(e, t, i) {
        var n;
        for (var s in e) if (e[s] in t) return i === !1 ? e[s] : (n = t[e[s]], r(n, "function") ? p(n, i || t) : n);
        return !1
    }
    function v(e, t, i, n, s) {
        var a = e.charAt(0).toUpperCase() + e.slice(1),
            o = (e + " " + M.join(a + " ") + a).split(" ");
        return r(t, "string") || r(t, "undefined") ? f(o, t, n, s) : (o = (e + " " + k.join(a + " ") + a).split(" "), m(
            o, t, i))
    }
    function _(e, t, r) {
        return v(e, i, i, t, r)
    }
    var g = [],
        w = [],
        y = {
            _version: "3.2.0",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function (e, t) {
                var i = this;
                setTimeout(function () {
                    t(i[e])
                }, 0)
            },
            addTest: function (e, t, i) {
                w.push({
                    name: e,
                    fn: t,
                    options: i
                })
            },
            addAsyncTest: function (e) {
                w.push({
                    name: null,
                    fn: e
                })
            }
        }, b = function () {};
    b.prototype = y, b = new b;
    var T = y._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : [];
    y._prefixes = T;
    var x = t.documentElement,
        C = "svg" === x.nodeName.toLowerCase();
    C || ! function (e, t) {
        function i(e, t) {
            var i = e.createElement("p"),
                r = e.getElementsByTagName("head")[0] || e.documentElement;
            return i.innerHTML = "x<style>" + t + "</style>", r.insertBefore(i.lastChild, r.firstChild)
        }
        function r() {
            var e = w.elements;
            return "string" == typeof e ? e.split(" ") : e
        }
        function n(e, t) {
            var i = w.elements;
            "string" != typeof i && (i = i.join(" ")), "string" != typeof e && (e = e.join(" ")), w.elements = i + " " +
                e, c(t)
        }
        function s(e) {
            var t = g[e[v]];
            return t || (t = {}, _++, e[v] = _, g[_] = t), t
        }
        function a(e, i, r) {
            if (i || (i = t), h) return i.createElement(e);
            r || (r = s(i));
            var n;
            return n = r.cache[e] ? r.cache[e].cloneNode() : m.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r
                .createElem(e), !n.canHaveChildren || p.test(e) || n.tagUrn ? n : r.frag.appendChild(n)
        }
        function o(e, i) {
            if (e || (e = t), h) return e.createDocumentFragment();
            i = i || s(e);
            for (var n = i.frag.cloneNode(), a = 0, o = r(), l = o.length; a < l; a++) n.createElement(o[a]);
            return n
        }
        function l(e, t) {
            t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag =
                t.createFrag()), e.createElement = function (i) {
                return w.shivMethods ? a(i, e, t) : t.createElem(i)
            }, e.createDocumentFragment = Function("h,f",
                "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(
                /[\w\-:]+/g, function (e) {
                return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
            }) + ");return n}")(w, t.frag)
        }
        function c(e) {
            e || (e = t);
            var r = s(e);
            return !w.shivCSS || u || r.hasCSS || (r.hasCSS = !! i(e,
                "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),
                h || l(e, r), e
        }
        var u, h, d = "3.7.3",
            f = e.html5 || {}, p = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
            m =
                /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
            v = "_html5shiv",
            _ = 0,
            g = {};
        ! function () {
            try {
                var e = t.createElement("a");
                e.innerHTML = "<xyz></xyz>", u = "hidden" in e, h = 1 == e.childNodes.length || function () {
                    t.createElement("a");
                    var e = t.createDocumentFragment();
                    return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment ||
                        "undefined" == typeof e.createElement
                }()
            } catch (i) {
                u = !0, h = !0
            }
        }();
        var w = {
            elements: f.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
            version: d,
            shivCSS: f.shivCSS !== !1,
            supportsUnknownElements: h,
            shivMethods: f.shivMethods !== !1,
            type: "default",
            shivDocument: c,
            createElement: a,
            createDocumentFragment: o,
            addElements: n
        };
        e.html5 = w, c(t), "object" == typeof module && module.exports && (module.exports = w)
    }("undefined" != typeof e ? e : this, t);
    var $ = "Moz O ms Webkit",
        k = y._config.usePrefixes ? $.toLowerCase().split(" ") : [];
    y._domPrefixes = k, b.addTest("cssgradients", function () {
        for (var e, t = "background-image:", i = "gradient(linear,left top,right bottom,from(#9f9),to(white));", r = "",
                n = 0, s = T.length - 1; n < s; n++) e = 0 === n ? "to " : "", r += t + T[n] + "linear-gradient(" + e +
                "left top, #9f9, white);";
        b._config.usePrefixes && (r += t + "-webkit-" + i);
        var o = a("a"),
            l = o.style;
        return l.cssText = r, ("" + l.backgroundImage).indexOf("gradient") > -1
    }), b.addTest("opacity", function () {
        var e = a("a").style;
        return e.cssText = T.join("opacity:.55;"), /^0.55$/.test(e.opacity)
    });
    var P = "CSS" in e && "supports" in e.CSS,
        S = "supportsCSS" in e;
    b.addTest("supports", P || S);
    var O = y.testStyles = u,
        M = y._config.usePrefixes ? $.split(" ") : [];
    y._cssomPrefixes = M;
    var A = {
        elem: a("modernizr")
    };
    b._q.push(function () {
        delete A.elem
    });
    var R = {
        style: A.elem.style
    };
    b._q.unshift(function () {
        delete R.style
    });
    y.testProp = function (e, t, r) {
        return f([e], i, t, r)
    };
    y.testAllProps = v, y.testAllProps = _, b.addTest("csstransforms3d", function () {
        var e = !! _("perspective", "1px", !0),
            t = b._config.usePrefixes;
        if (e && (!t || "webkitPerspective" in x.style)) {
            var i, r = "#modernizr{width:0;height:0}";
            b.supports ? i = "@supports (perspective: 1px)" : (i = "@media (transform-3d)", t && (i +=
                ",(-webkit-transform-3d)")), i += "{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}", O(
                r + i, function (t) {
                e = 7 === t.offsetWidth && 18 === t.offsetHeight
            })
        }
        return e
    }), n(), s(g), delete y.addTest, delete y.addAsyncTest;
    for (var D = 0; D < b._q.length; D++) b._q[D]();
    e.Modernizr = b
}(window, document),
function (e) {
    var t = {
        sectionContainer: "section",
        headerContainer: ".header",
        footerContainer: ".footer",
        wrapperClass: "onepage-wrapper",
        subNavClass: ".onepage-nav",
        paginationContainer: "onepage-pagination",
        paginationTemplate: ["<li>", '<span class="outer-ring"></span>', '<span class="inner-ring"></span>',
                '<span class="page-title"></span>', "</li>"].join(""),
        hasPagination: !0,
        paginationTip: [""],
        easing: "cubic-bezier(.86, 0, .07, 1)",
        desktopAnimationTime: 1e3,
        mobileAnimationTime: 400,
        beforeMove: null,
        afterMove: null,
        minHeight: 620
    }, i = function () {
            return e(window).width() <= 736 && (screen.width <= 736 || window.devicePixelRatio >= 2)
        }, r = function () {
            return !e("html").hasClass("csstransforms3d")
        }, n = function (e, t, i, r, n) {
            n = n || "transform";
            var s = n;
            "transform" == n && (s = "-webkit-transform"), t += "px", e.css({
                "-webkit-transform": "translate3d(0, " + t + ", 0)",
                "-webkit-transition": s + " " + i + "ms " + r,
                transform: "translate3d(0, " + t + ", 0)",
                transition: n + " " + i + "ms " + r
            })
        };
    e.fn.pageScroll = function (s) {
        var a = e(this),
            o = {}, l = !1,
            c = 0,
            u = 0,
            h = 0,
            d = !1,
            f = !1,
            p = e.extend({}, t, s);
        p.animationTime = i() ? p.mobileAnimationTime : p.desktopAnimationTime;
        var m = function () {
            o = {
                header: e(p.headerContainer),
                footer: e(p.footerContainer),
                section: e(p.sectionContainer),
                pagination: e("." + p.paginationContainer),
                subNav: e(p.subNavClass),
                _window: e(window)
            }, l = o.header.size() > 0 && o.footer.size() > 0, u = l ? 0 : 1
        }, v = function (t) {
                e.extend(p, t)
            };
        e.fn.swipeEvents = function () {
            function t(t) {
                if ("a" != t.target.tagName.toLowerCase() || !e(t.target).parents(p.headerContainer).length) {
                    var r = t.originalEvent,
                        n = S(r);
                    n.y && (_ = n.x, g = n.y, C = (new Date).getTime(), T = setTimeout(function () {
                        P.on("touchmove pointermove MSPointerMove", i)
                    }, 300), t.preventDefault())
                }
            }
            function i(e) {
                var t = e.originalEvent,
                    i = S(t);
                if (i.y) {
                    e.preventDefault(), y = _ - i.x, b = g - i.y, l ? 0 == u ? (b = (1 - .82 * Math.abs(b) / $) * b, b =
                        b <= -k ? -(k - 1e-6) : b) : u == o.section.length + 1 && (b = (1 - .82 * Math.abs(b) / $) * b,
                        b = b >= k ? k - 1e-6 : b) : 1 == u && b < 0 ? (b = (1 - .82 * Math.abs(b) / $) * b, b = b <= -
                        k ? -(k - 1e-6) : b) : u == o.section.length && b > 0 && (b = (1 - .82 * Math.abs(b) / $) * b,
                        b = b >= k ? k - 1e-6 : b);
                    var r = -b / 2 + h;
                    d || (n(a, r, 0, "linear"), w.toggle(u, r, 0, "linear", 1)), (i.y < 0 || g >= $ - 10) && f()
                }
            }
            function r(e) {
                var t = e.originalEvent,
                    i = S(t);
                0 == b && (b = g - i.y), "number" == typeof b && f()
            }
            function s() {
                if (Math.abs(b) < k) {
                    var e = p.animationTime / 2;
                    n(a, h, e, "cubic-bezier(0.455, 0.03, 0.515, 0.955)"), w.toggle(u, h, e,
                        "cubic-bezier(0.455, 0.03, 0.515, 0.955)", 1)
                }
                clearTimeout(T), P.off("touchmove pointermove MSPointerMove", i)
            }
            function c(e) {
                s()
            }
            function f() {
                var e = (new Date).getTime(),
                    t = e - C < 300;
                y >= 50 || y > 14 && t ? P.trigger("swipeLeft") : (y <= -50 || y < -14 && t) && P.trigger("swipeRight"),
                    b >= 50 || b > 14 && t ? P.trigger("swipeUp") : (b <= -50 || b < -14 && t) && P.trigger("swipeDown"),
                    s(), y = 0, b = 0
            }
            function m() {
                P.on("touchstart pointerdown MSPointerDown", t), P.on("touchend pointerup MSPointerUp", r), P.on(
                    "touchcancel pointercancel MSPointerCancel", c), P.on("swipeDown", function (e) {
                    x(e, 1)
                }).on("swipeUp", function (e) {
                    x(e, -1)
                })
            }
            function v() {
                P.off("touchstart pointerdown MSPointerDown", t), P.off("touchend pointerup MSPointerUp", r), P.off(
                    "touchcancel pointercancel MSPointerCancel", c), P.off("swipeDown swipeUp")
            }
            var _, g, y, b, T, C, $ = e(window).height(),
                k = .25 * $,
                P = e(this),
                S = function (e) {
                    var t = {};
                    return window.navigator.pointerEnabled && "touch" == e.pointerType || window.navigator.msPointerEnabled &&
                        e.pointerType && e.pointerType == e.MSPOINTER_TYPE_TOUCH ? (t.y = e.pageY, t.x = e.pageX) : e.changedTouches &&
                        e.changedTouches.length && (t.y = e.changedTouches[0].pageY, t.x = e.changedTouches[0].pageX),
                        t
                };
            return {
                addTouchListner: m,
                removeTouchListner: v
            }
        };
        var _, g = {
                init: function () {
                    var t = this;
                    if (p.hasPagination) {
                        if (o.pagination.length < 1) {
                            e('<ul class="' + p.paginationContainer + '"></ul>').insertAfter(a), o.pagination = e("ul." +
                                p.paginationContainer), sectionLength = o.section.length;
                            for (var i = 0; i < sectionLength; i++) {
                                var r = p.paginationTip[i] || "";
                                e(p.paginationTemplate).appendTo(o.pagination).find(".page-title").text(r)
                            }
                        }
                        t.toggleActive(), t.addListener()
                    }
                },
                remove: function () {
                    o.pagination && o.pagination.remove()
                },
                show: function () {
                    o.pagination.removeClass("hidden")
                },
                hide: function () {
                    o.pagination.addClass("hidden")
                },
                toggleActive: function () {
                    var e = u - 1,
                        t = this;
                    e < 0 && (e = 0), 0 == u || u > o.section.length ? t.hide() : t.show(), o.pagination.find("li").removeClass(
                        "active"), o.pagination.find("li").eq(e).addClass("active")
                },
                addListener: function () {
                    o.pagination.on("click", function (t) {
                        for (var i = t.target; e(i).parents("li").length;) i = i.parentNode;
                        if ("li" == i.tagName.toLowerCase() && !e(this).hasClass("active")) {
                            var r = -(e(i).index() + 1 - u);
                            0 !== r && P(r)
                        }
                    })
                }
            }, w = {
                toggle: function (e, t, i, r, s) {
                    var a = this;
                    if (a.bgSwitch(e, s), 0 === e && l) a.hide();
                    else {
                        a.show();
                        var c = -(t + o.header.height());
                        n(o.subNav, c, i, r, "all")
                    }
                },
                bgSwitch: function (e, t) {
                    var i;
                    i = 0 == e ? o.section.eq(0).attr("data-background") : o.section.eq(e - 1).attr("data-background"),
                        "dark" == i ? o.subNav.addClass("header-dark") : o.subNav.removeClass("header-dark"), e && (o.subNav
                        .removeClass("slide-up").removeClass("slide-down"), t > 0 ? o.subNav.addClass("slide-down") : o
                        .subNav.addClass("slide-up"))
                },
                show: function () {
                    o.subNav.addClass("active")
                },
                hide: function () {
                    o.subNav.removeAttr("style"), o.subNav.removeClass("active")
                }
            }, y = {
                resizeTimer: 0,
                init: function () {
                    var e = this;
                    e.prepare(), e.resize(), l || o.section.eq(0).addClass("active")
                },
                reset: function () {
                    f = !1, d = !1, m(), g.remove(), o.subNav.removeClass("header-dark"), w.hide(), a.removeAttr(
                        "style"), o.section.removeAttr("style"), e("html").removeClass(p.wrapperClass), e("html, body")
                        .removeClass("hidden vertical-hidden"), C.off(), e(document).off("mousedown", k), O.removeTouchListner(),
                        e(document).off("keydown", $), clearTimeout(_)
                },
                resize: function () {
                    var e = y;
                    if (S()) if (f) {
                            var t = o._window.height();
                            o.section.height(t), T(), n(a, h, 0, "linear"), w.toggle(u, h, 0, "linear", 1)
                        } else R();
                        else e.reset()
                },
                resizeHandler: function () {
                    var e = 250,
                        t = y;
                    clearTimeout(t.resizeTimer), t.resizeTimer = setTimeout(function () {
                        t.resize()
                    }, e)
                },
                prepare: function () {
                    for (var e = o.section.length, t = 0; t < e; t++) {
                        var i = o.section[t],
                            r = l && 0 === t ? 0 : p.animationTime / 3;
                        i.timer = r
                    }
                },
                toggleActive: function (t, i) {
                    var r = t - 1,
                        n = o.section[r],
                        s = o.section.length;
                    return r < 0 ? void e(o.section[0]).removeClass("active") : (i > 0 && n == o.section[s - 1] || e(n)
                        .removeClass("active"), n && (n.timer > 0 ? setTimeout(function () {
                        e(n).addClass("active"), e(n).addClass("played")
                    }, n.timer) : (e(n).addClass("active"), e(n).addClass("played"))), e(n).removeClass("slide-up").removeClass(
                        "slide-down"), void(i > 0 ? e(n).addClass("slide-down") : e(n).addClass("slide-up")))
                }
            }, b = function (e) {
                var t = l ? o.section.length + 2 : o.section.length;
                c = u, e < 0 ? u += Math.abs(e) : u -= Math.abs(e), u = Math.min(u, t - 1), u = Math.max(u, 0)
            }, T = function () {
                var e = o.header.height(),
                    t = o.footer.height(),
                    i = o._window.height();
                switch (u) {
                case 0:
                    h = 0;
                    break;
                case o.section.length + 1:
                    h = ((u - 2) * i + e + t) * -1;
                    break;
                default:
                    h = ((u - 1) * i + e) * -1
                }
            }, x = function (e, t) {
                if (e.preventDefault(), !t) {
                    var i = e.originalEvent;
                    t = "undefined" != typeof i.wheelDeltaY ? i.wheelDeltaY : i.wheelDelta || -i.detail
                }
                0 !== t && (t = t > 0 ? 1 : -1, P(t))
            }, C = {
                on: function () {
                    e(document).on("mousewheel DOMMouseScroll", x)
                },
                off: function () {
                    e(document).off("mousewheel DOMMouseScroll", x)
                }
            }, $ = function (e) {
                e.target.tagName.toLowerCase();
                if ("input" != C && "textarea" != C) switch (e.which) {
                    case 38:
                        P(1);
                        break;
                    case 40:
                        P(-1);
                        break;
                    case 32:
                        P(-1);
                        break;
                    case 33:
                        P(1);
                        break;
                    case 34:
                        P(-1)
                }
            }, k = function (e) {
                if (2 == e.which) return !1
            }, P = function (e) {
                d || (d = !0, C.off(), _ = setTimeout(function () {
                    d = !1, C.on()
                }, p.animationTime + 500), b(e), a.transformPage(p, c, u, e))
            };
        e.fn.transformPage = function (t, i, r, s) {
            if (i != r) {
                var c = t.easing,
                    u = t.animationTime;
                l && (0 === r || 1 === r && s < 0) && (c = "cubic-bezier(.165, .84, .44, 1)"), "function" == typeof t.beforeMove &&
                    t.beforeMove(r, u, c, s), T(), n(a, h, u, c), w.toggle(r, h, u, c, s), e(this).on(
                    "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function (i) {
                    var n = i.target;
                    n == e(this)[0] && "function" == typeof t.afterMove && (o.subNav.removeClass("slide-up").removeClass(
                        "slide-down"), t.afterMove(r, u, c, s), e(this).off(
                        "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend"))
                }), y.toggleActive(r, s), g.toggleActive()
            }
        };
        var S = function () {
            var e = !1;
            return e = o._window.height() >= p.minHeight
        }, O = a.swipeEvents(),
            M = function () {
                y.reset(), e(window).off("resize", y.resizeHandler)
            }, A = function () {
                e("html").addClass(p.wrapperClass), navigator.userAgent.indexOf("Mac") > 0 ? e("html, body").addClass(
                    "hidden") : e("html, body").addClass("vertical-hidden"), e("html,body").animate({
                    scrollTop: 0
                }, {
                    queue: !1
                }, 10), y.init(), g.init(), C.on(), e(document).on("mousedown", k), O.addTouchListner(), e(window).on(
                    "resize", y.resizeHandler), e(document).on("keydown", $)
            }, R = function () {
                return r() ? void e(p.sectionContainer).addClass("active") : (m(), S() ? (f = !0, void A()) : void e(p.sectionContainer)
                    .addClass("active"))
            };
        return {
            setOptions: v,
            reset: M,
            init: R
        }
    }
}(window.jQuery),
function (e, t, i) {
    "use strict";
    var r = {
        timeout: 5
    };
    t.fn.blockImages = function (i) {
        var n = t.extend({}, r, i),
            s = n.timeout,
            a = !0,
            o = !1,
            l = function () {
                a && setTimeout(function () {
                    t("body").removeClass("blockimages"), a = !1
                }, 0)
            }, c = function () {
                o ? setTimeout(l, 100 * s) : (o = !0, t(e).on("load", function (e) {
                    l()
                }), setTimeout(l, 1e3 * s))
            }, u = function () {
                a = !0, t("body").addClass("blockimages")
            };
        return {
            start: c,
            init: u
        }
    }
}(window, jQuery), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function (e, t, i, r, n) {
        return jQuery.easing[jQuery.easing.def](e, t, i, r, n)
    },
    easeInQuad: function (e, t, i, r, n) {
        return r * (t /= n) * t + i
    },
    easeOutQuad: function (e, t, i, r, n) {
        return -r * (t /= n) * (t - 2) + i
    },
    easeInOutQuad: function (e, t, i, r, n) {
        return (t /= n / 2) < 1 ? r / 2 * t * t + i : -r / 2 * (--t * (t - 2) - 1) + i
    },
    easeInCubic: function (e, t, i, r, n) {
        return r * (t /= n) * t * t + i
    },
    easeOutCubic: function (e, t, i, r, n) {
        return r * ((t = t / n - 1) * t * t + 1) + i
    },
    easeInOutCubic: function (e, t, i, r, n) {
        return (t /= n / 2) < 1 ? r / 2 * t * t * t + i : r / 2 * ((t -= 2) * t * t + 2) + i
    },
    easeInQuart: function (e, t, i, r, n) {
        return r * (t /= n) * t * t * t + i
    },
    easeOutQuart: function (e, t, i, r, n) {
        return -r * ((t = t / n - 1) * t * t * t - 1) + i
    },
    easeInOutQuart: function (e, t, i, r, n) {
        return (t /= n / 2) < 1 ? r / 2 * t * t * t * t + i : -r / 2 * ((t -= 2) * t * t * t - 2) + i
    },
    easeInQuint: function (e, t, i, r, n) {
        return r * (t /= n) * t * t * t * t + i
    },
    easeOutQuint: function (e, t, i, r, n) {
        return r * ((t = t / n - 1) * t * t * t * t + 1) + i
    },
    easeInOutQuint: function (e, t, i, r, n) {
        return (t /= n / 2) < 1 ? r / 2 * t * t * t * t * t + i : r / 2 * ((t -= 2) * t * t * t * t + 2) + i
    },
    easeInSine: function (e, t, i, r, n) {
        return -r * Math.cos(t / n * (Math.PI / 2)) + r + i
    },
    easeOutSine: function (e, t, i, r, n) {
        return r * Math.sin(t / n * (Math.PI / 2)) + i
    },
    easeInOutSine: function (e, t, i, r, n) {
        return -r / 2 * (Math.cos(Math.PI * t / n) - 1) + i
    },
    easeInExpo: function (e, t, i, r, n) {
        return 0 == t ? i : r * Math.pow(2, 10 * (t / n - 1)) + i
    },
    easeOutExpo: function (e, t, i, r, n) {
        return t == n ? i + r : r * (-Math.pow(2, -10 * t / n) + 1) + i
    },
    easeInOutExpo: function (e, t, i, r, n) {
        return 0 == t ? i : t == n ? i + r : (t /= n / 2) < 1 ? r / 2 * Math.pow(2, 10 * (t - 1)) + i : r / 2 * (-Math.pow(
            2, -10 * --t) + 2) + i
    },
    easeInCirc: function (e, t, i, r, n) {
        return -r * (Math.sqrt(1 - (t /= n) * t) - 1) + i
    },
    easeOutCirc: function (e, t, i, r, n) {
        return r * Math.sqrt(1 - (t = t / n - 1) * t) + i
    },
    easeInOutCirc: function (e, t, i, r, n) {
        return (t /= n / 2) < 1 ? -r / 2 * (Math.sqrt(1 - t * t) - 1) + i : r / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) +
            i
    },
    easeInElastic: function (e, t, i, r, n) {
        var s = 1.70158,
            a = 0,
            o = r;
        if (0 == t) return i;
        if (1 == (t /= n)) return i + r;
        if (a || (a = .3 * n), o < Math.abs(r)) {
            o = r;
            var s = a / 4
        } else var s = a / (2 * Math.PI) * Math.asin(r / o);
        return -(o * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * n - s) * (2 * Math.PI) / a)) + i
    },
    easeOutElastic: function (e, t, i, r, n) {
        var s = 1.70158,
            a = 0,
            o = r;
        if (0 == t) return i;
        if (1 == (t /= n)) return i + r;
        if (a || (a = .3 * n), o < Math.abs(r)) {
            o = r;
            var s = a / 4
        } else var s = a / (2 * Math.PI) * Math.asin(r / o);
        return o * Math.pow(2, -10 * t) * Math.sin((t * n - s) * (2 * Math.PI) / a) + r + i
    },
    easeInOutElastic: function (e, t, i, r, n) {
        var s = 1.70158,
            a = 0,
            o = r;
        if (0 == t) return i;
        if (2 == (t /= n / 2)) return i + r;
        if (a || (a = n * (.3 * 1.5)), o < Math.abs(r)) {
            o = r;
            var s = a / 4
        } else var s = a / (2 * Math.PI) * Math.asin(r / o);
        return t < 1 ? -.5 * (o * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * n - s) * (2 * Math.PI) / a)) + i : o *
            Math.pow(2, -10 * (t -= 1)) * Math.sin((t * n - s) * (2 * Math.PI) / a) * .5 + r + i
    },
    easeInBack: function (e, t, i, r, n, s) {
        return void 0 == s && (s = 1.70158), r * (t /= n) * t * ((s + 1) * t - s) + i
    },
    easeOutBack: function (e, t, i, r, n, s) {
        return void 0 == s && (s = 1.70158), r * ((t = t / n - 1) * t * ((s + 1) * t + s) + 1) + i
    },
    easeInOutBack: function (e, t, i, r, n, s) {
        return void 0 == s && (s = 1.70158), (t /= n / 2) < 1 ? r / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + i : r /
            2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + i
    },
    easeInBounce: function (e, t, i, r, n) {
        return r - jQuery.easing.easeOutBounce(e, n - t, 0, r, n) + i
    },
    easeOutBounce: function (e, t, i, r, n) {
        return (t /= n) < 1 / 2.75 ? r * (7.5625 * t * t) + i : t < 2 / 2.75 ? r * (7.5625 * (t -= 1.5 / 2.75) * t + .75) +
            i : t < 2.5 / 2.75 ? r * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + i : r * (7.5625 * (t -= 2.625 / 2.75) *
            t + .984375) + i
    },
    easeInOutBounce: function (e, t, i, r, n) {
        return t < n / 2 ? .5 * jQuery.easing.easeInBounce(e, 2 * t, 0, r, n) + i : .5 * jQuery.easing.easeOutBounce(e,
            2 * t - n, 0, r, n) + .5 * r + i
    }
});
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
    "use strict";
    _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (e, t, i) {
        var r = function (e) {
            var t, i = [],
                r = e.length;
            for (t = 0; t !== r; i.push(e[t++]));
            return i
        }, n = function (e, t, i) {
                var r, n, s = e.cycle;
                for (r in s) n = s[r], e[r] = "function" == typeof n ? n(i, t[i]) : n[i % n.length];
                delete e.cycle
            }, s = function (e, t, r) {
                i.call(this, e, t, r), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat ||
                    0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = s.prototype.render
            }, a = 1e-10,
            o = i._internals,
            l = o.isSelector,
            c = o.isArray,
            u = s.prototype = i.to({}, .1, {}),
            h = [];
        s.version = "1.19.0", u.constructor = s, u.kill()._gc = !1, s.killTweensOf = s.killDelayedCallsTo = i.killTweensOf,
            s.getTweensOf = i.getTweensOf, s.lagSmoothing = i.lagSmoothing, s.ticker = i.ticker, s.render = i.render, u
            .invalidate = function () {
            return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars
                .repeatDelay || 0, this._uncache(!0), i.prototype.invalidate.call(this)
        }, u.updateTo = function (e, t) {
            var r, n = this.ratio,
                s = this.vars.immediateRender || e.immediateRender;
            t && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1),
                this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
            for (r in e) this.vars[r] = e[r];
            if (this._initted || s) if (t) this._initted = !1, s && this.render(0, !0, !0);
                else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent(
                "_onDisable", this), this._time / this._duration > .998) {
                var a = this._totalTime;
                this.render(0, !0, !1), this._initted = !1, this.render(a, !0, !1)
            } else if (this._initted = !1, this._init(), this._time > 0 || s) for (var o, l = 1 / (1 - n), c = this._firstPT; c;)
                    o = c.s + c.c, c.c *= l, c.s = o - c.c, c = c._next;
            return this
        }, u.render = function (e, t, i) {
            this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
            var r, n, s, l, c, u, h, d, f = this._dirty ? this.totalDuration() : this._totalDuration,
                p = this._time,
                m = this._totalTime,
                v = this._cycle,
                _ = this._duration,
                g = this._rawPrevTime;
            if (e >= f - 1e-7 ? (this._totalTime = f, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ?
                (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = _, this
                .ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (r = !0, n = "onComplete",
                i = i || this._timeline.autoRemoveChildren), 0 === _ && (this._initted || !this.vars.lazy || i) && (
                this._startTime === this._timeline._duration && (e = 0), (g < 0 || e <= 0 && e >= -1e-7 || g === a &&
                "isPause" !== this.data) && g !== e && (i = !0, g > a && (n = "onReverseComplete")), this._rawPrevTime =
                d = !t || e || g === e ? e : a)) : e < 1e-7 ? (this._totalTime = this._time = this._cycle = 0, this.ratio =
                this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== m || 0 === _ && g > 0) && (n =
                "onReverseComplete", r = this._reversed), e < 0 && (this._active = !1, 0 === _ && (this._initted || !
                this.vars.lazy || i) && (g >= 0 && (i = !0), this._rawPrevTime = d = !t || e || g === e ? e : a)), this
                ._initted || (i = !0)) : (this._totalTime = this._time = e, 0 !== this._repeat && (l = _ + this._repeatDelay,
                this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && m <=
                e && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 !== (1 & this._cycle) &&
                (this._time = _ - this._time), this._time > _ ? this._time = _ : this._time < 0 && (this._time = 0)),
                this._easeType ? (c = this._time / _, u = this._easeType, h = this._easePower, (1 === u || 3 === u && c >=
                .5) && (c = 1 - c), 3 === u && (c *= 2), 1 === h ? c *= c : 2 === h ? c *= c * c : 3 === h ? c *= c * c *
                c : 4 === h && (c *= c * c * c * c), 1 === u ? this.ratio = 1 - c : 2 === u ? this.ratio = c : this._time /
                _ < .5 ? this.ratio = c / 2 : this.ratio = 1 - c / 2) : this.ratio = this._ease.getRatio(this._time / _)),
                p === this._time && !i && v === this._cycle) return void(m !== this._totalTime && this._onUpdate && (t ||
                    this._callback("onUpdate")));
            if (!this._initted) {
                if (this._init(), !this._initted || this._gc) return;
                if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration))
                    return this._time = p, this._totalTime = m, this._rawPrevTime = g, this._cycle = v, o.lazyTweens.push(
                        this), void(this._lazy = [e, t]);
                this._time && !r ? this.ratio = this._ease.getRatio(this._time / _) : r && this._ease._calcEnd && (this
                    .ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
            }
            for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== p && e >= 0 &&
                (this._active = !0), 0 === m && (2 === this._initted && e > 0 && this._init(), this._startAt && (e >= 0 ?
                this._startAt.render(e, t, i) : n || (n = "_dummyGS")), this.vars.onStart && (0 === this._totalTime &&
                0 !== _ || t || this._callback("onStart"))), s = this._firstPT; s;) s.f ? s.t[s.p](s.c * this.ratio + s
                    .s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next;
            this._onUpdate && (e < 0 && this._startAt && this._startTime && this._startAt.render(e, t, i), t || (this._totalTime !==
                m || n) && this._callback("onUpdate")), this._cycle !== v && (t || this._gc || this.vars.onRepeat &&
                this._callback("onRepeat")), n && (this._gc && !i || (e < 0 && this._startAt && !this._onUpdate && this
                ._startTime && this._startAt.render(e, t, i), r && (this._timeline.autoRemoveChildren && this._enabled(!
                1, !1), this._active = !1), !t && this.vars[n] && this._callback(n), 0 === _ && this._rawPrevTime === a &&
                d !== a && (this._rawPrevTime = 0)))
        }, s.to = function (e, t, i) {
            return new s(e, t, i)
        }, s.from = function (e, t, i) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new s(e, t, i)
        }, s.fromTo = function (e, t, i, r) {
            return r.startAt = i, r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender, new s(e, t, r)
        }, s.staggerTo = s.allTo = function (e, t, a, o, u, d, f) {
            o = o || 0;
            var p, m, v, _, g = 0,
                w = [],
                y = function () {
                    a.onComplete && a.onComplete.apply(a.onCompleteScope || this, arguments), u.apply(f || a.callbackScope ||
                        this, d || h)
                }, b = a.cycle,
                T = a.startAt && a.startAt.cycle;
            for (c(e) || ("string" == typeof e && (e = i.selector(e) || e), l(e) && (e = r(e))), e = e || [], o < 0 &&
                (e = r(e), e.reverse(), o *= -1), p = e.length - 1, v = 0; v <= p; v++) {
                m = {};
                for (_ in a) m[_] = a[_];
                if (b && (n(m, e, v), null != m.duration && (t = m.duration, delete m.duration)), T) {
                    T = m.startAt = {};
                    for (_ in a.startAt) T[_] = a.startAt[_];
                    n(m.startAt, e, v)
                }
                m.delay = g + (m.delay || 0), v === p && u && (m.onComplete = y), w[v] = new s(e[v], t, m), g += o
            }
            return w
        }, s.staggerFrom = s.allFrom = function (e, t, i, r, n, a, o) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, s.staggerTo(e, t, i, r, n, a, o)
        }, s.staggerFromTo = s.allFromTo = function (e, t, i, r, n, a, o, l) {
            return r.startAt = i, r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender, s.staggerTo(e,
                t, r, n, a, o, l)
        }, s.delayedCall = function (e, t, i, r, n) {
            return new s(t, 0, {
                delay: e,
                onComplete: t,
                onCompleteParams: i,
                callbackScope: r,
                onReverseComplete: t,
                onReverseCompleteParams: i,
                immediateRender: !1,
                useFrames: n,
                overwrite: 0
            })
        }, s.set = function (e, t) {
            return new s(e, 0, t)
        }, s.isTweening = function (e) {
            return i.getTweensOf(e, !0).length > 0
        };
        var d = function (e, t) {
            for (var r = [], n = 0, s = e._first; s;) s instanceof i ? r[n++] = s : (t && (r[n++] = s), r = r.concat(d(
                    s, t)), n = r.length), s = s._next;
            return r
        }, f = s.getAllTweens = function (t) {
                return d(e._rootTimeline, t).concat(d(e._rootFramesTimeline, t))
            };
        s.killAll = function (e, i, r, n) {
            null == i && (i = !0), null == r && (r = !0);
            var s, a, o, l = f(0 != n),
                c = l.length,
                u = i && r && n;
            for (o = 0; o < c; o++) a = l[o], (u || a instanceof t || (s = a.target === a.vars.onComplete) && r || i && !
                    s) && (e ? a.totalTime(a._reversed ? 0 : a.totalDuration()) : a._enabled(!1, !1))
        }, s.killChildTweensOf = function (e, t) {
            if (null != e) {
                var n, a, u, h, d, f = o.tweenLookup;
                if ("string" == typeof e && (e = i.selector(e) || e), l(e) && (e = r(e)), c(e)) for (h = e.length; --h > -
                        1;) s.killChildTweensOf(e[h], t);
                else {
                    n = [];
                    for (u in f) for (a = f[u].target.parentNode; a;) a === e && (n = n.concat(f[u].tweens)), a = a.parentNode;
                    for (d = n.length, h = 0; h < d; h++) t && n[h].totalTime(n[h].totalDuration()), n[h]._enabled(!1, !
                            1)
                }
            }
        };
        var p = function (e, i, r, n) {
            i = i !== !1, r = r !== !1, n = n !== !1;
            for (var s, a, o = f(n), l = i && r && n, c = o.length; --c > -1;) a = o[c], (l || a instanceof t || (s = a
                    .target === a.vars.onComplete) && r || i && !s) && a.paused(e)
        };
        return s.pauseAll = function (e, t, i) {
            p(!0, e, t, i)
        }, s.resumeAll = function (e, t, i) {
            p(!1, e, t, i)
        }, s.globalTimeScale = function (t) {
            var r = e._rootTimeline,
                n = i.ticker.time;
            return arguments.length ? (t = t || a, r._startTime = n - (n - r._startTime) * r._timeScale / t, r = e._rootFramesTimeline,
                n = i.ticker.frame, r._startTime = n - (n - r._startTime) * r._timeScale / t, r._timeScale = e._rootTimeline
                ._timeScale = t, t) : r._timeScale
        }, u.progress = function (e, t) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - e :
                e) + this._cycle * (this._duration + this._repeatDelay), t) : this._time / this.duration()
        }, u.totalProgress = function (e, t) {
            return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this._totalTime / this.totalDuration()
        }, u.time = function (e, t) {
            return arguments.length ? (this._dirty && this.totalDuration(), e > this._duration && (e = this._duration),
                this._yoyo && 0 !== (1 & this._cycle) ? e = this._duration - e + this._cycle * (this._duration + this._repeatDelay) :
                0 !== this._repeat && (e += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(e, t)) :
                this._time
        }, u.duration = function (t) {
            return arguments.length ? e.prototype.duration.call(this, t) : this._duration
        }, u.totalDuration = function (e) {
            return arguments.length ? this._repeat === -1 ? this : this.duration((e - this._repeat * this._repeatDelay) /
                (this._repeat + 1)) : (this._dirty && (this._totalDuration = this._repeat === -1 ? 999999999999 : this._duration *
                (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
        }, u.repeat = function (e) {
            return arguments.length ? (this._repeat = e, this._uncache(!0)) : this._repeat
        }, u.repeatDelay = function (e) {
            return arguments.length ? (this._repeatDelay = e, this._uncache(!0)) : this._repeatDelay
        }, u.yoyo = function (e) {
            return arguments.length ? (this._yoyo = e, this) : this._yoyo
        }, s
    }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (e, t,
        i) {
        var r = function (e) {
            t.call(this, e), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming =
                this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
            var i, r, n = this.vars;
            for (r in n) i = n[r], l(i) && i.join("").indexOf("{self}") !== -1 && (n[r] = this._swapSelfInParams(i));
            l(n.tweens) && this.add(n.tweens, 0, n.align, n.stagger)
        }, n = 1e-10,
            s = i._internals,
            a = r._internals = {}, o = s.isSelector,
            l = s.isArray,
            c = s.lazyTweens,
            u = s.lazyRender,
            h = _gsScope._gsDefine.globals,
            d = function (e) {
                var t, i = {};
                for (t in e) i[t] = e[t];
                return i
            }, f = function (e, t, i) {
                var r, n, s = e.cycle;
                for (r in s) n = s[r], e[r] = "function" == typeof n ? n.call(t[i], i) : n[i % n.length];
                delete e.cycle
            }, p = a.pauseCallback = function () {}, m = function (e) {
                var t, i = [],
                    r = e.length;
                for (t = 0; t !== r; i.push(e[t++]));
                return i
            }, v = r.prototype = new t;
        return r.version = "1.19.0", v.constructor = r, v.kill()._gc = v._forcingPlayhead = v._hasPause = !1, v.to = function (
            e, t, r, n) {
            var s = r.repeat && h.TweenMax || i;
            return t ? this.add(new s(e, t, r), n) : this.set(e, r, n)
        }, v.from = function (e, t, r, n) {
            return this.add((r.repeat && h.TweenMax || i).from(e, t, r), n)
        }, v.fromTo = function (e, t, r, n, s) {
            var a = n.repeat && h.TweenMax || i;
            return t ? this.add(a.fromTo(e, t, r, n), s) : this.set(e, n, s)
        }, v.staggerTo = function (e, t, n, s, a, l, c, u) {
            var h, p, v = new r({
                    onComplete: l,
                    onCompleteParams: c,
                    callbackScope: u,
                    smoothChildTiming: this.smoothChildTiming
                }),
                _ = n.cycle;
            for ("string" == typeof e && (e = i.selector(e) || e), e = e || [], o(e) && (e = m(e)), s = s || 0, s < 0 &&
                (e = m(e), e.reverse(), s *= -1), p = 0; p < e.length; p++) h = d(n), h.startAt && (h.startAt = d(h.startAt),
                    h.startAt.cycle && f(h.startAt, e, p)), _ && (f(h, e, p), null != h.duration && (t = h.duration,
                    delete h.duration)), v.to(e[p], t, h, p * s);
            return this.add(v, a)
        }, v.staggerFrom = function (e, t, i, r, n, s, a, o) {
            return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(e, t, i, r, n, s, a,
                o)
        }, v.staggerFromTo = function (e, t, i, r, n, s, a, o, l) {
            return r.startAt = i, r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender, this.staggerTo(
                e, t, r, n, s, a, o, l)
        }, v.call = function (e, t, r, n) {
            return this.add(i.delayedCall(0, e, t, r), n)
        }, v.set = function (e, t, r) {
            return r = this._parseTimeOrLabel(r, 0, !0), null == t.immediateRender && (t.immediateRender = r === this._time && !
                this._paused), this.add(new i(e, 0, t), r)
        }, r.exportRoot = function (e, t) {
            e = e || {}, null == e.smoothChildTiming && (e.smoothChildTiming = !0);
            var n, s, a = new r(e),
                o = a._timeline;
            for (null == t && (t = !0), o._remove(a, !0), a._startTime = 0, a._rawPrevTime = a._time = a._totalTime = o
                ._time, n = o._first; n;) s = n._next, t && n instanceof i && n.target === n.vars.onComplete || a.add(n,
                    n._startTime - n._delay), n = s;
            return o.add(a, 0), a
        }, v.add = function (n, s, a, o) {
            var c, u, h, d, f, p;
            if ("number" != typeof s && (s = this._parseTimeOrLabel(s, 0, !0, n)), !(n instanceof e)) {
                if (n instanceof Array || n && n.push && l(n)) {
                    for (a = a || "normal", o = o || 0, c = s, u = n.length, h = 0; h < u; h++) l(d = n[h]) && (d = new r({
                            tweens: d
                        })), this.add(d, c), "string" != typeof d && "function" != typeof d && ("sequence" === a ? c =
                            d._startTime + d.totalDuration() / d._timeScale : "start" === a && (d._startTime -= d.delay())),
                            c += o;
                    return this._uncache(!0)
                }
                if ("string" == typeof n) return this.addLabel(n, s);
                if ("function" != typeof n) throw "Cannot add " + n +
                        " into the timeline; it is not a tween, timeline, function, or string.";
                n = i.delayedCall(0, n)
            }
            if (t.prototype.add.call(this, n, s), (this._gc || this._time === this._duration) && !this._paused && this._duration <
                this.duration()) for (f = this, p = f.rawTime() > n._startTime; f._timeline;) p && f._timeline.smoothChildTiming ?
                        f.totalTime(f._totalTime, !0) : f._gc && f._enabled(!0, !1), f = f._timeline;
            return this
        }, v.remove = function (t) {
            if (t instanceof e) {
                this._remove(t, !1);
                var i = t._timeline = t.vars.useFrames ? e._rootFramesTimeline : e._rootTimeline;
                return t._startTime = (t._paused ? t._pauseTime : i._time) - (t._reversed ? t.totalDuration() - t._totalTime :
                    t._totalTime) / t._timeScale, this
            }
            if (t instanceof Array || t && t.push && l(t)) {
                for (var r = t.length; --r > -1;) this.remove(t[r]);
                return this
            }
            return "string" == typeof t ? this.removeLabel(t) : this.kill(null, t)
        }, v._remove = function (e, i) {
            t.prototype._remove.call(this, e, i);
            var r = this._last;
            return r ? this._time > r._startTime + r._totalDuration / r._timeScale && (this._time = this.duration(),
                this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration =
                0, this
        }, v.append = function (e, t) {
            return this.add(e, this._parseTimeOrLabel(null, t, !0, e))
        }, v.insert = v.insertMultiple = function (e, t, i, r) {
            return this.add(e, t || 0, i, r)
        }, v.appendMultiple = function (e, t, i, r) {
            return this.add(e, this._parseTimeOrLabel(null, t, !0, e), i, r)
        }, v.addLabel = function (e, t) {
            return this._labels[e] = this._parseTimeOrLabel(t), this
        }, v.addPause = function (e, t, r, n) {
            var s = i.delayedCall(0, p, r, n || this);
            return s.vars.onComplete = s.vars.onReverseComplete = t, s.data = "isPause", this._hasPause = !0, this.add(
                s, e)
        }, v.removeLabel = function (e) {
            return delete this._labels[e], this
        }, v.getLabelTime = function (e) {
            return null != this._labels[e] ? this._labels[e] : -1
        }, v._parseTimeOrLabel = function (t, i, r, n) {
            var s;
            if (n instanceof e && n.timeline === this) this.remove(n);
            else if (n && (n instanceof Array || n.push && l(n))) for (s = n.length; --s > -1;) n[s] instanceof e && n[
                        s].timeline === this && this.remove(n[s]);
            if ("string" == typeof i) return this._parseTimeOrLabel(i, r && "number" == typeof t && null == this._labels[
                    i] ? t - this.duration() : 0, r);
            if (i = i || 0, "string" != typeof t || !isNaN(t) && null == this._labels[t]) null == t && (t = this.duration());
            else {
                if (s = t.indexOf("="), s === -1) return null == this._labels[t] ? r ? this._labels[t] = this.duration() +
                        i : i : this._labels[t] + i;
                i = parseInt(t.charAt(s - 1) + "1", 10) * Number(t.substr(s + 1)), t = s > 1 ? this._parseTimeOrLabel(t
                    .substr(0, s - 1), 0, r) : this.duration()
            }
            return Number(t) + i
        }, v.seek = function (e, t) {
            return this.totalTime("number" == typeof e ? e : this._parseTimeOrLabel(e), t !== !1)
        }, v.stop = function () {
            return this.paused(!0)
        }, v.gotoAndPlay = function (e, t) {
            return this.play(e, t)
        }, v.gotoAndStop = function (e, t) {
            return this.pause(e, t)
        }, v.render = function (e, t, i) {
            this._gc && this._enabled(!0, !1);
            var r, s, a, o, l, h, d, f = this._dirty ? this.totalDuration() : this._totalDuration,
                p = this._time,
                m = this._startTime,
                v = this._timeScale,
                _ = this._paused;
            if (e >= f - 1e-7) this._totalTime = this._time = f, this._reversed || this._hasPausedChild() || (s = !0, o =
                    "onComplete", l = !! this._timeline.autoRemoveChildren, 0 === this._duration && (e <= 0 && e >= -
                    1e-7 || this._rawPrevTime < 0 || this._rawPrevTime === n) && this._rawPrevTime !== e && this._first &&
                    (l = !0, this._rawPrevTime > n && (o = "onReverseComplete"))), this._rawPrevTime = this._duration || !
                    t || e || this._rawPrevTime === e ? e : n, e = f + 1e-4;
            else if (e < 1e-7) if (this._totalTime = this._time = 0, (0 !== p || 0 === this._duration && this._rawPrevTime !==
                    n && (this._rawPrevTime > 0 || e < 0 && this._rawPrevTime >= 0)) && (o = "onReverseComplete", s =
                    this._reversed), e < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (l =
                        s = !0, o = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (l = !0), this._rawPrevTime =
                        e;
                else {
                    if (this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : n, 0 === e && s)
                        for (r = this._first; r && 0 === r._startTime;) r._duration || (s = !1), r = r._next;
                    e = 0, this._initted || (l = !0)
                } else {
                    if (this._hasPause && !this._forcingPlayhead && !t) {
                        if (e >= p) for (r = this._first; r && r._startTime <= e && !h;) r._duration || "isPause" !== r
                                    .data || r.ratio || 0 === r._startTime && 0 === this._rawPrevTime || (h = r), r = r
                                    ._next;
                        else for (r = this._last; r && r._startTime >= e && !h;) r._duration || "isPause" === r.data &&
                                    r._rawPrevTime > 0 && (h = r), r = r._prev;
                        h && (this._time = e = h._startTime, this._totalTime = e + this._cycle * (this._totalDuration +
                            this._repeatDelay))
                    }
                    this._totalTime = this._time = this._rawPrevTime = e
                }
            if (this._time !== p && this._first || i || l || h) {
                if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== p && e > 0 &&
                    (this._active = !0), 0 === p && this.vars.onStart && (0 === this._time && this._duration || t ||
                    this._callback("onStart")), d = this._time, d >= p) for (r = this._first; r && (a = r._next, d ===
                        this._time && (!this._paused || _));)(r._active || r._startTime <= d && !r._paused && !r._gc) &&
                            (h === r && this.pause(), r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) -
                            (e - r._startTime) * r._timeScale, t, i) : r.render((e - r._startTime) * r._timeScale, t, i)),
                            r = a;
                else for (r = this._last; r && (a = r._prev, d === this._time && (!this._paused || _));) {
                        if (r._active || r._startTime <= p && !r._paused && !r._gc) {
                            if (h === r) {
                                for (h = r._prev; h && h.endTime() > this._time;) h.render(h._reversed ? h.totalDuration() -
                                        (e - h._startTime) * h._timeScale : (e - h._startTime) * h._timeScale, t, i), h =
                                        h._prev;
                                h = null, this.pause()
                            }
                            r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (e - r._startTime) *
                                r._timeScale, t, i) : r.render((e - r._startTime) * r._timeScale, t, i)
                        }
                        r = a
                }
                this._onUpdate && (t || (c.length && u(), this._callback("onUpdate"))), o && (this._gc || m !== this._startTime &&
                    v === this._timeScale || (0 === this._time || f >= this.totalDuration()) && (s && (c.length && u(),
                    this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[o] &&
                    this._callback(o)))
            }
        }, v._hasPausedChild = function () {
            for (var e = this._first; e;) {
                if (e._paused || e instanceof r && e._hasPausedChild()) return !0;
                e = e._next
            }
            return !1
        }, v.getChildren = function (e, t, r, n) {
            n = n || -9999999999;
            for (var s = [], a = this._first, o = 0; a;) a._startTime < n || (a instanceof i ? t !== !1 && (s[o++] = a) :
                    (r !== !1 && (s[o++] = a), e !== !1 && (s = s.concat(a.getChildren(!0, t, r)), o = s.length))), a =
                    a._next;
            return s
        }, v.getTweensOf = function (e, t) {
            var r, n, s = this._gc,
                a = [],
                o = 0;
            for (s && this._enabled(!0, !0), r = i.getTweensOf(e), n = r.length; --n > -1;)(r[n].timeline === this || t &&
                    this._contains(r[n])) && (a[o++] = r[n]);
            return s && this._enabled(!1, !0), a
        }, v.recent = function () {
            return this._recent
        }, v._contains = function (e) {
            for (var t = e.timeline; t;) {
                if (t === this) return !0;
                t = t.timeline
            }
            return !1
        }, v.shiftChildren = function (e, t, i) {
            i = i || 0;
            for (var r, n = this._first, s = this._labels; n;) n._startTime >= i && (n._startTime += e), n = n._next;
            if (t) for (r in s) s[r] >= i && (s[r] += e);
            return this._uncache(!0)
        }, v._kill = function (e, t) {
            if (!e && !t) return this._enabled(!1, !1);
            for (var i = t ? this.getTweensOf(t) : this.getChildren(!0, !0, !1), r = i.length, n = !1; --r > -1;) i[r]._kill(
                    e, t) && (n = !0);
            return n
        }, v.clear = function (e) {
            var t = this.getChildren(!1, !0, !0),
                i = t.length;
            for (this._time = this._totalTime = 0; --i > -1;) t[i]._enabled(!1, !1);
            return e !== !1 && (this._labels = {}), this._uncache(!0)
        }, v.invalidate = function () {
            for (var t = this._first; t;) t.invalidate(), t = t._next;
            return e.prototype.invalidate.call(this)
        }, v._enabled = function (e, i) {
            if (e === this._gc) for (var r = this._first; r;) r._enabled(e, !0), r = r._next;
            return t.prototype._enabled.call(this, e, i)
        }, v.totalTime = function (t, i, r) {
            this._forcingPlayhead = !0;
            var n = e.prototype.totalTime.apply(this, arguments);
            return this._forcingPlayhead = !1, n
        }, v.duration = function (e) {
            return arguments.length ? (0 !== this.duration() && 0 !== e && this.timeScale(this._duration / e), this) :
                (this._dirty && this.totalDuration(), this._duration)
        }, v.totalDuration = function (e) {
            if (!arguments.length) {
                if (this._dirty) {
                    for (var t, i, r = 0, n = this._last, s = 999999999999; n;) t = n._prev, n._dirty && n.totalDuration(),
                            n._startTime > s && this._sortChildren && !n._paused ? this.add(n, n._startTime - n._delay) :
                            s = n._startTime, n._startTime < 0 && !n._paused && (r -= n._startTime, this._timeline.smoothChildTiming &&
                            (this._startTime += n._startTime / this._timeScale), this.shiftChildren(-n._startTime, !1, -
                            9999999999), s = 0), i = n._startTime + n._totalDuration / n._timeScale, i > r && (r = i),
                            n = t;
                    this._duration = this._totalDuration = r, this._dirty = !1
                }
                return this._totalDuration
            }
            return e && this.totalDuration() ? this.timeScale(this._totalDuration / e) : this
        }, v.paused = function (t) {
            if (!t) for (var i = this._first, r = this._time; i;) i._startTime === r && "isPause" === i.data && (i._rawPrevTime =
                        0), i = i._next;
            return e.prototype.paused.apply(this, arguments)
        }, v.usesFrames = function () {
            for (var t = this._timeline; t._timeline;) t = t._timeline;
            return t === e._rootFramesTimeline
        }, v.rawTime = function () {
            return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
        }, r
    }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function (e, t, i) {
        var r = function (t) {
            e.call(this, t), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this
                ._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
        }, n = 1e-10,
            s = t._internals,
            a = s.lazyTweens,
            o = s.lazyRender,
            l = _gsScope._gsDefine.globals,
            c = new i(null, null, 1, 0),
            u = r.prototype = new e;
        return u.constructor = r, u.kill()._gc = !1, r.version = "1.19.0", u.invalidate = function () {
            return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars
                .repeatDelay || 0, this._uncache(!0), e.prototype.invalidate.call(this)
        }, u.addCallback = function (e, i, r, n) {
            return this.add(t.delayedCall(0, e, r, n), i)
        }, u.removeCallback = function (e, t) {
            if (e) if (null == t) this._kill(null, e);
                else for (var i = this.getTweensOf(e, !1), r = i.length, n = this._parseTimeOrLabel(t); --r > -1;) i[r]
                            ._startTime === n && i[r]._enabled(!1, !1);
            return this
        }, u.removePause = function (t) {
            return this.removeCallback(e._internals.pauseCallback, t)
        }, u.tweenTo = function (e, i) {
            i = i || {};
            var r, n, s, a = {
                    ease: c,
                    useFrames: this.usesFrames(),
                    immediateRender: !1
                }, o = i.repeat && l.TweenMax || t;
            for (n in i) a[n] = i[n];
            return a.time = this._parseTimeOrLabel(e), r = Math.abs(Number(a.time) - this._time) / this._timeScale || .001,
                s = new o(this, r, a), a.onStart = function () {
                s.target.paused(!0), s.vars.time !== s.target.time() && r === s.duration() && s.duration(Math.abs(s.vars
                    .time - s.target.time()) / s.target._timeScale), i.onStart && s._callback("onStart")
            }, s
        }, u.tweenFromTo = function (e, t, i) {
            i = i || {}, e = this._parseTimeOrLabel(e), i.startAt = {
                onComplete: this.seek,
                onCompleteParams: [e],
                callbackScope: this
            }, i.immediateRender = i.immediateRender !== !1;
            var r = this.tweenTo(t, i);
            return r.duration(Math.abs(r.vars.time - e) / this._timeScale || .001)
        }, u.render = function (e, t, i) {
            this._gc && this._enabled(!0, !1);
            var r, s, l, c, u, h, d, f, p = this._dirty ? this.totalDuration() : this._totalDuration,
                m = this._duration,
                v = this._time,
                _ = this._totalTime,
                g = this._startTime,
                w = this._timeScale,
                y = this._rawPrevTime,
                b = this._paused,
                T = this._cycle;
            if (e >= p - 1e-7) this._locked || (this._totalTime = p, this._cycle = this._repeat), this._reversed ||
                    this._hasPausedChild() || (s = !0, c = "onComplete", u = !! this._timeline.autoRemoveChildren, 0 ===
                    this._duration && (e <= 0 && e >= -1e-7 || y < 0 || y === n) && y !== e && this._first && (u = !0,
                    y > n && (c = "onReverseComplete"))), this._rawPrevTime = this._duration || !t || e || this._rawPrevTime ===
                    e ? e : n, this._yoyo && 0 !== (1 & this._cycle) ? this._time = e = 0 : (this._time = m, e = m +
                    1e-4);
            else if (e < 1e-7) if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== v || 0 ===
                    m && y !== n && (y > 0 || e < 0 && y >= 0) && !this._locked) && (c = "onReverseComplete", s = this._reversed),
                    e < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (u = s = !0, c =
                        "onReverseComplete") : y >= 0 && this._first && (u = !0), this._rawPrevTime = e;
                else {
                    if (this._rawPrevTime = m || !t || e || this._rawPrevTime === e ? e : n, 0 === e && s) for (r =
                            this._first; r && 0 === r._startTime;) r._duration || (s = !1), r = r._next;
                    e = 0, this._initted || (u = !0)
                } else if (0 === m && y < 0 && (u = !0), this._time = this._rawPrevTime = e, this._locked || (this._totalTime =
                e, 0 !== this._repeat && (h = m + this._repeatDelay, this._cycle = this._totalTime / h >> 0, 0 !== this
                ._cycle && this._cycle === this._totalTime / h && _ <= e && this._cycle--, this._time = this._totalTime -
                this._cycle * h, this._yoyo && 0 !== (1 & this._cycle) && (this._time = m - this._time), this._time > m ?
                (this._time = m, e = m + 1e-4) : this._time < 0 ? this._time = e = 0 : e = this._time)), this._hasPause && !
                this._forcingPlayhead && !t) {
                if (e = this._time, e >= v) for (r = this._first; r && r._startTime <= e && !d;) r._duration ||
                            "isPause" !== r.data || r.ratio || 0 === r._startTime && 0 === this._rawPrevTime || (d = r),
                            r = r._next;
                else for (r = this._last; r && r._startTime >= e && !d;) r._duration || "isPause" === r.data && r._rawPrevTime >
                            0 && (d = r), r = r._prev;
                d && (this._time = e = d._startTime, this._totalTime = e + this._cycle * (this._totalDuration + this._repeatDelay))
            }
            if (this._cycle !== T && !this._locked) {
                var x = this._yoyo && 0 !== (1 & T),
                    C = x === (this._yoyo && 0 !== (1 & this._cycle)),
                    $ = this._totalTime,
                    k = this._cycle,
                    P = this._rawPrevTime,
                    S = this._time;
                if (this._totalTime = T * m, this._cycle < T ? x = !x : this._totalTime += m, this._time = v, this._rawPrevTime =
                    0 === m ? y - 1e-4 : y, this._cycle = T, this._locked = !0, v = x ? 0 : m, this.render(v, t, 0 ===
                    m), t || this._gc || this.vars.onRepeat && this._callback("onRepeat"), v !== this._time) return;
                if (C && (v = x ? m + 1e-4 : -1e-4, this.render(v, !0, !1)), this._locked = !1, this._paused && !b)
                    return;
                this._time = S, this._totalTime = $, this._cycle = k, this._rawPrevTime = P
            }
            if (!(this._time !== v && this._first || i || u || d)) return void(_ !== this._totalTime && this._onUpdate &&
                    (t || this._callback("onUpdate")));
            if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== _ && e > 0 &&
                (this._active = !0), 0 === _ && this.vars.onStart && (0 === this._totalTime && this._totalDuration || t ||
                this._callback("onStart")), f = this._time, f >= v) for (r = this._first; r && (l = r._next, f === this
                    ._time && (!this._paused || b));)(r._active || r._startTime <= this._time && !r._paused && !r._gc) &&
                        (d === r && this.pause(), r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) -
                        (e - r._startTime) * r._timeScale, t, i) : r.render((e - r._startTime) * r._timeScale, t, i)),
                        r = l;
            else for (r = this._last; r && (l = r._prev, f === this._time && (!this._paused || b));) {
                    if (r._active || r._startTime <= v && !r._paused && !r._gc) {
                        if (d === r) {
                            for (d = r._prev; d && d.endTime() > this._time;) d.render(d._reversed ? d.totalDuration() -
                                    (e - d._startTime) * d._timeScale : (e - d._startTime) * d._timeScale, t, i), d = d
                                    ._prev;
                            d = null, this.pause()
                        }
                        r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (e - r._startTime) *
                            r._timeScale, t, i) : r.render((e - r._startTime) * r._timeScale, t, i)
                    }
                    r = l
            }
            this._onUpdate && (t || (a.length && o(), this._callback("onUpdate"))), c && (this._locked || this._gc || g !==
                this._startTime && w === this._timeScale || (0 === this._time || p >= this.totalDuration()) && (s && (a
                .length && o(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t &&
                this.vars[c] && this._callback(c)))
        }, u.getActive = function (e, t, i) {
            null == e && (e = !0), null == t && (t = !0), null == i && (i = !1);
            var r, n, s = [],
                a = this.getChildren(e, t, i),
                o = 0,
                l = a.length;
            for (r = 0; r < l; r++) n = a[r], n.isActive() && (s[o++] = n);
            return s
        }, u.getLabelAfter = function (e) {
            e || 0 !== e && (e = this._time);
            var t, i = this.getLabelsArray(),
                r = i.length;
            for (t = 0; t < r; t++) if (i[t].time > e) return i[t].name;
            return null
        }, u.getLabelBefore = function (e) {
            null == e && (e = this._time);
            for (var t = this.getLabelsArray(), i = t.length; --i > -1;) if (t[i].time < e) return t[i].name;
            return null
        }, u.getLabelsArray = function () {
            var e, t = [],
                i = 0;
            for (e in this._labels) t[i++] = {
                    time: this._labels[e],
                    name: e
            };
            return t.sort(function (e, t) {
                return e.time - t.time
            }), t
        }, u.progress = function (e, t) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - e :
                e) + this._cycle * (this._duration + this._repeatDelay), t) : this._time / this.duration()
        }, u.totalProgress = function (e, t) {
            return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this._totalTime / this.totalDuration()
        }, u.totalDuration = function (t) {
            return arguments.length ? this._repeat !== -1 && t ? this.timeScale(this.totalDuration() / t) : this : (
                this._dirty && (e.prototype.totalDuration.call(this), this._totalDuration = this._repeat === -1 ?
                999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
        }, u.time = function (e, t) {
            return arguments.length ? (this._dirty && this.totalDuration(), e > this._duration && (e = this._duration),
                this._yoyo && 0 !== (1 & this._cycle) ? e = this._duration - e + this._cycle * (this._duration + this._repeatDelay) :
                0 !== this._repeat && (e += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(e, t)) :
                this._time
        }, u.repeat = function (e) {
            return arguments.length ? (this._repeat = e, this._uncache(!0)) : this._repeat
        }, u.repeatDelay = function (e) {
            return arguments.length ? (this._repeatDelay = e, this._uncache(!0)) : this._repeatDelay
        }, u.yoyo = function (e) {
            return arguments.length ? (this._yoyo = e, this) : this._yoyo
        }, u.currentLabel = function (e) {
            return arguments.length ? this.seek(e, !0) : this.getLabelBefore(this._time + 1e-8)
        }, r
    }, !0),
    function () {
        var e = 180 / Math.PI,
            t = [],
            i = [],
            r = [],
            n = {}, s = _gsScope._gsDefine.globals,
            a = function (e, t, i, r) {
                i === r && (i = r - (r - t) / 1e6), e === t && (t = e + (i - e) / 1e6), this.a = e, this.b = t, this.c =
                    i, this.d = r, this.da = r - e, this.ca = i - e, this.ba = t - e
            }, o =
                ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
            l = function (e, t, i, r) {
                var n = {
                    a: e
                }, s = {}, a = {}, o = {
                        c: r
                    }, l = (e + t) / 2,
                    c = (t + i) / 2,
                    u = (i + r) / 2,
                    h = (l + c) / 2,
                    d = (c + u) / 2,
                    f = (d - h) / 8;
                return n.b = l + (e - l) / 4, s.b = h + f, n.c = s.a = (n.b + s.b) / 2, s.c = a.a = (h + d) / 2, a.b =
                    d - f, o.b = u + (r - u) / 4, a.c = o.a = (a.b + o.b) / 2, [n, s, a, o]
            }, c = function (e, n, s, a, o) {
                var c, u, h, d, f, p, m, v, _, g, w, y, b, T = e.length - 1,
                    x = 0,
                    C = e[0].a;
                for (c = 0; c < T; c++) f = e[x], u = f.a, h = f.d, d = e[x + 1].d, o ? (w = t[c], y = i[c], b = (y + w) *
                        n * .25 / (a ? .5 : r[c] || .5), p = h - (h - u) * (a ? .5 * n : 0 !== w ? b / w : 0), m = h +
                        (d - h) * (a ? .5 * n : 0 !== y ? b / y : 0), v = h - (p + ((m - p) * (3 * w / (w + y) + .5) /
                        4 || 0))) : (p = h - (h - u) * n * .5, m = h + (d - h) * n * .5, v = h - (p + m) / 2), p += v,
                        m += v, f.c = _ = p, 0 !== c ? f.b = C : f.b = C = f.a + .6 * (f.c - f.a), f.da = h - u, f.ca =
                        _ - u, f.ba = C - u, s ? (g = l(u, C, _, h), e.splice(x, 1, g[0], g[1], g[2], g[3]), x += 4) :
                        x++, C = m;
                f = e[x], f.b = C, f.c = C + .4 * (f.d - C), f.da = f.d - f.a, f.ca = f.c - f.a, f.ba = C - f.a, s && (
                    g = l(f.a, C, f.c, f.d), e.splice(x, 1, g[0], g[1], g[2], g[3]))
            }, u = function (e, r, n, s) {
                var o, l, c, u, h, d, f = [];
                if (s) for (e = [s].concat(e), l = e.length; --l > -1;) "string" == typeof (d = e[l][r]) && "=" === d.charAt(
                            1) && (e[l][r] = s[r] + Number(d.charAt(0) + d.substr(2)));
                if (o = e.length - 2, o < 0) return f[0] = new a(e[0][r], 0, 0, e[o < -1 ? 0 : 1][r]), f;
                for (l = 0; l < o; l++) c = e[l][r], u = e[l + 1][r], f[l] = new a(c, 0, 0, u), n && (h = e[l + 2][r],
                        t[l] = (t[l] || 0) + (u - c) * (u - c), i[l] = (i[l] || 0) + (h - u) * (h - u));
                return f[l] = new a(e[l][r], 0, 0, e[l + 1][r]), f
            }, h = function (e, s, a, l, h, d) {
                var f, p, m, v, _, g, w, y, b = {}, T = [],
                    x = d || e[0];
                h = "string" == typeof h ? "," + h + "," : o, null == s && (s = 1);
                for (p in e[0]) T.push(p);
                if (e.length > 1) {
                    for (y = e[e.length - 1], w = !0, f = T.length; --f > -1;) if (p = T[f], Math.abs(x[p] - y[p]) > .05) {
                            w = !1;
                            break
                        }
                    w && (e = e.concat(), d && e.unshift(d), e.push(e[1]), d = e[e.length - 3])
                }
                for (t.length = i.length = r.length = 0, f = T.length; --f > -1;) p = T[f], n[p] = h.indexOf("," + p +
                        ",") !== -1, b[p] = u(e, p, n[p], d);
                for (f = t.length; --f > -1;) t[f] = Math.sqrt(t[f]), i[f] = Math.sqrt(i[f]);
                if (!l) {
                    for (f = T.length; --f > -1;) if (n[p]) for (m = b[T[f]], g = m.length - 1, v = 0; v < g; v++) _ =
                                    m[v + 1].da / i[v] + m[v].da / t[v] || 0, r[v] = (r[v] || 0) + _ * _;
                    for (f = r.length; --f > -1;) r[f] = Math.sqrt(r[f])
                }
                for (f = T.length, v = a ? 4 : 1; --f > -1;) p = T[f], m = b[p], c(m, s, a, l, n[p]), w && (m.splice(0,
                        v), m.splice(m.length - v, v));
                return b
            }, d = function (e, t, i) {
                t = t || "soft";
                var r, n, s, o, l, c, u, h, d, f, p, m = {}, v = "cubic" === t ? 3 : 2,
                    _ = "soft" === t,
                    g = [];
                if (_ && i && (e = [i].concat(e)), null == e || e.length < v + 1) throw "invalid Bezier data";
                for (d in e[0]) g.push(d);
                for (c = g.length; --c > -1;) {
                    for (d = g[c], m[d] = l = [], f = 0, h = e.length, u = 0; u < h; u++) r = null == i ? e[u][d] :
                            "string" == typeof (p = e[u][d]) && "=" === p.charAt(1) ? i[d] + Number(p.charAt(0) + p.substr(
                            2)) : Number(p), _ && u > 1 && u < h - 1 && (l[f++] = (r + l[f - 2]) / 2), l[f++] = r;
                    for (h = f - v + 1, f = 0, u = 0; u < h; u += v) r = l[u], n = l[u + 1], s = l[u + 2], o = 2 === v ?
                            0 : l[u + 3], l[f++] = p = 3 === v ? new a(r, n, s, o) : new a(r, (2 * n + r) / 3, (2 * n +
                            s) / 3, s);
                    l.length = f
                }
                return m
            }, f = function (e, t, i) {
                for (var r, n, s, a, o, l, c, u, h, d, f, p = 1 / i, m = e.length; --m > -1;) for (d = e[m], s = d.a, a =
                        d.d - s, o = d.c - s, l = d.b - s, r = n = 0, u = 1; u <= i; u++) c = p * u, h = 1 - c, r = n -
                            (n = (c * c * a + 3 * h * (c * o + h * l)) * c), f = m * i + u - 1, t[f] = (t[f] || 0) + r *
                            r
            }, p = function (e, t) {
                t = t >> 0 || 6;
                var i, r, n, s, a = [],
                    o = [],
                    l = 0,
                    c = 0,
                    u = t - 1,
                    h = [],
                    d = [];
                for (i in e) f(e[i], a, t);
                for (n = a.length, r = 0; r < n; r++) l += Math.sqrt(a[r]), s = r % t, d[s] = l, s === u && (c += l, s =
                        r / t >> 0, h[s] = d, o[s] = c, l = 0, d = []);
                return {
                    length: c,
                    lengths: o,
                    segments: h
                }
            }, m = _gsScope._gsDefine.plugin({
                propName: "bezier",
                priority: -1,
                version: "1.3.7",
                API: 2,
                global: !0,
                init: function (e, t, i) {
                    this._target = e, t instanceof Array && (t = {
                        values: t
                    }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == t.timeResolution ? 6 :
                        parseInt(t.timeResolution, 10);
                    var r, n, s, a, o, l = t.values || [],
                        c = {}, u = l[0],
                        f = t.autoRotate || i.vars.orientToBezier;
                    this._autoRotate = f ? f instanceof Array ? f : [["x", "y", "rotation", f === !0 ? 0 : Number(f) ||
                                0]] : null;
                    for (r in u) this._props.push(r);
                    for (s = this._props.length; --s > -1;) r = this._props[s], this._overwriteProps.push(r), n = this._func[
                            r] = "function" == typeof e[r], c[r] = n ? e[r.indexOf("set") || "function" != typeof e[
                            "get" + r.substr(3)] ? r : "get" + r.substr(3)]() : parseFloat(e[r]), o || c[r] !== l[0][r] &&
                            (o = c);
                    if (this._beziers = "cubic" !== t.type && "quadratic" !== t.type && "soft" !== t.type ? h(l, isNaN(
                        t.curviness) ? 1 : t.curviness, !1, "thruBasic" === t.type, t.correlate, o) : d(l, t.type, c),
                        this._segCount = this._beziers[r].length, this._timeRes) {
                        var m = p(this._beziers, this._timeRes);
                        this._length = m.length, this._lengths = m.lengths, this._segments = m.segments, this._l1 =
                            this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[
                            0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                    }
                    if (f = this._autoRotate) for (this._initialRotations = [], f[0] instanceof Array || (this._autoRotate =
                            f = [f]), s = f.length; --s > -1;) {
                            for (a = 0; a < 3; a++) r = f[s][a], this._func[r] = "function" == typeof e[r] && e[r.indexOf(
                                    "set") || "function" != typeof e["get" + r.substr(3)] ? r : "get" + r.substr(3)];
                            r = f[s][2], this._initialRotations[s] = (this._func[r] ? this._func[r].call(this._target) :
                                this._target[r]) || 0, this._overwriteProps.push(r)
                    }
                    return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
                },
                set: function (t) {
                    var i, r, n, s, a, o, l, c, u, h, d = this._segCount,
                        f = this._func,
                        p = this._target,
                        m = t !== this._startRatio;
                    if (this._timeRes) {
                        if (u = this._lengths, h = this._curSeg, t *= this._length, n = this._li, t > this._l2 && n < d -
                            1) {
                            for (c = d - 1; n < c && (this._l2 = u[++n]) <= t;);
                            this._l1 = u[n - 1], this._li = n, this._curSeg = h = this._segments[n], this._s2 = h[this._s1 =
                                this._si = 0]
                        } else if (t < this._l1 && n > 0) {
                            for (; n > 0 && (this._l1 = u[--n]) >= t;);
                            0 === n && t < this._l1 ? this._l1 = 0 : n++, this._l2 = u[n], this._li = n, this._curSeg =
                                h = this._segments[n], this._s1 = h[(this._si = h.length - 1) - 1] || 0, this._s2 = h[
                                this._si]
                        }
                        if (i = n, t -= this._l1, n = this._si, t > this._s2 && n < h.length - 1) {
                            for (c = h.length - 1; n < c && (this._s2 = h[++n]) <= t;);
                            this._s1 = h[n - 1], this._si = n
                        } else if (t < this._s1 && n > 0) {
                            for (; n > 0 && (this._s1 = h[--n]) >= t;);
                            0 === n && t < this._s1 ? this._s1 = 0 : n++, this._s2 = h[n], this._si = n
                        }
                        o = (n + (t - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                    } else i = t < 0 ? 0 : t >= 1 ? d - 1 : d * t >> 0, o = (t - i * (1 / d)) * d;
                    for (r = 1 - o, n = this._props.length; --n > -1;) s = this._props[n], a = this._beziers[s][i], l =
                            (o * o * a.da + 3 * r * (o * a.ca + r * a.ba)) * o + a.a, this._mod[s] && (l = this._mod[s](
                            l, p)), f[s] ? p[s](l) : p[s] = l;
                    if (this._autoRotate) {
                        var v, _, g, w, y, b, T, x = this._autoRotate;
                        for (n = x.length; --n > -1;) s = x[n][2], b = x[n][3] || 0, T = x[n][4] === !0 ? 1 : e, a =
                                this._beziers[x[n][0]], v = this._beziers[x[n][1]], a && v && (a = a[i], v = v[i], _ =
                                a.a + (a.b - a.a) * o, w = a.b + (a.c - a.b) * o, _ += (w - _) * o, w += (a.c + (a.d -
                                a.c) * o - w) * o, g = v.a + (v.b - v.a) * o, y = v.b + (v.c - v.b) * o, g += (y - g) *
                                o, y += (v.c + (v.d - v.c) * o - y) * o, l = m ? Math.atan2(y - g, w - _) * T + b :
                                this._initialRotations[n], this._mod[s] && (l = this._mod[s](l, p)), f[s] ? p[s](l) : p[
                                s] = l)
                    }
                }
            }),
            v = m.prototype;
        m.bezierThrough = h, m.cubicToQuadratic = l, m._autoCSS = !0, m.quadraticToCubic = function (e, t, i) {
            return new a(e, (2 * t + e) / 3, (2 * t + i) / 3, i)
        }, m._cssRegister = function () {
            var e = s.CSSPlugin;
            if (e) {
                var t = e._internals,
                    i = t._parseToProxy,
                    r = t._setPluginRatio,
                    n = t.CSSPropTween;
                t._registerComplexSpecialProp("bezier", {
                    parser: function (e, t, s, a, o, l) {
                        t instanceof Array && (t = {
                            values: t
                        }), l = new m;
                        var c, u, h, d = t.values,
                            f = d.length - 1,
                            p = [],
                            v = {};
                        if (f < 0) return o;
                        for (c = 0; c <= f; c++) h = i(e, d[c], a, o, l, f !== c), p[c] = h.end;
                        for (u in t) v[u] = t[u];
                        return v.values = p, o = new n(e, "bezier", 0, 0, h.pt, 2), o.data = h, o.plugin = l, o.setRatio =
                            r, 0 === v.autoRotate && (v.autoRotate = !0), !v.autoRotate || v.autoRotate instanceof Array ||
                            (c = v.autoRotate === !0 ? 0 : Number(v.autoRotate), v.autoRotate = null != h.end.left ? [[
                                    "left", "top", "rotation", c, !1]] : null != h.end.x && [["x", "y", "rotation", c, !
                                    1]]), v.autoRotate && (a._transform || a._enableTransforms(!1), h.autoRotate = a._target
                            ._gsTransform, h.proxy.rotation = h.autoRotate.rotation || 0, a._overwriteProps.push(
                            "rotation")), l._onInitTween(h.proxy, v, a._tween), o
                    }
                })
            }
        }, v._mod = function (e) {
            for (var t, i = this._overwriteProps, r = i.length; --r > -1;) t = e[i[r]], t && "function" == typeof t &&
                    (this._mod[i[r]] = t)
        }, v._kill = function (e) {
            var t, i, r = this._props;
            for (t in this._beziers) if (t in e) for (delete this._beziers[t], delete this._func[t], i = r.length; --i > -
                        1;) r[i] === t && r.splice(i, 1);
            if (r = this._autoRotate) for (i = r.length; --i > -1;) e[r[i][2]] && r.splice(i, 1);
            return this._super._kill.call(this, e)
        }
    }(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (e, t) {
        var i, r, n, s, a = function () {
                e.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = a.prototype.setRatio
            }, o = _gsScope._gsDefine.globals,
            l = {}, c = a.prototype = new e("css");
        c.constructor = a, a.version = "1.19.0", a.API = 2, a.defaultTransformPerspective = 0, a.defaultSkewType =
            "compensated", a.defaultSmoothOrigin = !0, c = "px", a.suffixMap = {
            top: c,
            right: c,
            bottom: c,
            left: c,
            width: c,
            height: c,
            fontSize: c,
            padding: c,
            margin: c,
            perspective: c,
            lineHeight: ""
        };
        var u, h, d, f, p, m, v, _, g = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
            w = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
            y = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
            b = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
            T = /(?:\d|\-|\+|=|#|\.)*/g,
            x = /opacity *= *([^)]*)/i,
            C = /opacity:([^;]*)/i,
            $ = /alpha\(opacity *=.+?\)/i,
            k = /^(rgb|hsl)/,
            P = /([A-Z])/g,
            S = /-([a-z])/gi,
            O = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
            M = function (e, t) {
                return t.toUpperCase()
            }, A = /(?:Left|Right|Width)/i,
            R = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
            D = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
            I = /,(?=[^\)]*(?:\(|$))/gi,
            L = /[\s,\(]/i,
            E = Math.PI / 180,
            z = 180 / Math.PI,
            F = {}, N = document,
            U = function (e) {
                return N.createElementNS ? N.createElementNS("http://www.w3.org/1999/xhtml", e) : N.createElement(e)
            }, j = U("div"),
            B = U("img"),
            q = a._internals = {
                _specialProps: l
            }, X = navigator.userAgent,
            Y = function () {
                var e = X.indexOf("Android"),
                    t = U("a");
                return d = X.indexOf("Safari") !== -1 && X.indexOf("Chrome") === -1 && (e === -1 || Number(X.substr(e +
                    8, 1)) > 3), p = d && Number(X.substr(X.indexOf("Version/") + 8, 1)) < 6, f = X.indexOf("Firefox") !== -
                    1, (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(X) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(X)) && (m =
                    parseFloat(RegExp.$1)), !! t && (t.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(t.style.opacity))
            }(),
            Q = function (e) {
                return x.test("string" == typeof e ? e : (e.currentStyle ? e.currentStyle.filter : e.style.filter) ||
                    "") ? parseFloat(RegExp.$1) / 100 : 1
            }, V = function (e) {
                window.console && console.log(e)
            }, W = "",
            H = "",
            Z = function (e, t) {
                t = t || j;
                var i, r, n = t.style;
                if (void 0 !== n[e]) return e;
                for (e = e.charAt(0).toUpperCase() + e.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], r = 5; --r > -
                    1 && void 0 === n[i[r] + e];);
                return r >= 0 ? (H = 3 === r ? "ms" : i[r], W = "-" + H.toLowerCase() + "-", H + e) : null
            }, G = N.defaultView ? N.defaultView.getComputedStyle : function () {}, K = a.getStyle = function (e, t, i,
                r, n) {
                var s;
                return Y || "opacity" !== t ? (!r && e.style[t] ? s = e.style[t] : (i = i || G(e)) ? s = i[t] || i.getPropertyValue(
                    t) || i.getPropertyValue(t.replace(P, "-$1").toLowerCase()) : e.currentStyle && (s = e.currentStyle[
                    t]), null == n || s && "none" !== s && "auto" !== s && "auto auto" !== s ? s : n) : Q(e)
            }, J = q.convertToPixels = function (e, i, r, n, s) {
                if ("px" === n || !n) return r;
                if ("auto" === n || !r) return 0;
                var o, l, c, u = A.test(i),
                    h = e,
                    d = j.style,
                    f = r < 0,
                    p = 1 === r;
                if (f && (r = -r), p && (r *= 100), "%" === n && i.indexOf("border") !== -1) o = r / 100 * (u ? e.clientWidth :
                        e.clientHeight);
                else {
                    if (d.cssText = "border:0 solid red;position:" + K(e, "position") + ";line-height:0;", "%" !== n &&
                        h.appendChild && "v" !== n.charAt(0) && "rem" !== n) d[u ? "borderLeftWidth" : "borderTopWidth"] =
                            r + n;
                    else {
                        if (h = e.parentNode || N.body, l = h._gsCache, c = t.ticker.frame, l && u && l.time === c)
                            return l.width * r / 100;
                        d[u ? "width" : "height"] = r + n
                    }
                    h.appendChild(j), o = parseFloat(j[u ? "offsetWidth" : "offsetHeight"]), h.removeChild(j), u && "%" ===
                        n && a.cacheWidths !== !1 && (l = h._gsCache = h._gsCache || {}, l.time = c, l.width = o / r *
                        100), 0 !== o || s || (o = J(e, i, r, n, !0))
                }
                return p && (o /= 100), f ? -o : o
            }, ee = q.calculateOffset = function (e, t, i) {
                if ("absolute" !== K(e, "position", i)) return 0;
                var r = "left" === t ? "Left" : "Top",
                    n = K(e, "margin" + r, i);
                return e["offset" + r] - (J(e, t, parseFloat(n), n.replace(T, "")) || 0)
            }, te = function (e, t) {
                var i, r, n, s = {};
                if (t = t || G(e, null)) if (i = t.length) for (; --i > -1;) n = t[i], n.indexOf("-transform") !== -1 &&
                                Se !== n || (s[n.replace(S, M)] = t.getPropertyValue(n));
                    else for (i in t) i.indexOf("Transform") !== -1 && Pe !== i || (s[i] = t[i]);
                    else if (t = e.currentStyle || e.style) for (i in t) "string" == typeof i && void 0 === s[i] && (s[
                            i.replace(S, M)] = t[i]);
                return Y || (s.opacity = Q(e)), r = je(e, t, !1), s.rotation = r.rotation, s.skewX = r.skewX, s.scaleX =
                    r.scaleX, s.scaleY = r.scaleY, s.x = r.x, s.y = r.y, Me && (s.z = r.z, s.rotationX = r.rotationX, s
                    .rotationY = r.rotationY, s.scaleZ = r.scaleZ), s.filters && delete s.filters, s
            }, ie = function (e, t, i, r, n) {
                var s, a, o, l = {}, c = e.style;
                for (a in i) "cssText" !== a && "length" !== a && isNaN(a) && (t[a] !== (s = i[a]) || n && n[a]) && a.indexOf(
                        "Origin") === -1 && ("number" != typeof s && "string" != typeof s || (l[a] = "auto" !== s ||
                        "left" !== a && "top" !== a ? "" !== s && "auto" !== s && "none" !== s || "string" != typeof t[
                        a] || "" === t[a].replace(b, "") ? s : 0 : ee(e, a), void 0 !== c[a] && (o = new _e(c, a, c[a],
                        o))));
                if (r) for (a in r) "className" !== a && (l[a] = r[a]);
                return {
                    difs: l,
                    firstMPT: o
                }
            }, re = {
                width: ["Left", "Right"],
                height: ["Top", "Bottom"]
            }, ne = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
            se = function (e, t, i) {
                if ("svg" === (e.nodeName + "").toLowerCase()) return (i || G(e))[t] || 0;
                if (e.getBBox && Fe(e)) return e.getBBox()[t] || 0;
                var r = parseFloat("width" === t ? e.offsetWidth : e.offsetHeight),
                    n = re[t],
                    s = n.length;
                for (i = i || G(e, null); --s > -1;) r -= parseFloat(K(e, "padding" + n[s], i, !0)) || 0, r -=
                        parseFloat(K(e, "border" + n[s] + "Width", i, !0)) || 0;
                return r
            }, ae = function (e, t) {
                if ("contain" === e || "auto" === e || "auto auto" === e) return e + " ";
                null != e && "" !== e || (e = "0 0");
                var i, r = e.split(" "),
                    n = e.indexOf("left") !== -1 ? "0%" : e.indexOf("right") !== -1 ? "100%" : r[0],
                    s = e.indexOf("top") !== -1 ? "0%" : e.indexOf("bottom") !== -1 ? "100%" : r[1];
                if (r.length > 3 && !t) {
                    for (r = e.split(", ").join(",").split(","), e = [], i = 0; i < r.length; i++) e.push(ae(r[i]));
                    return e.join(",")
                }
                return null == s ? s = "center" === n ? "50%" : "0" : "center" === s && (s = "50%"), ("center" === n ||
                    isNaN(parseFloat(n)) && (n + "").indexOf("=") === -1) && (n = "50%"), e = n + " " + s + (r.length >
                    2 ? " " + r[2] : ""), t && (t.oxp = n.indexOf("%") !== -1, t.oyp = s.indexOf("%") !== -1, t.oxr =
                    "=" === n.charAt(1), t.oyr = "=" === s.charAt(1), t.ox = parseFloat(n.replace(b, "")), t.oy =
                    parseFloat(s.replace(b, "")), t.v = e), t || e
            }, oe = function (e, t) {
                return "function" == typeof e && (e = e(_, v)), "string" == typeof e && "=" === e.charAt(1) ? parseInt(
                    e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) : parseFloat(e) - parseFloat(t) || 0
            }, le = function (e, t) {
                return "function" == typeof e && (e = e(_, v)), null == e ? t : "string" == typeof e && "=" === e.charAt(
                    1) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) + t : parseFloat(e) || 0
            }, ce = function (e, t, i, r) {
                var n, s, a, o, l, c = 1e-6;
                return "function" == typeof e && (e = e(_, v)), null == e ? o = t : "number" == typeof e ? o = e : (n =
                    360, s = e.split("_"), l = "=" === e.charAt(1), a = (l ? parseInt(e.charAt(0) + "1", 10) *
                    parseFloat(s[0].substr(2)) : parseFloat(s[0])) * (e.indexOf("rad") === -1 ? 1 : z) - (l ? 0 : t), s
                    .length && (r && (r[i] = t + a), e.indexOf("short") !== -1 && (a %= n, a !== a % (n / 2) && (a = a <
                    0 ? a + n : a - n)), e.indexOf("_cw") !== -1 && a < 0 ? a = (a + 9999999999 * n) % n - (a / n | 0) *
                    n : e.indexOf("ccw") !== -1 && a > 0 && (a = (a - 9999999999 * n) % n - (a / n | 0) * n)), o = t +
                    a), o < c && o > -c && (o = 0), o
            }, ue = {
                aqua: [0, 255, 255],
                lime: [0, 255, 0],
                silver: [192, 192, 192],
                black: [0, 0, 0],
                maroon: [128, 0, 0],
                teal: [0, 128, 128],
                blue: [0, 0, 255],
                navy: [0, 0, 128],
                white: [255, 255, 255],
                fuchsia: [255, 0, 255],
                olive: [128, 128, 0],
                yellow: [255, 255, 0],
                orange: [255, 165, 0],
                gray: [128, 128, 128],
                purple: [128, 0, 128],
                green: [0, 128, 0],
                red: [255, 0, 0],
                pink: [255, 192, 203],
                cyan: [0, 255, 255],
                transparent: [255, 255, 255, 0]
            }, he = function (e, t, i) {
                return e = e < 0 ? e + 1 : e > 1 ? e - 1 : e, 255 * (6 * e < 1 ? t + (i - t) * e * 6 : e < .5 ? i : 3 *
                    e < 2 ? t + (i - t) * (2 / 3 - e) * 6 : t) + .5 | 0
            }, de = a.parseColor = function (e, t) {
                var i, r, n, s, a, o, l, c, u, h, d;
                if (e) if ("number" == typeof e) i = [e >> 16, e >> 8 & 255, 255 & e];
                    else {
                        if ("," === e.charAt(e.length - 1) && (e = e.substr(0, e.length - 1)), ue[e]) i = ue[e];
                        else if ("#" === e.charAt(0)) 4 === e.length && (r = e.charAt(1), n = e.charAt(2), s = e.charAt(
                                3), e = "#" + r + r + n + n + s + s), e = parseInt(e.substr(1), 16), i = [e >> 16, e >>
                                    8 & 255, 255 & e];
                        else if ("hsl" === e.substr(0, 3)) if (i = d = e.match(g),
                                t) {
                                if (e.indexOf("=") !== -1) return e.match(w)
                            } else a = Number(i[0]) % 360 / 360, o = Number(i[1]) / 100, l = Number(i[2]) / 100, n = l <=
                                    .5 ? l * (o + 1) : l + o - l * o, r = 2 * l - n, i.length > 3 && (i[3] = Number(e[3])),
                                    i[0] = he(a + 1 / 3, r, n), i[1] = he(a, r, n), i[2] = he(a - 1 / 3, r, n);
                            else i = e.match(g) || ue.transparent;
                        i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), i.length > 3 && (i[3] = Number(i[
                            3]))
                    } else i = ue.black;
                return t && !d && (r = i[0] / 255, n = i[1] / 255, s = i[2] / 255, c = Math.max(r, n, s), u = Math.min(
                    r, n, s), l = (c + u) / 2, c === u ? a = o = 0 : (h = c - u, o = l > .5 ? h / (2 - c - u) : h / (c +
                    u), a = c === r ? (n - s) / h + (n < s ? 6 : 0) : c === n ? (s - r) / h + 2 : (r - n) / h + 4, a *=
                    60), i[0] = a + .5 | 0, i[1] = 100 * o + .5 | 0, i[2] = 100 * l + .5 | 0), i
            }, fe = function (e, t) {
                var i, r, n, s = e.match(pe) || [],
                    a = 0,
                    o = s.length ? "" : e;
                for (i = 0; i < s.length; i++) r = s[i], n = e.substr(a, e.indexOf(r, a) - a), a += n.length + r.length,
                        r = de(r, t), 3 === r.length && r.push(1), o += n + (t ? "hsla(" + r[0] + "," + r[1] + "%," + r[
                        2] + "%," + r[3] : "rgba(" + r.join(",")) + ")";
                return o + e.substr(a)
            }, pe = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
        for (c in ue) pe += "|" + c + "\\b";
        pe = new RegExp(pe + ")", "gi"), a.colorStringFilter = function (e) {
            var t, i = e[0] + e[1];
            pe.test(i) && (t = i.indexOf("hsl(") !== -1 || i.indexOf("hsla(") !== -1, e[0] = fe(e[0], t), e[1] = fe(e[1],
                t)), pe.lastIndex = 0
        }, t.defaultStringFilter || (t.defaultStringFilter = a.colorStringFilter);
        var me = function (e, t, i, r) {
            if (null == e) return function (e) {
                    return e
            };
            var n, s = t ? (e.match(pe) || [""])[0] : "",
                a = e.split(s).join("").match(y) || [],
                o = e.substr(0, e.indexOf(a[0])),
                l = ")" === e.charAt(e.length - 1) ? ")" : "",
                c = e.indexOf(" ") !== -1 ? " " : ",",
                u = a.length,
                h = u > 0 ? a[0].replace(g, "") : "";
            return u ? n = t ? function (e) {
                var t, d, f, p;
                if ("number" == typeof e) e += h;
                else if (r && I.test(e)) {
                    for (p = e.replace(I, "|").split("|"), f = 0; f < p.length; f++) p[f] = n(p[f]);
                    return p.join(",")
                }
                if (t = (e.match(pe) || [s])[0], d = e.split(t).join("").match(y) || [], f = d.length, u > f--) for (; ++
                        f < u;) d[f] = i ? d[(f - 1) / 2 | 0] : a[f];
                return o + d.join(c) + c + t + l + (e.indexOf("inset") !== -1 ? " inset" : "")
            } : function (e) {
                var t, s, d;
                if ("number" == typeof e) e += h;
                else if (r && I.test(e)) {
                    for (s = e.replace(I, "|").split("|"), d = 0; d < s.length; d++) s[d] = n(s[d]);
                    return s.join(",")
                }
                if (t = e.match(y) || [], d = t.length, u > d--) for (; ++d < u;) t[d] = i ? t[(d - 1) / 2 | 0] : a[d];
                return o + t.join(c) + l
            } : function (e) {
                return e
            }
        }, ve = function (e) {
                return e = e.split(","),
                function (t, i, r, n, s, a, o) {
                    var l, c = (i + "").split(" ");
                    for (o = {}, l = 0; l < 4; l++) o[e[l]] = c[l] = c[l] || c[(l - 1) / 2 >> 0];
                    return n.parse(t, o, s, a)
                }
            }, _e = (q._setPluginRatio = function (e) {
                this.plugin.setRatio(e);
                for (var t, i, r, n, s, a = this.data, o = a.proxy, l = a.firstMPT, c = 1e-6; l;) t = o[l.v], l.r ? t =
                        Math.round(t) : t < c && t > -c && (t = 0), l.t[l.p] = t, l = l._next;
                if (a.autoRotate && (a.autoRotate.rotation = a.mod ? a.mod(o.rotation, this.t) : o.rotation), 1 === e ||
                    0 === e) for (l = a.firstMPT, s = 1 === e ? "e" : "b"; l;) {
                        if (i = l.t, i.type) {
                            if (1 === i.type) {
                                for (n = i.xs0 + i.s + i.xs1, r = 1; r < i.l; r++) n += i["xn" + r] + i["xs" + (r + 1)];
                                i[s] = n
                            }
                        } else i[s] = i.s + i.xs0;
                        l = l._next
                }
            }, function (e, t, i, r, n) {
                this.t = e, this.p = t, this.v = i, this.r = n, r && (r._prev = this, this._next = r)
            }),
            ge = (q._parseToProxy = function (e, t, i, r, n, s) {
                var a, o, l, c, u, h = r,
                    d = {}, f = {}, p = i._transform,
                    m = F;
                for (i._transform = null, F = t, r = u = i.parse(e, t, r, n), F = m, s && (i._transform = p, h && (h._prev =
                    null, h._prev && (h._prev._next = null))); r && r !== h;) {
                    if (r.type <= 1 && (o = r.p, f[o] = r.s + r.c, d[o] = r.s, s || (c = new _e(r, "s", o, c, r.r), r.c =
                        0), 1 === r.type)) for (a = r.l; --a > 0;) l = "xn" + a, o = r.p + "_" + l, f[o] = r.data[l], d[
                                o] = r[l], s || (c = new _e(r, l, o, c, r.rxp[l]));
                    r = r._next
                }
                return {
                    proxy: d,
                    end: f,
                    firstMPT: c,
                    pt: u
                }
            }, q.CSSPropTween = function (e, t, r, n, a, o, l, c, u, h, d) {
                this.t = e, this.p = t, this.s = r, this.c = n, this.n = l || t, e instanceof ge || s.push(this.n),
                    this.r = c, this.type = o || 0, u && (this.pr = u, i = !0), this.b = void 0 === h ? r : h, this.e =
                    void 0 === d ? r + n : d, a && (this._next = a, a._prev = this)
            }),
            we = function (e, t, i, r, n, s) {
                var a = new ge(e, t, i, r - i, n, (-1), s);
                return a.b = i, a.e = a.xs0 = r, a
            }, ye = a.parseComplex = function (e, t, i, r, n, s, o, l, c, h) {
                i = i || s || "", "function" == typeof r && (r = r(_, v)), o = new ge(e, t, 0, 0, o, h ? 2 : 1, null, (!
                    1), l, i, r), r += "", n && pe.test(r + i) && (r = [i, r], a.colorStringFilter(r), i = r[0], r = r[
                    1]);
                var d, f, p, m, y, b, T, x, C, $, k, P, S, O = i.split(", ").join(",").split(" "),
                    M = r.split(", ").join(",").split(" "),
                    A = O.length,
                    R = u !== !1;
                for (r.indexOf(",") === -1 && i.indexOf(",") === -1 || (O = O.join(" ").replace(I, ", ").split(" "), M =
                    M.join(" ").replace(I, ", ").split(" "), A = O.length), A !== M.length && (O = (s || "").split(" "),
                    A = O.length), o.plugin = c, o.setRatio = h, pe.lastIndex = 0, d = 0; d < A; d++) if (m = O[d], y =
                        M[d], x = parseFloat(m), x || 0 === x) o.appendXtra("", x, oe(y, x), y.replace(w, ""), R && y.indexOf(
                            "px") !== -1, !0);
                    else if (n && pe.test(m)) P = y.indexOf(")") + 1, P = ")" + (P ? y.substr(P) : ""), S = y.indexOf(
                        "hsl") !== -1 && Y, m = de(m, S), y = de(y, S), C = m.length + y.length > 6, C && !Y && 0 === y[
                        3] ? (o["xs" + o.l] += o.l ? " transparent" : "transparent", o.e = o.e.split(M[d]).join(
                        "transparent")) : (Y || (C = !1), S ? o.appendXtra(C ? "hsla(" : "hsl(", m[0], oe(y[0], m[0]),
                        ",", !1, !0).appendXtra("", m[1], oe(y[1], m[1]), "%,", !1).appendXtra("", m[2], oe(y[2], m[2]),
                        C ? "%," : "%" + P, !1) : o.appendXtra(C ? "rgba(" : "rgb(", m[0], y[0] - m[0], ",", !0, !0).appendXtra(
                        "", m[1], y[1] - m[1], ",", !0).appendXtra("", m[2], y[2] - m[2], C ? "," : P, !0), C && (m = m
                        .length < 4 ? 1 : m[3], o.appendXtra("", m, (y.length < 4 ? 1 : y[3]) - m, P, !1))), pe.lastIndex =
                        0;
                else if (b = m.match(g)) {
                    if (T = y.match(w), !T || T.length !== b.length) return o;
                    for (p = 0, f = 0; f < b.length; f++) k = b[f], $ = m.indexOf(k, p), o.appendXtra(m.substr(p, $ - p),
                            Number(k), oe(T[f], k), "", R && "px" === m.substr($ + k.length, 2), 0 === f), p = $ + k.length;
                    o["xs" + o.l] += m.substr(p)
                } else o["xs" + o.l] += o.l || o["xs" + o.l] ? " " + y : y; if (r.indexOf("=") !== -1 && o.data) {
                    for (P = o.xs0 + o.data.s, d = 1; d < o.l; d++) P += o["xs" + d] + o.data["xn" + d];
                    o.e = P + o["xs" + d]
                }
                return o.l || (o.type = -1, o.xs0 = o.e), o.xfirst || o
            }, be = 9;
        for (c = ge.prototype, c.l = c.pr = 0; --be > 0;) c["xn" + be] = 0, c["xs" + be] = "";
        c.xs0 = "", c._next = c._prev = c.xfirst = c.data = c.plugin = c.setRatio = c.rxp = null, c.appendXtra = function (
            e, t, i, r, n, s) {
            var a = this,
                o = a.l;
            return a["xs" + o] += s && (o || a["xs" + o]) ? " " + e : e || "", i || 0 === o || a.plugin ? (a.l++, a.type =
                a.setRatio ? 2 : 1, a["xs" + a.l] = r || "", o > 0 ? (a.data["xn" + o] = t + i, a.rxp["xn" + o] = n, a[
                "xn" + o] = t, a.plugin || (a.xfirst = new ge(a, "xn" + o, t, i, a.xfirst || a, 0, a.n, n, a.pr), a.xfirst
                .xs0 = 0), a) : (a.data = {
                s: t + i
            }, a.rxp = {}, a.s = t, a.c = i, a.r = n, a)) : (a["xs" + o] += t + (r || ""), a)
        };
        var Te = function (e, t) {
            t = t || {}, this.p = t.prefix ? Z(e) || e : e, l[e] = l[this.p] = this, this.format = t.formatter || me(t.defaultValue,
                t.color, t.collapsible, t.multi), t.parser && (this.parse = t.parser), this.clrs = t.color, this.multi =
                t.multi, this.keyword = t.keyword, this.dflt = t.defaultValue, this.pr = t.priority || 0
        }, xe = q._registerComplexSpecialProp = function (e, t, i) {
                "object" != typeof t && (t = {
                    parser: i
                });
                var r, n, s = e.split(","),
                    a = t.defaultValue;
                for (i = i || [a], r = 0; r < s.length; r++) t.prefix = 0 === r && t.prefix, t.defaultValue = i[r] || a,
                        n = new Te(s[r], t)
            }, Ce = q._registerPluginProp = function (e) {
                if (!l[e]) {
                    var t = e.charAt(0).toUpperCase() + e.substr(1) + "Plugin";
                    xe(e, {
                        parser: function (e, i, r, n, s, a, c) {
                            var u = o.com.greensock.plugins[t];
                            return u ? (u._cssRegister(), l[r].parse(e, i, r, n, s, a, c)) : (V("Error: " + t +
                                " js file not loaded."), s)
                        }
                    })
                }
            };
        c = Te.prototype, c.parseComplex = function (e, t, i, r, n, s) {
            var a, o, l, c, u, h, d = this.keyword;
            if (this.multi && (I.test(i) || I.test(t) ? (o = t.replace(I, "|").split("|"), l = i.replace(I, "|").split(
                "|")) : d && (o = [t], l = [i])), l) {
                for (c = l.length > o.length ? l.length : o.length, a = 0; a < c; a++) t = o[a] = o[a] || this.dflt, i =
                        l[a] = l[a] || this.dflt, d && (u = t.indexOf(d), h = i.indexOf(d), u !== h && (h === -1 ? o[a] =
                        o[a].split(d).join("") : u === -1 && (o[a] += " " + d)));
                t = o.join(", "), i = l.join(", ")
            }
            return ye(e, this.p, t, i, this.clrs, this.dflt, r, this.pr, n, s)
        }, c.parse = function (e, t, i, r, s, a, o) {
            return this.parseComplex(e.style, this.format(K(e, this.p, n, !1, this.dflt)), this.format(t), s, a)
        }, a.registerSpecialProp = function (e, t, i) {
            xe(e, {
                parser: function (e, r, n, s, a, o, l) {
                    var c = new ge(e, n, 0, 0, a, 2, n, (!1), i);
                    return c.plugin = o, c.setRatio = t(e, r, s._tween, n), c
                },
                priority: i
            })
        }, a.useSVGTransformAttr = d || f;
        var $e, ke =
                "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(
                ","),
            Pe = Z("transform"),
            Se = W + "transform",
            Oe = Z("transformOrigin"),
            Me = null !== Z("perspective"),
            Ae = q.Transform = function () {
                this.perspective = parseFloat(a.defaultTransformPerspective) || 0, this.force3D = !(a.defaultForce3D === !
                    1 || !Me) && (a.defaultForce3D || "auto")
            }, Re = window.SVGElement,
            De = function (e, t, i) {
                var r, n = N.createElementNS("http://www.w3.org/2000/svg", e),
                    s = /([a-z])([A-Z])/g;
                for (r in i) n.setAttributeNS(null, r.replace(s, "$1-$2").toLowerCase(), i[r]);
                return t.appendChild(n), n
            }, Ie = N.documentElement,
            Le = function () {
                var e, t, i, r = m || /Android/i.test(X) && !window.chrome;
                return N.createElementNS && !r && (e = De("svg", Ie), t = De("rect", e, {
                    width: 100,
                    height: 50,
                    x: 100
                }), i = t.getBoundingClientRect().width, t.style[Oe] = "50% 50%", t.style[Pe] = "scaleX(0.5)", r = i ===
                    t.getBoundingClientRect().width && !(f && Me), Ie.removeChild(e)), r
            }(),
            Ee = function (e, t, i, r, n, s) {
                var o, l, c, u, h, d, f, p, m, v, _, g, w, y, b = e._gsTransform,
                    T = Ue(e, !0);
                b && (w = b.xOrigin, y = b.yOrigin), (!r || (o = r.split(" ")).length < 2) && (f = e.getBBox(), t = ae(
                    t).split(" "), o = [(t[0].indexOf("%") !== -1 ? parseFloat(t[0]) / 100 * f.width : parseFloat(t[0])) +
                        f.x, (t[1].indexOf("%") !== -1 ? parseFloat(t[1]) / 100 * f.height : parseFloat(t[1])) + f.y]),
                    i.xOrigin = u = parseFloat(o[0]), i.yOrigin = h = parseFloat(o[1]), r && T !== Ne && (d = T[0], f =
                    T[1], p = T[2], m = T[3], v = T[4], _ = T[5], g = d * m - f * p, l = u * (m / g) + h * (-p / g) + (
                    p * _ - m * v) / g, c = u * (-f / g) + h * (d / g) - (d * _ - f * v) / g, u = i.xOrigin = o[0] = l,
                    h = i.yOrigin = o[1] = c), b && (s && (i.xOffset = b.xOffset, i.yOffset = b.yOffset, b = i), n || n !== !
                    1 && a.defaultSmoothOrigin !== !1 ? (l = u - w, c = h - y, b.xOffset += l * T[0] + c * T[2] - l, b.yOffset +=
                    l * T[1] + c * T[3] - c) : b.xOffset = b.yOffset = 0), s || e.setAttribute("data-svg-origin", o.join(
                    " "))
            }, ze = function (e) {
                try {
                    return e.getBBox()
                } catch (e) {}
            }, Fe = function (e) {
                return !!(Re && e.getBBox && e.getCTM && ze(e) && (!e.parentNode || e.parentNode.getBBox && e.parentNode
                    .getCTM))
            }, Ne = [1, 0, 0, 1, 0, 0],
            Ue = function (e, t) {
                var i, r, n, s, a, o, l = e._gsTransform || new Ae,
                    c = 1e5,
                    u = e.style;
                if (Pe ? r = K(e, Se, null, !0) : e.currentStyle && (r = e.currentStyle.filter.match(R), r = r && 4 ===
                    r.length ? [r[0].substr(4), Number(r[2].substr(4)), Number(r[1].substr(4)), r[3].substr(4), l.x ||
                        0, l.y || 0].join(",") : ""), i = !r || "none" === r || "matrix(1, 0, 0, 1, 0, 0)" === r, i &&
                    Pe && ((o = "none" === G(e).display) || !e.parentNode) && (o && (s = u.display, u.display = "block"),
                    e.parentNode || (a = 1, Ie.appendChild(e)), r = K(e, Se, null, !0), i = !r || "none" === r ||
                    "matrix(1, 0, 0, 1, 0, 0)" === r, s ? u.display = s : o && Ye(u, "display"), a && Ie.removeChild(e)), (
                    l.svg || e.getBBox && Fe(e)) && (i && (u[Pe] + "").indexOf("matrix") !== -1 && (r = u[Pe], i = 0),
                    n = e.getAttribute("transform"), i && n && (n.indexOf("matrix") !== -1 ? (r = n, i = 0) : n.indexOf(
                    "translate") !== -1 && (r = "matrix(1,0,0,1," + n.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")",
                    i = 0))), i) return Ne;
                for (n = (r || "").match(g) || [], be = n.length; --be > -1;) s = Number(n[be]), n[be] = (a = s - (s |=
                        0)) ? (a * c + (a < 0 ? -.5 : .5) | 0) / c + s : s;
                return t && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n
            }, je = q.getTransform = function (e, i, r, n) {
                if (e._gsTransform && r && !n) return e._gsTransform;
                var s, o, l, c, u, h, d = r ? e._gsTransform || new Ae : new Ae,
                    f = d.scaleX < 0,
                    p = 2e-5,
                    m = 1e5,
                    v = Me ? parseFloat(K(e, Oe, i, !1, "0 0 0").split(" ")[2]) || d.zOrigin || 0 : 0,
                    _ = parseFloat(a.defaultTransformPerspective) || 0;
                if (d.svg = !(!e.getBBox || !Fe(e)), d.svg && (Ee(e, K(e, Oe, i, !1, "50% 50%") + "", d, e.getAttribute(
                    "data-svg-origin")), $e = a.useSVGTransformAttr || Le), s = Ue(e), s !== Ne) {
                    if (16 === s.length) {
                        var g, w, y, b, T, x = s[0],
                            C = s[1],
                            $ = s[2],
                            k = s[3],
                            P = s[4],
                            S = s[5],
                            O = s[6],
                            M = s[7],
                            A = s[8],
                            R = s[9],
                            D = s[10],
                            I = s[12],
                            L = s[13],
                            E = s[14],
                            F = s[11],
                            N = Math.atan2(O, D);
                        d.zOrigin && (E = -d.zOrigin, I = A * E - s[12], L = R * E - s[13], E = D * E + d.zOrigin - s[
                            14]), d.rotationX = N * z, N && (b = Math.cos(-N), T = Math.sin(-N), g = P * b + A * T, w =
                            S * b + R * T, y = O * b + D * T, A = P * -T + A * b, R = S * -T + R * b, D = O * -T + D *
                            b, F = M * -T + F * b, P = g, S = w, O = y), N = Math.atan2(-$, D), d.rotationY = N * z, N &&
                            (b = Math.cos(-N), T = Math.sin(-N), g = x * b - A * T, w = C * b - R * T, y = $ * b - D *
                            T, R = C * T + R * b, D = $ * T + D * b, F = k * T + F * b, x = g, C = w, $ = y), N = Math.atan2(
                            C, x), d.rotation = N * z, N && (b = Math.cos(-N), T = Math.sin(-N), x = x * b + P * T, w =
                            C * b + S * T, S = C * -T + S * b, O = $ * -T + O * b, C = w), d.rotationX && Math.abs(d.rotationX) +
                            Math.abs(d.rotation) > 359.9 && (d.rotationX = d.rotation = 0, d.rotationY = 180 - d.rotationY),
                            d.scaleX = (Math.sqrt(x * x + C * C) * m + .5 | 0) / m, d.scaleY = (Math.sqrt(S * S + R * R) *
                            m + .5 | 0) / m, d.scaleZ = (Math.sqrt(O * O + D * D) * m + .5 | 0) / m, d.rotationX || d.rotationY ?
                            d.skewX = 0 : (d.skewX = P || S ? Math.atan2(P, S) * z + d.rotation : d.skewX || 0, Math.abs(
                            d.skewX) > 90 && Math.abs(d.skewX) < 270 && (f ? (d.scaleX *= -1, d.skewX += d.rotation <=
                            0 ? 180 : -180, d.rotation += d.rotation <= 0 ? 180 : -180) : (d.scaleY *= -1, d.skewX += d
                            .skewX <= 0 ? 180 : -180))), d.perspective = F ? 1 / (F < 0 ? -F : F) : 0, d.x = I, d.y = L,
                            d.z = E, d.svg && (d.x -= d.xOrigin - (d.xOrigin * x - d.yOrigin * P), d.y -= d.yOrigin - (
                            d.yOrigin * C - d.xOrigin * S))
                    } else if (!Me || n || !s.length || d.x !== s[4] || d.y !== s[5] || !d.rotationX && !d.rotationY) {
                        var U = s.length >= 6,
                            j = U ? s[0] : 1,
                            B = s[1] || 0,
                            q = s[2] || 0,
                            X = U ? s[3] : 1;
                        d.x = s[4] || 0, d.y = s[5] || 0, l = Math.sqrt(j * j + B * B), c = Math.sqrt(X * X + q * q), u =
                            j || B ? Math.atan2(B, j) * z : d.rotation || 0, h = q || X ? Math.atan2(q, X) * z + u : d.skewX ||
                            0, Math.abs(h) > 90 && Math.abs(h) < 270 && (f ? (l *= -1, h += u <= 0 ? 180 : -180, u += u <=
                            0 ? 180 : -180) : (c *= -1, h += h <= 0 ? 180 : -180)), d.scaleX = l, d.scaleY = c, d.rotation =
                            u, d.skewX = h, Me && (d.rotationX = d.rotationY = d.z = 0, d.perspective = _, d.scaleZ = 1),
                            d.svg && (d.x -= d.xOrigin - (d.xOrigin * j + d.yOrigin * q), d.y -= d.yOrigin - (d.xOrigin *
                            B + d.yOrigin * X))
                    }
                    d.zOrigin = v;
                    for (o in d) d[o] < p && d[o] > -p && (d[o] = 0)
                }
                return r && (e._gsTransform = d, d.svg && ($e && e.style[Pe] ? t.delayedCall(.001, function () {
                    Ye(e.style, Pe)
                }) : !$e && e.getAttribute("transform") && t.delayedCall(.001, function () {
                    e.removeAttribute("transform")
                }))), d
            }, Be = function (e) {
                var t, i, r = this.data,
                    n = -r.rotation * E,
                    s = n + r.skewX * E,
                    a = 1e5,
                    o = (Math.cos(n) * r.scaleX * a | 0) / a,
                    l = (Math.sin(n) * r.scaleX * a | 0) / a,
                    c = (Math.sin(s) * -r.scaleY * a | 0) / a,
                    u = (Math.cos(s) * r.scaleY * a | 0) / a,
                    h = this.t.style,
                    d = this.t.currentStyle;
                if (d) {
                    i = l, l = -c, c = -i, t = d.filter, h.filter = "";
                    var f, p, v = this.t.offsetWidth,
                        _ = this.t.offsetHeight,
                        g = "absolute" !== d.position,
                        w = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + l + ", M21=" + c +
                            ", M22=" + u,
                        y = r.x + v * r.xPercent / 100,
                        b = r.y + _ * r.yPercent / 100;
                    if (null != r.ox && (f = (r.oxp ? v * r.ox * .01 : r.ox) - v / 2, p = (r.oyp ? _ * r.oy * .01 : r.oy) -
                        _ / 2, y += f - (f * o + p * l), b += p - (f * c + p * u)), g ? (f = v / 2, p = _ / 2, w +=
                        ", Dx=" + (f - (f * o + p * l) + y) + ", Dy=" + (p - (f * c + p * u) + b) + ")") : w +=
                        ", sizingMethod='auto expand')", t.indexOf("DXImageTransform.Microsoft.Matrix(") !== -1 ? h.filter =
                        t.replace(D, w) : h.filter = w + " " + t, 0 !== e && 1 !== e || 1 === o && 0 === l && 0 === c &&
                        1 === u && (g && w.indexOf("Dx=0, Dy=0") === -1 || x.test(t) && 100 !== parseFloat(RegExp.$1) ||
                        t.indexOf(t.indexOf("Alpha")) === -1 && h.removeAttribute("filter")), !g) {
                        var C, $, k, P = m < 8 ? 1 : -1;
                        for (f = r.ieOffsetX || 0, p = r.ieOffsetY || 0, r.ieOffsetX = Math.round((v - ((o < 0 ? -o : o) *
                            v + (l < 0 ? -l : l) * _)) / 2 + y), r.ieOffsetY = Math.round((_ - ((u < 0 ? -u : u) * _ +
                            (c < 0 ? -c : c) * v)) / 2 + b), be = 0; be < 4; be++) $ = ne[be], C = d[$], i = C.indexOf(
                                "px") !== -1 ? parseFloat(C) : J(this.t, $, parseFloat(C), C.replace(T, "")) || 0, k =
                                i !== r[$] ? be < 2 ? -r.ieOffsetX : -r.ieOffsetY : be < 2 ? f - r.ieOffsetX : p - r.ieOffsetY,
                                h[$] = (r[$] = Math.round(i - k * (0 === be || 2 === be ? 1 : P))) + "px"
                    }
                }
            }, qe = q.set3DTransformRatio = q.setTransformRatio = function (e) {
                var t, i, r, n, s, a, o, l, c, u, h, d, p, m, v, _, g, w, y, b, T, x, C, $ = this.data,
                    k = this.t.style,
                    P = $.rotation,
                    S = $.rotationX,
                    O = $.rotationY,
                    M = $.scaleX,
                    A = $.scaleY,
                    R = $.scaleZ,
                    D = $.x,
                    I = $.y,
                    L = $.z,
                    z = $.svg,
                    F = $.perspective,
                    N = $.force3D;
                if (((1 === e || 0 === e) && "auto" === N && (this.tween._totalTime === this.tween._totalDuration || !
                    this.tween._totalTime) || !N) && !L && !F && !O && !S && 1 === R || $e && z || !Me) return void(P ||
                        $.skewX || z ? (P *= E, x = $.skewX * E, C = 1e5, t = Math.cos(P) * M, n = Math.sin(P) * M, i =
                        Math.sin(P - x) * -A, s = Math.cos(P - x) * A, x && "simple" === $.skewType && (g = Math.tan(x -
                        $.skewY * E), g = Math.sqrt(1 + g * g), i *= g, s *= g, $.skewY && (g = Math.tan($.skewY * E),
                        g = Math.sqrt(1 + g * g), t *= g, n *= g)), z && (D += $.xOrigin - ($.xOrigin * t + $.yOrigin *
                        i) + $.xOffset, I += $.yOrigin - ($.xOrigin * n + $.yOrigin * s) + $.yOffset, $e && ($.xPercent ||
                        $.yPercent) && (m = this.t.getBBox(), D += .01 * $.xPercent * m.width, I += .01 * $.yPercent *
                        m.height), m = 1e-6, D < m && D > -m && (D = 0), I < m && I > -m && (I = 0)), y = (t * C | 0) /
                        C + "," + (n * C | 0) / C + "," + (i * C | 0) / C + "," + (s * C | 0) / C + "," + D + "," + I +
                        ")", z && $e ? this.t.setAttribute("transform", "matrix(" + y) : k[Pe] = ($.xPercent || $.yPercent ?
                        "translate(" + $.xPercent + "%," + $.yPercent + "%) matrix(" : "matrix(") + y) : k[Pe] = ($.xPercent ||
                        $.yPercent ? "translate(" + $.xPercent + "%," + $.yPercent + "%) matrix(" : "matrix(") + M +
                        ",0,0," + A + "," + D + "," + I + ")");
                if (f && (m = 1e-4, M < m && M > -m && (M = R = 2e-5), A < m && A > -m && (A = R = 2e-5), !F || $.z ||
                    $.rotationX || $.rotationY || (F = 0)), P || $.skewX) P *= E, v = t = Math.cos(P), _ = n = Math.sin(
                        P), $.skewX && (P -= $.skewX * E, v = Math.cos(P), _ = Math.sin(P), "simple" === $.skewType &&
                        (g = Math.tan(($.skewX - $.skewY) * E), g = Math.sqrt(1 + g * g), v *= g, _ *= g, $.skewY && (g =
                        Math.tan($.skewY * E), g = Math.sqrt(1 + g * g), t *= g, n *= g))), i = -_, s = v;
                else {
                    if (!(O || S || 1 !== R || F || z)) return void(k[Pe] = ($.xPercent || $.yPercent ? "translate(" +
                            $.xPercent + "%," + $.yPercent + "%) translate3d(" : "translate3d(") + D + "px," + I +
                            "px," + L + "px)" + (1 !== M || 1 !== A ? " scale(" + M + "," + A + ")" : ""));
                    t = s = 1, i = n = 0
                }
                c = 1, r = a = o = l = u = h = 0, d = F ? -1 / F : 0, p = $.zOrigin, m = 1e-6, b = ",", T = "0", P = O *
                    E, P && (v = Math.cos(P), _ = Math.sin(P), o = -_, u = d * -_, r = t * _, a = n * _, c = v, d *= v,
                    t *= v, n *= v), P = S * E, P && (v = Math.cos(P), _ = Math.sin(P), g = i * v + r * _, w = s * v +
                    a * _, l = c * _, h = d * _, r = i * -_ + r * v, a = s * -_ + a * v, c *= v, d *= v, i = g, s = w),
                    1 !== R && (r *= R, a *= R, c *= R, d *= R), 1 !== A && (i *= A, s *= A, l *= A, h *= A), 1 !== M &&
                    (t *= M, n *= M, o *= M, u *= M), (p || z) && (p && (D += r * -p, I += a * -p, L += c * -p + p), z &&
                    (D += $.xOrigin - ($.xOrigin * t + $.yOrigin * i) + $.xOffset, I += $.yOrigin - ($.xOrigin * n + $.yOrigin *
                    s) + $.yOffset), D < m && D > -m && (D = T), I < m && I > -m && (I = T), L < m && L > -m && (L = 0)),
                    y = $.xPercent || $.yPercent ? "translate(" + $.xPercent + "%," + $.yPercent + "%) matrix3d(" :
                    "matrix3d(", y += (t < m && t > -m ? T : t) + b + (n < m && n > -m ? T : n) + b + (o < m && o > -m ?
                    T : o), y += b + (u < m && u > -m ? T : u) + b + (i < m && i > -m ? T : i) + b + (s < m && s > -m ?
                    T : s), S || O || 1 !== R ? (y += b + (l < m && l > -m ? T : l) + b + (h < m && h > -m ? T : h) + b +
                    (r < m && r > -m ? T : r), y += b + (a < m && a > -m ? T : a) + b + (c < m && c > -m ? T : c) + b +
                    (d < m && d > -m ? T : d) + b) : y += ",0,0,0,0,1,0,", y += D + b + I + b + L + b + (F ? 1 + -L / F :
                    1) + ")", k[Pe] = y
            };
        c = Ae.prototype, c.x = c.y = c.z = c.skewX = c.skewY = c.rotation = c.rotationX = c.rotationY = c.zOrigin = c.xPercent =
            c.yPercent = c.xOffset = c.yOffset = 0, c.scaleX = c.scaleY = c.scaleZ = 1, xe(
            "transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
            parser: function (e, t, i, r, s, o, l) {
                if (r._lastParsedTransform === l) return s;
                r._lastParsedTransform = l;
                var c;
                "function" == typeof l[i] && (c = l[i], l[i] = t);
                var u, h, d, f, p, m, g, w, y, b = e._gsTransform,
                    T = e.style,
                    x = 1e-6,
                    C = ke.length,
                    $ = l,
                    k = {}, P = "transformOrigin",
                    S = je(e, n, !0, $.parseTransform),
                    O = $.transform && ("function" == typeof $.transform ? $.transform(_, v) : $.transform);
                if (r._transform = S, O && "string" == typeof O && Pe) h = j.style, h[Pe] = O, h.display = "block", h.position =
                        "absolute", N.body.appendChild(j), u = je(j, null, !1), S.svg && (m = S.xOrigin, g = S.yOrigin,
                        u.x -= S.xOffset, u.y -= S.yOffset, ($.transformOrigin || $.svgOrigin) && (O = {}, Ee(e, ae($.transformOrigin),
                        O, $.svgOrigin, $.smoothOrigin, !0), m = O.xOrigin, g = O.yOrigin, u.x -= O.xOffset - S.xOffset,
                        u.y -= O.yOffset - S.yOffset), (m || g) && (w = Ue(j, !0), u.x -= m - (m * w[0] + g * w[2]), u.y -=
                        g - (m * w[1] + g * w[3]))), N.body.removeChild(j), u.perspective || (u.perspective = S.perspective),
                        null != $.xPercent && (u.xPercent = le($.xPercent, S.xPercent)), null != $.yPercent && (u.yPercent =
                        le($.yPercent, S.yPercent));
                else if ("object" == typeof $) {
                    if (u = {
                        scaleX: le(null != $.scaleX ? $.scaleX : $.scale, S.scaleX),
                        scaleY: le(null != $.scaleY ? $.scaleY : $.scale, S.scaleY),
                        scaleZ: le($.scaleZ, S.scaleZ),
                        x: le($.x, S.x),
                        y: le($.y, S.y),
                        z: le($.z, S.z),
                        xPercent: le($.xPercent, S.xPercent),
                        yPercent: le($.yPercent, S.yPercent),
                        perspective: le($.transformPerspective, S.perspective)
                    }, p = $.directionalRotation, null != p) if ("object" == typeof p) for (h in p) $[h] = p[h];
                        else $.rotation = p;
                        "string" == typeof $.x && $.x.indexOf("%") !== -1 && (u.x = 0, u.xPercent = le($.x, S.xPercent)),
                        "string" == typeof $.y && $.y.indexOf("%") !== -1 && (u.y = 0, u.yPercent = le($.y, S.yPercent)),
                        u.rotation = ce("rotation" in $ ? $.rotation : "shortRotation" in $ ? $.shortRotation +
                        "_short" : "rotationZ" in $ ? $.rotationZ : S.rotation - S.skewY, S.rotation - S.skewY,
                        "rotation", k), Me && (u.rotationX = ce("rotationX" in $ ? $.rotationX : "shortRotationX" in $ ?
                        $.shortRotationX + "_short" : S.rotationX || 0, S.rotationX, "rotationX", k), u.rotationY = ce(
                        "rotationY" in $ ? $.rotationY : "shortRotationY" in $ ? $.shortRotationY + "_short" : S.rotationY ||
                        0, S.rotationY, "rotationY", k)), u.skewX = ce($.skewX, S.skewX - S.skewY), (u.skewY = ce($.skewY,
                        S.skewY)) && (u.skewX += u.skewY, u.rotation += u.skewY)
                }
                for (Me && null != $.force3D && (S.force3D = $.force3D, f = !0), S.skewType = $.skewType || S.skewType ||
                    a.defaultSkewType, d = S.force3D || S.z || S.rotationX || S.rotationY || u.z || u.rotationX || u.rotationY ||
                    u.perspective, d || null == $.scale || (u.scaleZ = 1); --C > -1;) y = ke[C], O = u[y] - S[y], (O >
                        x || O < -x || null != $[y] || null != F[y]) && (f = !0, s = new ge(S, y, S[y], O, s), y in k &&
                        (s.e = k[y]), s.xs0 = 0, s.plugin = o, r._overwriteProps.push(s.n));
                return O = $.transformOrigin, S.svg && (O || $.svgOrigin) && (m = S.xOffset, g = S.yOffset, Ee(e, ae(O),
                    u, $.svgOrigin, $.smoothOrigin), s = we(S, "xOrigin", (b ? S : u).xOrigin, u.xOrigin, s, P), s = we(
                    S, "yOrigin", (b ? S : u).yOrigin, u.yOrigin, s, P), m === S.xOffset && g === S.yOffset || (s = we(
                    S, "xOffset", b ? m : S.xOffset, S.xOffset, s, P), s = we(S, "yOffset", b ? g : S.yOffset, S.yOffset,
                    s, P)), O = $e ? null : "0px 0px"), (O || Me && d && S.zOrigin) && (Pe ? (f = !0, y = Oe, O = (O ||
                    K(e, y, n, !1, "50% 50%")) + "", s = new ge(T, y, 0, 0, s, (-1), P), s.b = T[y], s.plugin = o, Me ?
                    (h = S.zOrigin, O = O.split(" "), S.zOrigin = (O.length > 2 && (0 === h || "0px" !== O[2]) ?
                    parseFloat(O[2]) : h) || 0, s.xs0 = s.e = O[0] + " " + (O[1] || "50%") + " 0px", s = new ge(S,
                    "zOrigin", 0, 0, s, (-1), s.n), s.b = h, s.xs0 = s.e = S.zOrigin) : s.xs0 = s.e = O) : ae(O + "", S)),
                    f && (r._transformType = S.svg && $e || !d && 3 !== this._transformType ? 2 : 3), c && (l[i] = c),
                    s
            },
            prefix: !0
        }), xe("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset"
        }), xe("borderRadius", {
            defaultValue: "0px",
            parser: function (e, t, i, s, a, o) {
                t = this.format(t);
                var l, c, u, h, d, f, p, m, v, _, g, w, y, b, T, x, C = ["borderTopLeftRadius", "borderTopRightRadius",
                            "borderBottomRightRadius", "borderBottomLeftRadius"],
                    $ = e.style;
                for (v = parseFloat(e.offsetWidth), _ = parseFloat(e.offsetHeight), l = t.split(" "), c = 0; c < C.length; c++)
                    this.p.indexOf("border") && (C[c] = Z(C[c])), d = h = K(e, C[c], n, !1, "0px"), d.indexOf(" ") !== -
                        1 && (h = d.split(" "), d = h[0], h = h[1]), f = u = l[c], p = parseFloat(d), w = d.substr((p +
                        "").length), y = "=" === f.charAt(1), y ? (m = parseInt(f.charAt(0) + "1", 10), f = f.substr(2),
                        m *= parseFloat(f), g = f.substr((m + "").length - (m < 0 ? 1 : 0)) || "") : (m = parseFloat(f),
                        g = f.substr((m + "").length)), "" === g && (g = r[i] || w), g !== w && (b = J(e, "borderLeft",
                        p, w), T = J(e, "borderTop", p, w), "%" === g ? (d = b / v * 100 + "%", h = T / _ * 100 + "%") :
                        "em" === g ? (x = J(e, "borderLeft", 1, "em"), d = b / x + "em", h = T / x + "em") : (d = b +
                        "px", h = T + "px"), y && (f = parseFloat(d) + m + g, u = parseFloat(h) + m + g)), a = ye($, C[
                        c], d + " " + h, f + " " + u, !1, "0px", a);
                return a
            },
            prefix: !0,
            formatter: me("0px 0px 0px 0px", !1, !0)
        }), xe("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
            defaultValue: "0px",
            parser: function (e, t, i, r, s, a) {
                return ye(e.style, i, this.format(K(e, i, n, !1, "0px 0px")), this.format(t), !1, "0px", s)
            },
            prefix: !0,
            formatter: me("0px 0px", !1, !0)
        }), xe("backgroundPosition", {
            defaultValue: "0 0",
            parser: function (e, t, i, r, s, a) {
                var o, l, c, u, h, d, f = "background-position",
                    p = n || G(e, null),
                    v = this.format((p ? m ? p.getPropertyValue(f + "-x") + " " + p.getPropertyValue(f + "-y") : p.getPropertyValue(
                        f) : e.currentStyle.backgroundPositionX + " " + e.currentStyle.backgroundPositionY) || "0 0"),
                    _ = this.format(t);
                if (v.indexOf("%") !== -1 != (_.indexOf("%") !== -1) && _.split(",").length < 2 && (d = K(e,
                    "backgroundImage").replace(O, ""), d && "none" !== d)) {
                    for (o = v.split(" "), l = _.split(" "), B.setAttribute("src", d), c = 2; --c > -1;) v = o[c], u =
                            v.indexOf("%") !== -1, u !== (l[c].indexOf("%") !== -1) && (h = 0 === c ? e.offsetWidth - B
                            .width : e.offsetHeight - B.height, o[c] = u ? parseFloat(v) / 100 * h + "px" : parseFloat(
                            v) / h * 100 + "%");
                    v = o.join(" ")
                }
                return this.parseComplex(e.style, v, _, s, a)
            },
            formatter: ae
        }), xe("backgroundSize", {
            defaultValue: "0 0",
            formatter: function (e) {
                return e += "", ae(e.indexOf(" ") === -1 ? e + " " + e : e)
            }
        }), xe("perspective", {
            defaultValue: "0px",
            prefix: !0
        }), xe("perspectiveOrigin", {
            defaultValue: "50% 50%",
            prefix: !0
        }), xe("transformStyle", {
            prefix: !0
        }), xe("backfaceVisibility", {
            prefix: !0
        }), xe("userSelect", {
            prefix: !0
        }), xe("margin", {
            parser: ve("marginTop,marginRight,marginBottom,marginLeft")
        }), xe("padding", {
            parser: ve("paddingTop,paddingRight,paddingBottom,paddingLeft")
        }), xe("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function (e, t, i, r, s, a) {
                var o, l, c;
                return m < 9 ? (l = e.currentStyle, c = m < 8 ? " " : ",", o = "rect(" + l.clipTop + c + l.clipRight +
                    c + l.clipBottom + c + l.clipLeft + ")", t = this.format(t).split(",").join(c)) : (o = this.format(
                    K(e, this.p, n, !1, this.dflt)), t = this.format(t)), this.parseComplex(e.style, o, t, s, a)
            }
        }), xe("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0
        }), xe("autoRound,strictUnits", {
            parser: function (e, t, i, r, n) {
                return n
            }
        }), xe("border", {
            defaultValue: "0px solid #000",
            parser: function (e, t, i, r, s, a) {
                var o = K(e, "borderTopWidth", n, !1, "0px"),
                    l = this.format(t).split(" "),
                    c = l[0].replace(T, "");
                return "px" !== c && (o = parseFloat(o) / J(e, "borderTopWidth", 1, c) + c), this.parseComplex(e.style,
                    this.format(o + " " + K(e, "borderTopStyle", n, !1, "solid") + " " + K(e, "borderTopColor", n, !1,
                    "#000")), l.join(" "), s, a)
            },
            color: !0,
            formatter: function (e) {
                var t = e.split(" ");
                return t[0] + " " + (t[1] || "solid") + " " + (e.match(pe) || ["#000"])[0]
            }
        }), xe("borderWidth", {
            parser: ve("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
        }), xe("float,cssFloat,styleFloat", {
            parser: function (e, t, i, r, n, s) {
                var a = e.style,
                    o = "cssFloat" in a ? "cssFloat" : "styleFloat";
                return new ge(a, o, 0, 0, n, (-1), i, (!1), 0, a[o], t)
            }
        });
        var Xe = function (e) {
            var t, i = this.t,
                r = i.filter || K(this.data, "filter") || "",
                n = this.s + this.c * e | 0;
            100 === n && (r.indexOf("atrix(") === -1 && r.indexOf("radient(") === -1 && r.indexOf("oader(") === -1 ? (i
                .removeAttribute("filter"), t = !K(this.data, "filter")) : (i.filter = r.replace($, ""), t = !0)), t ||
                (this.xn1 && (i.filter = r = r || "alpha(opacity=" + n + ")"), r.indexOf("pacity") === -1 ? 0 === n &&
                this.xn1 || (i.filter = r + " alpha(opacity=" + n + ")") : i.filter = r.replace(x, "opacity=" + n))
        };
        xe("opacity,alpha,autoAlpha", {
            defaultValue: "1",
            parser: function (e, t, i, r, s, a) {
                var o = parseFloat(K(e, "opacity", n, !1, "1")),
                    l = e.style,
                    c = "autoAlpha" === i;
                return "string" == typeof t && "=" === t.charAt(1) && (t = ("-" === t.charAt(0) ? -1 : 1) * parseFloat(
                    t.substr(2)) + o), c && 1 === o && "hidden" === K(e, "visibility", n) && 0 !== t && (o = 0), Y ? s =
                    new ge(l, "opacity", o, t - o, s) : (s = new ge(l, "opacity", 100 * o, 100 * (t - o), s), s.xn1 = c ?
                    1 : 0, l.zoom = 1, s.type = 2, s.b = "alpha(opacity=" + s.s + ")", s.e = "alpha(opacity=" + (s.s +
                    s.c) + ")", s.data = e, s.plugin = a, s.setRatio = Xe), c && (s = new ge(l, "visibility", 0, 0, s, (-
                    1), null, (!1), 0, 0 !== o ? "inherit" : "hidden", 0 === t ? "hidden" : "inherit"), s.xs0 =
                    "inherit", r._overwriteProps.push(s.n), r._overwriteProps.push(i)), s
            }
        });
        var Ye = function (e, t) {
            t && (e.removeProperty ? ("ms" !== t.substr(0, 2) && "webkit" !== t.substr(0, 6) || (t = "-" + t), e.removeProperty(
                t.replace(P, "-$1").toLowerCase())) : e.removeAttribute(t))
        }, Qe = function (e) {
                if (this.t._gsClassPT = this, 1 === e || 0 === e) {
                    this.t.setAttribute("class", 0 === e ? this.b : this.e);
                    for (var t = this.data, i = this.t.style; t;) t.v ? i[t.p] = t.v : Ye(i, t.p), t = t._next;
                    1 === e && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
            };
        xe("className", {
            parser: function (e, t, r, s, a, o, l) {
                var c, u, h, d, f, p = e.getAttribute("class") || "",
                    m = e.style.cssText;
                if (a = s._classNamePT = new ge(e, r, 0, 0, a, 2), a.setRatio = Qe, a.pr = -11, i = !0, a.b = p, u = te(
                    e, n), h = e._gsClassPT) {
                    for (d = {}, f = h.data; f;) d[f.p] = 1, f = f._next;
                    h.setRatio(1)
                }
                return e._gsClassPT = a, a.e = "=" !== t.charAt(1) ? t : p.replace(new RegExp("(?:\\s|^)" + t.substr(2) +
                    "(?![\\w-])"), "") + ("+" === t.charAt(0) ? " " + t.substr(2) : ""), e.setAttribute("class", a.e),
                    c = ie(e, u, te(e), l, d), e.setAttribute("class", p), a.data = c.firstMPT, e.style.cssText = m, a =
                    a.xfirst = s.parse(e, c.difs, a, o)
            }
        });
        var Ve = function (e) {
            if ((1 === e || 0 === e) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data
                .data) {
                var t, i, r, n, s, a = this.t.style,
                    o = l.transform.parse;
                if ("all" === this.e) a.cssText = "", n = !0;
                else for (t = this.e.split(" ").join("").split(","), r = t.length; --r > -1;) i = t[r], l[i] && (l[i].parse ===
                            o ? n = !0 : i = "transformOrigin" === i ? Oe : l[i].p), Ye(a, i);
                n && (Ye(a, Pe), s = this.t._gsTransform, s && (s.svg && (this.t.removeAttribute("data-svg-origin"),
                    this.t.removeAttribute("transform")), delete this.t._gsTransform))
            }
        };
        for (xe("clearProps", {
            parser: function (e, t, r, n, s) {
                return s = new ge(e, r, 0, 0, s, 2), s.setRatio = Ve, s.e = t, s.pr = -10, s.data = n._tween, i = !0, s
            }
        }), c = "bezier,throwProps,physicsProps,physics2D".split(","), be = c.length; be--;) Ce(c[be]);
        c = a.prototype, c._firstPT = c._lastParsedTransform = c._transform = null, c._onInitTween = function (e, t, o,
            c) {
            if (!e.nodeType) return !1;
            this._target = v = e, this._tween = o, this._vars = t, _ = c, u = t.autoRound, i = !1, r = t.suffixMap || a
                .suffixMap, n = G(e, ""), s = this._overwriteProps;
            var f, m, g, w, y, b, T, x, $, k = e.style;
            if (h && "" === k.zIndex && (f = K(e, "zIndex", n), "auto" !== f && "" !== f || this._addLazySet(k,
                "zIndex", 0)), "string" == typeof t && (w = k.cssText, f = te(e, n), k.cssText = w + ";" + t, f = ie(e,
                f, te(e)).difs, !Y && C.test(t) && (f.opacity = parseFloat(RegExp.$1)), t = f, k.cssText = w), t.className ?
                this._firstPT = m = l.className.parse(e, t.className, "className", this, null, null, t) : this._firstPT =
                m = this.parse(e, t, null), this._transformType) {
                for ($ = 3 === this._transformType, Pe ? d && (h = !0, "" === k.zIndex && (T = K(e, "zIndex", n),
                    "auto" !== T && "" !== T || this._addLazySet(k, "zIndex", 0)), p && this._addLazySet(k,
                    "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || ($ ? "visible" : "hidden"))) : k
                    .zoom = 1, g = m; g && g._next;) g = g._next;
                x = new ge(e, "transform", 0, 0, null, 2), this._linkCSSP(x, null, g), x.setRatio = Pe ? qe : Be, x.data =
                    this._transform || je(e, n, !0), x.tween = o, x.pr = -1, s.pop()
            }
            if (i) {
                for (; m;) {
                    for (b = m._next, g = w; g && g.pr > m.pr;) g = g._next;
                    (m._prev = g ? g._prev : y) ? m._prev._next = m : w = m, (m._next = g) ? g._prev = m : y = m, m = b
                }
                this._firstPT = w
            }
            return !0
        }, c.parse = function (e, t, i, s) {
            var a, o, c, h, d, f, p, m, g, w, y = e.style;
            for (a in t) f = t[a], "function" == typeof f && (f = f(_, v)), o = l[a], o ? i = o.parse(e, f, a, this, i,
                    s, t) : (d = K(e, a, n) + "", g = "string" == typeof f, "color" === a || "fill" === a || "stroke" ===
                    a || a.indexOf("Color") !== -1 || g && k.test(f) ? (g || (f = de(f), f = (f.length > 3 ? "rgba(" :
                    "rgb(") + f.join(",") + ")"), i = ye(y, a, d, f, !0, "transparent", i, 0, s)) : g && L.test(f) ? i =
                    ye(y, a, d, f, !0, null, i, 0, s) : (c = parseFloat(d), p = c || 0 === c ? d.substr((c + "").length) :
                    "", "" !== d && "auto" !== d || ("width" === a || "height" === a ? (c = se(e, a, n), p = "px") :
                    "left" === a || "top" === a ? (c = ee(e, a, n), p = "px") : (c = "opacity" !== a ? 0 : 1, p = "")),
                    w = g && "=" === f.charAt(1), w ? (h = parseInt(f.charAt(0) + "1", 10), f = f.substr(2), h *=
                    parseFloat(f), m = f.replace(T, "")) : (h = parseFloat(f), m = g ? f.replace(T, "") : ""), "" === m &&
                    (m = a in r ? r[a] : p), f = h || 0 === h ? (w ? h + c : h) + m : t[a], p !== m && "" !== m && (h ||
                    0 === h) && c && (c = J(e, a, c, p), "%" === m ? (c /= J(e, a, 100, "%") / 100, t.strictUnits !== !
                    0 && (d = c + "%")) : "em" === m || "rem" === m || "vw" === m || "vh" === m ? c /= J(e, a, 1, m) :
                    "px" !== m && (h = J(e, a, h, m), m = "px"), w && (h || 0 === h) && (f = h + c + m)), w && (h += c), !
                    c && 0 !== c || !h && 0 !== h ? void 0 !== y[a] && (f || f + "" != "NaN" && null != f) ? (i = new ge(
                    y, a, h || c || 0, 0, i, (-1), a, (!1), 0, d, f), i.xs0 = "none" !== f || "display" !== a && a.indexOf(
                    "Style") === -1 ? f : d) : V("invalid " + a + " tween value: " + t[a]) : (i = new ge(y, a, c, h - c,
                    i, 0, a, u !== !1 && ("px" === m || "zIndex" === a), 0, d, f), i.xs0 = m))), s && i && !i.plugin &&
                    (i.plugin = s);
            return i
        }, c.setRatio = function (e) {
            var t, i, r, n = this._firstPT,
                s = 1e-6;
            if (1 !== e || this._tween._time !== this._tween._duration && 0 !== this._tween._time) if (e || this._tween
                    ._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                    for (; n;) {
                        if (t = n.c * e + n.s, n.r ? t = Math.round(t) : t < s && t > -s && (t = 0), n.type) if (1 ===
                                n.type) if (r = n.l, 2 === r) n.t[n.p] = n.xs0 + t + n.xs1 + n.xn1 + n.xs2;
                                else if (3 === r) n.t[n.p] = n.xs0 + t + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3;
                        else if (4 === r) n.t[n.p] = n.xs0 + t + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3 + n.xn3 + n.xs4;
                        else if (5 === r) n.t[n.p] = n.xs0 + t + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3 + n.xn3 + n.xs4 +
                                n.xn4 + n.xs5;
                        else {
                            for (i = n.xs0 + t + n.xs1, r = 1; r < n.l; r++) i += n["xn" + r] + n["xs" + (r + 1)];
                            n.t[n.p] = i
                        } else n.type === -1 ? n.t[n.p] = n.xs0 : n.setRatio && n.setRatio(e);
                        else n.t[n.p] = t + n.xs0;
                        n = n._next
                } else for (; n;) 2 !== n.type ? n.t[n.p] = n.b : n.setRatio(e), n = n._next;
                else for (; n;) {
                        if (2 !== n.type) if (n.r && n.type !== -1) if (t = Math.round(n.s + n.c), n.type) {
                                    if (1 === n.type) {
                                        for (r = n.l, i = n.xs0 + t + n.xs1, r = 1; r < n.l; r++) i += n["xn" + r] + n[
                                                "xs" + (r + 1)];
                                        n.t[n.p] = i
                                    }
                                } else n.t[n.p] = t + n.xs0;
                                else n.t[n.p] = n.e;
                                else n.setRatio(e);
                        n = n._next
                }
        }, c._enableTransforms = function (e) {
            this._transform = this._transform || je(this._target, n, !0), this._transformType = this._transform.svg &&
                $e || !e && 3 !== this._transformType ? 2 : 3
        };
        var We = function (e) {
            this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
        };
        c._addLazySet = function (e, t, i) {
            var r = this._firstPT = new ge(e, t, 0, 0, this._firstPT, 2);
            r.e = i, r.setRatio = We, r.data = this
        }, c._linkCSSP = function (e, t, i, r) {
            return e && (t && (t._prev = e), e._next && (e._next._prev = e._prev), e._prev ? e._prev._next = e._next :
                this._firstPT === e && (this._firstPT = e._next, r = !0), i ? i._next = e : r || null !== this._firstPT ||
                (this._firstPT = e), e._next = t, e._prev = i), e
        }, c._mod = function (e) {
            for (var t = this._firstPT; t;) "function" == typeof e[t.p] && e[t.p] === Math.round && (t.r = 1), t = t._next
        }, c._kill = function (t) {
            var i, r, n, s = t;
            if (t.autoAlpha || t.alpha) {
                s = {};
                for (r in t) s[r] = t[r];
                s.opacity = 1, s.autoAlpha && (s.visibility = 1)
            }
            for (t.className && (i = this._classNamePT) && (n = i.xfirst, n && n._prev ? this._linkCSSP(n._prev, i._next,
                n._prev._prev) : n === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i
                ._next._next, n._prev), this._classNamePT = null), i = this._firstPT; i;) i.plugin && i.plugin !== r &&
                    i.plugin._kill && (i.plugin._kill(t), r = i.plugin), i = i._next;
            return e.prototype._kill.call(this, s)
        };
        var He = function (e, t, i) {
            var r, n, s, a;
            if (e.slice) for (n = e.length; --n > -1;) He(e[n], t, i);
            else for (r = e.childNodes, n = r.length; --n > -1;) s = r[n], a = s.type, s.style && (t.push(te(s)), i &&
                        i.push(s)), 1 !== a && 9 !== a && 11 !== a || !s.childNodes.length || He(s, t, i)
        };
        return a.cascadeTo = function (e, i, r) {
            var n, s, a, o, l = t.to(e, i, r),
                c = [l],
                u = [],
                h = [],
                d = [],
                f = t._internals.reservedProps;
            for (e = l._targets || l.target, He(e, u, d), l.render(i, !0, !0), He(e, h), l.render(0, !0, !0), l._enabled(!
                0), n = d.length; --n > -1;) if (s = ie(d[n], u[n], h[n]), s.firstMPT) {
                    s = s.difs;
                    for (a in r) f[a] && (s[a] = r[a]);
                    o = {};
                    for (a in s) o[a] = u[n][a];
                    c.push(t.fromTo(d[n], i, o, s))
                }
            return c
        }, e.activate([a]), a
    }, !0),
    function () {
        var e = _gsScope._gsDefine.plugin({
            propName: "roundProps",
            version: "1.6.0",
            priority: -1,
            API: 2,
            init: function (e, t, i) {
                return this._tween = i, !0
            }
        }),
            t = function (e) {
                for (; e;) e.f || e.blob || (e.m = Math.round), e = e._next
            }, i = e.prototype;
        i._onInitAllProps = function () {
            for (var e, i, r, n = this._tween, s = n.vars.roundProps.join ? n.vars.roundProps : n.vars.roundProps.split(
                    ","), a = s.length, o = {}, l = n._propLookup.roundProps; --a > -1;) o[s[a]] = Math.round;
            for (a = s.length; --a > -1;) for (e = s[a], i = n._firstPT; i;) r = i._next, i.pg ? i.t._mod(o) : i.n ===
                        e && (2 === i.f && i.t ? t(i.t._firstPT) : (this._add(i.t, e, i.s, i.c), r && (r._prev = i._prev),
                        i._prev ? i._prev._next = r : n._firstPT === i && (n._firstPT = r), i._next = i._prev = null, n
                        ._propLookup[e] = l)), i = r;
            return !1
        }, i._add = function (e, t, i, r) {
            this._addTween(e, t, i, i + r, t, Math.round), this._overwriteProps.push(t)
        }
    }(),
    function () {
        _gsScope._gsDefine.plugin({
            propName: "attr",
            API: 2,
            version: "0.6.0",
            init: function (e, t, i, r) {
                var n, s;
                if ("function" != typeof e.setAttribute) return !1;
                for (n in t) s = t[n], "function" == typeof s && (s = s(r, e)), this._addTween(e, "setAttribute", e.getAttribute(
                        n) + "", s + "", n, !1, n), this._overwriteProps.push(n);
                return !0
            }
        })
    }(), _gsScope._gsDefine.plugin({
        propName: "directionalRotation",
        version: "0.3.0",
        API: 2,
        init: function (e, t, i, r) {
            "object" != typeof t && (t = {
                rotation: t
            }), this.finals = {};
            var n, s, a, o, l, c, u = t.useRadians === !0 ? 2 * Math.PI : 360,
                h = 1e-6;
            for (n in t) "useRadians" !== n && (o = t[n], "function" == typeof o && (o = o(r, e)), c = (o + "").split(
                    "_"), s = c[0], a = parseFloat("function" != typeof e[n] ? e[n] : e[n.indexOf("set") || "function" !=
                    typeof e["get" + n.substr(3)] ? n : "get" + n.substr(3)]()), o = this.finals[n] = "string" ==
                    typeof s && "=" === s.charAt(1) ? a + parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2)) :
                    Number(s) || 0, l = o - a, c.length && (s = c.join("_"), s.indexOf("short") !== -1 && (l %= u, l !==
                    l % (u / 2) && (l = l < 0 ? l + u : l - u)), s.indexOf("_cw") !== -1 && l < 0 ? l = (l + 9999999999 *
                    u) % u - (l / u | 0) * u : s.indexOf("ccw") !== -1 && l > 0 && (l = (l - 9999999999 * u) % u - (l /
                    u | 0) * u)), (l > h || l < -h) && (this._addTween(e, n, a, a + l, n), this._overwriteProps.push(n)));
            return !0
        },
        set: function (e) {
            var t;
            if (1 !== e) this._super.setRatio.call(this, e);
            else for (t = this._firstPT; t;) t.f ? t.t[t.p](this.finals[t.p]) : t.t[t.p] = this.finals[t.p], t = t._next
        }
    })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function (e) {
        var t, i, r, n = _gsScope.GreenSockGlobals || _gsScope,
            s = n.com.greensock,
            a = 2 * Math.PI,
            o = Math.PI / 2,
            l = s._class,
            c = function (t, i) {
                var r = l("easing." + t, function () {}, !0),
                    n = r.prototype = new e;
                return n.constructor = r, n.getRatio = i, r
            }, u = e.register || function () {}, h = function (e, t, i, r, n) {
                var s = l("easing." + e, {
                    easeOut: new t,
                    easeIn: new i,
                    easeInOut: new r
                }, !0);
                return u(s, e), s
            }, d = function (e, t, i) {
                this.t = e, this.v = t, i && (this.next = i, i.prev = this, this.c = i.v - t, this.gap = i.t - e)
            }, f = function (t, i) {
                var r = l("easing." + t, function (e) {
                    this._p1 = e || 0 === e ? e : 1.70158, this._p2 = 1.525 * this._p1
                }, !0),
                    n = r.prototype = new e;
                return n.constructor = r, n.getRatio = i, n.config = function (e) {
                    return new r(e)
                }, r
            }, p = h("Back", f("BackOut", function (e) {
                return (e -= 1) * e * ((this._p1 + 1) * e + this._p1) + 1
            }), f("BackIn", function (e) {
                return e * e * ((this._p1 + 1) * e - this._p1)
            }), f("BackInOut", function (e) {
                return (e *= 2) < 1 ? .5 * e * e * ((this._p2 + 1) * e - this._p2) : .5 * ((e -= 2) * e * ((this._p2 +
                    1) * e + this._p2) + 2)
            })),
            m = l("easing.SlowMo", function (e, t, i) {
                t = t || 0 === t ? t : .7, null == e ? e = .7 : e > 1 && (e = 1), this._p = 1 !== e ? t : 0, this._p1 =
                    (1 - e) / 2, this._p2 = e, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
            }, !0),
            v = m.prototype = new e;
        return v.constructor = m, v.getRatio = function (e) {
            var t = e + (.5 - e) * this._p;
            return e < this._p1 ? this._calcEnd ? 1 - (e = 1 - e / this._p1) * e : t - (e = 1 - e / this._p1) * e * e *
                e * t : e > this._p3 ? this._calcEnd ? 1 - (e = (e - this._p3) / this._p1) * e : t + (e - t) * (e = (e -
                this._p3) / this._p1) * e * e * e : this._calcEnd ? 1 : t
        }, m.ease = new m(.7, .7), v.config = m.config = function (e, t, i) {
            return new m(e, t, i)
        }, t = l("easing.SteppedEase", function (e) {
            e = e || 1, this._p1 = 1 / e, this._p2 = e + 1
        }, !0), v = t.prototype = new e, v.constructor = t, v.getRatio = function (e) {
            return e < 0 ? e = 0 : e >= 1 && (e = .999999999), (this._p2 * e >> 0) * this._p1
        }, v.config = t.config = function (e) {
            return new t(e)
        }, i = l("easing.RoughEase", function (t) {
            t = t || {};
            for (var i, r, n, s, a, o, l = t.taper || "none", c = [], u = 0, h = 0 | (t.points || 20), f = h, p = t.randomize !== !
                    1, m = t.clamp === !0, v = t.template instanceof e ? t.template : null, _ = "number" == typeof t.strength ?
                    .4 * t.strength : .4; --f > -1;) i = p ? Math.random() : 1 / h * f, r = v ? v.getRatio(i) : i,
                    "none" === l ? n = _ : "out" === l ? (s = 1 - i, n = s * s * _) : "in" === l ? n = i * i * _ : i <
                    .5 ? (s = 2 * i, n = s * s * .5 * _) : (s = 2 * (1 - i), n = s * s * .5 * _), p ? r += Math.random() *
                    n - .5 * n : f % 2 ? r += .5 * n : r -= .5 * n, m && (r > 1 ? r = 1 : r < 0 && (r = 0)), c[u++] = {
                    x: i,
                    y: r
            };
            for (c.sort(function (e, t) {
                return e.x - t.x
            }), o = new d(1, 1, null), f = h; --f > -1;) a = c[f], o = new d(a.x, a.y, o);
            this._prev = new d(0, 0, 0 !== o.t ? o : o.next)
        }, !0), v = i.prototype = new e, v.constructor = i, v.getRatio = function (e) {
            var t = this._prev;
            if (e > t.t) {
                for (; t.next && e >= t.t;) t = t.next;
                t = t.prev
            } else for (; t.prev && e <= t.t;) t = t.prev;
            return this._prev = t, t.v + (e - t.t) / t.gap * t.c
        }, v.config = function (e) {
            return new i(e)
        }, i.ease = new i, h("Bounce", c("BounceOut", function (e) {
            return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ?
                7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
        }), c("BounceIn", function (e) {
            return (e = 1 - e) < 1 / 2.75 ? 1 - 7.5625 * e * e : e < 2 / 2.75 ? 1 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) :
                e < 2.5 / 2.75 ? 1 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 1 - (7.5625 * (e -= 2.625 / 2.75) * e +
                .984375)
        }), c("BounceInOut", function (e) {
            var t = e < .5;
            return e = t ? 1 - 2 * e : 2 * e - 1, e = e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 /
                2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) *
                e + .984375, t ? .5 * (1 - e) : .5 * e + .5
        })), h("Circ", c("CircOut", function (e) {
            return Math.sqrt(1 - (e -= 1) * e)
        }), c("CircIn", function (e) {
            return -(Math.sqrt(1 - e * e) - 1)
        }), c("CircInOut", function (e) {
            return (e *= 2) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
        })), r = function (t, i, r) {
            var n = l("easing." + t, function (e, t) {
                this._p1 = e >= 1 ? e : 1, this._p2 = (t || r) / (e < 1 ? e : 1), this._p3 = this._p2 / a * (Math.asin(
                    1 / this._p1) || 0), this._p2 = a / this._p2
            }, !0),
                s = n.prototype = new e;
            return s.constructor = n, s.getRatio = i, s.config = function (e, t) {
                return new n(e, t)
            }, n
        }, h("Elastic", r("ElasticOut", function (e) {
            return this._p1 * Math.pow(2, -10 * e) * Math.sin((e - this._p3) * this._p2) + 1
        }, .3), r("ElasticIn", function (e) {
            return -(this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2))
        }, .3), r("ElasticInOut", function (e) {
            return (e *= 2) < 1 ? -.5 * (this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2)) :
                this._p1 * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2) * .5 + 1
        }, .45)), h("Expo", c("ExpoOut", function (e) {
            return 1 - Math.pow(2, -10 * e)
        }), c("ExpoIn", function (e) {
            return Math.pow(2, 10 * (e - 1)) - .001
        }), c("ExpoInOut", function (e) {
            return (e *= 2) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
        })), h("Sine", c("SineOut", function (e) {
            return Math.sin(e * o)
        }), c("SineIn", function (e) {
            return -Math.cos(e * o) + 1
        }), c("SineInOut", function (e) {
            return -.5 * (Math.cos(Math.PI * e) - 1)
        })), l("easing.EaseLookup", {
            find: function (t) {
                return e.map[t]
            }
        }, !0), u(n.SlowMo, "SlowMo", "ease,"), u(i, "RoughEase", "ease,"), u(t, "SteppedEase", "ease,"), p
    }, !0)
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
function (e, t) {
    "use strict";
    var i = {}, r = e.GreenSockGlobals = e.GreenSockGlobals || e;
    if (!r.TweenLite) {
        var n, s, a, o, l, c = function (e) {
                var t, i = e.split("."),
                    n = r;
                for (t = 0; t < i.length; t++) n[i[t]] = n = n[i[t]] || {};
                return n
            }, u = c("com.greensock"),
            h = 1e-10,
            d = function (e) {
                var t, i = [],
                    r = e.length;
                for (t = 0; t !== r; i.push(e[t++]));
                return i
            }, f = function () {}, p = function () {
                var e = Object.prototype.toString,
                    t = e.call([]);
                return function (i) {
                    return null != i && (i instanceof Array || "object" == typeof i && !! i.push && e.call(i) === t)
                }
            }(),
            m = {}, v = function (n, s, a, o) {
                this.sc = m[n] ? m[n].sc : [], m[n] = this, this.gsClass = null, this.func = a;
                var l = [];
                this.check = function (u) {
                    for (var h, d, f, p, _, g = s.length, w = g; --g > -1;)(h = m[s[g]] || new v(s[g], [])).gsClass ? (
                            l[g] = h.gsClass, w--) : u && h.sc.push(this);
                    if (0 === w && a) {
                        if (d = ("com.greensock." + n).split("."), f = d.pop(), p = c(d.join("."))[f] = this.gsClass =
                            a.apply(a, l), o) if (r[f] = i[f] = p, _ = "undefined" != typeof module && module.exports, !
                                _ && "function" == typeof define && define.amd) define((e.GreenSockAMDPath ? e.GreenSockAMDPath +
                                    "/" : "") + n.split(".").pop(), [], function () {
                                    return p
                                });
                            else if (_) if (n === t) {
                                module.exports = i[t] = p;
                                for (g in i) p[g] = i[g]
                            } else i[t] && (i[t][f] = p);
                        for (g = 0; g < this.sc.length; g++) this.sc[g].check()
                    }
                }, this.check(!0)
            }, _ = e._gsDefine = function (e, t, i, r) {
                return new v(e, t, i, r)
            }, g = u._class = function (e, t, i) {
                return t = t || function () {}, _(e, [], function () {
                    return t
                }, i), t
            };
        _.globals = r;
        var w = [0, 0, 1, 1],
            y = g("easing.Ease", function (e, t, i, r) {
                this._func = e, this._type = i || 0, this._power = r || 0, this._params = t ? w.concat(t) : w
            }, !0),
            b = y.map = {}, T = y.register = function (e, t, i, r) {
                for (var n, s, a, o, l = t.split(","), c = l.length, h = (i || "easeIn,easeOut,easeInOut").split(","); --
                    c > -1;) for (s = l[c], n = r ? g("easing." + s, null, !0) : u.easing[s] || {}, a = h.length; --a > -
                        1;) o = h[a], b[s + "." + o] = b[o + s] = n[o] = e.getRatio ? e : e[o] || new e
            };
        for (a = y.prototype, a._calcEnd = !1, a.getRatio = function (e) {
            if (this._func) return this._params[0] = e, this._func.apply(null, this._params);
            var t = this._type,
                i = this._power,
                r = 1 === t ? 1 - e : 2 === t ? e : e < .5 ? 2 * e : 2 * (1 - e);
            return 1 === i ? r *= r : 2 === i ? r *= r * r : 3 === i ? r *= r * r * r : 4 === i && (r *= r * r * r * r),
                1 === t ? 1 - r : 2 === t ? r : e < .5 ? r / 2 : 1 - r / 2
        }, n = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], s = n.length; --s > -1;) a = n[s] + ",Power" + s,
                T(new y(null, null, 1, s), a, "easeOut", !0), T(new y(null, null, 2, s), a, "easeIn" + (0 === s ?
                ",easeNone" : "")), T(new y(null, null, 3, s), a, "easeInOut");
        b.linear = u.easing.Linear.easeIn, b.swing = u.easing.Quad.easeInOut;
        var x = g("events.EventDispatcher", function (e) {
            this._listeners = {}, this._eventTarget = e || this
        });
        a = x.prototype, a.addEventListener = function (e, t, i, r, n) {
            n = n || 0;
            var s, a, c = this._listeners[e],
                u = 0;
            for (this !== o || l || o.wake(), null == c && (this._listeners[e] = c = []), a = c.length; --a > -1;) s =
                    c[a], s.c === t && s.s === i ? c.splice(a, 1) : 0 === u && s.pr < n && (u = a + 1);
            c.splice(u, 0, {
                c: t,
                s: i,
                up: r,
                pr: n
            })
        }, a.removeEventListener = function (e, t) {
            var i, r = this._listeners[e];
            if (r) for (i = r.length; --i > -1;) if (r[i].c === t) return void r.splice(i, 1)
        }, a.dispatchEvent = function (e) {
            var t, i, r, n = this._listeners[e];
            if (n) for (t = n.length, t > 1 && (n = n.slice(0)), i = this._eventTarget; --t > -1;) r = n[t], r && (r.up ?
                        r.c.call(r.s || i, {
                        type: e,
                        target: i
                    }) : r.c.call(r.s || i))
        };
        var C = e.requestAnimationFrame,
            $ = e.cancelAnimationFrame,
            k = Date.now || function () {
                return (new Date).getTime()
            }, P = k();
        for (n = ["ms", "moz", "webkit", "o"], s = n.length; --s > -1 && !C;) C = e[n[s] + "RequestAnimationFrame"], $ =
                e[n[s] + "CancelAnimationFrame"] || e[n[s] + "CancelRequestAnimationFrame"];
        g("Ticker", function (e, t) {
            var i, r, n, s, a, c = this,
                u = k(),
                d = !(t === !1 || !C) && "auto",
                p = 500,
                m = 33,
                v = "tick",
                _ = function (e) {
                    var t, o, l = k() - P;
                    l > p && (u += l - m), P += l, c.time = (P - u) / 1e3, t = c.time - a, (!i || t > 0 || e === !0) &&
                        (c.frame++, a += t + (t >= s ? .004 : s - t), o = !0), e !== !0 && (n = r(_)), o && c.dispatchEvent(
                        v)
                };
            x.call(c), c.time = c.frame = 0, c.tick = function () {
                _(!0)
            }, c.lagSmoothing = function (e, t) {
                p = e || 1 / h, m = Math.min(t, p, 0)
            }, c.sleep = function () {
                null != n && (d && $ ? $(n) : clearTimeout(n), r = f, n = null, c === o && (l = !1))
            }, c.wake = function (e) {
                null !== n ? c.sleep() : e ? u += -P + (P = k()) : c.frame > 10 && (P = k() - p + 5), r = 0 === i ? f :
                    d && C ? C : function (e) {
                    return setTimeout(e, 1e3 * (a - c.time) + 1 | 0)
                }, c === o && (l = !0), _(2)
            }, c.fps = function (e) {
                return arguments.length ? (i = e, s = 1 / (i || 60), a = this.time + s, void c.wake()) : i
            }, c.useRAF = function (e) {
                return arguments.length ? (c.sleep(), d = e, void c.fps(i)) : d
            }, c.fps(e), setTimeout(function () {
                "auto" === d && c.frame < 5 && "hidden" !== document.visibilityState && c.useRAF(!1)
            }, 1500)
        }), a = u.Ticker.prototype = new u.events.EventDispatcher, a.constructor = u.Ticker;
        var S = g("core.Animation", function (e, t) {
            if (this.vars = t = t || {}, this._duration = this._totalDuration = e || 0, this._delay = Number(t.delay) ||
                0, this._timeScale = 1, this._active = t.immediateRender === !0, this.data = t.data, this._reversed = t
                .reversed === !0, V) {
                l || o.wake();
                var i = this.vars.useFrames ? Q : V;
                i.add(this, i._time), this.vars.paused && this.paused(!0)
            }
        });
        o = S.ticker = new u.Ticker, a = S.prototype, a._dirty = a._gc = a._initted = a._paused = !1, a._totalTime = a._time =
            0, a._rawPrevTime = -1, a._next = a._last = a._onUpdate = a._timeline = a.timeline = null, a._paused = !1;
        var O = function () {
            l && k() - P > 2e3 && o.wake(), setTimeout(O, 2e3)
        };
        O(), a.play = function (e, t) {
            return null != e && this.seek(e, t), this.reversed(!1).paused(!1)
        }, a.pause = function (e, t) {
            return null != e && this.seek(e, t), this.paused(!0)
        }, a.resume = function (e, t) {
            return null != e && this.seek(e, t), this.paused(!1)
        }, a.seek = function (e, t) {
            return this.totalTime(Number(e), t !== !1)
        }, a.restart = function (e, t) {
            return this.reversed(!1).paused(!1).totalTime(e ? -this._delay : 0, t !== !1, !0)
        }, a.reverse = function (e, t) {
            return null != e && this.seek(e || this.totalDuration(), t), this.reversed(!0).paused(!1)
        }, a.render = function (e, t, i) {}, a.invalidate = function () {
            return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, !this._gc &&
                this.timeline || this._enabled(!0), this
        }, a.isActive = function () {
            var e, t = this._timeline,
                i = this._startTime;
            return !t || !this._gc && !this._paused && t.isActive() && (e = t.rawTime()) >= i && e < i + this.totalDuration() /
                this._timeScale
        }, a._enabled = function (e, t) {
            return l || o.wake(), this._gc = !e, this._active = this.isActive(), t !== !0 && (e && !this.timeline ?
                this._timeline.add(this, this._startTime - this._delay) : !e && this.timeline && this._timeline._remove(
                this, !0)), !1
        }, a._kill = function (e, t) {
            return this._enabled(!1, !1)
        }, a.kill = function (e, t) {
            return this._kill(e, t), this
        }, a._uncache = function (e) {
            for (var t = e ? this : this.timeline; t;) t._dirty = !0, t = t.timeline;
            return this
        }, a._swapSelfInParams = function (e) {
            for (var t = e.length, i = e.concat(); --t > -1;) "{self}" === e[t] && (i[t] = this);
            return i
        }, a._callback = function (e) {
            var t = this.vars,
                i = t[e],
                r = t[e + "Params"],
                n = t[e + "Scope"] || t.callbackScope || this,
                s = r ? r.length : 0;
            switch (s) {
            case 0:
                i.call(n);
                break;
            case 1:
                i.call(n, r[0]);
                break;
            case 2:
                i.call(n, r[0], r[1]);
                break;
            default:
                i.apply(n, r)
            }
        }, a.eventCallback = function (e, t, i, r) {
            if ("on" === (e || "").substr(0, 2)) {
                var n = this.vars;
                if (1 === arguments.length) return n[e];
                null == t ? delete n[e] : (n[e] = t, n[e + "Params"] = p(i) && i.join("").indexOf("{self}") !== -1 ?
                    this._swapSelfInParams(i) : i, n[e + "Scope"] = r), "onUpdate" === e && (this._onUpdate = t)
            }
            return this
        }, a.delay = function (e) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + e - this._delay),
                this._delay = e, this) : this._delay
        }, a.duration = function (e) {
            return arguments.length ? (this._duration = this._totalDuration = e, this._uncache(!0), this._timeline.smoothChildTiming &&
                this._time > 0 && this._time < this._duration && 0 !== e && this.totalTime(this._totalTime * (e / this._duration), !
                0), this) : (this._dirty = !1, this._duration)
        }, a.totalDuration = function (e) {
            return this._dirty = !1, arguments.length ? this.duration(e) : this._totalDuration
        }, a.time = function (e, t) {
            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(e > this._duration ? this._duration :
                e, t)) : this._time
        }, a.totalTime = function (e, t, i) {
            if (l || o.wake(), !arguments.length) return this._totalTime;
            if (this._timeline) {
                if (e < 0 && !i && (e += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var r = this._totalDuration,
                        n = this._timeline;
                    if (e > r && !i && (e = r), this._startTime = (this._paused ? this._pauseTime : n._time) - (this._reversed ?
                        r - e : e) / this._timeScale, n._dirty || this._uncache(!1), n._timeline) for (; n._timeline;) n
                                ._timeline._time !== (n._startTime + n._totalTime) / n._timeScale && n.totalTime(n._totalTime, !
                                0), n = n._timeline
                }
                this._gc && this._enabled(!0, !1), this._totalTime === e && 0 !== this._duration || (I.length && H(),
                    this.render(e, t, !1), I.length && H())
            }
            return this
        }, a.progress = a.totalProgress = function (e, t) {
            var i = this.duration();
            return arguments.length ? this.totalTime(i * e, t) : i ? this._time / i : this.ratio
        }, a.startTime = function (e) {
            return arguments.length ? (e !== this._startTime && (this._startTime = e, this.timeline && this.timeline._sortChildren &&
                this.timeline.add(this, e - this._delay)), this) : this._startTime
        }, a.endTime = function (e) {
            return this._startTime + (0 != e ? this.totalDuration() : this.duration()) / this._timeScale
        }, a.timeScale = function (e) {
            if (!arguments.length) return this._timeScale;
            if (e = e || h, this._timeline && this._timeline.smoothChildTiming) {
                var t = this._pauseTime,
                    i = t || 0 === t ? t : this._timeline.totalTime();
                this._startTime = i - (i - this._startTime) * this._timeScale / e
            }
            return this._timeScale = e, this._uncache(!1)
        }, a.reversed = function (e) {
            return arguments.length ? (e != this._reversed && (this._reversed = e, this.totalTime(this._timeline && !
                this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) :
                this._reversed
        }, a.paused = function (e) {
            if (!arguments.length) return this._paused;
            var t, i, r = this._timeline;
            return e != this._paused && r && (l || e || o.wake(), t = r.rawTime(), i = t - this._pauseTime, !e && r.smoothChildTiming &&
                (this._startTime += i, this._uncache(!1)), this._pauseTime = e ? t : null, this._paused = e, this._active =
                this.isActive(), !e && 0 !== i && this._initted && this.duration() && (t = r.smoothChildTiming ? this._totalTime :
                (t - this._startTime) / this._timeScale, this.render(t, t === this._totalTime, !0))), this._gc && !e &&
                this._enabled(!0, !1), this
        };
        var M = g("core.SimpleTimeline", function (e) {
            S.call(this, 0, e), this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        a = M.prototype = new S, a.constructor = M, a.kill()._gc = !1, a._first = a._last = a._recent = null, a._sortChildren = !
            1, a.add = a.insert = function (e, t, i, r) {
            var n, s;
            if (e._startTime = Number(t || 0) + e._delay, e._paused && this !== e._timeline && (e._pauseTime = e._startTime +
                (this.rawTime() - e._startTime) / e._timeScale), e.timeline && e.timeline._remove(e, !0), e.timeline =
                e._timeline = this, e._gc && e._enabled(!0, !0), n = this._last, this._sortChildren) for (s = e._startTime; n &&
                    n._startTime > s;) n = n._prev;
            return n ? (e._next = n._next, n._next = e) : (e._next = this._first, this._first = e), e._next ? e._next._prev =
                e : this._last = e, e._prev = n, this._recent = e, this._timeline && this._uncache(!0), this
        }, a._remove = function (e, t) {
            return e.timeline === this && (t || e._enabled(!1, !0), e._prev ? e._prev._next = e._next : this._first ===
                e && (this._first = e._next), e._next ? e._next._prev = e._prev : this._last === e && (this._last = e._prev),
                e._next = e._prev = e.timeline = null, e === this._recent && (this._recent = this._last), this._timeline &&
                this._uncache(!0)), this
        }, a.render = function (e, t, i) {
            var r, n = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = e; n;) r = n._next, (n._active || e >= n._startTime && !
                    n._paused) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (e - n._startTime) *
                    n._timeScale, t, i) : n.render((e - n._startTime) * n._timeScale, t, i)), n = r
        }, a.rawTime = function () {
            return l || o.wake(), this._totalTime
        };
        var A = g("TweenLite", function (t, i, r) {
            if (S.call(this, i, r), this.render = A.prototype.render, null == t) throw "Cannot tween a null target.";
            this.target = t = "string" != typeof t ? t : A.selector(t) || t;
            var n, s, a, o = t.jquery || t.length && t !== e && t[0] && (t[0] === e || t[0].nodeType && t[0].style && !
                    t.nodeType),
                l = this.vars.overwrite;
            if (this._overwrite = l = null == l ? Y[A.defaultOverwrite] : "number" == typeof l ? l >> 0 : Y[l], (o || t instanceof Array ||
                t.push && p(t)) && "number" != typeof t[0]) for (this._targets = a = d(t), this._propLookup = [], this._siblings = [],
                    n = 0; n < a.length; n++) s = a[n], s ? "string" != typeof s ? s.length && s !== e && s[0] && (s[0] ===
                        e || s[0].nodeType && s[0].style && !s.nodeType) ? (a.splice(n--, 1), this._targets = a = a.concat(
                        d(s))) : (this._siblings[n] = Z(s, this, !1), 1 === l && this._siblings[n].length > 1 && K(s,
                        this, null, 1, this._siblings[n])) : (s = a[n--] = A.selector(s), "string" == typeof s && a.splice(
                        n + 1, 1)) : a.splice(n--, 1);
            else this._propLookup = {}, this._siblings = Z(t, this, !1), 1 === l && this._siblings.length > 1 && K(t,
                    this, null, 1, this._siblings);
            (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -
                h, this.render(Math.min(0, -this._delay)))
        }, !0),
            R = function (t) {
                return t && t.length && t !== e && t[0] && (t[0] === e || t[0].nodeType && t[0].style && !t.nodeType)
            }, D = function (e, t) {
                var i, r = {};
                for (i in e) X[i] || i in t && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !==
                        i && "className" !== i && "border" !== i || !(!j[i] || j[i] && j[i]._autoCSS) || (r[i] = e[i],
                        delete e[i]);
                e.css = r
            };
        a = A.prototype = new S, a.constructor = A, a.kill()._gc = !1, a.ratio = 0, a._firstPT = a._targets = a._overwrittenProps =
            a._startAt = null, a._notifyPluginsOfEnabled = a._lazy = !1, A.version = "1.19.0", A.defaultEase = a._ease =
            new y(null, null, 1, 1), A.defaultOverwrite = "auto", A.ticker = o, A.autoSleep = 120, A.lagSmoothing = function (
            e, t) {
            o.lagSmoothing(e, t)
        }, A.selector = e.$ || e.jQuery || function (t) {
            var i = e.$ || e.jQuery;
            return i ? (A.selector = i, i(t)) : "undefined" == typeof document ? t : document.querySelectorAll ?
                document.querySelectorAll(t) : document.getElementById("#" === t.charAt(0) ? t.substr(1) : t)
        };
        var I = [],
            L = {}, E = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
            z = function (e) {
                for (var t, i = this._firstPT, r = 1e-6; i;) t = i.blob ? e ? this.join("") : this.start : i.c * e + i.s,
                        i.m ? t = i.m(t, this._target || i.t) : t < r && t > -r && (t = 0), i.f ? i.fp ? i.t[i.p](i.fp,
                        t) : i.t[i.p](t) : i.t[i.p] = t, i = i._next
            }, F = function (e, t, i, r) {
                var n, s, a, o, l, c, u, h = [e, t],
                    d = 0,
                    f = "",
                    p = 0;
                for (h.start = e, i && (i(h), e = h[0], t = h[1]), h.length = 0, n = e.match(E) || [], s = t.match(E) || [],
                    r && (r._next = null, r.blob = 1, h._firstPT = h._applyPT = r), l = s.length, o = 0; o < l; o++) u =
                        s[o], c = t.substr(d, t.indexOf(u, d) - d), f += c || !o ? c : ",", d += c.length, p ? p = (p +
                        1) % 5 : "rgba(" === c.substr(-5) && (p = 1), u === n[o] || n.length <= o ? f += u : (f && (h.push(
                        f), f = ""), a = parseFloat(n[o]), h.push(a), h._firstPT = {
                        _next: h._firstPT,
                        t: h,
                        p: h.length - 1,
                        s: a,
                        c: ("=" === u.charAt(1) ? parseInt(u.charAt(0) + "1", 10) * parseFloat(u.substr(2)) :
                            parseFloat(u) - a) || 0,
                        f: 0,
                        m: p && p < 4 ? Math.round : 0
                    }), d += u.length;
                return f += t.substr(d), f && h.push(f), h.setRatio = z, h
            }, N = function (e, t, i, r, n, s, a, o, l) {
                "function" == typeof r && (r = r(l || 0, e));
                var c, u, h = "get" === i ? e[t] : i,
                    d = typeof e[t],
                    f = "string" == typeof r && "=" === r.charAt(1),
                    p = {
                        t: e,
                        p: t,
                        s: h,
                        f: "function" === d,
                        pg: 0,
                        n: n || t,
                        m: s ? "function" == typeof s ? s : Math.round : 0,
                        pr: 0,
                        c: f ? parseInt(r.charAt(0) + "1", 10) * parseFloat(r.substr(2)) : parseFloat(r) - h || 0
                    };
                if ("number" !== d && ("function" === d && "get" === i && (u = t.indexOf("set") || "function" != typeof e[
                    "get" + t.substr(3)] ? t : "get" + t.substr(3), p.s = h = a ? e[u](a) : e[u]()), "string" == typeof h &&
                    (a || isNaN(h)) ? (p.fp = a, c = F(h, r, o || A.defaultStringFilter, p), p = {
                    t: c,
                    p: "setRatio",
                    s: 0,
                    c: 1,
                    f: 2,
                    pg: 0,
                    n: n || t,
                    pr: 0,
                    m: 0
                }) : f || (p.s = parseFloat(h), p.c = parseFloat(r) - p.s || 0)), p.c) return (p._next = this._firstPT) &&
                        (p._next._prev = p), this._firstPT = p, p
            }, U = A._internals = {
                isArray: p,
                isSelector: R,
                lazyTweens: I,
                blobDif: F
            }, j = A._plugins = {}, B = U.tweenLookup = {}, q = 0,
            X = U.reservedProps = {
                ease: 1,
                delay: 1,
                overwrite: 1,
                onComplete: 1,
                onCompleteParams: 1,
                onCompleteScope: 1,
                useFrames: 1,
                runBackwards: 1,
                startAt: 1,
                onUpdate: 1,
                onUpdateParams: 1,
                onUpdateScope: 1,
                onStart: 1,
                onStartParams: 1,
                onStartScope: 1,
                onReverseComplete: 1,
                onReverseCompleteParams: 1,
                onReverseCompleteScope: 1,
                onRepeat: 1,
                onRepeatParams: 1,
                onRepeatScope: 1,
                easeParams: 1,
                yoyo: 1,
                immediateRender: 1,
                repeat: 1,
                repeatDelay: 1,
                data: 1,
                paused: 1,
                reversed: 1,
                autoCSS: 1,
                lazy: 1,
                onOverwrite: 1,
                callbackScope: 1,
                stringFilter: 1,
                id: 1
            }, Y = {
                none: 0,
                all: 1,
                auto: 2,
                concurrent: 3,
                allOnStart: 4,
                preexisting: 5,
                "true": 1,
                "false": 0
            }, Q = S._rootFramesTimeline = new M,
            V = S._rootTimeline = new M,
            W = 30,
            H = U.lazyRender = function () {
                var e, t = I.length;
                for (L = {}; --t > -1;) e = I[t], e && e._lazy !== !1 && (e.render(e._lazy[0], e._lazy[1], !0), e._lazy = !
                        1);
                I.length = 0
            };
        V._startTime = o.time, Q._startTime = o.frame, V._active = Q._active = !0, setTimeout(H, 1), S._updateRoot = A.render = function () {
            var e, t, i;
            if (I.length && H(), V.render((o.time - V._startTime) * V._timeScale, !1, !1), Q.render((o.frame - Q._startTime) *
                Q._timeScale, !1, !1), I.length && H(), o.frame >= W) {
                W = o.frame + (parseInt(A.autoSleep, 10) || 120);
                for (i in B) {
                    for (t = B[i].tweens, e = t.length; --e > -1;) t[e]._gc && t.splice(e, 1);
                    0 === t.length && delete B[i]
                }
                if (i = V._first, (!i || i._paused) && A.autoSleep && !Q._first && 1 === o._listeners.tick.length) {
                    for (; i && i._paused;) i = i._next;
                    i || o.sleep()
                }
            }
        }, o.addEventListener("tick", S._updateRoot);
        var Z = function (e, t, i) {
            var r, n, s = e._gsTweenID;
            if (B[s || (e._gsTweenID = s = "t" + q++)] || (B[s] = {
                target: e,
                tweens: []
            }), t && (r = B[s].tweens, r[n = r.length] = t, i)) for (; --n > -1;) r[n] === t && r.splice(n, 1);
            return B[s].tweens
        }, G = function (e, t, i, r) {
                var n, s, a = e.vars.onOverwrite;
                return a && (n = a(e, t, i, r)), a = A.onOverwrite, a && (s = a(e, t, i, r)), n !== !1 && s !== !1
            }, K = function (e, t, i, r, n) {
                var s, a, o, l;
                if (1 === r || r >= 4) {
                    for (l = n.length, s = 0; s < l; s++) if ((o = n[s]) !== t) o._gc || o._kill(null, e, t) && (a = !0);
                        else if (5 === r) break;
                    return a
                }
                var c, u = t._startTime + h,
                    d = [],
                    f = 0,
                    p = 0 === t._duration;
                for (s = n.length; --s > -1;)(o = n[s]) === t || o._gc || o._paused || (o._timeline !== t._timeline ? (
                        c = c || J(t, 0, p), 0 === J(o, c, p) && (d[f++] = o)) : o._startTime <= u && o._startTime + o.totalDuration() /
                        o._timeScale > u && ((p || !o._initted) && u - o._startTime <= 2e-10 || (d[f++] = o)));
                for (s = f; --s > -1;) if (o = d[s], 2 === r && o._kill(i, e, t) && (a = !0), 2 !== r || !o._firstPT &&
                        o._initted) {
                        if (2 !== r && !G(o, t)) continue;
                        o._enabled(!1, !1) && (a = !0)
                    }
                return a
            }, J = function (e, t, i) {
                for (var r = e._timeline, n = r._timeScale, s = e._startTime; r._timeline;) {
                    if (s += r._startTime, n *= r._timeScale, r._paused) return -100;
                    r = r._timeline
                }
                return s /= n, s > t ? s - t : i && s === t || !e._initted && s - t < 2 * h ? h : (s += e.totalDuration() /
                    e._timeScale / n) > t + h ? 0 : s - t - h
            };
        a._init = function () {
            var e, t, i, r, n, s, a = this.vars,
                o = this._overwrittenProps,
                l = this._duration,
                c = !! a.immediateRender,
                u = a.ease;
            if (a.startAt) {
                this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), n = {};
                for (r in a.startAt) n[r] = a.startAt[r];
                if (n.overwrite = !1, n.immediateRender = !0, n.lazy = c && a.lazy !== !1, n.startAt = n.delay = null,
                    this._startAt = A.to(this.target, 0, n), c) if (this._time > 0) this._startAt = null;
                    else if (0 !== l) return
            } else if (a.runBackwards && 0 !== l) if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(),
                        this._startAt = null;
                else {
                    0 !== this._time && (c = !1), i = {};
                    for (r in a) X[r] && "autoCSS" !== r || (i[r] = a[r]);
                    if (i.overwrite = 0, i.data = "isFromStart", i.lazy = c && a.lazy !== !1, i.immediateRender = c,
                        this._startAt = A.to(this.target, 0, i), c) {
                        if (0 === this._time) return
                    } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt =
                            null)
                }
            if (this._ease = u = u ? u instanceof y ? u : "function" == typeof u ? new y(u, a.easeParams) : b[u] || A.defaultEase :
                A.defaultEase, a.easeParams instanceof Array && u.config && (this._ease = u.config.apply(u, a.easeParams)),
                this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                for (s = this._targets.length, e = 0; e < s; e++) this._initProps(this._targets[e], this._propLookup[e] = {},
                        this._siblings[e], o ? o[e] : null, e) && (t = !0);
            else t = this._initProps(this.target, this._propLookup, this._siblings, o, 0); if (t && A._onPluginEvent(
                "_onInitAllProps", this), o && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !
                1)), a.runBackwards) for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
            this._onUpdate = a.onUpdate, this._initted = !0
        }, a._initProps = function (t, i, r, n, s) {
            var a, o, l, c, u, h;
            if (null == t) return !1;
            L[t._gsTweenID] && H(), this.vars.css || t.style && t !== e && t.nodeType && j.css && this.vars.autoCSS !== !
                1 && D(this.vars, t);
            for (a in this.vars) if (h = this.vars[a], X[a]) h && (h instanceof Array || h.push && p(h)) && h.join("").indexOf(
                        "{self}") !== -1 && (this.vars[a] = h = this._swapSelfInParams(h, this));
                else if (j[a] && (c = new j[a])._onInitTween(t, this.vars[a], this, s)) {
                for (this._firstPT = u = {
                    _next: this._firstPT,
                    t: c,
                    p: "setRatio",
                    s: 0,
                    c: 1,
                    f: 1,
                    n: a,
                    pg: 1,
                    pr: c._priority,
                    m: 0
                }, o = c._overwriteProps.length; --o > -1;) i[c._overwriteProps[o]] = this._firstPT;
                (c._priority || c._onInitAllProps) && (l = !0), (c._onDisable || c._onEnable) && (this._notifyPluginsOfEnabled = !
                    0), u._next && (u._next._prev = u)
            } else i[a] = N.call(this, t, a, "get", h, a, 0, null, this.vars.stringFilter, s);
            return n && this._kill(n, t) ? this._initProps(t, i, r, n, s) : this._overwrite > 1 && this._firstPT && r.length >
                1 && K(t, this, i, this._overwrite, r) ? (this._kill(i, t), this._initProps(t, i, r, n, s)) : (this._firstPT &&
                (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (L[t._gsTweenID] = !0),
                l)
        }, a.render = function (e, t, i) {
            var r, n, s, a, o = this._time,
                l = this._duration,
                c = this._rawPrevTime;
            if (e >= l - 1e-7) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(
                    1) : 1, this._reversed || (r = !0, n = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 ===
                    l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (e =
                    0), (c < 0 || e <= 0 && e >= -1e-7 || c === h && "isPause" !== this.data) && c !== e && (i = !0, c >
                    h && (n = "onReverseComplete")), this._rawPrevTime = a = !t || e || c === e ? e : h);
            else if (e < 1e-7) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(
                    0) : 0, (0 !== o || 0 === l && c > 0) && (n = "onReverseComplete", r = this._reversed), e < 0 && (
                    this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (c >= 0 && (c !== h ||
                    "isPause" !== this.data) && (i = !0), this._rawPrevTime = a = !t || e || c === e ? e : h)), this._initted ||
                    (i = !0);
            else if (this._totalTime = this._time = e, this._easeType) {
                var u = e / l,
                    d = this._easeType,
                    f = this._easePower;
                (1 === d || 3 === d && u >= .5) && (u = 1 - u), 3 === d && (u *= 2), 1 === f ? u *= u : 2 === f ? u *=
                    u * u : 3 === f ? u *= u * u * u : 4 === f && (u *= u * u * u * u), 1 === d ? this.ratio = 1 - u :
                    2 === d ? this.ratio = u : e / l < .5 ? this.ratio = u / 2 : this.ratio = 1 - u / 2
            } else this.ratio = this._ease.getRatio(e / l); if (this._time !== o || i) {
                if (!this._initted) {
                    if (this._init(), !this._initted || this._gc) return;
                    if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration))
                        return this._time = this._totalTime = o, this._rawPrevTime = c, I.push(this), void(this._lazy = [
                                e, t]);
                    this._time && !r ? this.ratio = this._ease.getRatio(this._time / l) : r && this._ease._calcEnd && (
                        this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== o && e >=
                    0 && (this._active = !0), 0 === o && (this._startAt && (e >= 0 ? this._startAt.render(e, t, i) : n ||
                    (n = "_dummyGS")), this.vars.onStart && (0 === this._time && 0 !== l || t || this._callback(
                    "onStart"))), s = this._firstPT; s;) s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this
                        .ratio + s.s, s = s._next;
                this._onUpdate && (e < 0 && this._startAt && e !== -1e-4 && this._startAt.render(e, t, i), t || (this._time !==
                    o || r || i) && this._callback("onUpdate")), n && (this._gc && !i || (e < 0 && this._startAt && !
                    this._onUpdate && e !== -1e-4 && this._startAt.render(e, t, i), r && (this._timeline.autoRemoveChildren &&
                    this._enabled(!1, !1), this._active = !1), !t && this.vars[n] && this._callback(n), 0 === l && this
                    ._rawPrevTime === h && a !== h && (this._rawPrevTime = 0)))
            }
        }, a._kill = function (e, t, i) {
            if ("all" === e && (e = null), null == e && (null == t || t === this.target)) return this._lazy = !1, this._enabled(!
                    1, !1);
            t = "string" != typeof t ? t || this._targets || this.target : A.selector(t) || t;
            var r, n, s, a, o, l, c, u, h, d = i && this._time && i._startTime === this._startTime && this._timeline ===
                    i._timeline;
            if ((p(t) || R(t)) && "number" != typeof t[0]) for (r = t.length; --r > -1;) this._kill(e, t[r], i) && (l = !
                        0);
            else {
                if (this._targets) {
                    for (r = this._targets.length; --r > -1;) if (t === this._targets[r]) {
                            o = this._propLookup[r] || {}, this._overwrittenProps = this._overwrittenProps || [], n =
                                this._overwrittenProps[r] = e ? this._overwrittenProps[r] || {} : "all";
                            break
                        }
                } else {
                    if (t !== this.target) return !1;
                    o = this._propLookup, n = this._overwrittenProps = e ? this._overwrittenProps || {} : "all"
                } if (o) {
                    if (c = e || o, u = e !== n && "all" !== n && e !== o && ("object" != typeof e || !e._tempKill), i &&
                        (A.onOverwrite || this.vars.onOverwrite)) {
                        for (s in c) o[s] && (h || (h = []), h.push(s));
                        if ((h || !e) && !G(this, i, t, h)) return !1
                    }
                    for (s in c)(a = o[s]) && (d && (a.f ? a.t[a.p](a.s) : a.t[a.p] = a.s, l = !0), a.pg && a.t._kill(c) &&
                            (l = !0), a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next :
                            a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), a._next =
                            a._prev = null), delete o[s]), u && (n[s] = 1);
                    !this._firstPT && this._initted && this._enabled(!1, !1)
                }
            }
            return l
        }, a.invalidate = function () {
            return this._notifyPluginsOfEnabled && A._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps =
                this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1,
                this._propLookup = this._targets ? {} : [], S.prototype.invalidate.call(this), this.vars.immediateRender &&
                (this._time = -h, this.render(Math.min(0, -this._delay))), this
        }, a._enabled = function (e, t) {
            if (l || o.wake(), e && this._gc) {
                var i, r = this._targets;
                if (r) for (i = r.length; --i > -1;) this._siblings[i] = Z(r[i], this, !0);
                else this._siblings = Z(this.target, this, !0)
            }
            return S.prototype._enabled.call(this, e, t), !(!this._notifyPluginsOfEnabled || !this._firstPT) && A._onPluginEvent(
                e ? "_onEnable" : "_onDisable", this)
        }, A.to = function (e, t, i) {
            return new A(e, t, i)
        }, A.from = function (e, t, i) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new A(e, t, i)
        }, A.fromTo = function (e, t, i, r) {
            return r.startAt = i, r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender, new A(e, t, r)
        }, A.delayedCall = function (e, t, i, r, n) {
            return new A(t, 0, {
                delay: e,
                onComplete: t,
                onCompleteParams: i,
                callbackScope: r,
                onReverseComplete: t,
                onReverseCompleteParams: i,
                immediateRender: !1,
                lazy: !1,
                useFrames: n,
                overwrite: 0
            })
        }, A.set = function (e, t) {
            return new A(e, 0, t)
        }, A.getTweensOf = function (e, t) {
            if (null == e) return [];
            e = "string" != typeof e ? e : A.selector(e) || e;
            var i, r, n, s;
            if ((p(e) || R(e)) && "number" != typeof e[0]) {
                for (i = e.length, r = []; --i > -1;) r = r.concat(A.getTweensOf(e[i], t));
                for (i = r.length; --i > -1;) for (s = r[i], n = i; --n > -1;) s === r[n] && r.splice(i, 1)
            } else for (r = Z(e).concat(), i = r.length; --i > -1;)(r[i]._gc || t && !r[i].isActive()) && r.splice(i, 1);
            return r
        }, A.killTweensOf = A.killDelayedCallsTo = function (e, t, i) {
            "object" == typeof t && (i = t, t = !1);
            for (var r = A.getTweensOf(e, t), n = r.length; --n > -1;) r[n]._kill(i, e)
        };
        var ee = g("plugins.TweenPlugin", function (e, t) {
            this._overwriteProps = (e || "").split(","), this._propName = this._overwriteProps[0], this._priority = t ||
                0, this._super = ee.prototype
        }, !0);
        if (a = ee.prototype, ee.version = "1.19.0", ee.API = 2, a._firstPT = null, a._addTween = N, a.setRatio = z, a._kill = function (
            e) {
            var t, i = this._overwriteProps,
                r = this._firstPT;
            if (null != e[this._propName]) this._overwriteProps = [];
            else for (t = i.length; --t > -1;) null != e[i[t]] && i.splice(t, 1);
            for (; r;) null != e[r.n] && (r._next && (r._next._prev = r._prev), r._prev ? (r._prev._next = r._next, r._prev =
                    null) : this._firstPT === r && (this._firstPT = r._next)), r = r._next;
            return !1
        }, a._mod = a._roundProps = function (e) {
            for (var t, i = this._firstPT; i;) t = e[this._propName] || null != i.n && e[i.n.split(this._propName + "_")
                    .join("")], t && "function" == typeof t && (2 === i.f ? i.t._applyPT.m = t : i.m = t), i = i._next
        }, A._onPluginEvent = function (e, t) {
            var i, r, n, s, a, o = t._firstPT;
            if ("_onInitAllProps" === e) {
                for (; o;) {
                    for (a = o._next, r = n; r && r.pr > o.pr;) r = r._next;
                    (o._prev = r ? r._prev : s) ? o._prev._next = o : n = o, (o._next = r) ? r._prev = o : s = o, o = a
                }
                o = t._firstPT = n
            }
            for (; o;) o.pg && "function" == typeof o.t[e] && o.t[e]() && (i = !0), o = o._next;
            return i
        }, ee.activate = function (e) {
            for (var t = e.length; --t > -1;) e[t].API === ee.API && (j[(new e[t])._propName] = e[t]);
            return !0
        }, _.plugin = function (e) {
            if (!(e && e.propName && e.init && e.API)) throw "illegal plugin definition.";
            var t, i = e.propName,
                r = e.priority || 0,
                n = e.overwriteProps,
                s = {
                    init: "_onInitTween",
                    set: "setRatio",
                    kill: "_kill",
                    round: "_mod",
                    mod: "_mod",
                    initAll: "_onInitAllProps"
                }, a = g("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function () {
                    ee.call(this, i, r), this._overwriteProps = n || []
                }, e.global === !0),
                o = a.prototype = new ee(i);
            o.constructor = a, a.API = e.API;
            for (t in s) "function" == typeof e[t] && (o[s[t]] = e[t]);
            return a.version = e.version, ee.activate([a]), a
        }, n = e._gsQueue) {
            for (s = 0; s < n.length; s++) n[s]();
            for (a in m) m[a].func || e.console.log("GSAP encountered missing dependency: " + a)
        }
        l = !1
    }
}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax");
var m1App = angular.module("m1App", ["ngRoute", "apps.services", "apps.directives", "apps.filters", "m1.services",
        "m1.controllers", "common-templates", "templates", "ng-translation"]),
    m1Services = angular.module("m1.services", []),
    m1Controllers = angular.module("m1.controllers", []),
    appsServices = angular.module("apps.services", ["ngCookies"]),
    appsFilters = angular.module("apps.filters", []),
    appsDirectives = angular.module("apps.directives", []),
    pageName = "",
    isMobile = function () {
        var e = window.devicePixelRatio || 1;
        return $(window).width() <= 736 && (screen.width <= 736 || e >= 2)
    };
m1App.config(["$routeProvider", "$locationProvider", "ngTranslationProvider", "NavigatorProvider", function (e, t, i, r) {
        r.init();
        var n = {}, s = r.language;
        n[s] = s, i.setDirectory("lang").setFilesSuffix(".json").langsFiles(n).fallbackLanguage("cn"), e.when(
            "/overview", {
            templateUrl: function () {
                var e = "view/html/overview.html";
                return isMobile() && (e = "view/html/overview-mobile.html"), pageName = "overview", e
            },
            controller: "OverviewCtrl"
        }), e.when("/design", {
            templateUrl: function () {
                var e = "view/html/design.html";
                return isMobile() && (e = "view/html/design-mobile.html"), e
            },
            controller: "DesignCtrl"
        }), e.when("/specs", {
            templateUrl: function () {
                var e = "view/html/specs.html";
                return isMobile() && (e = "view/html/specs-mobile.html"), e
            },
            controller: "SpecsCtrl"
        }), e.when("/camera", {
            templateUrl: function () {
                var e = "view/html/camera.html";
                return isMobile() && (e = "view/html/camera-mobile.html"), e
            },
            controller: "CameraCtrl"
        }), e.when("/features", {
            templateUrl: function () {
                pageName = "features";
                var e = "view/html/features.html";
                return isMobile() && (e = "view/html/features-mobile.html"), e
            },
            controller: "FeaturesCtrl"
        }), e.when("/os", {
            templateUrl: function () {
                var e = "view/html/os.html";
                return isMobile() && (e = "view/html/os-mobile.html"), e
            },
            controller: "OsCtrl"
        }), e.otherwise({
            redirectTo: "/overview"
        }), t.html5Mode(!1)
    }]), m1App.run(["$rootScope", "PageScroll", "BlockImages", "Utils", "ngTranslation", "Navigator", "TitleBar", function (
        e, t, i, r, n, s, a) {
        e.titleBar = {
            navBtnName: "现在购买",
            navBtnUrl: "http://www.smartisan.com/shop/#/buyphone/m1"
        }, e.isMobile = s.isMobile, e.lang = s.language, n.use(e.lang), e.$on("$routeChangeStart", function (r, n, s) {
            e.loading = !0, t.reset(), $(".header").removeClass("header-t2-black"), $(".header-sub").removeClass(
                "fixed header-dark"), i.init(), $(window).off("scroll.features")
        }), e.$on("$routeChangeSuccess", function (t, i, n) {
            var s = "theme-t2";
            "/design" != i.originalPath && "/features" != i.originalPath || (s = "theme-t2-black"), a.setOptions({
                aside: " ",
                theme: s
            }), e.loading = !1, r.setHeaderActive("m1")
        })
    }]), appsServices.factory("CartRequest", ["$rootScope", "$http", "$q", "$location", "Config", "Utils", function (e,
        t, i, r, n, s) {
        var a, o = n.URI,
            l = /\{(\D+)\}/,
            c = navigator.userAgent.toLowerCase(),
            u = r.host().indexOf("www.smartisan.com") > -1,
            h = /msie/.test(c) || /rv:11.0/.test(c),
            d = "",
            f = "",
            p = n.headconfig;
        h && e.isMobile && (f = "&_=" + (new Date).getTime());
        var m = function (e, r) {
            var n, l = r ? r : "store";
            return function (r) {
                var c = i.defer();
                return d = o[l], a = d + e + f, n = s.toKeyValue(r), t.post(a, n, p).success(function (e) {
                    c.resolve(e)
                }).error(function () {
                    c.reject("网络异常!")
                }), c.promise
            }
        }, v = function (e, r) {
                var n = e,
                    c = l.exec(e),
                    h = r ? r : "midWare";
                return function (r) {
                    var l = i.defer();
                    return c && (n = e.replace(c[0], r[c[1]]), delete r[c[1]]), d = u ? o[h] : o["__" + h], a = d + n +
                        "?" + s.toKeyValue(r) + f, t.get(a).success(function (e) {
                        l.resolve(e)
                    }).error(function () {
                        l.reject("网络异常!")
                    }), l.promise
                }
            };
        return {
            checkAccount: m("account/check", "serv"),
            bargains: m("bargains/all", "serv"),
            sync: m("ShoppingCart/Sync"),
            del: m("ShoppingCart/Del"),
            save: m("ShoppingCart/Save"),
            cdkeyGetInfo: m("Cdkey/GetInfo"),
            addressList: m("Address/GetList"),
            addressDelete: m("Address/Delete"),
            addressAdd: m("Address/Add"),
            addressUpdate: m("Address/Update"),
            moodOrder: m("mood/order", "beike"),
            getReminder: m("Reserve/Info"),
            redeemCodeExchange: m("RedeemCode/Exchange"),
            getBase: m("fudai/Lottery/Base", "base"),
            getRandom: m("fudai/Lottery/LuckyDraw", "base"),
            postRecord: m("fudai/Lottery/Record", "base"),
            getProvince: m("Areas/Province", "base"),
            getCity: m("Areas/City", "base"),
            getDistrict: m("Areas/Area", "base"),
            recruiting: m("recruit/create", "base"),
            finderRecruiting: m("finder/create", "base"),
            getAwardList: m("lottery/winlist"),
            lotteryDraw: m("lottery/draw"),
            getSkusInfo: v("skus"),
            getSingleSkuInfo: v("skus/{skuId}"),
            getFeatureList: v("featured"),
            getCategoryList: v("shop_categories"),
            getSpusList: v("spus"),
            getDiscountList: v("promotions"),
            getHome: v("home"),
            getStockList: v("stocks")
        }
    }]), appsServices.factory("Utils", ["$rootScope", "$q", "$http", "$location", "$cookies", function (e, t, i, r, n) {
        var s = {};
        return s.truncateChars = function (e, t, i, r) {
            if (e) {
                var n = e.replace(/[\u4e00-\u9fa5\s]/g, "**").length,
                    s = [],
                    a = 0;
                if (r) {
                    var o = $("<div></div>").html(e);
                    e = o.text(), o = null
                }
                if (n <= t) return e;
                for (var l = 0; l < n; l++) {
                    var c = e.charAt(l);
                    if (a += /[^\x00-\xff]/.test(c) ? 2 : 1, s.push(c), a >= t) break
                }
                return i ? s.join("") + "..." : s.join("")
            }
            return ""
        }, s.encodeUriQuery = function (e, t) {
            return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(
                /%2C/gi, ",").replace(/%20/g, t ? "%20" : "+")
        }, s.toKeyValue = function (e) {
            var t = this,
                i = [];
            return angular.forEach(e, function (e, r) {
                angular.isArray(e) ? angular.forEach(e, function (e) {
                    i.push(t.encodeUriQuery(r, !0) + (e === !0 ? "" : "=" + t.encodeUriQuery(e, !0)))
                }) : i.push(t.encodeUriQuery(r, !0) + "=" + t.encodeUriQuery(e, !0))
            }), i.length ? i.join("&") : ""
        }, s.shareWeibo = function (e, t, i, r, n) {
            var s = e || $(".share-btn"),
                a = null;
            a = n ? encodeURIComponent(n) : encodeURIComponent(location.href);
            var o = i || "",
                l = "http://service.weibo.com/share/share.php?appkey=",
                c = r || $(".share-weibo-cover").attr("src"),
                u = encodeURIComponent(this.truncateChars(o, 232, !0));
            l += "&title=" + u, l += "&url=" + a, c && (l += "&pic=" + encodeURIComponent(c)), s.attr("href", l)
        }, s.setTitle = function (e, t) {
            var i = window.navigator.userAgent;
            "undefined" == typeof t ? document.title = e : document.title = e + " - " + t, window.onParseHtml &&
                /SmartisanSupport/.test(i) && window.onParseHtml.setTitleBar(e)
        }, s.setKeywords = function (e) {
            e && "" !== e && $("meta[name='keywords']").attr({
                content: e
            })
        }, s.setDescription = function (e) {
            e && "" !== e && $("meta[name='description']").attr({
                content: e
            })
        }, s.setMobileTitle = function (t) {
            var i = "";
            "undefined" == typeof t.text ? i = "en" == e.lang ?
                '<a href="http://www.smartisan.com/en/#/home"><span class="logo-pic"></span></a>' :
                '<a href="http://www.smartisan.com/#/home"><span class="logo-pic"></span></a>' : i += "undefined" ==
                typeof t.url ? t.text : '<a href="' + t.url + '">' + t.text + "</a>", $(".mobile-title").html(i)
        }, s.setCrumbs = function (e) {
            for (var t = "", i = 0; i < e.length; i++) t += "undefined" == typeof e[i].url ? e[i].title : '<a href="' +
                    e[i].url + '">' + e[i].title + "</a>", i + 1 < e.length && (t += '<span class="arrow"></span>');
            $(".header-crumbs").length ? $(".header-crumbs").html(t) : $(".breadcrumb").html(t)
        }, s.setT1Crumbs = function (e, t) {
            e && $(".header-sub .breadcrumb").removeClass("hide");
            var i = "";
            t && (i += '<h2 class="phone-logo"></h2>'), i += '<ul class="t1Crumbs">';
            for (var r = e.currentPage, n = 0; n < e.list.length; n++) {
                var s = "";
                r && e.list[n].url.indexOf(r) > 0 && (s = "on"), i = i + '<li class="' + s + '"><a href="' + e.list[n].url +
                    '">' + e.list[n].title + "</a></li>"
            }
            i += "</ul>", $(".breadcrumb").html(i)
        }, s.setTCrumbs = function (e, t, i) {
            e && $(".header-sub .breadcrumb").removeClass("hide");
            var r = "";
            i && (r += '<h2 class="device-logo"></h2>'), t || (t = "device-nav"), r += '<ul class="' + t + '">';
            for (var n = e.currentPage, s = 0; s < e.list.length; s++) {
                var a = "";
                n && e.list[s].url.indexOf(n) > 0 && (a = "active"), r = r + '<li class="' + a + '"><a href="' + e.list[
                    s].url + '">' + e.list[s].title + "</a></li>"
            }
            r += "</ul>", $(".breadcrumb").html(r)
        }, s.setTCrumbs = function (e, t, i) {
            e && $(".header-sub .breadcrumb").removeClass("hide");
            var r = "";
            i && (r += '<h2 class="device-logo"></h2>'), t || (t = "device-nav"), r += '<ul class="' + t + '">';
            for (var n = e.currentPage, s = 0; s < e.list.length; s++) {
                var a = "";
                n && e.list[s].url.indexOf(n) > 0 && (a = "active"), r = r + '<li class="' + a + '"><a href="' + e.list[
                    s].url + '">' + e.list[s].title + "</a></li>"
            }
            r += "</ul>", $(".breadcrumb").html(r)
        }, s.openServiceWindow = function () {
            if (this.isMobile()) _MEIQIA._SHOWPANEL({
                    groupToken: "9aea609f9936e156d06f97654413fbb2"
                });
            else {
                var e = decodeURIComponent("https://static.meiqia.com/dist/standalone.html?eid=8921"),
                    t = $('<a><span id="meiqia-a"></span></a>');
                t.attr("href", e).attr("target", "_blank"), $("body").append(t), $("#meiqia-a").click()
            }
        }, s.showMore = function (e, t) {
            var i = e.height(),
                r = e.find("h3").outerHeight() + e.find("ul").outerHeight();
            r > i && (t.css({
                display: "block"
            }), t.bind("click", function () {
                e.find(".feature-wrapper").css({
                    height: "auto"
                }), t.hide()
            }))
        }, s.isMobile = function () {
            var e = window.devicePixelRatio || 1;
            return $(window).width() <= 736 && (screen.width <= 736 || e >= 2)
        }, s.isUCMobile = function () {
            var e = window.devicePixelRatio || 1,
                t = navigator.userAgent.toLowerCase(),
                i = /(ucweb)|(ucbrowser)/i.test(t);
            return !!($(window).width() <= 736 && (screen.width <= 736 || e >= 2) && i)
        }, s.isWeixin = function () {
            var e = navigator.userAgent.toLowerCase();
            return "micromessenger" == e.match(/MicroMessenger/i)
        }, s.isMobileQQ = function () {
            var e = navigator.userAgent.toLowerCase();
            return "qq/" == e.match(/qq\//i)
        }, s.isIphone = function () {
            var e = navigator.userAgent.toLowerCase();
            return "iphone" == e.match(/iphone/i)
        }, s.isAndroid = function () {
            var e = navigator.userAgent.toLowerCase();
            return "android" == e.match(/android/i)
        }, s.mobileGuide = function (e) {
            function t() {
                a.show(), setTimeout(function () {
                    var e = o > r.height() ? o : r.height();
                    a.css({
                        height: e
                    })
                }, 700), a.bind("click", function () {
                    a.hide()
                })
            }
            var i = this,
                r = $(document.body),
                n = $("#download-android"),
                s = $("#download-iPhone"),
                a = $("#mobileGuide"),
                o = window.screen.availHeight;
            this.isWeixin() || this.isMobileQQ() || this.isIphone() || !s.attr("href") || !s.attr("href").match(/^http/) ||
                $(".desc-download .for-iphone").attr("target", "_blank"), this.isWeixin() && (i.isIphone() ? s.bind(
                "click", function (e) {
                return t(), a.find("img").hide(), a.find(".guide-iOS-download").show(), !1
            }) : n.bind("click", function (e) {
                return t(), a.find("img").hide(), a.find(".guide-android-download").show(), !1
            })), location.href.match(/\QR_download/) ? this.isAndroid() ? this.isWeixin() || this.isMobileQQ() ? (t(),
                a.find(".guide-android-download").show()) : setTimeout(function () {
                location.href = n.attr("href")
            }, 2e3) : this.isIphone() && (this.isWeixin() || this.isMobileQQ() ? (t(), a.find(".guide-iOS-download").show()) :
                setTimeout(function () {
                location.href = s.attr("href")
            }, 2e3)) : location.href.match(/\QR_share/) && (this.isWeixin() || this.isMobileQQ()) && (t(), this.isIphone() ?
                a.find(".guide-iOS-share").show() : this.isAndroid() && a.find(".guide-android-share").show())
        }, s.changeLangCookies = function (e) {
            var t = e.target.href,
                i = t.match(/(en|jp|cn)+/i)[1],
                r = location.href.match(/m1|jianguo|u1|t2|t1|apps+/i),
                s = null != $(e.target).closest(".header")[0];
            if (s) if ("www.smartisan.com" !== location.host) {
                    if (e.preventDefault(), location.href.indexOf("/" + r + "/") != -1) {
                        var a = location.href.indexOf("/" + r + "/"),
                            o = location.href.slice(0, a);
                        o = "apps" == r ? o + "/" + r + "/#/?lang=" + i : o + "/" + r + "/#/overview?lang=" + i
                    } else a = location.href.indexOf(c), o = location.href.slice(0, a + c.length), o = o +
                            "index/#/?lang=" + i;
                    location.href = o, setTimeout(function () {
                        window.location.reload()
                    }, 200)
                } else {
                    e.preventDefault();
                    var l = "http://www.smartisan.com/";
                    location.href.indexOf("/apps/") != -1 ? o = "/apps/" : location.href.indexOf("/" + r + "/") != -1 ?
                        ("jianguo" != r && "u1" != r || (r = "cn" == i ? "jianguo" : "u1"), o = "/" + r + "/#/overview") :
                        o = "/", o = l + i + o, location.href = o
                } else if ("www.smartisan.com" !== location.host) {
                e.preventDefault();
                var c = "/modules/";
                a = location.href.indexOf(c), o = location.href.slice(0, a + c.length), o = o + "index/#/?lang=" + i,
                    location.href = o, setTimeout(function () {
                    window.location.reload()
                }, 200)
            }
            t.indexOf("en") === -1 ? n.put("lang", "zh-CN", {
                path: "/",
                domain: "smartisan.com"
            }) : n.put("lang", "en-US", {
                path: "/",
                domain: "smartisan.com"
            })
        }, s.setHeaderActive = function (t) {
            e.appHeader = t
        }, s.getServerTime = function () {
            var e = t.defer(),
                i = "http://setting.smartisan.com/info/time?jsonp=1",
                r = null;
            return $.ajax({
                type: "get",
                dataType: "jsonp",
                url: i,
                success: function (t) {
                    t && 0 == t.code && t.data.timestamp && (r = parseInt(t.data.timestamp)), e.resolve({
                        now: r
                    })
                },
                error: function () {
                    e.resolve({
                        now: null
                    })
                }
            }), e.promise
        }, s.isMSIE = function (e) {
            var t = navigator.userAgent,
                i = "MSIE ",
                r = /MSIE (\w+)+/gi.exec(t);
            return e ? t.indexOf(i + e) > -1 : !(!r || !r[1]) && Number(r[1])
        }, s
    }]), appsServices.constant("Config", {
    baseUrl: "/index.php?r=",
    imgUrl: "http://img01.smartisanos.cn/",
    URI: {
        midWare: "http://www.smartisan.com/product/",
        __midWare: "http://product-gateway.smartisan.com/product/",
        base: "/index.php?r=",
        store: "/store/index.php?r=",
        beike: "/beike/index.php?r=",
        serv: "/store/serv/v1/"
    },
    headconfig: {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
        }
    },
    storeUrl: "http://store.smartisan.com/#/",
    regExp: {
        isMobile: /^1[3|4|5|7|8]\d{9}$/,
        isMail: /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$/,
        isPassword: /^[\w\\\[\]\:\^\-~!@#$%&*()-+={}|;'",.\/<>?]{6,16}$/,
        isSafeUrl: /^(http|https)\:\/\/[a-zA-Z0-9\-\.]+\.(smartisan.com\b)(:[a-zA-Z0-9]*)?\/?([a-zA-Z0-9\-\._\?\,\'\/\\\+&%\$#\=~])*$/,
        isIMEI: /^\d{15}$|^\d{14}$/,
        isMAC: /^([0-9a-fA-F]{2})(([\s:][0-9a-fA-F]{2}){5})$/,
        numOrEn: /^[0-9a-zA-Z]+$/,
        errorStr: /^[^\&\<\>]*$/
    },
    getDPR: function () {
        var e = window.devicePixelRatio,
            t = "1x";
        return e && (e > 1 && e <= 2 ? t = "2x" : e > 2 && (t = "mobile")), t
    },
    getDomain: function () {
        return window.location.host.indexOf("smartisan.com") >= 0 ? "smartisan.com" : "localhost"
    }
}).constant("ACCESS_LEVELS", {
    pub: 1,
    user: 2,
    cloud: 3,
    alpha: 4
}), appsServices.factory("Message", ["$rootScope", "Account", "User", "BaseInfo", "$location", function (e, t, i, r, n) {
        var s = function (s) {
            var a = s.originalEvent;
            a.origin == t.config.origin && ("isLoggedIn" == a.data && (r.update(), t.config.cartSync && ("-1" != n.path()
                .indexOf("/cart") ? e.$broadcast("login", {
                name: "cart"
            }) : "-1" != n.path().indexOf("/accessories") ? e.$broadcast("login", {
                name: "accessories"
            }) : e.$broadcast("cart", {
                name: "syncList"
            }))), "isRegistered" == a.data && (r.update(), t.config.cartSync && ("-1" != n.path().indexOf("/cart") ? e.$broadcast(
                "login", {
                name: "cart"
            }) : e.$broadcast("cart", {
                name: "syncList"
            }))), "isLoggedOut" == a.data && (t.close(), i.logout(), t.config.cartSync && (e.$broadcast("cart", {
                name: "removeCartAll"
            }), "-1" != n.path().indexOf("/cart") || n.path().indexOf("/simple-checkout") != -1 ? e.$broadcast(
                "dialogClose", {
                name: "cart"
            }) : e.$broadcast("dialogClose", {
                name: "normal"
            }))), "dialogClose" == a.data && (t.close(), t.config.cartSync && ("-1" != n.path().indexOf("/cart") ? e.$broadcast(
                "dialogClose", {
                name: "cart"
            }) : e.$broadcast("dialogClose", {
                name: "normal"
            }), e.$apply())))
        };
        return {
            handler: s
        }
    }]), appsServices.factory("Account", ["$window", function (e) {
        var t = {}, i = {
                wrapper: "body",
                origin: "https://account.smartisan.com",
                loginUrl: "https://account.smartisan.com/#/v2/login",
                logoutUrl: "https://account.smartisan.com/#/logout/embed",
                cartSync: !1
            }, r = function () {
                if (!t.wrapper) {
                    var e = [];
                    e.push('<div class="iframe-dialog" id="iframe-dialog">'), e.push('<div class="mask"></div>'), e.push(
                        '<iframe allowtransparency="true" src="" frameborder="0"></iframe>'), e.push("</div>"), t.wrapper =
                        $(i.wrapper), t.wrapper.append(e.join(""))
                }
                t.mask = $("#iframe-dialog .mask"), t.iframe = $("#iframe-dialog iframe")
            }, n = function () {
                t.iframe && (t.mask.hide(), t.iframe.removeClass("show"), t.iframe.attr("src", ""))
            }, s = function (t) {
                t = t || e.location.href, e.location.href = i.loginUrl + "?return_url=" + encodeURIComponent(t)
            }, a = function () {
                var n = i.logoutUrl;
                r();
                var s = e.location.origin || e.location.protocol + "//" + e.location.hostname;
                t.iframe.attr("src", n + "?origin=" + s)
            }, o = function (e) {
                i = angular.extend(i, e || {})
            };
        return {
            config: i,
            close: n,
            login: s,
            logout: a,
            set: o
        }
    }]), appsServices.factory("User", ["$rootScope", "$q", "$http", "$location", "Config", "ACCESS_LEVELS",
        "CartRequest", "Utils", function (e, t, i, r, n, s, a, o) {
        var l = {}, c = !1,
            u = function (t) {
                $.extend(l, t), c = !0, l.role > s.user ? e.isLoggedIn = !0 : e.isLoggedIn = !1
            }, h = function () {
                var i = t.defer();
                return a.checkAccount({
                    fields: "avatar_url,nickname,cellphone,t1_gift"
                }).then(function (t) {
                    0 == t.code ? (u(t.data), e.isLoggedIn = !0, e.$broadcast("login"), i.resolve(t)) : (e.isLoggedIn = !
                        1, i.reject(t))
                }, function () {
                    i.reject("网络异常!")
                }), i.promise
            };
        return {
            getInfo: h,
            isInitial: function () {
                return c
            },
            isAuthorized: function (e) {
                return l && l.role >= e
            },
            set: u,
            isLoggedIn: function () {
                return !!l.uid
            },
            getUser: function () {
                return l
            },
            getId: function () {
                return l ? l.uid : null
            },
            getName: function () {
                return l.name || ""
            },
            getRole: function () {
                return l.role || null
            },
            getAvatarUrl: function () {
                return l.avatarUrl || ""
            },
            logout: function () {
                l = {}, e.isLoggedIn = !1, e.$broadcast("logout"), e.$apply()
            }
        }
    }]), appsServices.factory("BaseInfo", ["$rootScope", "$q", "$cookies", "User", "Account", "Utils", "$timeout",
        "$location", function (e, t, i, r, n, s, a, o) {
        var l = function () {
            var o = t.defer();
            return r.getInfo().then(function (t) {
                n.close(), e.loginUser = t.data, o.resolve();
                var r = !1;
                if (!s.isMobile() && 0 == t.code && t.data.t1_gift && parseInt(t.data.t1_gift) > 0 ? (a(function () {
                    $(".header .account-panel .account-menu li.coupon").addClass("active")
                }, 1e3), r = !0) : $(".header .account-panel .account-menu li.coupon").removeClass("active"), n.config.cartSync) {
                    var l = i.get("couponNotice");
                    1 != l && r && a(function () {
                        var e = $(".main .notice-dialog");
                        e.length > 0 && (e.show().delay().toggleClass("on", !0), i.put("couponNotice", 1, {
                            domain: ".smartisan.com",
                            path: "/"
                        }), e.find(".notice-close").on("click", function (t) {
                            t.preventDefault(), e.remove()
                        }))
                    }, 200)
                }
            }, function (e) {
                o.reject()
            }), o.promise
        };
        return {
            update: l
        }
    }]), appsServices.provider("Navigator", {
    isMobile: !1,
    language: "cn",
    browser: null,
    init: function () {
        this.setMobile(), this.setLanguage()
    },
    setMobile: function () {
        var e = window.devicePixelRatio || 1;
        this.isMobile = $(window).width() <= 736 && (screen.width <= 736 || e >= 2)
    },
    setLanguage: function () {
        var e = window.location.pathname.match(/\/(jp|en|cn)\//i);
        e ? this.language = e[1] : location.href.indexOf("?lang=") != -1 ? this.language = location.href.split("?lang=")[
            1] : this.language = "cn"
    },
    $get: function () {
        var e = this;
        return {
            language: e.language,
            isMobile: e.isMobile
        }
    }
}), appsServices.factory("TitleBar", ["$rootScope", "$location", "Utils", function (e, t, i) {
        var r = ( !! i.isUCMobile(), function (e) {
            "logo" == e ? ($(".title-bar .nav-logo").removeClass("hide"), $(".title-bar .nav-title").addClass("hide")) :
                ($(".title-bar .nav-title").html(e), $(".title-bar .nav-logo").addClass("hide"), $(
                ".title-bar .nav-title").removeClass("hide"))
        }),
            n = function (e) {
                "back" == e ? ($(".title-bar .nav-back").removeClass("hide"), $(".title-bar .nav-toggle").addClass(
                    "hide")) : ($(".title-bar .nav-back").addClass("hide"), $(".title-bar .nav-toggle").removeClass(
                    "hide"))
            }, s = function (e) {
                "shop" == e ? $(".title-bar .nav-aside").removeClass("hide") : $(".title-bar .nav-aside").addClass(
                    "hide")
            }, a = function (e) {
                $(".header-mobile").removeClass().addClass("header-mobile"), $(".header-mobile").addClass(e)
            };
        return {
            setOptions: function (e) {
                e = e || {};
                var t = e.title || "logo",
                    i = e.toggle || "toggle",
                    o = e.aside || "shop",
                    l = e.theme || "";
                r(t), n(i), s(o), a(l)
            },
            init: function () {
                var i = new IScroll("#nav-drawer", {
                    tap: "mobileNavTap"
                }),
                    r = function (i) {
                        for (var r = i.target;
                        "span" == r.tagName.toLowerCase();) r = r.parentNode;
                        if ("a" == r.tagName.toLowerCase()) {
                            var n = $(r),
                                s = n.attr("href");
                            n.addClass("active"), setTimeout(function () {
                                /^#\//.test(s) ? e.$apply(function () {
                                    t.url(s.split("#")[1])
                                }) : window.location.href = s
                            }, 10), setTimeout(function () {
                                $(".nav-drawer").removeClass("active"), n.removeClass("active")
                            }, 300)
                        }
                    };
                $("#nav-drawer").on("mobileNavTap", r), $(".title-bar").on("touchmove", function (e) {
                    e.preventDefault()
                }), $(".header-mobile .nav-toggle").on("touchend", function (e) {
                    var t = e.originalEvent.changedTouches;
                    t && t.length && ($(".nav-drawer").toggleClass("active"), $(".nav-drawer").hasClass("active") && (i
                        .scrollTo(0, 0), i.refresh()))
                })
            }
        }
    }]), appsServices.factory("BlockImages", [function () {
        var e = $("body").blockImages();
        return {
            start: e.start,
            init: e.init
        }
    }]), appsDirectives.directive("changeLanguage", ["$document", function (e) {
        return {
            restrict: "A",
            link: function (t, i, r, n) {
                i && (i.on("click", function (e) {
                    var t = $(e.target).closest(".language-switch");
                    return t.toggleClass("active"), !1
                }), e.on("click", function (e) {
                    var t = $(e.target);
                    t.closest(".language-switch").is(".language-switch") || $(".language-switch").removeClass("active")
                }))
            }
        }
    }]).directive("preventCall", ["$document", function (e) {
        return {
            restrict: "A",
            link: function (e, t, i, r) {
                if (t) {
                    var n = navigator.userAgent.toLowerCase();
                    t.on("click", function () {
                        if (/windows/.test(n)) return !1
                    })
                }
            }
        }
    }]).directive("mobileTopbar", ["$location", "Topbar", function (e, t) {
        return {
            restrict: "EA",
            link: function (i, r, n, s) {
                r && (i.prevAction = function () {
                    return angular.isFunction(i.topbar.prevFn) ? void i.topbar.prevFn() : void(i.topbar.prevIsBack && (
                        history.length ? history.back(-1) : e.url("/")))
                }, t.addDom(n.name, r, i))
            }
        }
    }]).directive("mobileFooter", ["$document", "Utils", function (e, t) {
        return {
            restrict: "A",
            link: function (e, i, r, n) {
                i && t.isMobile() && (i.find("h3").on("click", function () {
                    $(this).parent().toggleClass("active"), $(this).siblings().slideToggle(300, jQuery.easing.easeOutCubic),
                        $(this).parent().siblings().removeClass("active"), $(this).parent().siblings().children("ul").slideUp(
                        300, jQuery.easing.easeOutCubic)
                }), i.find("ul li:not(.weixin)").on("click", function () {
                    var e = $(this).children().attr("href");
                    window.location.href = e
                }))
            }
        }
    }]).directive("showWeixinCode", ["$document", "Utils", function (e, t) {
        return {
            restrict: "A",
            link: function (e, t, i, r) {
                t && t.find("a").on("click", function () {
                    var e = $(this).parent(".weixin");
                    e.addClass("active"), e.find(".mask").one("click", function () {
                        e.removeClass("active")
                    }), e.find(".close-btn").one("click", function () {
                        e.removeClass("active")
                    }), document.onkeydown = function (t) {
                        var i = t || window.event;
                        i && 27 == i.keyCode && e.removeClass("active")
                    }
                })
            }
        }
    }]).directive("openServiceWindow", ["$document", "Utils", function (e, t) {
        return {
            restrict: "A",
            link: function (e, i, r, n) {
                i && i.on("click", function (e) {
                    e.preventDefault(), t.openServiceWindow()
                })
            }
        }
    }]).directive("mobileNavShow", ["$document", function (e) {
        return {
            restrict: "A",
            link: function (e, t, i, r) {
                t && $(document).on("touchend", ".mobile-topbar .nav-toggle", function (e) {
                    var t = e.originalEvent.changedTouches;
                    return t && t.length && ($("html").toggleClass("mobile-noscroll"), $(".wrapper").removeClass(
                        "moblie-quick-nav"), $(".wrapper").toggleClass("moblie-show-nav")), !1
                })
            }
        }
    }]).directive("backTop", ["$document", function (e) {
        return {
            restrict: "A",
            link: function (e, t, i, r) {
                t && ($(window).on("scroll", function () {
                    $(window).scrollTop() > 600 ? (t.addClass("active"), i.offset && t.css("-webkit-transform",
                        "translate3d(0," + i.offset + "px,0)")) : (t.removeClass("active"), i.offset && t.css(
                        "-webkit-transform", ""))
                }), t.on("click", function () {
                    $("html, body").animate({
                        scrollTop: 0
                    }, {
                        queue: !1
                    }, 500)
                }))
            }
        }
    }]).directive("bgCover", ["$document", "$rootScope", "Utils", function (e, t, i) {
        return {
            restrict: "A",
            link: function (e, t, r, n) {
                t && !i.isMobile()
            }
        }
    }]).directive("accountReservation", ["$document", "Utils", function (e, t) {
        return {
            restrict: "A",
            link: function (e, i, r, n) {
                i && t.isMobile() && i.on("click", function () {
                    $(this).hasClass("active") ? $(this).removeClass("active") : $(this).addClass("active")
                })
            }
        }
    }]).directive("routeChangeResetHeader", [function () {
        return {
            restrict: "A",
            controller: ["$element", "$rootScope", function (e, t) {
                    t.$on("$routeChangeStart", function () {
                        e.find(".header-sub .breadcrumb").removeClass("hide")
                    })
                }]
        }
    }]).directive("routeChangeResetFooter", [function () {
        return {
            restrict: "A",
            controller: ["$element", "$rootScope", function (e, t) {
                    t.$on("$routeChangeStart", function () {
                        e.find(".language-switch").removeClass("active")
                    })
                }]
        }
    }]).directive("copyrightYear", [function () {
        return {
            restrict: "A",
            link: function (e, t, i, r) {
                var n = new Date,
                    s = n.getFullYear(),
                    a = n.getMonth() + 1,
                    o = 2017;
                2016 == s && 12 == a && (o = 2016), $(t).html(o)
            }
        }
    }]).directive("mobileDevice", ["Utils", function (e) {
        return {
            restrict: "A",
            link: function (t, i, r, n) {
                var s = "";
                if (e.isMobile()) {
                    var a = navigator.userAgent.toLowerCase(),
                        o = "iphone os" == a.match(/iphone os/i),
                        l = "android" == a.match(/android/i);
                    o ? s = "device-iphone" : l && (s = "device-android"), $(i).addClass(s), $("body").addClass(s)
                }
            }
        }
    }]).directive("jQrcode", ["$timeout", "Utils", function (e, t) {
        return {
            restrict: "A",
            link: function (e, t, i, r) {
                t && (document.createElement("canvas").getContext ? setTimeout(function () {
                    $(t).empty(), $(t).qrcode({
                        render: "canvas",
                        width: 110,
                        height: 110,
                        text: i.qrcode
                    })
                }, 300) : $(t).append('<img src="' + i.src + '">'))
            }
        }
    }]).directive("titleBar", ["$location", "TitleBar", "Utils", function (e, t, i) {
        return {
            restrict: "A",
            link: function (r, n, s, a) {
                r.titleBar = r.titleBar || {
                    navList: []
                }, r.goBack = function () {
                    return e.host().indexOf("20170204-lottery") > -1 ? void console.log("点击了") : void(history.length ?
                        history.back(-1) : window.location.href = "http://www.smartisan.com/")
                }, i.isMobile() && t.init()
            }
        }
    }]).directive("retinaSrc", ["$window", "$http", function (e, t) {
        function i(e) {
            var t = e.split(".");
            return t.length < 2 ? e : (t[t.length - 2] += r, t.join("."))
        }
        var r = "@2x",
            n =
                /^data:([a-z]+\/[a-z]+(;[a-z\-]+\=[a-z\-]+)?)?(;base64)?,(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/,
            s = parseInt((/msie (\d+)/.exec(e.navigator.userAgent.toLowerCase()) || [])[1], 10),
            a = function () {
                var t =
                    "(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)";
                return e.devicePixelRatio > 1 || e.matchMedia && e.matchMedia(t).matches
            }();
        return {
            restrict: "A",
            scope: {
                retinaSrc: "@"
            },
            link: function (r, o, l, c) {
                function u(t) {
                    var i = e.sessionStorage.getItem(t);
                    return i
                }
                function h(t, i) {
                    e.sessionStorage.setItem(t, i)
                }
                function d(e) {
                    l.$set("src", e), s && o.prop("src", e)
                }
                function f(e) {
                    var r;
                    r = angular.isUndefined(l.at2x) ? u(e) : l.at2x, r ? d(r) : (r = i(e), t.head(r).success(function (
                        t, i) {
                        d(r), h(e, r)
                    }).error(function (t, i, r, n) {
                        d(e), h(e, e)
                    }))
                }
                r.$watch("retinaSrc", function (t) {
                    t && (a && t.indexOf("@2x.") == -1 && angular.isUndefined(l.noretina) && "object" == typeof e.sessionStorage &&
                        "IMG" === o[0].tagName && !t.match(n) ? f(t) : d(t))
                })
            }
        }
    }]).directive("onLoad", function () {
    return {
        restrict: "A",
        scope: !0,
        link: function (e, t, i) {
            t.bind("load", function () {
                e.$apply(i.onLoad)(!0, t)
            }), t.bind("error", function () {
                e.$apply(i.onLoad)(!1, t)
            })
        }
    }
}), appsDirectives.directive("osThird", ["$rootScope", "$document", "$filter", "$timeout", function (e, t, i, r) {
        var n = function () {
            var e = window.devicePixelRatio || 1;
            return $(window).width() <= 736 && (screen.width <= 736 || e >= 2)
        };
        return {
            restrict: "EA",
            templateUrl: function () {
                var e = "../../view/template-html/os-3.html";
                return n() && (e = "../../view/template-html/os-3-mobile.html"), e
            },
            scope: {
                options: "@options"
            },
            link: function (e, t, i, r) {
                function s() {
                    return $(".ie8,.ie9").length > 0
                }
                function a() {
                    k = setInterval(function () {
                        var e = $(".handshaker .loop-dot a.active"),
                            t = e.next("a");
                        t.length > 0 ? t.click() : $(".handshaker .loop-dot a").eq(0).click()
                    }, 8e3)
                }
                function o(e, t, i) {
                    var r = $(e).next(t);
                    r.length > 0 ? ($(e).removeClass("active"), r.addClass("active")) : ($(i).removeClass("active"), $(
                        i).eq(0).addClass("active"))
                }
                function l(e) {
                    if ($(window).width() > 1440) if (1 == g) var t = e + " .en-video-view .video-large",
                    i = $(t)[0];
                    else var t = e + " .cn-video-view .video-large",
                    i = $(t)[0];
                    else if (1 == g) var t = e + " .en-video-view .video-medium",
                    i = $(t)[0];
                    else var t = e + " .cn-video-view .video-medium",
                    i = $(t)[0];
                    i.play()
                }
                s() || setTimeout(function () {
                    $(".qr-code-view .img-view").empty(), $(".qr-code-view .img-view").qrcode({
                        render: "canvas",
                        width: 140,
                        height: 140,
                        text: location.href
                    })
                }, 300);
                var c, u, h, d, f, p, m, v, _, g = $("html.en").length;
                n() || setTimeout(function () {
                    c = $("#onestep").offset().top, _ = $("#blastParticiple").offset().top, u = $("#cloudMusic").offset()
                        .top, h = $("#record").offset().top, d = $("#handShaker").offset().top, f = $(
                        "#functionService").offset().top, p = $("#functionIwork").offset().top, m = $(
                        "#functionContact").offset().top, v = $("#functionMessage").offset().top
                }, 200);
                var w = "",
                    y = window.location.hash.match(/section=([a-z]{1,20})/);
                y && (w = y[1]), setTimeout(function () {
                    "onestep" == w && $("body,html").scrollTop(c)
                }, 500);
                var b = !0,
                    T = !0,
                    x = !0,
                    C = !0,
                    k = 0;
                if ($(".handshaker .buttons a").click(function () {
                    var e = $(this).index();
                    $(".handshaker .buttons a").removeClass("active"), $(this).addClass("active"), $(
                        ".third-type .handshaker .img-view").removeClass("active"), $(
                        ".third-type .handshaker .img-view").eq(e).addClass("active"), $(
                        ".third-type .handshaker .content p").removeClass("active"), $(
                        ".third-type .handshaker .content p").eq(e).addClass("active"), $(".handshaker .loop-dot a").eq(
                        0).click()
                }), $(".handshaker .loop-dot a").click(function () {
                    clearInterval(k), a();
                    var e = $(this).index();
                    $(".handshaker .loop-dot a").removeClass("active"), $(this).addClass("active"), $(
                        ".handshaker .img-view.active .pc-view figure").removeClass("active"), $(
                        ".handshaker .img-view.active .pc-view figure").eq(e).addClass("active"), $(
                        ".handshaker .img-view.active .phone-view figure").removeClass("active"), $(
                        ".handshaker .img-view.active .phone-view figure").eq(e).addClass("active")
                }), $("#onestep .item1 .replay").click(function () {
                    l("#onestep .item1")
                }), $("#onestep .item2 .replay").click(function () {
                    l("#onestep .item2")
                }), $("#onestep .item3 .replay").click(function () {
                    l("#onestep .item3")
                }), $("#blastParticiple .item1 .replay").click(function () {
                    l("#blastParticiple .item1")
                }), $("#blastParticiple .item2 .replay").click(function () {
                    l("#blastParticiple .item2")
                }), $("#blastParticiple .item3 .replay").click(function () {
                    l("#blastParticiple .item3")
                }), !n()) {
                    var P = !1,
                        S = !1;
                    $(document).scroll(function () {
                        var e = $(".third-type").length;
                        if (1 == e && !s()) {
                            var t = $(window).scrollTop();
                            if (c <= t && t < _ - 50) {
                                var i, r, n;
                                $(window).width() > 1440 ? 1 == g ? (i = $(
                                    "#onestep .item1 .en-video-view .video-large")[0], r = $(
                                    "#onestep .item2 .en-video-view .video-large")[0], n = $(
                                    "#onestep .item3 .en-video-view .video-large")[0]) : (i = $(
                                    "#onestep .item1 .cn-video-view .video-large")[0], r = $(
                                    "#onestep .item2 .cn-video-view .video-large")[0], n = $(
                                    "#onestep .item3 .cn-video-view .video-large")[0]) : 1 == g ? (i = $(
                                    "#onestep .item1 .en-video-view .video-medium")[0], r = $(
                                    "#onestep .item2 .en-video-view .video-medium")[0], n = $(
                                    "#onestep .item3 .en-video-view .video-medium")[0]) : (i = $(
                                    "#onestep .item1 .cn-video-view .video-medium")[0],
                                    r = $("#onestep .item2 .cn-video-view .video-medium")[0], n = $(
                                    "#onestep .item3 .cn-video-view .video-medium")[0]), i.loop = !1, r.loop = !1, n.loop = !
                                    1, P || (i.play(), setTimeout(function () {
                                    $("#onestep .item1 .replay").addClass("active")
                                }, 14e3), setTimeout(function () {
                                    r.play(), $("#onestep .item2 img").css({
                                        "z-index": "2"
                                    })
                                }, 16e3), setTimeout(function () {
                                    $("#onestep .item2 .replay").addClass("active")
                                }, 21e3), setTimeout(function () {
                                    n.play(), $("#onestep .item3 img").css({
                                        "z-index": "2"
                                    })
                                }, 23e3), P = !0, setTimeout(function () {
                                    $("#onestep .item3 .replay").addClass("active")
                                }, 3e4))
                            }
                            if (_ <= t && t < u) {
                                var i, r, n;
                                $(window).width() > 1440 ? 1 == g ? (i = $(
                                    "#blastParticiple .item1 .en-video-view .video-large")[0], r = $(
                                    "#blastParticiple .item2 .en-video-view .video-large")[0], n = $(
                                    "#blastParticiple .item3 .en-video-view .video-large")[0]) : (i = $(
                                    "#blastParticiple .item1 .cn-video-view .video-large")[0], r = $(
                                    "#blastParticiple .item2 .cn-video-view .video-large")[0], n = $(
                                    "#blastParticiple .item3 .cn-video-view .video-large")[0]) : 1 == g ? (i = $(
                                    "#blastParticiple .item1 .en-video-view .video-medium")[0], r = $(
                                    "#blastParticiple .item2 .en-video-view .video-medium")[0], n = $(
                                    "#blastParticiple .item3 .en-video-view .video-medium")[0]) : (i = $(
                                    "#blastParticiple .item1 .cn-video-view .video-medium")[0], r = $(
                                    "#blastParticiple .item2 .cn-video-view .video-medium")[0], n = $(
                                    "#blastParticiple .item3 .cn-video-view .video-medium")[0]), i.loop = !1, r.loop = !
                                    1, n.loop = !1, S || (i.play(), setTimeout(function () {
                                    $("#blastParticiple .item1 .replay").addClass("active")
                                }, 15e3), setTimeout(function () {
                                    r.play(), $("#blastParticiple .item2 img").css({
                                        "z-index": "2"
                                    })
                                }, 17e3), setTimeout(function () {
                                    $("#blastParticiple .item2 .replay").addClass("active")
                                }, 25e3), setTimeout(function () {
                                    n.play(), $("#blastParticiple .item3 img").css({
                                        "z-index": "2"
                                    })
                                }, 27e3), setTimeout(function () {
                                    $("#blastParticiple .item3 .replay").addClass("active")
                                }, 33e3), S = !0)
                            }
                            u <= t && t < h && b && (b = !1, setInterval(function () {
                                o(".third-type .cloud-music .container .album-phone figure.active", "figure",
                                    ".third-type .cloud-music .container .album-phone figure")
                            }, 8e3)), d <= t && t < f && T && (T = !1, a()), f <= t && t < p && x && (x = !1,
                                setInterval(function () {
                                o(".third-type .function-item .item-file .m1-view figure.active", "figure",
                                    ".third-type .function-item .item-file .m1-view figure")
                            }, 8e3)), p <= t && t < m && C && (C = !1, setInterval(function () {
                                o(".third-type .function-item .item-contact .m1-view figure.active", "figure",
                                    ".third-type .function-item .item-contact .m1-view figure")
                            }, 8e3))
                        }
                    })
                }
                $(".screen-recording .buttons a").click(function () {
                    var e = $(this).index();
                    $(".screen-recording .buttons a").removeClass("active"), $(this).addClass("active"), $(
                        ".third-type .screen-recording .left-hand figure").removeClass("active"), $(
                        ".third-type .screen-recording .left-hand figure").eq(e).addClass("active")
                }), $(".item-setting ul li").click(function () {
                    var e = $(this).index();
                    $(".item-setting ul li").removeClass("active"), $(this).addClass("active"), $(
                        ".item-setting .need-change figure").removeClass("active"), $(
                        ".item-setting .need-change figure").eq(e).addClass("active"), $(".item-setting p").removeClass(
                        "active"), $(".item-setting p").eq(e).addClass("active")
                }), $(".item-message ul li").click(function () {
                    var e = $(this).index();
                    $(".item-message ul li").removeClass("active"), $(this).addClass("active"), $(
                        ".item-message .need-change figure").removeClass("active"), $(
                        ".item-message .need-change figure").eq(e).addClass("active"), $(".item-message p").removeClass(
                        "active"), $(".item-message p").eq(e).addClass("active")
                });
                var O, M = "",
                    A = "#videoSubfield",
                    R = !1;
                $(".video-content .video-1").click(function (e) {
                    R = !0, M = $("#videoSubfield.video-box").html(), A = "#videoSubfield", $(".video-layer").show(), $(
                        "#videoSubField").show(), $("#videoBlastParticiple").hide(), $("#videoVoice").hide(), $("body")
                        .addClass("no-scroll");
                    var t = $("#videoSubfield.video-box .video-js").attr("id"),
                        i = $("#" + t);
                    i.attr({
                        width: "848px",
                        height: "478px"
                    }), O = videojs(t), O.currentTime(0), O.play()
                }), $(".video-content .video-2").click(function (e) {
                    R = !0, M = $("#videoBlastParticiple.video-box").html(), A = "#videoBlastParticiple", $(
                        ".video-layer").show(), $("#videoSubField").hide(), $("#videoVoice").hide(), $(
                        "#videoBlastParticiple").show(), $("body").addClass("no-scroll");
                    var t = $("#videoBlastParticiple.video-box .video-js").attr("id"),
                        i = $("#" + t);
                    i.attr({
                        width: "848px",
                        height: "478px"
                    }), O = videojs(t), O.currentTime(0), O.play()
                }), $(".video-content .video-3").click(function (e) {
                    R = !0, M = $("#videoVoice.video-box").html(), A = "#videoVoice", $(".video-layer").show(), $(
                        "#videoSubField").hide(), $("#videoBlastParticiple").hide(), $("#videoVoice").show(), $("body")
                        .addClass("no-scroll");
                    var t = $("#videoVoice.video-box .video-js").attr("id"),
                        i = $("#" + t);
                    i.attr({
                        width: "848px",
                        height: "478px"
                    }), O = videojs(t), O.currentTime(0), O.play()
                }), $("a.close-video").click(function () {
                    R = !1, $(".video-layer").hide(), $("body").removeClass("no-scroll"), 0 === $(".ie8").length && (O.currentTime(
                        0), O.pause()), O.dispose(), $(A + ".video-box").html(M)
                }), $("body").keydown(function (e) {
                    var t = e.keyCode;
                    if (27 == t) {
                        if (!R) return;
                        $("a.close-video").click()
                    }
                })
            }
        }
    }]).directive("specsParam", ["$rootScope", "$document", "$filter", "$timeout", function (e, t, i, r) {
        return {
            restrict: "A",
            templateUrl: function () {
                var e = "../../view/template-html/specs-param.html";
                return e
            }
        }
    }]), appsDirectives.directive("m1Overview", ["$rootScope", "$document", "$filter", "$timeout", "$location",
        "BlockImages", "PageScroll", "Utils", "SubNav", "TitleBar", function (e, t, i, r, n, s, a, o, l, c) {
        var u = function () {
            var e = window.devicePixelRatio || 1;
            return $(window).width() <= 736 && (screen.width <= 736 || e >= 2)
        };
        return {
            restrict: "EA",
            templateUrl: function () {
                var e = "../../view/template-html/m1-overview.html";
                return u() && (e = "../../view/template-html/m1-overview-mobile.html"), e
            },
            scope: {
                options: "@options"
            },
            link: function (t, i, r, u) {
                var h = Math.random() > .5 ? "dark" : "light";
                if (o.isMobile()) {
                    var d = "theme-t2";
                    $(".header").addClass("header-t2-black"), $(".header-sub").addClass("header-dark"), d =
                        "theme-t2-black", c.setOptions({
                        aside: " ",
                        theme: d
                    })
                } else "dark" == h ? ($(".header").addClass("header-t2"), $(".header").addClass("header-t2-black"), $(
                        ".fulfil").attr("data-background", "dark")) : ($(".header").addClass("header-t2"), $(".fulfil")
                        .addClass("light"));
                s.start(), !o.isMobile() && l.init(), o.isMobile() || ("en" == e.lang ? a.setOptions({
                    paginationTip: ["", "Design", "Features", "Smartisan OS"]
                }) : "jp" == e.lang ? a.setOptions({
                    paginationTip: ["", "デザイン", "機能", "Smartisan OS"]
                }) : a.setOptions({
                    paginationTip: ["", "功能", "设计", "操作系统"]
                }), a.init()), "en" == e.lang ? (o.setTitle("Smartisan M1 / M1L - Overview"), o.setTCrumbs({
                    currentPage: "overview",
                    list: [{
                            url: "#/overview",
                            title: "Overview",
                            on: "true"
                        }, {
                            url: "#/design",
                            title: "Design"
                        }, {
                            url: "#/features",
                            title: "Features"
                        }, {
                            url: "#/camera",
                            title: "Camera"
                        }, {
                            url: "#/os",
                            title: "OS"
                        }, {
                            url: "#/specs",
                            title: "Specs"
                        }]
                }, "", !0)) : "jp" == e.lang ? (o.setTitle("Smartisan M1 / M1L - 製品トップ"), o.setTCrumbs({
                    currentPage: "overview",
                    list: [{
                            url: "#/overview",
                            title: "製品トップ",
                            on: "true"
                        }, {
                            url: "#/design",
                            title: "デザイン"
                        }, {
                            url: "#/features",
                            title: "機能"
                        }, {
                            url: "#/camera",
                            title: "相机"
                        }, {
                            url: "#/os",
                            title: "Smartisan OS"
                        }, {
                            url: "#/specs",
                            title: "スペック"
                        }]
                }, "", !0)) : (o.setTitle("Smartisan M1 / M1L - 概览"), n.path().indexOf("overview") != -1 ? o.setTCrumbs({
                    currentPage: "overview",
                    list: [{
                            url: "#/overview",
                            title: "概览",
                            on: "true"
                        }, {
                            url: "#/design",
                            title: "设计"
                        }, {
                            url: "#/features",
                            title: "功能"
                        }, {
                            url: "#/camera",
                            title: "相机"
                        }, {
                            url: "#/os",
                            title: "操作系统"
                        }, {
                            url: "#/specs",
                            title: "技术规格"
                        }]
                }, "", !0) : o.setTCrumbs({
                    currentPage: "overview",
                    list: [{
                            url: "",
                            title: "概览",
                            on: "true"
                        }, {
                            url: "http://www.smartisan.com/m1/#/design",
                            title: "设计"
                        }, {
                            url: "http://www.smartisan.com/m1/#/features",
                            title: "功能"
                        }, {
                            url: "http://www.smartisan.com/m1/#/camera",
                            title: "相机"
                        }, {
                            url: "http://www.smartisan.com/m1/#/os",
                            title: "操作系统"
                        }, {
                            url: "http://www.smartisan.com/m1/#/specs",
                            title: "技术规格"
                        }]
                }, "", !0));
                var f = function () {
                    var e = $(this).index();
                    $(".pretty .switch-color li").removeClass("active"), $(".pretty .switch-color li").eq(e).addClass(
                        "active"), $(".pretty .phone-left li").removeClass("active"), $(".pretty .phone-left li").eq(e)
                        .addClass("active"), $(".pretty .phone-right li").removeClass("active"), $(
                        ".pretty .phone-right li").eq(e).addClass("active")
                };
                $(".pretty .switch-color li").on("click touchend", f)
            }
        }
    }]), appsFilters.filter("to_HTML", ["$sce", function (e) {
        return function (t, i) {
            return i && (t = t.replace(i, "")), e.trustAsHtml(t)
        }
    }]), m1Services.factory("PageScroll", [function () {
        var e = function (e, t, i, r) {
            e >= 2 ? $(".design .break").removeClass("start switch-on") : 1 == e && $(".design .break").hasClass(
                "slide-down") && $(".design .break").addClass("start")
        }, t = $(".wrapper").pageScroll({
                subNavClass: ".header-sub",
                minHeight: 660,
                afterMove: e
            }),
            i = function (e) {
                t.setOptions(e)
            }, r = function (e) {
                t.reset()
            }, n = function () {
                t.init()
            };
        return {
            setOptions: i,
            reset: r,
            init: n
        }
    }]), m1Services.factory("SubNav", ["$window", function (e) {
        var t = $(".header-main").height() + 20,
            i = $(".header-sub"),
            r = function () {
                $(window).off("scroll", n)
            }, n = function () {
                var e = $(window).scrollTop();
                e > t ? i.addClass("active") : i.removeClass("active")
            }, s = function () {
                r(), $(window).on("scroll", n)
            };
        return {
            reset: r,
            init: s
        }
    }]), m1Controllers.controller("MainCtrl", ["$rootScope", "$scope", "$window", "Account", "Message", "BaseInfo",
        "Utils", function (e, t, i, r, n, s, a) {
        function o() {
            var e = navigator.userAgent.toLowerCase();
            return "windows" == e.match(/windows/i)
        }
        e.isM1 = 1, $(window).on("message", n.handler), t.$on("$viewContentLoaded", function (e) {
            $(".header").addClass("header-t2")
        }), o() && !a.isMobile() && (t.osClass = "os-windows"), s.update(), t.login = function () {
            s.update().then(function (t) {
                e.isLoggedIn = !0
            }, function (e) {
                r.login()
            })
        }, t.logout = function () {
            r.logout()
        }, t.register = function () {
            r.register()
        }, t.changeLangCookies = a.changeLangCookies
    }]), m1Controllers.controller("OverviewCtrl", ["$rootScope", "$scope", "$timeout", "PageScroll", "Utils",
        "BlockImages", function (e, t, i, r, n, s) {}]), m1Controllers.controller("DesignCtrl", ["$rootScope", "$scope",
        "PageScroll", "Utils", "BlockImages", "SubNav", function (e, t, i, r, n, s) {
        n.start(), !r.isMobile() && s.init(), $(".header").addClass("header-t2-black"), r.isMobile() && $(".header-sub")
            .addClass("header-dark"), r.isMobile() || ("en" == e.lang ? i.setOptions({
            paginationTip: ["New Materials, New Finishes, New Colors", "Seamless Frame, Ceaseless Evolution",
                    "Brilliance, in One Little Light", "One Hidden Slot, Two SIM Cards",
                    "A Little Childlike Joy, for Adults"]
        }) : "jp" == e.lang ? i.setOptions({
            paginationTip: ["フルメタルフレーム、かつてない純粋", "終わりのないミニマリズムの追求", "おなじみのシンプル、おなじみの優雅", "幸運な意外、意外な傑作", "匠精神の証明は"]
        }) : i.setOptions({
            paginationTip: ["新材质、新工艺、新颜色", "“无断”的金属中框，不断地持续进化", "微小的光亮，巨大的关怀", "貌似忠厚的左侧键，内藏双卡双待",
                    "开了又开，似曾相识的喜悦，成年后不再有过的乐趣"]
        }), i.init()), "en" == e.lang ? (r.setTitle("Smartisan M1 / M1L - Design"), r.setTCrumbs({
            currentPage: "design",
            list: [{
                    url: "#/overview",
                    title: "Overview",
                    on: "true"
                }, {
                    url: "#/design",
                    title: "Design"
                }, {
                    url: "#/features",
                    title: "Features"
                }, {
                    url: "#/camera",
                    title: "Camera"
                }, {
                    url: "#/os",
                    title: "OS"
                }, {
                    url: "#/specs",
                    title: "Specs"
                }]
        }, "", !0)) : "jp" == e.lang ? (r.setTitle("Smartisan M1 / M1L - デザイン"), r.setTCrumbs({
            currentPage: "design",
            list: [{
                    url: "#/overview",
                    title: "製品トップ",
                    on: "true"
                }, {
                    url: "#/design",
                    title: "デザイン"
                }, {
                    url: "#/features",
                    title: "機能"
                }, {
                    url: "#/camera",
                    title: "相机"
                }, {
                    url: "#/os",
                    title: "Smartisan OS"
                }, {
                    url: "#/specs",
                    title: "スペック"
                }]
        }, "", !0)) : (r.setTitle("Smartisan M1 / M1L - 设计"), r.setTCrumbs({
            currentPage: "design",
            list: [{
                    url: "#/overview",
                    title: "概览",
                    on: "true"
                }, {
                    url: "#/design",
                    title: "设计"
                }, {
                    url: "#/features",
                    title: "功能"
                }, {
                    url: "#/camera",
                    title: "相机"
                }, {
                    url: "#/os",
                    title: "操作系统"
                }, {
                    url: "#/specs",
                    title: "技术规格"
                }]
        }, "", !0)), setTimeout(function () {
            $(".design .break").addClass("start")
        }, 100);
        var a = "brown";
        $(".design .break ul li").on("click touchend", function (e) {
            e.preventDefault();
            var t = $(e.target),
                i = t.data("color");
            if (i != a) {
                var r = t.index();
                t.addClass("active").siblings("li").removeClass("active"), $(".design .break figure").eq(r).addClass(
                    "active").siblings("figure").removeClass("active"), $(".design .break").removeClass(a).addClass(i),
                    a = i, "brown" == i ? ($(".page > .break").attr("data-background", "dark"), $(
                    ".onepage-wrapper .header-t2").addClass("header-t2-black"), $(
                    ".onepage-wrapper .header-t2 .header-sub").addClass("header-dark")) : ($(".page > .break").removeAttr(
                    "data-background"), $(".onepage-wrapper .header-t2").removeClass("header-t2-black"), $(
                    ".onepage-wrapper .header-t2 .header-sub").removeClass("header-dark"))
            }
        }), t.changeDesignColor = function (e) {
            t.designColor = e
        }, $(".design .break ul li").click(function () {
            $(".design .break").addClass("switch-on")
        });
        var o;
        $(".design section").each(function () {
            var e, t = $(this).attr("class").split(" ")[0];
            switch (t) {
            case "break":
                e = $(".design .break figure");
                break;
            case "frame":
                e = $(".design .frame .window > div");
                break;
            case "slot":
                e = $(this);
                break;
            case "light":
                e = $(this);
                break;
            default:
                e = null
            }
            null != e && e.mousedown(function (e) {
                o = "section" == $(this).get(0).tagName ? $(this) : $(this).closest("section"), o.removeClass("off").addClass(
                    "on")
            })
        }), $(".design .frame .window > div").mousedown(function (e) {
            for (var t = $(this).index(), i = $(".design .frame .window > div").length, r = $(window).width() > 1440 ?
                    40 : 20, n = t - 1; n >= 0; n--) $(this).siblings().eq(n).css("transform", "translateX(" + (t - n) *
                    r + "px)");
            for (var n = t; n < i - 1; n++) $(this).siblings().eq(n).css("transform", "translateX(" + (t - n - 1) * r +
                    "px)")
        }), $("html").mouseup(function (e) {
            $("section.on").removeClass("on").addClass("off"), $(".design .frame .window > div").removeAttr("style")
        }), $(".design section").on("webkitTransitionEnd transitionend", function (e) {
            $(".design section").removeClass("off")
        }), $(".design .package-new .btn-old > div").on("click", function () {
            var e = $(".design .package-new .figure-old li"),
                t = e.length,
                i = $(".design .package-new .figure-old li.active").index(),
                r = $(".design .package-new .btn-old");
            "prev" == $(this).attr("class") ? (i = i - 1 < 0 ? i : i - 1, i - 1 < 0 ? r.addClass("prev-end") : r.removeClass(
                "next-end")) : (i = i + 1 > t - 1 ? i : i + 1, i + 1 > t - 1 ? r.addClass("next-end") : r.removeClass(
                "prev-end")), e.eq(i).addClass("active").siblings().removeClass("active")
        });
        var l = [$(".package-cover"), $(".phone-face"), $(".line-face"), $(".charge-face")];
        angular.forEach(l, function (e) {
            e.data("isOpen", 0)
        });
        var c = [$(".phone-face")[0], $(".line-face")[0], $(".charge-face")[0]],
            u = [$(".phone-face-shadow")[0], $(".line-face-shadow")[0], $(".charge-face-shadow")[0]],
            h = [$(".phone-back-shadow")[0], $(".line-back-shadow")[0], $(".charge-back-shadow")[0]],
            d = function () {
                l[0].addClass("open"), l[0].data("isOpen", 1)
            }, f = function () {
                l[0].removeClass("open"), l[0].data("isOpen", 0)
            }, p = function () {
                var e = 1;
                TweenMax.to(c[0], e, {
                    rotationY: -180,
                    ease: Cubic.easeOut,
                    onUpdate: v
                }), TweenMax.to(h[0], e / 4, {
                    alpha: 1,
                    delay: e / 4 * 3,
                    ease: Cubic.easeOut
                }), l[1].data("isOpen", 1)
            }, m = function () {
                var e = 1;
                TweenMax.to(c[0], e, {
                    rotationY: 0,
                    ease: Cubic.easeOut,
                    onUpdate: v
                }), TweenMax.to(h[0], e / 4, {
                    alpha: 0,
                    ease: Cubic.easeOut,
                    overwrite: !0
                }), l[1].data("isOpen", 0)
            }, v = function () {
                var e = Math.abs(c[0]._gsTransform.rotationY),
                    t = 1 + .01 * (30 - Math.max(Math.min(e, 120), 30)),
                    i = 1 - e / 100;
                i = i > 0 ? i : 0, e >= 90 ? $(c[0]).addClass("back") : $(c[0]).removeClass("back"), $(u[0]).css(
                    "transform", "scaleX(" + t + ")"), $(u[0]).css("opacity", i)
            }, _ = function () {
                var e = 1;
                TweenMax.to(c[1], e, {
                    rotationX: 180,
                    ease: Cubic.easeOut,
                    onUpdate: w
                }), TweenMax.to(h[1], e / 4, {
                    alpha: 1,
                    delay: e / 4 * 3,
                    ease: Cubic.easeOut
                }), l[2].data("isOpen", 1)
            }, g = function () {
                var e = 1;
                TweenMax.to(c[1], e, {
                    rotationX: 0,
                    ease: Cubic.easeOut,
                    onUpdate: w
                }), TweenMax.to(h[1], e / 4, {
                    alpha: 0,
                    ease: Cubic.easeOut,
                    overwrite: !0
                }), l[2].data("isOpen", 0)
            }, w = function () {
                var e = Math.abs(c[1]._gsTransform.rotationX),
                    t = 1 + .01 * (30 - Math.max(Math.min(e, 120), 30)),
                    i = 1 - e / 100;
                i = i > 0 ? i : 0, e >= 90 ? $(c[1]).addClass("back") : $(c[1]).removeClass("back"), $(u[1]).css(
                    "transform", "scaleY(" + t + ")"), $(u[1]).css("opacity", i)
            }, y = function () {
                var e = 1;
                TweenMax.to(c[2], e, {
                    rotationY: 180,
                    ease: Cubic.easeOut,
                    onUpdate: T
                }), TweenMax.to(h[2], e / 4, {
                    alpha: 1,
                    delay: e / 4 * 3,
                    ease: Cubic.easeOut
                }), l[3].data("isOpen", 1)
            }, b = function () {
                var e = 1;
                TweenMax.to(c[2], e, {
                    rotationY: 0,
                    ease: Cubic.easeOut,
                    onUpdate: T
                }), TweenMax.to(h[2], e / 4, {
                    alpha: 0,
                    ease: Cubic.easeOut,
                    overwrite: !0
                }), l[3].data("isOpen", 0)
            }, T = function () {
                var e = Math.abs(c[2]._gsTransform.rotationY),
                    t = 1 + .01 * (30 - Math.max(Math.min(e, 120), 30)),
                    i = 1 - e / 100;
                i = i > 0 ? i : 0, e >= 90 ? $(c[2]).addClass("back") : $(c[2]).removeClass("back"), $(u[2]).css(
                    "transform", "scaleX(" + t + ")"), $(u[2]).css("opacity", i)
            }, x = [d, p, _, y],
            C = [f, m, g, b],
            k = function () {
                for (var e = $(".package-btn"), t = 0, i = 0; i < l.length; i++) 1 == l[i].data("isOpen") && t++;
                switch (t) {
                case 0:
                    e.addClass("prev-end"), e.removeClass("next-end");
                    break;
                case 4:
                    e.addClass("next-end"), e.removeClass("prev-end");
                    break;
                default:
                    e.removeClass("prev-end"), e.removeClass("next-end")
                }
            };
        k();
        var P = function (e) {
            var t = -1;
            switch (typeof e) {
            case "string":
                if ("next" == e) {
                    for (var i = 0; i < l.length; i++) if (0 == l[i].data("isOpen")) {
                            t = i;
                            break
                        }
                } else for (var i = l.length - 1; i >= 0; i--) if (1 == l[i].data("isOpen")) {
                            t = i;
                            break
                        } break;
            case "number":
                t = e
            }
            t != -1 && (0 == l[t].data("isOpen") ? x[t]() : C[t](), k())
        };
        $(".package-btn > div").on("click touchend", function () {
            P($(this).hasClass("prev") ? "prev" : "next")
        }), $(".package-cover").on("click", function () {
            P(0)
        }), $(".phone-face").on("click", function () {
            P(1)
        }), $(".line-face").on("click", function () {
            P(2)
        }), $(".charge-face").on("click", function () {
            P(3)
        }), $("body").on("keyup", function (e) {
            37 == e.keyCode ? P("prev") : 39 == e.keyCode && P("next")
        })
    }]), m1Controllers.controller("CameraCtrl", ["$rootScope", "$scope", "Utils", "SubNav", "BlockImages", function (e,
        t, i, r, n) {
        if (n.start(), !i.isMobile() && r.init(), "en" == e.lang ? (i.setTitle("Smartisan M1 / M1L - Camera"), i.setTCrumbs({
            currentPage: "camera",
            list: [{
                    url: "#/overview",
                    title: "Overview",
                    on: "true"
                }, {
                    url: "#/design",
                    title: "Design"
                }, {
                    url: "#/features",
                    title: "Features"
                }, {
                    url: "#/camera",
                    title: "Camera"
                }, {
                    url: "#/os",
                    title: "OS"
                }, {
                    url: "#/specs",
                    title: "Specs"
                }]
        }, "", !0)) : "jp" == e.lang ? (i.setTitle("Smartisan M1 / M1L - スペック"), i.setTCrumbs({
            currentPage: "camera",
            list: [{
                    url: "#/overview",
                    title: "製品トップ",
                    on: "true"
                }, {
                    url: "#/design",
                    title: "デザイン"
                }, {
                    url: "#/features",
                    title: "機能"
                }, {
                    url: "#/camera",
                    title: "相机"
                }, {
                    url: "#/os",
                    title: "Smartisan OS"
                }, {
                    url: "#/specs",
                    title: "スペック"
                }]
        }, "", !0)) : (i.setTitle("Smartisan M1 / M1L - 相机"), i.setTCrumbs({
            currentPage: "camera",
            list: [{
                    url: "#/overview",
                    title: "概览",
                    on: "true"
                }, {
                    url: "#/design",
                    title: "设计"
                }, {
                    url: "#/features",
                    title: "功能"
                }, {
                    url: "#/camera",
                    title: "相机"
                }, {
                    url: "#/os",
                    title: "操作系统"
                }, {
                    url: "#/specs",
                    title: "技术规格"
                }]
        }, "", !0)), !i.isMobile()) {
            ! function () {
                "use strict";
                for (var e, t = 0, i = "webkit moz ms o".split(" "), r = window.requestAnimationFrame, n = window.cancelAnimationFrame,
                        s = 0; s < i.length && (!r || !n); s++) e = i[s], r = r || window[e + "RequestAnimationFrame"],
                        n = n || window[e + "CancelAnimationFrame"] || window[e + "CancelRequestAnimationFrame"];
                r && n || (r = function (e, i) {
                    var r = (new Date).getTime(),
                        n = Math.max(0, 16 - (r - t)),
                        s = window.setTimeout(function () {
                            e(r + n)
                        }, n);
                    return t = r + n, s
                }, n = function (e) {
                    window.clearTimeout(e)
                }), window.requestAnimationFrame = r, window.cancelAnimationFrame = n
            }();
            var s, a = function () {
                    var e = navigator.userAgent,
                        t = e.indexOf("Opera") > -1,
                        i = e.indexOf("compatible") > -1 && e.indexOf("MSIE") > -1 && !t,
                        r = e.indexOf("Firefox") > -1,
                        n = (e.indexOf("Safari") > -1, e.indexOf("Chrome") > -1);
                    if (i) {
                        var s, a = new RegExp("MSIE (\\d+\\.\\d+);");
                        a.test(e);
                        var o = parseFloat(RegExp.$1);
                        switch (o) {
                        case 5.5:
                            s = "IE55";
                            break;
                        case 6:
                            s = "IE6";
                            break;
                        case 7:
                            s = "IE7";
                            break;
                        case 8:
                            s = "IE8"
                        }
                        return s
                    }
                    return r ? "FF" : t ? "Opera" : n ? "Chrome" : void 0
                }, o = a(),
                l = function (e) {
                    for (var t = $(window).height(), i = e.length, r = [], n = 0; n < i; n++) {
                        var s = {};
                        s.dom = $(e[n].selector), s.top = s.dom.offset().top, s.height = s.dom.height(), s.bottom = s.top +
                            s.height, s.callback = e[n].callback, s.end = s.bottom - e[n].correct, s.out = !0, r.push(s)
                    }
                    var a = [];
                    a.push(r[0]);
                    for (var n = 1; n < i; n++) {
                        for (var o = r[n].end, l = a.length, c = !0, u = 0; u < l; u++) c && o < a[u].end && (a.splice(
                                u, 0, r[n]), c = !1);
                        c && a.push(r[n])
                    }
                    var h = function () {
                        for (var e = $(window).scrollTop(), i = e + t, r = -1, n = a.length - 1; n >= 0; n--) if (a[n].end <
                                i) {
                                r = n;
                                break
                            }
                        for (var n = 0; n <= r; n++) a[n].out && (a[n].callback(), a[n].out = !1);
                        a[a.length - 1].out || $(window).off("scroll", h)
                    };
                    $(window).on("scroll", h), h()
                }, c = function () {
                    $(".camera .focus-frame-far").removeClass("active green"), setTimeout(function () {
                        $(".camera .focus-frame-far").addClass("active")
                    }, 20), setTimeout(function () {
                        $(".camera .focus-frame-far").addClass("green")
                    }, 450)
                }, u = function () {
                    $(".camera .focus-frame-near").removeClass("active green"), setTimeout(function () {
                        $(".camera .focus-frame-near").addClass("active")
                    }, 20), setTimeout(function () {
                        $(".camera .focus-frame-near").addClass("green")
                    }, 450)
                }, h = function () {
                    $(".focus .focus-near").addClass("active"), $(".focus .focus-far").removeClass("active"), $(
                        ".focus figure").removeClass("far"), u()
                }, d = function () {
                    $(".focus .focus-near").removeClass("active"), $(".focus .focus-far").addClass("active"), $(
                        ".focus figure").addClass("far"), c()
                }, f = function (e) {
                    if (!(e <= 0)) {
                        switch (e % 2) {
                        case 0:
                            d();
                            break;
                        case 1:
                            h()
                        }
                        e -= 1, s = setTimeout(function () {
                            f(e)
                        }, 2500)
                    }
                };
            "IE8" != o ? $(".camera .focus figure a").click(function () {
                clearTimeout(s);
                $(".camera .focus figure");
                $(this).hasClass("btn-near") && !$(".focus-near").hasClass("active") ? h() : $(this).hasClass("btn-far") && !
                    $(".focus-far").hasClass("active") && d()
            }) : $(".focus-select a").hide(), t.$on("$locationChangeStart", function (e, t, i) {
                clearTimeout(s)
            });
            var p = function () {
                f(4)
            }, m = function () {
                    var e = setInterval(function () {
                        $(".stabzn").hasClass("active") ? clearInterval(e) : $(".stabzn").addClass("active")
                    }, 16)
                };
            $(".photo-thumbs").addClass("active");
            var v = !0;
            $(".camera .video .items li").mouseenter(function () {
                if (v) {
                    var e = $(this).attr("id");
                    switch (e) {
                    case "photo":
                        $(".new-frame ul").removeClass("active"), $(".photo-thumbs").addClass("active");
                        break;
                    case "hdvideo":
                        $(".new-frame ul").removeClass("active"), $(".video-thumbs").addClass("active")
                    }
                }
            });
            var _;
            if ("IE8" == o && ($(".new-window").hide(), $(".new-hdvideo").hide(), $(".hsvideo video").hide(), $("#back")
                .hide()), "IE8" != o) {
                var g;
                $(".camera .video .items li").mousedown(function (e) {
                    e.stopPropagation(), $(".camera .video .items li").removeClass("active"), $(this).addClass("active");
                    var t = $(this).attr("id");
                    switch (t) {
                    case "photo":
                        $(".camera .new-frame").removeClass("prepare");
                        break;
                    case "hdvideo":
                        $(".camera .new-frame").removeClass("prepare");
                        break;
                    case "back":
                        $(".camera .new-frame").addClass("prepare")
                    }
                    _ = e.target, g = (new Date).getTime()
                }), $("body").mousedown(function (e) {
                    _ = e.target, $(".camera .video .items li").removeClass("active")
                }), $("body").mouseup(function (e) {
                    _ = e.target, $(".camera .video .items li").removeClass("active"), $(".camera .new-frame").addClass(
                        "prepare")
                }), $(".camera .video .items li").mouseup(function (e) {
                    e.stopPropagation();
                    var t = (new Date).getTime();
                    if ($(".camera .video .items li").removeClass("active"), e.target == _) {
                        var i = $(this).attr("id"),
                            r = $(this).parent(),
                            n = $(".camera .video figure");
                        switch (i) {
                        case "photo":
                            $(".video .items").hasClass("choice") && (t - g < 220 ? (setTimeout(function () {
                                $(".camera .new-frame").removeClass("active"), r.removeClass("choice").addClass("back"),
                                    n.removeClass("quit").addClass("detail")
                            }, 220 - t + g), $(".camera .new-window").addClass("active")) : ($(".camera .new-frame").removeClass(
                                "active"), $(".camera .new-window").addClass("active"), r.removeClass("choice").addClass(
                                "back"), n.removeClass("quit").addClass("detail")));
                            break;
                        case "hdvideo":
                            $(".video .items").hasClass("choice") && (t - g < 220 ? setTimeout(function () {
                                $(".camera .new-frame").removeClass("active"), $(".camera .new-hdvideo").addClass(
                                    "active"), $(".new-hdvideo video").get(0).play(), r.removeClass("choice").addClass(
                                    "back"), n.removeClass("quit").addClass("detail")
                            }, 220 - t + g) : ($(".camera .new-frame").removeClass("active"), $(".camera .new-hdvideo")
                                .addClass("active"), $(".new-hdvideo video").get(0).play(), r.removeClass("choice").addClass(
                                "back"), n.removeClass("quit").addClass("detail")));
                            break;
                        case "back":
                            if ($(".video .items").hasClass("back")) {
                                $(".camera .new-frame").addClass("active"), $(".camera .new-hdvideo").removeClass(
                                    "active"), $(".camera .new-window").removeClass("active"), $(".new-hdvideo video").get(
                                    0).pause(), r.removeClass("back").addClass("choice"), n.removeClass("detail").addClass(
                                    "quit"), v = !1;
                                var s = $(".new-window li.active").attr("data-id");
                                $(".photo-thumbs li").removeClass(), $(".photo-thumbs li").addClass("photo-" + s +
                                    "-preview"), setTimeout(function () {
                                    v = !0
                                }, 400)
                            }
                        }
                        return
                    }
                })
            }
            var w = function (e, t, i, r) {
                this.total = t, this.selector = e, this.time = i;
                var n = Number(i),
                    s = !0,
                    a = $(e),
                    o = a.find("ul"),
                    l = o.find(".active"),
                    c = parseInt(l.css("margin-left")),
                    u = parseInt(l.css("margin-right")),
                    h = l.width(),
                    d = h + c + u;
                $("body").on("click", e + " .left-pic", function () {
                    if (s) {
                        s = !1;
                        var i, r = $(e + " .left-pic").prev(),
                            a = r.attr("data-id"),
                            l = r.clone().removeClass("photo-" + a);
                        i = a > 1 ? a - 1 : t, l.addClass("photo-" + i), l.attr("data-id", i), setTimeout(function () {
                            o.css("transition", "none"), o.prepend(l), o.find("li:last-child").remove(), o.css(
                                "transform", "translate(0px,0px)"), setTimeout(function () {
                                o.removeAttr("style"), s = !0
                            }, 200)
                        }, n), o.css("transform", "translate(" + d + "px,0px)"), o.find(".right-pic").removeClass(
                            "right-pic"), o.find(".active").removeClass("active").addClass("right-pic"), o.find(
                            ".left-pic").removeClass("left-pic").addClass("active"), r.addClass("left-pic")
                    }
                }), $("body").on("click", e + " .right-pic", function () {
                    if (s) {
                        s = !1;
                        var i, r = $(e + " .right-pic").next(),
                            a = r.attr("data-id"),
                            l = r.clone().removeClass("photo-" + a);
                        i = a < t ? Number(a) + 1 : 1, l.addClass("photo-" + i), l.attr("data-id", i), setTimeout(function () {
                            o.css("transition", "none"), o.append(l), o.find("li:first-child").remove(), o.css(
                                "transform", "translate(0px,0px)"), setTimeout(function () {
                                o.removeAttr("style"), s = !0
                            }, 200)
                        }, n), o.css("transform", "translate(" + -d + "px,0px)"), o.find(".left-pic").removeClass(
                            "left-pic"), o.find(".active").removeClass("active").addClass("left-pic"), o.find(
                            ".right-pic").removeClass("right-pic").addClass("active"), r.addClass("right-pic")
                    }
                }), $("body").keyup(function (e) {
                    $(".new-window").hasClass("active") && (37 == e.keyCode ? (e.preventDefault(), $(".left-pic").click()) :
                        39 == e.keyCode && (e.preventDefault(), $(".right-pic").click()))
                }), this.stop = function () {}
            }, y = [];
            new w(".new-window", 4, 800, y);
            "IE8" == o ? ($(".live video").remove(), $(".live figure li").css("opacity", "1"), $(".hsvideo").addClass(
                "no-video"), $(".live figure .profession").hide(), $(".live figure .exposure").hide(), $(
                ".live .items li").click(function () {
                $(".live .items li").removeClass("active"), $(this).addClass("active"), $(".live figure li").hide(), $(
                    this).hasClass("hsvideo") ? $(".live figure .hsvideo").show() : $(this).hasClass("exposure") ? $(
                    ".live figure .exposure").show() : $(this).hasClass("profession") ? $(".live figure .profession").show() :
                    $(".live figure .hsvideo").show()
            }), $(".live .items .hsvideo").click()) : (t.liveMode = "hsvideo", t.changeliveMode = function (e) {
                t.liveMode != e && (t.liveMode = e, "hsvideo" == e ? $(".hsvideo video").get(0).play() : $(
                    ".hsvideo video").get(0).pause())
            });
            var b = function () {
                $(".live video").is(":visible") && $(".live video").get(0).play()
            };
            "IE8" == o ? ($(".camera .selfie figure ul li").css("opacity", 1), $(".beauty-before").show(), $(
                ".beauty-after").hide(), $(".camera .selfie .effect-btn span").click(function () {
                $(this).siblings().removeClass("active"), $(this).addClass("active"), $(this).hasClass("right-btn") ? (
                    $(".beauty-after").show(), $(".beauty-before").hide()) : ($(".beauty-after").hide(), $(
                    ".beauty-before").show())
            })) : $(".camera .selfie .effect-btn span").click(function () {
                var e = $(this).index();
                $(this).siblings().removeClass("active"), $(this).addClass("active"), $(".camera .selfie figure ul li")
                    .removeClass("active"), $(".camera .selfie figure ul li").eq(e).addClass("active")
            });
            var T = function (e) {
                for (var t = e.length, i = new Array, r = $(window).height(), n = 0; n < t; n++) {
                    var s = {};
                    s.dom = $(e[n].selector), s.dom.css("transition", "transform 4s cubic-bezier(.165,.84,.44,1)"), s.top =
                        s.dom.offset().top, s.height = s.dom.height(), s.bottom = s.top + s.height, s.max = e[n].max, s
                        .factor = e[n].factor, i.push(s)
                }
                var a = function () {
                    for (var e = $(window).scrollTop(), n = e + r, s = 0; s < t; s++) {
                        var a = i[s];
                        if (e < a.bottom && n > a.top) {
                            var o = n - a.top;
                            a.dom.css("transform", "translate(0px," + -Math.min(a.max, Math.round(o / a.factor)) +
                                "px)")
                        }
                    }
                };
                $(window).scroll(function () {
                    a()
                })
            }, x = [{
                        selector: ".creation figure",
                        max: 60,
                        factor: 14
                    }, {
                        selector: ".live figure",
                        max: 100,
                        factor: 14
                    }, {
                        selector: ".selfie figure",
                        max: 100,
                        factor: 14
                    }];
            new T(x);
            if ("IE8" != o) {
                var C = [{
                        selector: ".focus ul",
                        callback: function () {
                            p()
                        },
                        correct: -250
                    }, {
                        selector: ".stabzn figure",
                        callback: function () {
                            m()
                        },
                        correct: 600
                    }, {
                        selector: ".live figure ul",
                        callback: function () {
                            b()
                        },
                        correct: 500
                    }];
                new l(C)
            }
        }
    }]), m1Controllers.controller("FeaturesCtrl", ["$rootScope", "$scope", "Utils", "SubNav", "BlockImages", function (
        e, t, i, r, n) {
        if (n.start(), !i.isMobile() && r.init(), $(".header").addClass("header-t2-black"), $(".header-sub").addClass(
            "header-dark"), "en" == e.lang ? (i.setTitle("Smartisan M1 / M1L - Features"), i.setTCrumbs({
            currentPage: "feature",
            list: [{
                    url: "#/overview",
                    title: "Overview",
                    on: "true"
                }, {
                    url: "#/design",
                    title: "Design"
                }, {
                    url: "#/features",
                    title: "Features"
                }, {
                    url: "#/camera",
                    title: "Camera"
                }, {
                    url: "#/os",
                    title: "OS"
                }, {
                    url: "#/specs",
                    title: "Specs"
                }]
        }, "", !0)) : "jp" == e.lang ? (i.setTitle("Smartisan M1 / M1L - 機能"), i.setTCrumbs({
            currentPage: "feature",
            list: [{
                    url: "#/overview",
                    title: "製品トップ",
                    on: "true"
                }, {
                    url: "#/design",
                    title: "デザイン"
                }, {
                    url: "#/features",
                    title: "機能"
                }, {
                    url: "#/camera",
                    title: "相机"
                }, {
                    url: "#/os",
                    title: "Smartisan OS"
                }, {
                    url: "#/specs",
                    title: "スペック"
                }]
        }, "", !0)) : (i.setTitle("Smartisan M1 / M1L - 功能"), i.setTCrumbs({
            currentPage: "feature",
            list: [{
                    url: "#/overview",
                    title: "概览",
                    on: "true"
                }, {
                    url: "#/design",
                    title: "设计"
                }, {
                    url: "#/features",
                    title: "功能"
                }, {
                    url: "#/camera",
                    title: "相机"
                }, {
                    url: "#/os",
                    title: "操作系统"
                }, {
                    url: "#/specs",
                    title: "技术规格"
                }]
        }, "", !0)), !i.isMobile()) {
            ! function () {
                "use strict";
                for (var e, t = 0, i = "webkit moz ms o".split(" "), r = window.requestAnimationFrame, n = window.cancelAnimationFrame,
                        s = 0; s < i.length && (!r || !n); s++) e = i[s], r = r || window[e + "RequestAnimationFrame"],
                        n = n || window[e + "CancelAnimationFrame"] || window[e + "CancelRequestAnimationFrame"];
                r && n || (r = function (e, i) {
                    var r = (new Date).getTime(),
                        n = Math.max(0, 16 - (r - t)),
                        s = window.setTimeout(function () {
                            e(r + n)
                        }, n);
                    return t = r + n, s
                }, n = function (e) {
                    window.clearTimeout(e)
                }), window.requestAnimationFrame = r, window.cancelAnimationFrame = n
            }();
            var s = function () {
                if ($(".touchid").hasClass("active")) return $(window).off("scroll", s), !1;
                var e = $(window).scrollTop(),
                    t = $(window).outerHeight();
                $("section").each(function () {
                    var i, r, n = $(this),
                        s = n.attr("class").split(" ")[0];
                    switch (s) {
                    case "chip":
                        i = $(".features .chip .items").offset().top, r = $(".features .chip .items").height();
                        break;
                    case "network":
                        i = $(".features .network").offset().top, r = .518 * $(".features .network").height();
                        break;
                    case "camera":
                        i = $(".features .camera").offset().top, r = $(".features .camera").height() / 2;
                        break;
                    case "smart-touch":
                        i = $(".features .smart-touch figure .homebtn-5").offset().top, r = 0;
                        break;
                    default:
                        i = n.offset().top, r = 0
                    }
                    e + t > i + r && n.addClass("active")
                })
            };
            $(window).on("scroll.features", s);
            var a = function (e, t, i) {
                var r = $(e),
                    n = $(window).scrollTop(),
                    s = r.offset().top,
                    a = r.height();
                ".features .innovation-left" == e ? r.css("transition", "transform 1s cubic-bezier(.165,.84,.44,1)") :
                    r.css("transition", "transform 2s cubic-bezier(.165,.84,.44,1)");
                var o = function () {
                    var o = $(window).scrollTop(),
                        l = $(window).height();
                    if (n = l, o + l > s && s + a > o) {
                        var c = o + l - s;
                        ".features .screen figure" == e ? r.css("transform", "translate(-50%," + -Math.min(t, Math.round(
                            c / i)) + "px)") : r.css("transform", "translate(0," + -Math.min(t, Math.round(c / i)) +
                            "px)")
                    }
                };
                this.obj = $(e), $(window).on("scroll", window, o)
            };
            new a(".features .screen figure", 50, 12);
            $(".features .charge .battery-full-y").addClass("add");
            var o = function () {
                var e = $(".features .charge .battery-full-x").width();
                e += 6, e > $(".features .charge .battery-main").width() ? $(".features .charge .battery-full-y").removeClass(
                    "add") : ($(".features .charge .battery-full-x").width(e), $(".features .charge .battery-full-y").width(
                    e + 6))
            };
            $("html").hasClass("no-opacity") || ($(".features .charge .battery-full-y")[0].addEventListener(
                "webkitAnimationIteration", o), $(".features .charge .battery-full-y")[0].addEventListener(
                "animationiteration", o))
        }
    }]), m1Controllers.controller("OsCtrl", ["$rootScope", "$scope", "$location", "$timeout", "Utils", "SubNav",
        "BlockImages", function (e, t, i, r, n, s, a) {
        a.start(), !n.isMobile() && s.init(), "en" == e.lang ? (n.setTitle("Smartisan M1 / M1L - Smartisan OS"), n.setTCrumbs({
            currentPage: "os",
            list: [{
                    url: "#/overview",
                    title: "Overview",
                    on: "true"
                }, {
                    url: "#/design",
                    title: "Design"
                }, {
                    url: "#/features",
                    title: "Features"
                }, {
                    url: "#/camera",
                    title: "Camera"
                }, {
                    url: "#/os",
                    title: "OS"
                }, {
                    url: "#/specs",
                    title: "Specs"
                }]
        }, "", !0)) : "jp" == e.lang ? (n.setTitle("Smartisan M1 / M1L - Smartisan OS"), n.setTCrumbs({
            currentPage: "os",
            list: [{
                    url: "#/overview",
                    title: "製品トップ",
                    on: "true"
                }, {
                    url: "#/design",
                    title: "デザイン"
                }, {
                    url: "#/features",
                    title: "機能"
                }, {
                    url: "#/camera",
                    title: "相机"
                }, {
                    url: "#/os",
                    title: "Smartisan OS"
                }, {
                    url: "#/specs",
                    title: "スペック"
                }]
        }, "", !0)) : (n.setTitle("Smartisan M1 / M1L - 操作系统"), n.setTCrumbs({
            currentPage: "os",
            list: [{
                    url: "#/overview",
                    title: "概览",
                    on: "true"
                }, {
                    url: "#/design",
                    title: "设计"
                }, {
                    url: "#/features",
                    title: "功能"
                }, {
                    url: "#/camera",
                    title: "相机"
                }, {
                    url: "#/os",
                    title: "操作系统"
                }, {
                    url: "#/specs",
                    title: "技术规格"
                }]
        }, "", !0))
    }]), m1Controllers.controller("SpecsCtrl", ["$rootScope", "$scope", "Utils", "SubNav", "BlockImages", function (e,
        t, i, r, n) {
        n.start(), !i.isMobile() && r.init(), "en" == e.lang ? (i.setTitle("Smartisan M1 / M1L - Tech Specs"), i.setTCrumbs({
            currentPage: "specs",
            list: [{
                    url: "#/overview",
                    title: "Overview",
                    on: "true"
                }, {
                    url: "#/design",
                    title: "Design"
                }, {
                    url: "#/features",
                    title: "Features"
                }, {
                    url: "#/camera",
                    title: "Camera"
                }, {
                    url: "#/os",
                    title: "OS"
                }, {
                    url: "#/specs",
                    title: "Specs"
                }]
        }, "", !0)) : "jp" == e.lang ? (i.setTitle("Smartisan M1 / M1L - スペック"), i.setTCrumbs({
            currentPage: "specs",
            list: [{
                    url: "#/overview",
                    title: "製品トップ",
                    on: "true"
                }, {
                    url: "#/design",
                    title: "デザイン"
                }, {
                    url: "#/features",
                    title: "機能"
                }, {
                    url: "#/camera",
                    title: "相机"
                }, {
                    url: "#/os",
                    title: "Smartisan OS"
                }, {
                    url: "#/specs",
                    title: "スペック"
                }]
        }, "", !0)) : (i.setTitle("Smartisan M1 / M1L - 技术规格"), i.setTCrumbs({
            currentPage: "specs",
            list: [{
                    url: "#/overview",
                    title: "概览",
                    on: "true"
                }, {
                    url: "#/design",
                    title: "设计"
                }, {
                    url: "#/features",
                    title: "功能"
                }, {
                    url: "#/camera",
                    title: "相机"
                }, {
                    url: "#/os",
                    title: "操作系统"
                }, {
                    url: "#/specs",
                    title: "技术规格"
                }]
        }, "", !0)), setTimeout(function () {
            $(".specs-banner").addClass("active")
        }, 100), t.m1SpecColor = "color-silvery", t.m1lSpecColor = "color-silvery", t.changeSpecColor = function (e, i) {
            "m1" == e ? t.m1SpecColor = "color-" + i : "m1l" == e && (t.m1lSpecColor = "color-" + i)
        }
    }]), appsDirectives.directive("iRetinaVideo", ["$timeout", "Utils", function (e, t) {
        function i() {
            return !$("html").hasClass("csstransforms3d")
        }
        return {
            restrict: "A",
            link: function (r, n, s, a) {
                if (n) {
                    var o = !! document.createElement("video").canPlayType;
                    "ipad" == navigator.userAgent.toLowerCase().match(/ipad/i);
                    if (!o || t.isMobile() || i()) return n.replaceWith(function () {
                            var e = s.src;
                            return l > 1 && (e = e.replace(".jpg", "@2x.jpg")), '<img src="' + e + '">'
                        }), void n.remove();
                    var l = window.devicePixelRatio || 1;
                    e(function () {
                        var e = s.source;
                        l > 1 && (e = e.replace(".mp4", "@2x.mp4")), n.before(function () {
                            var e = s.src;
                            return l > 1 && (e = e.replace(".jpg", "@2x.jpg")), '<img src="' + e + '">'
                        }), n.append('<source src="' + e + '" type="video/mp4" />')
                    }, 500)
                }
            }
        }
    }]).directive("iQrcode", ["$timeout", "Utils", function (e, t) {
        return {
            restrict: "A",
            scope: {
                src: "=src",
                qrcode: "=qrcode"
            },
            link: function (e, t, i, r) {
                t && (document.createElement("canvas").getContext ? setTimeout(function () {
                    $(t).empty(), $(t).qrcode({
                        render: "canvas",
                        width: 110,
                        height: 110,
                        text: e.qrcode
                    })
                }, 300) : $(t).append('<img src="' + e.src + '">'))
            }
        }
    }]).directive("jQrcode", ["$timeout", "Utils", function (e, t) {
        return {
            restrict: "A",
            link: function (e, t, i, r) {
                t && (document.createElement("canvas").getContext ? setTimeout(function () {
                    $(t).empty(), $(t).qrcode({
                        render: "canvas",
                        width: 110,
                        height: 110,
                        text: i.qrcode
                    })
                }, 300) : $(t).append('<img src="' + i.src + '">'))
            }
        }
    }]);