import React from "react";
import styled from "styled-components";

function Button({ children, backgroundColor, disabled, onClick, ...rest }) {
  return (
    <ButtonLogin
      backgroundColor={backgroundColor}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </ButtonLogin>
  );
}

export default Button;

const ButtonLogin = styled.button`
  background-color: ${(props) =>
    props.backgroundColor ? "#700170" : "#d900d9"};
  outline: none;
  border: none;
  border-radius: 20px;
  color: white;
  padding: ${(props) => (props.padding ? "10px 20px" : "10px 40px")};
  transition: 0.2s;
  font-size: 1.2rem;

  :disabled {
    background-color: #bcbcbcb5;
  }

  &:hover {
    background-color: ${(props) =>
      props.backgroundColor ? "#8e028e" : "#ff28ffeb"};

    :disabled {
      background-color: #bcbcbcb5;
    }
  }

  &:active {
    background-color: ${(props) =>
      props.backgroundColor ? "#700170" : "#bdbdbd"};

    :disabled {
      background-color: #bcbcbcb5;
    }
  }
`;
