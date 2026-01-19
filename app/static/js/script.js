    const loginsignup= document.getElementById("login_and_signup");
    const getstarted = document.getElementById("getstarted");

    loginsignup.addEventListener("click", async function(event){
        event.preventDefault();
        window.location.href = "/login_and_signup";
        
    })

    getstarted.addEventListener("click", async function(event){
        event.preventDefault();
        window.location.href="/getstarted"
    })
