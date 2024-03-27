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
    catch (error) {
        inputBox.value = 'error';
    }
}
function clearValue() {
    inputBox.value = '';


}
function acvalue() {
    if (inputBox.value !== '') {
        document.getElementById('AC').textContent = 'C';

    }
    else {
        document.getElementById('AC').textContent = 'AC';
    }
}
setInterval(acvalue, 500);

function toggleMinus() {
    let value = inputBox.value;
    if (value.charAt(0) === '-') {
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
    let value = inputBox.value;
    value = value.replace(/×/g, '*');
    let ansValue = eval(value);
    const ans = ansValue / 100;
    inputBox.value = ans;

}
// loader-timer

function loaderExit() {
    const loader = document.getElementById('loader');
    loader.classList.add('remove');
}



// window.onload = setTimeout(loaderExit, 5000);
window.onload = setTimeout(loaderExit, 2000);


// localStorage.clear(); 
function profileNameAdd() {
    let name = localStorage.getItem('UserName');
    let firstLetter = name.charAt(0).toUpperCase();
    // let paragraph = document.getElementsByClassName('fl');
    document.getElementById('dp').innerText = firstLetter;
    document.getElementById('dp2').innerText = firstLetter;
    // paragraph.innerText = firstLetter;

    let dpName = document.getElementById('name-profile');
    dpName.innerText = name;
    // console.log(firstLetter);

}
setTimeout(profileNameAdd, 1000);

// check online status

function onlineStatus() {
    const spinnerStatus = document.getElementById('spinner-status');

    if (navigator.onLine) {
        spinnerStatus.classList.add('text-success');
        spinnerStatus.classList.remove('text-danger');
        document.getElementById('status').innerHTML = `<span>Online</span>`;
    }
    else {
        spinnerStatus.classList.remove('text-success');
        spinnerStatus.classList.add('text-danger');
        document.getElementById('status').innerHTML = `<span>Offline</span>`;

    }
}

setInterval(onlineStatus, 1000);

function logOut() {
    var logOutBtn = document.getElementById('logout-btn');
    logOutBtn.textContent = 'Loging out...';
    setTimeout(function changetwo() {
        logOutBtn.textContent = 'Clearing data...';
    }, 2000)
    setTimeout(function changetwo() {
        logOutBtn.textContent = 'Deleting Profile...';
    }, 3000)


    setTimeout(function changetwo() {
        logOutBtn.textContent = 'Redirecting...';
        logOutBtn.classList.remove('bg-danger');
        logOutBtn.classList.add('change-color');
        // logOutBtn.style.background = '#333';
    }, 6500);


    setTimeout(modalLogout, 1000);
    localStorage.clear();
    function redirect() {
        window.location.href = 'index.html';

    }
    setTimeout(redirect, 9000);
}

// functio to show logout modal 
function modalLogout() {
    const modal = document.getElementById('startup');
    modal.classList.add('display');

}

// function to check if user has already logged-in




// function redirectUser() {

// }
// document.addEventListener('DOMContentLoaded', 

// document.addEventListener('onload', ()=> {

// })
window.addEventListener('DOMContentLoaded', (e) => {
    if (localStorage.getItem('UserName')) {
        e.preventDefault();
    }
    else {

        let checkProfile = document.getElementById('checkP');
        checkProfile.classList.add('showCC');
setTimeout(function redd() {
    window.location.href = 'index.html';

}, 6500);

    }
})
