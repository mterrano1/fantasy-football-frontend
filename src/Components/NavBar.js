import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <NavLink exact to='/'>Home</NavLink>
            <NavLink exact to='/players'>Players</NavLink>
            <NavLink exact to='/players/new'>Add new player</NavLink>
            <NavLink exact to='/teams'>Teams</NavLink>
            <NavLink exact to='/teams/new'>Add new team</NavLink>
        </nav>
    );
}

export default NavBar;