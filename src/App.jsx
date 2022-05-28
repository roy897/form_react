import React,{ useState } from "react";
import './App.css';
import FormInput from './components/FormInput';
import Table from "./components/Table";


function App() {
  const [toggle, setToggle] = useState(true);
  // console.log(toggle);
  return (
    <>
    {toggle ? <FormInput/> : <Table/>}  
    
      {toggle ? <button onClick={()=>setToggle(!toggle)}>View Details</button> : <button onClick={()=>setToggle(!toggle)}>Fill form</button>}
    </>
  );
}

export default App;
