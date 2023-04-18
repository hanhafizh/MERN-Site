import React from "react";
import { ICDiscord, ICGithub, ICInstagram, LogoSaya } from "../../../assets";
import "./footer.scss";

const Icon = ({ img }) => {
  return (
    <div className="icon-wrapper">
      <img className="icon-medsos" src={img} alt="icon" />
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div>
          <img className="logo" src={LogoSaya} alt="logo" />
        </div>
        <div className="social-wrapper">
          <Icon img={ICDiscord} />
          <Icon img={ICGithub} />
          <Icon img={ICInstagram} />
        </div>
      </div>
      <div className="copyright">
        <p> Copyright @ 2023 Freespace All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
