console.log('function');

//function is a small program
//enables easy debugging
//enables team work with modular programming techniques

// A function must be defined and called as per the requirements
// function names are written meaningfully with camelCase
// normally used for a single purpose

 //Function definition

 function displayInfo(){
   document.getElementById('result').innerHTML = 'Learning JS Function </br>';
  }

//calling the function
 displayInfo();
document.getElementById('result').innerHTML += 'Hi, Good Afternoon </br>';


//passing parameter or value inside the function
//name is a dummy variable or dummy parameter or dummy argument
function greetMe(name){

  document.getElementById('result').innerHTML += 'Hi ' + name + ', Good Afternoon </br>';

}

greetMe('Beula');// actual argument or parameter
// greetMe('Yoobee');
// greetMe('New Zealand');


var food = 100;
var transport = 125;
var bills = 255;

var grandTotal = totalExpense(food, transport, bills);
// parameters should correspond in order and type of data

//returning value
//gt is a local variable has local scope , available only inside the function
function totalExpense(f, t, b){
  var gt = f + t + b;
   return gt; //returns the value to the location where the function is called from
}


document.getElementById('result').innerHTML += 'The total expense is ' + grandTotal;


document.getElementById('result').innerHTML
+= '</br> The average is ' + (totalExpense(50,35,40)/3).toFixed(2);

//variable total has Global scope
var total = 345;
function averageExpense(total){
  var myAverage = (total/3);
  console.log(myAverage); //local
  return myAverage;
}
document.getElementById('result').innerHTML
+= '</br> The average from the new function is ' + averageExpense(total);

var myAverage = 200; //global
console.log(myAverage);

function anotherFunction(){
  var myAverage=0;
  console.log(myAverage);
}
anotherFunction();

//Time Table 5

document.getElementById('tables').addEventListener('click',function(){
for(var i=0; i<20; i++){
  var mult = 5*i;
  document.getElementById('multiplication').innerHTML
  += '</br> 5x' + i + '=' + mult;
}//loop
}); //evenlistener
