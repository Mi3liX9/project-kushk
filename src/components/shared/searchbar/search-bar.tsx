import React from "react";
import styled from "styled-components";
import { css } from "twin.macro";
import Categories from "../categories/categories";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  // value: string;
  // onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  // categories?: { title: string; key: string }[];
}

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
      {/* {categories ? <Categories categories={categories} /> : null} */}
    </SearchContainer>
  );
};

export default SearchBar;

const SearchContainer = styled.div`
  margin-bottom: 10px;
`;
