import './Login.css'
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate();


    const handleFormSubmit = (e) =>{
        e.preventDefault();
        navigate("");
    }
    
    return(
        <form onSubmit={handleFormSubmit}>
            <p>Login</p>
            <input required placeholder='Username'/> <br/>
            <input required type="password" placeholder='Password'/> <br/>
            <button>Submit</button>
        </form>
    )
}

export default Login;