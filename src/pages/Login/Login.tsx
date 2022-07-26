import * as React from 'react';
import './Login.scss';
import { FormInput, FormButton } from '../../components/Form/Form';
import { useIncrement, useAutoIncrement } from "../../hook/useGalerie";
import { useNavigate } from 'react-router-dom';



const Login = ({ authenticated }: { authenticated: Function }) => {

  // const [count, setCount] = useIncrement(0, 1);
  const countAuto = useAutoIncrement(0);
  const navigate = useNavigate();


  const __handleOnClick = () => {
    authenticated()
    navigate("/")
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
          <FormButton value={"valider " + countAuto} onClick={__handleOnClick} />
        </div>
      </div>
    </section>
  );
};



export default Login;
