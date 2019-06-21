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
    var currentSlideId = document.querySelectorAll('#gb-tech-vertical div.tech-slide-text')[currentSlide].id;
    var currentSlideSubject = currentSlideId.split('-')[0];
    var iconId = '#' + currentSlideSubject + '-icon';
    var currentlyActiveTech = document.querySelector('.tech-row div.active');
    if (currentlyActiveTech) {
        currentlyActiveTech.classList.remove('active');
    }
    $(iconId).addClass('active');
});