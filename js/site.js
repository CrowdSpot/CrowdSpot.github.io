$(function() {

	
	// browserhappy for old browsers

	$('.browsehappy').click(function() {
	  $(this).slideUp();
	});


	// Mobile Menu

	function toggleMobileMenu() {
		$('.site-header__menu-items').toggleClass('mobile-menu-open');
	}

	function hideMobileMenu() {
		$('.site-header__menu-items').removeClass('mobile-menu-open');
	}

	$('.site-header__mobile-toggle').on('touchstart', function(event) {
		toggleMobileMenu();
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
		// { e: $('#Build_Title'), p: 'transition.slideUpIn', o: { duration: 1000, sequenceQueue: true } },
		{ e: $('.mainroad, .features'), p: 'transition.shrinkIn', o: { stagger: 150 } },
		{ e: $('.roads'), p: 'transition.shrinkIn', o: { duration: 400 } },
		// { e: $('#Build_Title'), p: 'transition.slideDownOut', o: { duration: 1000, sequenceQueue: true } },
		// { e: $('#Engage_Title'), p: 'transition.slideUpIn', o: { duration: 1000, sequenceQueue: true } },
		{ e: $('.marker'), p: 'transition.slideDownIn', o: { stagger: 150 } },
		{ e: $('.marker'), p: 'transition.slideDownOut', o: { stagger: 40 } },
		// { e: $('#Engage_Title'), p: 'transition.slideDownOut', o: { duration: 1000, sequenceQueue: true } },
		// { e: $('#Insights_Title'), p: 'transition.slideUpIn', o: { duration: 1000, sequenceQueue: false } },
		{ e: $('.visualise'), p: 'transition.expandIn', o: { stagger: 150 } },
		{ e: $('.visualise'), p: 'transition.slideDownOut', o: { stagger: 40 } },
		// { e: $('#Insights_Title'), p: 'transition.slideDownOut', o: { duration: 1000, sequenceQueue: false } },
		{ e: $('.map'), p: { opacity: 0.5 }, o: { duration: 1000, sequenceQueue: false } },
		{ e: $('#decisionbird3'), p: 'transition.slideDownIn', o: { duration: 200 } },
		{ e: $('#decisionbird2'), p: 'transition.slideLeftIn', o: { duration: 200 } },
		{ e: $('#decisionbird1'), p: 'transition.slideRightIn', o: { duration: 200 } },
		// { e: $('#Decide_Title'), p: 'transition.slideUpIn', o: { duration: 1000, sequenceQueue: false } },
		{ e: $('.decisionbird'), p: 'transition.slideDownOut', o: { stagger: 250 } },
		// { e: $('#Decide_Title'), p: 'transition.slideDownOut', o: { duration: 1000, sequenceQueue: false } },
		{ e: $('.mapgradient'), p: { opacity: 1 }, o: { duration: 1000, sequenceQueue: false } },
		{ e: $('#logotype'), p: 'transition.slideDownIn' },
		{ e: $('.logobird'), p: 'transition.slideLeftIn', o: { stagger: 250 } },
		{ e: $('.main-intro .section__subtitle'), p: 'transition.slideDownIn', o: { stagger: 250 } }
		
	];

	console.log(Modernizr);
	console.log(Modernizr.mobile);
	console.log(Modernizr.safari);

	// if mobile or safari, just show logo and map otherwise play long animation

	if (Modernizr.safari || Modernizr.mobile) {

	} else {
		$.Velocity.RunSequence(introSequence);
	}

	

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

	if (!Modernizr.mobile) {

		$('.crowdspot-features__list__item').each(function(index, el) {
			// check that element has an image
			if ($(this).data('image')) {
				imagesToPreload.push($(this).data('image'));
			}
		});

	}

	


	// waypoints

	var waypoint = new Waypoint({
		element: $('.main-intro'),
		handler: function(direction) {
			if (direction === 'down') {
				// $('.site-header__logo').velocity({'opacity': 1});
				$('.site-header').velocity('transition.slideDownIn');
			} else {
				// $('.site-header__logo').velocity({'opacity': 0});
				$('.site-header').velocity('transition.slideUpOut');
			}
		},
		offset: '-5%'
	});

	

	$(window).resize(function(event) {
		Waypoint.refreshAll();
	});


	// mailchimp-form for ajax mailchimp forms

	$('.mailchimp-form').ajaxChimp({
		url: 'http://crowdspot.us6.list-manage.com/subscribe/post?u=ae2b8a47813dc8ad90be25a63&id=bc41f1dce5'
	});

	
	// fitvids for responsive video embeds

	// Target your .container, .wrapper, .post, etc.
	$("body").fitVids();


	// Features

	$('.crowdspot-features__list .crowdspot-features__list__item.active').addClass('active').find('.crowdspot-features__list__item__text__expandable').velocity('slideDown');

	$('.crowdspot-features__list__item').on('click', function(event) {

		if (!$(this).hasClass('active')) {
			showFeatureItem($(this));
		}

	});

	

	function showFeatureItem(item) {

		// console.log(item);

		// console.log(item.parents('.crowdspot-features-row'));

		var feature_section = item.parents('.crowdspot-features-row');

		var features_images = feature_section.find('.crowdspot-features__image img');
		var features_videos = feature_section.find('.crowdspot-features__video');

		// get states of feature image and video

		var features_images_state = features_images.css('display');
		var features_video_state = features_videos.css('display');

		// change the sliding elements in the list

		feature_section.find('.crowdspot-features__list__item.active .crowdspot-features__list__item__text__expandable').velocity('slideUp', { queue: false });
		feature_section.find('.crowdspot-features__list__item.active').removeClass('active');
		item.addClass('active').find('.crowdspot-features__list__item__text__expandable').velocity('slideDown', { queue: false });

		// item data

		var feature_image = item.data('image');
		var feature_video = item.data('video');
		var feature_video_poster = item.data('video-poster');

		function playVideo() {

			feature_section.find('.crowdspot-features__video video').data('source', feature_video);
			feature_section.find('.crowdspot-features__video video').data('poster', feature_video_poster);

			feature_section.find('.crowdspot-features__video video').attr('poster', feature_section.find('.crowdspot-features__video video').data('poster'));
			
			feature_section.find('.crowdspot-features__video video').attr('src', feature_section.find('.crowdspot-features__video video').data('source'));

			feature_section.find('.crowdspot-features__video video')[0].load();
			feature_section.find('.crowdspot-features__video video')[0].play();

		}
		
		// if this is an image item

		if (feature_image) {

			// check if a video element is currently displayed. If it is, hide it first

			if ( features_video_state === 'block' || features_video_state === 'inline' ) {

				features_videos.velocity('fadeOut', { duration: 200, complete: function() {

					features_images.attr('src', feature_image);

					features_images.velocity('fadeIn', { duration: 200 });

				} });

			} else {

				features_images.velocity('fadeOut', { duration: 200, complete: function() {

					features_images.attr('src', feature_image);

					features_images.velocity('fadeIn', { duration: 200 });

				}});
			}

		// of it it's a video element is currently displayed. If it is, hide it first
		
		} else if (feature_video) {

			// check if an image 

			if ( features_images_state === 'block' || features_images_state === 'inline' ) {

				feature_section.find('.crowdspot-features__images img').velocity('fadeOut', { duration: 200, complete: function() {

					playVideo();

					feature_section.find('.crowdspot-features__video').velocity('fadeIn', { duration: 200 });

				}});

			} else {

				feature_section.find('.crowdspot-features__video').velocity('fadeOut', { duration: 200, complete: function() {

					playVideo();

					feature_section.find('.crowdspot-features__video').velocity('fadeIn', { duration: 200 });

				}});

			}

		}

	}

	// enquire for js media queries

	enquire.register("screen and (max-width:600px)", {

	    // OPTIONAL
	    // If supplied, triggered when a media query matches.
	    match : function() {
	    	console.log('max width 600px');

	    	$('.crowdspot-features__list .crowdspot-features__list__item').find('.crowdspot-features__list__item__text__expandable').velocity('slideDown');

	    	$('.crowdspot-features__list__item').unbind('click');
	    },      
	                                
	    // OPTIONAL
	    // If supplied, triggered when the media query transitions 
	    // *from a matched state to an unmatched state*.
	    unmatch : function() {
	    	console.log('not max width 600px');

	    	if (!Modernizr.mobile) {

	    		$('.crowdspot-features__list__item').each(function(index, el) {
	    			// check that element has an image
	    			if ($(this).data('image')) {
	    				imagesToPreload.push($(this).data('image'));
	    			}
	    		});

	    	}

	    	$('.crowdspot-features__list__item').on('click', function(event) {

	    		if (!$(this).hasClass('active')) {
	    			showFeatureItem($(this));
	    		}

	    	});

	    	$('.crowdspot-features__list .crowdspot-features__list__item').find('.crowdspot-features__list__item__text__expandable').velocity('slideUp');

	    	$('.crowdspot-features__list .crowdspot-features__list__item.active').find('.crowdspot-features__list__item__text__expandable').velocity('slideDown');

	    	$('.slick-slider--how-it-works').slick({
	    		prevArrow : '<div class="slick-prev"><div class="sprite sprite-slider-arrow-left-dark hide-mobile"></div><div class="sprite sprite-slider-arrow-left-dark show-only-mobile"></div></div>',
	    		nextArrow : '<div class="slick-next"><div class="sprite sprite-slider-arrow-right-dark hide-mobile"></div><div class="sprite sprite-slider-arrow-right-dark show-only-mobile"></div></div>',
	    		slidesToShow: 1,
	    		slidesToScroll: 1,
	    		dots: false,
	    		arrows: true,
	    		fade: true,
	    		lazyLoad: 'progressive',
	    		// pauseOnHover: true,
	    		autoplaySpeed: 2500,
	    		autoplay: false,
	    		responsive: [
	    		  {
	    		  	breakpoint: 1000,
	    		  	settings: {
	    		  		arrows: false
	    		  	}
	    		  },
	    		  {
	    		  	breakpoint: 600,
	    		  	settings: 'unslick'
	    		  }
	    		]
	    	});
	    },    
	    
	    // OPTIONAL
	    // If supplied, triggered once, when the handler is registered.
	    setup : function() {

	    },    
	                                
	    // OPTIONAL, defaults to false
	    // If set to true, defers execution of the setup function 
	    // until the first time the media query is matched
	    // deferSetup : true,
	                                
	    // OPTIONAL
	    // If supplied, triggered when handler is unregistered. 
	    // Place cleanup code here
	    destroy : function() {}
	      
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



	// slick slider

	$('.slick-slider--testimonial').slick({
		prevArrow : '<div class="slick-prev"><div class="sprite sprite-slider-arrow-left-dark hide-mobile"></div><div class="sprite sprite-slider-arrow-left-dark show-only-mobile"></div></div>',
		nextArrow : '<div class="slick-next"><div class="sprite sprite-slider-arrow-right-dark hide-mobile"></div><div class="sprite sprite-slider-arrow-right-dark show-only-mobile"></div></div>',
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		fade: true,
		// pauseOnHover: true,
		autoplaySpeed: 4500,
		autoplay: true,
		responsive: [
		  {
		  	breakpoint: 1000,
		  	settings: {
		  		arrows: false
		  	}
		  }
		]
	});

	$('.slick-slider--how-it-works').slick({
		prevArrow : '<div class="slick-prev"><div class="sprite sprite-slider-arrow-left-dark hide-mobile"></div><div class="sprite sprite-slider-arrow-left-dark show-only-mobile"></div></div>',
		nextArrow : '<div class="slick-next"><div class="sprite sprite-slider-arrow-right-dark hide-mobile"></div><div class="sprite sprite-slider-arrow-right-dark show-only-mobile"></div></div>',
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		fade: true,
		lazyLoad: 'progressive',
		// pauseOnHover: true,
		autoplaySpeed: 2500,
		autoplay: false,
		responsive: [
		  {
		  	breakpoint: 1000,
		  	settings: {
		  		arrows: false
		  	}
		  },
		  {
		  	breakpoint: 600,
		  	settings: 'unslick'
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


	// pace

	Pace.on('done', function() {

		// projects

		$('.slick-slider--projects').slick({
			prevArrow : '<div class="slick-prev"><div class="sprite sprite-slider-arrow-left-dark hide-mobile"></div><div class="sprite sprite-slider-arrow-left-dark show-only-mobile"></div></div>',
			nextArrow : '<div class="slick-next"><div class="sprite sprite-slider-arrow-right-dark hide-mobile"></div><div class="sprite sprite-slider-arrow-right-dark show-only-mobile"></div></div>',
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: false,
			arrows: false,
			fade: true,
			// pauseOnHover: true,
			autoplaySpeed: 2500,
			autoplay: false,
			responsive: [
			  {
			  	breakpoint: 1070,
			  	settings: {
			  		arrows: false
			  	}
			  }
			]
		});

		$('.slick-slider--project-sub-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: false,
			arrows: false,
			fade: true,
			lazyLoad: 'progressive',
			autoplaySpeed: 2500,
			autoplay: true,
		});

		$('.slick-slider--projects').on('afterChange', function(event, slick, currentSlide, nextSlide) {
			
			if($(slick.$slider.context).hasClass('slick-slider--projects')) {

				$('.projects-tab').removeClass('active');
				$('.projects-tab').eq(currentSlide).addClass('active');

				$('.slick-slider--project-sub-slider').slick('slickPause');
				$('.slick-slider--project-sub-slider').slick('slickGoTo', 0);
				$('.slick-slider--project-sub-slider').slick('slickPlay');

			}
			
		});

		$('.projects-tab').on('click', function(event) {

			$('.projects-tab').removeClass('active');
			$('.projects-tab').eq($(this).index()).addClass('active');
			$('.slick-slider--projects').slick('slickGoTo', $(this).index());
			$('.slick-slider--project-sub-slider').slick('slickPause');
			$('.slick-slider--project-sub-slider').slick('slickGoTo', 0);
			$('.slick-slider--project-sub-slider').slick('slickPlay');

		});

		preloadImages(imagesToPreload);

	});

	// ======================================
	// Helper functions
	// ======================================
	// Get section or article by href
	function getRelatedContent(el){
		return $($(el).attr('href'));
	}
	// Get link by section or article id
	function getRelatedNavigation(el){
		return $('nav a[href=#'+$(el).attr('id')+']');
	}

	var sectionsWaypointsEnter = $('.section')
		.waypoint(function(direction) {
			// Highlight element when related content
			// is 10% percent from the bottom... 
			// remove if below
			$('.site-header__menu-items__menu-item a').removeClass('current-section-in-view')
			$('.site-header__menu-items__menu-item a[href=#'+ this.element.id +']').addClass('current-section-in-view');
		}, {
			offset: '100px' // 
		})

	// var sectionsWaypointsExit = $('.section')
	// 	.waypoint(function(direction) {
	// 		// Highlight element when bottom of related content
	// 		// is 100px from the top - remove if less
	// 		// TODO - make function for this
	// 		console.log(this.element.id);
	// 		$('.site-header__menu-items__menu-item a[href=#'+ this.element.id +']').removeClass('current-section-in-view');
	// 	}, {
	// 		offset: '900%'
	// 	});


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
	  $('body').removeClass('modal-open');
	  // $(this).parent('.modal').addClass('hidden');
	  $(this).parents('.modal').velocity("fadeOut", { duration: 400 });
	});

	$('[data-open-modal]').on('click', function(event) {
	  event.preventDefault();
	  $('body').addClass('modal-open');
	  var modal_to_open = $(this).data('open-modal');
	  console.log(modal_to_open);
	  // $('[data-modal='+modal_to_open+']').removeClass('hidden');
	  $('[data-modal='+modal_to_open+']').velocity("fadeIn", { duration: 400 });
	});


	// // page transitions

	// $('a').not('[data-open-modal], [data-accept-drinking-age], .popup, a[href^="mailto:"], a[href^="tel:"], .home-splash-button').on('click', function(event) {
	//   deleteCookie('social_modal_popup_mouseleave');
	//   console.log($(this).attr('data-open-modal'));
	//   if (!$(this).attr('target')) {
	//     event.preventDefault();
	//     newLocation = $(this).attr("href");
	//     console.log('change page!');
	//     $('body').removeClass('pace-done');
	//     setTimeout(function() {
	//       window.location = newLocation;
	//     }, 1000);
	//   }
	// });


	// // Nav menu transitions

	// $('.main-navigation .menu-item').on('click', function(event) {
	//   $('.main-navigation .menu-item').removeClass('current-menu-item');
	//   $(this).addClass('current-menu-item');
	// });

	// Nav menu scrolling

	// $('.site-header-scroller').on('click', function(event) {
	// 	event.preventDefault();
	// 	console.log($(this));
	// });

	$('a[href*=#]:not([href=#])').click(function() {
	  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	    
	    var header_menu_height = $('#site-nav').height() - $('.site-nav .navbar-collapse').height();

	    var target = $(this.hash);
	    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	    if (target.length) {

	    	// remove mobile menu class

		    hideMobileMenu();
	      
	      // $('.site-nav .navbar-collapse').collapse('hide');

	      // console.log(target);
	      target.velocity('scroll', { duration: 1500, easing: [ 120, 20 ], offset: -50 });

	      // $('html,body').animate({
	      //   scrollTop: target.offset().top - header_menu_height
	      // }, 1000);
	      return false;
	    }
	  }
	});



	// forms

	$('form').submit(function(event) {
		console.log('form submitted');
	})




});