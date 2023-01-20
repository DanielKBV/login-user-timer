import React from "react";
import { HeaderNav, HeaderNavH1, Nav } from "../global/Global";
import NavButton from "../navButton/NavButton";

function Header({ isLoggedIn, logoutHandler, timerHandler, userHandler }) {
  return (
    <HeaderNav>
      <Nav>
        <HeaderNavH1>A Typical Page</HeaderNavH1>
        {isLoggedIn ? (
          <NavButton
            userHandler={userHandler}
            logoutHandler={logoutHandler}
            isLoggedIn={isLoggedIn}
            timerHandler={timerHandler}
          />
        ) : null}
      </Nav>
    </HeaderNav>
  );
}

export default Header;
