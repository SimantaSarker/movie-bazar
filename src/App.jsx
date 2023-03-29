import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Contact from "./components/Contact/Contact";
import { Home } from "./components/Home/Home";
import SideCart from "./components/SideCart/SideCart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [watchTime, setWatchTime] = useState("");
  const handleWatchTime = (time) => {
    const previousWatchTime = JSON.parse(localStorage.getItem("watchTime"));
    if (!previousWatchTime) {
      localStorage.setItem("watchTime", time);
      setWatchTime(time)
    } else {
      const sum = previousWatchTime + time;
      localStorage.setItem("watchTime", sum);
      setWatchTime(sum);
    }
  };
  return (
    <div className="container-fluid bg-green">
      <div>
        <Header></Header>
      </div>
      <div className="main-container row p-2">
        <div className="home-container col-md-8">
          <Home handleWatchTime={handleWatchTime}></Home>
        </div>
        <div className="sideCart col-md-4 card">
          <SideCart watchTime={watchTime}></SideCart>
        </div>
      </div>
      <Contact></Contact>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
