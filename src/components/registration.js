import React from 'react';
import {useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../register.css";
function Registraion(){

    const [name, setName]=useState("");
    const [password, setPassword]=useState("");
    const [email, setEmail]=useState("");

    const navigate = useNavigate();
    let register = () => {
        
        var payload = {
          name:name,
          password:password,
          email:email,
        };
        console.log(payload);
        fetch('http://localhost:4000/newregister', {
          method: "POST",
          headers: {
            Accept: "application/json", "content-type": "application/json",
          },
          body: JSON.stringify(payload),
        })
          .then((response) => {
            return response.json();
          })
          .then((result) => {
            console.log(result);
            if (result === true) {
              
            alert("Registered Successfully");
              
            } else {
              alert("User Already exixts");
            }
          })
          .catch((err) => {
            console.log(err);
          });
      };

      let signin=()=>{
        navigate("/login");
      }
      
return(

    <div class="container">
        <h1>Sign Up</h1>
    <form>
    <div class="mb-3">
      <label for="exampleInputPassword1">User Name</label>
      <input type="text" class="form-control" id="exampleInputPassword1"  value={name} onChange={(event)=>setName(event.target.value)}/>
    </div>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label" >Email address </label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(event)=>setPassword(event.target.value)} />
      </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1"   onChange={(event)=>setEmail(event.target.value)}/>
    </div>
    
    <button type="submit" class="btn btn-primary" onClick={register}>Submit</button>
  </form>
  <button type="submit" class="btn btn-primary" onClick={signin}>Login</button>
  </div>
  );
}export default Registraion;