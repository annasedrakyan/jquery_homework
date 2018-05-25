


$( document ).ready(function() {
  $('h2').html("!!!!");
  $('h3').css('color', 'red');
  


   $('.test').css('color', 'red');
   $('h3.test1').css('color', 'green');
   $('p+p').css('color', 'pink');  //only lalalala3 will be pink

   $('li.www').next('li').css('color', 'blue');
   $('li+li.www').css('color', 'blue');


 		
   $('h2 i').css('color', 'brown');

   $(':header').css('color', 'orange'); //all h2, h3 -headings

   $('h2').not('.test').css('color', 'grey'); //or $('h2:not('.test').css('color', 'grey');

   $(':header').next(':header').css('color', 'purple');

   //$(':header.test + :header.test').css('color', 'yellow');
    $(':header.test').next(':header.test').css('color', 'yellow');
    $(':empty').css('color', '#4286f4');

    
    $('p:first').css('color', 'purple');
    $('p:last').css('color', 'purple');

    $('li:contains("6")').css('color', 'purple');
    $('h2:has(i)').css('color', 'purple');
    

});



