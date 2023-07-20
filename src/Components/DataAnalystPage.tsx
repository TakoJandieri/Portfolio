import { useState } from "react";
import arrow from "../assets/arrow.png";
import github from "../assets/githup.png";
import linkedin from "../assets/linkedin.png";
import menuIcon from "../assets/menuIcon.svg.png";
import menuArrow from "../assets/down-arrow-of-angle.svg";
import eye from "../assets/eye.png";
import "./DataAnalyst.css";
// import "../index.css";

import { useNavigate, useLocation } from "react-router-dom";

function DataAnalystPage() {
  const choosed = useLocation();
  console.log("vnaxot ra aris: ", choosed);

  const [click, setClick] = useState(false);

  const [certificateClick, setCertificateClick] = useState(false);

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
    setCertificateClick(false);
  };

  const overMenu = () => {
    setClick(true);
  };

  const autoMenuDic = () => {
    if (click && certificateClick) {
      setClick(false);
      setCertificateClick(false);
    } else if (click) {
      setClick(false);
    }
  };

  const handleCertificate = () => {
    if (click) {
      setCertificateClick(!certificateClick);
    }
  };

  return (
    <>
      <div className="container">
        <div
          onMouseLeave={autoMenuDic}
          className="menuBar"
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
          <p
            className="certificates"
            onClick={handleCertificate}
            style={{
              height: certificateClick ? "100%" : "20px",
            }}
          >
            Certificates {":"}
            <img
              className="menuArrowImg"
              src={menuArrow}
              style={{
                transform: certificateClick ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
            <span
              style={{
                display: "block",
                textAlign: "left",
                marginTop: "10px",
                marginLeft: 40,
              }}
            >
              <a
                className="certificateLink"
                href="https://drive.google.com/file/d/14nhnLwcv36BNezpq-TV0PhWm9iyx-2tc/view?usp=drive_link"
                target="_blank"
              >
                <span style={{ display: "block" }}>
                  <img
                    src={eye}
                    style={{
                      width: 15,
                      filter: "invert(100%)",
                      marginLeft: 10,
                      marginRight: 10,
                    }}
                  />{" "}
                  Foundations: Data, Data, Everywhere
                </span>
              </a>

              <a
                className="certificateLink"
                href="https://drive.google.com/file/d/14nhFm6AKG2N6Baxq9-z9pej2kuKKclRO/view?usp=drive_link"
                target="_blank"
              >
                <span style={{ display: "block" }}>
                  <img
                    src={eye}
                    style={{
                      width: 15,
                      filter: "invert(100%)",
                      marginLeft: 10,
                      marginRight: 10,
                    }}
                  />{" "}
                  {"  "} Ask Questions to Make Data-Driven Decisions
                </span>
              </a>

              <a
                className="certificateLink"
                href="https://drive.google.com/file/d/14mqpS5j7eg2veak82B5SCPLBuBQsq1lu/view?usp=drive_link"
                target="_blank"
              >
                <span style={{ display: "block" }}>
                  <img
                    src={eye}
                    style={{
                      width: 15,
                      filter: "invert(100%)",
                      marginLeft: 10,
                      marginRight: 10,
                    }}
                  />{" "}
                  Data Analysis with R Programming
                </span>
              </a>
            </span>
          </p>
        </div>

        <div className="header">
          <h1>Tamar Jandieri</h1>
          <h2>
            Data Analyst well versed in SQL, Python, Tableau, Power BI{"  "}
            <a
              className="linkedInAncor"
              href="https://www.linkedin.com/in/tako-jandieri/"
              target="_blank"
            >
              <p style={{ display: "inline" }}>@TamarJandieri</p>
            </a>
          </h2>
          <div className="getStartedArrow">
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
        <div className="projectsContainer">
          <div className="project">
            <h3>DATA EXPLORATION</h3>
            <a
              href="https://github.com/TakoJandieri/DataAnalyticPortfolioProject/blob/main/COVID%20Portfolio%20Project.sql"
              target="_blank"
            >
              <button className="projectBtn">
                <h1>Covid-19</h1>
                <p>Click to view the Project</p>
              </button>
            </a>
            <p>Using SQL Server to explore global COVID 19 data.</p>
          </div>

          <div className="project">
            <h3>Tableau Dashboards</h3>
            <a
              href="https://public.tableau.com/app/profile/tamar.jandieri/viz/CovidDashboard_16876933142170/Dashboard1"
              target="_blank"
            >
              <button className="tableauProjectBtn">
                <p>Click to view the Project</p>
              </button>
            </a>
            <p>Tableau Dashboards for project on COVID 19</p>
          </div>

          <div className="project">
            <h3>Movie Correlation</h3>
            <a
              href="https://github.com/TakoJandieri/DataAnalyticPortfolioProject/blob/main/Movie%20Correlation.ipynb"
              target="_blank"
            >
              <button className="movieProjectBtn">
                <p>Click to view the Project</p>
              </button>
            </a>

            <p>
              Looking at what variables effect the gross revenue from movies,
              using Python.
            </p>
          </div>

          <div className="project">
            <h3>Data Cleaning in SQL</h3>
            <a
              href="https://github.com/TakoJandieri/DataAnalyticPortfolioProject/blob/main/NashvilleHousing.sql"
              target="_blank"
            >
              <button className="nashvilleProjectBtn">
                <p>Click to view the Project</p>
              </button>
            </a>
            <p>
              Taking raw housing data and transform it in SQL Server to make it
              more usable for analysis.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default DataAnalystPage;
