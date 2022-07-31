import React from 'react'
import { BiStar } from "react-icons/bi";

import "./Opinion.scss"

export const Opinion = ({ src, title }: { src: string, title: string }) => {
    return (
        <div className="commentBox">
            <div className="commentHeader">
                <img src={src} alt="avatar comment" />
                <div className="commentInfo">
                    <h3 className="commentTitle">{title}</h3>
                    <div className="commentStart">
                        <BiStar />
                        <BiStar />
                        <BiStar />
                        <BiStar />
                        <BiStar />
                    </div>
                    <div className="commentDate">Le 05/06/2021</div>
                </div>
            </div>
            <div className="commentBody">
                <p className="commentText">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos dolore ipsa eius obcaecati harum iure sed unde, ab fuga quo natus? Officiis blanditiis fuga consectetur voluptatem tempora perspiciatis, accusamus architecto.
                </p>
            </div>
            <p className="commentFooter commentText">Cet avis, vous a ete utile? <span className="commentFooterValue">Oui</span> <span className="commentFooterValue">Non</span></p>
        </div>
    )
}



export const Note = () => {

    const Bar = ({ title, value }: { title: string, value: number }) => {

        if (value !== 0) {
            value = (100 / 5) * value;
        }

        return (
            <div className="barBox">
                <div className="barTitle">{title}</div>
                <div className="barValue">
                    <div className="barValue before" style={{ width: value + "%" }}>

                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="noteBox">
            <Bar title="Quality of service." value={4} />
            <Bar title="Compliance with deadlines." value={5} />
            <Bar title="Value for money" value={3} />
            <Bar title="Dealings between people" value={1} />
        </div>
    )
}