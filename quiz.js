// Shrek Quiz by Xander

// Variables
let quest1El = document.getElementById("question1");
let quest2El = document.getElementById("question2");
let quest3El = document.getElementById("question3");
let quest4El = document.getElementById("question4");
let quest5El = document.getElementById("question5");
let span1El = document.getElementById("span1");
let span2El = document.getElementById("span2");
let span3El = document.getElementById("span3");
let span4El = document.getElementById("span4");
let span5El = document.getElementById("span5");
let scoreEl = document.getElementById("score");
let encourageEl = document.getElementById("encouragement");

// Event Listeners
document.getElementById("btn").addEventListener("click", generateResult);

// Event Function
function generateResult() {

    let question1 = quest1El.value.toLowerCase();
    let question2 = quest2El.value.toLowerCase();
    let question3 = quest3El.value.toLowerCase();
    let question4 = quest4El.value.toLowerCase();
    let question5 = quest5El.value.toLowerCase();
    let correctNum = 0;

    // Collecting Answers and Updating Inputs
    if (question1 === "green") {
        correctNum++;
        quest1El.style.borderColor = "limeGreen";
        span1El.innerHTML = "Correct";
        span1El.style.color = "limeGreen"
    } else {
        quest1El.style.borderColor = "red";
        span1El.innerHTML = "Incorrect";
        span1El.style.color = "red"
    }
    if (question2 === "prince charming") {
        correctNum++;
        quest2El.style.borderColor = "limeGreen";
        span2El.innerHTML = "Correct";
        span2El.style.color = "limeGreen"
    } else {
        quest2El.style.borderColor = "red";
        span2El.innerHTML = "Incorrect";
        span2El.style.color = "red";
    }
    if (question3 === "cat" || question3 === "tabby cat") {
        correctNum++;
        quest3El.style.borderColor = "limeGreen";
        span3El.innerHTML = "Correct";
        span3El.style.color = "limeGreen";
    } else {
        quest3El.style.borderColor = "red";
        span3El.innerHTML = "Incorrect";
        span3El.style.color = "red";
    }
    if (question4 === "donkey" || question4 === "puss in boots") {
        correctNum++;
        quest4El.style.borderColor = "limeGreen";
        span4El.innerHTML = "Correct";
        span4El.style.color = "limeGreen";
    } else {
        quest4El.style.borderColor = "red";
        span4El.innerHTML = "Incorrect";
        span4El.style.color = "red";
    }
    if (question5 === "donkey") {
        correctNum++;
        quest5El.style.borderColor = "limeGreen";
        span5El.innerHTML = "Correct";
        span5El.style.color = "limeGreen";
    } else {
        quest5El.style.borderColor = "red";
        span5El.innerHTML = "Incorrect";
        span5El.style.color = "red";

        // Delivering Result
    }
    if (correctNum === 5) {
        scoreEl.innerHTML = "5/5 100%";
        scoreEl.style.fontFamily = "Sans-serif";
        encourageEl.innerHTML = "Impressive!";
    } else if (correctNum === 4) {
        scoreEl.innerHTML = "4/5 80%";
        scoreEl.style.fontFamily = "Sans-serif";
        encourageEl.innerHTML = "Well Done!";
    } else if (correctNum === 3) {
        scoreEl.innerHTML = "3/5 60%";
        scoreEl.style.fontFamily = "Sans-serif";
        encourageEl.innerHTML = " Good Job!";
    } else if (correctNum === 2) {
        scoreEl.innerHTML = "2/5 40%";
        scoreEl.style.fontFamily = "Sans-serif";
        encourageEl.innerHTML = "Shrek can be confusing.";
    } else if (correctNum === 1) {
        scoreEl.innerHTML = "1/5 20%";
        scoreEl.style.fontFamily = "Sans-serif";
        encourageEl.innerHTML = "Maybe you need to watch the movies again.";
    } else if (correctNum === 0) {
        scoreEl.innerHTML = "0/5 0%";
        scoreEl.style.fontFamily = "Sans-serif";
        encourageEl.innerHTML = "Better luck next time!";
    }
}