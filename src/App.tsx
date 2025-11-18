import { useState } from 'react'
import { Link, Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css'
import nba_logo from './assets/nba_logo.jpeg'
import TeamsPage from "./pages/teams_page.tsx";
import PlayersPage from "./pages/players_page.tsx";

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <h1 className="App-header">
                  The Ultimate NBA Database
              </h1>
              <nav className="App-nav">
                  <Link to="/teams" className="App-link">View Teams</Link>
                  <div></div>
                  <Link to="/players" className="App-link">View Players</Link>
              </nav>
              <div></div>
              <img src={nba_logo} alt={"NBA Logo"} className="logo" />


              <Routes>
                  <Route path="/teams" element={<TeamsPage />} />
                  <Route path="/players" element={<PlayersPage />} />
              </Routes>
          </div>
      </BrowserRouter>
  )
}

export default App
