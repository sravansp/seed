const body = document.querySelector("body"),
    sidebar = body.querySelector(".sidebar"),
    sidebarToggle = body.querySelector(".app-sidebar__toggle"),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    modeSwitch = body.querySelectorAll(".toggle-switch"),
    modeText = body.querySelector(".mode-text"),
    overlaysection = body.querySelector(".overlay_section ");

$(window).on('load', function () {
    setTimeout(function () { // allowing 3 secs to fade out loader
        $('.preloader').fadeOut('slow');
    }, 200);
});

//______Select2
$(function (e) {
    'use strict'

    // Select2
    $('.select2').select2({
        minimumResultsForSearch: Infinity,
        width: '100%'
    });
    // Select2 by showing the search
    $('.select2-show-search').select2({
        minimumResultsForSearch: '',
        width: '100%'
    });

});

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
    $(this).find('i').toggleClass('ri-moon-fill ri-sun-fill')
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
        localStorage.setItem("dark_mode", "dark");
    } else {
        localStorage.setItem("dark_mode", "light");
    }
});
formWizard()

function formWizard() {
    $(document).ready(function () {
        // click on next button
        $('.form-wizard-next-btn').click(function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            var parentFieldset = $(this).parents('.wizard-fieldset');
            var currentActiveStep = $(this).parents('.form-wizard').find('.form-wizard-steps .active');
            var next = $(this);
            var nextWizardStep = true;
            parentFieldset.find('.wizard-required').each(function () {
                var thisValue = $(this).val();

                if (thisValue == "") {
                    $(this).siblings(".wizard-form-error").slideDown();
                    nextWizardStep = false;
                } else {
                    $(this).siblings(".wizard-form-error").slideUp();
                }
            });
            if (nextWizardStep) {
                next.parents('.wizard-fieldset').removeClass("show", "400");
                currentActiveStep.removeClass('active').addClass('activated').next().addClass('active', "400");
                next.parents('.wizard-fieldset').next('.wizard-fieldset').addClass("show", "400");
                $(document).find('.wizard-fieldset').each(function () {
                    if ($(this).hasClass('show')) {
                        var formAtrr = $(this).attr('data-tab-content');
                        $(document).find('.form-wizard-steps .form-wizard-step-item').each(function () {
                            if ($(this).attr('data-attr') == formAtrr) {
                                $(this).addClass('active');
                                var innerWidth = $(this).innerWidth();
                                var position = $(this).position();
                                $(document).find('.form-wizard-step-move').css({
                                    "left": position.left,
                                    "width": innerWidth
                                });
                            } else {
                                $(this).removeClass('active');
                            }
                        });
                    }
                });
            }
        });
        //click on previous button
        $('.form-wizard-previous-btn').click(function () {
            var counter = parseInt($(".wizard-counter").text());;
            var prev = $(this);
            var currentActiveStep = $(this).parents('.form-wizard').find('.form-wizard-steps .active');
            prev.parents('.wizard-fieldset').removeClass("show", "400");
            prev.parents('.wizard-fieldset').prev('.wizard-fieldset').addClass("show", "400");
            currentActiveStep.removeClass('active').prev().removeClass('activated').addClass('active', "400");
            $(document).find('.wizard-fieldset').each(function () {
                if ($(this).hasClass('show')) {
                    var formAtrr = $(this).attr('data-tab-content');
                    $(document).find('.form-wizard-steps .form-wizard-step-item').each(function () {
                        if ($(this).attr('data-attr') == formAtrr) {
                            $(this).addClass('active');
                            var innerWidth = $(this).innerWidth();
                            var position = $(this).position();
                            $(document).find('.form-wizard-step-move').css({
                                "left": position.left,
                                "width": innerWidth
                            });
                        } else {
                            $(this).removeClass('active');
                        }
                    });
                }
            });
        });
        //click on form submit button
        $(document).on("click", ".form-wizard .form-wizard-submit", function () {
            var parentFieldset = $(this).parents('.wizard-fieldset');
            var currentActiveStep = $(this).parents('.form-wizard').find('.form-wizard-steps .active');
            parentFieldset.find('.wizard-required').each(function () {
                var thisValue = $(this).val();
                if (thisValue == "") {
                    $(this).siblings(".wizard-form-error").slideDown();
                } else {
                    $(this).siblings(".wizard-form-error").slideUp();
                }
            });
        });
        // focus on input field check empty or not
        $(".form-control").on('focus', function () {
            var tmpThis = $(this).val();
            if (tmpThis == '') {
                $(this).parent().addClass("focus-input");
            } else if (tmpThis != '') {
                $(this).parent().addClass("focus-input");
            }
        }).on('blur', function () {
            var tmpThis = $(this).val();
            if (tmpThis == '') {
                $(this).parent().removeClass("focus-input");
                $(this).siblings('.wizard-form-error').slideDown("3000");
            } else if (tmpThis != '') {
                $(this).parent().addClass("focus-input");
                $(this).siblings('.wizard-form-error').slideUp("3000");
            }
        });
    });

}

$(document).ready(function () {
    // Get the number of radio buttons
    var numRadioButtons = $("input[type='radio']").length;

    // Iterate over the radio buttons
    for (var i = 0; i < numRadioButtons; i++) {
        // Get the current radio button
        var radioButton = $("input[type='radio']").eq(i);

        // Create an ID for the radio button
        var radioButtonId = "radio-button-" + (i + 1);
        radioButton.attr("id", radioButtonId);

        // Create a label for the radio button
        var label = radioButton.parent().find('label');
        label.attr("for", radioButtonId);
    }


    // Get the number of checkboxs
    var numCheckbox = $("input[type='checkbox']").length;

    // Iterate over the checkboxs
    for (var i = 0; i < numCheckbox; i++) {
        // Get the current checkbox
        var chekBox = $("input[type='checkbox']").eq(i);

        // Create an ID for the checkbox
        var chekBoxId = "checkbox-" + (i + 1);
        chekBox.attr("id", chekBoxId);

        // Create a label for the checkbox
        var label = chekBox.parent().find('label');
        label.attr("for", chekBoxId);
    }
});