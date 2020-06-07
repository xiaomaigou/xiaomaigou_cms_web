// 头部服务层
// 头部,热搜记录
var getRecWord = function () {
    return this.get('dtk/getTop10hotWords', {});
};
// 头部,搜索联想词
var getSearchSuggestion = function (keywords) {
    return this.get('dtk/getSearchSuggestion', {keywords: keywords});
};