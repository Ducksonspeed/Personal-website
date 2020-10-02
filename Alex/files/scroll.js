$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').stop().animate({
          scrollTop: target.offset().top
        }, 700);
        return false;
      }
    }
  });
});
// credit to http://www.learningjquery.com/2007/10/improved-animated-scrolling-script-for-same-page-links/ for making my life easier
// i am forever in debt <3