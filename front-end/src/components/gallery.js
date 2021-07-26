import React, { useState, useEffect } from "react";
//import { Route, Switch, Link } from "react-router-dom";
import PlantCard from "./plantCard";
//import * as yup from "yup";
import axios from "axios";

import dummyData from "./dummyData";

export default function Gallery(props) {
  const { user_id } = props;

  const [plants, setPlants] = useState(dummyData);

  console.log(plants);

  // const createPlants = (plant) => {
  //   axios
  //     .get("https://api/users/:{user_id}/plants")
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //   setFormValues(initialFormValues);
  // };

  // const {
  //   plant_id,
  //   nickname,
  //   species,
  //   days_between_watering,
  //   notes,
  //   img_url,
  //   user_id,
  // } = props;

  return (
    <div className="plants">
      <p>Plant Gallery</p>
      {plants.map((plant) => {
        console.log(plant.nickname);
        return <PlantCard plant={plant} />;
      })}
    </div>
  );
}
