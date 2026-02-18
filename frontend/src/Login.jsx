import './Login.css'

function Login() {
    
    const handleFormSubmit = (e) =>{
        e.preventDefault();
        
    }
    
    return(
        <form onSubmit={handleFormSubmit}>
            <p>Login</p>
            <input placeholder='Username'/> <br/>
            <input type="password" placeholder='Password'/> 
        </form>
    )
}

export default Login;