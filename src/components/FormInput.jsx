import React,{ useState, useEffect, useRef } from 'react'
import styles from "./formInput.module.css";
// import axios from 'axios';



const FormInput = () => {
    const [form, setForm] = useState({});
    const [data, setData] = useState([]);    
    const imageUrl = useRef(null);

    const handleOnChange = (e) => {        
        // console.log(e.target.value);
        let { checked, type, name, value, files } = e.target;
        if(type === "checkbox"){
            setForm({
                ...form,
                [name]: checked,
            })
        }else if(type === "file"){
            imageUrl.current = URL.createObjectURL(files[0]);
            setForm({
                ...form,
                [name]: imageUrl,
            })
            // setData({
            //     ...form,
            //     [name]: imageUrl,
            // })
            // console.log(imageUrl);           
        }else{
            setForm({
                ...form,
                [name]: value,
            })
        }  
        // console.log(imageUrl.current);      
    }

   
    const formSubmit = (e) => {
        e.preventDefault();
        setForm(form);
        // console.log(form);        
        setData(form);
        console.log(data);
        getData(); //uloading information on json server
        e.target.reset();
        setForm("")
    }
 
    const getData = () => {
         fetch("http://localhost:8000/userData",{
            method:"POST",
            headers: {
                "content-type":"application/json",
            },
            body:JSON.stringify({
                data: form,                                
            }),
        })
         .then((r)=>{
             return r.json();
         })
         .then((d)=>{
             console.log(d.data);
         })       
         
    };
    

  return (
    <>
      <form onSubmit={formSubmit}>
          <h3>Fill employe Details</h3>
          <div>
              <label>Name:</label><br/>
              <input onChange={handleOnChange} type="text" name="name" placeholder="Employee's name..."/>
          </div>
          <div>
              <label>Age:</label><br/>
              <input onChange={handleOnChange} type="number" name="age" placeholder="Employee's age..."/>
          </div>
          <div>
              <label>Address:</label><br/>              
              <textarea onChange={handleOnChange} name="address" className={styles.address} placeholder="Employee address..."/>
          </div>
          <div>
              <label>Department:</label>
              <select onChange={handleOnChange} name="department">
                  <option value="hr">Humain Resource</option>
                  <option value="developer">Developer</option>
                  <option value="manager">Manager</option>
                  <option value="sde">SDE</option>
              </select>
          </div>
          <div>
              <label>Salary:</label>
              <input onChange={handleOnChange} type="number" name="salary" placeholder='Salary...' />
          </div>
          <div>              
              <label>Marital State:</label>
              <div className={styles.maritial}>
              <span>Maried</span><input onChange={handleOnChange} type="radio" name="ismaried"  value="maried" />
              <span>Unmaried</span><input onChange={handleOnChange} type="radio" name="ismaried" value="unmaried" />
              </div>
          </div>
          <div className={styles.imageDiv}>
              <div>
                <label>Profile Photo:</label><br/>
                <input onChange={handleOnChange} name="photo" type="file" accept='image/png, image/jpeg, application/pdf' />
              </div>
              <div>
                  <img src={imageUrl.current} alt="Profile" />
              </div>
          </div>

          <div className={styles.submitDiv}>
          {/* <input className={styles.submit} type="subimt" value="Submit" /> */}
          <button className={styles.submit}>Submit</button>
          </div>
      </form>      
    </>
  )
}

export default FormInput;



