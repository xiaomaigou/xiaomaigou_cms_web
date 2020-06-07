// 商品详情服务层
// 商品详情，商品详情查询
var getGoodsDetails = function (goodsId) {
    return this.get('dtk/getGoodsDetails', {goodsId: goodsId});
};

// 商品详情，高效转链
var getPrivilegeLink = function (goodsId) {
    return this.get('dtk/getPrivilegeLink', {goodsId: goodsId});
};