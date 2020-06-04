import React from "react";
import Button from "../../components/Button/index";
import "./style.css";

const Home = () => {
  return (
    <div>
      <div className="header">
        <section className="header-img">
          <h1>
            Make Your Team <br></br>the best it can be
          </h1>
          <Button>Enter</Button>
        </section>
      </div>
      <section className="main-home">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br></br> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className="augment">
          <img className="landing" src = "./img-landing.png" alt=""/>
          <div className="aug-text">
            <h2>Augmented reality</h2>
            <p>
              Duis autre irure dolor in reprehenferit in volupulate vliet esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidadyay no proident, sunt in culpa qui officia deserunt mollit
              anim id est laborumn.
            </p>
            <Button primary>LEARN MORE</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
