import React, { useState, useEffect } from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';

import Login from '../pages/Login/Login';
import Home from '../pages/Home/Home';
import Register from '../pages/Register/Register';
import DashBoard from '../pages/DashBoard/DashBoard';
import Galleries from '../pages/Galleries/Galleries';



const Router = () => {

  const [user, setUser] = useState(false);


  useEffect(() => {
    const u = localStorage.getItem('user');
    u ? setUser(true) : setUser(false);
  }, [])

  useEffect(() => {
    localStorage.setItem('user', user.toString())
  }, [user])

  const __handleAuthentification = () => {
    setUser(true)
  }

  const __handleDesconnection = () => {
    setUser(false)
  }


  return (
    <Routes>

      {!user && (
        <>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login authenticated={() => __handleAuthentification} />} />
          <Route path='/register' element={<Register authenticated={() => __handleAuthentification} />} />
        </>
      )}
      {user && (
        <>
          <Route path='/dashBoard' element={<DashBoard desconnected={() => __handleDesconnection } />} />
          <Route path='/galleries' element={<Galleries desconnected={() => __handleDesconnection } />} />
        </>
      )}
      <Route path='*' element={<Navigate to={user ? "/dashBoard" : "/login"} />} />
    </Routes>
  );
};

export default Router;