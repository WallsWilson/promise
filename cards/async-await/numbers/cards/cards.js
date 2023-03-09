let baseURL = "https://deckofcardsapi.com/api/deck/"


// 1.
async function drawNewDeck() {
    let draw = await $.getJSON(`${baseURL}new/draw/?count=1`);
    console.log(draw)
}
drawNewDeck()

// 2.
async function draw(data) {
    let drawFirstCard = await $.getJSON(`${baseURL}new/draw/?count=1`);
    let deckId = drawFirstCard.deck_id;
    let nextCard = await $.getJSON(`${baseURL}${deckId}/draw/?count=1`);

    
    console.log(drawFirstCard)
    console.log(nextCard)
}

draw()