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

