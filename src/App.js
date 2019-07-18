import React, { useState, useEffect } from "react";
import axios from "axios";
//import "semantic-ui-css/semantic.min.css";
//import styled from "styled-components";
import HeaderContainer from "./components/Header";
import Cards from "./components/Card";
import Info from "./components/Info";
import { Input } from "semantic-ui-react";
import { Page } from "./components/Styled";

function App() {
   
    const [data, setData] = useState({});
    const [newDate, setNewDate] = useState("");

    useEffect(() => {
        axios
            .get(
                `https://api.nasa.gov/planetary/apod?api_key=jA1Rwr44llgz4th1eVeqJLfVDIJqa7Waefuhkpjg&date=${newDate}`
            )
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.log("error", error);
            });
    }, [newDate]);

    useEffect(() => {
        axios
            .get("https://api.nasa.gov/planetary/apod?api_key=jA1Rwr44llgz4th1eVeqJLfVDIJqa7Waefuhkpjg")
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.log("error", error);
            });
    }, []);

    return (
    <Page>
        <HeaderContainer data = { data } />
            <Input type = "date"
                icon = "calendar"
                iconPosition = "left"
                label = {{ tag: true, content: "Pick a Date" }}
                labelPosition = "right"
                max = { data.date }
                onChange = { e => setNewDate(e.target.value) } /> 
        <Cards data = { data } /> 
        <Info data = { data } /> 
    </Page>
    );
}

export default App;
