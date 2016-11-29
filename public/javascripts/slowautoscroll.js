/* Slow Auto Scroll - Javascript Plugin Settings */
$.fn.slowautoscroll = function(options) {

  var scrollAmount = document.body['clientHeight'];

  // function to animate speed
  function autoScroll(speed) {
    $('body,html').animate({scrollTop: scrollAmount}, speed);
  }

  function stopScroll() {
    $('body,html').stop();
  }
  // default speed settings, edit these to set your own speeds!
  var settings = {
    slowSpeed: 75000,
    mediumSpeed: 40000, 
    fastSpeed: 20000
  };
  // make user amounts happen 
  $.extend(settings, options);
  console.log(settings);

  // scroll speeds made to work
  // slow speed (turtle)
  $('.slow').on('click', function(){
    autoScroll(settings.slowSpeed);
    $('.scroll').text('Stop Scrolling!');
    $('.speeds').toggle();
  });
  // medium speed (rabbit)
  $('.med').on('click', function(){
    autoScroll(settings.mediumSpeed);
    $('.scroll').text('Stop Scrolling!');
    $('.speeds').toggle();
  });
  // fast speed (cheetah)
  $('.fast').on('click', function(){
    autoScroll(settings.fastSpeed);
    $('.scroll').text('Stop Scrolling!');
    $('.speeds').toggle();
  });  
  // stops whichever speed was picked
  $('.scroll').on('click', function(){
    stopScroll();
    $('.scroll').text('Speed');
    $('.speeds').toggle();
  });

  return this;
};

$(function(){
  $('body,html').slowautoscroll({
  });
});