import React, { useState } from 'react';
import './Register.scss';
import FullName from '../../components/FullName/FullName';
import EmailInput from '../../components/EmailInput/EmailInput';

interface IRegisterProps {
}

const Register: React.FunctionComponent<IRegisterProps> = (props) => {

  const [fullname, setFullname ] = useState("");
  const [emailInput, setEmailInput ] = useState("");

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

        </form>

    </>
  );
};

export default Register;