$(function() {

	
	// browserhappy for old browsers

	$('.browsehappy').click(function() {
	  $(this).slideUp();
	});


	// intro

	function showMenu() {
		if ($('.site-header').css('opacity') < 1) {
			$('.site-header').velocity('transition.slideDownIn');
		}
	}

	var introSequence = [
		{ e: $('#logotype'), p: 'transition.slideDownIn' },
		{ e: $('.logobird'), p: 'transition.slideLeftIn', o: { stagger: 250 } },
		{ e: $('.logobird, #logotype'), p: 'transition.fadeOut', o: { stagger: 250 } },
		{ e: $('#Build_Title'), p: 'transition.slideUpIn', o: { duration: 1000, sequenceQueue: true } },
		{ e: $('.mainroad, .features'), p: 'transition.shrinkIn', o: { stagger: 250 } },
		{ e: $('.roads'), p: 'transition.shrinkIn', o: { stagger: 250 } },
		{ e: $('#Build_Title'), p: 'transition.slideDownOut', o: { duration: 1000, sequenceQueue: true } },
		{ e: $('#Engage_Title'), p: 'transition.slideUpIn', o: { duration: 1000, sequenceQueue: true } },
		{ e: $('.marker'), p: 'transition.slideDownIn', o: { stagger: 250 } },
		{ e: $('.marker'), p: 'transition.slideDownOut', o: { stagger: 50 } },
		{ e: $('#Engage_Title'), p: 'transition.slideDownOut', o: { duration: 1000, sequenceQueue: true } },
		{ e: $('#Insights_Title'), p: 'transition.slideUpIn', o: { duration: 1000, sequenceQueue: false } },
		{ e: $('.visualise'), p: 'transition.expandIn', o: { stagger: 250 } },
		{ e: $('.visualise'), p: 'transition.slideDownOut', o: { stagger: 50 } },
		{ e: $('#Insights_Title'), p: 'transition.slideDownOut', o: { duration: 1000, sequenceQueue: false } },
		{ e: $('.map'), p: { opacity: 0.5 }, o: { duration: 1000, sequenceQueue: false } },
		{ e: $('#decisionbird3'), p: 'transition.slideDownIn', o: { duration: 500 } },
		{ e: $('#decisionbird2'), p: 'transition.slideLeftIn', o: { duration: 500 } },
		{ e: $('#decisionbird1'), p: 'transition.slideRightIn', o: { duration: 500 } },
		{ e: $('#Decide_Title'), p: 'transition.slideUpIn', o: { duration: 1000, sequenceQueue: false } },
		{ e: $('.decisionbird'), p: 'transition.slideDownOut', o: { stagger: 250 } },
		{ e: $('#Decide_Title'), p: 'transition.slideDownOut', o: { duration: 1000, sequenceQueue: false } },
		{ e: $('.mapgradient'), p: { opacity: 1 }, o: { duration: 1000, sequenceQueue: false } },
		{ e: $('#logotype'), p: 'transition.slideDownIn' },
		{ e: $('.logobird'), p: 'transition.slideLeftIn', o: { stagger: 250, complete: showMenu } }
		
	];

	$.Velocity.RunSequence(introSequence);

	// gradient bird animations 
	//#FF0000;#284EF6;#00FF28;#FF0000
	//#284EF6;#FF0000;#00FF28;#284EF6
	//#284EF6;#FFFFFF;#00FF28;#284EF6
	//#FF0000;#00FF28;#284EF6;#FF0000

	var gradientBirdAnimation = [

		{ e: $('.firstStop1'), p: { stopColor: "#DB3833"}, o: { duration: 4000, sequenceQueue: false } },
		{ e: $('.secondStop1'), p: { stopColor: "#DB3833"}, o: { duration: 4000, sequenceQueue: false } },
		{ e: $('.firstStop2'), p: { stopColor: "#DB3833"}, o: { duration: 4000, sequenceQueue: false } },
		{ e: $('.secondStop2'), p: { stopColor: "#DB3833"}, o: { duration: 4000 } },

		{ e: $('.firstStop1'), p: { stopColor: "#FF0000"}, o: { duration: 4000, sequenceQueue: false } },
		{ e: $('.secondStop1'), p: { stopColor: "#284EF6"}, o: { duration: 4000, sequenceQueue: false } },
		{ e: $('.firstStop2'), p: { stopColor: "#284EF6"}, o: { duration: 4000, sequenceQueue: false } },
		{ e: $('.secondStop2'), p: { stopColor: "#FF0000"}, o: { duration: 4000 } },

		{ e: $('.firstStop1'), p: { stopColor: "#284EF6"}, o: { duration: 4000, sequenceQueue: false } },
		{ e: $('.secondStop1'), p: { stopColor: "#FF0000"}, o: { duration: 4000, sequenceQueue: false } },
		{ e: $('.firstStop2'), p: { stopColor: "#FFFFFF"}, o: { duration: 4000, sequenceQueue: false } },
		{ e: $('.secondStop2'), p: { stopColor: "#00FF28"}, o: { duration: 4000 } },

		{ e: $('.firstStop1'), p: { stopColor: "#4EAF46"}, o: { duration: 4000, sequenceQueue: false } },
		{ e: $('.secondStop1'), p: { stopColor: "#4EAF46"}, o: { duration: 4000, sequenceQueue: false } },
		{ e: $('.firstStop2'), p: { stopColor: "#4EAF46"}, o: { duration: 4000, sequenceQueue: false } },
		{ e: $('.secondStop2'), p: { stopColor: "#4EAF46"}, o: { duration: 4000 } },

		{ e: $('.firstStop1'), p: { stopColor: "#284EF6"}, o: { duration: 4000, sequenceQueue: false } },
		{ e: $('.secondStop1'), p: { stopColor: "#FF0000"}, o: { duration: 4000, sequenceQueue: false } },
		{ e: $('.firstStop2'), p: { stopColor: "#FFFFFF"}, o: { duration: 4000, sequenceQueue: false } },
		{ e: $('.secondStop2'), p: { stopColor: "#00FF28"}, o: { duration: 4000 } },

		{ e: $('.firstStop1'), p: { stopColor: "#DB3833"}, o: { duration: 4000, sequenceQueue: false } },
		{ e: $('.secondStop1'), p: { stopColor: "#DB3833"}, o: { duration: 4000, sequenceQueue: false } },
		{ e: $('.firstStop2'), p: { stopColor: "#DB3833"}, o: { duration: 4000, sequenceQueue: false } },
		{ e: $('.secondStop2'), p: { stopColor: "#DB3833"}, o: { duration: 4000 } },

		{ e: $('.firstStop1'), p: { stopColor: "#FF0000"}, o: { duration: 4000, sequenceQueue: false } },
		{ e: $('.secondStop1'), p: { stopColor: "#284EF6"}, o: { duration: 4000, sequenceQueue: false } },
		{ e: $('.firstStop2'), p: { stopColor: "#284EF6"}, o: { duration: 4000, sequenceQueue: false } },
		{ e: $('.secondStop2'), p: { stopColor: "#FF0000"}, o: { duration: 4000, complete: function() { $.Velocity.RunSequence(gradientBirdAnimation); } } }

	];

	$.Velocity.RunSequence(gradientBirdAnimation);


	// preloading images

	function preloadImages(images) {
		for (var i = images.length - 1; i >= 0; i--) {
			$("<img />").attr("src", images[i]);
		}
	}

	var imagesToPreload = [];

	$('.crowdspot-features__list__item').each(function(index, el) {
		imagesToPreload.push($(this).data('image'));
	});

	preloadImages(imagesToPreload);


	// show main menu if past intro

	(function(){
		'use strict';

		var isMenuFixed      = false,
			menuFixThreshold = $('.main-intro').height();

		$(window).on('scroll', function(){
			checkScrollY();
		});

		function checkScrollY(){
			var y = window.pageYOffset;

			if( y >= menuFixThreshold ){
				// should be fixed
				if( !isMenuFixed ){
					isMenuFixed = true;
					showMenu();
				}
			}
			else {
				// should not be fixed
				if( isMenuFixed ){
					isMenuFixed = false;
					showMenu();
				}
			}
		}

		checkScrollY();
	}());


	// sticking features images

	var waypoint = new Waypoint({
		element: $('.crowdspot-features__list'),
		handler: function(direction) {
			if (direction === 'down') {
				// $('#moving-phone').addClass('fixer');
				console.log('stick it!');
				$('.crowdspot-features__images__container').addClass('fixer');
			} else {
				// $('#moving-phone').removeClass('fixer').removeClass('slide-send-off').removeClass('slide-withdraw-off');
				$('.crowdspot-features__images__container').removeClass('fixer');
			}
		},
		offset: '20%'
	});

	var waypointStop = new Waypoint({
		element: $('.crowdspot-features__list'),
		handler: function(direction) {
			if (direction === 'down') {
				$('.crowdspot-features__images__container').removeClass('fixer').addClass('stop');
			} else {
				$('.crowdspot-features__images__container').removeClass('stop').addClass('fixer');
			}
		},
		offset: '-35%'
	});


	// mailchimp-form for ajax mailchimp forms

	$('.mailchimp-form').ajaxChimp({
		url: 'http://finnrobertson.us2.list-manage.com/subscribe/post?u=fea39c610b49b69bbfa0c3a29&id=620444afb9'
	});

	
	// fitvids for responsive video embeds

	// Target your .container, .wrapper, .post, etc.
	$("body").fitVids();


	// enquire for js media queries

	enquire.register("screen and (max-width:45em)", {

	    // OPTIONAL
	    // If supplied, triggered when a media query matches.
	    match : function() {
	    	console.log('max width 45em');
	    },      
	                                
	    // OPTIONAL
	    // If supplied, triggered when the media query transitions 
	    // *from a matched state to an unmatched state*.
	    unmatch : function() {
	    	console.log('not max width 45em');
	    },    
	    
	    // OPTIONAL
	    // If supplied, triggered once, when the handler is registered.
	    setup : function() {},    
	                                
	    // OPTIONAL, defaults to false
	    // If set to true, defers execution of the setup function 
	    // until the first time the media query is matched
	    // deferSetup : true,
	                                
	    // OPTIONAL
	    // If supplied, triggered when handler is unregistered. 
	    // Place cleanup code here
	    destroy : function() {}
	      
	});


	// slick slider

	$('.slick-slider').slick({
		prevArrow : '<div class="slick-prev"><div class="sprite sprite-slider-arrow-left-dark hide-mobile"></div><div class="sprite sprite-slider-arrow-left-dark show-only-mobile"></div></div>',
		nextArrow : '<div class="slick-next"><div class="sprite sprite-slider-arrow-right-dark hide-mobile"></div><div class="sprite sprite-slider-arrow-right-dark show-only-mobile"></div></div>',
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		fade: true,
		// pauseOnHover: true,
		autoplaySpeed: 2500,
		autoplay: true,
		responsive: [
		  {
		  	breakpoint: 1000,
		  	settings: {
		  		arrows: false,
		  		dots: true
		  	}
		  }
		]
	});

	$('.slick-slider--how-it-works').on('afterChange', function(slick, currentSlide, nextSlide) {
		$('.how-it-works-tab').removeClass('active');
		$('.how-it-works-tab').eq(nextSlide).addClass('active');
	});

	$('.how-it-works-tab').on('click', function(event) {
		$('.how-it-works-tab').removeClass('active');
		$('.how-it-works-tab').eq($(this).index()).addClass('active');
		$('.slick-slider--how-it-works').slick('slickGoTo', $(this).index());
	});

	$('.slick-slider--projects').slick({
		prevArrow : '<div class="slick-prev"><div class="sprite sprite-slider-arrow-left-dark hide-mobile"></div><div class="sprite sprite-slider-arrow-left-dark show-only-mobile"></div></div>',
		nextArrow : '<div class="slick-next"><div class="sprite sprite-slider-arrow-right-dark hide-mobile"></div><div class="sprite sprite-slider-arrow-right-dark show-only-mobile"></div></div>',
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		fade: true,
		// pauseOnHover: true,
		autoplaySpeed: 2500,
		autoplay: false,
		responsive: [
		  {
		  	breakpoint: 1070,
		  	settings: {
		  		arrows: false,
		  		dots: true
		  	}
		  }
		]
	});

	$('.slick-slider--projects').on('afterChange', function(slick, currentSlide, nextSlide) {
		$('.projects-tab').removeClass('active');
		$('.projects-tab').eq(nextSlide).addClass('active');
	});

	$('.projects-tab').on('click', function(event) {
		$('.projects-tab').removeClass('active');
		$('.projects-tab').eq($(this).index()).addClass('active');
		$('.slick-slider--projects').slick('slickGoTo', $(this).index());
	});


	// Features

	$('.crowdspot-features__list .crowdspot-features__list__item').filter(':first').addClass('active').find('.crowdspot-features__list__item__text__expandable').velocity('slideDown');

	$('.crowdspot-features__list__item').on('click', function(event) {

		var feature_image = $(this).data('image');

		$('.crowdspot-features__list__item.active .crowdspot-features__list__item__text__expandable').velocity('slideUp', { queue: false });
		$('.crowdspot-features__list__item.active').removeClass('active');
		$(this).addClass('active').find('.crowdspot-features__list__item__text__expandable').velocity('slideDown', { queue: false });

		$('.crowdspot-features__images img').attr('src', feature_image);

	});


	// js cookie

	// Set cookies

	function setCookie(cookieName) {
	  Cookies.set(cookieName, 'yes', {path: '/'});
	}

	// Check cookies

	function checkCookie(cookieName) {
	  if (Cookies.get(cookieName) === 'yes') {
	    console.log(cookieName + ' Cookie!');
	    return true;
	  } else {
	    console.log('No ' + cookieName + ' Cookie :(');
	      return false;
	  }
	}

	// Removie cookies

	function deleteCookie(cookieName) {
	  Cookies.remove(cookieName);
	}


	// pace

	Pace.on('done', function() {

	});


	// function showSocialModal(delay) {
	//   if ($('.contact-form').length >= 1) { 
	//     console.log('This page has at least one contact form');
	//     var showSocialMediaPopupTimer = setTimeout(function() {
	//       $('[data-modal=social-media-popup]').fadeIn(1000);
	//       setSocialModalCookie();
	//     }, delay);
	//   }
	// }

	// mouse leave document and show social modal

	// $(document.documentElement).on('mouseleave', function(event) {
	//   console.log('mouse has left');
	//   if ( !checkCookie('social_modal_popup_mouseleave') ) {
	//       console.log('mouse has left and there isn\'t a cookie');
	//       showSocialModal(0);
	//       setCookie('social_modal_popup_mouseleave');
	//   } else {

	//     console.log('mouse has left and there is a cookie');
	//     return;
	    
	//   }
	  
	// });


	// modals

	$('[data-close-modal]').on('click', function(event) {
	  event.preventDefault();
	  // $(this).parent('.modal').addClass('hidden');
	  $(this).parents('.modal').fadeOut(1000);
	});

	$('[data-open-modal]').on('click', function(event) {
	  event.preventDefault();
	  var modal_to_open = $(this).data('open-modal');
	  console.log(modal_to_open);
	  // $('[data-modal='+modal_to_open+']').removeClass('hidden');
	  $('[data-modal='+modal_to_open+']').fadeIn(1000);
	});


	// page transitions

	$('a').not('[data-open-modal], [data-accept-drinking-age], .popup, a[href^="mailto:"], a[href^="tel:"], .home-splash-button').on('click', function(event) {
	  deleteCookie('social_modal_popup_mouseleave');
	  console.log($(this).attr('data-open-modal'));
	  if (!$(this).attr('target')) {
	    event.preventDefault();
	    newLocation = $(this).attr("href");
	    console.log('change page!');
	    $('body').removeClass('pace-done');
	    setTimeout(function() {
	      window.location = newLocation;
	    }, 1000);
	  }
	});


	// Nav menu transitions

	$('.main-navigation .menu-item').on('click', function(event) {
	  $('.main-navigation .menu-item').removeClass('current-menu-item');
	  $(this).addClass('current-menu-item');
	});


});