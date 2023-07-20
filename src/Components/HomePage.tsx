import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import animationData from "../assets/30723-data-animation.json";
import frontend from "../assets/124016-coding-time.json";
import "./HomePage.css";

function HomePage() {
  const navigate = useNavigate();

  const handleFrontend = () => {
    navigate("FrontendPage");
  };

  const handleAnalyst = () => {
    navigate("DataAnalyst");
  };

  return (
    <div className="homePage">
      <h1>Welcome</h1>
      <h2>Please choose the direction</h2>
      <div className="directions">
        <div className="FrontendBtn" onClick={handleFrontend}>
          <Lottie animationData={frontend} style={{ width: "50%" }} />
          Frontend Developer
        </div>

        <div style={{ width: "10%" }}></div>

        <div className="DataBtn" onClick={handleAnalyst}>
          <Lottie animationData={animationData} style={{ width: "50%" }} />
          Data Analyst
        </div>
      </div>
    </div>
  );
}

export default HomePage;
