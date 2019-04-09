const cards = document.querySelectorAll('.card');

let firstCardSelected = false; //card state, has not been flipped
let lockBoard = false; //
let firstCard;
let secondCard;

function flipCard () {
	if (lockBoard) {
		return;
	}

	if (firstCard === this) {
		return;
	}

	this.classList.add('flip');


	//first card
	if (!firstCardSelected) {
		firstCardSelected = true;
		firstCard = this;
		return;
	}
		
		//second card
	secondCard = this;
	lockBoard = true;


		//check if matching
	checkForMatch();
}


function checkForMatch () {
	let isMatch = firstCard.dataset.cardvalue === secondCard.dataset.cardvalue;
	
	if (isMatch) {
		//disable cards
		firstCard.removeEventListener('click', flipCard);
		secondCard.removeEventListener('click', flipCard);

		resetBoard(); //reseting the board in case there is a match
		return;	
	}

// unflip cards

	setTimeout( function(){
		firstCard.classList.remove('flip');
		secondCard.classList.remove('flip');

// reset the board
	resetBoard();
	}, 1500);
}


function resetBoard () {
	firstCardSelected = false;
	lockBoard = false;
	firstCard = null;
	secondCard = null;

	return;
}	



cards.forEach( (element) => {
	element.addEventListener('click', flipCard);
});



