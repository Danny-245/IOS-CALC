let inputBox = document.getElementById("num-field");

function displayNum(num) {
    inputBox.value += num;
}
function evalValue() {
let inputBox = document.getElementById("num-field");
   try {
    var numValue = inputBox.value;
    numValue = numValue.replace(/×/g, '*');
   


var ans = eval(numValue);
inputBox.value = ans;
   }
   catch(error) {
    inputBox.value = 'error';
   }
}
function clearValue() {
    inputBox.value = '';
    
  
}
function acvalue() {
    if(inputBox.value !== '') {
        document.getElementById('AC').textContent = 'C';
        
    }
    else {
        document.getElementById('AC').textContent = 'AC';
    }
}
setInterval(acvalue, 500);

function toggleMinus() {
    let value = inputBox.value;
    if(value.charAt(0) === '-') {
        inputBox.value = value.substring(1);
    }
    else {
        inputBox.value = '-' + value;
    }
}

// function percentageSolve() {
//     const value = inputBox.value;
//     const ans = value / 100;
//     inputBox.value = ans;
// }
function percentageSolve() {
    const value = inputBox.value;
    let ansValue = eval(value);
    const ans = ansValue / 100;
    inputBox.value = ans;

}
// loader-timer

function loaderExit() {
    const loader = document.getElementById('loader');
    loader.classList.add('remove');
}



window.onload = setTimeout(loaderExit, 5000);

