/**
 * static.cms - v1.0.0  License By
 * WEB小组
 */
!function (e, t, i, o) {
    var n = e(t);
    e.fn.lazyload = function (r) {
        function f() {
            var t = 0;
            a.each(function () {
                var i = e(this);
                if (!d.skip_invisible || i.is(":visible")) if (e.abovethetop(this, d) || e.leftofbegin(this, d)) ; else if (e.belowthefold(this, d) || e.rightoffold(this, d)) {
                    if (++t > d.failure_limit) return !1
                } else i.trigger("appear"), t = 0
            })
        }

        var l, a = this, d = {
            threshold: 0,
            failure_limit: 0,
            event: "scroll",
            effect: "show",
            container: t,
            data_attribute: "original",
            skip_invisible: !0,
            appear: null,
            load: null,
            placeholder: "../images/rolling.gif"
        };
        return r && (o !== r.failurelimit && (r.failure_limit = r.failurelimit, delete r.failurelimit), o !== r.effectspeed && (r.effect_speed = r.effectspeed, delete r.effectspeed), e.extend(d, r)), l = d.container === o || d.container === t ? n : e(d.container), 0 === d.event.indexOf("scroll") && l.bind(d.event, function () {
            return f()
        }), this.each(function () {
            var t = this, i = e(t);
            t.loaded = !1, i.attr("src") !== o && i.attr("src") !== !1 || i.is("img") && i.attr("src", d.placeholder), i.one("appear", function () {
                if (!this.loaded) {
                    if (d.appear) {
                        var o = a.length;
                        d.appear.call(t, o, d)
                    }
                    e("<img />").bind("load", function () {
                        i.css("background", "#f5f5f5");
                        var o = i.attr("data-" + d.data_attribute);
                        i.hide(), i.is("img") ? i.attr("src", o) : i.css("background-image", "url('" + o + "')"), i[d.effect](d.effect_speed), t.loaded = !0;
                        var n = e.grep(a, function (e) {
                            return !e.loaded
                        });
                        if (a = e(n), d.load) {
                            var r = a.length;
                            d.load.call(t, r, d)
                        }
                    }).attr("src", i.attr("data-" + d.data_attribute))
                }
            }), 0 !== d.event.indexOf("scroll") && i.bind(d.event, function () {
                t.loaded || i.trigger("appear")
            })
        }), n.bind("resize", function () {
            f()
        }), /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && n.bind("pageshow", function (t) {
            t.originalEvent && t.originalEvent.persisted && a.each(function () {
                e(this).trigger("appear")
            })
        }), e(i).ready(function () {
            f()
        }), this
    }, e.belowthefold = function (i, r) {
        var f;
        return f = r.container === o || r.container === t ? (t.innerHeight ? t.innerHeight : n.height()) + n.scrollTop() : e(r.container).offset().top + e(r.container).height(), f <= e(i).offset().top - r.threshold
    }, e.rightoffold = function (i, r) {
        var f;
        return f = r.container === o || r.container === t ? n.width() + n.scrollLeft() : e(r.container).offset().left + e(r.container).width(), f <= e(i).offset().left - r.threshold
    }, e.abovethetop = function (i, r) {
        var f;
        return f = r.container === o || r.container === t ? n.scrollTop() : e(r.container).offset().top, f >= e(i).offset().top + r.threshold + e(i).height()
    }, e.leftofbegin = function (i, r) {
        var f;
        return f = r.container === o || r.container === t ? n.scrollLeft() : e(r.container).offset().left, f >= e(i).offset().left + r.threshold + e(i).width()
    }, e.inviewport = function (t, i) {
        return !(e.rightoffold(t, i) || e.leftofbegin(t, i) || e.belowthefold(t, i) || e.abovethetop(t, i))
    }, e.extend(e.expr[":"], {
        "below-the-fold": function (t) {
            return e.belowthefold(t, {threshold: 0})
        }, "above-the-top": function (t) {
            return !e.belowthefold(t, {threshold: 0})
        }, "right-of-screen": function (t) {
            return e.rightoffold(t, {threshold: 0})
        }, "left-of-screen": function (t) {
            return !e.rightoffold(t, {threshold: 0})
        }, "in-viewport": function (t) {
            return e.inviewport(t, {threshold: 0})
        }, "above-the-fold": function (t) {
            return !e.belowthefold(t, {threshold: 0})
        }, "right-of-fold": function (t) {
            return e.rightoffold(t, {threshold: 0})
        }, "left-of-fold": function (t) {
            return !e.rightoffold(t, {threshold: 0})
        }
    })
}(jQuery, window, document);