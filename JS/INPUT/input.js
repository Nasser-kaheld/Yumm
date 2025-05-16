let username = document.getElementById('name');
let useremail = document.getElementById('email');
let userphon = document.getElementById('phon');
let userpassword = document.getElementById('password');
let userage = document.getElementById('age');
let rePassword = document.getElementById('rePassword');

let Passwordclass = document.querySelector('.Passwordclass');
let emailclass = document.querySelector('.emailclass');
let numberclass = document.querySelector('.numberclass');
let repasswordClass = document.querySelector('.repasswordClass');
let button = document.querySelector('button')

userpassword.addEventListener('input', checkForm);
useremail.addEventListener('input', checkForm);
userphon.addEventListener('input', checkForm);
rePassword.addEventListener('input', checkForm);

function validationPassword() {
  let regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{5,}$/;
  let text = userpassword.value;
  if (regex.test(text)) {
    Passwordclass.classList.add('is-valid', 'd-none');
    Passwordclass.classList.remove('is-invalid');
    return true;
  } else {
    Passwordclass.classList.remove('d-none');
    Passwordclass.classList.add('is-invalid');
    return false;
  }
}

function validationnumber() {
  let regex = /^01\d{8,9}$/;
  let text = userphon.value;
  if (regex.test(text)) {
    numberclass.classList.add('is-valid', 'd-none');
    numberclass.classList.remove('is-invalid');
    return true;
  } else {
    numberclass.classList.remove('d-none');
    numberclass.classList.add('is-invalid');
    return false;
  }
}

function validationEmail() {
  let regex = /^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/;
  let text = useremail.value;
  if (regex.test(text)) {
    emailclass.classList.add('is-valid', 'd-none');
    emailclass.classList.remove('is-invalid');
    return true;
  } else {
    emailclass.classList.remove('d-none');
    emailclass.classList.add('is-invalid');
    return false;
  }
}

function isExisst() {
  if (rePassword.value === userpassword.value) {
    repasswordClass.classList.add('d-none');
    repasswordClass.classList.remove('d-block');
    return true;
  } else {
    repasswordClass.classList.remove('d-none');
    repasswordClass.classList.add('d-block');
    return false;
  }
}

// التحقق الكامل عند أي إدخال
function checkForm() {
  if (
    validationPassword() &&
    validationnumber() &&
    validationEmail() &&
    isExisst()
  ) {
    button.classList.add('good')
    button.classList.remove('add')
    Toastify({
  text: "This is a toast",
  duration: 3000,
  destination: "https://github.com/apvarun/toastify-js",
  newWindow: true,
  close: true,
  gravity: "top", // `top` or `bottom`
  position: "left", // `left`, `center` or `right`
  stopOnFocus: true, // Prevents dismissing of toast on hover
  style: {
    
    background: "linear-gradient(to right,rgb(0, 0, 0),rgb(255, 255, 255))",
  },
  onClick: function(){} // Callback after click
}).showToast();
  } else {
    button.classList.remove('good')
    button.classList.add('add')


}
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
