import React from "react";
import { useBlog } from "src/hooks/useBlog";
import styled from "styled-components";
import { TagTitle } from "./tag";
import SearchInput from "./search-input";
const Search: React.FC = () => {
  const {
    posts,
    search,
    setSearch,
    tags: tagFilters,
    setTags: setTagFilters,
  } = useBlog();
  const allTags = new Set<string>();

  posts.forEach((post) => {
    post.tags?.forEach((tag) => allTags.add(tag));
  });

  const toggleTag = (tag: string) => {
    if (tagFilters.includes(tag)) {
      setTagFilters(tagFilters.filter((myTag) => myTag !== tag));
    } else {
      setTagFilters(tagFilters.concat(tag));
    }
  };

  return (
    <SearchContainer>
      <p>تصفية المقالات</p>
      {/* <SearchInput
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="ابحث عن أي مقال"
      /> */}

      <SearchInput search={search} setSearch={setSearch} />
      {[...allTags].map((tag) =>
        tagFilters.includes(tag) ? (
          <FilledTagTitle onClick={() => toggleTag(tag)} key={tag}>
            {tag}
          </FilledTagTitle>
        ) : (
          <TagTitle onClick={() => toggleTag(tag)} key={tag}>
            {tag}
          </TagTitle>
        )
      )}
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

const FilledTagTitle = styled(TagTitle)`
  background: var(--color-primary);
  /* border: 0; */
`;
