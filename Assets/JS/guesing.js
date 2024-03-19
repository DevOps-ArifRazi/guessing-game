//Initialize value
const initialAttempts = 0;
const totalAttempts = 5;
const totalWon = 0 ;
const totalLost = 0;



const form = document.querySelector("form");
const cardBody = document.querySelector(".card-body"); 
const inputNumber = form.querySelector("#input-number"); 
const button = form.querySelector(".btn"); 
const massage = cardBody.querySelector(".massage"); 
const remainingAttempt = cardBody.querySelector(".remainingAttempts"); 
//const finalMassage = document.createElement("p");
const finalMassage = cardBody.querySelector(".final-result")



form.addEventListener("submit", function(event){
    event.preventDefault();
    //console.log(guessingNumber.value);
    checkResult(inputNumber.value);

});

function checkResult(inputNumber){
    console.log(inputNumber);
    const randomNumber = getRandomNumber(5);
    console.log(randomNumber);
    if(inputNumber==randomNumber){
        massage.innerHTML=`You Have Won.`;
        totalWon++;
    }else{
        massage.innerHTML=`You Have Lost, Random Number was: ${randomNumber}.`;
        totalLost++;
    };
    finalMassage.innerHTML=`Won: ${totalWon}, Lost: ${totalLost}.`; 
   // finalMassage.innerHTML =`Won:${totalWon} and Lost:${totalLost}.`;
    //finalMassage.classList.add("final-result");
   // cardBody.appendChild(finalMassage);

}

function getRandomNumber(limit){
    return Math.floor(Math.random() * limit)+1;

}