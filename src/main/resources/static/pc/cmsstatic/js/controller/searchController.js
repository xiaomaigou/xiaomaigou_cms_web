// 搜索页控制层
// 搜索页，商品搜索
var searchGoodsItems = function (searchMap) {
    return new Promise(
        function (resolve, reject) {
            getSearchGoodsItems(searchMap).then(function (response) {
                if (200 == response.code) {
                    showSearchGoodsItems(response.data);
                    resolve(response.data);
                } else {
                    alert(response.msg);
                    reject(response);
                }
            });
        }
    );

};

// 搜索页，加载首页传递过来的搜索关键字
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
    // 定义搜索对象的结构  category:商品分类
    var searchMap = {
        'hasCoupon': true,
        'tmall': true,
        'keywords': '',
        'category': '',
        'brand': '',
        'spec': null,
        'price': '',
        'materialId': null,
        'pageNo': 1,
        'pageSize': 60,
        'sort': '',
        'sortField': ''
    };
    // 如果是点击搜索按钮进行搜索则将搜索对象设置会默认值
    var initSearchMap = function () {
        searchMap.hasCoupon = true;
        searchMap.tmall = true;
        searchMap.materialId = null;
        searchMap.pageNo = 1;
        searchMap.pageSize = 60;
        searchMap.category = '';
        searchMap.brand = '';
        searchMap.spec = null;
        searchMap.price = '';
        searchMap.sort = '';
        searchMap.sortField = '';
    };
    // 加载首页传递过来的搜索关键字
    searchMap.keywords = loadkeywords('kw');

    // 搜索页，商品搜索
    searchGoodsItems(searchMap).then(function (response) {
        showCurrentPage(searchMap.pageNo);
    }).catch(function (error) {
        // handle error
        console.log(error);
        $("#nextPage").addClass("disabled");
    });

    // 下一页
    $("#nextPage").on("click", function () {
        if ($("#nextPage").hasClass("disabled")) {
            return false;
        }
        searchMap.pageNo++;
        searchGoodsItems(searchMap).then(function (response) {
            showCurrentPage(searchMap.pageNo);
        }).catch(function (error) {
            // handle error
            console.log(error);
            searchMap.pageNo--;
            $("#nextPage").addClass("disabled");
        })
    });
    // 上一页
    $("#prePage").on("click", function () {
        if ($("#prePage").hasClass("disabled")) {
            return false;
        }
        searchMap.pageNo = searchMap.pageNo > 1 ? (searchMap.pageNo - 1) : 1;
        searchGoodsItems(searchMap).then(function (response) {
            showCurrentPage(searchMap.pageNo);
        }).catch(function (error) {
            // handle error
            console.log(error);
            searchMap.pageNo++;
        })
    });
});