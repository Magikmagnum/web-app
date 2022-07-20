import * as React from 'react';
import './Login.scss';
import { FormInput, FormButton } from '../../components/Form/Form'

interface ILoginProps {

}

const Login: React.FunctionComponent<ILoginProps> = (props) => {


  return (
    <section className="loginContainer">
      <div className="loginCard">
        <div className="loginCcardHeader">
          <h3 className="loginTitle">Connectez-vous</h3>
          <p className="loginDescription">
            Have any questions or suggestions? Drop us a message.
          </p>
        </div>

        <div className="loginCardBody">
          <FormInput label="Nom d'utilisateur" placeholder="Entrez votre nom d'utilisateur " />
          <FormInput label='Mot de passe' placeholder='Entre votre mot de passe' />
          <FormButton />
        </div>
      </div>
    </section>
  );
};



export default Login;
