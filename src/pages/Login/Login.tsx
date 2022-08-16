import React, { FormEventHandler, SyntheticEvent, useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { toggleAuth } from "../../store/auth";
import { useMutation } from 'react-query'

import { FormInput, FormButton } from '../../components/Form/Form'

import { loginQuery, DataAuthType, AuthType, ErrorType } from "../../store/api/ratisseurApi"


const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const mutation = useMutation<DataAuthType, ErrorType, AuthType>(
        async ({ username, password }: AuthType) => loginQuery({ username, password })
    );

    const __handleOnClick: FormEventHandler<HTMLFormElement> = (e: SyntheticEvent) => {
        e.preventDefault();

        const target = e.target as typeof e.target & {
            username: { value: string },
            password: { value: string }
        };

        const data: AuthType = {
            username: target.username.value,
            password: target.password.value
        };

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
                    <h1 className="title textCenter titleMargin textCenter"  >Connectez-vous</h1>
                    {(!mutation.isError && !mutation.isSuccess) && <p className="textComment textSecondary ">Have any questions or suggestions Drop us a message.</p>}
                    {(mutation.isError) && (<p className="textComment textDanger">{mutation.error?.message}</p>)}
                    {(mutation.isSuccess) && (<p className="textComment textSuccess">{mutation.data?.message}</p>)}
                </div>

                {
                    mutation.isLoading ? (
                        <p className="textComment textSuccess textCenter">Loading ...</p>
                    ) : (
                        <form className="formCardBody" onSubmit={__handleOnClick} >
                            <FormInput name='username' type="text" label="Nom d'utilisateur" placeholder="Entrez votre nom d'utilisateur " value={username} setValue={setUsername} />
                            <FormInput name='password' type="password" label='Mot de passe' placeholder='Entre votre mot de passe' value={password} setValue={setPassword} />
                            <FormButton value={"valider"} />
                        </form>
                    )
                }
            </div>
        </section>
    );
};


export default Login;
