import React from "react";
import Picture from "./Picture";
import { Card } from "./Styled";

const Cards = ({ data }) => {

  return (
    <Card>
      <Picture data={data} />
    </Card>
  );
};

export default Cards;