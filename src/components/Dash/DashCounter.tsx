import React from 'react'
import "./DashCounter.scss"


import { BiRocket } from "react-icons/bi";
import { BiBookBookmark } from "react-icons/bi";
import { BiStar } from "react-icons/bi";
//import { BiCommentDetail } from "react-icons/bi";
import { BiHeart } from "react-icons/bi";


export const DashItem = ({ children = null, title, score = 0 }: { children?: any, score?: number, title: string }) => {
    return (
        <div className="dashItem">
            {children !== null && children}
            <div className="score">{score}</div>
            <div className="tile">{title}</div>
        </div>
    )
};

type User = {
    proteine: number,
    glucide: number,
    lipide: number,
    fibre: number,
    eau: number,
}
export const DashCounter = ({ datasets }: { datasets: User }) => {
    return (
        <section className="dash" >
            <DashItem title="Proteine" score={datasets.proteine}> </DashItem>
            <DashItem title="Glucide" score={datasets.glucide}></DashItem>
            <DashItem title="Lipide" score={datasets.lipide}></DashItem>
            <DashItem title="Fibre" score={datasets.fibre}></DashItem>
            <DashItem title="eau" score={datasets.eau}></DashItem>
        </section>
    )
};