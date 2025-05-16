

jQuery( function(){
  async function Yummy() {
  let x = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");

  if (x.ok) {
    let data = await x.json();
    display(data.meals);
  } else {
    console.error("Erorr");
  }
}

Yummy();

function display(arr) {
  let cartona = '';
  for (let i = 0; i < arr.length; i++) {
    cartona += `
      <div class="col colhover">
        <div class="inner my-2">
          <div class="position-relative">
            <div class="img">
              <img class="w-100" src="${arr[i].strMealThumb}">
            </div>
            <div class="title p-2 position-absolute">
             <a href="./Instructions.html?id=${arr[i].idMeal}" class="text-white">
                <p>${arr[i].strMeal}</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  document.getElementById('row').innerHTML=cartona;
}








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

















$(window).on('load', function () {
  $('.lod').fadeOut(2000, function () {
    $(this).remove(); 
    $('body').css({ overflow: 'auto' });
  });
});

});


