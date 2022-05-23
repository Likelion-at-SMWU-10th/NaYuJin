const loginForm=document.querySelector("#login-form");
const loginInput=document.querySelector("#login-form input");
const hello=document.querySelector("#hello");

function firstLogin(event){
    event.preventDefault();
    loginForm.classList.add("hidden");
    const userName=loginInput.value;
    hello.innerText=`안녕하세요 ${userName}!`;
    hello.classList.remove("hidden");
}
loginForm.addEventListener("submit",firstLogin);