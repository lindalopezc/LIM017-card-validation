/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-console */
import validator from './validator.js';

let message = document.getElementById('message');
const cardButton= document.getElementById('cardButton');
    cardButton.addEventListener('click', playButton);

function playButton(){
    let cardNumber = document.getElementById('cardNumber').value;

    if (cardNumber){ 
        
        const finalAnswer = validator.isValid(cardNumber);
        const hiddenCard = validator.maskify(cardNumber);

        if(finalAnswer){
            message.innerHTML= '';
            message.innerHTML= 'La tarjeta '+ hiddenCard + ' es válida. Gracias';
        }
        else{
            message.innerHTML= '';
            message.innerHTML= 'La tarjeta ' + hiddenCard + ' no es válida.' + '<br>' + 'Por favor vuelva a intentarlo';
        }
        console.log(finalAnswer);
    }
    else{
        message.innerHTML= '';
        message.innerHTML= 'Campo vacío. Por favor ingrese su número de tarjeta';    
    }
}

let buyButton = document.getElementById('buyButton');
buyButton.addEventListener('click',showFormulary);

function showFormulary(){
    document.getElementById('presentation').style.display='none';
    document.getElementById('card').style.display ='block';
}
