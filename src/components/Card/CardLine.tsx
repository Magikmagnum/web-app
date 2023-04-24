import React, { useState, useMemo, useCallback } from 'react'

import { BiDotsVerticalRounded } from "react-icons/bi";
import { DashCounter } from '../../components/Dash/DashCounter';
import { HeaderMedium, HeaderMini } from '../Header/Header';

import './CardLine.scss';


export const CardLine = ({ src, title, subtitle }: { src?: string, title?: any, subtitle?: string }) => {


    const [isOpen, setIsOpen] = useState(false)



    const __handelClick = useCallback(() => {
        setIsOpen(e => !e)
    }, [])



    return (
        <div className="cardLineBox">
            <div className="cardLineHeader">
                <HeaderMedium srcImg={src} title={title} />
            </div>
            <div className="cardLineBody">
                {/* <DashCounter datasets={{
                    note: user.note,
                    contrat: user.contrat,
                    realisation: user.realisation,
                    aime: user.aime,
                }}
                /> */}
            </div>

            <div className="cardLineSet" onClick={__handelClick}>
                <BiDotsVerticalRounded />
            </div>

            {
                isOpen &&
                <div className="cardLineFooter">
                    <Item srcImg={src} title={title} />
                    <Item srcImg={src} title={title} />
                    <Item srcImg={src} title={title} />
                </div>

            }
        </div>
    )
}

const Item = ({ srcImg, title }: { srcImg: string | undefined, title: string }) => {
    return (
        <div className="cardLineItems">
            <HeaderMini srcImg={srcImg} title={title} description={"Il y a 6 jours"} />
            <div className="text textComment">300 euro / jours</div>
            <div className="text textComment">5 decembre 2022 - 12 fevrier 2023</div>
            <div className="text textComment">{("Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quos quia suscipit perferendis et tenetur ipsum eveniet at earum. Necessitatibus, asperiores? Nobis excepturi harum natus aperiam temporibus reprehenderit deserunt praesentium?").substr(0, 50)}</div>
        </div>
    )
}


