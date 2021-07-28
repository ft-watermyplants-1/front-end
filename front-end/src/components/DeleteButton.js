import React, { useState } from "react";

//random commen

const DeleteButton = (props) => {
  const { plant_id, deletePlant } = props;
  //console.log(plant_id);

  const deleteCard = () => {
    deletePlant(plant_id);
  };

  return (
    <div>
      <button onClick={deleteCard}>Delete</button>
    </div>
  );
};

export default DeleteButton;
