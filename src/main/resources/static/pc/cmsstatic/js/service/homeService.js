// 首页服务层
// 首页，好货精选
var getTbkDgOptimusMaterial = function (materialId, pageNo, pageSize) {
    return this.get('service/tbk/listTbkDgOptimusMaterial', {
        materialId: materialId,
        pageNo: pageNo,
        pageSize: pageSize
    });
};

// 首页，轮播广告
var listHomeSwiperSlide = function () {
    return this.get('service/cmsHome/listHomeSwiperSlide', {});
};

// 首页，中下部广告
var listHomeSwiperSlideDown = function () {
    return this.get('service/cmsHome/listHomeSwiperSlideDown', {});
};

// 首页，右部广告
var listHomeSwiperSlideRight = function () {
    return this.get('service/cmsHome/listHomeSwiperSlideRight', {});
};

// 首页，咚咚抢
var getHomeDdq = function () {
    return this.get('dtk/getHomeDdq', {});
};

// 首页，疯抢榜
var getHomeFqb = function () {
    return this.get('dtk/getHomeFqb', {});
};

// 首页，今日大牌
var getTodayBrand = function () {
    return this.get('dtk/getTodayBrand', {});
};
