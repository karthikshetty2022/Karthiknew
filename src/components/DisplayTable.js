import "../style.css"


//Transfering the data to home.js
function DisplayData({tododata, setCount, Count, setupdate}){
let updateTask = (idtodo,task,date)=>{
    setupdate({idtodo,task,date});
};
 
//Deleting the data from table
  let deleteTask =(e)=>{
    console.log(e);
    var idtodo=e;
    console.log(idtodo);
    var data={
        idtodo,
    };
    fetch("http://localhost:2000/deleteData",{
        method:"DELETE",
        headers:{
            Accept:"application/json","content-type":"application/json",
        },
        body:JSON.stringify(data),
        
    });
    window.location.reload(false);
    
};

// display the data in table
    return (
    <div>
    <table  id="table" class="table">
        <thead>
            <tr className="table-warnings">
                    <th scope="col">#</th>
                    <th scope="col">Task</th>
                    <th scope="col">Date</th>
                    <th scope="col">Status</th>
            </tr>
        </thead>
            <tbody>
                {tododata.map((listValue,index)=>{
                    return(
                        
                        <tr key={index}>
                            <td>{listValue.idtodo}</td>
                            <td>{listValue.task}</td>
                            <td>{listValue.date}</td>
                            <td><button className="btn btn-danger" id="delbtn" onClick={()=>deleteTask(listValue.idtodo)}>DELETE</button>
                            <button type="button" class="btn btn-secondary" id="updatebtn" onClick={()=>updateTask(listValue.idtodo,listValue.task,listValue.date)}>UPDATE</button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
    </table>
    
</div>
    
);
}export default DisplayData;