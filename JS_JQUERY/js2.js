
var p = $("p");

for (var i = 0; i < p.length; i++) {
    $(p[i]).hover(function () {
        for (var key in stylePhover){
            $(this).css(key, stylePhover[key]);
        }

    }, function () {
        for (var key in stylePhover){
            $(this).css(key, stylePunHover[key]);
        }
    });
}
var menu_button_label = $("#menu_button_label");

$(menu_button_label).hover(function () {
    for (var key in stylePhover){
        $(this).css(key, styleLabelHover[key]);
    }
}, function () {

    for (var key in stylePhover){
        $(this).css(key, styleLabelUnHover[key]);
    }
});


var menu_items = $("#menu_items");

var open = 0;

menu_button_label.click(function () {
    if (open === 0) {
        $(menu_items).addClass("magic");
        $(menu_items).removeClass("notmagic");
        $(menu_button_label).addClass("magic");
        $(menu_button_label).removeClass("notmagic");
        open = 1;
    } else {
        $(menu_items).addClass("notmagic");
        $(menu_items).removeClass("magic");
        $(menu_button_label).addClass("notmagic");
        $(menu_button_label).removeClass("magic");
        open = 0;
    }
});