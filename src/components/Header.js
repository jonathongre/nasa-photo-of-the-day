import React from "react";
import { HeaderDiv } from "./Styled";

const HeaderContainer = ({ data }) => {
     
  return (
    <HeaderDiv>
        <h1>{ data.title }</h1>
        <h5>{ data.date }</h5>
    </HeaderDiv>
  );
};

export default HeaderContainer;