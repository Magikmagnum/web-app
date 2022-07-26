import React, { useState } from 'react';
import Router from './Router/Router';
import './App.scss';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import SideBar from './components/SideBar/SideBar';


function App() {

  const [sideBarIsOpen, setSideBarIsOpen] = useState(false);

  const toggleSideBar = () => {
    setSideBarIsOpen(sideBarIsOpen => !sideBarIsOpen)
  }

  return (
    <div className="App">
      <header>
        <SideBar isOpen={sideBarIsOpen} toggle={toggleSideBar} />
        <NavBar toggle={toggleSideBar} />
      </header>
      <Router />
      <Footer />
    </div>
  );
}

export default App;
