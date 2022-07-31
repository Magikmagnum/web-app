import React from 'react'

import "./../SkillClient/SkillClient.scss"


import '../Login/Login'
import { FormInput, FormButton } from '../../components/Form/Form'


import data from "../../helpers/competences";


const SETTINGS = [
    {
        title: 'Identité',
        data: [
            {
                title: 'Modifier votre Photo de profil',
                path: '',
                item: false
            },
            {
                title: 'Modifier votre identité',
                path: '',
                item: false
            },
            {
                title: 'Qui peux voir votre identité',
                path: '',
                item: false
            },

        ],
    },
    {
        title: 'Contact',
        data: [
            {
                title: "Modifier l'e-mail",
                path: '',
                item: false
            },
            {
                title: 'Modifier le télephone',
                path: '',
                item: false
            },
            {
                title: 'Qui peux voir vos contact',
                path: '',
                item: false
            },
        ],
    },
    {
        title: 'Adresse et localisation',
        data: [
            {
                title: 'Water',
                path: '',
                item: false
            },
            {
                title: 'Coke',
                path: '',
                item: false
            },
            {
                title: 'Beer',
                path: '',
                item: false
            },
        ],
    },
    {
        title: 'Competence',
        data: [
            {
                title: 'Water',
                path: '',
                item: false
            },
            {
                title: 'Coke',
                path: '',
                item: false
            },
            {
                title: 'Beer',
                path: '',
                item: false
            },
        ],
    },
    {
        title: 'Compte',
        data: [
            {
                title: 'Deconnexion',
                path: 'Logout',
                item: true
            },
            {
                title: 'Modifier votre compte',
                path: '',
                item: false
            },
            {
                title: 'Supprimer votre compte',
                path: '',
                item: false
            },
        ],
    },
    {
        title: 'Ratisseur',
        data: [
            {
                title: 'Faite nous une subjetion',
                path: '',
                item: false
            },
            {
                title: 'Apropos de Ratisseur',
                path: '',
                item: false
            },
        ],
    },
];


const SkillClient = () => {
    return (
        <>
            <section className="content" style={{}}>

                <section className="profil" style={{}}>
                    <img src={data[6].avatarUri} alt="coucou" />
                    <div className='profilInfo'>
                        <div className="profilTitle">{data[0].nom}</div>
                        <div className="profilSubtitle">{data[0].adresse}</div>
                    </div>
                </section>

                <section className="left" style={{}}>
                    <>
                        {
                            SETTINGS.map((items, keys) => {
                                console.log(items)
                                return (
                                    <div key={keys} style={{ marginTop: "46px" }}>
                                        <h1 style={{ color: "#009007" }}>{items.title}</h1>
                                        <div className="tabulation">
                                            {
                                                items.data.map((item, key) => {
                                                    return <Title title={item.title} key={key} />
                                                })
                                            }
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </>
                </section>
                <section className="rigth" style={{}}>



                </section>
            </section>
        </>
    )
}

export default SkillClient;



const Title = ({ title, subtitle }: { title: string, subtitle?: string }) => {
    return (
        <div className="titleBox" style={{ cursor: 'pointer' }}>
            <h1>
                {title}
            </h1>
            <h3 className="subTitle">Lorem ipsum, dolor sit amet consectetur adipisicing elit?
            </h3>
        </div>
    )
}


/**
 * 
 
  <section className="loginContainer">
                        <div className="loginCard">
                            <div className="loginCardHeader">
                                <h1 className="loginTitle"  >Inscrivez-vous</h1>
                                <p className="loginDescription">
                                    Have any questions or suggestions? Drop us a message.
                                </p>
                            </div>

                            <div className="loginCardBody">

                                <FormInput name="usename" type="text" label='Nom et prenom' placeholder='Entre votre nom et votre prenom' />
                                <FormInput name="email" type="text" label='Email' placeholder='Entrez votre login' />
                                <FormInput name="tel" type="text" label='Numéro de téléphone' placeholder='Entre votre numéro de téléphone' />
                                <FormInput name="password" type="password" label='Mot de passe' placeholder='Entre votre mot de passe' />
                                <FormButton />

                            </div>
                        </div>
                    </section>



 */