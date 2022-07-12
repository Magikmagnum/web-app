import React, { useState } from 'react';
import './Register.scss';
import FullName from '../../components/FullName/FullName';
import EmailInput from '../../components/EmailInput/EmailInput';
import PasswordInput from '../../components/PasswordInput/PasswordInput';

interface IRegisterProps {
}

const Register: React.FunctionComponent<IRegisterProps> = (props) => {

  const [fullname, setFullname ] = useState("");
  const [emailInput, setEmailInput ] = useState("");
  const [passwordInput, setPasswordInput ] = useState("");

  return (
    <>
        <p>Register Page</p>
        <form className='form-reservation'>        
    
          <FullName 
            setFullnameFunc = { setFullname }
          /> 
          <br/>
          <br/>
          <EmailInput
            setEmailInputFunc = { setEmailInput }
          />
          <br/>
          <br/>
          <PasswordInput
            setPasswordInputFunc = { setPasswordInput }
          />

        </form>

    </>
  );
};

export default Register;