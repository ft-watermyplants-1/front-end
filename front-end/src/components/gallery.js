import React, { useState, useEffect } from "react";
//import { Route, Switch, Link } from "react-router-dom";
import PlantCard from "./plantCard";
//import * as yup from "yup";
import axios from "axios";
import styled from "styled-components";

import dummyData from "./dummyData";

const StyledPlants = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

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

  return (
    <div className="gallery">
      <p>Plant Gallery</p>
      <StyledPlants>
        {
          plants.map((plant, idx) => {
              console.log(plant.nickname);
              return <PlantCard plant = {plant} index = {idx} key = {idx} />;
          })
        }
      </StyledPlants>
    </div>
  );
}
