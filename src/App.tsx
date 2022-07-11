import React from 'react';
import Router  from './Router/Router';
import './App.scss';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';;

function App() {
  return (
    <div className="App">
      <NavBar/>
        <Router />
      <Footer/>
    </div>
  );
}

export default App;
