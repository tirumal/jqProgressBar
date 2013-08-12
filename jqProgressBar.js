/*
Type: jQuery Plugin
Author: Tirumal
Website: www.code-tricks.com
Description: Simple jQuery Progress bar
License: MIT License
*/

;(function($){
  $.fn.jqProgressBar = function(options){
    
    //Settings
    var settings = $.extend({
      "initPercent": 0,
      "percent"    : 100,
      "speed"      : 600,
      "showText"   : true,
      "text"       : "&nbsp;%&nbsp;"
    }, options),   
    
    //Get the current width of the selected element    
    currentWidth = this.width();
    
    //main
    return this.each(function(index, value){
      //Define
      var obj = $(this),
      autoWidth = obj.css('width', 'auto').width(),    
      progressBarWidth  = settings.percent * currentWidth / 100;
      
      //Set the initial width, animate and then set the width of the element to progressWidth
      obj.css({
        "width" : settings.initPercent * currentWidth / 100 + "px"
      }).animate({
        width : progressBarWidth    
      }, settings.speed, function(){
        obj.css({
          "width" : progressBarWidth + "px"
        });
        
        //Display innerHTML if the showText is True
        if(settings.showText){
          obj.html(settings.percent + settings.text);
        } 
      }); 
      
      obj.attr("data-progress", settings.percent);
      
      
    });
  };
}(jQuery));
