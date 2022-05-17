import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../Context/MyContext';

const DropButton = ({ player }) => {
    const { handleTeamUpdate } = useContext(MyContext);
    const {id, fantasy_team_id} = player;
    const navigate = useNavigate();

    //drops selected player from fantasy team
    const handleClick = (e) => {
        e.preventDefault();
        fetch(`http://localhost:9292/players/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({fantasy_team_id: null}),
        })
        .then(r => r.json())
        .then(data => handleTeamUpdate(data))
        navigate(`/teams/${fantasy_team_id}`)
    }

    return (
        <button onClick={handleClick}>Drop from team</button>
    );
}

export default DropButton;