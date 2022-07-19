import * as React from 'react';
import './Login.scss';

interface ILoginProps {

}

const Login: React.FunctionComponent<ILoginProps> = (props) => {
  return (
    <section className="loginContainer">
      <div className="footerWrapper">
        <div className="loginCard">
          <h1 className="title">Connectez vous</h1>
          <form>

          </form>
        </div>
        <div className="loginIllustration">

        </div>
      </div>
    </section>
  );
};


export default Login;
