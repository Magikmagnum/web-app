import React, { useState } from 'react';
import "./PasswordInput.scss"

interface IPasswordInputProps {
    passwordInputFunc:(value: string) => void
}

const PasswordInput: React.FunctionComponent<IPasswordInputProps> = (props) => {

    const [passwordInputComplete, setPasswordInputComplete] = useState(true);
    const [passwordInputError, setPasswordInputError] = useState('');

    const nameRegex = /^(?:(?:(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]))|(?:(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?\/~_+-=|\]))|(?:(?=.*[0-9])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?\/~_+-=|\]))|(?:(?=.*[0-9])(?=.*[a-z])(?=.*[*.!@$%^&(){}[]:;<>,.?\/~_+-=|\]))).{8,32}$/;

    const checkPasswordInput = (e:React.ChangeEvent<HTMLInputElement>) => {
        if ( !e.target.value ) {
            setPasswordInputComplete(false);
            setPasswordInputError('Le mot-de-passe est obligatoire')
            props.passwordInputFunc('');
        } else if (!e.target.value.match(nameRegex)) {
            setPasswordInputComplete(false);
            setPasswordInputError('Le mot de passe doit être compris entre 8 et 32 caractères, avoir au moins 1 majuscule, 1 minuscule, 1 chiffre et 1 caractère spéciaux')
            props.passwordInputFunc('');
        } else if (e.target.value.match(nameRegex) && e.target.value.length < 8) {
            setPasswordInputComplete(false);
            setPasswordInputError('Minimum 8 caractères !')
            props.passwordInputFunc('');
        } else if (e.target.value.match(nameRegex) && e.target.value.length > 32) {
            setPasswordInputComplete(false);
            setPasswordInputError('Maximum 32 caractères !')
            props.passwordInputFunc('');
        } else {
            setPasswordInputComplete(true)
            props.passwordInputFunc(e.target.value);
        }
    }

    return (
        <>        
            <label 
            htmlFor="password"
            >MON MOT-DE-PASSE *
            </label>
            <input 
            type="password"
            className={ passwordInputComplete ? 'password' : 'password wrong-input' }
            id="password" 
            name="password" 
            onChange={ (e) => checkPasswordInput(e)}
            placeholder="Entrer votre mot-de-passe" required> 
            </input> 
            <br/>
            <p className='error-container'>
                { !passwordInputComplete && passwordInputError }
            </p>
        </>
    )
};

export default PasswordInput;