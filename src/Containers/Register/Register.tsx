import React, { useState, useEffect } from 'react';
import './Register.scss';
import FullName from '../../components/FullName/FullName';
import EmailInput from '../../components/EmailInput/EmailInput';
import PhoneNumberInput from '../../components/PhoneNumberInput/PhoneNumberInput';
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

  const [phoneNumberInput, setPhoneNumberInput ] = useState("");
  const setPhoneNumberInputState = ( phoneNumberToSet:string ) => {
    setPhoneNumberInput(phoneNumberToSet)
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
        <PhoneNumberInput 
          phoneNumberInputFunc={ setPhoneNumberInputState }
        />
        <br/>
        <PasswordInput
          setPasswordInputFunc = { setPasswordInput }
        />
      </form>
    </>
  );
};

export default Register;