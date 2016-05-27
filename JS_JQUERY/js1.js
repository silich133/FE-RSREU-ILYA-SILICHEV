$(document).ready(function () {
    var client_w = screen.width;
    console.log(client_w);
    $("#main").css("width", (client_w - 30) + "px");

    $(window).resize(function () {
        var newClient_w = screen.width;
        console.log(newClient_w);
        $("#main").css("width", (newClient_w - 30) + "px");
    });
});