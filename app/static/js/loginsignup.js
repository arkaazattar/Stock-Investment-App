const signup = document.getElementById("signup");
const login = document.getElementById("login");

signup.addEventListener("click", function(event){
    event.preventDefault();
    window.location.href="/signup"
    console.log("button pressed")
})

login.addEventListener("click", function(event){
    event.preventDefault();
    window.location.href="/signup"
    console.log("button pressed")
})