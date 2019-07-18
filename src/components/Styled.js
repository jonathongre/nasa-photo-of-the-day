import styled from "styled-components";

export const HeaderDiv = styled.div`
        background: #282c34;
        margin-bottom: 30px;
        min-height: 10vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: calc(10px + 2vmin);
        color: white;
`;

export const Page = styled.div `
        background-color: #3f4552;
        text-align: center;
        align-content: center;
        align-items: center;
        justify-content: center;
        height: 100vh;
        color: "white;
`;

export const InfoDiv = styled.div`
    margin: auto;
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 800px;
    background-color: #ffffff;
    border: 2px solid black;
    box-shadow: 2px 2px 10px black;
`;

export const PictureDiv = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    margin: auto;
    margin-top: 30px;
    margin-bottom: 30px;
    box-shadow: 2px 2px 10px black;
    max-width: 800px;
    background-color: black;
`;

export const Card = styled.div`
        display: flex;
        justify-content: center;
        margin: 30px auto;
        box-shadow: 2px 2px 10px black;
        max-width: 800px;
        background-color: black;
`;