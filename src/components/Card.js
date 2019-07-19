import React from "react";
import PictureDiv from "./Picture";
import styled from "styled-components";

const Card = styled.div `
        display: flex;
        justify-content: center;
        margin: 30px auto;
        width: 75%;
        height: auto;
`;

const CardContainer = ({ data }) => {

  return (
    <Card>
      <PictureDiv data={data} />
    </Card>
  );
};

export default CardContainer;