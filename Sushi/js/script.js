$(document).ready(function () {

	 
	//ripples
	$("#header, .info").ripples({
	  dropRadius: 25,
	  perturbance: 0.6,
	  
	});

	//magnific Popup
	$('.parent-container').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',

  gallery: {
  	enabled: true
  }
  // other options
	});


});

