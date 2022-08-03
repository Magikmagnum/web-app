import React from 'react'

import { FormButton } from '../../components/Form/Form';
import { PostMiniCard } from '../../components/Post/Post';
import { Opinion, Note } from '../../components/Opinion/Opinion';
import Map from '../../components/Map/Map';
import { DashCounter } from '../../components/Dash/DashCounter';


import "./SkillClient.scss"
import { BiRocket } from "react-icons/bi";
import { BiBookBookmark } from "react-icons/bi";
import { BiStar } from "react-icons/bi";
//import { BiCommentDetail } from "react-icons/bi";
import { BiHeart } from "react-icons/bi";

import { BiCycling } from "react-icons/bi";
import { BiWalk } from "react-icons/bi";
import { BiCar } from "react-icons/bi";
import { BiBus } from "react-icons/bi";



import data from "../../helpers/competences";

const SkillClient = () => {

    const user = data[6];
    console.log(user)

    return (
        <>
            <section className="content" style={{}}>

                <header className="header" style={{}}>
                    <img src={user.imageUri} alt="coucou" />
                </header>
                <section className="profil" style={{}}>
                    <img src={user.avatarUri} alt="coucou" />
                    <div className='profilInfo'>
                        <div className="profilTitle">{user.title}</div>
                        <div className="profilSubtitle">{user.adresse}</div>
                    </div>
                </section>
                <DashCounter datasets={{
                    note: user.note,
                    contrat: user.contrat,
                    realisation: user.realisation,
                    aime: user.aime,
                }} />

                
                <section className="left" style={{}}>
                    <FormButton value={"Faire une offre"} />
                    <div>
                        <Title title="A mois de 1km de toi" />
                        <Distance />
                        <div style={{ margin: "42px 0 0 0", height: "280px" }}>
                            <Map locations={user.coords} />
                        </div>
                    </div>
                    <div>
                        <Title title="Ses réalisation" />
                        <PostMiniCard src={data[1].imageUri} />
                    </div>
                    <div>
                        <Title title="Note et avis" />
                        <Note />
                        <Opinion src={data[4].avatarUri} title="Eric Gansa" />
                        <Opinion src={data[2].avatarUri} title="Ethiene Mavougou" />
                        <Opinion src={data[3].avatarUri} title="Davide Le bouchet" />
                    </div>
                    <div>
                        <Title title="Autres competences" />
                    </div>
                </section>
                <section className="right" style={{}}>

                    <PostMiniCard src={data[1].imageUri} />
                </section>
            </section>
        </>
    )
}

export default SkillClient;


//<DashItem title="commentaire" score={0}> <BiCommentDetail /></DashItem>

const DashItem = ({ children, title, score = 0 }: { children: any, score?: number, title: string }) => {
    return (
        <div className="dashItem">
            {children}
            <div className="score">{score}</div>
            <div className="tile">{title}</div>
        </div>
    )
}


const Title = ({ title, subtitle }: { title: string, subtitle?: string }) => {
    return (
        <div className="titleBox">
            <h1 className="title">
                {title}
            </h1>
            <h3 className="subTitle">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus obcaecati harum architecto.
            </h3>
        </div>
    )
}


const Distance = ({ distance }: { distance?: number }) => {

    const time = {
        walk: 100,
        bicycle: 60,
        car: 12,
        bus: 20,
    }

    if (distance) {

    }

    return <div className="distanceBox">
        <div className="distanceItem">
            <BiWalk className="distanceIcon" />
            <div className="distanceTime">{time.walk + " min"}</div>
        </div>
        <div className="distanceItem">
            <BiCycling className="distanceIcon" />
            <div className="distanceTime">{time.bicycle + " min"}</div>
        </div>
        <div className="distanceItem">
            <BiBus className="distanceIcon" />
            <div className="distanceTime">{time.bus + " min"}</div>
        </div>
        <div className="distanceItem">
            <BiCar className="distanceIcon" />
            <div className="distanceTime">{time.car + " min"}</div>
        </div>
    </div>
}