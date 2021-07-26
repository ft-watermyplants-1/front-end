import React from "react";
import styled from "styled-components";

const StyledPlant = styled.div`
  max-width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px;
  border: 2px solid black;
  border-radius: 25px;

  background-color: grey;
  color: ${(props) => props.theme.white};

  @media ${({ theme: { breakpointMobile } }) => breakpointMobile} {
    width: initial;
  }

  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: ${(props) => props.theme.secondaryColor};
  }

  button {
    background-color: ${(props) => props.theme.tertiaryColor};
    &:hover {
      transform: scale(1.1);
    }
  }
`;

export default function PlantCard(props) {
  const { plant } = props;

  return (
    <StyledPlant className="plant">
      <img
        src={
          plant.img_url !== null
            ? plant.img_url
            : "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/houseplants-asplenium-nidus-peperomia-and-fittonia-royalty-free-image-946085220-1557179507.jpg?crop=1.00xw:0.668xh;0,0.332xh&resize=640:*"
        }
        alt={plant.nickname}
        class="w-100"
      />
      <p>{plant.plant_id}</p>
      <h2>{plant.nickname}</h2>
    </StyledPlant>
  );
}
