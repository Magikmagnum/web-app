import React, { useState, useEffect } from 'react';
import './Register.scss';
import FullName from '../../components/FullName/FullName';
import EmailInput from '../../components/EmailInput/EmailInput';
import PasswordInput from '../../components/PasswordInput/PasswordInput';

interface IRegisterProps {
}

const Register: React.FunctionComponent<IRegisterProps> = (props) => {

  const [lastname, setLastName ] = useState("");
  const setLastNameState = ( lName:string ) => {
    setLastName(lName)
  }

  const [firstname, setFirstName] = useState("");
  const setFirstNameState = ( fName:string ) => {
    setFirstName(fName)
  }
  
  const [emailInput, setEmailInput ] = useState("");
  const setEmailInputState = ( emailToSet:string ) => {
    setEmailInput(emailToSet)
  }
  
  const [passwordInput, setPasswordInput ] = useState("");

  return (
    <>
      <p>Register Page</p>
      <form className='form-register'>        
        <FullName 
          firstNameFunc={ setFirstNameState }
          lastNameFunc={ setLastNameState }
        /> 
        <EmailInput
          emailInputFunc = { setEmailInputState }
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