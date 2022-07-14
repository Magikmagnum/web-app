import React, { useState } from "react";
import "./ButtonForm.scss"

interface IButtonFormProps {
    buttonValue:string
}

const ButtonForm: React.FunctionComponent<IButtonFormProps> = (props) => {
//   const [size] = useState(props.size);
//   const [variant] = useState(props.variant);
  return (
    <>
        <input 
        type="submit" 
        value={props.buttonValue}
        className="btn btn-dark btn-block" 
        />
    </>
  )
}
export default ButtonForm;