// 商品详情显示层
// 商品详情
var showGoodsDetails = function (goodsDetails) {

    // 标题
    $("#detailTitle").text(goodsDetails.title);
    // 店铺名称
    $("#detailShopName").text(goodsDetails.shopName);
    // 券
    $("#detailQuan").text(goodsDetails.couponPrice + '元券');
    // 价格
    $("#detailPrice").text((goodsDetails.actualPrice-goodsDetails.couponPrice).toFixed(2));
    // 原价
    $("#detailOriginalPrice").text(goodsDetails.actualPrice);

    // 主图
    var detailGoodsInfo = $("#detailGoodsInfo");
    var step01 = '<img class="lg-img" src="' + ((goodsDetails.mainPic.indexOf('http') == 0) ? '' : 'https://') + goodsDetails.mainPic + '_400x400.jpg" data-gid="22566881" alt="' + goodsDetails.title + '">';
    var imgs = goodsDetails.imgs.split(',');
    for (var a = function (t, index) {
        return '' == t.trim() ? '' : '<li><img src="' + ((t.indexOf('http') == 0) ? '' : 'https://') + t + '_400x400.jpg" alt=""></li>';
    }, e = "", n = 0; n < imgs.length; n++) e += a(imgs[n], n);
    detailGoodsInfo.html(step01 + '<ul class="sm-img">' + e + '</ul>');

    // 商品详情图
    var goodsDetailImgs = $("#goodsDetailImgs");
    var detailPics = ('' == goodsDetails.detailPics || null == goodsDetails.detailPics || undefined == goodsDetails.detailPics) ? imgs : goodsDetails.detailPics.split(',');
    for (var a = function (t, index) {
        return '' == t.trim() ? '' : '<img class="lazy img check_img_show" src="./cmsstatic/web/images/rolling.gif?v=202001232029" data-original="' + ((t.indexOf('http') == 0) ? '' : 'https://') + t + '" alt="">';
    }, e1 = "", n = 0; n < detailPics.length; n++) e1 += a(detailPics[n], n);
    goodsDetailImgs.html(e1);

    // 图片懒加载
    $("img.lazy").lazyload();
};