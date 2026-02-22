import './Signup.css'

function Signup() {

    const handleFormSubmit = (e) =>{
            e.preventDefault();
            
        }

    return(
        <div className="homebody">
        <div className="signupbody">
            <p>Signup</p>
            <input placeholder='Username'/>
            <input type="password" placeholder='Password'/>
            <button>Submit</button>
        </div>
        </div>
    )

}

export default Signup;