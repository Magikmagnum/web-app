import React from 'react'
import "./DashCounter.scss"


import { BiRocket } from "react-icons/bi";
import { BiBookBookmark } from "react-icons/bi";
import { BiStar } from "react-icons/bi";
//import { BiCommentDetail } from "react-icons/bi";
import { BiHeart } from "react-icons/bi";


export const DashItem = ({ children, title, score = 0 }: { children: any, score?: number, title: string }) => {
    return (
        <div className="dashItem">
            {children}
            <div className="score">{score}</div>
            <div className="tile">{title}</div>
        </div>
    )
};

type User = {
    note: number,
    contrat: number,
    realisation: number,
    aime: number,
}
export const DashCounter = ({ datasets }: { datasets: User }) => {
    return (
        <section className="dash" style={{}}>
            <DashItem title="note" score={datasets.note}><BiStar /> </DashItem>
            <DashItem title="contrat" score={datasets.contrat}><BiBookBookmark /> </DashItem>
            <DashItem title="réalisation" score={datasets.realisation}> <BiRocket /></DashItem>
            <DashItem title="aime" score={datasets.aime}> <BiHeart /></DashItem>
        </section>
        //<DashItem title="commentaire" score={datasets.comment}> <BiCommentDetail /></DashItem>
    )
};