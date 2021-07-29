import React, { useState } from "react";
import styled from "styled-components";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

const StyledPhoto = styled.img`
  width: 100%;
  height: 100%;
  position: "absolute";
`;

const StyledPlant = styled.div`
  max-width: 28%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px;
  border: 2px solid black;
  border-radius: 25px;

  background-color: grey;
  color: black;

  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: lightgrey;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export default function PlantCard(props) {
  const { plant, submit, deletePlant } = props;

  let initialFormValues = {
    nickname: plant.nickname,
    species: plant.species,
    days_between_watering: plant.days_between_watering,
    notes: plant.notes,
    img_url: plant.img_url,
  };

  const [showEdit, setShowEdit] = useState(false);
  const [formValues, setFormValues] = useState(initialFormValues);

  /*   useEffect(() => {
    setFormValues({

    });
    console.log(formValues);
  }, []); */

  const inputChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit(formValues, plant.plant_id);
    setShowEdit(!showEdit);
  };

  const onChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    //console.log(name, value);
    const valueToUse = type === "checkbox" ? checked : value;
    inputChange(name, valueToUse);
  };

  return (
    <StyledPlant className="plant">
      <StyledPhoto
        src={
          plant.img_url !== ""
            ? plant.img_url
            : "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/houseplants-asplenium-nidus-peperomia-and-fittonia-royalty-free-image-946085220-1557179507.jpg?crop=1.00xw:0.668xh;0,0.332xh&resize=640:*"
        }
        alt={plant.nickname}
      />
      {!showEdit ? (
        <StyledDiv className="plantData">
          <h2>{plant.nickname}</h2>
          <p>Species: {formValues.species}</p>
          <p>Days between watering: {plant.days_between_watering}</p>

          {plant.notes ? <p>Notes: {plant.notes}</p> : null}
        </StyledDiv>
      ) : (
        <form onSubmit={onSubmit} className="editPlant-form">
          <StyledDiv className="plantData species-input" id="species-input">
            <label>
              img_url
              <input
                value={formValues.img_url}
                onChange={onChange}
                name="img_url"
                type="text"
              />
            </label>

            <label>
              nickname*
              <input
                value={formValues.nickname}
                onChange={onChange}
                name="nickname"
                type="text"
              />
            </label>

            <label>
              Species:{" "}
              <input
                value={formValues.species}
                onChange={onChange}
                name="species"
                type="text"
              />
            </label>
            <label>
              Days:{" "}
              <input
                value={formValues.days_between_watering}
                onChange={onChange}
                name="days_between_watering"
                type="number"
              />
            </label>
            <label>
              Notes:{" "}
              <input
                value={formValues.notes}
                onChange={onChange}
                name="notes"
                type="text"
              />
            </label>
            <div className="submit">
              <button disabled={false} id="submit-button">
                Submit Edit
              </button>
            </div>
          </StyledDiv>
        </form>
      )}
      <div
        className="bottom-buttons"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <EditButton showEdit={showEdit} setShowEdit={setShowEdit} />
        <DeleteButton plant_id={plant.plant_id} deletePlant={deletePlant} />
      </div>
    </StyledPlant>
  );
}
