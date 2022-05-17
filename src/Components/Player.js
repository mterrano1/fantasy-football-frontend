import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { MyContext } from '../Context/MyContext';
import PlayerInfo from './PlayerInfo';

const Player = () => {
    const { id } = useParams();
    const { players } = useContext(MyContext);

    //find player that matches params id
    const findPlayer = players.filter(player => player.id == id)

    const displayedPlayer = findPlayer.map(player => (
        <PlayerInfo key={player.id} player={player} />
    ));


    return (
        <div className='playerContainer'>
            {displayedPlayer}
        </div>
    );
}

export default Player;