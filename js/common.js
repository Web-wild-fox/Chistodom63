// Custom JS
$(document).ready(function() {

	$('.image-popup-vertical-fit').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		fixedContentPos: false,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		},
		callbacks: {
			open: function() {
				 jQuery('body').addClass('noscroll');
			},
			close: function() {
					jQuery('body').removeClass('noscroll');
			}
 		}
	});

});

$(document).ready(function() {
	$('.popup-with-zoom-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in',

		callbacks: {
			open: function() {
				 jQuery('body').addClass('noscroll');
			},
			close: function() {
					jQuery('body').removeClass('noscroll');
			}
 		}
	});

	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});
});
