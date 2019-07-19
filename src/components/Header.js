//import React from "react";
//
//const Header = ({ data }) => {
//  return (
//    <div className="App-header">
//      <div className="site-name">
//        <h2>{ data.title }</h2>
//        <h5>{ data.date }</h5>
//      </div>
//    </div>
//  );
//};
//
//export default Header;

import React from "react";
//import { HeaderDiv } from "./Styled";
import styled from "styled-components";

const HeaderDiv = styled.div `
    &&& {
        background: #282c34;
        margin-bottom: 30px;
        min-height: 10vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: calc(10px + 2vmin);
        color: white;
        box-shadow: 2px 2px 10px black;
}
`;

const HeaderContainer = ({ data }) => {
     
  return (
    <HeaderDiv>
        <h1>{ data.title }</h1>
        <h5>{ data.date }</h5>
    </HeaderDiv>
  );
};

export default HeaderContainer;