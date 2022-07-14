import React, { useState } from 'react';
import "./EmailInput.scss"

interface IEmailInputProps {
    emailInputFunc:(value: string) => void
}

const EmailInput: React.FunctionComponent<IEmailInputProps> = (props) => {

    const [emailInputComplete, setEmailInputComplete] = useState(true);
    const [emailInputError, setEmailInputError] = useState('');

    const nameRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const checkEmailInput = (e:React.ChangeEvent<HTMLInputElement>) => {
        if ( !e.target.value ) {
            setEmailInputComplete(false);
            setEmailInputError('L\'adresse e-mail est obligatoire')
            props.emailInputFunc('');
        } else if(!e.target.value.match(nameRegex)) {
            setEmailInputComplete(false);
            setEmailInputError('Il faut une majuscule, un minuscule, un chiffre et un caractère spécial')
            props.emailInputFunc('');
        } else {
            setEmailInputComplete(true)
            props.emailInputFunc(e.target.value);
        }
    }

    return (
        <>        
            <label 
            htmlFor="email"
            >MON ADRESSE E-MAIL *
            </label>
            <input 
            type="email"
            className={ emailInputComplete ? 'email' : 'email wrong-input' }  
            id="email" 
            name="email" 
            onChange={ (e) => checkEmailInput(e)}
            placeholder="Entrer votre adresse E-mail" required> 
            </input>  
            <br/>

            <p className='error-container'>
                { !emailInputComplete && emailInputError }
            </p>

        </>
    )
};

export default EmailInput;