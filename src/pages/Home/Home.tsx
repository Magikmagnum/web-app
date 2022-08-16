import * as React from 'react';
import './Home.scss';
//import { useFetch } from "../../hook/useGalerie";
import data from "../../helpers/competences";
import { Card, CardSquare } from "../../components/Card/Card";


interface ICatalogProps {

}

const Catalog: React.FunctionComponent<ICatalogProps> = (props) => {

  //const [loadding, items] = useFetch("https://jsonplaceholder.typicode.com/comments?_limit=5")


  return (
    <>
      <section className="formContainer">
        <div className="formCard">
          <div className="loginCcardHeader">
            <h1 className="loginTitle"  >Catalog</h1>
            <p className="loginDescription">
              Have any questions or suggestions? Drop us a message. le compte est
            </p>
          </div>
        </div>
      </section>

      <section className="gallery2">
        {data.map((e, key) => <CardSquare key={key} className="itemSquare" src={e.imageUri}>{e.imageUri}</CardSquare>)}

      </section>
      <section className="gallery">
        {data.map((e, key) => <Card key={key} className="" srcCover={e.imageUri} title={e.title} avatar={e.avatarUri} subtitle={e.adresse} note={e.note} contrat={e.contrat} realisation={e.realisation}>{e.imageUri}</Card>)}
      </section>
    </>
  );
};

export default Catalog;

