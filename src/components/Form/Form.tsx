import './Form.scss';


export const FormInput = ({ label, name, type = "text", placeholder = "", value = '', setValue }: { label: string, name: string, placeholder?: string, type?: string, value?: string, setValue: React.Dispatch<React.SetStateAction<string>> }) => {


    const __handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    //const nameRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //const nameRegex = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/;
    //const nameRegex = /^(?:(?:(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]))|(?:(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?\/~_+-=|\]))|(?:(?=.*[0-9])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?\/~_+-=|\]))|(?:(?=.*[0-9])(?=.*[a-z])(?=.*[*.!@$%^&(){}[]:;<>,.?\/~_+-=|\]))).{8,32}$/;

    return (
        <div className="form">
            <label className="formLabel" htmlFor={name}>{label}</label>
            <input className="formImput" type={type} id={name} value={value} placeholder={placeholder} onChange={(e) => __handleValueChange(e)} />
        </div>
    )
}





export const FormButton = ({ value = "Enter", onClick = null }: { value?: string, onClick?: Function | null }) => {
    return (
        <button onClick={() => (onClick == null) ? null : onClick()} className="formBtn">{value}</button>
    )
}
