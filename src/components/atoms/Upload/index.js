import React from "react";
import "./upload.scss";
import { LoginBg } from "../../../assets";

function Upload() {
  return (
    <div className="upload">
      <img className="preview" src={LoginBg} alt="preview" />
      <input type="file" />
    </div>
  );
}

export default Upload;
