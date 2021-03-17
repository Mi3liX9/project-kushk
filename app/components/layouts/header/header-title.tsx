import Link from "next/link";
import React from "react";
import { Site } from "site";
import styled from "styled-components";

interface Props {
  title?: string;
  img?: string;
}

const HeaderTitle: React.FC<Props> = ({ img, title }) => (
  <Link href="/">
    <TitleContainer>
      <SiteIcon id="site-icon" src={img ?? Site.mainIcon} draggable="false" />
      <Title id="site-title">{title ?? Site.siteName}</Title>
    </TitleContainer>
  </Link>
);

export default HeaderTitle;

const TitleContainer = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  gap: 15px;
  cursor: pointer;
`;

const Title = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  white-space: nowrap;
  margin: 0;

  @media (max-width: 320px) {
    display: none;
  }
`;

const SiteIcon = styled.img`
  height: 50px;
  object-fit: contain;
  border-radius: 50%;
`;
