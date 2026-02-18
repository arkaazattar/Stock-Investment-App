import './Signup.css'

function Signup() {

    const handleFormSubmit = (e) =>{
            e.preventDefault();
            
        }

    return(
        <form onSubmit={handleFormSubmit}>
            <p>Signup</p>
            <input placeholder='Username'/> <br/>
            <input type="password" placeholder='Password'/> 
        </form>
    )

}

export default Signup;