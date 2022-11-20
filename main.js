typing_anime_list = [];
is_on = [];
function typing_anime(elem, typing_speed) {
    is_on.push(0);
    text = $(elem).text();
    typing_anime_list.push([elem, $(elem).offset()["top"], text.length, typing_speed]);
    $(elem).html("<p style='display: none'>" + text.match(/.{1}/g).join('</p><p style="display: none">') + "<p style='display: inline;'>|</p>");
}
function typing_anime_run(elem_data) {
    setTimeout(function () {
        for (let i = 1; i <= elem_data[2]; i++) {
            setTimeout(function () {
                $(`${elem_data[0]} p:nth-child(${i})`).css("display", "inline");
            }, (i - 1) * elem_data[3] + Math.random() * elem_data[3], "");
        }
        setTimeout(function(){
            var bar = `${elem_data[0]} p:nth-child(${elem_data[2] + 1})`;
            setTimeout(function(){
                $(bar).css("display", "none");
            }, 1000);
            setTimeout(function(){
                $(bar).css("display", "inline");
            }, 2000);
            setTimeout(function(){
                $(bar).css("display", "none");
            }, 3000);
            setTimeout(function(){
                $(bar).css("display", "inline");
            }, 4000);
            setTimeout(function(){
                $(bar).css("display", "none");
            }, 4100 + Math.random() * 400);
        }, elem_data[2] * elem_data[3]);
    }, 400);
}
$(window).scroll(function () {
    for (const elem_data in typing_anime_list) {
        if (!is_on[elem_data] && typing_anime_list[elem_data][1] < $(window).scrollTop() + $(window).height()) {
            is_on[elem_data] = 1;
            typing_anime_run(typing_anime_list[elem_data]);
        }
    }
});