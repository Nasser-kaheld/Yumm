async function Yummy() {
    let x = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);

    if (x.ok) {
        let data = await x.json();
        display(data.categories);
    } else {
        console.error("حدث خطأ في تحميل البيانات.");
    }
}

Yummy();

function display(arr) {
    let cartona = '';
    for (let i = 0; i < arr.length; i++) {
        cartona += `
            <div class="col colhover" data-category="${arr[i].strCategory}">
                <div class="inner my-2">
                    <div class="position-relative">
                        <div class="img">
                            <img class="w-100" src="${arr[i].strCategoryThumb}">
                        </div>
                        <div class="title p-2 position-absolute">
                            <p id="name" class="fs-2">${arr[i].strCategory}</p>
                            <p>${arr[i].strCategoryDescription.split(" ").slice(0, 20).join(" ")}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    document.getElementById('row').innerHTML = cartona;
}



$(document).on('click', '.col', function () {
    const categoryName = $(this).data('category')
    console.log(categoryName); 
   window.location.href = `./categoreitem.html?category=${categoryName}`;

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
