/* eslint-disable no-console */
const validator = {
  isValid:  function(card){
    let arrayOfCard = Array.from(card);
    let newArray = []; 
    let totalSum = 0;
    for (let i = 0; i < arrayOfCard.length; i++){
        newArray.push(parseInt(arrayOfCard[i]));
    }
    newArray.reverse();
    
    console.log('Estos son los dígitos invertidos: ');
    console.log(newArray);       
    
    for(let i = 0; i< newArray.length ; i++){
        if (i%2 == 1){
        newArray[i] = newArray[i]*2;
        if (newArray[i] >= 10){
            newArray[i] = newArray[i]-9;
            }    
        }
       totalSum = totalSum + newArray[i];
    }
    console.log('Al duplicar las cifras de lugar par y sumar los digitos si son mayores a 10, se obtiene :');
    console.log(newArray);
    console.log('La suma de los dígitos de este arreglo es:');
    console.log(totalSum);
        
    if (totalSum % 10 == 0){
        return true;
    }  
    else{
        return false;
    }
  },
  maskify:function(card){

    const arrayOfCard = Array.from(card);
    let hiddenCard = '';
    if(arrayOfCard.length <= 4){
      hiddenCard = arrayOfCard.join('');
    }
    else{
      for(let i = 0; i < arrayOfCard.length-4; i++){
      arrayOfCard[i] = '#';
      }
      hiddenCard = arrayOfCard.join('');
    }
    return hiddenCard;
  }
}
export default validator;
