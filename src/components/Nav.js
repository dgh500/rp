import React from 'react';
// import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const RpNav = () => {

  return (
    <>
    <div id="strapline">
      <span className="d-block d-md-none">Beautiful Personalised Red Panda Gifts</span>
    </div>

    <Navbar collapseOnSelect expand="md" id="nav">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <a href="/" className="d-block d-md-none navbar-brand"><img src="/images/logo-trans-150.png" alt="Red Panda Gifts" id="pandaMob" /></a>
      <a href="/" className="d-none d-md-block navbar-brand"><img src="/images/logo-trans-150.png" alt="Red Panda Gifts" id="panda" /></a>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <ul className="navbar-nav">
            <li className="nav-item"><Nav.Link href="#test">Frames</Nav.Link></li>
            <li className="nav-item"><Nav.Link href="/what-we-do">What We Do</Nav.Link></li>
            <li  className="nav-item d-none d-md-block"id="navSpacer">&nbsp;</li>
            <li className="nav-item"><Nav.Link href="/about">About</Nav.Link></li>
            <li className="nav-item"><Nav.Link href="/contact">Contact</Nav.Link></li>
          </ul>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    </>
  );
}

export default RpNav;


/*
   <nav className="navbar navbar-expand-md pymd-0 px-md-20" id="nav">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerContainer" aria-controls="navbarTogglerContainer" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <a href="/" className="d-block d-md-none navbar-brand"><img src="/images/logo-trans-150.png" alt="Red Panda Gifts" id="pandaMob" /></a>
      <a href="/" className="d-none d-md-block navbar-brand"><img src="/images/logo-trans-150.png" alt="Red Panda Gifts" id="panda" /></a>

      <div className="collapse navbar-collapse" id="navbarTogglerContainer">
        <ul className="navbar-nav mx-auto mt-2">
          <li className="nav-item">Frames</li>
          <Link to="/what-we-do"><li className="nav-item">What We Do</li></Link>
          <li className="nav-item d-none d-md-block" id="navSpacer">&nbsp;</li>
          <Link to="/about" onClick={()=>setExpanded("navbar-toggler collapsed")}><li className="nav-item">About</li></Link>
          <Link to="/contact"><li className="nav-item">Contact</li></Link>
        </ul>
      </div>
    </nav> */
