// 商品详情控制层
// 商品详情
var goodsDetails = function (goodsId) {
    getGoodsDetails(goodsId).then(function (response) {
        if (200 == response.code) {
            showGoodsDetails(response.data.data);
        } else {
            alert(response.msg);
        }
    });
};

// 商品详情，加载传递过来的商品Id
var loadkeywords = function (variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = decodeURI(vars[i]).split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    return '';
};
$(function () {

    // 加载传递过来的商品id
    var goodsId = loadkeywords('goodsId');
    goodsDetails(goodsId);

    $(".check_img_show").length <= 0 && $(".goods-detail").hide(), layer.load(), getPrivilegeLink(goodsId).then(function (t) {
        0 == t.data.code && $(".shop_link").attr("href", t.data.data.couponClickUrl), layer.closeAll();
    }).catch(function (error) {
        layer.closeAll();
    }).finally(function () {
        // always executed
    });

});