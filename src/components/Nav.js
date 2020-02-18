import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {

  return (
    <>
    <div id="strapline">
      <span className="d-block d-md-none">Beautiful Personalised Red Panda Gifts</span>
    </div>

    <nav className="navbar navbar-expand-md pymd-0 px-md-20" id="nav">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerContainer" aria-controls="navbarTogglerContainer" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <a href="/" className="d-block d-md-none navbar-brand"><img src="/images/logo-trans-150.png" alt="Red Panda Gifts" id="pandaMob" /></a>
      <a href="/" className="d-none d-md-block navbar-brand"><img src="/images/logo-trans-150.png" alt="Red Panda Gifts" id="panda" /></a>

      <div className="collapse navbar-collapse" id="navbarTogglerContainer">
        <ul className="navbar-nav mx-auto mt-2">
          <li className="nav-item">Frames</li>
          <li className="nav-item"><a href="#whatWeDo">What We Do</a></li>
          <li className="nav-item d-none d-md-block" id="navSpacer">&nbsp;</li>
          <li className="nav-item"><Link to="/about">About</Link></li>
          <li className="nav-item"><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
    </>
  );
}

export default Nav;
