import React, { useState } from 'react';
import { Contact, Navbar, Sidebar, TheSandBox, AboutAlyx } from './components';
import { Home, About, Community, Survey, Market } from './pages';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import './App.css'

const App = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <Router>
        <Navbar toggleMenu={toggleMenu} setToggleMenu={setToggleMenu}/>
        <Sidebar toggleMenu={toggleMenu}/>
         
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/community' element={<Community />}/>
          <Route path='/about/*' element={<About />}/>
          <Route path='/survey' element={<Survey />}/>
          <Route path='/market' element={<Market />}/>
        </Routes>
        <Contact />
    </Router>
  )
}

export default App