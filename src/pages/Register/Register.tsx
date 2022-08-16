import React, { FormEventHandler, SyntheticEvent, useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { toggleAuth } from "../../store/auth";
import { useMutation } from 'react-query'

import { FormInput, FormButton } from '../../components/Form/Form'

import { registerQuery, DataAuthType, RegisterType, ErrorType } from "../../store/api/ratisseurApi"


const Register = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const mutation = useMutation<DataAuthType, ErrorType, RegisterType>(
        async ({ email, password }: RegisterType) => registerQuery({ email, password })
    );


    const __handleOnClick: FormEventHandler<HTMLFormElement> = (e: SyntheticEvent) => {
        e.preventDefault();

        const target = e.target as typeof e.target & {
            email: { value: string },
            password: { value: string }
        };

        const data: RegisterType = {
            email: target.email.value,
            password: target.password.value
        }
        mutation.mutate(data)
    }

    useEffect(() => {
        if (mutation.isSuccess) {
            dispatch(toggleAuth(mutation.data.data.token))
        }
    }, [dispatch, mutation])

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



export default Register;
// 