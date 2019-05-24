// Memory game from GA Pre COurse WOrk


//Variables
// 
//Variable for holding our set of cards
var cards = [
	{
		rank:"queen" ,
		suit:"hearts" ,
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank:"queen" ,
		suit:"diamonds" ,
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank:"king" ,
		suit:"hearts" ,
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank:"king" ,
		suit:"diamonds" ,
		cardImage: "images/king-of-diamonds.png"
	}
];
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
	cardsInPlay.push(cards[cardId].rank);
	//display two cards in console
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].suit);
	console.log(cards[cardId].cardImage);
	checkForMatch();
};


//Call Functions
flipCard(0);
flipCard(2);

