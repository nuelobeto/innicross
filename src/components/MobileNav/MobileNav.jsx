import "./MobileNav.css";
import { Link } from "react-router-dom";

export const MobileNav = () => {
  return (
    <div className="mobile_nav">
      <ul className="mobile_links">
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/marketing">Marketing</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};
