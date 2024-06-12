import React from "react";
import "./Model.css";

const Model = ({ children, detail }) => {
  return (
    <>
      <div onClick={() => detail(false)} className="overlay"></div>
      <div className="model">{children}</div>
    </>
  );
};

export default Model;
