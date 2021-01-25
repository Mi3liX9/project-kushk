import React from "react";
import { useBlog } from "src/hooks/useBlog";
import styled from "styled-components";
import SearchInput from "./search-input";

const Search: React.FC = () => {
  const { search, setSearch, tags, setTags, original } = useBlog();
  const postsTags = new Set<string>();

  original.forEach((post) => {
    post.tags?.forEach((tag) => postsTags.add(tag));
  });

  // This will add/remove the tag to the filter list
  const toggleTag = (tag: string) => {
    tags.includes(tag)
      ? setTags(tags.filter((myTag) => myTag !== tag))
      : setTags(tags.concat(tag));
  };

  return (
    <SearchContainer>
      <p>تصفية المقالات</p>
      <SearchInput search={search} setSearch={setSearch} />
      {/* {[...postsTags].map((tag) => (
        <Tag
          title={tag}
          key={tag}
          filled={tags.includes(tag)}
          onClick={() => toggleTag(tag)}
        />
      ))} */}
    </SearchContainer>
  );
};
export default Search;

const SearchContainer = styled.div`
  background: var(--background-secondary);
  border-radius: 5px;
  padding: 15px;

  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  p {
    margin: 0;
    font-weight: bold;
    user-select: none;
  }
`;
