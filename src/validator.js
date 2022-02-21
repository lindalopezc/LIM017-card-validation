/* eslint-disable no-console */
const validator = {
  isValid:  function(card){
    const cardArray = card.split('');
    let newArray = []; 
    let totalSum = 0;
    for (let i = 0; i < cardArray.length; i++){
        newArray.push(parseInt(cardArray[i]));
    }
    newArray.reverse();     
    
    for(let i = 0; i< newArray.length ; i++){
        if (i%2 == 1){
        newArray[i] = newArray[i]*2;
        if (newArray[i] >= 10){
            newArray[i] = newArray[i]-9;
            }    
        }
       totalSum += newArray[i];
    }

    if (totalSum % 10 == 0){
        return true;
    }  
    else{
        return false;
    }
  },
  maskify:function(card){
    if(card.length > 4){
      const cardArray = card.split('');
      for(let i = 0; i < cardArray.length - 4; i++){
      cardArray[i] = '#';
      }
      return cardArray.join('');
    }
    else{
      return card;
    }
  }
}
export default validator;
