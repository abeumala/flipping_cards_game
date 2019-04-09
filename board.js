function makeElement (htmlString) {
	let div = document.createElement('div');

	div.innerHTML = htmlString;

	let result = div.children[0];
	return result;
}

let board = document.getElementById('board');

let cardsArray = ['one','two','three','four','five','six','one','two','three','four','five','six'];

cardsArray = shuffleCards(cardsArray);

function shuffleCards(array) {
	let result = [];

	for (; array.length > 0; ) {
		let randomNumber = Math.floor((Math.random() * array.length));
		let randomCard = array.splice(randomNumber, 1);

		result.push(randomCard);
	}	
	console.log('RESULT', result);
	return result;	
}




cardsArray.forEach( function(name) { // how to pick cards randomly each time
	let newCard = makeElement(`
		<div class="card" data-cardvalue="${name}">
		<img class="front" src="img/${name}.svg">
      	<img class="back" src="img/front.svg">
   		</div>`);

    board.appendChild(newCard);
})

