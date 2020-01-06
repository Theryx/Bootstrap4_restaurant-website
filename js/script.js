$(document).ready(function(){
    $("#mycarousel").carousel( { interval: 2000 } );
    $("#carouselBoutton").click(function(){
        if ($("#carouselBoutton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselBoutton").children("span").removeClass('fa-pause');
            $("#carouselBoutton").children("span").addClass('fa-play');
        }
        else if ($("#carouselBoutton").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carouselBoutton").children("span").removeClass('fa-play');
            $("#carouselBoutton").children("span").addClass('fa-pause');                    
        }
    });
     $('div.media > img').hover(function(){
         $(this).css('border', 'solid 1px blue')
     });
     $('#reservebtn').click(function(){
        $("#ReserveForm").modal('toggle');
     });
     $('#loginModalbtn').click(function(){
        $("#loginModal").modal('toggle');
     });
});