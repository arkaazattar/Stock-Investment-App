    const form = document.getElementById("form");
    const form2 = document.getElementById("form2");

    form2.addEventListener("submit", async function(event){
        event.preventDefault();
        console.log("3dots");
        window.location.href = "/dashboard"
        
    })

    form.addEventListener("submit", async function(event){
        event.preventDefault();
        window.location.href="/loginsignup"
    })
    
