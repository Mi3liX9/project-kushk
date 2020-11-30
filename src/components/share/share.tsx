import React from "react";
import { IoMdShare } from "react-icons/io";
import styled from "styled-components";

interface Props {
  // type?: "share" | "telegram" | "whatsapp";
  title: string;
  text?: string;
  url: string;
}

const Share: React.FC<Props> = ({ title, text, url, children }) => {
  const shareHandler = () => {
    if (navigator.share) {
      navigator.share({ title, text, url });
    }
  };

  return (
    <Container onClick={() => shareHandler()}>
      <IoMdShare />
      {children}
    </Container>
  );
};

export default Share;

const Container = styled.a`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-block: 15px;
  background: var(--background-article);
  cursor: pointer;

  :hover {
    background: var(--color-primary);
  }

  border-radius: 5px;
`;
