import React from "react";
import styled from "styled-components";
import Categories from "../categories/categories";
import Search from "../input/search";

interface Props {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  categories?: string[];
}

const SearchBar: React.FC<Props> = ({ categories, value, onChange }) => {
  return (
    <SearchContainer>
      <Search placeholder="شريط البحث" value={value} onChange={onChange} />
      {categories ? <Categories categories={categories} /> : null}
    </SearchContainer>
  );
};

export default SearchBar;

const SearchContainer = styled.div`
  margin-bottom: 10px;
`;
