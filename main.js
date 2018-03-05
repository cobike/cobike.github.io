$('a.nav-link').on('click', function(){
  var scrollTo = $(this).attr('data-scrollTo');

  $('body, html').animate({

    "scrollTop": $('#'+scrollTo).offset().top
  }, 1000 );
  return false;

});
