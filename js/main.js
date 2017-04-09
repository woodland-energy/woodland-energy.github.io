$(document).ready(function() {
	$('#gallery_slide').addClass('hidden').hide();
	
	$('#gallery a').click(function(e) {
		if ($('#gallery_slide').hasClass('hidden')) {
			$('#content_slide').hide('blind', {direction: 'vertical', duration: 400});
			$('#gallery_slide').removeClass('hidden').show('blind', {direction: 'vertical', duration: 400});
		}
		
		$('#gallery_slide p:last').remove();
		$('#large_img').attr('src', $(this).attr('href'));
		
		if ($(this).attr('title') != '') {
			$('#gallery_slide').append('<p id="caption">'+$(this).attr('title')+'</p>');
		}
		
		e.preventDefault();
	});
	
	$('h2 a:first').click(function(e) {
		if ($('#gallery_slide').hasClass('hidden')) return;
		
		$('#gallery_slide').addClass('hidden').hide('blind', {direction: 'vertical', duration: 400});
		$('#content_slide').show('blind', {direction: 'vertical', duration: 400});
		
		e.preventDefault();
	});
});