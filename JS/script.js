(function($){
    $(function(){

        /*Scroll to sections*/
        $(".jq--scroll-our-cupcakes").click(function(){
            $("html, body").animate({scrollTop: $(".jq--our-cupcakes").offset().top}, 1000);
        });

        $(".jq--scroll-about-us").click(function(){
            $("html, body").animate({scrollTop: $(".jq--about-us").offset().top}, 1200);
        });

        $(".jq--scroll-customer-reviews").click(function(){
            $("html, body").animate({scrollTop: $(".jq--customer-reviews").offset().top}, 1400);
        });

        $(".jq--scroll-photo-gallery").click(function(){
            $("html, body").animate({scrollTop: $(".jq--photo-gallery").offset().top}, 1600);
        });

        $(".jq--scroll-contact-us").click(function(){
            $("html, body").animate({scrollTop: $(".jq--contact-us").offset().top}, 1800);
        });

        /*Scroll buttons to sections*/
        $(".jq--scroll-create-order").click(function(){
            $("html, body").animate({scrollTop: $(".jq--create-order").offset().top}, 1000);
        });

        $(".jq--scroll-view-menu").click(function(){
            $("html, body").animate({scrollTop: $(".jq--view-menu").offset().top}, 1000);
        });

        /* Mobile navigation*/
        $(".jq--nav-icon").click(function(){
            $(".nav-background").fadeToggle();
            $(".mobile-nav-back").fadeToggle();
            $("nav ul").fadeToggle();
        });


        /* Change hamburger to cross vice versa*/

        $(".jq--image-hamburger").click(function(){
            if($(".jq--image-hamburger").attr("src") == "/Images/hamburgerMenu.png")
            {
                $( $(".jq--image-hamburger").attr("src","/Images/crossMenu.png"))    
            }
            else
            {
                $( $(".jq--image-hamburger").attr("src","/Images/hamburgerMenu.png"))    
            }
        });

    });
})(jQuery);
    
