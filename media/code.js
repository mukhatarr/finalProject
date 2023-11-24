/* ----------------- form validation in contacts.html -------------------- */

$(document).ready(function() {
    document.getElementById("loginbnt").addEventListener('click', function () {
        audio.play();
        let email = document.getElementById("logemail").value;
        let pswd = document.getElementById("logpswd").value;

        if (email.length < 7 && pswd.length < 7) {
            let modalBody = document.getElementById('logmodalBody');
            modalBody.insertAdjacentHTML('beforeend', 
                `<div class="alert alert-danger alert-dismissible">
                    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                    <strong>Error!</strong> Mail name or password is invalid!
                </div>`);
        }
    })
    document.getElementById("regbtn").addEventListener('click', function () {
        audio.play();
        let email = document.getElementById("regemail").value;
        let pswd = document.getElementById("regpswd").value;

        if (email.length < 7 && pswd.length < 7) {
            let modalBody = document.getElementById('regmodalBody');
            modalBody.insertAdjacentHTML('beforeend', 
                `<div class="alert alert-danger alert-dismissible">
                    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                    <strong>Error!</strong> Mail name or password is invalid!
                </div>`);
        }
    })
});


/* ------------------- section 'Popular' in index.html ------------------- */

let screenWidth = window.innerWidth;

window.addEventListener('resize', function() {
    screenWidth = window.innerWidth;
});

$(document).ready(function() {
    document.getElementById("next").addEventListener('click', function () {
        audio.play();
        let contStyle = getComputedStyle(document.querySelector(".popular .filmBox"));
        let left = parseInt(contStyle.left);
        let minLeft = -2100

        if (screenWidth < 767.5) minLeft = -3000;
        else if (screenWidth < 1000) minLeft = -2700;
        else if (screenWidth < 1400) minLeft = -2400;

        if (left > minLeft) {
            $(".popular .filmBox").animate({left: left - 300 + 'px'}, 200);
        }
    });
    
    document.getElementById("previous").addEventListener('click', function () {
        audio.play();
        let contStyle = getComputedStyle(document.querySelector(".popular .filmBox"));
        let left = parseInt(contStyle.left);
        if (left < 0) {
            $(".popular .filmBox").animate({left: left + 300 + 'px'}, 200);
        }
    });
});


/* ---------------------- gallery in contacts.html ----------------------- */

$(document).ready(function() {
    $(".images img").on("mouseover", function () {
        $(this).addClass("targetImage");
        $(this).animate({
            width: '360px',
            height: '480px',
            bottom: '30px',
            right: '40px'
        }, 300);
        $(".images img").not(this).animate({
            width: '240px',
            height: '320px',
            bottom: '-30px',
            right: '-40px'
        }, 300);
    });
    
    $(".images img").on("mouseout", function () {
        $(this).animate({
            width: '300px',
            height: '400px',
            bottom: '0',
            right: '0'
        }, 300);
        $(".images img").not(this).animate({
            width: '300px',
            height: '400px',
            bottom: '0',
            right: '0'
        }, 300);
        $(this).removeClass("targetImage");
    });
});


/* ------------------------- audio in review.html -------------------------- */

let i = 0;
let music = new Audio('media/bandoleros.mp3');
let audio = new Audio('media/mouseClick.mp3');
$(document).ready(function() {
    document.getElementById('audioPlayer').addEventListener('click', function () {
        if (i % 2 == 0) {
            music.play();
            i++;
        } else {
            music.pause();
            music.currentTime = 0;
            i--;
        }
    });
});
