import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../Context/MyContext';

const AddSelect = ({ player }) => {
    const { teams, handleTeamUpdate } = useContext(MyContext);
    const { id } = player;
    const [fantasyTeamId, setFantasyTeamId] = useState();
    const navigate = useNavigate();

    //create option names and values
    const teamOptions = teams.map(team => <option key={team.id} value={team.id}>{team.name}</option>)

    //adds player to selected fantasy team
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:9292/players/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({fantasy_team_id: parseInt(fantasyTeamId)}),
        })
        .then(r => r.json())
        .then(data => handleTeamUpdate(data))
        navigate(`/teams/${fantasyTeamId}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <select value={fantasyTeamId} onChange={e => setFantasyTeamId(e.target.value)}>
                <option></option>
                {teamOptions}
            </select>
            <button>Add to team</button>
        </form>
    );
}

export default AddSelect;