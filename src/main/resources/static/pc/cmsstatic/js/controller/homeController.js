// 首页控制层
// 首页，好货精选
var homeTbkDgOptimusMaterial = function (materialId, pageNo, pageSize) {
    return new Promise(
        function (resolve, reject) {
            getTbkDgOptimusMaterial(materialId, pageNo, pageSize).then(function (response) {
                if (200 === response.code) {
                    showHomeGoodsItem(response.data);
                    resolve(response.data);
                } else {
                    alert(response.msg);
                    reject(response);
                }
            });
        }
    );
};
// 首页，轮播广告
var homeSwiperSlide = function (homeCenterSwiper) {
    listHomeSwiperSlide().then(function (response) {
        if (200 === response.code) {
            showHomeSwiperSlide(homeCenterSwiper, response.data.records);
        } else {
            alert(response.msg);
        }
    });
};
// 首页，中下部广告
var homeSwiperSlideDown = function () {
    listHomeSwiperSlideDown().then(function (response) {
        if (200 === response.code) {
            showHomeSwiperSlideDown(response.data.records);
        } else {
            alert(response.msg);
        }
    });
};
// 首页，右部广告
var homeSwiperSlideRight = function () {
    listHomeSwiperSlideRight().then(function (response) {
        if (200 === response.code) {
            showHomeSwiperSlideRight(response.data);
        } else {
            alert(response.msg);
        }
    });
};
// 首页，咚咚抢
var homeDdq = function () {
    getHomeDdq().then(function (response) {
        if (200 == response.code) {
            showHomeDdq(response.data);
        } else {
            alert(response.msg);
        }
    });
};
// 首页，疯抢榜
var homeFqb = function () {
    getHomeFqb().then(function (response) {
        if (200 == response.code) {
            showHomeFqb(response.data);
        } else {
            alert(response.msg);
        }
    });
};
// 首页，今日大牌
var todayBrand = function () {
    getTodayBrand().then(function (response) {
        if (200 == response.code) {
            showTodayBrand(response.data);
        } else {
            alert(response.msg);
        }
    });
};

$(function () {

    // 定义分页的结构
    var pageMap = {
        'pageNo': 1,
        'pageSize': 60,
        'materialId': 3756
    };
    var initpageMap = function () {
        pageMap.pageNo = 1;
        pageMap.pageSize = 60;
        pageMap.materialId = 3756;
    };

    // 首页，中间banner
    var homeCenterSwiper = new Swiper('.banner-center', {
        direction: 'horizontal',
        loop: true,
        observer: true,
        observeParents: true,
        autoplay: {disableOnInteraction: false},
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    });

    // 首页，好货精选
    homeTbkDgOptimusMaterial(pageMap.materialId, pageMap.pageNo, pageMap.pageSize);
    // 下一页
    $("#getNextPage").on("click", function () {
        homeTbkDgOptimusMaterial(pageMap.materialId, pageMap.pageNo + 1, pageMap.pageSize).then(function (response) {
            pageMap.pageNo = pageMap.pageNo + 1;
        });
    });

    // 首页，轮播广告
    homeSwiperSlide(homeCenterSwiper);
    // 首页，中下部广告
    homeSwiperSlideDown();
    // 首页，右部广告
    homeSwiperSlideRight();
    // 首页，咚咚抢
    homeDdq();
    // 首页，疯抢榜
    homeFqb();
    // 首页，今日大牌
    todayBrand();

});