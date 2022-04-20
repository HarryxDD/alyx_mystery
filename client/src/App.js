import React, { useState } from 'react';
import { Home, About, Community, Market } from './pages';
import { Contact, Navbar, Sidebar, TheSandBox, AboutAlyx } from './components';

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
          <Route path='/market' element={<Market />}/>
        </Routes>
        <Contact />
    </Router>
  )
}

export default App