import React from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { InitialState } from "../store/auth";

import Login from '../pages/Login/Login';
import Home from '../pages/Home/Home';
import Register from '../pages/Register/Register';
import Catalog from '../pages/Catalog/Catalog';
import Desks from '../pages/Desks/Desks';
import Logout from '../pages/Logout/Logout';
import Settings from '../pages/Settings/Settings';
import SkillClient from '../pages/SkillClient/SkillClient';



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
          <Route path='/Desks' element={<Desks />} />
          <Route path='/Catalog' element={<Catalog />} />
          <Route path='/Catalog' element={<Catalog />} />
          <Route path='/Settings' element={<Settings />} />
          <Route path='/SkillClient' element={<SkillClient />} />
          <Route path='/logout' element={<Logout />} />
        </>
      )}
      <Route path='*' element={<Navigate to={user ? "/Catalog" : "/login"} />} />
    </Routes>
  );
};

export default Router;