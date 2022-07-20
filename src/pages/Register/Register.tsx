import * as React from 'react';
import './Register.scss';
import { FormInput, FormButton } from '../../components/Form/Form'

interface IRegisterProps {

}

const Register: React.FunctionComponent<IRegisterProps> = (props) => {


  return (
    <section className="loginContainer">
      <div className="loginCard">
        <div className="loginCcardHeader">
          <h3 className="loginTitle">Inscrivez-vous</h3>
          <p className="loginDescription">
            Have any questions or suggestions? Drop us a message.
          </p>
        </div>

        <div className="loginCardBody">
          <FormInput label='Nom et prenom' placeholder='Entre votre nom et votre prenom' />
          <FormInput label='Email' placeholder='Entrez votre login' />
          <FormInput label='Numéro de téléphone' placeholder='Entre votre numéro de téléphone' />
          <FormInput label='Mot de passe' placeholder='Entre votre mot de passe' />
          <FormButton />
        </div>
      </div>
    </section>
  );
};



export default Register;
