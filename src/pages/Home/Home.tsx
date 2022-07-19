import * as React from 'react';
import './Home.scss';

interface ILoginProps {

}

const Home: React.FunctionComponent<ILoginProps> = (props) => {
  return (
    <>
      <section className="container">
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </section>
    </>
  );
};


export default Home;
