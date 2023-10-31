const body = document.querySelector("body"),
    sidebar = body.querySelector(".sidebar"),
    sidebarToggle = body.querySelector(".app-sidebar__toggle"),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    modeSwitch = body.querySelectorAll(".toggle-switch"),
    modeText = body.querySelector(".mode-text"),
    overlayHome = body.querySelectorAll(".overlay_section");

$(window).on('load', function () {
    setTimeout(function () { // allowing 3 secs to fade out loader
        $('.preloader').fadeOut('slow');
    }, 200);
});


// if (document.querySelector(".wrapper-login")) {
//     const sign_in_btn = document.querySelector("#sign-in-btn");
//     const sign_up_btn = document.querySelector("#sign-up-btn");
//     const container = document.querySelector(".wrapper-login");

//     sign_up_btn.addEventListener("click", () => {
//         container.classList.add("sign-up-mode");
//     });

//     sign_in_btn.addEventListener("click", () => {
//         container.classList.remove("sign-up-mode");
//     });
// }


// Password eye button 
$(".toggle-password").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("ri-eye-fill ri-eye-off-fill");
    var input = $("#login-password");
    if (input.attr("type") === "password") {
        input.attr("type", "text");
    } else {
        input.attr("type", "password");
    }

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

$(overlayHome).click(function (e) {
    console.log("hiiiii");
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
$(sidebarToggle, overlayHome).click(function (e) {
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
            var next = $(this);
            var nextWizardStep = false;
            next.parents('.wizard-fieldset').removeClass("show", "400");
            var currentActiveStep = $(this).parents('.form-wizard').find('.form-wizard-steps .active');
            // currentActiveStep.removeClass('active').addClass('activated').next().addClass('active', "400");
            next.parents('.wizard-fieldset').next('.wizard-fieldset').addClass("show", "400");
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



if (document.querySelector("#editor")) {
    var toolbarOptions = [
        ["bold", "italic", "underline"],
        [{
            align: [],
        }, ],
        [{
                list: "ordered",
            },
            {
                list: "bullet",
            },
        ],
        [{
                indent: "-1",
            },
            {
                indent: "+1",
            },
        ],
        [{
            header: [1, 2, 3, 4, 5, 6, false],
        }, ],

        ["clean"],
    ];
    var quill = new Quill("#editor", {
        modules: {
            toolbar: toolbarOptions,
        },
        placeholder: "Type here ",
        theme: "snow",
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

function printtag(tagid) {
    var hashid = "#" + tagid;
    // var tagname =  $(hashid).prop("tagName").toLowerCase() ;
    var attributes = "";
    var attrs = document.getElementById(tagid).attributes;
    $.each(attrs, function (i, elem) {
        attributes += " " + elem.name + " ='" + elem.value + "' ";
    })
    var divToPrint = $(hashid).html();
    var head = "<html><head>" + $("head").html() + "</head>";
    var allcontent = head + "<body  onload='window.print()' >" + divToPrint + "</body></html>";
    var newWin = window.open('', 'Print-Window');
    newWin.document.open();
    newWin.document.write(allcontent);
    newWin.document.close();
    // setTimeout(function(){newWin.close();},10);
}



function switchfp() {
    if (document.querySelector('.fp-1')) {


        if (document.querySelector('.fp-1').style.display == 'none') {
            document.querySelector('.fp-1').style.display = 'block';
            document.querySelector('.fp-2').style.display = 'none';
        } else {
            document.querySelector('.fp-1').style.display = 'none';
            document.querySelector('.fp-2').style.display = 'block';
        }
    }
}

// Image upload JS 
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
            $('#imagePreview').hide();
            $('#imagePreview').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
$("#imageUpload").change(function () {
    readURL(this);
});

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()

// ============Admin Dashboard Circular Progress Bar============= 

window.addEventListener("DOMContentLoaded", () => {
    if (document.querySelector('.pie')) {
        // update circle when range change
        const pie = document.querySelectorAll(".pie");
        // const range = document.querySelector('[type="range"]');

        // start the animation when the element is in the page view
        const elements = [].slice.call(document.querySelectorAll(".pie"));
        const circle = new CircularProgressBar("pie");

        // circle.initial();

        if ("IntersectionObserver" in window) {
            const config = {
                root: null,
                rootMargin: "0px",
                threshold: 0.75
            };

            const ovserver = new IntersectionObserver((entries, observer) => {
                entries.map((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio > 0.75) {
                        circle.initial(entry.target);
                        observer.unobserve(entry.target);
                    }
                });
            }, config);

            elements.map((item) => {
                ovserver.observe(item);
            });
        } else {
            elements.map((element) => {
                circle.initial(element);
            });
        }
    }

});

jQuery(document).ready(function ($) {
    $(".clickable-row").click(function () {
        window.location = $(this).data("href");
    });
});














// ======================Search Input JS  ======================


if (document.querySelector(".search-input")) {
    let suggestions = [
        "Alice",
        "Bob",
        "Charlie",
        "David",
        "Eve",
        "Frank",
        "Grace",
        "Henry",
        "Ivy",
        "Jack",
        "Karen",
        "Liam",
        "Mia",
        "Nora",
        "Oliver",
        "Penelope",
        "Quinn",
        "Riley",
        "Sophia",
        "Theodore",
        "Ursula",
        "Victor",
        "Willow",
        "Xander",
        "Yasmine",
        "Zane",
        "Ava",
        "Benjamin",
        "Catherine",
        "Daniel",
        "Emma",
        "Finn",
        "Gabriella",
        "Harrison",
        "Isabella",
        "Jacob",
        "Katherine",
        "Luna",
        "Matthew",
        "Natalie",
        "Olivia",
        "Patrick",
        "Quincy",
        "Rebecca",
        "Samuel",
        "Taylor",
        "Uma",
        "Violet"
    ];

    // getting all required elements
    const searchWrapper = document.querySelector(".search-input");
    const inputBox = searchWrapper.querySelector("input");
    const suggBox = searchWrapper.querySelector(".autocom-box");
    let webLink;

    // if user press any key and release
    inputBox.onkeyup = (e) => {
        let userData = e.target.value; //user enetered data
        let emptyArray = [];
        if (userData) {
            emptyArray = suggestions.filter((data) => {
                //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
                return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
            });
            emptyArray = emptyArray.map((data) => {
                // passing return data inside li tag
                return (data = "<li>" + data + "</li>");
            });
            searchWrapper.classList.add("active"); //show autocomplete box
            showSuggestions(emptyArray);
            let allList = suggBox.querySelectorAll("li");
            for (let i = 0; i < allList.length; i++) {
                //adding onclick attribute in all li tag
                allList[i].setAttribute("onclick", "select(this)");
            }
        } else {
            searchWrapper.classList.remove("active"); //hide autocomplete box
        }
    };

    function select(element, event) {
        let selectData = element.textContent;
        inputBox.value = selectData;
        searchWrapper.classList.remove("active");
    }

    function showSuggestions(list) {
        let listData;
        if (!list.length) {
            userValue = inputBox.value;
            listData = "<li>" + userValue + "</li>";
        } else {
            listData = list.join("");
        }
        suggBox.innerHTML = listData;
    }
}


fileUpload();

function fileUpload() {
    if (document.querySelector(".browse-files")) {
        var isAdvancedUpload = function () {
            var div = document.createElement('div');
            return (('draggable' in div) || ('ondragstart' in div && 'ondrop' in div)) && 'FormData' in window && 'FileReader' in window;
        }();

        let draggableFileArea = document.querySelector(".drag-file-area");
        let browseFileText = document.querySelector(".browse-files");
        let uploadIcon = document.querySelector("#upload-icon");
        let dragDropText = document.querySelector(".dynamic-message");
        let fileInput = document.querySelector(".default-file-input");
        let cannotUploadMessage = document.querySelector(".cannot-upload-message");
        let cancelAlertButton = document.querySelector(".cancel-alert-button");
        let uploadedFile = document.querySelector(".file-block");
        let fileName = document.querySelector(".file-name");
        let fileSize = document.querySelector(".file-size");
        let progressBar = document.querySelector(".progress-bar");
        let removeFileButton = document.querySelector(".remove-file-icon");
        let uploadButton = document.querySelector(".upload-button");
        let fileFlag = 0;

        fileInput.addEventListener("click", () => {
            fileInput.value = '';
            console.log(fileInput.value);
        });

        fileInput.addEventListener("change", e => {
            console.log(" > " + fileInput.value)
            uploadIcon.className = 'ri-checkbox-circle-line';
            dragDropText.innerHTML = 'File Dropped Successfully!';
            document.querySelector(".label").innerHTML = `<span class="browse-files">
            <input type="file"
                class="default-file-input" />
            <span
                class="browse-files-text btn btn-primary fs-14">Select
                File </span>
        </span>`;
            uploadButton.innerHTML = `Upload`;
            fileName.innerHTML = fileInput.files[0].name;
            fileSize.innerHTML = (fileInput.files[0].size / 1024).toFixed(1) + " KB";
            uploadedFile.style.cssText = "display: flex;";
            progressBar.style.width = 0;
            fileFlag = 0;
        });

        uploadButton.addEventListener("click", () => {
            let isFileUploaded = fileInput.value;
            if (isFileUploaded != '') {
                if (fileFlag == 0) {
                    fileFlag = 1;
                    var width = 0;
                    var id = setInterval(frame, 50);

                    function frame() {
                        if (width >= 390) {
                            clearInterval(id);
                            uploadButton.innerHTML = `<span class="material-icons-outlined upload-button-icon"> check_circle </span> Uploaded`;
                        } else {
                            width += 5;
                            progressBar.style.width = width + "px";
                        }
                    }
                }
            } else {
                cannotUploadMessage.style.cssText = "display: flex; animation: fadeIn linear 1.5s;";
            }
        });

        cancelAlertButton.addEventListener("click", () => {
            cannotUploadMessage.style.cssText = "display: none;";
        });

        if (isAdvancedUpload) {
            ["drag", "dragstart", "dragend", "dragover", "dragenter", "dragleave", "drop"].forEach(evt =>
                draggableFileArea.addEventListener(evt, e => {
                    e.preventDefault();
                    e.stopPropagation();
                })
            );

            ["dragover", "dragenter"].forEach(evt => {
                draggableFileArea.addEventListener(evt, e => {
                    e.preventDefault();
                    e.stopPropagation();
                    uploadIcon.className = 'ri-check-double-line';
                    dragDropText.innerHTML = 'Drop your file here!';
                });
            });

            draggableFileArea.addEventListener("drop", e => {
                uploadIcon.className = 'ri-checkbox-circle-line';
                dragDropText.innerHTML = 'File Dropped Successfully!';
                document.querySelector(".label").innerHTML = `<span class="browse-files">
                <input type="file"
                    class="default-file-input" />
                <span
                    class="browse-files-text btn btn-primary fs-14">Select
                    File </span>
            </span>`;
                uploadButton.innerHTML = `Upload`;

                let files = e.dataTransfer.files;
                fileInput.files = files;
                console.log(files[0].name + " " + files[0].size);
                console.log(document.querySelector(".default-file-input").value);
                fileName.innerHTML = files[0].name;
                fileSize.innerHTML = (files[0].size / 1024).toFixed(1) + " KB";
                uploadedFile.style.cssText = "display: flex;";
                progressBar.style.width = 0;
                fileFlag = 0;
            });
        }

        removeFileButton.addEventListener("click", () => {
            uploadedFile.style.cssText = "display: none;";
            fileInput.value = '';
            uploadIcon.className = 'ri-upload-cloud-2-line';
            dragDropText.innerHTML = 'Drag & drop any file here';
            document.querySelector(".label").innerHTML = `<span class="browse-files">
            <input type="file"
                class="default-file-input" />
            <span
                class="browse-files-text btn btn-primary fs-14">Select
                File </span>
        </span>`;
            uploadButton.innerHTML = `Upload`;
        });
    }
}


tblRandomColor()

function tblRandomColor() {
    if (document.querySelectorAll('.ntbl-row')) {
        const colorNames = ["#0095FF","#4437CC", "#FF8A00", "#00D3E0", "#B3E000", "#4BB79D", "#DFA510", "#E546D5", "#00E096", "#884DFF", "#FF4DB8"];

        function getRandomColor() {
            if (colorNames.length === 0) {
                alert("All colors have been used!");
                return "white"; // Provide a fallback color if all colors have been used.
            }
            const randomIndex = Math.floor(Math.random() * colorNames.length);
            const randomColor = colorNames.splice(randomIndex, 1)[0];
            return randomColor;
        }

        const colorBoxes = document.querySelectorAll(".rows");

        colorBoxes.forEach((box) => {
            const randomColor = getRandomColor();
            // box.style.backgroundColor = randomColor;
            box.setAttribute("data-color", randomColor);
        });



        // Function to convert a color string to an RGB array
        function colorToRgb(color) {
            const tempDiv = document.createElement('div');
            tempDiv.style.color = color;
            document.body.appendChild(tempDiv);
            const rgbColor = getComputedStyle(tempDiv).color;
            document.body.removeChild(tempDiv);

            // Extract RGB values from the computed color
            const match = rgbColor.match(/\d+/g);
            return match.map(Number);
        }
        // Get all elements with the class "ntbl-row"
        const rows = document.querySelectorAll('.ntbl-row');

        // Loop through each row and set the progress bar color based on the data-color attribute
        colorBoxes.forEach(row => {
            const dataColor = row.getAttribute('data-color');
            const progress = row.querySelector('.progress');
            const progressBar = row.querySelector('.progress-bar');
            const progressValue = progressBar.getAttribute('aria-valuenow');
            const totalpro = row.querySelector('.total-pro');

            // Convert the dataColor to an RGB array
            const rgbColor = colorToRgb(dataColor);
            progressBar.style.backgroundColor = dataColor;
            progress.style.backgroundColor = `rgba(${rgbColor[0]}, ${rgbColor[1]}, ${rgbColor[2]}, 0.1)`;
            totalpro.style.backgroundColor = `rgba(${rgbColor[0]}, ${rgbColor[1]}, ${rgbColor[2]}, 0.1)`;
            totalpro.style.borderColor = dataColor;
            totalpro.style.color = dataColor;
            // Set the opacity to 10%
            // progress.style.opacity = '0.1';
            if (progressValue == 100) {
                row.style.backgroundColor = `rgba(${rgbColor[0]}, ${rgbColor[1]}, ${rgbColor[2]}, 0.1)`;
                totalpro.style.backgroundColor = dataColor
                totalpro.style.color = "#fff";
            }

        });
    }
}




$(document).ready(function () {
    if (document.querySelector("#slider1")) {
        $("#slider1").owlCarousel({
            loop: true,
            margin: 10,
            responsiveClass: true,
            items: 3,
            autoplay: true,
            dots: false,
            pagination: false,
            nav: false,
            smartSpeed: 750,
            responsive: {
                0: {
                    items: 1,
                    // nav: true
                },
                600: {
                    items: 2,
                    // nav: false
                },
                1300: {
                    items: 3,
                    // nav: true,
                }
            }
        });
    }
});