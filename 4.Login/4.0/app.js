/*
// loginForm 변수 선언 html에서 id=login-form 가져옴
const loginForm = document.getElementById("login-form");
// loginForm 변수로 input 태그 선택
const loginInput = loginForm.querySelector("input");
// loginForm 변수로 button 태그 선택
const loginButton = loginForm.querySelector("button");
*/

const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

    function onLoginBtnClick() {
        console.log(loginInput.value);
    }

loginButton.addEventListener("click", onLoginBtnClick);