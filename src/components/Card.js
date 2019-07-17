import React from "react";
import Picture from "./Picture";

const Card = ({ data }) => {
  return (
    <div className="card">
      <Picture data={data} />
    </div>
  );
};

export default Card;