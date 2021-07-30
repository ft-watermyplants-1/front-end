import React, { useState } from "react";

//Material UI
import Button from "@material-ui/core/Button";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

const DeleteButton = (props) => {
  const { plant_id, deletePlant } = props;
  
  const deleteCard = () => {
    deletePlant(plant_id);
  };

  return (
    <div>
      <Button item xs={12}
        onClick={deleteCard}
        fullWidth
        variant="contained"
        color="primary"
      >
        Delete
      </Button>
    </div>
  );
};

export default DeleteButton;
