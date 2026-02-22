import './Login.css'
import { Link } from 'react-router-dom'
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
                <div className="loginLeftText">
                    <h1>Welcome to</h1>
                    <h1>STOCKAPP</h1>
                </div>
                    <p>Unlock Professional Market Insights</p>
                    <button>Sign In</button>
                    <button>Create New Account</button>
            </div>

            <div className="loginRight">
                <h1>Sign In</h1>
                <form onSubmit={handleFormSubmit}>
                    <input required placeholder='Enter Email'/>
                    <input required type="password" placeholder='Password'/>
                    <Link to="/forgotpassword">Forgot Password?</Link>
                    <button>Sign In</button>
                </form>
            </div>

        </div>
    )
}

export default Login;