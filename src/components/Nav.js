import React from 'react';

const Nav = () => {

  return (
    <>
    <div id="strapline">
      <span class="d-block d-md-none">Beautiful Personalised Red Panda Gifts</span>
    </div>
    <div class="navbar navbar-expand-md py-0 px-20" id="nav">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerContainer" aria-controls="navbarTogglerContainer" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a href="/home" class="d-block d-md-none navbar-brand"><img src="/images/logo-trans-150.png" id="pandaMob" /></a>
      <a href="/home" class="d-none d-md-block"><img src="/images/logo-trans-150.png" id="panda" /></a>

      <div class="collapse navbar-collapse" id="navbarTogglerContainer">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item dropdown text-center">
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
          </li>
        </ul>
        <a class="nav-link d-none d-md-block" id="contactLink" href="#"><i class="far fa-envelope fa-2x"></i></a>
      </div>
    </div>
    </>
  );
}

export default Nav;
