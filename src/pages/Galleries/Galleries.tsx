import * as React from 'react';
import './Galleries.scss';

import imgp1 from '../../images/banks/img1.jpeg'
import imgp2 from '../../images/banks/img2.jpeg'
import imgp3 from '../../images/banks/img3.jpeg'

import imgp4 from '../../images/banks/img4.jpeg'
import imgp5 from '../../images/banks/img5.jpeg'
import imgp6 from '../../images/banks/img6.jpeg'
import imgp7 from '../../images/banks/img7.webp'


const Galleries = ({ desconnected }: { desconnected: Function }) => {


  console.log('coucou', localStorage.getItem("user"))


  return (
    <>

      <section className="loginContainer">
        <div className="loginCard">
          <div className="loginCcardHeader">
            <h1 className="loginTitle"  >Gallerie</h1>
            <p className="loginDescription">
              Have any questions or suggestions? Drop us a message. le compte est
            </p>
          </div>
        </div>
      </section>


      <div className="galleries">
        <Card className="img1">
          {imgp1}
        </Card>
        <Card className="img3">
          {imgp3}
        </Card>
        <Card className="img5">
          {imgp5}
        </Card>
        <Card className="img6">
          {imgp6}
        </Card>
        <Card className="img7">
          {imgp7}
        </Card>
        <Card className="img5">
          {imgp5}
        </Card>
        <Card className="img6">
          {imgp6}
        </Card>
        <Card className="img7">
          {imgp7}
        </Card>
      </div>

    </>
  );
};



export default Galleries;



const Card = ({ children, className }: { children: any, className?: string }) => {
  return (<div className={"element " + className}><img alt='coucou' src={children} /></div>)
}