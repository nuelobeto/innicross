import "./Navbar.css";

import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import logo1 from "../../images/Logo-Black-n-White.png";
import { HiMenu } from "react-icons/hi";
import { MdOutlineClear } from "react-icons/md";
import { MobileNav } from "./../MobileNav/MobileNav";

export const Navbar = () => {
  const [viewportWidth, setviewPortWidth] = useState(window.innerWidth);
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setviewPortWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
  }, [viewportWidth]);

  const navigate = useNavigate();

  return (
    <>
      <nav>
        <div className="nav_content container">
          <div className="main_logo" onClick={() => navigate("/")}>
            <img src={logo1} alt="" />
          </div>

          {viewportWidth > 768 ? (
            <>
              <ul className="nav_links">
                <li>
                  <NavLink to="/">About</NavLink>
                </li>
                <li>
                  <NavLink to="/marketing">Marketing</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </>
          ) : (
            <>
              {isSideNavOpen ? (
                <MdOutlineClear
                  className="menu"
                  onClick={() => setIsSideNavOpen(false)}
                />
              ) : (
                <HiMenu
                  className="menu"
                  onClick={() => setIsSideNavOpen(true)}
                />
              )}
            </>
          )}
        </div>
      </nav>

      {isSideNavOpen && <MobileNav />}
    </>
  );
};
