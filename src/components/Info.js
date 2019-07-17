import React from "react";

const Info = ({ data }) => {
  return (
     <div  className="info">
      <p>{ data.explanation }</p>
      </div>
  );
};

export default Info;