const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => desplayCountry(data))
}
const desplayCountry = countries => {
    const countriesContainer = document.getElementById('countries');
    countries.map(country => {
        console.log(country);
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('countries')
        countryDiv.innerHTML = `
        <h3>Name: ${country.name.common}</h3>
        <h4>Capital: ${country.capital ? country.capital[0] : "ERROR!!!!!!!!!!!"}</h4>
        <button onclick="loadCountryDetails('${country.cca2}')">See Details</button>
        `
        countriesContainer.appendChild(countryDiv)
    })
}
const loadCountryDetails = (code) => {
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetails(data[0]))
}
const displayCountryDetails = (details) => {
    const countryDetails = document.getElementById('country-details');
    countryDetails.innerHTML =`
    <h2>Country Details: ${details.name.common}</h2>
    <img src="${details.flags.png}">
    `
}
loadCountries();