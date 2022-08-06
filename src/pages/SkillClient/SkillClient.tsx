import React from 'react'

import { FormButton } from '../../components/Form/Form';
//import { PostMiniCard } from '../../components/Post/Post';
import { Opinion, Note } from '../../components/Opinion/Opinion';
//import Map from '../../components/Map/Map';
import { DashCounter } from '../../components/Dash/DashCounter';
import { CardPost } from '../../components/Card/CardPost';
import { Title } from '../../components/Title/Title';


import "./SkillClient.scss"


import { BiCycling } from "react-icons/bi";
import { BiWalk } from "react-icons/bi";
import { BiCar } from "react-icons/bi";
import { BiBus } from "react-icons/bi";
import { HeaderMedium } from "../../components/Header/Header"


import data from "../../helpers/competences";

const SkillClient = () => {

    const user = data[1];

    return (
        <>
            <section className="content" style={{}}>

                <header className="header" style={{}}>
                    <img src={user.imageUri} alt="coucou" />
                </header>


                <section className="profil" >
                    <HeaderMedium srcImg={user.avatarUri} title={user.title} subtitle={user.name} description={user.adresse} />
                </section>
                <DashCounter datasets={{
                    note: user.note,
                    contrat: user.contrat,
                    realisation: user.realisation,
                    aime: user.aime,
                }} />
                <section className="dashContent">
                </section>


                <section className="left" >
                    <FormButton value={"Faire une offre"} />
                    <div>
                        <Title title="A mois de 1km de toi" />
                        <Distance />

                    </div>

                    <div>
                        <Title title="Note et avis" />
                        <Note />
                        <Opinion src={data[4].avatarUri} title="Eric Gansa" score={3} />
                        <Opinion src={data[2].avatarUri} title="Ethiene Mavougou" score={4} />
                        <Opinion src={data[3].avatarUri} title="Davide Le bouchet" score={0} />
                    </div>
                    <div>
                        <Title title="Autres competences" />
                    </div>
                </section>
                <section className="right" >
                    <CardPost dataset={data[1]} />
                    <CardPost dataset={data[3]} />
                    <CardPost dataset={data[2]} />
                    <CardPost dataset={data[4]} />
                </section>
            </section>
        </>
    )
}

export default SkillClient;



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

/**
 <div>
                        <Title title="Ses réalisation" />
                        <PostMiniCard src={data[1].imageUri} />
                    </div>
 */