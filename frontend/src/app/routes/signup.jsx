import trietImg from "../../assets/triet.jpg";
import flyImg from "../../assets/fly.png";

function Signup() {




  return (
        <form> 
            <h1>Maggie was here</h1>
            <h2>Create new account</h2>
            <input placeholder="Email Address" required /> <br></br>
            <input placeholder="Username" required /> <br></br>
            <input placeholder="Password" required type="PASSWORD"/> <br></br>
            <input placeholder="Comfirm your password" required type="PASSWORD"/> <br></br>
            <button>Submit</button>
            <img src={trietImg} width="500" height="500" alt="triet" />
            <img src={flyImg} width="100" height="100" alt="fly" />

          
        </form>
    )
  
}  
export default Signup