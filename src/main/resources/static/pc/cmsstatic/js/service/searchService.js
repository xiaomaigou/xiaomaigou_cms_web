// 搜索页服务层
// 搜索页，商品搜索
var getSearchGoodsItems = function (searchMap) {
    return this.post('cmsHome/getTbkDgSearchMaterial', searchMap);
};