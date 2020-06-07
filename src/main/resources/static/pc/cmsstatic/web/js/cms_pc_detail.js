/**
 * static.cms - v1.0.0  License By
 * WEB小组
 */
function qrcode() {
    $.ajax({
        type: "post", url: "/index.php?r=l/getpic", dataType: "json", data: {}, success: function (t) {
            if (1 == t.status) {
                var a = '<img src="' + t.data.long_pic + '" class="qr_base_64" alt="Base64 encoded image" />';
                $(".buy-share").after(a)
            }
        }, error: function (t) {
        }
    })
}

$(function () {
    var t = $("#jp_container_1").data("video"), a = $("#jp_container_1").data("post");
    $("#jquery_jplayer_1").jPlayer({
        ready: function () {
            $(this).find("video") && $(this).find("video").attr("webkit-playsinline", "webkit-playsinline"), $(this).jPlayer("setMedia", {
                m4v: t,
                m4a: t,
                poster: a
            }), $("#jquery_jplayer_1").click(function () {
                $("#jp_container_1 .jp-play").click()
            }), $(".jp-play-btn").click(function () {
                $("#jp_container_1 .jp-play").click(), "播放视频" == $(this).html() ? $(this).html("暂停播放") : $(this).html("播放视频")
            })
        },
        swfPath: "./js",
        supplied: "webmv, ogv, m4v",
        useStateClassSkin: !0,
        autoBlur: !1,
        volume: .5,
        smoothPlayBar: !0,
        keyEnabled: !0,
        remainingDuration: !0,
        toggleDuration: !0,
        ended: function () {
            $("#jp_container_1 .jp-video-play").fadeIn(), $(".jp-play-bar").attr("style", "width:100%"), $("#jp_container_1 .jp-play-bar").val("100%")
        },
        play: function () {
            $("#jp_container_1 .jp-video-play").fadeOut(), $(this).on("click", function () {
                $("#jp_container_1").jPlayer("pause")
            }), $(this).jPlayer("pauseOthers")
        },
        pause: function () {
            $("#jp_container_1 .jp-video-play").fadeIn(), $("#jp_container_1 .jp-video-play-icon").unbind("click")
        },
        volumechange: function (t) {
            t.jPlayer.muted ? $("#jp_container_1 .jp-volume-controls").val(0) : $("#jp_container_1 .jp-volume-controls").val(t.jPlayer.volume)
        }
    });
    var e = function () {
        $(".slider em").each(function () {
            $(this).width($(this).attr("data-width"))
        })
    };
    e();
    var i = "right";
    $(".buy-step").hover(function () {
        var t = {"margin-left": "-12px"};
        "right" === i ? (i = "left", t["margin-left"] = "-5px") : i = "right", $(".double-arrow span").animate(t, arguments.callee)
    }, function () {
        $(".double-arrow span").stop().css("margin-left", "-12px")
    });
    var n = $(".pos-goods-list"), o = $(".pos-goods"), s = o.outerHeight(!0), l = o.length, c = 500, r = null;
    n.height(s * l), $(".bot-btn").on("click", function () {
        var t = $(this), a = parseInt(n.css("top"));
        t.hasClass("disabled") || n.is(":animated") || n.animate({top: a + 3 * s}, c, function () {
            0 == parseInt(n.css("top")) ? (t.addClass("disabled"), n.removeClass("top").addClass("bot")) : n.removeClass("bot").addClass("top"), $(".top-btn").removeClass("disabled")
        })
    }), $(".top-btn").on("click", function () {
        var t = $(this), a = parseInt(n.css("top"));
        t.hasClass("disabled") || n.is(":animated") || n.animate({top: a - 3 * s}, c, function () {
            Math.abs(parseInt(n.css("top"))) == s * (l - 3) ? (t.addClass("disabled"), n.removeClass("bot").addClass("top")) : n.removeClass("top").addClass("bot"), $(".bot-btn").removeClass("disabled")
        })
    }), r = setInterval(function () {
        n.hasClass("top") ? $(".bot-btn").trigger("click") : n.hasClass("bot") && $(".top-btn").trigger("click")
    }, 10 * c), $(".pos-right").hover(function () {
        clearInterval(r)
    }, function () {
        r = setInterval(function () {
            n.hasClass("top") ? $(".bot-btn").trigger("click") : n.hasClass("bot") && $(".top-btn").trigger("click")
        }, 10 * c)
    })
}), $(".detail-row .sm-img li img").mouseover(function () {
    var t = $(this);
    $(".detail-row").find(".lg-img").attr("src", t.attr("src"))
}), $(".ehy-normal a").click(function () {
    // MtaH5.clickStat("dovoucher", {
    //     vamount: quan_jine,
    //     uid: $cmsApi.getMtaCookie(),
    //     gid: window.location.href.split("&")[1].split("=")[1],
    //     siteid: standId,
    //     domainid: window.location.hostname.replace("www.", "")
    // })
});
// var mtaSet = setInterval(function () {
//     MtaH5 && (MtaH5.clickStat("showdetail", {
//         uid: $cmsApi.getMtaCookie(),
//         gid: window.location.href.split("&")[1].split("=")[1],
//         siteid: standId,
//         domainid: window.location.hostname.replace("www.", "")
//     }), clearInterval(mtaSet))
// }, 400);
$(function () {
    function t(t) {
        return t.toString().length < 2 ? "0" + t : t
    }

    function a(a, e) {
        var i = activity.now, a = a;
        a -= i, setInterval(function () {
            if (a--, a <= 0) return $(e + " .h").text("00"), $(e + " .m").text("00"), $(e + " .s").text("00"), window.location.reload(), !1;
            var i, n, o = null;
            i = Math.floor(a / 60 / 60), n = Math.floor(a / 60 % 60), o = Math.floor(a % 60), i = i < 10 ? "0" + i : i, n = n < 10 ? "0" + n : n, o = o < 10 ? "0" + o : o, $(e + " .h").text(t(i)), $(e + " .m").text(t(n)), $(e + " .s").text(t(o)), i < 24 ? $(".time-text").show() : $(".lq-text").show()
        }, 1e3)
    }

    if (0 !== activity.type) if ($(".active-type").show().find(".act-bg").addClass("type" + activity.type), 7 == activity.type) {
        var e = "";
        e = goods.hz_quan_over > 0 ? "付￥" + goods.quan_m_link + " 减￥" + goods.hz_quan_over : "定金￥" + goods.quan_m_link, e += '<span style="margin-left: 11px;">领券再减</span>', $(".active-type .last-time.activity_3").html(e).show()
    } else if (8 == activity.type) {
        var i = "";
        i += '<span style="margin-left: 11px;">领券再减</span>', $(".active-type .last-time.activity_4").html(i).show()
    } else if (2 == activity.type || 3 == activity.type || 5 == activity.type) $(".active-type .last-time.tjd").show(), a(activity.goods_time, ".last-time.tjd"); else if (4 == activity.type) $(".active-type .rank").show(), $(".rank .rank-num i").text(activity.sales_num), $(".rank .rank-list b").text(activity.rownum); else if (6 == activity.type) {
        $(".active-type .women").show();
        var n = new Date(Date.parse(eleven_ks.replace(/-/g, "/"))).getTime() / 1e3,
            o = new Date(Date.parse(eleven_ke.replace(/-/g, "/"))).getTime() / 1e3;
        activity.now < n ? (a(n, ".last-time.women"), $(".last-time.women .soe").text("距离开始仅剩")) : activity.now > n && activity.now < o && (a(o, ".last-time.women"), $(".last-time.women .soe").text("距离结束仅剩"))
    } else 9 == activity.type ? ($(".active-type .promotion").show(), a(1567943999, ".last-time .time-text")) : 10 == activity.type && ($(".active-type .promotion_start").show(), a(activity.goods_time, ".last-time .time-text-start"));
    $(".fav .rec-list").each(function (t) {
        t % 5 !== 0 ? $(this).attr("data-id", parseInt(t / 5) + 1) : $(this).attr("data-id", parseInt(t / 5))
    });
    var s = $(".fav .rec-list").length;
    if (s < 6) $(".pagination").hide(); else {
        var l = s / 5;
        l = s % 5 !== 0 ? parseInt(s / 5) + 1 : s / 5;
        for (var c = 0; c < l; c++) {
            var r = "<li class='pointer' page-id='" + (c + 1) + "'></li>";
            $(".pagination .next").before(r)
        }
    }
    $(".pointer").eq(0).addClass("active"), $(".pagination .prev").on("click", function () {
        $(this);
        $(".cur-page").val(parseInt($(".cur-page").val()) - 1), $(".cur-page").val() < 1 && $(".cur-page").val(l)
    }), $(".pagination .next").on("click", function () {
        $(".cur-page").val(parseInt($(".cur-page").val()) + 1), $(".cur-page").val() > l && $(".cur-page").val(1)
    }), $(".pagination .btn").on("click", function () {
        $(".fav .rec-list").hide(), $(".fav .rec-list[data-id =" + $(".cur-page").val() + "]").show(), $(".pointer").removeClass("active"), $(".pointer[page-id=" + $(".cur-page").val() + "]").addClass("active")
    }), $(".feedback a.err").on("click", function () {
        var t = $(this).data("id"), a = window.localStorage;
        "true" == a.getItem(gid + t) ? layer.msg("<p>感谢您的反馈！<br>我们会尽快进行处理</p>") : $.ajax({
            url: feedbacksaveUrl,
            data: {type: "-1", source_type: 1, content: "详情页举报", gid: gid, err_type: t},
            type: "post",
            dataType: "json",
            success: function (e) {
                1 == e.status ? (a.setItem(gid + t, "true"), layer.msg("<p>感谢您的反馈！<br>我们会尽快进行处理</p>")) : layer.msg(e.data)
            }
        })
    }), $("img.lazy").lazyload({effect: "fadeIn"}), 0 == $(".sm-img li").length && $(".act-bg").css("width", "584px")
}), !function () {
    var t = function (t, a, e) {
        this.upImageUrl = "?r=l/getpic", this.config = {
            codeText: function () {
                var t = "【天猫超市】" + (e.d_title || e.title) + "\n<br />【原价】" + parseFloat(e.yuanjia) + "元\n<br />【券后】" + parseFloat(quanhoujia) + "元 \n<br />【领券下单链接】" + (this.openUrl || $(".shop_link").attr("href")) + "<br />\n【推荐理由】" + e.tj_content;
                return t
            }, layerContent: function () {
                var t = e.quan_time.split(" ")[0];
                return '<div class="ImageLayout"><div class="tab"><a class="active">图片</a><a>文字</a></div><div class="items"><div><div class="center"><div data-type="1" class="copyImageItem active ' + (0 == e.quan_jine ? "ord" : "") + '"><i class="selection_icon"></i><p class="pic"><img src="' + e.pic + '" alt="" /></p>' + (0 != e.quan_jine ? '<div class="title "><p class="' + (1 == parseFloat(e.istmall) ? "tm" : "tb") + '">' + (e.d_title || e.title) + "</p></div>" : "") + '<div class="i-row"><div class="text-left">' + (0 == e.quan_jine ? '<div class="title "><p class="tm">' + (e.d_title || e.title) + "</p></div>" : '<p class="tmall "><del>' + ("1" == e.istmall ? "天猫价" : "淘宝价") + " ¥" + parseFloat(e.yuanjia) + '</del></p><p class="money">券后价 <span>¥' + parseFloat(quanhoujia) + '</span></p><p class="quan"><span>' + parseFloat(e.quan_jine) + "元券</span></p>") + '<p class="time">' + t + '前有效</p></div><div class="code"><img src="" alt="" /></div></div></div><div data-type="2" class="copyImageItem ' + (0 == e.quan_jine ? "ord" : "") + '"><i class="selection_icon"></i>' + (0 != e.quan_jine ? '<div class="title "><p class="' + (1 == parseFloat(e.istmall) ? "tm" : "tb") + '">' + (e.d_title || e.title) + "</p></div>" : "") + '<div class="i-row"><div class="text-left">' + (0 == e.quan_jine ? '<div class="title "><p class="tm">' + (e.d_title || e.title) + "</p></div>" : '<p class="tmall "><del>' + ("1" == e.istmall ? "天猫价" : "淘宝价") + " ¥" + parseFloat(e.yuanjia) + '</del></p><p class="money">券后价 <span>¥' + parseFloat(quanhoujia) + '</span></p><p class="quan"><span>' + parseFloat(e.quan_jine) + "元券</span></p>") + '<p class="time">' + t + '前有效</p></div><div class="code"><img src="" alt="" /></div></div><p class="pic"><img src="' + e.pic + '" alt="" /></p></div><div class="ov_h"></div></div><div class="but download"><a target="_blank" download="' + (e.d_title || e.title) + "券后价 ¥" + parseFloat(quanhoujia) + '.png" >保存图片</a></div></div><div style="display: none; padding-top:40px;"><div class="codeText" id="codeText">' + this.codeText() + '</div><div class="but " ><a id="copyQuantext">复制文案</a></div></div></div></div>'
            }
        }, this.loadItem = {}, this.type = 1, this.events = t, this.gid = a, this.goodsItem = e, this.init()
    };
    t.prototype.init = function () {
        this.openLayerIndex = this.openLayer(this.goodsItem)
    }, t.prototype.openLayer = function (t) {
        return layer.open({
            type: 1,
            title: !1,
            area: ["700px"],
            skin: "detail_layer_image",
            content: this.config.layerContent(t),
            success: this.layerSuccess.bind(this, t)
        })
    }, t.prototype.layerSuccess = function (t) {
        var a = this, e = $(".detail_layer_image");
        e.find(".tab a").unbind("click").on("click", function (t) {
            t.preventDefault();
            var i = this, n = function () {
                e.find(".tab a").removeClass("active"), $(i).addClass("active"), e.find(".items>div").hide(), e.find(".items>div:eq(" + $(i).index() + ")").show(), layer.style(a.openLayerIndex, {height: 0 === $(i).index() ? "700px" : "450px"})
            };
            if (1 != $(this).index() || a.openUrl) n(); else {
                var o = layer.load();
                a.ajax({
                    url: "?r=l/shorturl",
                    type: "POST",
                    dataType: "josn",
                    data: {url: $(".shop_link").attr("href")}
                }).done(function (t) {
                    1 === t.status ? (layer.close(o), a.openUrl = t.data.sort_url, $("#codeText").html(a.config.codeText.bind(a)), n()) : n()
                })
            }
        });
        var i = function (t) {
            var a = new Clipboard(t, {
                text: function (t) {
                    return $("#codeText").text()
                }
            });
            a.on("success", function (t) {
                layer.msg("复制成功！"), t.clearSelection()
            }), a.on("error", function (t) {
                layer.msg("复制失败，请长按文字手动复制！"), t.clearSelection()
            })
        };
        i("#copyQuantext"), e.find(".code").qrcode({
            render: "canvas",
            width: 110,
            height: 110,
            text: window.location.href
        }), e.find(".copyImageItem").unbind("click").on("click", function (t) {
            t.preventDefault(), e.find(".copyImageItem").removeClass("active"), a.type = $(this).data("type"), $(this).addClass("active"), a.openLayerCopyImage([e.find(".copyImageItem").width() + 4 + "px", e.find(".copyImageItem").height() + 4 + "px"], function (t) {
                $(".detail_layer_image .download a").attr("href", t.data.long_pic)
            })
        }), this.openLayerCopyImage([e.find(".copyImageItem").width() + 4 + "px", e.find(".copyImageItem").height() + 4 + "px"], function (t) {
            $(".detail_layer_image .download a").attr("href", t.data.long_pic)
        })
    }, t.prototype.isUpImage = function (t, a) {
        var e = this, i = function (t) {
            return t.pic + gid + "" + e.type
        }(this.goodsItem);
        return this.loadItem[i] ? (a(this.loadItem[i]), !1) : void e.ajax({
            url: e.upImageUrl,
            data: {
                id: e.goodsItem.tid,
                pic_type: e.type,
                pic: e.goodsItem.pic,
                title: e.goodsItem.d_title || goodsItem.title,
                istmall: e.goodsItem.istmall,
                quanhoujia: quanhoujia,
                yuanjia: e.goodsItem.yuanjia,
                quan_jine: e.goodsItem.quan_jine,
                quan_time: e.goodsItem.quan_time,
                url: encodeURIComponent(window.location.href),
                base64_image_content: t
            }
        }).done(function (t) {
            1 == t.status && (e.loadItem[i] = t, a(t))
        })
    }, t.prototype.openLayerCopyImage = function (t, a) {
        var e = this, i = function (t) {
            return t.pic + gid + "" + e.type
        }(this.goodsItem);
        if (this.loadItem[i]) return a(this.loadItem[i]), !1;
        var n = window.navigator.userAgent.toLowerCase(), o = "function" == typeof Promise && n.indexOf("mac") < 0;
        if (!o) return e.isUpImage(void 0, function (t) {
            a(t)
        }), !1;
        var s = layer.load(), l = layer.open({
            type: 2,
            skin: "codeHtmlUpimg",
            title: !1,
            shade: !1,
            area: t,
            content: "?r=l/getpic&pic=" + this.goodsItem.pic + "&pic_type=" + this.type,
            success: function (t) {
                var i = setInterval(function () {
                    "undefined" != typeof canvasImage && (clearInterval(i), e.isUpImage(canvasImage, function (t) {
                        layer.close(s), layer.close(l), a(t), window.canvasImage = void 0
                    }))
                }, 1e3)
            }
        })
    }, t.prototype.ajax = function (t) {
        var a = layer.load();
        return $.ajax({url: t.url, type: t.type || "POST", dataType: "json", data: t.data || {}}).done(function (t) {
            switch (t.status) {
                default:
                    1 != t.status && layer.msg(t.msg)
            }
            layer.close(a)
        }).fail(function () {
            layer.msg("服务器繁忙，请稍后再试！"), layer.close(a)
        })
    }, window.DetailLayerImage = function (a, e, i) {
        new t(a, e, i)
    }
}();