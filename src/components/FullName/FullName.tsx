import React, { useState } from 'react';

interface IFullNameProps {
    setFullnameFunc:(value: string) => void
}

const FullName: React.FunctionComponent<IFullNameProps> = (props) => {

    const onInputEvent  = (e:React.ChangeEvent<HTMLInputElement>) => {
        props.setFullnameFunc(e.target.value)
    }
    return (
        <>
            <label 
            htmlFor="lastname"
            >Nom
            </label>
            <br/>
            <input 
            type="text" 
            id="lastname" 
            name="lastname" 
            onChange={ (e) => onInputEvent(e)}
            placeholder="Entrer votre nom" required> 
            </input>
            <br/>
            <br/>
            <label 
            htmlFor="firstname"
            >Prénom
            </label>
            <br/>
            <input 
            type="text" 
            id="firstname" 
            name="firstname" 
            onChange={ (e) => onInputEvent(e)}
            placeholder="Entrer votre prénom" required> 
            </input>
        </>
    )
};

export default FullName;