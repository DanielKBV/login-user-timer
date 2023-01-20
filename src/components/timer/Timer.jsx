import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Card from "../card/Card";

function Timer() {
  const [count, setCount] = useState(0);
  const timer = useRef();

  useEffect(() => {
    timer.current = setInterval(() => {
      setCount((plus) => plus + 1);
    }, 1000);

    return () => clearInterval(timer.current);
  }, []);

  useEffect(() => {
    if (count >= 60) clearInterval(timer.current);
  }, [count]);

  return (
    <Card>
      <TimerDiv>
        <h1>Timer: {count}</h1>
      </TimerDiv>
    </Card>
  );
}

export default Timer;

const TimerDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  h1 {
    font-size: 4rem;
  }
`;
