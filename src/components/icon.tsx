import styled from "styled-components";

const Icon: React.FC<React.ImgHTMLAttributes<any>> = (props) => (
  <IconContainer {...props} draggable="false" />
);

const IconContainer = styled.img`
  min-height: 45px;
  height: 45px;
  padding: 7px;
  object-fit: contain;
  transition: all 250ms linear;
  border-radius: 50%;
  :hover {
    background: var(--background-icon);
  }
`;

export default Icon;
