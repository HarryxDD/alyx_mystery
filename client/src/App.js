import React, { useState } from 'react';
import { Contact, Navbar, Sidebar } from './components';
import { Home, About } from './pages';

import './App.css'

const App = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div>
        <Navbar toggleMenu={toggleMenu} setToggleMenu={setToggleMenu}/>
        <Sidebar toggleMenu={toggleMenu}/>
        <div>
          <Home />
          {/* <About /> */}
        </div>
        <Contact />
    </div>
  )
}

export default App