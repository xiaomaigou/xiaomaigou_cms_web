/**
 * static.cms - v1.0.0  License By
 * WEB小组
 */
var time_tab = function (e) {
    if (!$(".release-time-main ul").hasClass("tab_scroll")) {
        $(".release-time-main ul").addClass("tab_scroll");
        var a, s = parseInt($(".release-time-main ul").css("left")), i = $(".release-time-main ul").width(),
            l = $(".release-time-main ul li").eq(0).width();
        if (!(s < 2 * l && e > 0 || s > 3 * l - i && e < 0)) return $(".release-time-main ul").removeClass("tab_scroll"), !1;
        var t = $(".release-time-main ul li.cur").index();
        "即将开始" == $(".release-time-main ul li").eq(t - e).find("p").text() ? ($(".ddq_text_buy").addClass("hide"), $(".ddq_text_next").removeClass("hide")) : ($(".ddq_text_next").addClass("hide"), $(".ddq_text_buy").removeClass("hide")), $(".release-time-main ul li").removeClass("cur"), $(".release-time-main ul li").eq(t - e).addClass("cur"), fillContent($(".release-time-main ul li.cur").data("type")), a = s + e * l + "px", $(".release-time-main ul").css("left", a), setTimeout(function () {
            $(".release-time-main ul").removeClass("tab_scroll")
        }, 200), $("body,html").animate({scrollTop: $(".sf_wrap .main").offset().top - 75}, 200)
    }
};
$(".paly-btn").on("click", function () {
    time_tab($(this).data("r"))
}), $(".section_item").on("click", function () {
    if (!$(this).parents("li").hasClass("cur")) {
        var e = $(this).parents("li").index(), a = $(".release-time-main ul li.cur").index();
        time_tab(a - e)
    }
}), $(window).scroll(function () {
    var e = $(window).scrollTop(),
        a = $(".main").offset().top - $(".release-time").height() - parseInt($(".release-time").css("margin-bottom"));
    e >= a ? $(".sf_wrap").addClass("fixed") : $(".sf_wrap").removeClass("fixed")
});
var fillContent = function (e) {
    MtaH5.pgv(), MtaH5.clickStat("showpage", {
        uid: $cmsApi.getMtaCookie(),
        time: ((new Date).getHours() < 10 ? "0" + (new Date).getHours() : (new Date).getHours()) + ":" + ((new Date).getMinutes() < 10 ? "0" + (new Date).getMinutes() : (new Date).getMinutes()),
        name: "咚咚抢",
        siteid: standId,
        domainid: window.location.hostname.replace("www.", "")
    }), $(".release-list").addClass("filling"), $(".ddq_loadding").removeClass("hide"), $(".release-list ul").html("");
    var a = dataDef[e];
    setTimeout(function () {
        $(".ddq_loadding").addClass("hide"), void 0 == a ? $(".release_next img").removeClass("hide") : $(".release_next img").addClass("hide");
        for (var e = 0; e < a.length; e++) {
            var s = e, i = '<li><a href="' + goodsUrl + a[s].id + '" target="_blank">';
            if (2 != a[s].huodong_type && 3 != a[s].huodong_type || (i += '<div class="goods_hdtype goods_hdtype_zhe"></div>'), i += '<div class="goods_pic"><img src="' + a[s].pic + '_310x310.jpg" alt=""></div>', i += '<div class="goods_info"><div class="goods_tit_des"><h3>' + a[s].d_title + "</h3><p>" + (null != a[s].new_words ? a[s].new_words : "") + "</p></div>", i += '<div class="goods_price_coupon"><span class="goods_price"><b><i>￥</i>' + (a[s].huodong_type < 4 ? parseFloat((a[s].yuanjia - a[s].quan_jine).toFixed(2)) : parseFloat(a[s].jiage)) + '</b>券后价</span><span class="goods_price_old">￥' + parseFloat(a[s].yuanjia) + '</span><div class="goods_coupon"><span class="c_l c_coupon"></span><span class="c_r c_coupon"></span>券 ￥' + parseFloat(a[s].quan_jine) + "</div></div>", new Date(a[s].paiqi) - new Date > newTimeDelay) var l = "goods-soon",
                t = "即将开始"; else var l = 0 == a[s].quan_num ? "goods-over" : "",
                t = 0 == a[s].quan_num ? "活动结束" : "马上抢";
            new Date(a[s].quan_time) < new Date($today) && a[s].quan_over > 800 && (l = "goods-over", t = "活动结束"), i += '<div class="goods_gobuy_seller ' + ("goods-soon" == l ? 'goods_gobuy_seller_soon"' : '"') + '><span class="goods_seller fl"><i></i><b>' + a[s].xiaoliang + "</b>人已抢</span>", i += '<span class="goods_buy_btn ' + l + '">' + t + "</span></div></div>", i += "</a></li>", $(".release-list ul").append(i), s == a - 1 && setTimeout(function () {
                $(".release-list").removeClass("filling")
            }, 200)
        }
    }, 200)
};
fillContent($(".release-time-main ul li.cur").data("type"));