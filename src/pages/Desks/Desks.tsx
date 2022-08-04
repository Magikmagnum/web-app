import React, { useState } from 'react';
import './Desks.scss';

import { CardLine } from '../../components/Card/CardLine';
import { FormButton } from '../../components/Form/Form';
import { Title } from '../../components/Title/Title';
import PieChart from '../../components/Chart/PieChart'

import data from "../../helpers/competences";
import UserTrafic from "../../helpers/userTrafic"


const Desks = () => {


  const [useDataDo, setUserDataDo] = useState({
    labels: UserTrafic.map((data) => data.year),
    datasets: [{
      label: "User gain",
      data: UserTrafic.map((data) => data.userGain),
      fill: true, // permet de faire apparaitre le backgroundColor 
      //backgroundColor: '#0090071f',
      backgroundColor: [
        '#009007cf',
        '#000',
        '#aaa',
        '#ff9800ba'
      ],
      borderColor: '#009007',
      pointBorderColor: '#000',
      pointBorderWidth: 0,
      //tension: 1,
      borderRadius: 100,
      spacing: 14,
      cutout: '88%',
      hoverBackgroundColor: '#000',
      hoverBorderColor: '#000',
      borderWidth: 0,

    }]
  });



  return (
    <>
      <section className="contentDesk">

        <section className="group">
          <Title title="Tes competences" />
          <CardLine src={data[0].imageUri} title={data[0].title} subtitle={"Performances"} />
          <CardLine src={data[1].imageUri} title={data[1].title} subtitle={"Performances"} />
          <CardLine src={data[2].imageUri} title={data[2].title} subtitle={"Performances"} />
          <CardLine src={data[3].imageUri} title={data[3].title} subtitle={"Performances"} />

        </section>

        <section className="stat">
          <Title title="Statistic cumulative" />
          <div className="desks">
            <StatBox score={24.56} title="Offre de travail reçus" unity="total" style={{ width: "100px", margin: "24px 0" }} >
              <PieChart data={useDataDo} />
            </StatBox>

            <StatBox score={24.56} title="Offre de travail emis" unity="total" style={{ width: "100px", margin: "24px 0" }} >
              <PieChart data={useDataDo} />
            </StatBox>


          </div>
          <Title title="Vos colaborateurs" />
          
        </section>

      </section>

    </>
  );
};

export default Desks;

//<FormButton />


const StatBox = ({ children, score = 0, title, unity = "", style = {} }: { children: any, score?: number, title: string, unity?: string, style?: any }) => {
  return (
    <div className='statBox' >
      <div className="statTitle">{title}</div>
      <div className="statGraph" style={style}>
        {children}
      </div>
      <div className="statScore">
        <div className="statValue">{score}</div>
        <div className="statScoreUnits">{unity}</div>
      </div>
    </div>
  )
}
