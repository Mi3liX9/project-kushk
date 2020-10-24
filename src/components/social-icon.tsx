import React from "react";
import styled, { css } from "styled-components";
import myIcon from "./icon";

interface SocialIconProps {
  icon: "telegram" | "instagram";
  height?: string;
}

const socialLinks = {
  instagram: {
    url: "https://instagram.com/mi3lix9",
    img: "/static/instagram-icon.png",
  },
  telegram: {
    url: "https://t.me/mi3li_blog",
    img: "/icons/telegram.svg",
  },
};

const findSocialInfo = (name: string) => {
  const entity = Object.entries(socialLinks);
  const myLink = entity.find((e) => e[0] === name);
  const img = myLink?.[1].img;
  const url = myLink?.[1].url;
  return { url, img };
};

const SocialIcon: React.FC<SocialIconProps> = ({ icon, height }) => {
  const { url, img } = findSocialInfo(icon);
  return (
    <Link target="_blank" href={url}>
      <Icon src={img} />
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
