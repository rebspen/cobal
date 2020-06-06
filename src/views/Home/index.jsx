import React from "react";
import Button from "../../components/Button/index";
import "./style.css";
import Nav from "../../components/Nav";

const Home = () => {
  return (
    <div>
      <div className="header">
        <section className="header-img">
          <Nav button={false} colour={"transparent"} />
          <h1>
            Make Your Team <br></br>the best it can be
          </h1>
          <Button className="margin-bottom">Enter</Button>
        </section>
      </div>
      <section className="main-home">
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="400"
          viewBox="0 0 689 671"
          className="circle"
        >
        
          <g id="circle" clip-path="url(#clip-circle)">
            <path
              id="Caminho_1830"
              data-name="Caminho 1830"
              d="M258,0C400.489,0,516,115.511,516,258S400.489,516,258,516,0,400.489,0,258A257.994,257.994,0,0,1,258,0Z"
              transform="translate(87 78)"
              fill="none"
              stroke="#f1f5ff"
              stroke-width="90"
              opacity="0.65"
            />
          </g>
        </svg> */}
        <img className="single-line" src="./single-line.png" alt="" />
        <p className="small-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br></br> sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="augment">
          <img className="landing" src="./img-landing.png" alt="" />
          <div className="aug-text">
            <h2>Augmented reality</h2>
            <img src="./double-line.png" alt="" />
            <p>
              Duis autre irure dolor in reprehenferit in volupulate vliet esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidadyay no proident, sunt in culpa qui officia deserunt mollit
              anim id est laborumn.
            </p>
            <Button small primary>
              LEARN MORE
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
