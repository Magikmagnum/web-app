import React, { useState } from 'react';
import './Desks.scss';

import UserTrafic from "../../helpers/userTrafic"
import data from "../../helpers/competences"
//import BarChart from '../../components/Chart/BarChart';
import LineChart from '../../components/Chart/LineChart';
import PieChart from '../../components/Chart/PieChart'
import BarChart from '../../components/Chart/BarChart';
import RadarChart from '../../components/Chart/RadarChart';
import { Liste } from '../../components/Liste/Liste'


const Desks = () => {

  const [useData, setUserData] = useState({
    labels: UserTrafic.map((data) => data.year),
    datasets: [{
      label: "User gain",
      data: UserTrafic.map((data) => data.userGain),
      fill: true, // permet de faire apparaitre le backgroundColor 
      backgroundColor: '#0090071f',
      borderColor: '#009007',
      pointBorderColor: '#000',
      pointBorderWidth: 0,
      tension: 0.3,
      borderWidth: 0,
    },
    {
      label: "User gain",
      data: UserTrafic.map((data) => data.userLost),
      fill: true, // permet de faire apparaitre le backgroundColor 
      backgroundColor: '#00000069',
      borderColor: '#009007',
      pointBorderColor: '#000',
      pointBorderWidth: 0,
      tension: 0.3,
      borderWidth: 0,
    }]
  });





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
      tension: 0.3,
    }]
  });

  const [useDataBar, setUserDataBar] = useState({
    labels: UserTrafic.map((data) => data.year),
    datasets: [{
      label: "User gain",
      data: UserTrafic.map((data) => data.userLost),
      fill: true, // permet de faire apparaitre le backgroundColor 
      backgroundColor: '#0090071f',
      borderColor: '#009007',
      pointBorderColor: '#000',
      pointBorderWidth: 0,
      tension: 0.3,
      //borderWidth: 3,
      borderRadius: Number.MAX_VALUE,
      borderSkipped: false,
    }]
  });




  const [useDataRadar, setUserDataRadar] = useState({
    labels: UserTrafic.map((data) => data.year),
    datasets: [
      {
        label: "User gain",
        data: UserTrafic.map((data) => data.userLost),
        fill: true, // permet de faire apparaitre le backgroundColor 
        backgroundColor: '#0090071f',
        borderColor: '#009007',
        pointBorderColor: '#000',
        //pointBorderWidth: 0,
        //tension: 0.3,
        borderWidth: 0,
        //borderRadius: Number.MAX_VALUE,
        borderSkipped: false,
      },
    ]
  });





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

      <section className="loginContainer">
        <div className="loginCard">
          <div className="loginCcardHeader">
            <h1 className="loginTitle"  >Desk</h1>
            <p className="loginDescription">
              Have any questions or suggestions? Drop us a message. le compte est
            </p>
          </div>
        </div>
      </section>


      <div className="Desks">
        <StatBox score={193627} title="Nombre de visiteur" unity="Jours">
          <LineChart data={useData} />
        </StatBox>
        <StatBox score={49} title="Nombre d'offre" unity="Mois">
          <LineChart data={useData} />
        </StatBox>
        <StatBox score={243} title="Nombre d'abonné" >
          <LineChart data={useData1} />
        </StatBox>
        <StatBox score={2341} title="Nombre de commentaire" >
          <BarChart data={useDataBar} />
        </StatBox>
        <StatBox score={2341} title="Nombre de commentaire" >
          <BarChart data={useData} />
        </StatBox>
        <StatBox score={24.56} title="Nombre de Likes" unity="Likes">
          <PieChart data={useDataDo} />
        </StatBox>
        <StatBox score={24.56} title="Performances" unity="Likes">
          <RadarChart data={useDataRadar} />
        </StatBox>

        <StatBox score={24.56} title="Performances" unity="Likes">
          <RadarChart data={useData} />
        </StatBox>

      </div>

      <Liste items={data} />

    </>
  );
};



export default Desks;



const StatBox = ({ children, score = 0, title, unity = "" }: { children: any, score?: number, title: string, unity?: string }) => {
  return (
    <div className='statBox'>
      <div className="statTitle">{title}</div>
      <div className="statGraph">
        {children}
      </div>
      <div className="statScore">
        <div className="statValue">{score}</div>
        <div className="statScoreUnits">{unity}</div>
      </div>
    </div>
  )
}