$(function() {

	
	// browserhappy for old browsers

	$('.browsehappy').click(function() {
	  $(this).slideUp();
	});


	// intro

	var introSequence = [
		{ e: $('#logotype'), p: 'transition.slideDownIn' },
		{ e: $('.logobird'), p: 'transition.slideLeftIn', o: { stagger: 250 } },
		{ e: $('.logobird, #logotype'), p: 'transition.fadeOut', o: { stagger: 250 } },
		{ e: $('.mainroad, .features'), p: 'transition.shrinkIn', o: { stagger: 250 } },
		{ e: $('.roads'), p: 'transition.shrinkIn', o: { stagger: 250 } },
		{ e: $('.marker'), p: 'transition.slideDownIn', o: { stagger: 250 } },
		{ e: $('.marker'), p: 'transition.slideDownOut', o: { stagger: 50 } },
		{ e: $('.visualise'), p: 'transition.expandIn', o: { stagger: 250 } },
		{ e: $('.visualise'), p: 'transition.slideDownOut', o: { stagger: 50 } },
		{ e: $('.map'), p: { opacity: 0.5 }, o: { duration: 1000, sequenceQueue: false } },
		{ e: $('#decisionbird3'), p: 'transition.slideDownIn', o: { duration: 500 } },
		{ e: $('#decisionbird2'), p: 'transition.slideLeftIn', o: { duration: 500 } },
		{ e: $('#decisionbird1'), p: 'transition.slideRightIn', o: { duration: 500 } },
		{ e: $('.decisionbird'), p: 'transition.slideDownOut', o: { stagger: 250 } },
		{ e: $('.mapgradient'), p: { opacity: 1 }, o: { duration: 1000, sequenceQueue: false } },
		{ e: $('#logotype'), p: 'transition.slideDownIn' },
		{ e: $('.logobird'), p: 'transition.slideLeftIn', o: { stagger: 250 } },
		
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
	  prevArrow : '<div class="slick-prev"><div class="sprite sprite-slider-arrow-left hide-mobile"></div><div class="sprite sprite-slider-arrow-left-mobile show-only-mobile"></div></div>',
	  nextArrow : '<div class="slick-next"><div class="sprite sprite-slider-arrow-right hide-mobile"></div><div class="sprite sprite-slider-arrow-right-mobile show-only-mobile"></div></div>',
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  dots: false,
	  arrows: true
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