import React from "react";

const Header = ({ data }) => {
  return (
    <div className="header">
      <div className="site-name">
        <h2>{ data.title }</h2>
        <h5>{ data.date }</h5>
      </div>
    </div>
  );
};

export default Header;