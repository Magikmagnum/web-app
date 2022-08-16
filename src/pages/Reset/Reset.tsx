import React, { FormEventHandler, SyntheticEvent, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toggleAuth } from "../../store/auth";

import '../Login/Login.scss'
import { FormInput, FormButton } from '../../components/Form/Form'

import { useMutation } from 'react-query'





export type ErrorType = {
     status: number,
     success: boolean,
     data: {},
     message: string
}

export type DataType = {
     status: number,
     success: boolean,
     data: {
          token: number
     },
     message: string
}

export type LoginType = {
     email: string,
     password: string
}


export async function resetQuery({ email, password }: LoginType): Promise<DataType> {

     const API_PATH = "http://192.168.0.8";
     const API_PORT = "3001";
     const API_VERSION = "api/v1/";

     const API_LOCAL = API_PATH + ":" + API_PORT + "/" + API_VERSION;

     const response = await fetch(API_LOCAL + 'reset', {
          method: 'POST',
          headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json',
          },
          body: JSON.stringify({
               "email": email, "password": password,
          })
     })

     const responseData = await response.json();
     console.log(responseData);
     if (response.ok) {
          return responseData;
     }

     throw new Error(responseData);
}




const Reset = () => {

     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const dispatch = useDispatch();

     const mutation = useMutation<DataType, ErrorType, LoginType>(
          async ({ email, password }: LoginType) => resetQuery({ email, password })
     );


     const __handleOnClick: FormEventHandler<HTMLFormElement> = (e: SyntheticEvent) => {
          e.preventDefault();

          const target = e.target as typeof e.target & {
               email: { value: string },
               password: { value: string }
          };

          const data: LoginType = {
               email: target.email.value,
               password: target.password.value
          }
          mutation.mutate(data)
     }

     useEffect(() => {
          if (mutation.isSuccess) {
               console.log(mutation.data.data.token)
               dispatch(toggleAuth(mutation.data.data.token))
          }
     }, [dispatch, mutation])

     console.log(localStorage.getItem('user'));
     return (
          <section className="formContainer">
               <div className="formCard">
                    <div className="formCardHeader">
                         <h1 className="title textCenter titleMargin"  >Inscrivez-vous</h1>
                         {(!mutation.isError && !mutation.isSuccess) && <p className="textComment textSecondary ">Have any questions or suggestions Drop us a message.</p>}
                         {(mutation.isError) && (<p className="textComment textDanger textCenter">{mutation.error?.message}</p>)}
                         {(mutation.isSuccess) && (<p className="textComment textSuccess textCenter">{mutation.data?.message}</p>)}
                    </div>

                    {
                         mutation.isLoading ? (
                              <p className="textComment textSuccess textCenter">Loading ...</p>
                         ) : (
                              <form className="loginCardBody" onSubmit={__handleOnClick} >
                                   <FormInput name='email' type="text" label="Nom d'utilisateur" placeholder="Entrez votre nom d'utilisateur " value={email} setValue={setEmail} />
                                   <FormInput name='password' type="password" label='Mot de passe' placeholder='Entre votre mot de passe' value={password} setValue={setPassword} />
                                   <FormButton value={"valider"} />
                              </form>
                         )
                    }

               </div>
          </section>
     );
};



export default Reset;
// 