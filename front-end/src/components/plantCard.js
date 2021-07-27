import React from "react";
import styled from "styled-components";

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

export default function PlantCard(props) {
  const { plant } = props;

  return (
    <StyledPlant className="plant">
      <StyledPhoto
        src={
          plant.img_url !== null
            ? plant.img_url
            : "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/houseplants-asplenium-nidus-peperomia-and-fittonia-royalty-free-image-946085220-1557179507.jpg?crop=1.00xw:0.668xh;0,0.332xh&resize=640:*"
        }
        alt={plant.nickname}
      />
      <h2>{plant.nickname}</h2>
      <p>Species: {plant.species}</p>
      <p>Days between watering: {plant.days_between_watering}</p>
      {plant.notes ? <p>Notes: {plant.notes}</p> : null}
    </StyledPlant>
  );
}
