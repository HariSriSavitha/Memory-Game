# Memory-Game
# Memory Game Project Overview

Memory game is a fun game. It is a simple game to test the player's memory.This game improves the kids IQ.


## Table of Contents

- [Instructions](#instructions)
- [Dependencies](#dependencies)
- [How to download starter Project](#how-to-download-starter-project)
- [How I have built the Memory Game](#how-i-have-built-the-memory-game)
- [How to play a Game](#how-to-play-a-game)
- [Contributing](#contributing)


## Instructions

The starter project has some HTML and CSS styling to display a static version of the Memory Game project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the [Udacity Classroom](https://classroom.udacity.com/me).


##Dependencies

1.[Font Awesome](https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css)
2.[Sweet Alert](https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.min.css)
3.[Google Fonts](https://fonts.googleapis.com/css?family=Coda)

# How to download starter Project

We can clone the starter code from Git-Hub.Download the starter code from the following link of Memory Game project repository on GitHub <https://github.com/udacity/fend-project-memory-game>

We can download the zip folder from the following link <https://github.com/udacity/fend-project-memory-game/archive/master.zip>


## How I have built the Memory Game

1.I have downloaded the zipped folder and extracted it in order to get the starter code from the links provided in the instructions

2.Initially the starter code provided was a static version.

3.I have written few functions in order to perform some specific functionalities. some of them are,

- `matchCard()` for checking whether the cards clicked by the player are same or not.
- `showCard()` for displaying the image on the card.
- `moveCnt()` to increment the move count for every move performed by the player.
- `timer()` calculates the time and this function is called when the player clicks on a card.
- `stopTimer_popUp()` sets the time to zero and displays a congratulations pop up with the information like time taken , number of moves required to match all the cards and stars received by the player.
- `starRating()` and `displayRating()` are used to modify the stars on the game board and display the number of stars in congratulations pop up respectively.

4.The game also shuffles the cards whenever we restart or play again.


## How to play a Game

1.Click on two random cards. 2.If the two cards match they remain open. 3.If the cards do not match both the cards will be closed. 4.The player has to remember the image on each card they click and match two identical cards. 5.Once all the cards are matched the game ends displaying a congratulations pop up.


## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out <CONTRIBUTING.md>.
