//setting all h2 element color to blue

let h2=document.getElementsByTagName('h2');
for(heading of h2){
    heading.style.color='blue';
}

//set background color to tomato for a section with backpack id

document.getElementById('backpack').style.backgroundColor='tomato';

//change border radius of all card class to 30px

let cards=document.getElementsByClassName('card');
for (let card of cards){
    card.style.borderRadius='30px';
}

//write a function with a console log and add it as a click handler on a button anywhere

function clickHandlerForConsoleLog () {
    console.log('click handled');
    
}
document.getElementById('button-banner-buy-now').onclick=clickHandlerForConsoleLog;


//add an event handler on all buy now button that removes that button element

let buyNowButtons=document.getElementsByClassName('panda-btn-buy-now');

for (let button of buyNowButtons){
    button.addEventListener('click',function(){
        button.style.display='none';
        // this.parentNode.removeChild(this);
        console.log(button);
    });
    
    
}

/* for(let i=0;i<buyNowButtons.length;i++) {
buyNowButtons[i].onclick=function () {
    buyNowButtons[i].style.display='none';
    console.log(buyNowButtons[i]);
}

} */


//toggle submit button to active if the input value is email

let buttonSubmit=document.getElementById('button-submit');
let inputEmail=document.getElementById('exampleInputEmail1');
inputEmail.oninput=function (){
    console.log(inputEmail.value);
    
    if(inputEmail.value =='email')
        buttonSubmit.disabled=false;
    else
    buttonSubmit.disabled=true;
}

