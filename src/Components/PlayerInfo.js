import React, { useContext, useState } from 'react';
import { MyContext } from '../Context/MyContext';
import AddSelect from './AddSelect';
import DropButton from './DropButton';
import RetireButton from './RetireButton';

const PlayerInfo = ({ player }) => {
    const { teams } = useContext(MyContext);
    const {img, name, points, position, team, fantasy_team_id} = player;

    //find which fantasy team player belongs to
    const findTeam = teams.filter(team => team.id == fantasy_team_id)


    return (
        <div className='playerCard'>
            <h3>{findTeam[0] ? findTeam[0].name : 'Free Agent'}</h3>
            <img src={img} />
            <h1>{name}</h1>
            <h2>{position.position} - {team}</h2>
            {findTeam[0] ? <DropButton player={player} /> : <AddSelect player={player} />}<br/><br/>
            {/* <button>Retire</button> */}
            <RetireButton player={player} />
        </div>
    );
}

export default PlayerInfo;