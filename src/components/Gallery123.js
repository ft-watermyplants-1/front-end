import React, { useState, useEffect } from "react";
import PlantCard from "./PlantCard";
import styled from "styled-components";
import PlantCreate from "./PlantCreate";
import { axiosWithAuth } from "../helper/AxiosWithAuth";

// Material UI
import Button from "@material-ui/core/Button";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(105, 149, 114)",
    },
    secondary: {
      main: "#8a5a44",
    },
  },
});

const Div = styled.div`
background-image: "https://images.unsplash.com/photo-1487700160041-babef9c3cb55?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGxhbnQlMjB3YWxscGFwZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";
`

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
  const user_id = localStorage.getItem("user_id")

  const [formValues, setFormValues] = useState(initialFormValues);

  const [plants, setPlants] = useState([]);
  const [showPlantCreate, setShowPlantCreate] = useState(false);

  const openPlantCreate = () => {
    setShowPlantCreate(!showPlantCreate);
  };

  const closePlantCreate = () => {
    setShowPlantCreate(false);
  };

  const getPlants = () => {
    axiosWithAuth()
      .get(`/api/plants`)
      .then((response) => {
        setPlants(
          response.data.sort((a, b) => (a.plant_id < b.plant_id ? -1 : 1))
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getPlants();
  }, []);

  const createPlant = () => {
    const plant = {
      nickname: formValues.nickname.trim(),
      species: formValues.species.trim(),
      days_between_watering: parseInt(formValues.days_between_watering),
      notes: formValues.notes.trim(),
      img_url: formValues.img_url.trim(),
    };

    axiosWithAuth()
      .post(`/api/plants`, plant)
      .then((response) => {
        setPlants([...plants, response.data]);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    setFormValues(initialFormValues);
  };

  const editPlant = (plant, plant_id) => {
    /*     const plant = {
      nickname: formValues.nickname.trim(),
      species: formValues.species.trim(),
      days_between_watering: parseInt(formValues.days_between_watering),
      notes: formValues.notes.trim(),
      img_url: formValues.img_url.trim(),
    }; */
    console.log(plant, plant_id);
    plant.days_between_watering = parseInt(plant.days_between_watering);
    axiosWithAuth()
      .put(`/api/plants/${plant_id}`, plant )
      .then((response) => {
        console.log(response.data);
        getPlants();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const deletePlant = (plant_id) => {
    axiosWithAuth()
      .delete(`/api/plants/${plant_id}`)
      .then((response) => {
        getPlants();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const inputChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <ThemeProvider theme = {theme}>
    <Div className="gallery">
      <Typography variant="h3" style={{margin: "2%"}}>Plant Gallery</Typography>

      <div className="createPlant" style={{width: "25%", display: "flex", marginLeft: "37.5%", paddingBottom: "2%", backgroundImage: "https://images.unsplash.com/photo-1487700160041-babef9c3cb55?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGxhbnQlMjB3YWxscGFwZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"}}>
        <Button onClick={openPlantCreate} className="md-button create-button" 
            fullWidth
            variant="contained"
            color="primary">
          Add New Plant!
        </Button>
      </div>
      <div>
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
        {plants.map((plant) => {
          return (
            <PlantCard
              key={plant.plant_id}
              plant={plant}
              submit={editPlant}
              deletePlant={deletePlant}
            />
          );
        })}
      </StyledPlants>
    </Div>
    </ThemeProvider>
  );
}
