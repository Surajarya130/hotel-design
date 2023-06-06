import React, { useState } from "react";
import tripsterLogo from "../../assets/images/tripsterLogo.png";
import "./headerStyle.css";
import Button from "react-bootstrap/Button";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="header">
      <div className="logoSideWithLink">
        <div className="imgSide">
          <img src={tripsterLogo} alt="tripsterLogo" />
        </div>

        <div className="links">
          <ul>
            <li>
              <a href="#Properties">Properties</a>
            </li>
            <li>
              <a href="#Attractions">Attractions</a>
            </li>
            <li>
              <a href="#Popular">Popular</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="signInUp">
        <Button variant="outline-primary">LogIn</Button>
        <Button variant="outline-primary">SignUp</Button>
      </div>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {/* Hamburger navbar for  mobile screen size, basically toggling state and show side bar */}
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <>
              <ul>
                {["Properties", "Attractions", "Popular"].map((item) => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>

              <Button className="btnInMob" variant="outline-primary">
                LogIn
              </Button>
              <Button className="btnInMob" variant="outline-primary">
                SignUp
              </Button>
            </>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default Header;
