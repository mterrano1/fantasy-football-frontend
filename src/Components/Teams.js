import React, { useContext, useState } from 'react';
import { MyContext } from '../Context/MyContext';
import { Link } from 'react-router-dom';

const Teams = () => {
    const { teams } = useContext(MyContext);

    return (
        <div>
            <hr/>
            <h1>Fantasy League</h1>
                <ol className='teamOL'>
                    {teams.map((team) => (
                        <li key={team.id} className='teamsLI'>
                            <Link to={`/teams/${team.id}`}>
                                <h4>{team.name}</h4>
                            </Link>
                        </li>
                    ))}
                </ol>
        </div>
    );
}

export default Teams;