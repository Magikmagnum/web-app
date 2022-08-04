import React from 'react'

import { Header } from "../../components/Header/Header"


import '../Login/Login'
import "./../SkillClient/SkillClient.scss"


import data from "../../helpers/competences";
import SETTINGS from "../../helpers/settingsData";



const SkillClient = () => {
    return (
        <>
            <section className="content" style={{}}>


                <Header title={data[6].name} subtitle={data[0].adresse} srcImg={data[6].avatarUri} />
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