import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  const history = useHistory();

  const transitionNavBar = () =>
    window.scrollY > 100 ? handleShow(true) : handleShow(false);

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_content">
        <img
          onClick={() => history.push("/")}
          className="nav_logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="netflix-logo"
        />
        <img
          onClick={() => history.push('/favorite')}
          className="nav_favorite"
          src="https://freepngimg.com/thumb/heart/36704-5-dark-red-heart-transparent-background.png"
          alt="favorite-logo"
        />
        <img
          onClick={() => history.push("/profile")}
          className="nav_avatar"
          src="https://apex.oracle.com/pls/apex/javainhand/r/69649/files/static/v7/avatar.png"
          alt="profile-avatar"
        />
      </div>
    </div>
  );
}

export default Nav;
