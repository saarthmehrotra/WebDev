$( document ).ready(function() {

// Click on Nav Bar to Scroll to Projects Section on webpage
        $('#navProjects').click(function(event){
                event.preventDefault();
                $('html, body').animate({
                       scrollTop: $('#Projects').offset().top
                 }, 700);
        });

// Click on Nav Bar to Scroll to About Section on webpage
        $('#navAbout').click(function(event){
                event.preventDefault();
                $('html, body').animate({
                       scrollTop: $('#About').offset().top
                 }, 700);
        });

});