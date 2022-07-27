import React from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { InitialState } from "../store/auth";

import Login from '../pages/Login/Login';
import Home from '../pages/Home/Home';
import Register from '../pages/Register/Register';
import DashBoard from '../pages/DashBoard/DashBoard';
import Galleries from '../pages/Galleries/Galleries';
import Logout from '../pages/Logout/Logout';



const Router = () => {

  const user = useSelector((state: InitialState) => state.auth.state)

  return (
    <Routes>

      {!user && (
        <>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </>
      )}
      {user && (
        <>
          <Route path='/galleries' element={<Galleries />} />
          <Route path='/dashBoard' element={<DashBoard />} />
          <Route path='/logout' element={<Logout />} />
        </>
      )}
      <Route path='*' element={<Navigate to={user ? "/dashBoard" : "/login"} />} />
    </Routes>
  );
};

export default Router;