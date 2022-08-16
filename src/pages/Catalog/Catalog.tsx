import React from 'react';
import { useNavigate } from 'react-router-dom'
//import { useFetch } from "../../hook/useGalerie";
import { Card, CardSquare } from "../../components/Card/Card";

import './Catalog.scss';
import data from "../../helpers/competences";



const Catalog = () => {

  // const [loadding, items] = useFetch("https://jsonplaceholder.typicode.com/comments?_limit=5")
  const navigate = useNavigate();


  const __handleOnClick = (id: number) => {
    navigate('/SkillClient', { state: { id: id } });
  }

  return (
    <>
      <section className="formContainer">
        <div className="formCard">
          <div className="loginCcardHeader textCenter">
            <h1 className="title titleMargin"  >Catalog</h1>
            <p className="titleComment">
              Have any questions or suggestions? Drop us a message. le compte est
            </p>
          </div>
        </div>
      </section>

      <section className="gallery2">
        {data.map((e, key) => <CardSquare key={key} callback={() => __handleOnClick(e.id)} className="itemSquare" src={e.imageUri} title={e.title} note={e.note} contrat={e.contrat} >{e.imageUri}</CardSquare>)}
      </section>
      <section className="gallery">
        {data.map((e, key) => <Card key={key} callback={() => __handleOnClick(e.id)} className="" srcCover={e.imageUri} title={e.title} avatar={e.avatarUri} subtitle={e.adresse} note={e.note} contrat={e.contrat} realisation={e.realisation}>{e.imageUri}</Card>)}
      </section>
    </>
  );
};

export default Catalog;

