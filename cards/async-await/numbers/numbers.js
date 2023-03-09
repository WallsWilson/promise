let baseURL = "http://numbersapi.com/";


async function numberFacts() {
    let numTrivia = await $.getJSON(`${baseURL}random/trivia?json`);
    console.log(numTrivia)
}

numberFacts()


async function multipleNumFacts() {
    let muliNums = [25,8,29];
    let multiNumTrivia = await $.getJSON(`${baseURL}${muliNums}/trivia?json`);
    console.log(multiNumTrivia)
}

multipleNumFacts()

async function appendNumFacts() {

    let multiNumTrivia = await Promise.all([ 
        $.getJSON(`${baseURL}25/trivia?json`),
        $.getJSON(`${baseURL}25/trivia?json`),
        $.getJSON(`${baseURL}25/trivia?json`)
    ]);
    console.log(multiNumTrivia)
    multiNumTrivia.forEach(data => {
    $('.container').append( `<p>${data.text}</p>` );
});
}

appendNumFacts()