var btn = document.querySelector('#button') ;

var entered = document.querySelector('#email');
var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
var errorImg = document.getElementById('error-image');
var errorPlace = document.getElementById('error-place');
var form = document.querySelector('form');

function check (){
    if ( !entered.value.match(emailFormat) || entered.value == "" ){
        entered.style.border= "1px solid #ff0000";
        errorImg.style.visibility = "visible";
        errorPlace.innerHTML= "Please provide a valid email"; 
    }else {
        entered.style.border= "none";
        errorImg.style.visibility = "hidden";
        errorPlace.innerHTML= "";
    };    
};


btn.addEventListener('click', function (event) {
    event.preventDefault();
    check();  
} );







    
