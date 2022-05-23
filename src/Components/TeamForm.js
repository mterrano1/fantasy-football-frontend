import React, { useContext, useState } from 'react';
import { MyContext } from '../Context/MyContext';

const TeamForm = () => {
    const { handleAddTeam } = useContext(MyContext);
    const [newTeam, setNewTeam] = useState({name: ''});

    const handleSubmit = () => {
        fetch('http://localhost:9292/fantasy-teams', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newTeam),
        })
        .then(r => r.json())
        .then(data => handleAddTeam(data))
    }

    const handleChange = (e) => {
        setNewTeam({...newTeam, [e.target.name]: e.target.value})
    }


    return (
        <div>
            <hr/>
            <h1>Create New Team</h1>
            <form onSubmit={handleSubmit} className='form'>
                <label>Team Name</label>
                    <input type='text' name='name' onChange={handleChange} placeholder='Input team name'/>
                <button type='submit'>Create</button>
            </form>
        </div>
    );
}

export default TeamForm;