import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled, { css } from "styled-components";

const Tab: React.FC<{ href?: string }> = ({ href = "/", children }) => {
  const router = useRouter();
  const correntPath = router.pathname;
  const isCorrent = href == correntPath;

  if (isCorrent) return <StyledTab isCurrentRoute>{children}</StyledTab>;
  return (
    <Link href={href}>
      <StyledTab>{children}</StyledTab>
    </Link>
  );
};

export default Tab;

const StyledTab = styled.a<{ isCurrentRoute?: boolean }>`
  --tab-color: var(--text-color-primary);

  text-decoration: none;
  padding: 5px;
  color: var(--tab-color);
  cursor: pointer;

  ${({ isCurrentRoute: isHere }) =>
    isHere
      ? css`
          cursor: auto;
          border-bottom: 3px solid var(--tab-color);
          font-weight: bold;
        `
      : null}
  :hover {
    --tab-color: var(--color-primary);
    border-bottom: 2px solid var(--tab-color);
  }
`;
