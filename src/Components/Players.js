import React, { useContext, useState } from 'react';
import { MyContext } from '../Context/MyContext';
import { Link } from 'react-router-dom';

const Players = () => {
    const { players } = useContext(MyContext);
    const [available, setAvailable] = useState(true);

    //sort all players by position
    const sortedPlayers = players.sort((a, b) => (
        a.position_id < b.position_id ? -1 : 1
    ))

    //filter to display players that don't belong to a fantasy team
    const filteredPlayers = sortedPlayers.filter(player => !player.fantasy_team_id)

    //switch displayed players between all players and free agents
    const displayedPlayers = available ? sortedPlayers : filteredPlayers

    const handleClick = () => {
        available ? setAvailable(false) : setAvailable(true)    
    }

    return (
        <div>
            <hr/>
            <h1>Players</h1>
            <button onClick={handleClick}>{available ? 'Free Agents' : 'All'}</button>
            <ul className='playerCards1'>
                {displayedPlayers.map(player => (
                    <li className='playerCard1' key={player.id}>
                        <Link to={`/players/${player.id}`}>
                            <img className='playersImg' src={player.img} />
                            <h4>{player.name}</h4>
                            <h5>{player.position.position}</h5>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Players;