$('.work-slider').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 4000,
    autoplaySpeed: 1500,
    responsive: {

        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 2,
        },
        1030: {
            items: 3,
        }
    }
});

$(document).ready(function() {
    $(document).ready(function() {
        $('.open').click(function() {
            $('.left-content').toggleClass('active');
        });
    });

    $(document).ready(function() {
        $('.close').click(function() {
            $('.left-content').toggleClass('active');
        });
        $('.certificate-box i').click(function() {
            $('.certificate-box').fadeOut();
        });
        // view certificate
         $('.view-certificate').click(function() {
             $('.certificate-box').fadeIn(100);
         });
         $('.certificate-box i').click(function() {
             $('.certificate-box').fadeOut(100);
         });
    });
});


// color-swicher
$(document).ready(function() {
    $('.spin').click(function() {
        $(".color-swicher").toggleClass('color-swicher-active');

    });
     $(".color-swicher li").click(function() {
        $(':root').css("--yellow", $(this).css('background-color'));
     });

});
