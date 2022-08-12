import styled from "styled-components";

export const Actions = styled.div`
    text-align: right;

  button {
    font: inherit;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid #8a2b06;
  padding: 0.5rem 2rem;
  border-radius: 25px;
  margin-left: 1rem;
  }

  button:hover, button:active {
    border-color: #5a1a01;
    color: white;
  }
`
export default Actions

