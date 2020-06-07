/**
 * static.cms - v1.0.0  License By
 * WEB小组
 */
var ScrollTop;
ScrollTop = function () {
    function t() {
        this.containerTag = $("#nav"), this.bottomHeigh = 200, this.leftWidth = 50, this.addStyle(), this.show(), $(window).resize(function (t) {
            return function () {
                return t.show()
            }
        }(this)), $(document).on("click", "#scrollTop", function (t) {
            return function () {
                return $("body,html").animate({scrollTop: 0}, 500)
            }
        }(this))
    }

    return t.prototype.addStyle = function () {
        var t;
        return t = '<style>#scrollTop{ position: fixed; z-index: 10000; background: url("../images/scrollTop2.png") no-repeat; width: 54px; height: 54px; cursor: pointer; }</style>', $("head").append(t)
    }, t.prototype.show = function () {
        var t, o;
        return $("#scrollTop").remove(), o = this.calcPosition(), t = "<div id='scrollTop' style='left:" + o.left + "px;top:" + o.top + "px;'></div>", $("body").append(t)
    }, t.prototype.calcPosition = function () {
        var t, o, i, n, e;
        return t = $(this.containerTag).offset(), o = $(this.containerTag).width(), e = $(window).height(), i = t.left + o + this.leftWidth, n = e - this.bottomHeigh, {
            left: i,
            top: n
        }
    }, t
}();