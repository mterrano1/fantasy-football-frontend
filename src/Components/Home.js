import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <hr/>
            <h1>Fantasy Football</h1>
            <h4>Welcome to my fantasy football app. To begin, please click the button below to create your fantasy teams!</h4>
            <Link to={'/teams/new'}>
                <button>Create a Team</button>
            </Link>
        </div>
    );
}

export default Home;

