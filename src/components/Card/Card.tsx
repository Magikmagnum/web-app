import React from 'react'

import BookmarkBorderIcon from '@mui/icons-material/Bookmark'
import StarBorderIcon from '@mui/icons-material/Star'
import RocketIcon from '@mui/icons-material/RocketLaunch'



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

    const IconCompte = ({ children, number = 0 }: { children: any, number?: number }) => {
        return (
            <div className="iconCompte">
                {children}
                <div className="">{number}</div>
            </div>
        )
    }

    return (
        <div className={"item " + className} onClick={() => callback && callback()}>
            <div className="cardHeader">
                <img src={srcCover} className="" alt="card" />
            </div>
            <div className="cardBody">
                <div className="cardAvatar">
                    <img src={avatar} alt='avatar' />
                </div>
                <div className='cardInfo'>
                    <div className="cardTitle">{title}</div>
                    <div className="cardSubtitle">{subtitle}</div>
                    <div className="cardIcon">
                        <IconCompte number={note}>
                            <StarBorderIcon />
                        </IconCompte>
                        <IconCompte number={contrat}>
                            <BookmarkBorderIcon />
                        </IconCompte>
                        <IconCompte number={realisation}>
                            <RocketIcon />
                        </IconCompte>
                    </div>
                </div>
            </div>
        </div>)
}





export const CardSquare = (
    {
        children,
        className,
        src,
        callback
    }:
        {
            children: string,
            className?: string,
            src?: string,
            callback?: Function

        }) => {
    return (<div className={"item " + className} onClick={() => callback && alert('coucou')}>
        <img src={src} className="" alt="card" />
    </div>)
}