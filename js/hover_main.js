// $(document).ready(function(){
//   $('.events_first').hover(
//       function(){
//           $('.h3_otstup').css('color','#FF3F3D');
//       }
//   )
// });


$(document).ready(function() {
  $('.events_first').hover(
    function mouseOver() {
       document.getElementByClass('.h3_otstup').style.color = '#FF3F3D';
       console.log("In");
     },

     function mouseOut() {
       document.getElementByClass('.h3_otstup').style.color = '#602D91';
       console.log("Out");
     }
  )
});
