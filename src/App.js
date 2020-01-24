import React, { WithRouter } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import Home from './pages/homepage2.js';
import Portfolio1 from './components/portfolio1.js';
import ContactForm from './components/contact.js';

import Logo from './images/ccphotologosolo.png';
import Insta from './images/instagram_icon.png';

import './App.css';

const App = props => {

  const links = [
                  {title:'Home',to:'/',cName:'cGrey'},
                  {title:'Real Estate',to:'/realestate',cName:'cGreen'},
                  {title:'Auto',to:'/auto',cName:'cRed'},
                  {title:'Pets',to:'/pets',cName: 'cYellow'}
                ];

    return (
      <Router>
        <div className="App">
          <section className="hero is-fullheight">
            <div className="hero-head">
              <nav className="navbar has-background-dark" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                  <NavLink to="/" className="navbar-item logo">
                    <span className="img"><img src={Logo} /></span>
                    <span className="text">Culligan - Coleman Photography</span>
                  </NavLink>
                </div>
                {/*ITERATE THROUGH LINKS IN NAVIGATION*/}
                <div className="navbar-end">
                  {links.map((link) => {
                    let customClass = link.cName+" active";
                    let baseClass = "navbar-item "+link.cName;
                    return (
                        <NavLink exact to={link.to} className={baseClass} activeClassName={customClass}>{link.title}</NavLink>
                    )
                  })}
                </div>
              </nav>
            </div>

            <div className="hero-body">
              <div className="tile is-ancestor is-vertical">
                <div className="tile is-parent centered">
                  <div className="tile is-12 main">
                    <Route exact path="/" render={Home} />
                    <Route path="/pets" render={(props) => <Portfolio1 category={"pets"} color={"cYellow"} />} />
                    <Route path="/realestate" render={(props) => <Portfolio1 category={"realestate"} color={"cGreen"} />} />
                    <Route path="/auto" render={(props) => <Portfolio1 category={"autos"} color={"cRed"} />} />
                  </div>
                </div>
                {/*ABOUT*/}
                <div className="tile is-parent is-vertical has-background-dark">
                  <div className="tile is-12 about">
                    <article>
                      <p>
                        We are a husband and wife duo, serving the Downers Grove and surrounding area.
                        Our focus is on Real Estate, Autos and Pet Portraits.
                      </p>
                      <br />
                      <p>
                        This website serves as a portfolio of example work. Please peruse at your leisure and feel free to contact us using the provided form,
                        if you have any questions or would like to schedule a meeting.
                      </p>
                      <br />
                      <p>
                        We look forward to hearing from you.
                      </p>
                    </article>
                  </div>
                  {/*CONTACT*/}
                  <div className="tile is-12 contact">
                    <ContactForm />
                  </div>
                </div>
              </div>
            </div>
            {/*FOOTER*/}
            <div className="hero-foot has-background-dark">
              <div className="tile is-parent">
                <div className="tile is-4">
                </div>
                <div className="tile is-4 centered">
                  <p>Copyright © Culligan-Coleman 2019</p>
                </div>
                <div className="tile is-4 align-right">
                  <span className="text">Visit us on Instagram</span>
                  <span className="img"><img src={Insta} width="50px"/></span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Router>
    );
  }

export default App;
