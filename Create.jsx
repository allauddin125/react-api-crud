import {useState} from 'react'
import {NavLink,useNavigate} from 'react-router-dom'
import {postP} from '../api/Postaxios'
const Create = () => {
    const [value,setValue] = useState({
        name:"",
        age:"",
        phone:"",
        address:""
    })
    
    const navigate = useNavigate(); 
    const adddata =  async() =>{
      try{
       const res = await postP(value);
       if(res.status === 201){
            setValue({name:'',age:'',phone:'',address:""})
       }
      }catch(error){

      }
    }

    const handleform = (e) =>{
        e.preventDefault();
        adddata()
        navigate('/');
    }
  return (
    <div>
      <h1>Add the data</h1>
      <form onSubmit={handleform}>
        <label>Name</label>
        <input type="text" onChange={(e) => setValue({...value, name: e.target.value})}/>
        <br/>  <br/>
        <label>Age</label>
        <input type="number" onChange={(e) => setValue({...value, age: e.target.value})}/>
        <br/>  <br/>
        <label>Phone</label>
        <input type="number" onChange={(e) => setValue({...value, phone: e.target.value})}/>
        <br/>  <br/>
        <label>Adderss</label>
        <input type="text" onChange={(e)=> setValue({...value, address: e.target.value})}/>
        <br/>  <br/>
        <button type="submit"> Save</button>
        <NavLink to="/">
            <button>Back</button>
        </NavLink>
        
      </form>
    </div>
  )
}

export default Create
