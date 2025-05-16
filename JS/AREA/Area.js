let list=[]
if(JSON.parse(localStorage.getItem('list')!=null)){
    list=JSON.parse(localStorage.getItem('list'))
}








async function Yummy() {
  let x = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list");

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
     <div class="col icon-Area">
            <div  class="inner   text-center fs-4 ">
                <i class="fa-solid fa-house-laptop fa-4x  "></i>
                <p >${arr[i].strArea}</p>
            </div>
        </div>
      
    `;
  }

  document.getElementById('row').innerHTML = cartona;
}



$(document).on('click', '.col', function () {
    const pText = $(this).find('p').text();
    console.log(pText);
    let namedata={
        name:pText,
    }

    list.push(namedata)
    localStorage.setItem('list' , JSON.stringify(list))

   
    


      setTimeout(function(){
          window.location.href=`/itemArea.html`
    
  },500)

});





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
