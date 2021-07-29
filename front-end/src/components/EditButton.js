import React, { useState } from "react";

const EditButton = (props) => {
  const { showEdit, setShowEdit } = props;
  console.log(showEdit);

  function editCard() {
    setShowEdit(!showEdit);
  }

  return (
    <div>
      <button type="button" onClick={editCard}>
        Edit
      </button>
      <p>{showEdit}</p>
    </div>
  );
};

export default EditButton;
