// JavaScript source code
$(document).ready(function () {

var windowwidth = $(window).outerWidth();
console.log(windowwidth);
var windowheight = $(window).outerHeight();
console.log(windowheight);

 $('.image1').click(function() {
    $('.image1').css('display', 'none');
    var numberleft = Math.floor(Math.random() * (windowwidth - 200));
    var numbertop = Math.floor(Math.random() * (windowheight - 200));
    $('.image2').css('display', 'block');
    $('.image2').css('top', numbertop);
    $('.image2').css('left', numberleft);

 });

 $('.image2').click(function () {
     $('.image2').css('display', 'none');
     var numberleft = Math.floor(Math.random() * (windowwidth - 200));
     var numbertop = Math.floor(Math.random() * (windowheight - 200));
     $('.image3').css('display', 'block');
     $('.image3').css('top', numbertop);
     $('.image3').css('left', numberleft);
 });

 $('.image3').click(function () {
     $('.image3').css('display', 'none');
     var numberleft = Math.floor(Math.random() * (windowwidth - 200));
     var numbertop = Math.floor(Math.random() * (windowheight - 200));
     $('.image4').css('display', 'block');
     $('.image4').css('top', numbertop);
     $('.image4').css('left', numberleft);
 });

 $('.image4').click(function () {
     $('.image4').css('display', 'none');
     var numberleft = Math.floor(Math.random() * (windowwidth - 200));
     var numbertop = Math.floor(Math.random() * (windowheight - 200));
     $('.image5').css('display', 'block');
     $('.image5').css('top', numbertop);
     $('.image5').css('left', numberleft);
 });

 $('.image5').click(function () {
     $('.image5').css('display', 'none');
     var numberleft = Math.floor(Math.random() * (windowwidth - 200));
     var numbertop = Math.floor(Math.random() * (windowheight - 200));
     $('.image6').css('display', 'block');
 });

});
