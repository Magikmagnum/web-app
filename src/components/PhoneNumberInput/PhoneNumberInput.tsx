import React, { useState } from 'react';
import "./PhoneNumberInput.scss"

interface IPhoneNumberInputProps {
    phoneNumberInputFunc:(value: string) => void
}

const PhoneNumberInput: React.FunctionComponent<IPhoneNumberInputProps> = (props) => {

    const [phoneNumberInputComplete, setPhoneNumberInputComplete] = useState(true);
    const [phoneNumberInputError, setPhoneNumberInputError] = useState('');

    const nameRegex = /^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/;

    const checkPhoneNumberInput = (e:React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.value.match(nameRegex)) {
            setPhoneNumberInputComplete(false);
            setPhoneNumberInputError('Le numéro de téléphone doit être de 10 caractères')
            props.phoneNumberInputFunc('');
        } else {
            setPhoneNumberInputComplete(true)
            props.phoneNumberInputFunc(e.target.value);
        }
    }

    return (
        <>        
            <label 
            htmlFor="phoneNumber"
            >Numéro de téléphone (optionnel)
            </label>
            <input 
            type="phoneNumber"
            className={ phoneNumberInputComplete ? 'phoneNumber' : 'phoneNumber wrong-input' }  
            id="phoneNumber" 
            name="phoneNumber" 
            onChange={ (e) => checkPhoneNumberInput(e)}
            placeholder="Entrer votre numéro de téléphone"> 
            </input>  
            <br/>

            <p className='error-container'>
                { !phoneNumberInputComplete && phoneNumberInputError }
            </p>

        </>
    )
};

export default PhoneNumberInput;