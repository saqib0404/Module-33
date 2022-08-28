const loadMealData = (search) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}
const displayMeals = (meals) => {
    console.log(meals)
    const mealContainer = document.getElementById('meals-container');
    mealContainer.innerHTML = ``
    meals.forEach(meal => {
        const mealDiv = document.createElement('div')
        mealDiv.classList.add('col')
        mealDiv.innerHTML = `
        <div onclick="loadMealDetails(${meal.idMeal})" class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
            </div>
        </div>
        `
        mealContainer.appendChild(mealDiv)
    });
}
const searchFood = () => {
    const searchField = document.getElementById('searchField');
    const search = searchField.value;
    loadMealData(search);
    searchField.value = '';
}
const loadMealDetails = (idMeal) => {
    // console.log(idMeal)
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals[0]))
}
const displayMealDetails = (meal) => {
    console.log(meal)
    const mealDetails = document.getElementById('details-of-meal');
    mealDetails.innerHTML=``
    const detailMealDiv = document.createElement('div')
    detailMealDiv.classList.add('card')
    detailMealDiv.innerHTML = `
    <div class="card-body">
        <h2>${meal.strMeal}: ${meal.idMeal}</h2>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
            the card's content.</p>
    </div>
    `
    mealDetails.appendChild(detailMealDiv)
}
loadMealData('fish');
