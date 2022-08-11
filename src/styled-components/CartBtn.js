import styled from "styled-components";

export const CartBtn = styled.button`
      cursor: pointer;
  font: inherit;
  border: none;
  background-color: #4d1601;
  color: white;
  padding: 0.75rem 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 25px;
  font-weight: bold;

  &:hover, &:active {
    background-color: #2c0d00;
  }
`