import React, { useState } from 'react';
import "./FullName.scss"

interface IFullNameProps {
    firstNameFunc:(value: string) => void
    lastNameFunc:(value: string) => void
}

const FullName: React.FunctionComponent<IFullNameProps> = (props) => {

    const [lastNameComplete, setLastNameComplete] = useState(true);
    const [lastNameError, setLastNameError] = useState('');
    
    const [firstNameComplete, setFirstNameComplete] = useState(true);
    const [firstNameError, setFirstNameError] = useState('');

    const nameRegex = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/;


    const checkFirstName = (e:React.ChangeEvent<HTMLInputElement>) => {
        if ( !e.target.value ) {
            setFirstNameComplete(false);
            setFirstNameError('Le prénom est obligatoire')
            props.firstNameFunc('');
        } else if(!e.target.value.match(nameRegex)) {
            setFirstNameComplete(false);
            setFirstNameError('Il faut que des lettres !')
            props.firstNameFunc('');
        } else if (e.target.value.match(nameRegex) && e.target.value.length < 3) {
            setFirstNameComplete(false);
            setFirstNameError('Minimum 3 caractères !')
            props.firstNameFunc('');
        } else {
            setFirstNameComplete(true)
            props.firstNameFunc(e.target.value);
        }

    }

    const checkLastName = (e:React.ChangeEvent<HTMLInputElement>) => {
        if ( !e.target.value ) {
            setLastNameComplete(false);
            setLastNameError('Le champs ne peut pas être vide')
            props.lastNameFunc('');
        } else if (e.target.value.length < 3) {
            setLastNameComplete(false);
            setLastNameError('Minimum 3 lettres !')
            props.lastNameFunc('');
        } else if(!e.target.value.match(nameRegex)) {
            setLastNameComplete(false);
            setLastNameError('Que des lettres !')
            props.lastNameFunc('');
        } else {
            setLastNameComplete(true)
            props.lastNameFunc(e.target.value);
        }
    }

    return (
        <>
            <label 
            htmlFor="lastname"
            >Nom
            </label>
            <input 
            type="text" 
            className={ lastNameComplete ? 'lastName' : 'lastName wrong-input' } 
            id="lastname" 
            name="lastname" 
            onChange={ (e) => checkLastName(e) } 
            placeholder="Entrer votre nom" required> 
            </input>
            <br/>

            <p className='error-container'>
                { !lastNameComplete && lastNameError }
            </p>
            <br/>

            <label 
            htmlFor="firstname"
            >Prénom
            </label>
            <input 
            type="text" 
            className={ firstNameComplete ? 'firstName' : 'firstName wrong-input' } 
            id="firstname" 
            name="firstname" 
            onChange={ (e) => checkFirstName(e) } 
            placeholder="Entrer votre prénom" required> 
            </input>
            <br/>

            <p className='error-container'>
                { !firstNameComplete && firstNameError }
            </p>
            <br/>
        </>
    )
};

export default FullName;