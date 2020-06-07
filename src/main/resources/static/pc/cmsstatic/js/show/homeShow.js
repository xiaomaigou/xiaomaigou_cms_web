// 显示首页好货精选商品列表
var showHomeGoodsItem = function (tbkDgOptimusMaterialList) {
    var t = $("#homeGoodsItem");
    if (0 == t.length) return false;
    for (var a = function (t, index) {
        return '<a target="_blank" class="goods_list" href="item.html?goodsId='
            + t.itemId +
            '"  id="cms-goods-items_'
            + t.itemId + "_" + index +
            '"   ><div class="img"><img class="lazy" src="./cmsstatic/web/images/rolling.gif?v=202001232029" data-original="https:'
            + t.pictUrl +
            '_310x310.jpg" alt="' + t.title +
            '"></div><div class="content"><p class="co_tit"><span data-gid="'
            + t.itemId + '">' + ((0 == t.userType) ? '<i class="tag tag-tao fl" title="淘宝"></i>' : '<i class="tag tag-tmall fl" title="天猫"></i>')
            + t.title +
            '</span></p><div class="sale_num"><span class="fl">原价 <i>'
            + t.zkFinalPrice +
            '</i> </span><span class="fr">销量 <i>'
            + t.volume +
            '</i></span></div><div class="price cf"><i class="p">￥</i><span>'
            + (t.zkFinalPrice - t.couponAmount).toFixed(2) +
            '</span>  <b class="fr"><i>'
            + t.couponAmount + "</i>元券</span></b></div></div></a>"
    }, e = "", n = 0; n < tbkDgOptimusMaterialList.length; n++) e += a(tbkDgOptimusMaterialList[n], n);
    t.append(e);
    // 图片懒加载
    $("img.lazy").lazyload();
};

// 显示首页轮播广告
var showHomeSwiperSlide = function (homeCenterSwiper, homeSwiperSlide) {
    var slides = [];
    for (var n = function (t, n) {
        return '<div class="swiper-slide"> <a href="' + t.contentUrl + '" target="_blank"> <img style="border: 0" src="' + t.contentPic + '" width="720" height="300" alt="' + t.contentTitle + '"> </a> </div>';
    }, i = 0; i < homeSwiperSlide.length; i++)
        slides.push(n(homeSwiperSlide[i], i));
    homeCenterSwiper.appendSlide(slides);
    // 自定义显示分页器,指示器等(如果采用默认设置则无需以下操作)
    $(".banner-center .swiper-slide").length - 2 > 1 && $(".swiper-pagination").show();
    try {
        homeCenterSwiper.el.onmouseenter = function () {
            $(".banner-center .swiper-slide").length - 2 > 1 && (homeCenterSwiper.navigation.$nextEl.addClass("show"), homeCenterSwiper.navigation.$prevEl.addClass("show"))
        }, homeCenterSwiper.el.onmouseleave = function () {
            $(".banner-center .swiper-slide").length - 2 > 1 && (homeCenterSwiper.navigation.$nextEl.removeClass("show"), homeCenterSwiper.navigation.$prevEl.removeClass("show"))
        }
    } catch (c) {
    }
};

// 显示首页中下部广告
var showHomeSwiperSlideDown = function (homeSwiperSlideDown) {
    var t = $("#cms_pc_swiper_down");
    if (0 == t.length) return false;
    for (var n = function (t, n) {
        return '<div class="swiper-container com_banner cb' + n + '" banner-id=\'cb' + n + '\'><div class="swiper-wrapper"><div class="swiper-slide"><a href="' + t.contentUrl + '" target="_blank"><img style="border: 0"src="' + t.contentPic + '"alt="' + t.contentTitle + '"></a></div></div></div>';
    }, e = "", i = 0; i < homeSwiperSlideDown.length; i++) e += n(homeSwiperSlideDown[i], i);
    t.html(e);
    $(".com_banner").each(function (t) {
        $(this).find(".swiper-slide").length > 1 && a($(this).attr("banner-id"), "." + $(this).attr("banner-id"))
    });
};

