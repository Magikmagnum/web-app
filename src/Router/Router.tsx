import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from '../Containers/Login/Login';
import Register from '../Containers/Register/Register';


interface IRouterProps {

}

const Router: React.FunctionComponent<IRouterProps> = ( props ) => {
    return (
        <Routes>
          <Route 
            path='/' 
            element={ <Login /> }
          />
          <Route 
            path='/register' 
            element={ <Register /> }
          />
        </Routes>
    );
};

// www.ekna.fr/

export default Router;