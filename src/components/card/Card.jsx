import React from "react";
import styled from "styled-components";

function Card({ children }) {
  return <Conteiner>{children}</Conteiner>;
}

export default Card;

const Conteiner = styled.div`
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.26);
  margin: 40px auto;
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  width: 600px;
  flex-wrap: wrap;
`;
