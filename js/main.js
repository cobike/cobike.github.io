$('a.nav-link').on('click', function(){
  var scrollTo = $(this).attr('data-scrollTo');

  $('body, html').animate({

    "scrollTop": $('#'+scrollTo).offset().top
  }, 1000 );
  return false;

});

var html, body, scrollTopBtn;

window.onload=function(){
  html=document.documentElement;
  body=document.body;
};

window.onscroll=controlScrollTopBtn;

function controlScrollTopBtn(){
  var windowInnerHeightX2=2*window.innerHeight;
  if(body.scrollTop > windowInnerHeightX2 ||
    html.scrollTop > windowInnerHeightX2){
      scrollTopBtn.classList.add("show");
  }
  else{
    scrollTopBtn.classList.remove("show");
  }
}
/*
$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  var showScrollButton = 700;

  if (wScroll > showScrollButton){
    $('#top').fadeIn();
  } else {
    $('#top').fadeOut();
  }
});

$('body').append('<a id="top" href="#">Revenir en haut</a>');

$('#top').css({
  "bottom" : "200px",
  "right" : "20px",
  "position": "fixed",
  "cursor" : "pointer",
  "z-index" : "11",
  "display" : "none",
  "border-radius" : "25%",
  "background-color" :  "$cyan",
  "padding" : "20px 40px",
  "color" : "white"
});

$('#top').click(function(){
  $('body,html').animate({

    scrollTop: 0
  }, 2000 );

  return false;
});
*/
