import React from 'react';

const Home = () => {

  return (
    <>
    <div id="desktopCarousel" className="carousel carousel-fade mx-auto d-none d-md-block" data-ride="carousel">
    <div className="carousel-inner">
    <div className="carousel-item active">
    <img className="d-block mx-auto" src="images/banner1.jpg" alt="First slide" />
    <div className="carousel-caption d-none d-md-block">
    <h5>BIRTHDAY</h5>
    <p>Looking for the perfect personalised Birthday Gift for that special person?</p>
    <a href="#">CLICK HERE</a>
    </div>
    </div>
    <div className="carousel-item">
    <img className="d-block mx-auto" src="images/banner2.jpg" alt="First slide" />
    <p className="reviewText text-center"><q>
    I contacted Holly with a concept and she came back with a beautiful idea for my celebratory frame.<br />
    The frame looks even more beautiful than in the photo!<br />
    Very happy with the product & service<br />
    Thank You!</q></p>
    </div>
    <div className="carousel-item">
    <img className="d-block mx-auto" src="images/banner1.jpg" alt="First slide" />
    <div className="carousel-caption d-none d-md-block">
    <h5>BIRTHDAY 3</h5>
    <p>Looking for the perfect personalised Birthday Gift for that special person?</p>
    <a href="#">CLICK HERE</a>
    </div>
    </div>
    </div>
    <a className="carousel-control-prev" href="#desktopCarousel" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#desktopCarousel" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
    </a>
    </div>

    <div id="mobileCarousel" className="carousel slide carousel-fade d-block d-md-none" data-ride="carousel">
    <div className="carousel-inner">
    <div className="carousel-item active">
    <img className="d-block w-100" src="images/banner1mob.jpg" alt="First slide" />
    <div className="carousel-caption d-block">
    <h5>BIRTHDAY</h5>
    <p>Looking for the perfect personalised Birthday Gift for that special person?</p>
    <a href="#">CLICK HERE</a>
    </div>
    </div>
    <div className="carousel-item">
    <img className="d-block w-100" src="images/banner1mob.jpg" alt="First slide" />
    <div className="carousel-caption d-block">
    <h5>BIRTHDAY 2</h5>
    <p>Looking for the perfect personalised Birthday Gift for that special person?</p>
    <a href="#">CLICK HERE</a>
    </div>
    </div>
    <div className="carousel-item">
    <img className="d-block w-100" src="images/banner1mob.jpg" alt="First slide" />
    <div className="carousel-caption d-block">
    <h5>BIRTHDAY 3</h5>
    <p>Looking for the perfect personalised Birthday Gift for that special person?</p>
    <a href="#">CLICK HERE</a>
    </div>
    </div>
    </div>
    </div>


    <div id="framesContainer" className="mx-auto">
    <div className="row">
    <div className="col-12">
    <h3 className="m-0">FRAMES...</h3>
    </div>
    </div>
    <div className="row no-gutters">

    </div>
    </div>

    <div id="whatContainer" className="mx-auto">
    <div className="row">
    <div className="col-12">
    <a name="whatWeDo"></a>
    <h3>WHAT WE DO...</h3>
    </div>
    </div>
    <div className="row">
    <div className="col-12 col-md-9">
    <div id="whatWeDoPersonalisedFrames" className="p-3 mb-2">
    <div className="gridCaption p-3">
    <h5>PERSONALISED FRAMES</h5>
    <p>Whatever the occasion treat someone special in your life with a with a one-of-a-kind personalised frame</p>
    </div>
    </div>
    </div>

    <div className="col-12 col-md-3 m-0">
    <div className="whatWeDoExplanation">
    <h5>Step 1 - Get in touch!</h5>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <h5>Step 2 - Get in touch!</h5>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <h5>Step 3 - Get in touch!</h5>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    </div>
    </div>
    </div>
    </>
  );
}

export default Home;
