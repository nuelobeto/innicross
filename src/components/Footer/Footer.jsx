import "./Footer.css";
import logo2 from "../../images/Logo-White-n-Blue.png";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer ">
      <div className="footer_content container">
        <div className="footer_logo" onClick={() => navigate("/")}>
          <img src={logo2} alt="" />
        </div>
        <p>© 2022</p>
      </div>
    </footer>
  );
};
