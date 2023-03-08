let nums = [];
let baseURL = "http://numbersapi.com/";


$( "#triviaForm" ).click(function() {
for (let i = 1; i < 4; i++) {
    nums.push(
        axios.get(`http://numbersapi.com/${i}/trivia?json`)
    )
}

Promise.all(nums)
    .then(numsArr => (
        numsArr.forEach(p => console.log(p.data.text))
    ))
    .catch(err => console.log(err));
});



$( "#triviaButton" ).click(function() {
    axios
    .get(`${baseURL}23/trivia?json`)
    .then(p1 => {
        console.log(p1.data.text);
        return axios.get(`${baseURL}24/trivia?json`)
    })
    .then(p2 => {
        console.log(p2.data.text);
        return axios.get(`${baseURL}25/trivia?json`)
    })
    .then(p3 => {
        console.log(p3.data.text);
    })
    .catch(err => {
        console.log(err)
    });
});