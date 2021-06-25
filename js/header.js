$(document).ready(function() {
  $(document).on('scroll', function() {
    if ($(document).scrollTop() >= 10) {
      $('.logo_picture').css('width', '5vw');
    } else {
      $('.logo_picture').css('width', '');
    }
  })
});

// $(document).ready(function() {
//   window.addEventListener('scroll', function () {
//     let scroll = window.pageYOffset;
//     let banner = document.querySelector('.logo_picture');
//     banner.style.transform = ('translate3d(0,' + (scroll / 100) + '%,0) scale(' + (100 - scroll / 100) / 100 + ')');
//   })
// });
