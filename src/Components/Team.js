import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { MyContext } from '../Context/MyContext';
import { Link } from 'react-router-dom';
import TeamPlayers from './TeamPlayers';

const Team = () => {
    const { teams, players } = useContext(MyContext)
    const { id } = useParams();

    //filter players that belong to specific fantasy team
    const filteredPlayers = players.filter(player => player.fantasy_team_id == id)

    //sort players according to position id
    const sortedPlayers = filteredPlayers.sort((a, b) => (
        a.position_id < b.position_id ? -1 : 1
    ))

    const displayedPlayers = sortedPlayers.map(player => (
        <TeamPlayers key={player.id} player={player} />
    ));

    //filter fantasy teams that belong to selected fantasy team params
    const filteredTeams = teams.filter(team => team.id == id)

    return (
        <div>
            <hr/>
            <h1>{filteredTeams[0] ? filteredTeams[0].name : 'Team Name'}</h1>
            <Link to={'/Players'}>
                <button>Add players</button>
            </Link>
            <ul className='teamOL'>
                {displayedPlayers}
            </ul>
        </div>
    );
}

export default Team;