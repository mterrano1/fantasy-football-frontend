import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <NavLink exact to='/'>Home</NavLink>
            <NavLink exact to='/players'>Players</NavLink>
            <NavLink exact to='/players/new'>Add new player</NavLink>
            <NavLink exact to='/teams'>Teams</NavLink>
        </nav>
    );
}

export default NavBar;