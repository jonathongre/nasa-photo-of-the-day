import React from "react";
import ReactPlayer from "react-player";

const Picture = ({ url }) => {
  return (
    <div className="picture">
      <ReactPlayer url={url} />
    </div>
  );
};

export default Picture;