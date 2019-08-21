import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import HeaderContainer from "./components/Header";
import CardContainer from "./components/Card";
import InfoContainer from "./components/Info";
//import InputContainer from "./components/Input";
import FooterContainer from "./components/Footer";

const Page = styled.div `
        background-color: #3f4552;
        text-align: center;
        align-content: center;
        align-items: center;
        justify-content: center;
        height: 100%;
        font-size: 1.5em;
        color: "white;
        margin-bottom: 50px;
`;

function App() {
   
    const [data, setData] = useState({});
    const [newDate, setNewDate] = useState("");
    const apiKey = 'jA1Rwr44llgz4th1eVeqJLfVDIJqa7Waefuhkpjg'

    useEffect(() => {
        axios
            .get(
                `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${newDate}`
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
            .get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
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
            <p>Pick a Date</p>
            <input type="date" name="date" max={data.date} onChange={e => setNewDate(e.target.value)} />
        <CardContainer data = { data } /> 
        <InfoContainer data = { data } />
        <FooterContainer />
     </Page>
    );
}

export default App;
