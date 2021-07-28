import React from "react";
import { connect } from "react-redux";
import Plants from "../components/Plants";
import {useHistory} from "react-router-dom";

const PlantList = (props) =>{
    console.log(props);
    const {push} = useHistory();

    return(
        <div>
            {props.events && props.events.map(event=>{
                return <Plants key={event.plant_id} event={event} push={push}/>
            })}
        </div>
    )
}
export default connect(state=>{
    return{
        events: state.events
    }
})(PlantList);