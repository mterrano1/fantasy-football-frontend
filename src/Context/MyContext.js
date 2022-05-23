import React, { useState, useEffect } from "react";

const MyContext = React.createContext();

const MyProvider = (props) => {
    const [players, setPlayers] = useState([]);
    const [teams, setTeams] = useState([]);
    const [positions, setPositions] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9292/players')
        .then(r => r.json())
        .then(data => setPlayers(data))

        fetch('http://localhost:9292/fantasy-teams')
        .then(r => r.json())
        .then(data => setTeams(data))

        fetch('http://localhost:9292/positions')
        .then(r => r.json())
        .then(data => setPositions(data))
    }, [])

    const handleAddPlayer = (player) => {
        setPlayers([...players, player])
    }

    const handleAddTeam = (team) => {
        setTeams([...teams, team])
    }

    const handleTeamUpdate = (data) => {
        const updatedPlayerTeam = players.map(player => player.id == data.id ? data : player)
        setPlayers(updatedPlayerTeam)
    }

    const handleRetire = (id) => {
        const updatedPlayersArray = players.filter(player => player.id !== id)
        setPlayers(updatedPlayersArray)
    }

    return (
        <MyContext.Provider value={{
            players: players,
            teams: teams,
            positions: positions,
            handleAddPlayer: handleAddPlayer,
            handleAddTeam: handleAddTeam,
            handleTeamUpdate: handleTeamUpdate,
            handleRetire: handleRetire
        }}>
            {props.children}
        </MyContext.Provider>
    )
}

export { MyProvider, MyContext }