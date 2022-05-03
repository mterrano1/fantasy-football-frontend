import React, { useState, useEffect } from "react";

const PlayersContext = React.createContext();

const PlayersProvider = ({children}) => {
    const [players, setPlayers] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/players')
        .then(r => r.json())
        .then(data => setPlayers(data))
    }, [])

    return (
        <PlayersContext.Provider value={{ players, setPlayers }}>
            {children}
        </PlayersContext.Provider>
    )
}

export { PlayersContext, PlayersProvider }