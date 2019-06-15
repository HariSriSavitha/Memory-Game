"use strict";
var x = 0; //x holds the number of stars player received at the end of game
var myvar; //myvar holds the value of setInterval() and is passed to clearInterval()
var starElem = [];
var tempFirstClick = [];
var minutes = 0;
var seconds = 0;
var cnt = 0;
var clickedElem = [];
var tempTimer = [];

//list that holds all the cards
var myCards = document.querySelectorAll(".card");
var cardElem = [...myCards];

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

//array containing stars
var starElem = [...document.querySelectorAll(".fa-star")];

var deck = document.querySelector(".deck");
var cardsShuffel = shuffle(cardElem);
for (var i = 0; i < cardsShuffel.length; i++) {
  [].forEach.call(cardsShuffel, function(item) {
    deck.appendChild(item);
  });
}

//adding event listener for each card
cardElem.forEach((item) => {
  item.addEventListener("click", function() {
    tempFirstClick.push(item);
    if (tempFirstClick.length == 1)
      myvar = setInterval(() => {
        timer();
      }, 1000);
    showCard(item);
  })
})

//checks whether the two cards selected by the player are matched or not
function matchCard() {
  if (clickedElem.length == 2) {
    moveCnt();
    setTimeout(function() {

      if (clickedElem[0].children[0].className == clickedElem[1].children[0].className) {
        clickedElem[0].className = ("card match");
        tempTimer.push(clickedElem[0]);
        clickedElem[1].className = ("card match");
        tempTimer.push(clickedElem[1]);

        if (tempTimer.length == 16)
          stopTimer_popUp();
      } else {
        clickedElem[0].classList.remove("open", "show", "disable");
        clickedElem[1].classList.remove("open", "show", "disable");
      }
      clickedElem = [];
    }, 200);
  }
}

//displays the matched cards
function showCard(item) {
  clickedElem.push(item);
  item.classList.add("open", "show", "disable");
  matchCard();
}

//game will restart
function reset() {
  window.location.reload();
}

//calcultes the number of moves
function moveCnt() {
  cnt += 1;
  document.querySelector('.moves').innerHTML = cnt;
  starRating();
}

//functionality of timer
function timer() {
  seconds += 1;
  document.querySelector('.seconds').innerHTML = seconds;
  if (seconds == 60) {
    minutes += 1;
    seconds = 0;
  }
  document.querySelector('.minutes').innerHTML = minutes;
}

//stops the timer and displays the final result
//this will be called when all the cards are opened
function stopTimer_popUp() {
  clearInterval(myvar);
  swal({
      title: "Congratulations!!!...\n" + displayRating() + " 🌟 rating" + "\n Time:" + minutes + ":" + seconds + "\n Moves:" + cnt,
      confirmButtonText: "\n try again??"
    },
    function() {
      location.reload();
    }
  );
}

//modifies the stars according to the player's performence
function starRating() {
  if (cnt >= 12)
    starElem[2].classList.add("fa-star-o");
  if ( cnt >= 22)
    starElem[1].classList.add("fa-star-o");
}

//returns the number of stars achieved by the player
function displayRating() {
  if (cnt < 12)
    x = 3;
  if (cnt >= 12 && cnt < 22)
    x = 2;
  if (cnt >= 22)
    x = 1;
  return x;
}
