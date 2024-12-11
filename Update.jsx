import {useEffect,useState} from 'react'
import {NavLink,useParams,useNavigate} from 'react-router-dom'
import axios from 'axios'
import {upP} from '../api/Postaxios'

const Update = () => {

  // const [data,setData] = useState([]);
  const {id} = useParams();
  const [val,setVal] = useState({
    name:'',
    age:'',
    phone:'',
    address:''
  })
  
  
  useEffect(()=>{
    axios.get('http://localhost:3000/user/' + id)
    .then(res => setVal(res.data))
    .catch(err => console.log(err))
  },[])

  const update = async () =>{
    try{
      const res = upP(id,val)
    
    }
    catch(error){

    }
  }
  const navigate = useNavigate();
  const handleupdate = (e) =>{
      e.preventDefault()
      update()
      navigate("/");

  }
  return (
    <div>
      <h1>Edit the User</h1>
      <form onSubmit={handleupdate}>
        <label htmlFor="">Name</label>
        <input type="text" value={val.name} onChange={(e)=>setVal({...val, name: e.target.value})}/>
        <br/><br/>
        <label htmlFor="">Age</label>
        <input type="number" value={val.age} onChange={(e) => setVal({...val, age: e.target.value})}/>
        <br/><br/>
        <label htmlFor="">Phone</label>
        <input type="number" value={val.phone} onChange={(e)=>setVal({...val, phone: e.target.value})}/>
        <br/><br/>
        <label htmlFor="">Address</label>
        <input type="text" value={val.address} onChange={(e)=>setVal({...val, address: e.target.value})}/>
        <br/><br/>
        <NavLink to="/"><button>Back</button></NavLink>
        <button type="submit">Save</button>
      </form>
    </div>
  )
}

export default Update
