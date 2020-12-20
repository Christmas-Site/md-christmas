/* Preload */

setTimeout(function () {
  $(".preloader").fadeToggle();
}, 1500);

/* Text Effect */

$(function(){
  $('.repeat').click(function(){
      var classes =  $(this).parent().attr('class');
        $(this).parent().attr('class', 'animate');
        var indicator = $(this);
        setTimeout(function(){ 
          $(indicator).parent().addClass(classes);
        }, 20);
    });
});
