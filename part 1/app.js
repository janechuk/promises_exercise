//1
let url = "http://numbersapi.com"
const div = document.getElementsByTagName("div")

// axios.get(`${url}/${25}?json`)
//     .then(res => console.log(res.data))
//     .catch(err => console.log("error", err))

//2
let luckynum = [5, 10, 15]
// axios.get(`${url}/${luckynum}?json`)
//     .then(res => console.log(res.data))
//     .catch(err => console.log("error", err))


//3
Promise.all(
    Array.from({ length: 4 }, () => {
        return axios.get(`${url}/${luckynum}?json`);
    })
).then(facts => {
    facts.forEach(data => div.innerHTML += (`<p>${data.text}</p>`));
});