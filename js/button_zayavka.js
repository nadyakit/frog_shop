$(document).ready(function(){
  $('.button_zayavka').click(
      function(){
          $('.z_ready').css('visibility', 'visible');
  })
});

$(document).ready(function(){
  $('.button_zayavka').click(
    function(){
      $('.button_zayavka').css('animation-play-state','running')
    }
  )
});
