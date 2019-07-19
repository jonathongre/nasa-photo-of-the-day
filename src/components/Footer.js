import React from "react";
import styled from "styled-components";

const FooterDiv = styled.div `
    height: 60px;
    display: flex;
    text-align: center;
    text-decoration: none;
    align-items: center;
    justify-content: center;
    color: #fff;
`;

const Link = styled.a `
    text-decoration: none;
    color: #fff;
`;

const FooterContainer = () => {
    
    return (
        <FooterDiv>
            <Link href="https://www.nasa.gov/">NASA</Link>
        </FooterDiv>
    );
}

export default FooterContainer