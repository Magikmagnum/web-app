import React, { useState } from 'react'
import LineChart from '../../components/Chart/LineChart'

import './CardLine.scss';

import UserTrafic from "../../helpers/userTrafic"

import { BiDotsVerticalRounded } from "react-icons/bi";

import { DashCounter } from '../../components/Dash/DashCounter';
import data from "../../helpers/competences";


export const CardLine = ({ src, title, subtitle }: { src?: string, title?: any, subtitle?: string }) => {

    const [useData1, setUserData1] = useState({
        labels: UserTrafic.map((data) => data.year),
        datasets: [{
            label: "User gain",
            data: UserTrafic.map((data) => data.userLost),
            fill: true, // permet de faire apparaitre le backgroundColor 
            backgroundColor: '#0090071f',
            borderColor: '#009007',
            pointBorderColor: '#000',
            pointBorderWidth: 0,
            //borderWidth: 2,
            tension: 0.1,
        }]
    });

    const user = data[6];

    return (
        <div className="cardLineBox">
            <div className="cardLineHeader">
                <div className="cardLineImage">
                    <img src={src} alt="Skill" />
                </div>
                <div className="cardLineTitle">
                    {title}
                </div>
            </div>
            <div className="cardLineBody">
                <DashCounter datasets={{
                    note: user.note,
                    contrat: user.contrat,
                    realisation: user.realisation,
                    aime: user.aime,
                }}
                />
            </div>
            <div className="cardLineFooter">
                <LineChart data={useData1} />
            </div>
            <div className="cardLineSet">
                <BiDotsVerticalRounded />
            </div>
        </div>
    )
}