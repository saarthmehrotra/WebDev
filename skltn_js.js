$( document ).ready(function() {

        $('#navProjects').click(function(event){
                event.preventDefault();
                $('html, body').animate({
                       scrollTop: $('#Projects').offset().top
                 }, 700);
        });

});