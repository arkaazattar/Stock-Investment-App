const form = document.getElementById("signupForm");

form.addEventListener("submit", function(event){
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    // testing only!
    // console.log(username , password)
})



