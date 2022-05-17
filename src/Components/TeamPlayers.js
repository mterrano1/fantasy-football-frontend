import React from 'react';
import { Link } from 'react-router-dom';

const TeamPlayers = ({ player }) => {
    const { id, name, team, img, position } = player

    return (
        <li className='teamPlayersLI'>
            <h2>{position.position}</h2>
            <img className='teamImg' src={img} />
            <h3>
                <Link to={`/players/${id}`}>{name} - {team}</Link>
            </h3>
        </li>
    );
}

export default TeamPlayers;