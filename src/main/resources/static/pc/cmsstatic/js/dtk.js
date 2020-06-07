/**
 * static.cms - v1.0.0  License By
 * WEB小组
 */
var MtaH5 = {
    clickStat: function () {
    }, pgv: function () {
    }
};
(function () {
    $(function () {
        var e;
        e = function (e) {
            return "undefined" != typeof e || (layer.msg("返回格式不对"), !1)
        }, $("#ajaxSEO").click(function () {
            var e;
            e = "seo", $.ajax("index.php?r=UserConfig/addEdit", {
                type: "post",
                dataType: "json",
                data: {
                    title: $("#title").val(),
                    keywords: $("#keywords").val(),
                    description: $("#description").val(),
                    style: e
                },
                error: function (e, t, a) {
                    return layer.msg(a)
                },
                success: function (e) {
                    return layer.msg(e.msg)
                }
            })
        }), $("#ajaxIndividuality").click(function () {
            var e;
            e = "gexing", $.ajax("index.php?r=UserConfig/addEdit", {
                type: "post",
                dataType: "json",
                data: {
                    siteName: $("#siteName").val(),
                    qq: $("#qq").val(),
                    addLinks: $("#addLinks").val(),
                    signature: $("#signature").val(),
                    style: e
                },
                error: function (e, t, a) {
                    return layer.msg(a)
                },
                success: function (e) {
                    return layer.msg(e.msg)
                }
            })
        }), $("#ajaxVipSet").click(function () {
            var e;
            e = "vipset", $.ajax("index.php?r=UserConfig/addEdit", {
                type: "post",
                dataType: "json",
                data: {tdj: $("#tdj").val(), tj: $("#tj").val(), style: e},
                error: function (e, t, a) {
                    return layer.msg(a)
                },
                success: function (e) {
                    return layer.msg(e.msg)
                }
            })
        }), $(".ajaxSpanBj").click(function () {
            var e, t;
            t = $(this), e = t.attr("data-id"), $.ajax("index.php?r=UserConfig/setMyBj", {
                type: "post",
                dataType: "json",
                data: {id: e},
                error: function (e, t, a) {
                    return layer.msg(a)
                },
                success: function (e) {
                    return layer.msg(e.msg)
                }
            })
        }), $(".ajaxSpanHb").click(function () {
            var e, t;
            t = $(this), e = t.attr("data-id"), $.ajax("index.php?r=UserConfig/setMyHb", {
                type: "post",
                dataType: "json",
                data: {id: e},
                error: function (e, t, a) {
                    return layer.msg(a)
                },
                success: function (e) {
                    return layer.msg(e.msg)
                }
            })
        }), $(".ajaxSpanHbDel").click(function () {
            var e, t;
            t = $(this), e = t.attr("data-id"), $.ajax("index.php?r=UserConfig/delMyHb", {
                type: "post",
                dataType: "json",
                data: {id: e},
                error: function (e, t, a) {
                    return layer.msg(a)
                },
                success: function (e) {
                    return layer.msg(e.msg)
                }
            })
        })
    })
}).call(this), $(document).ready(function (e) {
    jQuery.fn.isChildAndSelfOf = function (e) {
        return this.closest(e).length > 0
    }, e("body #baner #nav a.app_download").mouseover(function (t) {
        e(this).addClass("hover");
        var a = this;
        e("body").unbind("mouseover").on("mouseover", function (t) {
            e(t.target).isChildAndSelfOf("body #baner #nav a.app_download") || e(a).removeClass("hover")
        })
    })
});
var $cmsApi = {
    setMtaCookie: function () {
        if (this.getMtaCookie()) return this.getMtaCookie();
        var e = 365, t = new Date;
        t.setTime(t.getTime() + 24 * e * 60 * 60 * 1e3), document.cookie = "MTA-USER-ID=" + escape(function () {
            for (var e = "", t = 0; t < 4; t++) e += parseInt(1e8 * Math.random());
            return hex_md5(e)
        }()) + ";expires=" + t.toGMTString()
    }, getMtaCookie: function () {
        var e, t = new RegExp("(^| )MTA-USER-ID=([^;]*)(;|$)");
        return !!(e = document.cookie.match(t)) && unescape(e[2])
    }
};
$(window).load(function () {
    $cmsApi.setMtaCookie()
});