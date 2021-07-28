import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import { axiosWithAuth } from "../helper/AxiosWithAuth";
import axios from 'axios'


const PlantPage = (props)=>{
    const {user_id} = useParams();

    const [plants, setPlants] = useState();

    useEffect(()=>{
        axios.get(`https://ft-watermyplants-1.herokuapp.com/api/users/:${user_id}/plants`)
        .then(res=>{
            setPlants(res.data);
            console.log(res.data);
        })
    },[props.state])

    return (
        <div>{plants &&
            <div>
                <h2>{`${plants.plant_id} ${plants.nickname} ${plants.species} ${plants.days_between_watering} ${plants.notes} ${plants.img_url} ${plants.user_id}`}
                    <br></br>
                </h2>
            </div>}
            <button onClick={()=>props.history.push("/")}>Done</button>
        </div>
        
    )
}


export default connect(state=>{
    return{state}
})(PlantPage);