// 优惠头条定时改变
function changeyh(p, f, u) {
    if (p <= 3 || u) return !1;
    u = !0, $(".yh_ul li").hide();
    for (var t = new Array, a = 0; a < p; a++) t.push(a);
    for (t = n(t, f); t.length > 3;) t.splice(i(0, t.length - 1), 1);
    t.length < 3 && $.each(f, function (a, e) {
        if (t.push(e), t.length >= 3) return !1
    }), f = t, $.each(t, function (t, a) {
        $(".yh_ul li").eq(a).show()
    }), u = !1
}

function n(t, a) {
    return $.merge($.grep(t, function (t) {
        return $.inArray(t, a) == -1
    }), $.grep(a, function (a) {
        return $.inArray(a, t) == -1
    }))
}

function i(t, a) {
    return Math.floor(Math.random() * (a - t)) + t
}

function s(t) {
    return 1 == t.toString().length ? "0" + t : t
}

// 咚咚抢定时改变
function changeddq() {
    var t = $(".cent.ddq .time").attr("data-next1_date"), a = $(".cent.ddq .time").attr("data-next1_hour"),
        e = $(".cent.ddq .time").attr("data-next2_date"), n = $(".cent.ddq .time").attr("data-next2_hour"),
        i = (new Date).getFullYear() + "-" + s((new Date).getMonth() + 1) + "-" + s((new Date).getDate()),
        l = (new Date).getHours(), r = (new Date).getMinutes(), c = (new Date).getSeconds(), o = new RegExp(i),
        d = o.test(t);
    if (d !== !1) if (a - l > 0) {
        var h = s(a - l - 1), p = s(59 - r), f = s(60 - c);
        $(".cent.ddq .time .cc_hour").html(h), $(".cent.ddq .time .cc_min").html(p), $(".cent.ddq .time .cc_sec").html(f)
    } else {
        var u = new RegExp(i), d = u.test(e), p = s(59 - r), f = s(60 - c);
        d !== !1 ? _h2 = s(n - l - 1) : _h2 = s(n - l + 23), $(".cent.ddq .time .cc_hour").html(_h2), $(".cent.ddq .time .cc_min").html(p), $(".cent.ddq .time .cc_sec").html(f)
    } else {
        var h = s(a - l + 23), p = s(59 - r), f = s(60 - c);
        $(".cent.ddq .time .cc_hour").html(h), $(".cent.ddq .time .cc_min").html(p), $(".cent.ddq .time .cc_sec").html(f)
    }
}

// 首页咚咚抢换一换
function ddqChangeClick(o, d, h) {
    $("#home_ddq_change").on("click", function () {
        if (o <= 4 || h) return !1;
        h = !0, $(".cent.ddq .list").hide();
        for (var t = new Array, a = 0; a < o; a++) t.push(a);
        for (t = n(t, d); t.length > 4;) t.splice(i(0, t.length - 1), 1);
        t.length < 4 && $.each(d, function (a, e) {
            if (t.push(e), t.length >= 4) return !1
        }), d = t, $.each(t, function (t, a) {
            $(".cent.ddq .list").eq(a).show()
        }), h = !1
    });
}

