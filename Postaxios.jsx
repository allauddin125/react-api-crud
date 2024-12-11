import axios from 'axios'

const api = axios.create({
    baseURL:"http://localhost:3000"
})

export const  getP = ()=>{
    return api.get("/user")
}

export const delP =(id) =>{
    return api.delete(`/user/${id}`)
}

export const postP = (value) =>{
    return api.post("/user",value)
}

export const upP = (id,val) =>{
    return api.put(`/user/${id}`,val)
}