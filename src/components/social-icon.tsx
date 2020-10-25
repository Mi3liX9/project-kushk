import React from "react";
import { Site } from "site";
import styled, { css } from "styled-components";
import myIcon from "./icon";

interface SocialIconProps {
  icon: "telegram" | "instagram";
  height?: string;
}

const findSocialInfo = (name: string) => {
  return Site.socialMedia.find((sm) => sm.name === name)!;
};

const SocialIcon: React.FC<SocialIconProps> = ({ icon, height }) => {
  const { url, image } = findSocialInfo(icon);
  return (
    <Link target="_blank" href={url}>
      <Icon src={image} />
    </Link>
  );
};

const Icon = styled(myIcon)`
  border-radius: 0%;
  transition: all 50ms linear;

  :hover {
    background: none;
    border-bottom: 2px solid var(--color-primary);
  }
`;

const Link = styled.a`
  height: 45px;
`;

export default SocialIcon;
