const body = document.querySelector("body"),
    sidebar = body.querySelector(".sidebar"),
    sidebarToggle = body.querySelector(".app-sidebar__toggle"),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text"),
    overlaysection  = body.querySelector(".overlay_section ");


$(function () {
    $(".sidebar li")
        .find("a")
        .each(function () {
            var text = $(this).attr("href");

            if (window.location.href.includes(text)) {
                $(this).parents("li").addClass("active");
            } else {
                $(this).parents("li").removeClass("active");
            }
        });


    var side_close = localStorage.getItem("side_close");
    console.log(side_close);
    if (side_close == "close") {
        $(sidebar).removeClass("open");
        $(sidebar).addClass(side_close);
    }
    var dark_mode = localStorage.getItem("dark_mode");
    if (dark_mode == "dark") {
        $(body).addClass(dark_mode);
    }


    // Select 2 
    // $("#sas").select2({
    //     closeOnSelect: false
    // });
    // $("#grade").select2({
    //     closeOnSelect: false
    // });

});


$(toggle).click(function (e) {
    e.preventDefault();
    if ($(sidebar).hasClass("close")) {
        $(sidebar).removeClass("close");
        $(sidebar).addClass("open");
        localStorage.setItem("side_close", "open");
        var side_close = localStorage.getItem("side_close");
        console.log(side_close);
    } else {
        $(sidebar).addClass("close");
        $(sidebar).removeClass("open");
        $(body).removeClass("sidenav-toggled");
        localStorage.setItem("side_close", "close");
        var side_close = localStorage.getItem("side_close");
        console.log(side_close);
    }
});
$(body).click(function (e) {
    if ($(body).hasClass("sidenav-toggled") && screen.width < 992) {
        $(".overlay_section").addClass("overlay_home");
    } else {
        $(".overlay_section").removeClass("overlay_home");
    }
});
$(sidebarToggle, overlaysection).click(function (e) {
    e.preventDefault();
    if ($(body).hasClass("sidenav-toggled")) {
        $(body).removeClass("sidenav-toggled");
        $(sidebar).addClass("close");
        $(sidebar).removeClass("open");
    } else {
        $(body).addClass("sidenav-toggled");
        $(sidebar).removeClass("close");
        $(sidebar).addClass("open");
    }
});

$(modeSwitch).click(function (e) {
    e.preventDefault();
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
        localStorage.setItem("dark_mode", "dark");
    } else {
        localStorage.setItem("dark_mode", "light");
    }
});