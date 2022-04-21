import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import "../stylelogin.css";

function Login(){
  const [email,setEmail] =useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    setTimeout(() => {
      document.cookie = "user=; expires=Thu, 04 Apr 2022 12:05:00 UTC; path=/;";
    })
  }
  let signIn =(e)=>{
    e.preventDefault();
    var data = {
      email,
      password,
    };
    console.log(data);
    fetch('http://localhost:4000/login', {
      method: "POST",
      headers: {
        Accept: "application/json", "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log(result);
        if (result === true) {
          setCookie("email", email, 1);
          navigate("/home");
        } else {
          alert("Invalid")
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
 
let signUp = () =>{
  console.log("Sign Up");
  navigate("/registration");
}
  return (
    <div class="container bg-dark">
    <div className='="Login bg-dark'>
      <div className='form-class-body bg-dark'>
        <form className='form-class bg-dark text-light'>
          <p className='"h2 text-light'>LOGIN FORM</p><br />
          <div className='col-md-6'>
            <label for="inputEmail4" className='form-label'>Email</label>
            <input type="text" className='form-control' id="email" onChange={(e)=> setEmail(e.target.value)}></input>
          </div>
          <br>
          </br>
          <div className='col-md-6'>
            <label for="inputEmail4" className='form-label'>Password</label>
            <input type="password" className='form-control' id="email" onChange={(e)=> setPassword(e.target.value)}></input>
          </div><br></br>
          <div class="col-12">
            <button type="submit" className='btn btn-primary btn-lg submit-btn' onClick={signIn}>signIn</button>
          </div>
        </form>
        <br></br>
        <p className='h5 text-light sign-up-link'><button className='sign-up-btn bg-dark text-primary' data-bs-toggle="model" data-bs-target="#staticBackdrop" onClick={signUp}>Don't have an account??<span>Sign-up</span></button></p>
      </div>
    </div>
    </div>
  )
}export default Login;