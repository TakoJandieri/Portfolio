import { useState } from "react";
import arrow from "../assets/arrow.png";
import github from "../assets/githup.png";
import linkedin from "../assets/linkedin.png";
import menuIcon from "../assets/menuIcon.svg.png";
import eye from "../assets/eye.png";
import html from "../assets/html.svg.png";
import css from "../assets/CSS3_logo.svg.png";
import js from "../assets/JavaScript-logo.png";
import typescript from "../assets/typescript.jpg";
import react from "../assets/react.svg";
import tic from "../assets/tictac.png";
import price from "../assets/price.jpeg";
import fylo from "../assets/fylo.jpeg";
import equ from "../assets/equ(1).png";
import clockApp from "../assets/clockApp.jpg";
import "./FrontEndPage.css";

// import "../index.css";

import { useNavigate, useLocation } from "react-router-dom";

function FrontEndPage() {
  const choosed = useLocation();
  console.log("vnaxot ra aris: ", choosed);

  const [click, setClick] = useState(false);

  const navigateToHomePage = useNavigate();

  const handleHomePage = () => {
    navigateToHomePage("/");
  };

  const handleClick = () => {
    const element = document.getElementById("Projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMenuBar = () => {
    setClick(!click);
  };

  const overMenu = () => {
    setClick(true);
  };

  const autoMenuDic = () => {
    if (click) {
      setClick(false);
    }
  };

  return (
    <>
      <div className="container">
        <div
          onMouseLeave={autoMenuDic}
          className="fmenuBar"
          style={{
            height: click ? "100%" : "60px",
            overflow: "hidden",
          }}
        >
          <button
            className="menuBtn"
            onClick={handleMenuBar}
            onMouseOver={overMenu}
          >
            <img
              className="menuIconImg"
              src={menuIcon}
              style={{
                transform: "",
              }}
            />
            Menu
          </button>
          <p className="tohome" onClick={handleHomePage}>
            Home
          </p>
          <a
            href="https://drive.google.com/file/d/1nw7KFtP8ZPGuYAzfmWmtZeGytpW617s-/view?usp=drive_link"
            target="_blank"
          >
            <p>
              Resume{" "}
              <img
                src={eye}
                style={{ width: 15, filter: "invert(100%)", marginLeft: 10 }}
              />
            </p>
          </a>
        </div>

        <div className="fheader">
          <h1>Tamar {"       "} Jandieri</h1>
          <h2>
            Front-End Developer
            {"  "}
            <a
              className="linkedInAncor"
              href="https://www.linkedin.com/in/tako-jandieri/"
              target="_blank"
            >
              <p style={{ display: "inline" }}>@TamarJandieri</p>
            </a>
          </h2>
          <div className="skills">
            Skills
            {/* <h1 style={{ marginTop: "0px", display: "inline" }}>Skills</h1> */}
            <div className="skillsLogos">
              <div>
                <img src={html} />
                HTML
              </div>
              <div>
                <img src={css} />
                CSS
              </div>
              <div>
                <img src={js} />
                JavaScript
              </div>
              <div>
                <img src={typescript} />
                TypeScript
              </div>
              <div style={{ lineHeight: 3 }}>
                <img src={react} />
                React js
              </div>
            </div>
          </div>
          <div className="fgetStartedArrow">
            <img className="arrowImg" src={arrow} onClick={handleClick} />
          </div>
        </div>
      </div>

      {/* Projects : */}

      <div id="Projects" className="ProjectSection">
        <nav className="projectNav">
          <h1 className="sectionName">Projects</h1>
          <div>
            <a
              href="https://github.com/TakoJandieri/DataAnalyticPortfolioProject"
              target="_blank"
            >
              <button className="github">
                <img className="githubImg" src={github} />
              </button>
            </a>

            <a
              href="https://www.linkedin.com/in/tako-jandieri/"
              target="_blank"
            >
              <button className="linkedIn">
                <img className="linkedInImg" src={linkedin} />
              </button>
            </a>
          </div>
        </nav>

        <div className="fprojectsContainer">
          <div className="fproject">
            <h3 className="projectName">Clock-App</h3>
            <a
              href="https://takojandieri.github.io/Clock-App-React/"
              target="_blank"
            >
              <div className="projectImg">
                <p>Click to open live URL</p>
                <img src={clockApp} />
              </div>
            </a>
            <p>
              Repo Link:{" "}
              <a
                href="https://github.com/TakoJandieri/Clock-App-React"
                target="_blank"
              >
                click here
              </a>
            </p>
          </div>

          <div className="fproject">
            <h3 className="projectName">Tic-Tac-Toe Game</h3>
            <a
              href="https://takojandieri.github.io/Tic-Tac-Toe_game/"
              target="_blank"
            >
              <div className="projectImg">
                <p>Click to open live URL</p>
                <img src={tic} />
              </div>
            </a>
            <p>
              Repo Link:{" "}
              <a
                href="https://github.com/TakoJandieri/Tic-Tac-Toe_game"
                target="_blank"
              >
                click here
              </a>
            </p>
          </div>

          <div className="fproject">
            <h3 className="projectName">Interactive pricing component </h3>
            <a href="https://lnkd.in/exe29jBB" target="_blank">
              <div className="projectImg">
                <p style={{ color: "black" }}>Click to open live URL</p>
                <img src={price} />
              </div>
            </a>
            <p>
              Repo Link:{" "}
              <a href="https://lnkd.in/eMeBGCuN" target="_blank">
                click here
              </a>
            </p>
          </div>

          <div className="fproject">
            <h3 className="projectName">Fylo-Landing-Page</h3>
            <a href="https://lnkd.in/eHGiksqq" target="_blank">
              <div className="projectImg">
                <p style={{ color: "black" }}>Click to open live URL</p>
                <img src={fylo} />
              </div>
            </a>
            <p>
              Repo Link:{" "}
              <a href="https://lnkd.in/eiaxD4RC" target="_blank">
                click here
              </a>
            </p>
          </div>

          <div className="fproject">
            <h3 className="projectName">Equalizer-Landing-Page</h3>
            <a href="https://lnkd.in/eSBi8MiD" target="_blank">
              <div className="projectImg">
                <p style={{ color: "black" }}>Click to open live URL</p>
                <img src={equ} />
              </div>
            </a>
            <p>
              Repo Link:{" "}
              <a href="https://lnkd.in/eWbRzhxU" target="_blank">
                click here
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FrontEndPage;
