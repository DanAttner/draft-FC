//define our values

let test = 900;
let G = document.querySelector('#G');
let eighth = document.querySelector('#eighth');
let quater = document.querySelector('#quater');
let half = document.querySelector('#half');
let oz = document.querySelector('#oz');
let customMoney = document.querySelector('#customMoney');
let customMetric = document.querySelector('#customMetric');

let calculate = document.querySelector('.buttonass');

let giveittome = parseInt(G.value,10);
let testp = parseInt(test);

//letting calculate button do stuff
calculate.addEventListener('click', doMath);

function doMath(){
    console.log("number: " + test);
    console.log("number parsed: " + testp);

    console.log("G.value: "+ G.value);
    console.log("G.value parsed: "+ parseInt(G.value,10));
    console.log("G.value parsed through a var: " + giveittome);


    
 //   if (isNaN(G.value)){
  //      console.log('not a  number');
   // }
    //else{
     //   console.log('i guess it is a number, whoopdie doopdkii scoop');
    //}

}