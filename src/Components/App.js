import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Players from './Players';
import Player from './Player';
import PlayerForm from './PlayerForm';
import Teams from './Teams';
import Team from './Team';
import '../App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/players' element={<Players />} />
          <Route exact path='/players/new' element={<PlayerForm />} />
          <Route exact path='/players/:id' element={<Player />} />
          <Route exact path='/teams' element={<Teams /> } />
          <Route exact path='/teams/:id' element={<Team /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
