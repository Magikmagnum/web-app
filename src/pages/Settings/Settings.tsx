import React from 'react'

import "./../SkillClient/SkillClient.scss"



import data from "../../helpers/competences";


const SkillClient = () => {
    console.log(data[0])
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


                    <div>
                        <Title title="A mois de 1km de toi" />
                    </div>
                    <div>
                        <Title title="Ses réalisation" />

                    </div>
                    <div>
                        <Title title="Note et avis" />
                    </div>
                    <div>
                        <Title title="Autres competences" />
                    </div>
                </section>
                <section className="rigth" style={{}}>
                    rigth
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
            <h1>
                {title}
            </h1>
            <h3 className="subTitle">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus obcaecati harum architecto impedit quasi itaque repudiandae beatae nostrum, exercitationem ipsam optio sequi sunt voluptate laborum enim facere. Beatae, illo dolores?
            </h3>
        </div>
    )
}