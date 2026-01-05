// const form = document.getElementById("signupForm").addEventListener("submit", (e) =>{
//     event.preventDefault()
//     const username = e.target.username.value;
//     const password = e.target.password.value;
//     console.log(username , password)
// })


const form = document.getElementById("signupForm");

form.addEventListener("submit", function(event){
    event.preventDefault();
    const username = event.target.username.value
    const password = event.target.password.value

    console.log(username , password)
})




