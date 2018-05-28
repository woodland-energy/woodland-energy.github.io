jQuery.noConflict()(function($){
$(window).load(function() {
$('#homeCarousel').carousel()
});
});

jQuery.noConflict()(function($){
$(window).load(function() {
$('#testimonialCarousel').carousel()
});
});

/* ---------- @ Flexslider -----------*/
jQuery.noConflict()(function($){
$(window).load(function() {
$('.portfolio-slider-span .flexslider').flexslider({
animation: "fade"
});
});
});

jQuery.noConflict()(function($){
$(window).load(function() {
$('.post-featured-box .flexslider').flexslider({
animation: "slide"
});
});
});

/* ---------- @ Isotope -----------*/
jQuery.noConflict()(function($){
$(function(){
var $container = $('#portfolio-container');
$container.isotope({
itemSelector : '.photo'
});
var $optionSets = $('#portfolio-options .option-set'),
$optionLinks = $optionSets.find('a');
$optionLinks.click(function(){
var $this = $(this);
// don't proceed if already selected
if ( $this.hasClass('selected') ) {
return false;
}
var $optionSet = $this.parents('.option-set');
$optionSet.find('.selected').removeClass('selected');
$this.addClass('selected');
// make option object dynamically, i.e. { filter: '.my-filter-class' }
var options = {},
key = $optionSet.attr('data-option-key'),
value = $this.attr('data-option-value');
// parse 'false' as false boolean
value = value === 'false' ? false : value;
options[ key ] = value;
if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
// changes in layout modes need extra logic
changeLayoutMode( $this, options )
} else {
// otherwise, apply new options
$container.isotope( options );
}
return false;
});
});
});

/* ---------- @ Prettyphoto -----------*/
jQuery.noConflict()(function($){
jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({hook: 'data-rel'});
jQuery('a[data-rel]').each(function() {
jQuery(this).attr('rel', $(this).attr('data-rel')).removeAttr('data-rel');
});
});

/* ---------- @ Scroll to Top -----------*/
jQuery.noConflict()(function($){
$('div.scroll-top a').click(function(){
$('html,body').animate({scrollTop:0},500);
return false;
});
});

/* ---------- @ Scroll to Section -----------*/
jQuery.noConflict()(function($){
$('.nav a').click(function(e){
e.preventDefault();
var des = $(this).attr('href');
goToSectionID(des);
})
function goToSectionID(des){
var os = (history.pushState)?0:0;
os = (jQuery(window).width()>800)?os:0;
var pos = (jQuery(des).length>0 )?jQuery(des).offset().top-os:0;
onanimate = true;
jQuery('html,body').animate({scrollTop:pos},1000,function(){
if(history.pushState){
history.pushState(null,null,des);
} else {		
window.location.hash = des;
jQuery(window).scrollTop(pos);
onanimate=false
}
});
}
});

/* ---------- @ Contact From -----------*/
jQuery.noConflict()(function($){
$(document).ready(function ()
{ 
 $('#submit').formValidator({
    scope: '#form'
  });
  
  $('#post-commentsss').formValidator({
    scope: '#comments-form'
  });
  
  $('#submit,#post-commentsss').click(function() {
        $('input.error-input, textarea.error-input').delay(300).animate({marginLeft:0},100).animate({marginLeft:10},100).animate({marginLeft:0},100).animate({marginLeft:10},100);
    });

  // Form plugin

  var options = {

    beforeSubmit: function() {
      $('.sending').show();

    },
    success: function() {
      $('.sending').hide();
      $('#form').hide();
      $(".mess").show().html('<h5>Thanks !</h5><h5>Your message has been sent.</h5>'); // Change Your message post send
      $('.mess').delay(3000).fadeOut(function() {

        $('#form').clearForm();
        $('#form').delay(3500).show();

      });
    }
  };
  

  $('#form').submit(function() {
    $(this).ajaxSubmit(options);
    return false;
  });
    
});
});
/* ---------- @ Newsletter From -----------*/
jQuery.noConflict()(function($){
$(document).ready(function ()
{ 
  $('#n-submit').formValidator({
    scope: '#newsletter-form'
  });
   
  $('#n-submit').click(function() {
        $('input.error-input, textarea.error-input').delay(300).animate({marginLeft:0},100).animate({marginLeft:10},100).animate({marginLeft:0},100).animate({marginLeft:10},100);
    });

  // Form plugin

  var options = {

    beforeSubmit: function() {
      $('.sending').show();

    }, 
    success: function() {
      $('.sending').hide();
      $('#newsletter-form').hide();
      $(".mess").show().html('<h5>Got it,</h5><h5>you have been added to our email list.</h5>'); // Change Your message post send
      $('.mess').delay(3000).fadeOut(function() {

        $('#newsletter-form').clearForm();
        $('#newsletter-form').delay(3500).show();

      });
    }
  };
  
$('#newsletter-form').submit(function() {
    $(this).ajaxSubmit(options);
    return false;
  });

});


});