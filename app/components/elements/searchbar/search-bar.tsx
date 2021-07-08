import React from "react";
import styled from "styled-components";
import { css } from "twin.macro";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

const SearchBar: React.FC<Props> = ({ ...props }) => {
  return (
    <SearchContainer>
      <input
        css={css`
          width: 100%;
        `}
        placeholder="شريط البحث"
        {...props}
      />
    </SearchContainer>
  );
};

export default SearchBar;

const SearchContainer = styled.div`
  margin-bottom: 10px;
`;
