import './Login.css'
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate();


    const handleFormSubmit = (e) =>{
        e.preventDefault();
        navigate("");
    }
    
    return(
        <div className="loginbody">
            <form onSubmit={handleFormSubmit}>
                <p>Login</p>
                <input required placeholder='Username'/>
                <input required type="password" placeholder='Password'/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Login;