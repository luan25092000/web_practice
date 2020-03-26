$(document).ready(function(){
  //modal
  var banner=setInterval(function(){
      $('.banner').addClass('show');
      $('.box').addClass('blur');
      clearInterval(banner);
  },500);
  $('.close').click(function(){
      $('.banner').removeClass('show');
      $('.box').removeClass('blur');
  });
  //scrollTop
  $(window).scroll(function(){
    if($(this).scrollTop()>1000){
      $('#top-button').fadeIn();
    }
    else{
      $('#top-button').fadeOut();
    }
  });
  $('#top-button').click(function(){
    $('html,body').animate({scrollTop:0},800);
  });
});