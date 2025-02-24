"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-01

      Project to present an online quiz with a countdown clock
      Author: Leah Thames
      Date: February 23, 2025

      Filename: project05-01.js
*/

// Constants to set the time given for the quiz in seconds
// and the correct answers to each quiz question

  function startQuiz() {
alert("The quiz will begin now. You will have 20 seconds to complete the quiz.");
//set class attribute of the showQuiz and repeat the countdown function every one second


//set the timeLeft variable to the quizTime variable
timeLeft = quizTime;
//set the timeID to the setInterval function
timeID = setInterval(countdown, 1000);
//set the class attribute of the overlay to "hidden"
overlay.className = "hidden";



  }


//set the timeID to the setInterval function



const quizTime = 20;
const correctAnswers = ["10", "4", "-6", "5", "-7"];
let timeID;

// Elements in the quiz page
let startQuiz = document.getElementById("startquiz");
let quizClock = document.getElementById("quizclock");
let overlay = document.getElementById("overlay");
let questionList = document.querySelectorAll(".question");



// Initialize the quiz time
quizClock.value = quizTime;
let timeLeft = quizTime;

// Declare the ID for timed commands
// and the node list for questions





















/*------------- Function to check the student answers ----------------*/
function checkAnswers() {
   let correctCount = 0;

   for (let i = 0; i < questionList.length; i++) {
      if (questionList[i].value === correctAnswers[i]) {
         correctCount++;
         questionList[i].className = "";
      } else {
         questionList[i].className = "wronganswer";
      }
   }
   return correctCount;
}
