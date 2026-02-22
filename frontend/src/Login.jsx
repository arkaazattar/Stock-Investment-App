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

            <div className="loginLeft">
                <h1>Welcome to</h1>
                <h1>STOCKAPP</h1>
                <p>Unlock Professional Market Insights</p>

                <button>Sign In</button>
                <button>Create New Account</button>
            </div>

            <div className="loginRight">
                <h1>Sign In</h1>
                <form onSubmit={handleFormSubmit}>
                    <input required placeholder='Enter Email'/>
                    <input required type="password" placeholder='Password'/>
                    <p>Fogot Password?</p>
                    <button>Sign In</button>
                </form>
            </div>

        </div>
    )
}

export default Login;