import React from "react";
import ReactPlayer from "react-player";

const Picture = ({ data }) => {
  return (
      <div className="picture">
            {data.media_type === "video" ? (
        <ReactPlayer url={data.url} />
      ) : (
        <img alt={data.title} src={data.url} />
      )}
    </div>
  );
};

export default Picture;