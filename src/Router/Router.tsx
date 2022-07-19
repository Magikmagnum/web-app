import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from '../pages/Login/Login';
import Home from '../pages/Home/Home';
import Register from '../pages/Register/Register';


interface IRouterProps {

}

const Router: React.FunctionComponent<IRouterProps> = (props) => {
  return (
    <Routes>
      <Route
        path='/'
        element={<Home />}
      />
      <Route
        path='/login'
        element={<Login />}
      />
      <Route
        path='/register'
        element={<Register />}
      />
    </Routes>
  );
};

// www.ekna.fr/

export default Router;