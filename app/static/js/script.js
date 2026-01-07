    const dashboard = document.getElementById("dashboard");
    const getstarted = document.getElementById("getstarted");

    dashboard.addEventListener("click", async function(event){
        event.preventDefault();
        window.location.href = "/dashboard";
        
    })

    getstarted.addEventListener("click", async function(event){
        event.preventDefault();
        window.location.href="/loginsignup"
    })
