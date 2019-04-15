// JavaScript source code
$(document).ready(function () {

 $('.image1').click(function() {
    $('.image1').css('opacity', '0');
    $('.image2').css('opacity', '1');
 });

 $('.image2').click(function () {
     $('.image2').css('opacity', '0');
     $('.image3').css('opacity', '1');
 });

 $('.image3').click(function () {
     $('.image3').css('opacity', '0');
     $('.image4').css('opacity', '1');
 });

 $('.image4').click(function () {
     $('.image4').css('opacity', '0');
     $('.image5').css('opacity', '1');
 });

 $('.image5').click(function () {
     $('.image5').css('opacity', '0');
     $('.image6').css('opacity', '1');
 });

 $('.test').click(function () {
     $('.test').css('background-color', 'blue');
 });

});