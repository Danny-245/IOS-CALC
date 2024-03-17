const userName = document.getElementById('username');
const passWord = document.getElementById('pswd');
const form = document.getElementById('form');
const erroruserName = document.getElementById('error-name');
const errorPswd = document.getElementById('error-pswd');

const form2 = document.getElementById('form2');
const errorPswd2 = document.getElementById('error-pswd2');
const loginPswd = document.getElementById('Login-pswd');
let loginUser = document.getElementById('userName');
const signUp = document.getElementById('signup');
const login = document.getElementById('login');



form.addEventListener('submit', (e)=> {
 if(userName.value === '') {
    e.preventDefault();
    erroruserName.textContent = 'This field is required';
 }
 else {
    erroruserName.textContent = '';

 }
 if (passWord.value === '') {
    e.preventDefault();
    errorPswd.textContent = 'This field is required';
 }
 else {
    errorPswd.textContent = '';

 }
 if (userName.value !== '' && passWord.value !== '') {
    e.preventDefault();
    // setTimeout(()=> {
    //     let btnSubmit= document.getElementById('btnSubmit');
    //     btnSubmit.innerHTML = `<div class="loader-spin text-center"></div>`;
    // }, 0);
const submitBtn = document.getElementById('btn');
submitBtn.classList.add('fade');
    const userNameStored = userName.value;
    localStorage.setItem('UserName', userNameStored);
    window.location.href = 'calc.html';
    const pswdStored = passWord.value;
    localStorage.setItem('password-signup', pswdStored);
 }
});




const pswdGet = localStorage.getItem('password-signup');

form2.addEventListener('submit', (e)=> {
    if(loginPswd.value === '' || loginPswd.value !== pswdGet) {
        e.preventDefault();
        errorPswd2.textContent = 'Incorrect Password';
    }
    else {
        e.preventDefault();
//         const submitBtn = document.getElementById('btn2');
// submitBtn.classList.add('fade');
        // setTimeout(()=> {
        //     let btnSubmit= document.getElementById('btnSubmit');
        //     btnSubmit.innerHTML = `<div class="loader-spin text-center"></div>`;
        // }, 0);
        
        errorPswd2.textContent = '';
        window.location.href = 'calc.html';
    }
})

document.addEventListener('DOMContentLoaded', ()=>{
    var storedName = localStorage.getItem('UserName');
    loginUser.innerText = storedName;
    // loginUser.value = localStorage.getItem('UserName');

    if(!localStorage.getItem('UserName')) {
signUp.style.display = 'block';
login.style.display = 'none';
    }
    else {
        signUp.style.display = 'none';
login.style.display = 'block';
    }
});

// localStorage.clear();
const resetPara = document.getElementById('reset');
function resetPswd() {
    localStorage.clear();
}
resetPara.addEventListener('click', resetPswd);

