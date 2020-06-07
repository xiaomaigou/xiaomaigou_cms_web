!function (window, document) {
    "use strict";

    function getXpath(a, b, c) {
        if (!a) throw new TypeError("element cannot be empty");
        if (a === window || a === document.documentElement) throw new TypeError("element should be a descendent of body");
        if (1 !== a.nodeType) throw new TypeError("element should be a single node");
        if (b && 1 !== b.nodeType) throw new TypeError("context should be a single node");
        if (c = EventUtil.getAttribute(a, "data-dtk-satc"), "" !== a.id) return "id=" + a.id + (c ? "~" + c + "~" : "");
        if (a === document.body) return "html>body";
        if (a === b) return "";
        var d = 1, e = "";
        if (a.parentNode) {
            var f = a.parentNode.childNodes;
            for (var g in f) {
                var h = f[g];
                h === a ? (e = getXpath(a.parentNode, b, EventUtil.getAttribute(a, "data-dtk-satc")), e && (e += ">"), e += a.tagName.toLowerCase() + (d > 1 && d ? ":eq(" + (d - 1) + ")" : "")) : 1 === h.nodeType && h.tagName === a.tagName ? d += 1 : c && e.indexOf("~") < 0 && (e += "~" + c + "~")
            }
        }
        return e
    }

    function parseXpath(a, b) {
        if (!a) throw new TypeError("query cannot be empty");
        if ("string" != typeof a) throw new TypeError("query should be a string");
        if (b && 1 !== b.nodeType) throw new TypeError("context should be a single node");
        b || (b = document.body, a = a.replace("html>body", ""));
        var c = a.replace(/\/\/\*\[@id\="(\w+?)"\]/g, "#$1").split(/\//), d = b, e = c.shift();
        do if (e && (d = find(e, d)), !d) break; while (e = c.shift());
        return d
    }

    function find(a, b) {
        if ("#" === a.substr(0, 1)) return document.getElementById(a.substr(1));
        for (var c = null, d = a.match(/(\w+)(\[(\d+)\])?/), e = d[1], f = parseInt(d[3], 10) || 1, g = b.childNodes, h = 0, i = 0; i < g.length; i++) if (1 === g[i].nodeType && g[i].tagName.toLowerCase() === e && (h += 1, f === h)) {
            c = g[i];
            break
        }
        return c
    }

    if (window.DTKsatc) return !1;
    Array.prototype.forEach || (Array.prototype.forEach = function (a, b) {
        var c, d;
        if (null == this) throw new TypeError("this is null or not defined");
        var e = Object(this), f = e.length >>> 0;
        if ("function" != typeof a) throw new TypeError(a + " is not a function");
        for (arguments.length > 1 && (c = b), d = 0; f > d;) {
            var g;
            d in e && (g = e[d], a.call(c, g, d, e)), d++
        }
    });
    var EventUtil = {
        on: function (a, b, c) {
            a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent ? a.attachEvent("on" + b, c) : a["on" + b] = c
        }, getClassName: function (a, b) {
            return this.getAttribute(a, "data-dtk-satc") || b ? "show" != this.getAttribute(a, "data-dtk-event") ? a : "show" : a.parentNode && a.parentNode.tagName ? this.getClassName(a.parentNode) : !1
        }, setCookie: function (a, b, c) {
            var d = c, e = new Date;
            e.setTime(e.getTime() + 24 * d * 60 * 60 * 1e3), document.cookie = a + "=" + escape(b) + ";expires=" + e.toGMTString()
        }, getCookie: function (a) {
            var b, c = new RegExp("(^| )" + a + "=([^;]*)(;|$)");
            return (b = document.cookie.match(c)) ? unescape(b[2]) : !1
        }, getAttribute: function (a, b) {
            return "object" == typeof a && "string" == typeof b ? "class" == b ? a.className : a.getAttribute(b) : void 0
        }, browserRedirect: function () {
            var a = navigator.userAgent.toLowerCase(), b = "ipad" == a.match(/ipad/i),
                c = "iphone os" == a.match(/iphone os/i), d = "midp" == a.match(/midp/i),
                e = "rv:1.2.3.4" == a.match(/rv:1.2.3.4/i), f = "ucweb" == a.match(/ucweb/i),
                g = "android" == a.match(/android/i), h = "windows ce" == a.match(/windows ce/i),
                i = "windows mobile" == a.match(/windows mobile/i);
            return b || c || d || e || f || g || h || i ? "wap" : "pc"
        }, getElementPos: function (a) {
            var b = navigator.userAgent.toLowerCase(), c = -1 != b.indexOf("opera"),
                d = (-1 != b.indexOf("msie") && !c, a), e = window.event || {},
                f = document.documentElement.scrollLeft || document.body.scrollLeft,
                g = document.documentElement.scrollTop || document.body.scrollTop, h = e.pageX || (e.clientX || 0) + f,
                i = e.pageY || (e.clientY || 0) + g;
            if (null === d.parentNode || "none" == d.style.display) return {x: 0, y: 0};
            var j, k = null, l = [];
            if (d.getBoundingClientRect) {
                j = d.getBoundingClientRect();
                var m = Math.max(document.documentElement.scrollTop, document.body.scrollTop),
                    n = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
                return {x: h - (j.left + n) ? 0 : h - (j.left + n), y: i - (j.top + m) ? 0 : i - (j.top + m)}
            }
            if (document.getBoxObjectFor) {
                j = document.getBoxObjectFor(d);
                var o = d.style.borderLeftWidth ? parseInt(d.style.borderLeftWidth) : 0,
                    p = d.style.borderTopWidth ? parseInt(d.style.borderTopWidth) : 0;
                l = [j.x - o, j.y - p]
            } else {
                if (l = [d.offsetLeft, d.offsetTop], k = d.offsetParent, k != d) for (; k;) l[0] += k.offsetLeft, l[1] += k.offsetTop, k = k.offsetParent;
                (-1 != b.indexOf("opera") || -1 != b.indexOf("safari") && "absolute" == d.style.position) && (l[0] -= document.body.offsetLeft, l[1] -= document.body.offsetTop)
            }
            for (k = d.parentNode ? d.parentNode : null; k && "BODY" != k.tagName && "HTML" != k.tagName;) l[0] -= k.scrollLeft, l[1] -= k.scrollTop, k = k.parentNode ? k.parentNode : null;
            return {x: h - l[0] < 0 ? 0 : h - l[0], y: i - l[1] ? 0 : i - l[1]}
        }, getUrlVars: function (a) {
            for (var b, c = {}, d = a.slice(a.indexOf("?") + 1).split("&"), e = 0; e < d.length; e++) b = d[e].split("="), c[b[0]] = b[1];
            return c
        }
    }, DTKsatc = function () {
        this.version = "0.0.1", this.satcURL = "//satc.dataoke.com/sendBAMessage?t=" + (new Date).getTime(), this.lang = {
            debug: {
                tid: {
                    success: "tid集成成功 ",
                    error: "如果是CMS请一定把站点tid填写上。"
                }, uid: {success: "uid集成成功", error: "登录用户请把用户uid填写上。"}
            }
        }, this.init()
    };
    DTKsatc.prototype.init = function () {
        this.setSatc(this.satcURL, this.config()), this.onRender()
    }, DTKsatc.prototype.onRender = function () {
        var a = this;
        EventUtil.on(document, "click", function (b) {
            var c = b.srcElement ? b.srcElement : b.target, d = EventUtil.getClassName(c) || c;
            return "show" == d ? !1 : void a.setSatcTagItem(c)
        });
        for (var b = document.getElementsByTagName("*"), c = 0; c < b.length; c++) "show" == EventUtil.getAttribute(b[c], "data-dtk-event") && a.setSatcTagItem(b[c])
    }, DTKsatc.prototype.setSatcTagItem = function (eventTarget) {
        var config = this.config(), _this = this, target = eventTarget, width = target.offsetWidth,
            height = target.offsetHeight, item = getXpath(target),
            xpath = item.indexOf("~") >= 0 ? item.split("~")[0] + item.split("~")[2] : item,
            elementPos = EventUtil.getElementPos(target);
        if ("A" != target.tagName && "BUTTON" != target.tagName && "INPUT" != target.tagName && xpath.indexOf(">a") < 0 && xpath.indexOf(">botton") < 0 && xpath.indexOf(">input") < 0 && item.indexOf("~") < 0) return !1;
        var data = {
            name: "globalEvent",
            url: config.url,
            cid: config.cid,
            uid: config.uid,
            tid: config.tid,
            ds: config.ds,
            ua: config.ua,
            referrer: config.referrer,
            trackcode: config.trackcode,
            site: xpath + "-w" + width + "_h" + height + "_x" + elementPos.x + "_y" + elementPos.y
        };
        if (item.indexOf("~") >= 0) {
            var addData = eval("(" + item.split("~")[1] + ")");
            data.name = addData.name || data.name, addData.name && delete addData.name, data.params = encodeURIComponent(JSON.stringify(addData))
        }
        _this.setSatc("//satc.dataoke.com/sendEvent?t=" + (new Date).getTime(), data)
    }, DTKsatc.prototype.config = function () {
        var a = this.DOMsctipt()[0], b = a.getAttribute("tid"), c = a.getAttribute("uid"), d = window.location.href;
        this.debug("tid", b), this.debug("uid", c);
        var e = d.indexOf("trackcode") >= 0 ? EventUtil.getUrlVars(d).trackcode : EventUtil.getCookie("trackcode");
        return d.indexOf("trackcode") >= 0 && EventUtil.setCookie("trackcode", e), {
            domain: window.document.location.host,
            url: window.encodeURIComponent(window.document.location.href),
            title: window.encodeURIComponent(window.document.title.replace(/[\r\n^]/g, "")),
            referrer: window.encodeURIComponent(window.document.referrer),
            px: window.screen.width + "x" + window.screen.height,
            ua: window.encodeURIComponent(window.navigator.userAgent.toLowerCase() || ""),
            lang: (window.navigator.language || window.navigator.userLanguage).toLowerCase(),
            ds: EventUtil.browserRedirect(),
            cid: this.getUserCid(),
            uid: c && "" != c ? window.encodeURIComponent(c) : null,
            tid: b,
            trackcode: e
        }
    }, DTKsatc.prototype.debug = function (a, b) {
        var c = this.DOMsctipt()[0], d = c.getAttribute("debug");
        if ("true" != d) return !1;
        this.lang.debug;
        return this
    }, DTKsatc.prototype.setSatc = function (a, b) {
        var c = new Image;
        return c.src = a + this.getCalculationUrl(b), this
    }, DTKsatc.prototype.getCalculationUrl = function (a) {
        var b = "";
        for (var c in a) b += a[c] ? "&" + c + "=" + a[c] : "";
        return b
    }, DTKsatc.prototype.DOMsctipt = function () {
        for (var a, b = document.getElementsByTagName("script"), c = 0; c < b.length; c++) if ("undefined" != typeof b[c].attributes.name && "DTKSATC" == b[c].attributes.name.nodeValue) {
            a = [], a.push(b[c]);
            break
        }
        return a
    }, DTKsatc.prototype.getUserCid = function () {
        var a = EventUtil.getCookie("dtk_satc_cid_v1130") || parseInt(1e8 * Math.random()) + (new Date).getTime();
        return EventUtil.setCookie("dtk_satc_cid_v1130", a, 365), a
    }, window.DTKsatc = window.DTKsatc || function (a) {
        return {
            eventStat: function (b) {
                var c = a.config();
                c.name = b.name, b.name && delete b.name, c.params = encodeURIComponent(JSON.stringify(b.params)), a.setSatc("//satc.dataoke.com/sendEvent?t=" + (new Date).getTime(), c)
            }, restart: function () {
                a.init()
            }
        }
    }(new DTKsatc)
}(window, document);