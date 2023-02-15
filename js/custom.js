var speed = 500;
var autoswitch = true;
var autoswitch_speed = 4000;

//        Add initial active class
$('.slide-item').first().addClass('active-slide');

//        Hide all slides
$('.slide-item').hide();

//        Show first slide
$('.active-slide').show();

//            Next slide
$('#next').on('click', nextSlide);

//            Previous slide
$('#prev').on('click', prevSlide);

//            autoswitch
if (autoswitch === true) {
    setInterval(nextSlide, autoswitch_speed);
}

//            Switch to next slide

function nextSlide() {
    $('.active-slide').removeClass('active-slide').addClass('oldActive');
    if ($('.oldActive').is(':last-child')) {
        $('.slide-item').first().addClass('active-slide');
    } else {
        $('.oldActive').next().addClass('active-slide');
    }
    $('.oldActive').removeClass('oldActive');
    $('.slide-item').fadeOut(speed);
    $('.active-slide').fadeIn(speed);
};

//            Switch to prev slide

function prevSlide() {
    $('.active-slide').removeClass('active-slide').addClass('oldActive');
    if ($('.oldActive').is(':first-child')) {
        $('.slide-item').last().addClass('active-slide');
    } else {
        $('.oldActive').prev().addClass('active-slide');
    }
    $('.oldActive').removeClass('oldActive');
    $('.slide-item').fadeOut(speed);
    $('.active-slide').fadeIn(speed);
};