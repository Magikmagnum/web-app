import React, { useState, useEffect } from 'react';
import './Register.scss';
import FullName from '../../components/FullName/FullName';
import EmailInput from '../../components/EmailInput/EmailInput';
import PhoneNumberInput from '../../components/PhoneNumberInput/PhoneNumberInput';
import PasswordInput from '../../components/PasswordInput/PasswordInput';
import ButtonForm from './../../components/ButtonForm/ButtonForm';

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
  const setPasswordInputState = ( passwordToSet:string ) => {
    setPasswordInput(passwordToSet)
  }

  const checkUserInfo = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userInfo = {
        firstname: firstname,
        lastname: lastname,
        email: emailInput,
        phone_number: phoneNumberInput,
        password: passwordInput
    }
    console.log(userInfo)
  }
  return (
    <>
      <form onSubmit={ checkUserInfo } className='form-register'>        
      <h2>Je m'inscris</h2>
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
          passwordInputFunc = { setPasswordInputState }
        />
        <br/>
        <p>Les champs avec * sont des champs obligatoires.</p>
        <ButtonForm buttonValue="Je m'inscris"/>
      </form>
    </>
  );
};

export default Register;