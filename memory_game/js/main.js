// Memory game from GA Pre COurse WOrk


//Variables
// 
//Variable for holding our set of cards
var cards = ["queen","queen","king","king"];
//Varibale for cards in play
var cardsInPlay = [];
//Variable for cards flipped
var cardOne = cards[0];
var cardTwo = cards[2];


//Functions
// 
//pushing cards flipped into the cards in play array
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

//display two cards in console
console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);

//Checks to see if two cards are played and displays appropriate response
if(cardsInPlay.length === 2){
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match");
	} else {
		alert("Sorry, try again");
	}
}