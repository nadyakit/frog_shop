// $(document).ready(function(){
//   $('.events_first').hover(
//       function(){
//           $('.h3_otstup').css('color','#FF3F3D');
//       }
//   )
// });


// $(document).ready(function() {
//   $('.events_first').hover(
//     function mouseOver() {
//        document.getElementByClass('.h3_otstup').style.color = '#FF3F3D';
//        console.log("In");
//      },
//
//      function mouseOut() {
//        document.getElementByClass('.h3_otstup').style.color = '#602D91';
//        console.log("Out");
//      }
//   )
// });

$(document).ready(function() {
  $('.events_first').hover(function(){
    $('.h3_otstup').css('color', '#FF3F3D');
  }),
  $('.events_first').mouseout(function(){
    $('.h3_otstup').css('color', '#602D91');
  }),
  $('.events_first').hover(function(){
    $('.date').css('color', '#FF3F3D');
  }),
  $('.events_first').mouseout(function(){
    $('.date').css('color', '#602D91');
  })
});

$(document).ready(function() {
  $('.events_second').hover(function(){
    $('.h3_otstup_2').css('color', '#FF3F3D');
  }),
  $('.events_second').mouseout(function(){
    $('.h3_otstup_2').css('color', '#602D91');
  }),
  $('.events_second').hover(function(){
    $('.date2').css('color', '#FF3F3D');
  }),
  $('.events_second').mouseout(function(){
    $('.date2').css('color', '#602D91');
  })
});

$(document).ready(function() {
  $('.events_third').hover(function(){
    $('.h3_otstup_3').css('color', '#FF3F3D');
  }),
  $('.events_third').mouseout(function(){
    $('.h3_otstup_3').css('color', '#602D91');
  }),
  $('.events_third').hover(function(){
    $('.date3').css('color', '#FF3F3D');
  }),
  $('.events_third').mouseout(function(){
    $('.date3').css('color', '#602D91');
  })
});

$(document).ready(function() {
  $('.events_fourth').hover(function(){
    $('.h3_otstup_4').css('color', '#FF3F3D');
  }),
  $('.events_fourth').mouseout(function(){
    $('.h3_otstup_4').css('color', '#602D91');
  }),
  $('.events_fourth').hover(function(){
    $('.date4').css('color', '#FF3F3D');
  }),
  $('.events_fourth').mouseout(function(){
    $('.date4').css('color', '#602D91');
  })
});

$(document).ready(function() {
  $('.lsc_1').hover(function(){
    $('.h3_otstup_lsc1').css('color', '#FF3F3D');
  }),
  $('.lsc_1').mouseout(function(){
    $('.h3_otstup_lsc1').css('color', '#602D91');
  }),
  $('.lsc_1').hover(function(){
    $('.date_lsc1').css('color', '#FF3F3D');
  }),
  $('.lsc_1').mouseout(function(){
    $('.date_lsc1').css('color', '#602D91');
  })
});

$(document).ready(function() {
  $('.lsc_2').hover(function(){
    $('.h3_otstup_lsc2').css('color', '#FF3F3D');
  }),
  $('.lsc_2').mouseout(function(){
    $('.h3_otstup_lsc2').css('color', '#602D91');
  }),
  $('.lsc_2').hover(function(){
    $('.date_lsc2').css('color', '#FF3F3D');
  }),
  $('.lsc_2').mouseout(function(){
    $('.date_lsc2').css('color', '#602D91');
  })
});

$(document).ready(function() {
  $('.h3_space').hover(function(){
    $('.s_picture').css('filter', 'blur(8px)');
  }),
  $('.h3_space').mouseout(function(){
    $('.s_picture').css('filter', 'blur(0px)');
  })
});
