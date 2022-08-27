const loadCountries =() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => desplayCountry(data))
}
const desplayCountry = countries =>{
    const countriesContainer = document.getElementById('countries');
    countries.map(country =>{
        console.log(country);
        const countryDiv = document.createElement('div');
        countryDiv.innerHTML=`
        <h3>Name: ${country.name.common}</h3>
        <h4>Capital: ${country.capital ? country.capital[0] : "ERROR!!!!!!!!!!!"}</h4>
        `
        countriesContainer.appendChild(countryDiv)
    })
}
loadCountries()