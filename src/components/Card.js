import React from "react";
import Picture from "./Picture";

const Card = ({ data }) => {
  return (
    <div className="card">
      <Picture url={data.url} />
    </div>
  );
};

export default Card;