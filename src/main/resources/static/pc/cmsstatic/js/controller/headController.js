// 头部控制层
// 头部，热搜记录
var headRecWord = function () {
    getRecWord().then(function (response) {
        if (200 == response.code) {
            showRecWord(response.data);
        } else {
            alert(response.msg);
        }
    });
};
$(function () {
    // 头部，热搜记录
    headRecWord();

    // 悬浮导航
    $(window).scrollTop() > 200 ? $(".to_top").slideDown() : $(".to_top").slideUp(), $(window).scroll(function () {
        $(window).scrollTop() > 200 ? $(".to_top").slideDown() : $(".to_top").slideUp()
    }),
        // 首页疯抢榜标签切换
        $(".list-tab span").on("click", function () {
            $(".list-tab span").removeClass("act").eq($(this).index()).addClass("act"), $(".list_top").hide().eq($(this).index()).show(), $(".list_bt").hide().eq($(this).index()).show()
        }),
        // 首页疯抢榜查看更多
        $(".list-tab").siblings(".more").on("click", function () {
            window.open($(this).data("href") + "&type=" + parseInt($(".list-tab span.act").index() + 1), "_blank")
        })
}),
    !function () {
        // 搜索联想词
        function t(t) {
            var a = t.parent().parent(), e = t,
                n = a.find(".search-land li.active").length > 0 ? a.find(".search-land li.active").index() : 0;
            if (40 == event.keyCode) return n = a.find(".search-land li.active").length ? n + 1 : 0, n = n > a.find(".search-land li").length - 1 ? 0 : n, a.find(".search-land li").removeClass("active"), a.find(".search-land").find("li:eq(" + n + ")").addClass("active"), t.val(a.find(".search-land li.active").html()), !1;
            if (38 == event.keyCode) return n = a.find(".search-land li.active").length ? n - 1 : a.find(".search-land li").length - 1, n = n < 0 ? a.find(".search-land li").length - 1 : n, a.find(".search-land li").removeClass("active"), a.find(".search-land").find("li:eq(" + n + ")").addClass("active"), t.val(a.find(".search-land li.active").html()), !1;
            const i = t.parents("form").siblings(".search-land"), s = t.val();
            var l = "";
            l = s.replace(/\s+/g, ""), 0 == l.length ? ($(".src-close-btn").hide(), i.hide()) : $(".src-close-btn").show(), getSearchSuggestion(s).then(function (a) {
                "200" == a.code && (0 == a.data.length || (e.parent("form").siblings(".search-land").show(), e.parent("form").siblings(".search-land").find("li").each(function (n) {
                    n > a.data.length - 1 ? e.parent("form").siblings(".search-land").find("li").eq(n).hide() : "" == t.val() || e.parent("form").siblings(".search-land").find("li").eq(n).show().html((a.data[n]).kw)
                })));
                const n = e.val();
                var s = "";
                s = n.replace(/\s+/g, ""), 0 == s.length ? ($(".src-close-btn").hide(), i.hide()) : $(".src-close-btn").show();
            });
        }

        // 设置主页
        window.SetHome = function (t, a) {
            try {
                t.style.behavior = "url(#default#homepage)", t.setHomePage(a)
            } catch (e) {
                if (window.netscape) {
                    try {
                        netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect")
                    } catch (e) {
                        layer.msg("此操作被浏览器拒绝！\n请在浏览器地址栏输入“about:config”并回车\n然后将 [signed.applets.codebase_principal_support]的值设置为'true',双击即可。")
                    }
                    var n = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);
                    n.setCharPref("browser.startup.homepage", a)
                } else layer.msg("您的浏览器不支持，请按照下面步骤操作：\n 1.打开浏览器设置。\n 2.点击设置首页。\n 3.输入：" + a + "点击确定。")
            }
        },
            // 收藏
            window.shoucang = function (t, a) {
                try {
                    window.external.addFavorite(a, t)
                } catch (e) {
                    try {
                        window.sidebar.addPanel(t, a, "")
                    } catch (e) {
                        layer.msg("加入收藏失败，请使用Ctrl+D进行添加")
                    }
                }
            };
        // 搜索相关
        $(function () {
            $("#search button").click(function () {
                if ($('#search input[name="kw"]').val().length > 30) return layer.msg("您搜索的关键词过长！", {timer: 2500}), !1
            }), $(window).scroll(function () {
                $(window).scrollTop() > 500 ? $(".toTop").fadeIn(1e3) : $(".toTop").fadeOut(1e3)
            })
        }), $(window).scroll(function () {
            var t = $(window).scrollTop();
            t > 130 ? ($(".floatNav").fadeIn(), $(".floatNav .fn-block").width(1200 - $(".fn-left").width() - 47), $(".floatNav .fn-block .my-src-input").width(1200 - $(".fn-left").width() - 147), $(".floatNav .w_1200 .search-land").width(1200 - $(".fn-left").width() - 50), $(".search-land").eq(0).fadeOut()) : $(".floatNav").fadeOut()
        });
        var a = "input";
        navigator.userAgent.indexOf("MSIE") != -1 && (a = "propertychange"), $(".my-src-input").focus(function () {
            jQuery.fn.isChildAndSelfOf = function (t) {
                return this.closest(t).length > 0
            };
            var a = $(this).parent().parent();
            $("body").unbind("click").on("click", function (t) {
                $(t.target).isChildAndSelfOf(a) || $(".search-land").hide()
            }), t($(this))
        }).keyup(function (a) {
            t($(this)), "" == $(this).val() && $(this).parent("form").siblings(".search-land").find("li").text("")
        }), $(".search-land").on("click", "li", function () {
            $(".my-src-input").val($(this).text()), $(".my-src-btn").trigger("click")
        }), $(".search-land").on("click", "p", function () {
            $(".search-land").hide()
        }), $(".src-close-btn").click(function () {
            $(".src-close-btn").hide(), $(".search-land").hide(), "" == $(".my-src-input").attr("value") ? $(".my-src-input").val("") : $(".my-src-input").val("").attr("placeholder", "请输入要搜索的词")
        }), $("#search button").on("click", function () {
            var t = $(this);
            var kw = t.siblings('input[name="kw"]');
            if ("" == kw.val().trim()) {
                kw.val($("#search_kw").val());
                $("#search_introduce").val('1');
            } else {
                $("#search_introduce").val('0');
            }
            return void t.parents("form");
        }), $(".floatNav .srcBtn").on("click", function () {
            var t = $(this);
            var kw = t.siblings('input[name="kw"]');
            if ("" == kw.val().trim()) {
                kw.val($("#search_kw").val());
                $("#fn_search_introduce").val('1');
            } else {
                $("#fn_search_introduce").val('0');
            }
            return void t.parents("form");
        });
        //     , function () {
        //     var t = $("#loseProductItems");
        //     if (0 == t.length) return false;
        //     for (var a = function (t, a) {
        //         return '<a target="_blank" class="goods_list" href="' + detailUrl + t.id + '"  id="cms-goods-items_' + t.id + "_" + a + '"   ><div class="img"><img src="' + t.pic + '" alt="' + t.d_title + '"></div><div class="content"><p class="co_tit"><span data-gid="' + t.id + '">' + (t.istmall && 0 == parseInt(t.istmall) ? '<i class="tag tag-tao fl" title="淘宝"></i>' : '<i class="tag tag-tmall fl" title="天猫"></i>') + t.d_title + '</span></p><div class="sale_num"><span class="fl">原价 <i>' + t.yuanjia + '</i> </span><span class="fr">销量 <i>' + t.xiaoliang + '</i></span></div><div class="price cf"><i class="p">￥</i><span>' + t.jiage + '</span>  <b class="fr"><i>' + t.quan_jine + "</i>元券</span></b></div></div></a>"
        //     }, e = "", n = listData.length - 1; n >= 0; n--) e += a(listData[n], n);
        //     t.html(e)
        // }()
    }();