// 显示首页右上部广告
var showHomeSwiperSlideRightUp = function (rightUp) {
    var t = $("#cms_pc_swiper_right_up");
    if (0 == t.length) return false;
    for (var n = function (t, n) {
        return '<div class="swiper-wrapper"><div class="swiper-slide"><a href="' + t.contentUrl + '" target="_blank"><img style="border: 0" src="' + t.contentPic + '" alt="' + t.contentTitle + '"></a></div></div>';

    }, e = "", i = 0; i < rightUp.length; i++) e += n(rightUp[i], i);
    t.html(e);
};
// 显示首页右中部广告(优惠头条)
var showHomeSwiperSlideRightMiddle = function (rightMiddle) {
    var t = $("#cms_pc_sale_model");
    if (0 == t.length) return false;
    for (var n = function (t, n) {
        return '<li><i>' + t.label + '</i> <a href="' + t.contentUrl + '" target="_blank">' + t.contentTitle + '</a><span style="margin-left: auto">' + (t.remark?t.remark:'') + '</span></li>';
    }, e = "", i = 0; i < rightMiddle.length; i++) e += n(rightMiddle[i], i);
    t.html(e);
    // 首页右中部广告(优惠头条)定时改变
    setInterval(function () {
        changeyh($(".yh_ul li").length, new Array(0, 1, 2), !1);
    }, 1e4);
};
// 显示首页右下部广告
var showHomeSwiperSlideRightDowm = function (rightDowm) {
    var t = $("#cms_pc_swiper_right_dowm");
    if (0 == t.length) return false;
    for (var n = function (t, n) {
        return '<div class="swiper-wrapper"><div class="swiper-slide"><a href="' + t.contentUrl + '" target="_blank"><img style="border: 0" src="' + t.contentPic + '" alt="' + t.contentTitle + '"></a></div></div>';

    }, e = "", i = 0; i < rightDowm.length; i++) e += n(rightDowm[i], i);
    t.html(e);
};
// 显示首页右部广告
var showHomeSwiperSlideRight = function (homeSwiperSlideRight) {
    showHomeSwiperSlideRightUp(homeSwiperSlideRight.rightUp);
    showHomeSwiperSlideRightMiddle(homeSwiperSlideRight.rightMiddle);
    showHomeSwiperSlideRightDowm(homeSwiperSlideRight.rightDowm);
};

// 显示首页咚咚抢
var showHomeDdq = function (homeDdq) {
    var t = $("#home_ddq_list");
    if (0 == t.length) return false;
    for (var n = function (t, n) {
        return '<a class="list" target="_blank" href="' + t.clickUrl + '"><img class="img" src="' + t.pictUrl + '_310x310.jpg" alt="' + t.title + '"><div class="content fr"><p class="co_tit">' + t.title + '</p><div class="icon"><span>' + t.subtitle + '</span></div><div class="price cf">￥<span>' + t.price + '</span> <b>￥' + t.originalPrice + '</b></div></div></a>';
    }, e = "", i = 0; i < homeDdq.length; i++) e += n(homeDdq[i], i);
    t.html(e);

    // 咚咚抢换一换
    ddqChangeClick($(".cent.ddq .list").length, new Array(0, 1, 2, 3), h = !1);
    // 咚咚抢定时改变
    changeddq();
    setInterval(function () {
        changeddq()
    }, 1e3);

};

