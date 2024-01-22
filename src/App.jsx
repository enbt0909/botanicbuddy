import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar.jsx";
import PlantList from "./components/PlantList.jsx";
import UserGuide from "./components/UserGuide.jsx";
import Calendar from "./components/Calendar.jsx";
import Textcontent from "./components/Textcontent.jsx";
import Home from "./components/Home.jsx";
import zweig from "./images/zweig.png";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'react-calendar/dist/Calendar.css';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import "./index.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [plantData, setPlantData] = useState([]);

  useEffect(() => {
    if (searchTerm) {
      axios
        .get(
          `/api/api/v1/plants/search?q=${searchTerm}&token=5YfxpO5BodGBNcA51aO7GOk-eo3ntdSWhZlZGsVs8Ro`
        )
        .then((response) => {
          setPlantData(response.data.data);
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
        });
    }
  }, [searchTerm]);

  return (
    <Router>
      <div className="header-box">
        <h1>BOTANIKBUDDY</h1>
        <SearchBar setSearchTerm={setSearchTerm} />
        <Home className="home" />
        <Routes>
          <Route path="/" element={<Textcontent />} />
          <Route path="/pflanzensuche" element={<PlantList plantData={plantData} />} />
          <Route path="/guide" element={<UserGuide />} />
          <Route path="/home" element={<Textcontent />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </div>

      <div className="box-left">
        <span>BOT<br />ANIK<br />BUD<br />DY
        </span>
        <img src={zweig} alt="Bild" />
      </div>
    </Router>
  );
}

export default App;
