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


//Functions
//Creates the game board we will use for the cards
function createBoard(){
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src','images/back.png');
		cardElement.setAttribute('data-id',i);

		cardElement.addEventListener('click',flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}
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



//Function that determines what happens when cards are flipped
function flipCard(){
	var cardId = this.getAttribute('data-id');
	this.setAttribute('src',cards[cardId].cardImage);
	//pushing cards flipped into the cards in play array
	cardsInPlay.push(cards[cardId].rank);
	//display two cards in console
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].suit);
	console.log(cards[cardId].cardImage);
	checkForMatch();
};


//Call Functions
createBoard();

