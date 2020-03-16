function load_owl() {
	jQuery("#testimonial-carousel").owlCarousel({
		center: true,
		items:4,
		loop:true,
		margin:30,
		responsive:{
		1000:{
			items:4
		},
		600:{
			items:3
		},
		0:{
			items:1
		}
		}
			});

		jQuery("#blog-carousel").owlCarousel({
				center: true,
		items:4,
		loop:true,
		margin:20,
		responsive:{
		1000:{
			items:4
		},
		600:{
			items:3
		},
		0:{
			items:1
		}
		}
	});

	// Custom Navigation owlCarousel
	$(".next").on("click", function() {
			$(this).parent().parent().find('.blog-slide').trigger('owl.next');
	});
	$(".prev").on("click", function() {
			$(this).parent().parent().find('.blog-slide').trigger('owl.prev');
	});

	jQuery('.owl-custom-nav').each(function() {
			var owl = $('.owl-custom-nav').next();
			var ow = parseInt(owl.css("height"), 10);
			$(this).css("margin-top", (ow / 2) - 25);
			owl.owlCarousel();
			// Custom Navigation Events
			$(".btn-next").on("click", function() {
					owl.trigger('owl.next');
			});
			$(".btn-prev").on("click", function() {
					owl.trigger('owl.prev');
			});
	});


	// custom navigation for slider
	var ows = $('#custom-owl-slider');
	var arr = $('.owl-slider-nav');
	var doc_height = $(window).innerHeight();
	arr.css("top", (doc_height / 2) - 25);
	ows.owlCarousel();
	// Custom Navigation Events
	arr.find(".next").on("click", function() {
			ows.trigger('owl.next');
	});
	arr.find(".prev").on("click", function() {
			ows.trigger('owl.prev');
	});

	jQuery(".owl-slide-wrapper").on("mouseenter", function() {
			arr.find(".next").css("right", "40px");
			arr.find(".prev").css("left", "40px");
	}).on("mouseleave", function() {
			arr.find(".next").css("right", "-50px");
			arr.find(".prev").css("left", "-50px");
	})
}

$(document).ready(function(){

    /* For the sticky navigation */
    $('#about').waypoint(function(direction) {
        if (direction == "down") {
            $('header').addClass('sticky');
            $('#back-to-top').show();
        } else {
            $('header').removeClass('sticky');
            $('#back-to-top').hide();
        }
    }, {
      offset: '60px;'
    });

		load_owl();

    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');

        nav.slideToggle(200); 
        if(icon.hasClass('ion-navicon-round')){
            icon.removeClass('ion-navicon-round');
            icon.addClass('ion-close-round')
        } else {
            icon.removeClass('ion-close-round')
            icon.addClass('ion-navicon-round')
        }
    })

    $('#back-to-top').click(function(){
        jQuery('html,body').animate({
            scrollTop:0
        },1000);
    })


    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
        ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
            scrollTop: target.offset().top
            }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
                return false;
            } else {
                //$target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
            };
            });
        }
        }
    });

})