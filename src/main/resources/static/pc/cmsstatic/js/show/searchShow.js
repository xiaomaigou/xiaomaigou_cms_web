// 搜索页显示层
// 搜索页，商品搜索
var showSearchGoodsItems = function (searchGoodsItemsList) {
    var t = $("#goodsItems");
    if (0 == t.length) return false;
    for (var a = function (t, index) {
        return '<li class="'
            + (index % 4 == 3 ? "no-right" : "") +
            ' g_over" id="cms-goods-items_'
            + t.itemId + "_" + index + '"  >'
            + '<a href="item.html?goodsId='+t.itemId +
            '" class="img" target="_blank" data-gid="' + t.itemId +
            '"><img class="lazy" src="./cmsstatic/web/images/rolling.gif?v=202001232029" data-original="'
            + t.pictUrl + '_310x310.jpg" alt="' + t.title +
            '"></a><div class="goods-padding"><div class="title"><a target="_blank" href="https:' + t.couponShareUrl +
            '" data-gid="' + t.itemId + '">' + ((0 == t.userType) ? '<i class="tag tag-tao fl" title="淘宝"></i>' : '<i class="tag tag-tmall fl" title="天猫"></i>')
            + t.title +
            '</a></div><div class="goods-num-type"><span class="old-price fl">原价 <i>'
            + t.zkFinalPrice +
            '</i></span><span class="goods-num fr">销量 <i>'
            + t.volume +
            '</i></span></div><div class="coupon-wrap clearfix"><span class="price"><i>￥</i><span>'
            + (t.zkFinalPrice - t.couponAmount).toFixed(2) +
            '</span></span><b class="coupon fr"><i>'
            + t.couponAmount +
            '</i> 元券</b></div></div><em class="border_l_b border"></em><em class="border_l_t border"></em><em class="border_r_b border"></em><em class="border_r_t border"></em></li>'
    }, e = "", n = 0; n < searchGoodsItemsList.length; n++) e += a(searchGoodsItemsList[n], n);
    t.html(e);
    // 图片懒加载
    $("img.lazy").lazyload();
};
// 搜索页，当前页
var showCurrentPage = function (currentPage) {
    $("#currentPage").text(currentPage);
    $("#nextPage").removeClass("disabled");
    var prePage = $("#prePage");
    if (currentPage <= 1) {
        prePage.addClass("disabled");
    } else {
        if (prePage.hasClass("disabled")) {
            prePage.removeClass("disabled");
        }
    }
};