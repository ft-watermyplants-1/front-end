import React, { useState, useEffect } from "react";
//import { Route, Switch, Link } from "react-router-dom";
import PlantCard from "./plantCard";
//import * as yup from "yup";
import styled from "styled-components";
import PlantCreate from "./PlantCreate";
import dummyData from "./dummyData";
import { axiosWithAuth } from "../helper/AxiosWithAuth";
import { useParams } from "react-router";

//import * as yup from "yup";

const StyledPlants = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const initialFormValues = {
  nickname: "",
  species: "",
  days_between_watering: 0,
  notes: "",
  img_url: "",
};

/* const initialFormErrors = {
  nickname: "Please enter your plant's nickname",
  species: "Please enter your plant's species",
  days_between_watering: ""

}; */

export default function Gallery(state) {
  // const { user_id } = useState(user_id);

  const [formValues, setFormValues] = useState(initialFormValues);
  //const [formErrors, setFormErrors] = useState(initialFormErrors);
  //const [disabled, setDisabled] = useState(true);

  const [plants, setPlants] = useState([]);
  const [showPlantCreate, setShowPlantCreate] = useState(false);

  const openPlantCreate = () => {
    setShowPlantCreate(!showPlantCreate);
  };

  const closePlantCreate = () => {
    setShowPlantCreate(false);
  };

  //console.log(plants);

  const getPlants = () => {
    axiosWithAuth()
      .get(`/api/users/${2}/plants`)
      .then((response) => {
        setPlants(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    setFormValues(initialFormValues);
  };

  useEffect(() => {
    getPlants();
  }, []);

  const createPlant = () => {
    const plant = {
      nickname: formValues.nickname.trim(),
      species: formValues.species.trim(),
      days_between_watering: formValues.days_between_watering,
      notes: formValues.notes.trim(),
      img_url: formValues.img_url.trim(),
    };
    console.log(plant);
    setPlants([...plants, plant]);
    setFormValues(initialFormValues);
  };

  const inputChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <div className="gallery">
      <p>Plant Gallery</p>

      <div className="createPlant">
        <button onClick={openPlantCreate} className="md-button create-button">
          Add New Plant!
        </button>

        {showPlantCreate && (
          <PlantCreate
            submit={createPlant}
            values={formValues}
            change={inputChange}
            close={closePlantCreate}
          />
        )}
      </div>

      <StyledPlants>
        {plants.map((plant, idx) => {
          //console.log(plant.nickname);
          return <PlantCard key={plant.plant_id} plant={plant} i = {idx} />;
        })}
      </StyledPlants>
    </div>
  );
}
