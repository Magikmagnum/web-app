import React, { useState } from 'react';

interface IEmailInputProps {
    setEmailInputFunc:(value: string) => void
}

const EmailInput: React.FunctionComponent<IEmailInputProps> = (props) => {

    const onInputEvent  = (e:React.ChangeEvent<HTMLInputElement>) => {
        props.setEmailInputFunc(e.target.value)
    }
    return (
        <>        
            <label 
            htmlFor="email"
            >E-mail
            </label>
            <br/>
            <input 
            type="email" 
            id="email" 
            name="email" 
            onChange={ (e) => onInputEvent(e)}
            placeholder="Entrer votre adresse E-mail" required> 
            </input>        
        </>
    )
};

export default EmailInput;