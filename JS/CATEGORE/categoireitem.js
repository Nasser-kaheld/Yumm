const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");
console.log(category);  

async function getMealsByCategory() {
 

  let x = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
  if (x.ok) {
    let data = await x.json();
    display(data.meals);  
  } else {
    console.error("حدث خطأ في تحميل البيانات.");
  }
}


getMealsByCategory();


function display(arr) {
  if (!arr || arr.length === 0) {
    document.getElementById('row').innerHTML = "<p>No meals found for this category.</p>";
    return;
  }

  let cartona = '';
  for (let i = 0; i < arr.length; i++) {
    let meal = arr[i];

    // Create meal display structure
    cartona += `
      <div class="col colhover" data-category="${meal.strCategory}">
        <div class="inner my-2">
          <div class="position-relative">
            <div class="img">
              <img class="w-100" src="${meal.strMealThumb}">
            </div>
            <div class="title p-2 position-absolute">
              <a href="./Instructions.html?id=${meal.idMeal}" class="text-white w-100 h-100 d-flex align-items-center justify-content-center">
                <h5 class="fnt-items card-title">${meal.strMeal}</h5>
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  document.getElementById('row').innerHTML = cartona;
}

$(document).on('click', '.colhover', function() {
    const mealId = $(this).data('category');
    console.log(mealId);
});





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





let fligColor=false
$('.slider').on('click'  ,function(){

  
 
  if(fligColor==true){
     $(':root').css('--white-color' ,'#fff')
     $(':root').css('--main-color' ,'#000000')
     $(':root').css('--nav-color' ,'#fff')
     $(':root').css('--hover-color' ,'#ffffff58')
     fligColor=false
  }else{
    $(':root').css('--main-color' ,'#fff')
     $(':root').css('--nav-color' ,'#29e4ee')
    $(':root').css('--white-color' ,'#000000')
    $(':root').css('--hover-color' ,'#00000079')
    fligColor=true

  }

})




let offsetwidth = $('.contantNav').outerWidth()
$('.navSidBar').css({left:`-${offsetwidth}px`})

let flig = false
$('.close').on('click' , function(){

  if(flig == true){
    $('.navSidBar').animate({left:`0px`},800)
    $('.close').removeClass('fa-bars')
    $('.close').addClass('fa-xmark ')

  flig = false
  }else{
     $('.navSidBar').animate({left:`-${offsetwidth}px`},800)
      $('.close').addClass('fa-bars')
    $('.close').removeClass('fa-xmark ')
  flig = true

  }



})





$(window).on('load', function () {
  $('.lod').fadeOut(2000, function () {
    $(this).remove(); 
    $('body').css({ overflow: 'auto' });
  });
});
