import React, { useContext, useState } from 'react';
import { MyContext } from '../Context/MyContext';

const PlayerForm = () => {
    const { players, positions } = useContext(MyContext);
    const positionArray = [...positions].slice(0, -1)
    const [newPlayer, setNewPlayer] = useState({
        name: '',
        team: '',
        img: '',
        position_id: ''
    });
    

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(newPlayer)
    }

    const handleChange = (e) => {
        setNewPlayer({
            ...newPlayer, [e.target.name]: e.target.value
        })
    }

    //filter out the defense position
    const filteredPlayers = players.filter(player => player.position_id != 6) 

    //remove duplicate team names
    const uniqueTeamsArray = [... new Set(filteredPlayers.map(player => player.team))]

    //dropdown team options
    const teamOptions = uniqueTeamsArray.map(team => (
        <option key={team.id} value={team.id}>{team}</option>
    ));

    //dropdown position options
    const positionOptions = positionArray.map(position => (
        <option key={position.id} value={position.position_id}>{position.position}</option>   
    ));

    return (
        <div>
            <hr/>
            <h1>Add Player</h1>
            <form onSubmit={handleSubmit} className='form'>
                <label>Name</label><br/>
                    <input type='text' name='name' onChange={handleChange} /><br/>
                Team<br/>
                <select name='team' onChange={handleChange}>
                    {teamOptions}
                </select><br/>
                <label>Image</label><br/>
                    <input type='text' name='img' onChange={handleChange} /><br/>
                Position<br/>
                <select name='position_id' onChange={handleChange}>
                    {positionOptions}
                </select><br/>
                <input type='submit'/>
            </form>
        </div>
    );
}

export default PlayerForm;