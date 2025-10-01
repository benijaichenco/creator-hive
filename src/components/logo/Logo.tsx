import LogoSvg from "./assets/logo.svg";

import "./logo.css";

const Logo = () => {
  return (
    <div className="logo-container">
      <img src={LogoSvg} className="logo" />
    </div>
  );
};

export default Logo;
