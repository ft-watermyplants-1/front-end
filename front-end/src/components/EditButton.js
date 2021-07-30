import React, { useState } from "react";
import Button from "@material-ui/core/Button";

const EditButton = (props) => {
  const { showEdit, setShowEdit } = props;
  console.log(showEdit);

  function editCard() {
    setShowEdit(!showEdit);
  }

  return (
    <div>
      <Button item xs={12}
        type="button" 
        onClick={editCard}
        fullWidth
        variant="contained"
        color="primary"
        >
        Edit
      </Button>
      <p>{showEdit}</p>
    </div>
  );
};

export default EditButton;
