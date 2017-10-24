$(function () {
    function hideImage(that) {
        that.parent().parent().css('display', 'none')
        that.parent().parent().next().attr('class', 'am-u-sm-12 am-list-main')
    }
    $('.am-img-responsive').each(function (index, val) {
        if ($(this).attr('p-src') !== "/images/default_pic.png")  {
            var url = $(this).attr('p-src');
            if (url && url.endsWith('_.jpg')) { url = url.substring(0, url.length - 5) + '/thumb'; }
            $(this).attr('class', 'lazyload am-img-responsive').attr('data-src', url).attr('src', 'http://cdn.jishux.com/default_pic_thumb.png')
            $(this).parent().parent().next().attr('class', 'am-u-sm-9 am-list-main')
            $(this).error(function () { hideImage($(this)); })
        }
    })
})