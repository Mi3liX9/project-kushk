import Head from "next/head";
import React from "react";
import { Site } from "site";
import { useBlog } from "src/hooks/useBlog";
import styled from "styled-components";
import PostPreview from "./post-preview";

const BlogPosts = () => {
  const { posts } = useBlog();

  const metatags = [
    { property: "description", content: Site.description },
    // Facebook / Opengraph
    { property: "og:type", content: "website" },
    { property: "og:url", content: Site.url },
    { property: "og:title", content: Site.name },
    { property: "og:description", content: Site.description },
    { property: "og:image", content: Site.url + Site.mainIcon },
    // Twitter
    { property: "twitter:card", content: "summary_large_image" },
    { property: "twitter:url", content: Site.url },
    { property: "twitter:title", content: Site.name },
    { property: "twitter:description", content: Site.description },
    { property: "twitter:image", content: Site.url + Site.mainIcon },
  ];

  return (
    <>
      <Head>
        {metatags.map(
          (meta) =>
            (meta.content || meta.property) && (
              <meta
                // name={meta.property}
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
