// const loadData = () =>{
//     fetch('https://api.kanye.rest/')
//     .then(res => res.json())
//     .then(data => displayQuote(data))
// }
// const displayQuote = quote =>{
//     document.getElementById('quote').innerText = quote.quote;
// }

const loadData = () =>{
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => document.getElementById('quote').innerText = data.quote)
}
