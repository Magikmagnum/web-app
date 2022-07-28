import React, { useState } from 'react';
import Router from './Router/Router';
import './App.scss';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import SideBar from './components/SideBar/SideBar';
import { Provider } from "react-redux";
import { store } from "./store/store"



function App() {

  const [sideBarIsOpen, setSideBarIsOpen] = useState(false);

  const toggleSideBar = () => {
    setSideBarIsOpen(sideBarIsOpen => !sideBarIsOpen)
  }

  return (
    <Provider store={store}>
      <div className="App">

          <SideBar isOpen={sideBarIsOpen} toggle={toggleSideBar} />
          <NavBar toggle={toggleSideBar} />

        <Router />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
