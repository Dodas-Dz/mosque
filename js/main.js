(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();


    // Fixed Navbar
    $(window).scroll(function () {
        if ($(window).width() < 992) {
            // Version mobile (<992px) - Toujours fond blanc
            $('.fixed-top').addClass('bg-white shadow');
        } else {
            // Version desktop (≥992px) - Ancien comportement
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-white shadow').css('top', 0);
            } else {
                $('.fixed-top').removeClass('bg-white shadow').css('top', 0);
            }
        }
    });
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    $(document).ready(function() {
        // On cible tous les éléments avec la classe 'counter' et on leur applique une animation
        $('.counter').each(function() {
          var $this = $(this);
          var countTo = $this.attr('data-count'); // Valeur à atteindre
          $({
            countNum: $this.text() // Commence à la valeur actuelle du compteur
          }).animate({
            countNum: countTo // Incrémenter jusqu'à la valeur cible
          }, {
            duration: 2000, // Durée de l'animation (2 secondes)
            easing: 'swing', // Type d'animation (effet de rebond)
            step: function() {
              $this.text(Math.ceil(this.countNum)); // Met à jour le texte du compteur pendant l'animation
            },
            complete: function() {
              $this.text(countTo); // Assure que le compteur affiche la valeur finale
            }
          });
        });
      });
    // Testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: false,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });

})(jQuery);

