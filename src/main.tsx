import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// import HomePage from "./Components/HomePage.tsx";
// import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";
// import Test from "./Test/Test.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <HashRouter>
    <App />
  </HashRouter>
);
