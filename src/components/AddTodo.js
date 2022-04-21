import { useEffect, useState } from 'react';
import axios from 'axios';
import "../style.css";
import {Cookies, useCookies} from 'react-cookie';
import { useNavigate } from 'react-router-dom';



function AddTodo({setCount, Count, update}) {

  const [removeCookie]=useCookies(["email"]);
  const navigate = useNavigate();
  const [idtodo, setidtodo]=useState("");
  const [task,settodoTask]=useState("");
  const [date,settodoDate]=useState("");

  const cookies = new Cookies();
  const emailCookie=cookies.get("email");

//Calling the update function.
useEffect(()=>{
  if(update.idtodo === undefined){
    return;
  }else{
    
    updatedata(update);
  
  }
},[update]);

let updatedata = (update) =>{
  console.log("dgfskhd");
  debugger;
  console.log(update.idtodo,update.task,update.date);
  setidtodo(update.idtodo);
  settodoTask(update.task);
  settodoDate(update.date);
};

let updatedata1 = (e)=>{
  e.preventDefault();
  
  var payload = {
    idtodo,
    task,
    date,
  };
  fetch("http://localhost:2000/updateData",{
        method:"PATCH",
        headers:{
            Accept:"application/json","content-type":"application/json",
        },
        body:JSON.stringify(payload),
    })
    .then(function (response){
      console.log(response);
      setCount(Count + 1);
      window.location.reload(false);
    })
    .catch(function (error){
      console.log(error);
    });
};


//Adding the data to table.

 let AddData =(e)=>{
   e.preventDefault();
    axios.post('http://localhost:2000/addIntoTodoList', {
    task:task,
    date:date,
    email:emailCookie,
  })
  .then(function(response) {
    console.log(response);
    window.location.reload(false);
  })
  .catch(function(error){
    console.log(error);
 });
};
let logout=()=>{
  document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    navigate("/login");
}
return (
  <div>
  <button type="button" class="btn btn-secondary" id="updatebtn" onClick={logout}>Logout</button>
    <form onSubmit={()=>this.handleSubmit()}>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Task</label>
        <input type="text" class="form-control" id="todoTask" value={task} onChange={(event)=>settodoTask(event.target.value)}/>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Date</label>
        <input type="date" class="form-control" id="todoDate" value={date}  onChange={(event)=>settodoDate(event.target.value)}/>
      </div>
      <button type="submit" class="btn btn-primary" onClick={AddData}>ADD</button>
      <button type="submit" class="btn btn-primary" onClick={updatedata1}>Update</button>
    </form>
    </div>
  );
}
export default AddTodo;