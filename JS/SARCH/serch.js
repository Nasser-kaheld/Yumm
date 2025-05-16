let nameinput = document.getElementById('name');
let letterinput = document.getElementById('letter');


nameinput.addEventListener('input', inputValueName);
letterinput.addEventListener('input', inputValueLetter);

async function inputValueName() {
  let inputName = nameinput.value.trim();
  if (!inputName) return;

  let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputName}`);
  if (res.ok) {
    let data = await res.json();
    if (data.meals) {
      displayMeals(data.meals);
    } else {
      showNoResults();
    }
  } else {
    alert("Error fetching data.");
  }
}

async function inputValueLetter() {
  let inputLetter = letterinput.value.trim();
  if (inputLetter.length !== 1) return;

  let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${inputLetter}`);
  if (res.ok) {
    let data = await res.json();
    if (data.meals) {
      displayMeals(data.meals);
    } else {
      showNoResults();
    }
  } else {
    alert("Error fetching data.");
  }
}

function displayMeals(meals) {
  let content = meals.map(meal => `

      <div class="col-md-4 mb-4 position-relative">
      <div class=" bg-secondary inner text-white h-100 ">
        <img src="${meal.strMealThumb}" class="-img-top w-100" alt="${meal.strMeal}">
        <div class=" text-center position-absolute title">
          <h5 class="-title">${meal.strMeal}</h5>
         <a href="./Instructions.html?id=${meal.idMeal}" class="btn btn-outline-light">Details</a>
        </div>
      </div>
    </div>
  `).join('');
  document.getElementById('row').innerHTML = content;
}




