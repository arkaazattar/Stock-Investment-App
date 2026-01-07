const form = document.getElementById("loginForm");

form.addEventListener("submit", function(event){
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    const remember_me = event.target.rememberme.checked;
    
    // testing only!
    // console.log(username , password , remember_me) 
})