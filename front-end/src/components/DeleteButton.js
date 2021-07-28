import React, { useState } from 'react';
import dummyData from './dummyData';

//random commen

const DeleteButton = (props) => {
    const { index } = props;

    const deleteCard = () => {
        dummyData.splice(index, 1);
        console.log(dummyData);
    }

    return (
        <div>
            <button onClick = {deleteCard}>Delete</button>
        </div>
    )
}

export default DeleteButton;