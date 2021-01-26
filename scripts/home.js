$(document).ready(function () {
   $('audio')[0].play(); // Workaround to work on chrome and opera because autoplay was deprecated on May 2018
});

function soundControl (state) {
    if (state === 'on') {
        $('.sound-on').addClass('d-none');
        $('.sound-off').removeClass('d-none');
        $('audio')[0].pause();
    } else {
        $('.sound-off').addClass('d-none');
        $('.sound-on').removeClass('d-none');
        $('audio')[0].play();
    }
}