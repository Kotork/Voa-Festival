$(document).ready(function () {
    // Change images height to match its width 
    $('.artistas-img, .parceiros-img, .card-contacts').each(function() {
        $(this).css({
            'height': `${$(this).width()}px`
        });
    });

    initialize();
});

$(window).resize(function () {
    // Change images height to match its width 
    $('.artistas-img, .parceiros-img, .card-contacts').each(function() {
        $(this).css({
            'height': `${$(this).width()}px`
        });
    });
});

function initialize() {
    // Initialize Canvas
    var ctx = document.getElementById("my-canvas").getContext("2d");

    ctx.beginPath();          
    ctx.globalAlpha = 0.7;     
    ctx.fillStyle = "#061323"; 
    ctx.fillRect(0, 0, 600, 450); 
    ctx.closePath();
}