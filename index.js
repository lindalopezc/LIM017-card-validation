/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-console */
import validator from './validator.js';

document.getElementById('buyBtn2').addEventListener('click',showFormulary);
document.getElementById('buyBtn3').addEventListener('click',showFormulary);
document.getElementById('loginBtn').addEventListener('click',showLogin);
document.getElementsByClassName('signIn')[0].addEventListener('click',welcome);
document.getElementsByClassName('signIn')[1].addEventListener('click',welcome);
document.getElementById('sendBtn').addEventListener('click',showMessage);

const buyBtn = document.getElementById('buyBtn');
const message = document.getElementById('message');
const validationBtn= document.getElementById('validationBtn');

validationBtn.addEventListener('click', cardValidation);
buyBtn.addEventListener('click',showFormulary);

function showFormulary(){
    document.getElementById('initialView').style.display='none';
    document.getElementById('payView').style.display ='block';
}
function showLogin(){
    document.getElementById('payView').style.display ='none';
    document.getElementById('initialView').style.display='none';
    document.getElementById('loginView').style.display='block';
}
function welcome(){
    const userName=document.getElementById('userName').value;
    const welcomeMessage=document.getElementById('welcomeMessage');
    welcomeMessage.innerText='Bienvenid@  '+ userName;
}
function showMessage(){
    const contactMessage=document.getElementById('contactMessage');
    contactMessage.innerText='Su mensaje ha sido enviado. Nos comunicaremos con usted a la brevedad posible.';
}

function cardValidation(){
    let cardNumber = document.getElementById('cardNumber').value;
    if (cardNumber){ 

        const finalAnswer = validator.isValid(cardNumber);
        const hiddenCard = validator.maskify(cardNumber);
        const typeOfCard = validator.getIssuer(cardNumber);
       
        if(finalAnswer){ 
            message.style.color='#4F4FFF';
            message.innerText= 'Su tarjeta '+ typeOfCard + ' ' + hiddenCard + ' es válida. \n Gracias.';
    
        }
        else{
            message.style.color='#FF1C44';
            message.innerText= 'Su tarjeta ' + typeOfCard + ' ' + hiddenCard + ' no es válida. \n Por favor vuelva a intentarlo';
        }
    }
    else{
        message.style.color='#FF1C44';
        message.innerText= 'Campo vacío. Por favor ingrese su número de tarjeta';    
    }
}
