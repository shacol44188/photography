import React, {Component} from 'react';
import portraits from '../images/suttoneyes.png';
import cars from '../images/autos.jpg';
import realestate from '../images/realestate.jpg';

import ChildBoxLink from '../components/childbox.js';

const Home = () =>{

  const className = "tile is-child box left ";

  return (
        <div className="content cGrey">
          <div className="tile is-parent is-horizontal">
            <div className="tile is-4">
              <ChildBoxLink cName={"picBox"} link="/realestate" img={realestate} title="REAL ESTATE"></ChildBoxLink>
            </div>
            <div className="tile is-4">
              <ChildBoxLink cName={"picBox"} link="/auto" img={cars} title="AUTO"></ChildBoxLink>
            </div>
            <div className="tile is-4">
              <ChildBoxLink cName={"picBox"} link="/pets" img={portraits} title="PETS"></ChildBoxLink>
            </div>
          </div>
        </div>
  );
}

export default Home;