// 显示首页实时疯抢榜
var showHomeFqbRealTime = function (homeFqbRealTime) {
    var home_fqb_list_top_realTime_t = $("#home_fqb_list_top_realTime");
    var home_fqb_list_bt_realTime_t = $("#home_fqb_list_bt_realTime");
    if ((0 == home_fqb_list_top_realTime_t.length) && (0 == home_fqb_list_bt_realTime_t.length)) return false;
    for (var n = function (t, n) {
        if (n < 2) {
            home_fqb_list_top_realTime_e += '<a class="list" target="_blank" href="' + t.clickUrl + '"><img class="rank_img" src="./cmsstatic/images/home/top_' + (n + 1) + '.png?v=202001232029" alt="' + n + '"><span class="center_img"><img src="' + t.pictUrl + '_310x310.jpg" alt="' + t.title + '"></span><div class="content"><p>' + t.title + '</p><span class="sale_num">近2小时疯抢<span class="num">' + t.saleNum + '</span> 件</span><div><span class="price">￥<i>' + (t.originalPrice - t.couponAmount).toFixed(2) + '</i></span><span class="quan fr"><i>' + t.couponAmount + '</i>元券</span></div></div></a>';
        } else {
            home_fqb_list_bt_realTime_e += '<a class="list" target="_blank" href="' + t.clickUrl + '"><div class="goods_img"><span class="rank_num"><i>' + (n + 1) + '</i></span><img src="' + t.pictUrl + '_310x310.jpg" alt="' + t.title + '"></div><p>' + t.title + '</p><span class="dec">近2小时疯抢<span class="num">' + t.saleNum + '</span> 件</span><div><span class="price">￥<i>' + (t.originalPrice - t.couponAmount).toFixed(2) + '</i></span><span class="quan fr"><i>' + t.couponAmount + '</i>元券</span></div></a>';
        }

    }, home_fqb_list_top_realTime_e = "", home_fqb_list_bt_realTime_e = "", i = 0; i < homeFqbRealTime.length; i++) n(homeFqbRealTime[i], i);
    home_fqb_list_top_realTime_t.html(home_fqb_list_top_realTime_e);
    home_fqb_list_bt_realTime_t.html(home_fqb_list_bt_realTime_e);
};
// 显示首页全天疯抢榜
var showHomeFqbAllDay = function (homeFqbAllDay) {
    var home_fqb_list_top_allDay_t = $("#home_fqb_list_top_allDay");
    var home_fqb_list_bt_allDay_t = $("#home_fqb_list_bt_allDay");
    if ((0 == home_fqb_list_top_allDay_t.length) && (0 == home_fqb_list_bt_allDay_t.length)) return false;
    for (var n = function (t, n) {
        if (n < 2) {
            home_fqb_list_top_allDay_e += '<a class="list" target="_blank" href="' + t.clickUrl + '"><img class="rank_img" src="./cmsstatic/images/home/top_' + (n + 1) + '.png?v=202001232029" alt="' + n + '"><span class="center_img"><img src="' + t.pictUrl + '_310x310.jpg" alt="' + t.title + '"></span><div class="content"><p>' + t.title + '</p><span class="sale_num">近2小时疯抢<span class="num">' + t.saleNum + '</span> 件</span><div><span class="price">￥<i>' + (t.originalPrice - t.couponAmount).toFixed(2) + '</i></span><span class="quan fr"><i>' + t.couponAmount + '</i>元券</span></div></div></a>';
        } else {
            home_fqb_list_bt_allDay_e += '<a class="list" target="_blank" href="' + t.clickUrl + '"><div class="goods_img"><span class="rank_num"><i>' + (n + 1) + '</i></span><img src="' + t.pictUrl + '_310x310.jpg" alt="' + t.title + '"></div><p>' + t.title + '</p><span class="dec">近2小时疯抢<span class="num">' + t.saleNum + '</span> 件</span><div><span class="price">￥<i>' + (t.originalPrice - t.couponAmount).toFixed(2) + '</i></span><span class="quan fr"><i>' + t.couponAmount + '</i>元券</span></div></a>';
        }

    }, home_fqb_list_top_allDay_e = "", home_fqb_list_bt_allDay_e = "", i = 0; i < homeFqbAllDay.length; i++) n(homeFqbAllDay[i], i);
    home_fqb_list_top_allDay_t.html(home_fqb_list_top_allDay_e);
    home_fqb_list_bt_allDay_t.html(home_fqb_list_bt_allDay_e);
};
// 显示首页疯抢榜
var showHomeFqb = function (homeFqb) {
    showHomeFqbRealTime(homeFqb.homeFqbRealTime);
    showHomeFqbAllDay(homeFqb.homeFqbAllDay);

};

// 显示首页今日大牌
var showTodayBrand = function (todayBrand) {
    var t = $("#home_today_brand");
    if (0 == t.length) return false;
    var e = '<img class="top_img" src="' + todayBrand.topImg + '" alt="' + todayBrand.title + '"><img class="top_logo" src="' + todayBrand.topLogo + '_310x310.jpg" alt="' + todayBrand.title + '"><p class="tit"><i></i><span style="">今日大牌</span><span class="dec" style=""></span></p><div class="desc"><p style="color: rgb(0, 0, 0);">' + todayBrand.title + '</p><span style="color: rgb(0, 0, 0);">' + todayBrand.subtitle + '</span></div>';
    for (var n = function (t, n) {
        return '<div class="list" id="cms_pc_today_brand_"><a class="" target="_blank" href="' + t.clickUrl + '"><img src="' + t.pictUrl + '_310x310.jpg" class="img fl" alt="' + t.title + '"><div class="content fr"><p class="co_tit">' + t.title + '</p><div class="price"><span class="fl"> ￥<span>' + (t.originalPrice - t.couponAmount).toFixed(2) + '</span></span> <b class="fl">￥' + t.originalPrice + '</b></div></div></a></div>';
    }, i = 0; i < todayBrand.goods.length; i++) e += n(todayBrand.goods[i], i);
    t.html(e);
};