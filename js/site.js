$('#gb-bio-slide').slick({
    prevArrow: "#past",
    nextArrow: "#future",
    initialSlide: 3,
    infinite: false
});

$('#gb-tech-vertical').slick({
    infinite: false,
    vertical: true,
    prevArrow: "#up",
    nextArrow: "#down",
});

$('#gb-tech-vertical').on('afterChange', function(event, slick, currentSlide){
    // $('.slick-current').id;        
    var currentSlideId = document.querySelectorAll('#gb-tech-vertical div.tech-slide-text')[currentSlide].id;
    var currentSlideSubject = currentSlideId.split('-')[0];
    var iconId = '#' + currentSlideSubject + '-icon';
    $(iconId).addClass('active');
});