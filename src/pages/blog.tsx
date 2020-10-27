import fs from "fs";
import path from "path";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PostPreview from "src/components/post-preview";
import { InferGetStaticPropsType } from "next";
import matter from "gray-matter";

const Home: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  postData,
}) => {
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState(postData.concat());

  useEffect(() => {
    const filtedPosts = postData.filter((post) => {
      const words = search.split(" ");
      const title = post.frontMatter.title as string;
      return words.every((word) => title.includes(word));
    });
    console.log({ search, posts });
    setPosts(filtedPosts);
  }, [search]);

  return (
    <Container>
      <Posts>
        {posts.map((post) => (
          <PostPreview
            place="outside"
            title={post.frontMatter.title}
            image={post.frontMatter.image}
            date={post.frontMatter.date}
            tags={post.frontMatter.tags}
            slug={post.slug}
            key={post.slug}
          />
        ))}
      </Posts>
      <StyledSection>
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="ابحث عن أي مقال"
        />
      </StyledSection>
    </Container>
  );
};

export default Home;
const root = process.cwd();

export async function getStaticProps() {
  const contentRoot = path.join(root, "posts");
  const postData = fs.readdirSync(contentRoot).map((p) => {
    const content = fs.readFileSync(path.join(contentRoot, p), "utf8");
    return {
      slug: p.replace(/\.mdx/, ""),
      content,
      frontMatter: matter(content).data,
    };
  });
  return { props: { postData } };
}

const Container = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
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
  flex-basis: 250px;
  padding: 15px;
  order: 1;
`;
