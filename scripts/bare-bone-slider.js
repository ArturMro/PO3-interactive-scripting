
console.log('Script file loaded.');

$(document).ready(function(){

  console.log('HTML file loaded and parsed.');
  
  addMyEventListenerSlider()

});

function addMyEventListenerSlider(){

}


(function($, document, undefined) {
  
    $.fn.BBSlider = function(options) {
      var settings = $.extend({
          slideClass: "bb-slide",
          activeClass: "bb-active",
          autoPlay: false,
          slideDuration: 3000
        },
        options
      );

      var slideSelector = "." + settings.slideClass;
      var activeClass = settings.activeClass;
      var autoPlay = settings.autoPlay;
      var slideDuration = settings.slideDuration;
      var nextSlide = 0;
  
      var $slides = this.find(slideSelector);
      var slideCount = $slides.length;
      var timeOutId = null;
  
      function moveTo(i) {
        
        if (timeOutId) {
          clearTimeout(timeOutId);
        }
        
        $slides.each(function(slideIndex, slide) {
          $(this).removeClass(activeClass);
          if (i === slideIndex) {
            $(this).addClass(activeClass);
          }
        });
  
  
        if (autoPlay) {
          var nextSlide = (i + 1) % slideCount;
          timeOutId = setTimeout(function() {
            moveTo(nextSlide);
          }, slideDuration);
        }
        
      }
  
      // Initializing
      moveTo(0);
      
    };
    
  })(window.jQuery, window.document);