import React from 'react';

const Nav = () => {

  return (
    <>
    <div id="strapline">
      <span className="d-block d-md-none">Beautiful Personalised Red Panda Gifts</span>
    </div>

    <nav className="navbar navbar-expand-md py-0 px-20" id="nav">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerContainer" aria-controls="navbarTogglerContainer" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <a href="/" className="d-block d-md-none navbar-brand"><img src="/images/logo-trans-150.png" alt="Red Panda Gifts" id="pandaMob" /></a>
      <a href="/" className="d-none d-md-block navbar-brand"><img src="/images/logo-trans-150.png" alt="Red Panda Gifts" id="panda" /></a>

      <div className="collapse navbar-collapse" id="navbarTogglerContainer">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">Frames</li>
          <li className="nav-item"><a href="#whatWeDo">What We Do</a></li>
          <li className="nav-item d-none d-md-block" id="navSpacer">&nbsp;</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Contact</li>
          {/* <li class="nav-item dropdown text-center">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown 1
            </a>
            <div class="dropdown-menu text-center" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Heading</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Option 1</a>
              <a class="dropdown-item" href="#">Option 2</a>
            </div>
          </li>
          <li class="nav-item dropdown text-center">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown 2
            </a>
            <div class="dropdown-menu text-center" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Heading</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Option 1</a>
              <a class="dropdown-item" href="#">Option 2</a>
            </div>
          </li>*/ }
        </ul>
          {/* <a class="nav-link d-none d-md-block" id="contactLink" href="#"><i class="far fa-envelope fa-2x"></i></a>*/ }
      </div>
    </nav>
    </>
  );
}

export default Nav;
