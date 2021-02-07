import styled from "styled-components";

const List = styled.ul<{ requiresImage?: boolean }>`
  list-style: none;
  display: flex;
  gap: 5px;
  flex-direction: column;
  padding: 0;
  margin: 0;

  li img {
    ${(props) => (!props.requiresImage ? `display: none` : null)}
  }
`;

export default List;
