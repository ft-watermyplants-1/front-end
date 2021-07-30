import axios from "axios";

export const axiosWithAuth = ()=>{
    const token = localStorage.getItem("authorization");
    return axios.create({
        headers:{
            authorization:token
        },
        baseURL:"https://ft-watermyplants-1.herokuapp.com"
    })
}