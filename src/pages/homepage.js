import React, {Component} from 'react';
import portraits from '../images/sutton.jpg';
import cars from '../images/cad.jpg';
import ContactForm from '../components/contact.js';
import { pulse } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

import ChildBoxLink from '../components/childbox.js';

const Home = () =>{

  const styles = {
    rubberBand: {
      animation: 'x .8s',
      animationName: Radium.keyframes(pulse, 'pulse')
    }
  }

  const className = "tile is-child box left ";
  const realestate = "https://www.greatneighborhoodhomes.com/sites/default/files/images/3_sized.jpg";

  return (
    <StyleRoot>
    <section className="hero is-warning is-fullheight">
      <div className="hero-body">
        <div className="container">

          <div className="tile is-ancestor">

            <div className="tile is-vertical is-5">
              <div  className="tile is-parent is-vertical is-12">
                <ChildBoxLink cName={className + "cGreen"} link="/realestate" img={realestate} title="REAL ESTATE"></ChildBoxLink>
              </div>
              <div className="tile is-horizontal is-12">
                <div  className="tile is-parent is-6">
                  <ChildBoxLink cName={className + "cRed small"} link="/autos" img={cars} title="AUTOS"></ChildBoxLink>
                </div>
                <div className="tile is-parent is-6">
                  <ChildBoxLink cName={className + "cGrey small"} link="/pets" img={portraits} title="PETS"></ChildBoxLink>
                </div>
              </div>
            </div>

            <div className="tile is-parent is-vertical is-7">

              <div className="tile is-child box right cPink about">
                <p className="title">
                  <h5>ABOUT</h5>
                </p>
                <article>
                  <p>
                    We are a husband and wife duo, serving the Downers Grove and surrounding area.
                    Our focus is on Real Estate, Used Cars and Pet Portraits.
                  </p>
                  <br />
                  <p>
                    This website serves as a portfolio of example work. Please peruse at your leisure and contact us, using the form below,
                    if you have any questions or would like to schedule a meeting.
                  </p>
                  <br />
                  <p>
                    We look forward to hearing from you.
                  </p>
                </article>
              </div>

              <div className="tile is-child box right cBlue contact">

                <p className="title">
                  <h5>CONTACT</h5>
                </p>
                <ContactForm />

              </div>

            </div>

          </div>

        </div>
      </div>
  </section>
</StyleRoot>
  );
}

export default Home;
