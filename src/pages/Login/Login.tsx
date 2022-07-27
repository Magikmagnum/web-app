import React from 'react';

import { toggleAuth } from "../../store/auth";

import './Login.scss';
import { FormInput, FormButton } from '../../components/Form/Form';
import { useDispatch } from 'react-redux';


const Login = () => {

  const dispatch = useDispatch();

  const __handleOnClick = () => {
    dispatch(toggleAuth(true))
  }

  return (
    <section className="loginContainer">
      <div className="loginCard">
        <div className="loginCardHeader">
          <h1 className="loginTitle"  >Connectez-vous</h1>
          <p className="loginDescription">
            Have any questions or suggestions? Drop us a message
          </p>
        </div>

        <div className="loginCardBody">
          <FormInput name='usename' type="text" label="Nom d'utilisateur" placeholder="Entrez votre nom d'utilisateur " />
          <FormInput name='password' type="password" label='Mot de passe' placeholder='Entre votre mot de passe' />
          <FormButton value={"valider"} onClick={__handleOnClick} />
        </div>
      </div>
    </section>
  );
};

export default Login;
