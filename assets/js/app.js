$(document).ready(function () {

    $('.project-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots:true,
        arrows:true,
        prevArrow:'<i class="fas fa-chevron-left"></i>',
        nextArrow:'<i class="fas fa-chevron-right"></i>',
      });
})
// --> about section js
function show(v1, v2, v3, v4,v5) {
    v1="#about .about-slider .about-content-slider ."+v1
    v2="#about .about-slider .about-content-slider ."+v2
    v3="#about .about-slider .about-content-slider ."+v3
    v4="#about .about-slider .about-content-slider ."+v4
    v5="#about .about-slider .about-content-slider ."+v5
 $(v1).removeClass('display-none')
 $(v2).addClass('display-none')
 $(v3).addClass('display-none')
 $(v4).addClass('display-none')
 $(v5).addClass('display-none')
}
function show(v1, v2, v3, v4,v5) {
    v1="#about .about-slider .about-menu-slider ul #"+v1
    v2="#about .about-slider .about-menu-slider ul #"+v2
    v3="#about .about-slider .about-menu-slider ul #"+v3
    v4="#about .about-slider .about-menu-slider ul #"+v4
    v5="#about .about-slider .about-menu-slider ul #"+v5
    console.log(v1)
 $(v1).addClass('active')
 $(v2).removeClass('active')
 $(v3).removeClass('active')
 $(v4).removeClass('active')
 $(v5).removeClass('active')
}