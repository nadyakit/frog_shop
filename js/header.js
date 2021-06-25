$(document).ready(function() {
  $(document).on('scroll', function() {
    if ($(document).scrollTop() >= 10) {
      $('.logo_picture').css('width', '5vw');
    } else {
      $('.logo_picture').css('width', '');
    }
  })
});
