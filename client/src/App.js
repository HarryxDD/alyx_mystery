import React, { useState, useEffect } from 'react';
import { Contact, Navbar, Sidebar } from './components';
import { Home, About, Community, Registration, Market, ProductInfo, NewsBlog, Game, Survey } from './pages';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Link
} from 'react-router-dom';

import './App.css'

const App = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  function ScrollToTop() {

    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    console.log(pathname)

    return null;
  }

  return (
    <Router>
        <ScrollToTop />

        <Navbar toggleMenu={toggleMenu} setToggleMenu={setToggleMenu}/>
        <Sidebar toggleMenu={toggleMenu} setToggleMenu={setToggleMenu}/>
         
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/community' element={<Community />}/>
          <Route path='/about/*' element={<About />}/>
          <Route path='/registration' element={<Registration />}/>
          <Route path='/market' element={<Market />}/>
          <Route path='/newsblog' element={<NewsBlog />} />
          <Route path='/productinfo' element={<ProductInfo />} />
          <Route path='/game' element={<Game />} />
          <Route path='/survey' element={<Survey />} />
        </Routes>

        <Contact />
    </Router>
  )
}

export default App