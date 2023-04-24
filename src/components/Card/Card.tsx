import React from 'react'

import './Card.scss';
import { Header } from "../Header/Header"

import { BiRocket } from "react-icons/bi";
import { BiBookBookmark } from "react-icons/bi";
import { BiStar } from "react-icons/bi";




export const Card = (
    {
        children,
        className,
        srcCover,
        title,
        avatar,
        subtitle,
        realisation,
        note,
        contrat,
        callback }:
        {
            children: string,
            className?: string,
            srcCover?: string,
            title?: string,
            avatar?: string,
            subtitle?: string,
            realisation?: number,
            note?: number,
            contrat?: number,
            callback?: Function
        }) => {


    return (
        <div className={"item " + className} onClick={() => callback && callback()}>

            <div className="cardHeader">
                <img src={srcCover} className="" alt="card" />
            </div>
            <div className="cardBody">
                <Header srcImg={avatar} title={title} description={subtitle}>
                    <div className="cardIcon">
                        <IconCompte number={note}>
                            <BiStar />
                        </IconCompte>
                        <IconCompte number={contrat}>
                            <BiBookBookmark />
                        </IconCompte>
                        <IconCompte number={realisation}>
                            <BiRocket />
                        </IconCompte>
                    </div>
                </Header>
            </div>
        </div>)
}





export const CardSquare = (
    {
        children,
        className,
        src,
        callback,
        title,
        note,
        contrat,
        id
    }:
        {
            children: string,
            className?: string,
            src?: string,
            callback: Function,
            title?: string,
            note?: number,
            contrat?: number,
            id?: number,

        }) => {
    return (
        <div className={"item " + className} onClick={() => callback(id)}>
            <div className="cardHeader">
                <img src={src} className="" alt="card" />
            </div>
            <div className="cardBody">

                <div className='cardInfo'>
                    <div className="cardTitle">{title}</div>
                    <div className="cardIcon">
                        <IconCompte number={note}>
                            <BiStar />
                        </IconCompte>
                        <IconCompte number={contrat}>
                            <BiBookBookmark />
                        </IconCompte>
                    </div>
                </div>
            </div>
        </div>
    )
}





export const CardLine = ({ children, number = 0 }: { children?: any, number?: number }) => {
    return (
        <div className="cardLineBox">
            <div className="cardLineHeader">{children}</div>
            <div className="cardLineBody">{children}</div>
            <div className="cardLineFooter">{children}</div>
        </div>
    )
}





const IconCompte = ({ children, number = 0 }: { children: any, number?: number }) => {
    return (
        <div className="iconCompte">
            {children}
            <div className="">{number}</div>
        </div>
    )
}