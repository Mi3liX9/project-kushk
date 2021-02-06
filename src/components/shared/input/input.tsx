import styled from "styled-components";

const Input = styled.input`
  border: 0;
  background: var(--background-secondary);
  padding: 10px;
  margin: 1rem 0;
  border-bottom: 3px solid var(--background-secondary);
  ::placeholder {
    user-select: none;
    opacity: 0.8;
  }

  :focus {
    border-bottom-color: var(--color-main);
    outline: 0;
    border-radius: 2px 2px 0px 0px;
  }
`;

export default Input;
