import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../Context/MyContext';

const AddSelect = ({ player }) => {
    const { teams, handleTeamUpdate } = useContext(MyContext);
    const { id } = player;
    const [fantasyTeam, setFantasyTeam] = useState();
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
            body: JSON.stringify({fantasy_team_id: parseInt(fantasyTeam)}),
        })
        .then(r => r.json())
        .then(data => handleTeamUpdate(data))
        navigate(`/teams/${fantasyTeam}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <select value={fantasyTeam} onChange={e => setFantasyTeam(e.target.value)}>
                <option></option>
                {teamOptions}
            </select>
            <button>Add to team</button>
        </form>
    );
}

export default AddSelect;