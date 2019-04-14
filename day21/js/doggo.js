$(document).ready(function() {
    // run function on initial page load
	//breedGuess();
});

breedGuess();
var guesses = '';
var breedpic = '';

function breedGuess() {
    var breedArray = ["Corgi", "LabradorRetriever", "GermanShepherd", "Weimeraner", "GoldenRetriever", "BorderCollie", "Bulldog", "Foxhound", "Coonhound", "Beagle", "BassetHound", "Greyhound", "Pitbull", "JackRussellTerrier", "CockerSpaniel", "Chihuahua", "Papillon", "Rottweiler", "DobermanPinscher", "ShibaInu", "SiberianHusky", "AlaskanMalamute", "Bloodhound", "Samoyed"];
	var randomNumber = Math.floor(Math.random() * breedArray.length);
	var stripped = breedArray[randomNumber].toLowerCase();
	console.log(breedArray[randomNumber]);
	console.log(stripped);

    //var breedpic = document.getElementById('imgbox').src = "../images/" + breedArray[randomNumber] + ".jpg";

    //document.getElementById("imgbox").src = "images/" + breedArray[randomNumber] + ".jpg";

    //$('imgbox').css('background-image', 'images/' + breedArray[randomNumber] + '.jpg');

	breedpic = "images/" + stripped + ".jpg";

	$("imgbox").attr('src', 'breedpic');
	
	$('#submit').click(function() {
		var input = $('input').val();
		var guess = input.toLowerCase();
		var guess = $('input').val();
		guesses += guess + ' ';
		$('.guesses p').text(guesses);
		console.log(guess);
		if (guess == stripped || guess == breedArray[randomNumber] || guess == "a good dog") {
			$('h1').text(guess + ' is right!');
			$('input').val('');
			$('.button p').text('Play Again?');
			$('#submit').click(function() {
				location.reload(true);
			});
		} else  {
			$('h1').text(guess + ' is wrong, try again.');
			$('input').val('');
			$('.button p').text('Guess');
			$('#submit').click(function() {
			    var input = $('input').val();
			    var guess = input.toLowerCase();
			    console.log(guess);
			});
		}
	})
}
