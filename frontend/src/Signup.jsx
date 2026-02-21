import './Signup.css'

function Signup() {

    const handleFormSubmit = (e) =>{
            e.preventDefault();
            
        }

    return(
        <div className="signupbody">
            <form onSubmit={handleFormSubmit}>
                <p>Signup</p>
                <input placeholder='Username'/>
                <input type="password" placeholder='Password'/>
                <button>Submit</button>
            </form>
        </div>
    )

}

export default Signup;