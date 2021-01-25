import Head from "next/head";
import React from "react";
import { useBlog } from "src/hooks/useBlog";
import styled from "styled-components";
import StorePreview from "./store-preview";

interface Props {
  metatags: {
    property: string;
    content: string;
  }[];
}

const BlogPosts: React.FC<Props> = ({ metatags }) => {
  const { posts } = useBlog();

  return (
    <>
      <Head>
        {metatags.map(
          (meta) =>
            (meta.content || meta.property) && (
              <meta
                content={meta.content}
                property={meta.property}
                key={meta.property}
              />
            )
        )}
      </Head>
      <Container>
        <Posts>
          {posts.map((post) => (
            <StorePreview
              title={post.title}
              image={post.image}
              date={post.date}
              tags={post.tags}
              slug={post.slug}
              key={post.slug}
              exeprt={post.exeprt}
            />
          ))}
        </Posts>
      </Container>
    </>
  );
};

export default BlogPosts;

const Container = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

const Posts = styled.main`
  background: var(--background-secondary);
  border-radius: 5px;
  flex-grow: 2;
  flex-basis: 500px;
  order: 2;
  padding: 15px 5px;
  line-height: 2;
  display: flex;
  flex-direction: column;
  gap: 5px;
  min-height: 80vh;
`;
