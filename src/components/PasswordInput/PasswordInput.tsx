import React, { useState } from 'react';

interface IPasswordInputProps {
    setPasswordInputFunc:(value: string) => void
}

const PasswordInput: React.FunctionComponent<IPasswordInputProps> = (props) => {

    const onInputEvent  = (e:React.ChangeEvent<HTMLInputElement>) => {
        props.setPasswordInputFunc(e.target.value)
    }
    return (
        <>        
            <label 
            htmlFor="password"
            >Mot de passe
            </label>
            <br/>
            <input 
            type="password" 
            id="password" 
            name="password" 
            onChange={ (e) => onInputEvent(e)}
            placeholder="Entrer votre mot de passe" required> 
            </input>        
        </>
    )
};

export default PasswordInput;