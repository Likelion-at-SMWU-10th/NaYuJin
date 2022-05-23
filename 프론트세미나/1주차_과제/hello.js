const loginForm=document.querySelector("#login-form");
const loginInput=document.querySelector("#login-form input");
const hello=document.querySelector("#hello");

function loginSubmit(event){
    event.preventDefault();
    loginForm.classList.add("hidden");
    const userName=loginInput.value;
    hello.innerText=`Hello ${userName}!`;
    hello.classList.remove("hidden");
}
loginForm.addEventListener("submit",loginSubmit);