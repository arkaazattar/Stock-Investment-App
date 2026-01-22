const signup = document.getElementById("signup");
const login = document.getElementById("login");
const guest = document.getElementById("guest");

let isGuest = false;

signup.addEventListener("click", function(event){
    event.preventDefault();
    window.location.href="/signup"
    // console.log("button pressed")
})

login.addEventListener("click", function(event){
    event.preventDefault();
    window.location.href="/login"
    // console.log("button pressed")
})

guest.addEventListener("click", function(event){
    event.preventDefault();
    isGuest = true
    // console.log("button pressed")
})