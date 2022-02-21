/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-console */
import validator from './validator.js';

const message = document.getElementById('message');
const validationBtn= document.getElementById('validationBtn');
validationBtn.addEventListener('click', cardValidation);

const buyBtn = document.getElementById('buyBtn');
buyBtn.addEventListener('click',showFormulary);

function showFormulary(){
    document.getElementById('firstSection').style.display='none';
    document.getElementById('secondSection').style.display ='block';
}

function cardValidation(){
    const cardNumber = document.getElementById('cardNumber').value;
   
    if (cardNumber){ 

        const finalAnswer = validator.isValid(cardNumber);
        const hiddenCard = validator.maskify(cardNumber);
        if(finalAnswer){ 
            message.innerText= 'Su tarjeta '+ hiddenCard + ' es válida. Gracias';
        }
        else{
            message.innerText= 'Su tarjeta ' + hiddenCard + ' no es válida. Por favor vuelva a intentarlo';
        }
    }
    else{
        message.innerText= 'Campo vacío. Por favor ingrese su número de tarjeta';    
    }
}
