//define our values

let G = document.querySelector('#G');
let eighth = document.querySelector('#eighth');
let quater = document.querySelector('#quater');
let half = document.querySelector('#half');
let oz = document.querySelector('#oz');
let customMoney = document.querySelector('#customMoney');
let customMetric = document.querySelector('#customMetric');

let choose = document.querySelector('#choose');

let calculate = document.querySelector('.calcbutton');
let clear = document.querySelector('.clearbutton');


//letting buttons do stuff
calculate.addEventListener('click', passGate1);
clear.addEventListener('click', resetdata);

//reset data function
function resetdata() {
    G.value = ""
    eighth.value = ""
    quater.value = ""
    half.value = ""
    oz.value = ""
    customMoney.value = ""
    customMetric.value = ""

}


//function that allows passage if only one box is filled with a number.
function passGate1(){
    let isblank = 0;

    Gnum = parseInt(G.value);
    Enum = parseInt(eighth.value);
    Qnum = parseInt(quater.value);
    Hnum = parseInt(half.value);
    Onum = parseInt(oz.value);
    Cnum = parseInt(customMoney.value);

    CMnum = parseInt(customMetric.value);

    console.log(Gnum)
    console.log("an eigth costs this much: " + Enum)
    console.log(Qnum)
    console.log(Hnum)
    console.log(Onum)
    console.log(Cnum)




    // find out if only 1 line has an input
    let array = [Gnum, Enum, Qnum, Hnum, Onum, Cnum];
    
    array.forEach(function(i){
        if (isNaN(i) === true){
            isblank += 1;
            console.log(isblank)
        }
    });


    if (isblank === 5){
        if (isNaN(Cnum) === false){     //some passgate custom metric stuff
            if (isNaN(CMnum) === false){
                passGate2();
    
            }
            else{
                console.log('input error,  custom metric is not filled in but custom money is');
            }
        }
        else{
            passGate2();
        }
    }
    else{
        console.log('ONLY ONE OF THE FUCKING LINES SHOULD BE FILLED IN YOU DUMB FUCK!!!!!! FUCK YOU FUCK YOU!');
    }
}


    //if G is filled then cool
    //if not search for what is filled, use that to complete G
    //then use the G value to fill out rest of the chart in the fillchart function.
function passGate2(){

    console.log('only one line is filled in, great job!');
    console.log(Gnum);
    console.log(isNaN(Gnum));

    if (isNaN(Gnum) === false){
        fillChart()
    }

    else if (isNaN(Enum) === false){
        Gnum = Enum / 3.5
        console.log(Gnum);
        fillChart();
    }

    else if (isNaN(Qnum) === false){
        Gnum = Qnum / 7
        fillChart();
    }

    else if (isNaN(Hnum) === false){
        Gnum = Hnum / 14
        fillChart();
    }

    else if (isNaN(Onum) === false){
        Gnum = Onum / 28
        fillChart();
    }

    else if (isNaN(CMnum) === false){
        if (isNaN(Cnum) === false){
            if (choose.value === 'G'){
                Gnum = (Cnum / CMnum);
                fillChart();
            }

            else if (choose.value === 'Oz'){
                Gnum = (Cnum / CMnum) / 28;

                fillChart();
            }

        }
    }
}


    //for the custom option it is trickky,
    //need to identify if Oz or G is selected
    //then convert down to the gram amount
    //then pass that through for the next funtion.

    //  ACTUALLY i think we should skip the custom for now, cuz what we really want is
    // is the custom metric filled out, and then the custom money becomes optional depending on if any other
    // lines are filled in. SO... lets just get the rest of this turkey working correctly, and then we
    // will circle back to this. capeesh? 
 //   if ((isNaN(Cnum) === false and isNan(CMnum) === false)){
 //       Gnum = Onum * 28.349
//        fillChart()
 //   }
//}



//using the value of G to fillout the rest of the chart.
//will fill custmon money if the custom metric is filled
function fillChart(){

    G.value = Math.round(Gnum);

    console.log(' god hates me');

    if (isNaN(Enum) === true){
        Enum = Gnum * 3.5
        eighth.value = Math.round(Enum);
    }

    if (isNaN(Qnum) === true){
        Qnum = Gnum * 7
        quater.value = Math.round(Qnum)
    }

    if (isNaN(Hnum) === true){
        Hnum = Gnum * 14
        half.value = Math.round(Hnum);
    }

    if (isNaN(Onum) === true){
        Onum = Gnum * 28
        oz.value = Math.round(Onum);
    }

    if (isNaN(Cnum) === true){
        if (isNaN(CMnum) === false){
            if (choose.value === 'G'){
                Cnum = Gnum * CMnum
                customMoney.value = Math.round(Cnum);
            }
            else if (choose.value === 'Oz'){
                Cnum = Onum * CMnum
                customMoney.value = Math.round(Cnum);
            }

        }
    }


}


//function to reduce a long decimal to 2 places
function trimNum(x) {
    return Number.parseFloat(x).toFixed(2);
  }