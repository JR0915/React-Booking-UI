import "./navbar.css"
import React, { useState } from "react";
import Login from "../../pages/login_register/login_register.js"

const Navbar = () => {
  const [showNavNoTogglerSecond, setShowNavNoTogglerSecond] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const onClick = () => {
    setOpen(!isOpen);
    var blur = document.getElementById("nav");
    blur.classList.toggle("active");
    // document.body.style.opacity = 0.5;
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Track Your Trip</span>
        <div className="navItems">
          {/* <button className="navButton">Register</button> */}
          <button className="navButton"  onClick={onClick}>Login / Register</button>
          {isOpen && (
              <>
                <Login />
              </>
            )}
        </div>
      </div>
    </div>
  )
}

export default Navbar