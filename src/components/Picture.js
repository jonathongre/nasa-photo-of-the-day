import React from "react";
import ReactPlayer from "react-player";

const Picture = ({ url }) => {
  return (
    <>
      <ReactPlayer url={url} />
    </>
  );
};

export default Picture;