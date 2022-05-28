import React,{ useEffect, useState } from 'react';
import axios from 'axios';
import styles from './table.module.css';

const Table = () => {
    const [data, setData] = useState([]);


   useEffect(()=>{
    getData();
   },[])

   const getData = () => {
    axios.get(`http://localhost:8000/userData`)
    .then((res) => {
        // console.log(res.data);
        setData(res.data);
    })
   }

   const filterDepartment = () => {
     console.log("filter");
     axios.get(`http://localhost:8000/userData`)
    .then((res) => {
        // console.log(res.data);
        setData(res.data);
    })
   }

   const accending = () => {
     console.log("accending");

   }

   const decending = () => {
     console.log("decending");

   }

   const reset = () => {
     console.log("reset");

   }

  return (
    <div>
      <h1>Employe Data</h1>
       <div className={styles.buttons}>
          <button onClick={filterDepartment} >Filter by Department</button>
          <button onClick={accending} >Accending</button>
          <button onClick={decending} >Decending</button>
          <button onClick={reset} >Reset</button>
        </div>      
        <div className={styles.tableDiv}>           
            <table>         
                  <thead>                 
                  <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Department</th>
                    <th>salary</th>
                    <th>Address</th>
                    <th>Photo</th> 
                    <th>Delete</th>                        
                  </tr>                   
                  </thead>
                  <tbody>                                
                      {data.map((e)=>(                    
                        <tr key={e.id}>
                          <td>{e.data.name}</td>
                          <td>{e.data.age}</td>
                          <td>{e.data.department}</td>
                          <td>{e.data.salary}</td>
                          <td>{e.data.address}</td>
                          <td> <img src={e.data.photo.current} alt="" /> </td>
                          <td><button>✔</button></td>
                        </tr>
                      ))}               
                  </tbody>
              </table>     
          
        </div>
    </div>
  )
}

export default Table;


/*
{name: 'Roushan Gupta', age: '19', address: 'shahpurpatory', department: 'developer', salary: '60000', …}


address: "shahpurpatory"
age: "19"
department: "developer"
name: "Roushan Gupta"
photo: {current: 'blob:http://localhost:3001/8d9bfa1f-874b-403e-b485-4110a83eb46a'}
salary: "60000"

*/
