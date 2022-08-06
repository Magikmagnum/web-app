import React, { useState, useMemo } from 'react'

import { BiDotsVerticalRounded } from "react-icons/bi";
import { DashCounter } from '../../components/Dash/DashCounter';


import data from "../../helpers/competences";
import './CardLine.scss';


export const CardLine = ({ src, title, subtitle }: { src?: string, title?: any, subtitle?: string }) => {


    const [isOpen, setIsOpen] = useState(false)


    const user = useMemo(() => {
        console.log('render')
        return data[6]
    }, [])




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

            <div className="cardLineSet">
                <BiDotsVerticalRounded />
            </div>

            {
                isOpen &&
                <div className="cardLineFooter">
                    <div className="cardLineItems">
                        

                    </div>
                </div>

            }
        </div>
    )
}


