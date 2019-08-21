import React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";

const PictureDiv = styled.div `
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 30px;
    box-shadow: 2px 2px 10px black;
`;

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