import React, {useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";

function App() {
    const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=jA1Rwr44llgz4th1eVeqJLfVDIJqa7Waefuhkpjg")
      .then(response => {
        console.log(response)
        setData(response.data);
      })
      .catch(error => {
        console.log("error", error);
      });
  }, []);
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
