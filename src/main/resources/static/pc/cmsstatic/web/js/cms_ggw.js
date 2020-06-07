/**
 * static.cms - v1.0.0  License By
 * WEB小组
 */
function setCookie(e, t, a) {
    var o = new Date;
    o.setTime(o.getTime() + a), document.cookie = e + "=" + escape(t) + (";expires=" + o.toGMTString())
}

function getCookie(e) {
    return document.cookie.length > 0 && (c_start = document.cookie.indexOf(e + "="), c_start != -1) ? (c_start = c_start + e.length + 1, c_end = document.cookie.indexOf(";", c_start), c_end == -1 && (c_end = document.cookie.length), unescape(document.cookie.substring(c_start, c_end))) : ""
}

function isHasImg(e) {
    var t = new Image;
    t.src = e, t.onload = function () {
        t.width > 1e3 && t.height > 0 || ($("#topimg").css("height", 0), $("#topimg").find("img").css("height", 0))
    }
}

var randData = function (e, t, a, o) {
    var s = "";
    if (a = 1 == a.switch_type ? a : a.data[0], 2 == t) {
        var i;
        if (i = "" == getCookie(o) ? "" : getCookie(o), a.data.length > 1) {
            for (var c = a.data.length, n = [], _ = 0; _ < c; _++) a.data[_].ad_id != i && n.push(a.data[_]);
            c = parseInt(Math.random() * n.length), s = n[c]
        } else s = a.data[0];
        i = s.ad_id, setCookie(o, i, 1e16)
    } else s = a.data[0];
    return s
};
$(document).ready(function (e) {
    var t = 0;
    // step1，请求数据
    var step1 = new Promise(
        function (resolve, reject) {
            axios.get('dtk/getGgwRecomd', {
                params: {}
            }).then(function (response) {
                // handle success
                resolve(response.data);
            }).catch(function (error) {
                // handle error
                console.log(error);
                reject(error);
            }).finally(function () {
                // always executed
            });
        }
    );
    // step2，显示广告
    var step2 = new Promise(
        function (resolve, reject) {
            step1.then(function (e) {
                if (0 == e.status && e.data.length > 0) {
                    if (e.data[0].cms_web_index && e.data[0].cms_web_index.data.length > 0) {
                        var t = e.data[0].cms_web_index,
                            a = 1 == t.close_btn ? '<span class="ggw_fm_close"></span>' : "",
                            o = 1 == t.close_after ? "ggw_cok" : "",
                            s = randData(t.switch_type, t.content_source, t, "cms_web_sort_index"),
                            i = 1 == s.open_type ? "_blank" : "_self", c = "{desc:'弹窗入口流量表'}",
                            n = "{desc:'弹窗入口展示',name:'PopupWindowsShow'}";
                        try {
                            DTKsatc.eventStat({name: "PopupWindowsShow", params: {desc: "弹窗入口展示"}})
                        } catch (_) {
                        }
                        var g = '<div class="ggw_fm ' + o + '"  data-cok="cms_web_index"><div class="img_size" ><img src="' + s.img_url + '"></div><div class="ggw_fm_main cms_ggw"  data-dtk-satc="' + n + '" data-dtk-event="show"  ><a href="' + s.href + '" target="' + i + '"  data-dtk-satc="' + c + '"></a></div>' + a + "</div>";
                        1 == t.close_after ? 0 == getCookie("cms_web_index") && "" != getCookie("cms_web_index") || $("body").append(g) : (setCookie("cms_web_index", "0", 1), $("body").append(g))
                    }
                    if (e.data[0].cms_web_right && e.data[0].cms_web_right.data.length > 0) {
                        var r = e.data[0].cms_web_right,
                            o = 1 == r.close_after ? "ggw_cok ggw_clo" : 2 == r.close_after ? "ggw_clo" : "",
                            a = 1 == r.close_btn && 3 != r.close_after ? '<span class="ggw_fm_close"></span>' : "",
                            s = randData(r.switch_type, r.content_source, r, "cms_web_sort_right"),
                            i = 1 == s.open_type ? "_blank" : "_self", d = "{desc:'右侧浮窗流量表'}",
                            l = '<div class="ggw_fr ' + o + '" data-dtk-satc="' + d + '" data-cok="cms_web_right"><div class="ggw_fr_main"><a href="' + s.href + '" target="' + i + '" ><img src="' + s.img_url + '" alt=""></a>' + a + "</div></div>";
                        1 == r.close_after ? 0 == getCookie("cms_web_right") && "" != getCookie("cms_web_right") || $("body").append(l) : (setCookie("cms_web_right", "0", 1), $("body").append(l))
                    }
                    if (e.data[0].cms_web_top && e.data[0].cms_web_top.data.length > 0) {
                        var m = e.data[0].cms_web_top,
                            a = 1 == m.close_btn && 3 != m.close_after ? '<span class="ggw_fm_close"></span>' : "",
                            o = 1 == m.close_after ? "ggw_cok ggw_clo" : 2 == m.close_after ? "ggw_clo" : "",
                            s = randData(m.switch_type, m.content_source, m, "cms_web_sort_top"),
                            i = 1 == s.open_type ? "_blank" : "_self", w = "{desc:'PC顶部流量表'}",
                            p = "{desc:'PC顶部横幅位展示',name:'PcTopBannerShow'}",
                            l = '<div id="topimg" class="' + o + '" data-dtk-satc="' + w + '" data-cok="cms_web_top"><div class="ggw_fr_main" data-dtk-satc="' + p + '" data-dtk-event="show"   ><a href="' + s.href + '" target="' + i + '" ><img  style="width:100%;min-width:1200px;max-height:80px" src="' + s.img_url + '" alt=""></a>' + a + "</div></div>";
                        try {
                            DTKsatc.eventStat({name: "PcTopBannerShow", params: {desc: "PC顶部横幅位展示"}})
                        } catch (_) {
                        }
                        1 == m.close_after ? 0 == getCookie("cms_web_top") && "" != getCookie("cms_web_top") || (isHasImg(s.img_url), $("#testTop").append(l)) : (setCookie("cms_web_top", "0", 1), $("#testTop").append(l))
                    }
                    try {
                        isHasImg(s.img_url)
                    } catch (f) {
                    }
                }
                // 显示完成，调用执行成功方法，以便执行后面回调函数
                resolve(e);
            });
        }
    );
    step2.then(function (value) {
        o();
        var e = $(".ggw_fr img").height();
        console.log(e), $(".ggw_fr").css({
            "margin-top": -(e / 2) + "px",
            visibility: "visible"
        }), $(window).resize(function () {
            $(".banner_con").width() + $(".banner_con").offset().left + 20 + "px";
            $(".ggw_fr").css({visibility: "visible"})
        });
        var t = new Date;
        t.setHours("23"), t.setMinutes("59"), t.setSeconds("60"), $(".ggw_cok a").click(function () {
            document.cookie = $(this).parents(".ggw_cok").data("cok") + "=" + escape(0) + (";expires=" + t.toGMTString())
        }), $(".ggw_cok .ggw_fm_close").click(function () {
            document.cookie = $(this).parents(".ggw_cok").data("cok") + "=" + escape(0) + (";expires=" + t.toGMTString())
        }), $(".ggw_fm_close").on("click", function () {
            0 != $(this).parents(".layui-layer").length ? layer.closeAll() : $(this).parent().parent().remove()
        }), $(".ggw_fm_main a").on("click", function (e) {
            var t = $(this).attr("href"), a = "_blank" == $(this).attr("target") ? 1 : 0;
            layer.closeAll(), e.preventDefault(), setTimeout(function () {
                a ? window.open(t) : window.location.href = t
            }, 10)
        }), $(".ggw_clo .ggw_fr_main a").on("click", function (e) {
            var t = $(this).attr("href"), a = "_blank" == $(this).attr("target") ? 1 : 0;
            $(".ggw_clo").remove(), e.preventDefault(), setTimeout(function () {
                a ? window.open(t) : window.location.href = t
            }, 10)
        })
    });

    var o = function () {
        if (t++, t < 200) if (0 == $(".img_size img").width()) setTimeout(arguments.callee, 10); else {
            var e = $(".img_size img").width(), a = $(".img_size img").height();
            if (e = e > 600 ? 600 : e + 1, a = a > 600 ? 600 : a + 1, e += "px", a += "px", $(".ggw_fm_main a").append('<img src="' + $(".img_size img").attr("src") + '" />'), $(".img_size").remove(), $(".ggw_fm img").length > 0) {
                var o = 0;
                $(".cms_ggw").parents(".layui-layer").css({
                    background: "none",
                    "box-shadow": "none"
                }), layer.open({
                    type: 1,
                    title: "",
                    closeBtn: 0,
                    shade: .7,
                    skin: "layui-layer-molv",
                    area: [e, a],
                    content: $(".ggw_fm"),
                    end: function () {
                        $("body").css("overflow", ""), o = 1
                    }
                }), $(document).on("mousewheel", function () {
                    if (1 != o) return !1
                })
            }
        }
    }
});