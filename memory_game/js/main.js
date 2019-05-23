// Memory game from GA Pre COurse WOrk


//Variables
// 
//Variable for holding our set of cards
var cards = ["queen","queen","king","king"];
//Varibale for cards in play
var cardsInPlay = [];

//Checks to see if two cards are played and displays appropriate response
function checkForMatch(){
	if(cardsInPlay.length === 2){
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match");
	} else {
		alert("Sorry, try again");
	}
	}
}


//Functions
//Function that determines what happens when cards are flipped
function flipCard(cardId){
	//pushing cards flipped into the cards in play array
	cardsInPlay.push(cards[cardId]);
	//display two cards in console
	console.log("User flipped " + cards[cardId]);
	checkForMatch();
};


//Call Functions
flipCard(0);
flipCard(2);

//Checks to see if two cards are played and displays appropriate response
// if(cardsInPlay.length === 2){
// 	if (cardsInPlay[0] === cardsInPlay[1]) {
// 		alert("You found a match");
// 	} else {
// 		alert("Sorry, try again");
// 	}
// }