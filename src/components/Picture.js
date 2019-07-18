import React from "react";
import ReactPlayer from "react-player";
import { PictureDiv } from "./Styled";

const Picture = ({ data }) => {
  return (
      <PictureDiv>
            {data.media_type === "video" ? (
        <ReactPlayer url={data.url} />
      ) : (
        <img alt={data.title} src={data.url} />
      )}
    </PictureDiv>
  );
};

export default Picture;