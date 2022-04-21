import AddTodo from "./AddTodo";
import DisplayData from"./DisplayTable";
import { useState,useEffect } from "react";
import {Cookies} from 'react-cookie';
import Axios from "axios";


function Home (props) {
  const [data, setData]=useState([]);
  const [Count, setCount]=useState();
  const [update, setupdate] = useState({});
  const cookies = new Cookies();
  const emailCookie=cookies.get("email");
  console.log(emailCookie);

  useEffect(()=>{
      getData();
  },[Count]);
  let getData=()=>{
    const URL=`http://localhost:2000/getTodoList`;
    Axios.get(URL, { params: { emailCookie}})
    .then((response)=>{
      let tododata =response.data;
      setData(tododata);
      console.log(tododata);
    })
    .catch((err)=>{
      console.log(err);
    });
  };
  return (
    <div className="App">
      <div className='mt-5 container'>
      <h2>TODO LIST</h2>
        <div className='row'>
          <div className='col'>
            <AddTodo setCount={setCount} Count={Count} update={update}/>
          </div>
          <div className='col'>
            <DisplayData tododata={data} setCount={setCount} Count={Count} setupdate={setupdate}/>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
