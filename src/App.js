import React, {useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import Picture from "./components/Picture";
import Card from "./components/Card";
import Info from "./components/Info";


function App() {
    const [data, setData] = useState({});
    console.log(data);
    const dataKeys = Object.keys(data);

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
      <Header data={data} />
      <Card data={data} />
      <Info data={data} />
    </div>
  );
}

export default App;
