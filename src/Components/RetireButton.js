import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../Context/MyContext';

const RetireButton = ({ player }) => {
    const { handleRetire } = useContext(MyContext);
    const { id } = player;
    const navigate = useNavigate();

    //delete selected player
    const handleClick = (e) => {
        e.preventDefault();
        fetch(`http://localhost:9292/players/${id}`, {
            method: "DELETE",
        })
        handleRetire(id)
        navigate('/Players')
    }


    return (
        <button onClick={handleClick}>Retire player</button>
    );
}

export default RetireButton;