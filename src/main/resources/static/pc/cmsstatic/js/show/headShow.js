// 头部显示层
// 头部，热搜记录
var showRecWord = function (recWord) {
    var t = $("#rec_word");
    if (0 == t.length) return false;
    for (var n = function (t, n) {
        return '<a target="_blank" href="search.html?kw=' + t + '" style="' + (3 == n ? 'color:red;' : '') + '">' + t + '</a>';
    }, e = "", i = 0; i < recWord.length; i++) e += n(recWord[i], i);
    t.html(e);
};