"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-01

      Project to validate a form used for setting up a new account
      Author: Leah Thames
      Date:   March 9, 2025

      Filename: project07-01.js
*/

let signupForm = document.getElementById("signup");

signupForm.addEventListener("submit", function(e) {
    e.preventDefault();
    let regex = /^[A-Za-z0-9]+$/;
    let regex2 = /^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z0-9]+$/;
    let regex3 = /^[A-Za-z0-9]+$/;

    if (regex.test(password) == false) {
        feedback.innerHTML = "Password must include an uppercase letter.";
    }
    else if (regex2.test(password) == false) {
        feedback.innerHTML = "Password must include a number.";

    }
    else if (regex3.test(pwd) == false) {
        feedback.innerHTML = "Password must include one of the following: !$#%";
    }

    signupForm.submit();
    let username = document.getElementById("username").value;
    let pwd = document.getElementById("pwd").value;
    let feedback = document.getElementById("feedback");
});

// Function to validate the form
function validateForm() {
    let username = document.getElementById("username").value;
    let pwd = document.getElementById("pwd").value;
    let feedback = document.getElementById("feedback");

    let regex = /^[A-Za-z0-9]+$/;
    let regex2 = /^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z0-9]+$/;
    let regex3 = /^[A-Za-z0-9]+$/;

    if (regex.test(password) == false) {
        feedback.innerHTML = "Password must include an uppercase letter.";
    }
    else if (regex2.test(password) == false) {
        feedback.innerHTML = "Password must include a number.";

    }
    else if (regex3.test(pwd) == false) {
        feedback.innerHTML = "Password must include one of the following: !$#%";
    }
}
