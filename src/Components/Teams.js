import React, { useContext, useState } from 'react';
import { MyContext } from '../Context/MyContext';
import { Link } from 'react-router-dom';

const Teams = () => {
    const { teams, players } = useContext(MyContext);
    const [points, setPoints] = useState([]);
    let x = 1;

    const simulatePoints = () => {
        const pointsArray = [...points];
        //generate random points between 0 and 30 for each player
        const playerTest = players.map(player => (
            Math.floor(Math.random() * 30)
        ));
        //add newly simulated points to existing simulated points
        const sumArray = playerTest.map((points, index) => (
            points + pointsArray[index]
        ));
        points.length != 0 ? setPoints(sumArray) : setPoints(playerTest)
    }

    // const simulatePoints = () => {
    //     const pointsArray = [...points];
    //     //generate random points between 0 and 30 for each player
    //     const playerTest = players.map(player => (
    //         Math.floor(Math.random() * 30)
    //     ));
    //     //add newly simulated points to existing simulated points
    //     const sumArray = playerTest.map((points, index) => (
    //         points + pointsArray[index]
    //     ));
    //     points.length != 0 ? setPoints(sumArray) : setPoints(playerTest)
    // }
    

    return (
        <div>
            <hr/>
            <h1>Standings</h1>
                <button onClick={simulatePoints}>Simulate</button>
                <ol className='teamOL'>
                    {teams.map((team) => (
                        <li key={team.id} className='teamsLI'>
                            Rank: {x++}
                            <Link to={`/teams/${team.id}`}>
                                <h4>{team.name}</h4>
                            </Link>
                            Total Points: 
                        </li>
                    ))}
                </ol>
        </div>
    );
}

export default Teams;