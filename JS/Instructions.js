const urlParams = new URLSearchParams(window.location.search);
const mealId = urlParams.get("id");
console.log(mealId);

async function getMeal() {
  let x = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);

  if (x.ok) {
    let data = await x.json();
    display(data.meals);
  } else {
    console.error("Erorr");
  }
}
getMeal();

function display(arr) {
  let cartona = '';
  for (let i = 0; i < arr.length; i++) {
    let meal = arr[i];

    // بناء المكونات
    let ingredients = '';
    for (let i= 1; i<= 20; i++) {
      let ingredient = meal[`strIngredient${i}`];
      let measure = meal[`strMeasure${i}`];
      if (ingredient && ingredient.trim() !== '') {
        ingredients += `<p>${ingredient}: ${measure}</p>`;
      }
    }

    cartona += `
      <div class="row">
        <div class="col-5">
          <div class="inner">
            <img class="w-100" src="${meal.strMealThumb}" alt="">
            <p class="meal-name artcolor ">${meal.strMeal}</p>
          </div>
        </div>
        <div class="col-7">
          <h3 class="artcolor">Instructions</h3>
          <p class="artcolor">${meal.strInstructions || "No instructions available"}</p>
          <p class="artcolor">Area: ${meal.strArea || "Unknown"}</p>

          <div class="recipes">
            <h4 class="artcolor">Ingredients:</h4>
            <div class="d-flex flex-wrap gap-4 artcolor ingredientsItem ">
              ${ingredients}
            </div>
          </div>

          <p class="artcolor Tags">Tags: ${meal.strTags || 'No tags available'}</p>

          <div class="btn-tags">
            <a class="artcolor bg-info " href="${meal.strSource || '#'}" class="btn source me-2" target="_blank">Source</a>
            <a class="artcolor  bg-danger" href="https://www.youtube.com/results?search_query=${meal.strMeal}" class="btn youtube" target="_blank">YouTube</a>
          </div>
        </div>
      </div>
    `;
  }

  document.getElementById('row').innerHTML = cartona;
}





let fligColor=false
$('.slider').on('click'  ,function(){

  
 
  if(fligColor==true){
     $(':root').css('--white-color' ,'#fff')
     $(':root').css('--main-color' ,'#000000')
     $(':root').css('--nav-color' ,'#fff')
     $(':root').css('--hover-color' ,'#ffffff79')
     fligColor=false
  }else{
    $(':root').css('--main-color' ,'#fff')
     $(':root').css('--nav-color' ,'#29e5ee')
    $(':root').css('--white-color' ,'#000000')
    $(':root').css('--hover-color' ,'#ffffff79')
    fligColor=true

  }

})


let offsetwidth = $('.contantNav').outerWidth()
$('.navSidBar').css({left:`-${offsetwidth}px`})

let flig = false
$('.close').on('click' , function(){

  if(flig == true){
    $('li').slideDown(900)
    $('.navSidBar').animate({left:`0px`},800)
    $('.close').removeClass('fa-bars')
    $('.close').addClass('fa-xmark ')

  flig = false
  }else{
     $('.navSidBar').animate({left:`-${offsetwidth}px`},800)
      $('.close').addClass('fa-bars')
    $('.close').removeClass('fa-xmark ')
    $('li').slideUp(900)

  flig = true

  }



})



function navClick(){
  $('.Search').on('click' , function(e){
  window.location.href=`/serch.html`
})

  $('.Categories').on('click' , function(e){
  window.location.href=`/categories.html`
})
  $('.Area').on('click' , function(e){
  window.location.href=`/Area.html`
})
  $('.Ingredients').on('click' , function(e){
  window.location.href=`/ingredints.html`
})
  $('.ContactUs').on('click' , function(e){
  window.location.href=`/input.html`
})




}
navClick()





$(window).on('load', function () {
  $('.lod').fadeOut(2000, function () {
    $(this).remove(); 
    $('body').css({ overflow: 'auto' });
  });
});

