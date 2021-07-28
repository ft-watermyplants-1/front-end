import React from "react";

const Plants = (props)=>{
    const {event, push} = props;

    return (
        <div>
                <h1>{event.plant_id}</h1>
                <button onClick={()=>push(`/gallery/${event.plant_id}`)}>View</button>
        </div>

        
    )
}


export default Plants;