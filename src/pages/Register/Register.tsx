import * as React from 'react';
import '../Login/Login'
import { FormInput, FormButton } from '../../components/Form/Form'



const Register = ({ authenticated }: { authenticated: Function }) => {

  return (


    <section className="loginContainer">
      <div className="loginCard">
        <div className="loginCardHeader">
          <h1 className="loginTitle"  >Inscrivez-vous</h1>
          <p className="loginDescription">
            Have any questions or suggestions? Drop us a message.
          </p>
        </div>

        <div className="loginCardBody">

          <FormInput name="usename" type="text" label='Nom et prenom' placeholder='Entre votre nom et votre prenom' />
          <FormInput name="email" type="text" label='Email' placeholder='Entrez votre login' />
          <FormInput name="tel" type="text" label='Numéro de téléphone' placeholder='Entre votre numéro de téléphone' />
          <FormInput name="password" type="password" label='Mot de passe' placeholder='Entre votre mot de passe' />
          <FormButton />

        </div>
      </div>
    </section>
  );
};



export default Register;
// 