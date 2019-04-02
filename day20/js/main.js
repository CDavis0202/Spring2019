$(document).ready(function() {
  //$('h1').css('color', 'white');
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
    $('#game-3').css('font-size', '2em');
  });
  $('#number3').mouseleave(function() {
    $('#game-3').css('font-size', '1em');
  });

  $('#game-2').click(function() {
    $('#game-2').toggleClass('brown');
  });

  $('#game-1').click(function() {
    $('#game-1').toggleClass('darkblue');
  });

});
