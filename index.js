'use strict';
// starting 

let questionNumber = 0;
let score = -1;


//user starts quiz
function startQuiz(){
  $("#js-startbutton").on("click", function(event){
    $('#startpage').hide();
    $('#js-startbutton').hide();
    $('#startquiz').hide();
    $('#container').html(renderQuestion());

  });
}

//user chooses their answer
function userPicksAnswer() {
  $('#container').on('submit', 'form', function (event) {
    event.preventDefault();
     
    let mySelected = $('input:checked');
    let answerCor = mySelected.val();
     let correctAnswer = `${questionList[questionNumber].answer}`;
    if (answerCor === correctAnswer){
      mySelected.closest('input').addClass('.right');
     return  $('#container').html(positiveFeedback());}
    else { 
      mySelected.closest('input').addClass('.wrong');
     return $('#container').html(negativeFeedback());
          
     }
  }
  )};

//next question is rendered
function renderNextQuestion() {
  $('#container').on('click', '#next-button', function (event) {
    event.preventDefault();
    changeQuestionNumber();
    $('#container').html(renderQuestion());

    
  });
}




// Render Questions in DOM and final screen
function renderQuestion(){if (questionNumber < questionList.length){
return `<img  id= 'header-image'src= "https://s3-us-west-1.amazonaws.com/schmitzbucket/sailing-3388184_1920.jpg" style = "width: auto; height: auto; max-width: 250px; max-height: 250px" alt = "boat with wave"><div class="questions">
		<nav class = "qTally" role ="navigation"> Question number: ${questionNumber + 1}/10 Score: ${score}/10</nav>
		<section class = "Question-insert"> ${questionList[questionNumber].question}</section>
    <div id = 'deface'>
		<form id= 'q-face' class='daface' action="/questions" method = "post">
			<fieldset>
          <label class="option">
    			<input type="radio" name="answer" role="button" value="${questionList[questionNumber].choice1}" required/>
    			${questionList[questionNumber].choice1}</label>
          <label class="option">
    			<input type="radio" name="answer" role="button" value="${questionList[questionNumber].choice2}" required/>
    			${questionList[questionNumber].choice2}</label>
          <label class="option">
    			<input type="radio" name="answer" role="button" value="${questionList[questionNumber].choice3}" required/>
    			${questionList[questionNumber].choice3}</label>
          <label class="option">
    			<input type="radio" name="answer" role="button" value="${questionList[questionNumber].choice4}" required/>
    			${questionList[questionNumber].choice4}</label>
    		</fieldset>
      <button id='submit-q'> Submit ARR!</button>
		</form>
    </div>
   
      
    
    </div> 
	</div>`
  }
  else {
  
  return `<img  id= 'final-sc-image'src= "https://s3-us-west-1.amazonaws.com/schmitzbucket/sailing-2542901_1920.jpg" style = "width: auto; height: auto; max-width: 250px; max-height: 250px" alt = "boat at sunset"><Section class= "final-pg">
		<h2> YAAAARRRR! Your final score be: ${score} out of 10 </h2>
		<button id="restart-buttom"> Yee want to try again??</button>
	</Section>`

  }
};

//negative feedback page

function negativeFeedback(){
  return `<div class="questions"><section class = "feedback-wrong" role="main">
		<h2> ARRRR! You be Wrong!</h2>
		<img class="skull" src= "https://s3-us-west-1.amazonaws.com/schmitzbucket/skull-307778_640.png" style= "max-width: 120px; max-height: 120px" alt = 'sad skull'>
    <p> Correct answer is : ${questionList[questionNumber].answer}</p>
		<button id ="next-button"> Next Question Matey</button>
	</section>`


}
//positive feedback page
function positiveFeedback(){
  updateScore ();
  return `<section class = "feedback-correct" role = "main">
		<h2> Ahoy! Correct!</h2>
		<img class= "bird" src = "https://s3-us-west-1.amazonaws.com/schmitzbucket/bird-1297727_640.png" stlye= "max-width: 80px; max-height: 80px" alt = 'happy bird'>
    <p>Correct answer is: ${questionList[questionNumber].answer}</p>
		<button id ="next-button"> Next Question Matey</button>
	</section>`

}


//updates question number on top of screen
function changeQuestionNumber () {
 
    questionNumber ++;
}




//when restart button click, function reloads the page
function reloadQuiz(){
  $('#container').on('click', '#restart-buttom',function(event){
    //Reloading the page restarts the quiz
   location.reload();
  });
}



//updates score for user on top of screen

function updateScore () {
  score ++;
   };

//all my call back functions
$( document ).ready(function() {

  startQuiz()
  renderNextQuestion()
  userPicksAnswer()
  renderQuestion()
  positiveFeedback()
  negativeFeedback()
  reloadQuiz()
}
)