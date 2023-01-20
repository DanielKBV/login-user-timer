import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import Button from "../UI/button/Button";
import Card from "../card/Card";
import { FormMain, StyledConteiner, Label } from "../global/Global";

function LoginForm(props) {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPasswod, setEnteredPasswod] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswodValid, setIsPasswodValid] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
    setIsEmailValid(
      enteredEmail.includes("@") && enteredPasswod.trim().length >= 5
    );
  };

  const passwodChangeHandler = (event) => {
    setEnteredPasswod(event.target.value);
    setIsPasswodValid(
      enteredPasswod.trim().length >= 5 && enteredEmail.includes("@")
    );
  };

  const validetEmailHandler = () => {
    setIsEmailValid(enteredEmail.includes("@"));
  };

  useEffect(() => {
    setIsFormValid(isEmailValid, isPasswodValid);
  }, [isEmailValid && isPasswodValid]);

  const submitHandler = (element) => {
    element.preventDefault();
    props.loginHandler();
  };

  return (
    <Card>
      <FormMain>
        <StyledConteiner>
          <Label htmlFor="">E-Mail</Label>
          <Inputs
            type="text"
            onChange={emailChangeHandler}
            value={enteredEmail}
            onBlur={validetEmailHandler}
          />
        </StyledConteiner>
        <StyledConteiner>
          <Label htmlFor="">Password</Label>
          <Inputs
            type="password"
            onChange={passwodChangeHandler}
            value={enteredPasswod}
          />
        </StyledConteiner>
        <Button
          backgroundColor={"backgroundColor"}
          disabled={!isFormValid}
          onClick={submitHandler}
        >
          Login
        </Button>
      </FormMain>
    </Card>
  );
}
export default LoginForm;

//

const Inputs = styled.input`
  border-radius: 5px;
  padding: 6px;
  outline: none;
  width: 400px;
  border: none;
  font-size: 1.2rem;

  background-color: rgb(199, 213, 228, 0.584);
  border: 1px solid rgb(179, 179, 179);

  :disabled {
    background-color: rgb(255, 121, 235, 0.584);
    border: 1px solid red;
  }

  &:focus {
    background-color: white;
  }
`;
