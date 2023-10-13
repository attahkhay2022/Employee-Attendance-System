let loginForm = document.querySelector('.login-form-container');
document.querySelector('#login-btn').onclick = () =>{
    
    loginForm.classList.toggle('active');
    console.log(loginForm);
}
let closeBtn = document.querySelector('#close-login-btn');
closeBtn.onclick=()=>{
    loginForm.classList.remove('active')
}

let signup = document.querySelector('.signup-form-container');

document.querySelector('#signup').onclick = () => {

   signup.classList.toggle('active');
   loginForm.classList.remove('active')
   console.log(signup);
}

let closesignup = document.querySelector('#close-signup-btn');
closesignup.onclick=()=>{
    signup.classList.remove('active')
}

document.querySelector('#login').onclick = () =>{
    
    loginForm.classList.toggle('active');
    signup.classList.remove('active')
    console.log(loginForm);
}


// // search forms
// let drawSearch = document.querySelector('.header-1');
// document.querySelector('#search-btn').onclick =() => {
//     drawSearch.classList.toggle('active');
// }