/**
 * static.cms - v1.0.0  License By
 * WEB小组
 */
!function () {
    "use strict";
    var t = {
        template: function (t) {
            console.log(t);
            var i = function () {
                var t = navigator.userAgent.toLowerCase();
                return "micromessenger" == t.match(/MicroMessenger/i) || "weibo" == t.match(/weiBo/i) || "Weibo" == t.match(/Weibo/i)
            };
            return '<div class="activity_popup" ><div class="center_main" style="' + ($(window).width() > 750 ? "width:550px" : "") + '">' + (i() ? '<span class="code">' + t.code + "</span>" : '<a target="_blank" href="' + t.url + '" class="link">&nbsp;</a>') + '<a href="javascript:;" class="activity_close"></a><img src="' + (i() ? t.window_tkl_img : t.window_img) + '" alt="" class="bg" /> ' + (i() ? '<div class="copy"><a class="copyCode"  aria-label=" ' + t.kouling + ' " >一键复制</a></div>' : "") + '<div class="copy-ell"><p>复制失败</p>请长按淘口令手动复制</div></div></div><div class="activity_popup_bg"></div>'
        }, getHost: function () {
            var t = "";
            return $.each($("script"), function (i, e) {
                var o = $(this).attr("src");
                if (o && o.indexOf("activityRedPacket") > 0) return t = {
                    host: "//" + o.split("/")[2],
                    version: o.split("?")[1]
                }, !1
            }), t
        }, getJavaScript: function (t, i) {
            var e = document.createElement("script");
            e.src = this.getHost().host + t + "?v=" + this.getHost().version, e.setAttribute("sid", "500625431"), e.setAttribute("cid", "500625432");
            var o = document.getElementsByTagName("script")[0];
            o.parentNode.insertBefore(e, o), e.onload = i.bind(this)
        }, getStyleItem: function (t) {
            var i = "data:image/png;base64,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";
            return "<style>.activity_popup,.activity_popup_bg{ position: fixed; width: 100%; height: 100%; z-index: 900; left: 0; top: 0; display:none;}.activity_popup{transition:all 400ms cubic-bezier(0, 0, 0.43, 1.29) 0s;-webkit-transition:all 400ms cubic-bezier(0, 0, 0.43, 1.29) 0s; -webkit-transform:scale(0);transform: scale(0); opacity: 0;transform-origin:center;}.activity_popup.show,.activity_popup_bg.show{display:block;}.activity_popup.active{-webkit-transform:scale(1);transform: scale(1); opacity: 1;}.activity_popup_bg{ background: #000; opacity: .5;filter: alpha(opacity=50); z-index: 890; }.activity_popup .center_main{position: relative;z-index: 0; top: 15%;  margin: auto;}.activity_popup .center_main img{ width: 100%; display: block; }.activity_popup .center_main .link,.activity_popup .activity_close{ position: absolute; left: 0; top: 0; z-index: 10; width: 100%; height: 100%; }.activity_popup .code{ position: absolute; top: 61%; width: 100%; text-align: center; font-size:18px; color:#FFEA8A; font-family: Arial; }.activity_popup .activity_close {  width: 40px;height: 40px; bottom:-60px; background: url(" + i + ') no-repeat;background-size: cover; left: 50%; margin-left:-20px; top: auto;    }.activity_popup .copy{  position: absolute; left: 0; top: 68%; width:100%; opacity: 0;}.activity_popup .copy a{ width:50%; height:60px; left:25%; display: block;position: relative; color: #B62F00;font-size: 18px; background: url("https://img.alicdn.com/imgextra/i2/2053469401/O1CN012JJhsrU0L2XRej4-2053469401.png") no-repeat center center;background-size: 100% auto; text-align: center;    line-height:  60px;  font-weight: 500;}.tmall_home_tab{position: fixed; right: 10px; bottom: 85px; z-index: 400; width: 60px; height: 60px;}.tmall_home_tab img{ width: 100%; }.active_tmall_msg{ padding:5px 20px;  line-height: 26px; }.active_tmall_msg p,.active_tmall_msg p i.iconfont{ color: #FFDC17; font-size: 18px; margin: 0; padding:0;}.active_tmall_msg p i.iconfont{ font-size: 20px; margin-right: 5px; }.activity_popup .copy-ell{ position: absolute; top: 68%; text-align: center; width: 100%; left: 0; z-index: 5; font-size: 14px; color: #fff; display:none;  }.activity_popup .copy-ell p{ font-size: 16px; color: #fff; font-weight: 500;}</style>'
        }, setCookie: function (t, i, e) {
            if (0 == e) return !1;
            var o = new Date(e);
            console.log(o.getTime()), o.setTime(o.getTime()), document.cookie = t + "=" + escape(i) + ";expires=" + o.toGMTString()
        }, getCookie: function (t) {
            var i, e = new RegExp("(^| )" + t + "=([^;]*)(;|$)");
            return !!(i = document.cookie.match(e)) && unescape(i[2])
        }, delCookie: function (t) {
            var i = new Date;
            i.setTime(i.getTime() - 1);
            var e = this.getCookie(t);
            null != e && (document.cookie = t + "=" + e + ";expires=" + i.toGMTString())
        }
    }, i = function () {
        this.item = !1, this.$scope = {url: "?r=index/down", location: "bottom"}, this.init()
    };
    i.prototype.init = function () {
        var i = this;
        this.getActivityItem(function (o) {
            return 0 != parseInt(o.is_on) && ($("body").append(t.getStyleItem()).append('<a class="tmall_home_tab"><img src="' + o.window_right_img + '" alt=""></a>'), $(".tmall_home_tab").on("click", function (i) {
                i.preventDefault(), e() ? t.delCookie("ACTIVITY_POPUP") : window.location.href = o.url
            }), !t.getCookie("ACTIVITY_POPUP") && void i.setIntTime())
        });
        var e = function () {
            var t = navigator.userAgent.toLowerCase();
            return "micromessenger" == t.match(/MicroMessenger/i) || "weibo" == t.match(/weiBo/i) || "Weibo" == t.match(/Weibo/i)
        }
    }, i.prototype.on = function (i) {
        var e = this.item;
        $(i).find(".activity_close").on("click", function () {
            $(".activity_popup,.activity_popup_bg").removeClass("active"), setTimeout(function () {
                $(".activity_popup,.activity_popup_bg").removeClass("show"), setTimeout(function () {
                    $(".activity_popup,.activity_popup_bg").remove()
                }, 400)
            }, 50);
            var i = function () {
                var t = new Date;
                t.setHours("23"), t.setMinutes("59"), t.setSeconds("60");
                var i = e;
                return i = 0 === parseInt(i.close_after) ? new Date(1e3 * i.close_after_time) : 1 === parseInt(i.close_after) && t
            }, o = i();
            o && t.setCookie("ACTIVITY_POPUP", !0, o.toGMTString())
        })
    }, i.prototype.setIntTime = function (i) {
        var e = this, o = this.item, a = $(t.template(o));
        e.on(a), $("body").append(a), $(".activity_popup,.activity_popup_bg").addClass("show"), setTimeout(function () {
            $(".activity_popup,.activity_popup_bg").addClass("active")
        }, 50), t.getJavaScript("/js/clipboard.min.js", function () {
            setTimeout(function () {
                e.copy(a)
            }, 500)
        })
    }, i.prototype.copy = function (t) {
        $(".activity_popup .copyCode").click(function () {
            layer.msg($(this).attr("aria-label"))
        });
        var i = new Clipboard(".activity_popup .copyCode", {
            text: function (t) {
                return t.getAttribute("aria-label")
            }
        });
        i.on("success", function (i) {
            $(t).find(".activity_close").click(), layer.msg("<div class='active_tmall_msg'><p ><i class='iconfont icon-chenggong'></i>复制成功！</p>打开手机淘宝领取红包</div>"), i.clearSelection()
        }), i.on("error", function (t) {
            $(".activity_popup .copy-ell").show(), $(".activity_popup .copy").hide()
        })
    }, i.prototype.getActivityItem = function (i) {
        var e = this;
        new Promise(
            function (resolve, reject) {
                axios.get('dtk/getSuperRed', {
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
        ).then(function (t) {
            200 == t.status && t.data && (e.item = t.data, i(t.data));
        });
    }, i.prototype.hideUp = function (t) {
        t.removeClass("active"), setTimeout(function () {
            t.remove()
        }, 500)
    }, new i
}();