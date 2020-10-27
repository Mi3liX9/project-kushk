import fs from "fs";
import path from "path";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PostPreview from "src/components/post-preview";
import { InferGetStaticPropsType } from "next";
import { BlogService } from "src/blog/blog.service";
import { TagTitle } from "src/components/tag";

const Home: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  postData,
}) => {
  const [search, setSearch] = useState("");
  const [tagFilters, setTagFilters] = useState<string[]>([]);
  const [posts, setPosts] = useState(postData.concat());

  const tags = new Set<string>();
  tags.add("سامسونج");
  tags.add("الدراسة");
  tags.add("ويندوز");
  postData.forEach((post) => {
    post.tags.forEach((tag) => tags.add(tag));
  });

  const toggleTag = (tag: string) => {
    if (tagFilters.includes(tag)) {
      setTagFilters(tagFilters.filter((myTag) => myTag !== tag));
    } else {
      setTagFilters(tagFilters.concat(tag));
    }
  };

  useEffect(() => {
    let filtedPosts = postData.filter((post) => {
      const words = search.split(" ");
      const title = post.title;
      return words.every((word) => title.includes(word));
    });
    filtedPosts = filtedPosts.filter((post) => {
      return tagFilters.every((tag) => post.tags.includes(tag));
    });
    // console.log({ search, posts, tagFilters });
    setPosts(filtedPosts);
  }, [search, tagFilters]);

  return (
    <Container>
      <StyledSection>
        <SearchContainer>
          <p>تصفية المقالات</p>
          <SearchInput
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="ابحث عن أي مقال"
          />
          {[...tags].map((tag) =>
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
      </StyledSection>

      <Posts>
        {posts.map((post) => (
          <PostPreview
            place="outside"
            title={post.title}
            image={post.image}
            date={post.date}
            tags={post.tags}
            slug={post.slug}
            key={post.slug}
          />
        ))}
      </Posts>
    </Container>
  );
};

export default Home;

export async function getStaticProps() {
  const blogService = new BlogService();
  return { props: { postData: await blogService.getPosts() } };
}

const Container = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  /* flex-wrap: wrap; */
`;

const Posts = styled.main`
  background: var(--background-secondary);
  border-radius: 5px;
  flex-grow: 2;
  flex-basis: 500px;
  order: 2;
  padding: 15px;
  line-height: 2;
  display: flex;
  flex-direction: column;
  gap: 5px;
  min-height: 80vh;
  @media (min-width: 820px) {
    order: 1;
  }
`;

const StyledSection = styled.nav`
  background: var(--background-secondary);
  border-radius: 5px;
  flex-grow: 1;
  padding: 15px;
  order: 1;
`;

const SearchContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  p {
    margin: 0;
    font-weight: bold;
    user-select: none;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  user-select: none;
  :focus {
    border-bottom: 3px solid var(--color-primary);
    outline: 0;
    border-radius: 2px 2px 0px 0px;
  }
`;

const FilledTagTitle = styled(TagTitle)`
  background: var(--color-primary);
  /* border: 0; */
`;
