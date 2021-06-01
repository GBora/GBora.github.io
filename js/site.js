$('#gb-bio-slide').slick({
    prevArrow: "#past",
    nextArrow: "#future",
    initialSlide: 4,
    infinite: false
});

$('#gb-tech-vertical').slick({
    infinite: false,
    vertical: true,
    prevArrow: "#up",
    nextArrow: "#down",
    responsive: [
        {
            breakpoint: 500,
            settings: "unslick"
        }
    ]
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

// Get all tech icons
let techs = $('.gb-tech');

for (var i = 0;  i < techs.length; i++) {
    var tech = techs[i];
    // For each tech icon set an on click;
    $(tech).click(function(event) {
        {
        // Reset the active class so that no 2 techs are active at the same time
        var currentlyActiveTech = document.querySelector('.tech-row div.active');
        if (currentlyActiveTech) {
            currentlyActiveTech.classList.remove('active');
        }
        // Set this teach icon active
        document.querySelector('#' + event.target.alt + '-icon').classList.add('active');
        
        // Get all slides
        var verticalSlides = document.querySelectorAll('.tech-slide-text');

        // compare the ids in the vertical slides
        for (var j = 0; j < verticalSlides.length; j++) {
            // If the ids are about the same thing go to that slide
            if (verticalSlides[j].id === event.target.alt + '-text') {
                $('#gb-tech-vertical').slick('slickGoTo', j);
            }
        }
    }
    })
//    tech.addEventListener('click', )
}

