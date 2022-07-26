import React from 'react';
import './Liste.scss';



export const Liste = ({ title = null, items = [] }: { title?: string | null, items?: any[] }) => {

    return (
        <section className="boardContainer">
            <ul className="boardList">
                {title && <li className={"boardItems"} style={{ fontWeight: "bold", fontSize: 18 }} key={1}> {title}</li>}
                {items.map((index, key) => (<li className={"boardItems " + __colorLine(key)} key={index.id + 1} > {index.name} </li>))}
            </ul>
        </section>
    )
}




export const Table = ({ title = null, headers = null, bodys = [] }: { title?: string | null, headers?: string[] | null, bodys?: any[] }) => {


    const THead = ({ item }: { item: any[] }) => {
        return (
            <tr className="boardList">
                {item.map((index, key) => <td className="boardItems" key={key}>{index[0]}</td>)}
            </tr>
        )
    }

    const TBody = ({ items, colorline = 0 }: { items: any[], colorline?: number }) => {
        return (
            <tr className={"boardList white" + __colorLine(colorline)}>
                {items.map((index, key) => <td className="boardItems" key={key}>{index[1].toString().substr(0, 40) + (index[1].toString().length <= 40 ? "" : "...")}</td>)}
            </tr>
        )
    }


    return (
        <section className="boardContainer">
            {title && <h3 className={"boardItems"} style={{ fontWeight: "bold", fontSize: 18 }} key={1}> {title}</h3>}
            <table className="boardList">
                <thead>
                    {
                        headers !== null && <THead item={Object.entries(headers)} />
                    }
                </thead>
                <tbody>
                    {
                        bodys.map((item, key) => <TBody items={Object.entries(item)} key={key} colorline={key} />)
                    }
                </tbody>
            </table>
        </section>
    )
}




/**
 * 
 * @param key: key is index of the fild in liste
 * @returns string 
 */
const __colorLine = (key: number): string => {

    let backgroundColor: string = "";
    key % 2 === 1 ? backgroundColor = "white" : backgroundColor = "";
    return backgroundColor;
}

