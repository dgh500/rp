import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';

const Home = () => {

  return (
    <>
    <Carousel id="desktopCarousel" className="d-none d-md-block">
      <Carousel.Item>
        <img className="d-block mx-auto" src="images/banner1.jpg" alt="First slide" />
        <Carousel.Caption>
          <h5>BIRTHDAY</h5>
          <p>Looking for the perfect personalised Birthday Gift for that special person?</p>
          <Link to="/contact">CLICK HERE</Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block mx-auto" src="images/banner2.jpg" alt="Second slide" />
        <Carousel.Caption className="reviewText text-center">
        <p><q>
        I contacted Holly with a concept and she came back with a beautiful idea for my celebratory frame.<br />
        The frame looks even more beautiful than in the photo!<br />
        Very happy with the product & service<br />
        Thank You!</q></p>
          <Link to="/contact">CLICK HERE</Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <Carousel id="mobileCarousel" className="d-block d-md-none">
      <Carousel.Item>
        <img className="d-block mx-auto" src="images/banner1mob.jpg" alt="First slide" />
        <Carousel.Caption>
          <h5>BIRTHDAY</h5>
          <p>Looking for the perfect personalised Birthday Gift for that special person?</p>
          <Link to="/contact">CLICK HERE</Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block mx-auto" src="images/banner1mob.jpg" alt="Second slide" />
        <Carousel.Caption className="reviewText text-center">
        <p><q>
        I contacted Holly with a concept and she came back with a beautiful idea for my celebratory frame.<br />
        The frame looks even more beautiful than in the photo!<br />
        Very happy with the product & service<br />
        Thank You!</q></p>
          <Link to="/contact">CLICK HERE</Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    { /* // <div id="desktopCarousel" className="carousel carousel-fade mx-auto d-none d-md-block" data-ride="carousel">


    // <div id="mobileCarousel" className="carousel slide carousel-fade d-block d-md-none" data-ride="carousel">
    // <div className="carousel-inner">
    // <div className="carousel-item active">
    // <img className="d-block w-100" src="images/banner1mob.jpg" alt="First slide" />
    // <div className="carousel-caption d-block">
    // <h5>BIRTHDAY</h5>
    // <p>Looking for the perfect personalised Birthday Gift for that special person?</p>
    // <a href="#">CLICK HERE</a>
    // </div>
    // </div>
    // <div className="carousel-item">
    // <img className="d-block w-100" src="images/banner1mob.jpg" alt="First slide" />
    // <div className="carousel-caption d-block">
    // <h5>BIRTHDAY 2</h5>
    // <p>Looking for the perfect personalised Birthday Gift for that special person?</p>
    // <a href="#x">CLICK HERE</a>
    // </div>
    // </div>
    // <div className="carousel-item">
    // <img className="d-block w-100" src="images/banner1mob.jpg" alt="First slide" />
    // <div className="carousel-caption d-block">
    // <h5>BIRTHDAY 3</h5>
    // <p>Looking for the perfect personalised Birthday Gift for that special person?</p>
    // <a href="#xx">CLICK HERE</a>
    // </div>
    // </div>
    // </div>
    // </div> */ }

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
    <p>Contact me with ANY theme and I will personalise it to match your wishes, and create something special for you!</p>
    <h5>Step 2 - See Some Ideas!</h5>
    <p>Based on our chat I will mock up a few designs and you can choose your favourite!</p>
    <h5>Step 3 - Make Someone Happy!</h5>
    <p>You've chosen your design and I will make your unique personalised gift to make someone special very happy!</p>
    </div>
    </div>
    </div>
    </div>
    </>
  );
}

export default Home;
