var calls = 0;
var i = 0;
var txt = "";
$( document ).ready(function() {
    console.log( "ready!" );
    txt = $('#team').text(); 
    $( "#team" ).text("");
    console.log($('#goal').text());
    $(window).scroll(function() {
        var hT = $('#team').offset().top,
            hH = $('#team').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
           
        if (wS -200 > (hT+hH-wH) && calls < 1){
            typeWriter();
            calls ++;
        }
     });
});

 /* The text */
var speed = 40; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
      console.log(i);
      document.getElementById("team").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}