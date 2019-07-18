import React from "react";
import { InfoDiv } from "./Styled";

const Info = ({ data }) => {
  return (
      <InfoDiv>
        <p>{ data.explanation }</p>
      </InfoDiv>
      
  );
};

export default Info;
