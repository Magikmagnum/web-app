import React from 'react'

import "./../SkillClient/SkillClient.scss"


import '../Login/Login'


import data from "../../helpers/competences";
import SETTINGS from "../../helpers/settingsData";



const SkillClient = () => {
    return (
        <>
            <section className="content" style={{}}>

                <section className="profil" style={{}}>
                    <img src={data[6].avatarUri} alt="coucou" />
                    <div className='profilInfo'>
                        <div className="profilTitle">{data[0].name}</div>
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