import React, { useState } from 'react';
import './Register.scss';
import FullName from '../../components/FullName/FullName';

interface IRegisterProps {
}

const Register: React.FunctionComponent<IRegisterProps> = (props) => {

  const [fullname, setFullname ] = useState("");

  return (
    <>
        <p>Register Page</p>
        <form className='form-reservation'>        
    
          <FullName 
            setFullnameFunc = { setFullname }
          /> 
          </form>

    </>
  );
};

export default Register;