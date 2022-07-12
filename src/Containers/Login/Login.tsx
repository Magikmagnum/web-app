import * as React from 'react';
import Foo from '../../components/Foo/Foo';
import './Login.scss';

interface ILoginProps {

}

const Login: React.FunctionComponent<ILoginProps> = ( props ) => {
  return (
    <>
    <p>Login Page</p>
    <Foo />
    </>
  );
};


export default Login;
