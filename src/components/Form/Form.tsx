import * as React from 'react';
import './Form.scss';


export const FormInput = ({ label, placeholder }: { label: string, placeholder: string }) => {
    return (
        <div className="form">
            <label className="formLabel" htmlFor="name">{label}</label>
            <input className="formImput" type="text" id="name" value="" placeholder={placeholder} />
        </div>
    )
}


export const FormButton = () => {
    return (
        <button className="formBtn">Validez</button>
    )
}
