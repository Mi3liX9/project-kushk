import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  search: string;
  setSearch: Function;
}

const Search: React.FC<Props> = ({ search, setSearch }) => {
  const [value, setValue] = useState(search);

  useEffect(() => {
    setSearch(value);
  }, [value]);

  return (
    <Input
      type="search"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="ابحث عن أي مقال"
    />
  );
};

export default Search;

const Input = styled.input`
  width: 100%;
  user-select: none;
  :focus {
    border-bottom: 3px solid var(--color-primary);
    outline: 0;
    border-radius: 2px 2px 0px 0px;
  }
`;
