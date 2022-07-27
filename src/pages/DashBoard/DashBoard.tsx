import React from 'react';
import { useNavigate } from 'react-router-dom'
//import { useFetch } from "../../hook/useGalerie";
import { Card, CardSquare } from "../../components/Card/Card";

import './DashBoard.scss';
import data from "../../helpers/competences";



const DashBoard = () => {

  // const [loadding, items] = useFetch("https://jsonplaceholder.typicode.com/comments?_limit=5")
  const navigate = useNavigate();


  const __handleOnClick = () => {
    navigate('/galleries');
  }


  return (
    <>
      <section className="loginContainer">
        <div className="loginCard">
          <div className="loginCcardHeader">
            <h1 className="loginTitle"  >DashBoard</h1>
            <p className="loginDescription">
              Have any questions or suggestions? Drop us a message. le compte est
            </p>
          </div>
        </div>
      </section>

      <section className="gallery2">
        {data.map((e, key) => <CardSquare key={key} callback={() => __handleOnClick()} className="itemSquare" src={e.imageUri}>{e.imageUri}</CardSquare>)}

      </section>
      <section className="gallery">
        {data.map((e, key) => <Card key={key} callback={() => __handleOnClick()} className="" srcCover={e.imageUri} title={e.title} avatar={e.avatarUri} subtitle={e.adresse} note={e.note} contrat={e.contrat} realisation={e.realisation}>{e.imageUri}</Card>)}
      </section>
    </>
  );
};

export default DashBoard;

