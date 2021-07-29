import React from "react";

const EditButton = (props) => {
  const { showEdit, setShowEdit } = props;
  //console.log(showEdit);

  function editCard() {
    setShowEdit(!showEdit);
  }

  return (
    <div>
      <button type="button" onClick={editCard}>
        Edit
      </button>
    </div>
  );
};

export default EditButton;
