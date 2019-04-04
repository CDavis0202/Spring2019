$(document).ready(function() {
  //$('h1').css('color', 'white');
  $('#listheader').mouseenter(function() {
    $('h2').css('opacity', '1');
  });
  $('#listheader').mouseleave(function() {
    $('h2').css('opacity', '0');
  });


  $('#number5').click(function() {
    $('#game-5').toggleClass('green');
  });
  $('#number5').mouseenter(function() {
    $('#game-5').css('font-size', '2em');
  });
  $('#number5').mouseleave(function() {
    $('#game-5').css('font-size', '1em');
  });

  $('#game-4').click(function() {
    $('#game-4').toggleClass('gold');
  });
  $('#number4').mouseenter(function() {
    $('#number4').css('letter-spacing', '.3em');
  });
  $('#number4').mouseleave(function() {
    $('#number4').css('letter-spacing', '.1em');
  });

  $('#game-3').click(function() {
    $('#game-3').toggleClass('lightblue');
  });
  $('#number3').mouseenter(function() {
    $('#number3').css('border', '10px solid black');
  });
  $('#number3').mouseleave(function() {
    $('#number3').css('border', '0px solid black');
  });
  $('#game-3').click(function() {
    $('#number3').css('border', '10px solid orange');
  });

  $('#game-2').click(function() {
    $('#game-2').toggleClass('brown');
  });
  $('#number2').mouseenter(function() {
    $('#number2').css('border', '5px solid');
    $('#number2').css('border-style', 'solid none');
  });
  $('#number2').mouseleave(function() {
    $('#number2').css('border', '0px solid');
  });


  $('#game-1').click(function() {
    $('#game-1').toggleClass('darkblue');
  });
  $('#number1').mouseenter(function() {
    $('#number1').css('font-weight', 'lighter');
    $('#number1').css('border', '5px solid');
    $('#number1').css('border-style', 'none solid');
  });
  $('#number1').mouseleave(function() {
    $('#number1').css('font-weight', 'bold');
    $('#number1').css('border', '0px solid');
  });

});
