import "./Footer.css";
import logo2 from "../../images/Logo-White-n-Blue.png";

export const Footer = () => {
  return (
    <footer className="footer ">
      <div className="footer_content container">
        <div className="footer_logo">
          <img src={logo2} alt="" />
        </div>
        <p>© 2022</p>
      </div>
    </footer>
  );
};
