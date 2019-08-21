//import React from "react";
//
//const Info = ({ data }) => {
//  return (
//     <div  className="info">
//      <p>{ data.explanation }</p>
//      </div>
//  );
//};
//
//export default Info;

import React from "react";
import styled from "styled-components";
//import { InfoDiv } from "./Styled";
//import { Pgraph } from "./Styled";
const InfoDiv = styled.div `
    margin: auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 800px;
    background-color: #fff;
    border: 2px solid black;
    box-shadow: 2px 2px 10px black;
`;
const InfoContainer = ({ data }) => {
    
  return (
      <InfoDiv>
        <p>{ data.explanation }</p>
      </InfoDiv>
    );
};

export default InfoContainer;
