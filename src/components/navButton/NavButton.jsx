// import React, { useState } from "react";
import styled from "styled-components";
import Button from "../UI/button/Button";

function NavButton({ logoutHandler, timerHandler, userHandler }) {
  return (
    <NavButtonDiv>
      <Button padding={"padding"} onClick={userHandler}>
        Users
      </Button>
      <Button padding={"padding"} onClick={timerHandler}>
        Timer
      </Button>
      <Button padding={"padding"} onClick={logoutHandler}>
        Logout
      </Button>
    </NavButtonDiv>
  );
}

export default NavButton;

const NavButtonDiv = styled.div`
  display: flex;
  gap: 20px;
  margin-right: 20px;
`;
