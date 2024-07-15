

// $(function() {
//     $(window).on('load', function() {
//       $('.preLoader').fadeOut();
//     });
    
    
//      $(window).on('scroll', function() {
//     var scrollMenu = $(this).scrollTop();
//     if (scroll < 1000) {
//        $('.nav').addClass('sticky');
//     } else {
      
//     }
//     });
//   });







$(function() {
  $(window).on('load', function() {
      $('.preLoader').delay(1000).fadeOut();
  });
  
  $(window).on('scroll', function() {
      var scrollMenu = $(this).scrollTop();
      if (scrollMenu > 500) { 
          $('.nav').addClass('sticky');
      } else {
          $('.nav').removeClass('sticky');
      }
  });
});
