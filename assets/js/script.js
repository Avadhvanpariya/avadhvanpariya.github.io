



function scrollToFeatures() {
    var featuresSection = document.querySelector('.latest-features');
    featuresSection.scrollIntoView({ behavior: 'smooth' });
}

var serviceLinks = document.querySelectorAll('.service-menu a');

serviceLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault(); 
        scrollToFeatures(); 
    });
});

function scrollToFeature() {
    var featuresSection = document.querySelector('.video-section');
    featuresSection.scrollIntoView({ behavior: 'smooth' });
}

var serviceLinks = document.querySelectorAll('.videos a');

serviceLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault(); 
        scrollToFeature(); 
    });
});



function scrollToFeatur() {
    var featuresSection = document.querySelector('.packages');
    featuresSection.scrollIntoView({ behavior: 'smooth' });
}

var serviceLinks = document.querySelectorAll('.packagesa a');

serviceLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault(); 
        scrollToFeatur(); 
    });
});


function scrollToFeatu() {
    var featuresSection = document.querySelector('.blog-section');
    featuresSection.scrollIntoView({ behavior: 'smooth' });
}

var serviceLinks = document.querySelectorAll('.blogs a');

serviceLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault(); 
        scrollToFeatu(); 
    });
});


function scrollToFeat() {
    var featuresSection = document.querySelector('.contact');
    featuresSection.scrollIntoView({ behavior: 'smooth' });
}

var serviceLinks = document.querySelectorAll('.contacts a');

serviceLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault(); 
        scrollToFeat(); 
    });
});


function scrollToFea() {
    var featuresSection = document.querySelector('.with-medical');
    featuresSection.scrollIntoView({ behavior: 'smooth' });
}

var serviceLinks = document.querySelectorAll('.aboutus a');

serviceLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault(); 
        scrollToFea(); 
    });
});




$( document ).ready(function() {
    var w = window.innerWidth;
   
    if(w > 767){
        $('#nav-head').scrollToFixed();
    }else{
        $('#nav-head').scrollToFixed();
    }
    
})

$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        pagination:false,
        navigation:true,
        navigationText:["",""],
        autoPlay:true
    });
});



$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});

$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        pagination:false,
        navigation:true,
        navigationText:["",""],
        autoPlay:true
    });
});


$(document).ready(function(){
    $("#video-slider").owlCarousel({
        items:3,
        itemsDesktop:[1000,3],
        itemsDesktopSmall:[979,3],
        itemsTablet:[768,2],
        pagination:false,
        navigation:true,
        navigationText:["",""],
        autoPlay:true
    });
});