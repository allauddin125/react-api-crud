import { useEffect, useState } from 'react'
import { Table, Button } from 'react-bootstrap';
import { getP ,delP} from '../api/Postaxios'
import {NavLink,Link} from 'react-router-dom'

const Home = () => {
    const [data, setData] = useState([])
    const getData = async () => {
        try {
            const res = await getP()
            setData(res.data)
            console.log(res.data)
        }
        catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getData()
    }, [])

    const handledel = async (id) =>{
        console.log(id);
        try{
            const res =  await delP(id)
            if(res.status === 200){
                const newdata = data.filter((nd)=>
                {
                    return nd.id !== id
                })
                setData(newdata);
            }
            else{
                console.log("failed the delete data")
            }
        }
        catch(error){
            console.log(error);
        }
    }
         
    
    return (
        <>
            <NavLink to="/create">Add</NavLink>
            <Table striped bordered hover variant="dark" border={2}>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((d, i) => {
                            const { id, name, age, phone, address } = d;
                            return (
                                <tr key={i}>
                                    <td>{id}</td>
                                    <td>{name}</td>
                                    <td>{age}</td>
                                    <td>{phone}</td>
                                    <td>{address}</td>
                                    <td>
                                        <Button>Read</Button>
                                      <Link to={`/update/${id}`}><Button>Edit</Button></Link>  
                                        <Button onClick={()=>handledel(id)}>Delete</Button>
                                    </td>
                                </tr>
                            )

                        })
                    }


                </tbody>
            </Table>
        </>
    )
}

export default Home
