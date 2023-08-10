$(document).ready(function(e) {  

	$(document).ready(function(){
    	$(".accordion").click(function(){
        	$(this).next().slideToggle();
      	});
    });

	$("#scroll-button").click(function(){
    	$('html, body').animate({
        	scrollTop: $("#home-blurb").offset().top
    	}, 'slow');
	});

	//ACTIVE DROPDOWN COLOUR
	const accordionBtns = document.querySelectorAll(".accordion");
	accordionBtns.forEach(accordionBtn => {
		accordionBtn.addEventListener("click", event => {
			accordionBtn.classList.toggle("active");
		});
	});


	//DARK THEME 
	// Select the button
	const btn = document.querySelector("#btn-toggle");
 
	// Listen for a click on the button
	btn.addEventListener("click", function() {
  	// Then toggle (add/remove) the .dark-theme class to the body
  	document.body.classList.toggle("dark-theme");
	});
/*
	const accordionBtns = document.querySelectorAll(".accordion");
	accordionBtns.forEach(accordionBtn => {
		alert('Assigning event handler 2');
		accordionBtn.addEventListener("click", event => {
			accordionBtn.classList.toggle("active");
		}
	}
	*/

	 // Variable to keep track of the total score.
  	var totalScore = 0;

  	// Provide an answer callback to add points to the score if correct answer selected.
  	var answerCallback = function(currentQuestion, selected, question) {
    // Check if the user got the answer correct.
    if (selected === question.correctIndex) {
      // Add the points as specified in the question parameters, or default to 1.
      totalScore += question.points || 1;
    	}
  	};

 	// Provide a callback to reset the score. Used if the home button is clicked.
 	var resetScore = function() {
    totalScore = 0;
  		};

 	 // Provide a finish callback to display the score.
 	var finishCallback = function() {
    	$('#quiz-results').html('Total Score: ' + totalScore + ' out of 5');
    // Be sure to reset the score.
    totalScore = 0;
 	 };

  	$('#quiz').quiz({
     homeButton: '#quiz-home',
     // Specify answer callback.
     answerCallback: answerCallback,
     // Specify finish callback.
     finishCallback: finishCallback,

     resultsScreen: '#quiz-results-screen',

     // Specify callback to reset score.
     homeCallback: resetScore,
     questions: [

      {
        'q': 'This is question 1.',
        'options': [
          'True',
          'False'
        ],
        'correctIndex': 0,
        'correctResponse': 'Correct',
        'incorrectResponse': 'Incorrect',
        'points': 1 // Set point value, we check for this in the answer callback.
      },
      {
        'q': 'This is question 2.',
        'options': [
          'True',
          'False'
        ],
        'correctIndex': 1,
        'correctResponse': 'Correct!',
        'incorrectResponse': 'Incorrect',
      },
      {
        'q': 'This is question 3.',
        'options': [
          'True',
          'False'
        ],
        'correctIndex': 0,
        'correctResponse': 'Correct!',
        'incorrectResponse': 'Incorrect'
      },
      {
        'q': 'This is question 4.',
        'options': [
          'True',
          'False'
        ],
        'correctIndex': 1,
        'correctResponse': 'Correct!',
        'incorrectResponse': 'Incorrect',
      },
      {
        'q': 'This is question 5.',
        'options': [
          'True',
          'False'
        ],
        'correctIndex': 0,
        'correctResponse': 'Correct!',
        'incorrectResponse': 'Incorrect'
      }
    ]
  });
});


//DARK THEME 
// Select the button
//const btn = document.querySelector("#btn-toggle");
 
// Listen for a click on the button
//btn.addEventListener("click", function() {
  // Then toggle (add/remove) the .dark-theme class to the body
  //document.body.classList.toggle("dark-theme");
//});


//Connect Slide Button
//DARK THEME
//JQuery Plugin, Flashcards or Quiz? 