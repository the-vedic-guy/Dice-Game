var randomNumber1= Math.floor(Math.random()*6) +1;
var randomNumber2= Math.floor(Math.random()*6) +1;

if(randomNumber1===1){
    document.querySelector(".box.five").classList.add("dot");
} else if(randomNumber1===2){
    document.querySelector(".box.one").classList.add("dot");
    document.querySelector(".box.nine").classList.add("dot");
} else if(randomNumber1===3){
    document.querySelector(".box.one").classList.add("dot");
    document.querySelector(".box.five").classList.add("dot");
    document.querySelector(".box.nine").classList.add("dot");
} else if(randomNumber1===4){
    document.querySelector(".box.one").classList.add("dot");
    document.querySelector(".box.three").classList.add("dot");
    document.querySelector(".box.seven").classList.add("dot");
    document.querySelector(".box.nine").classList.add("dot");
} else if(randomNumber1===5){
    document.querySelector(".box.one").classList.add("dot");
    document.querySelector(".box.three").classList.add("dot");
    document.querySelector(".box.five").classList.add("dot");
    document.querySelector(".box.seven").classList.add("dot");
    document.querySelector(".box.nine").classList.add("dot");
} else if(randomNumber1===6){
    document.querySelector(".box.one").classList.add("dot");
    document.querySelector(".box.three").classList.add("dot");
    document.querySelector(".box.four").classList.add("dot");
    document.querySelector(".box.six").classList.add("dot");
    document.querySelector(".box.seven").classList.add("dot");
    document.querySelector(".box.nine").classList.add("dot");
}

if(randomNumber2===1){
    document.querySelector(".boxB.five").classList.add("dot");
} else if(randomNumber2===2){
    document.querySelector(".boxB.one").classList.add("dot");
    document.querySelector(".boxB.nine").classList.add("dot");
} else if(randomNumber2===3){
    document.querySelector(".boxB.one").classList.add("dot");
    document.querySelector(".boxB.five").classList.add("dot");
    document.querySelector(".boxB.nine").classList.add("dot");
} else if(randomNumber2===4){
    document.querySelector(".boxB.one").classList.add("dot");
    document.querySelector(".boxB.three").classList.add("dot");
    document.querySelector(".boxB.seven").classList.add("dot");
    document.querySelector(".boxB.nine").classList.add("dot");
} else if(randomNumber2===5){
    document.querySelector(".boxB.one").classList.add("dot");
    document.querySelector(".boxB.three").classList.add("dot");
    document.querySelector(".boxB.five").classList.add("dot");
    document.querySelector(".boxB.seven").classList.add("dot");
    document.querySelector(".boxB.nine").classList.add("dot");
} else if(randomNumber2===6){
    document.querySelector(".boxB.one").classList.add("dot");
    document.querySelector(".boxB.three").classList.add("dot");
    document.querySelector(".boxB.four").classList.add("dot");
    document.querySelector(".boxB.six").classList.add("dot");
    document.querySelector(".boxB.seven").classList.add("dot");
    document.querySelector(".boxB.nine").classList.add("dot");
}

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins!"
} else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins!"
} else{
    document.querySelector("h1").innerHTML="Draw!"
}