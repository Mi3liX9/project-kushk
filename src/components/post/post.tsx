import React from "react";
import { PostProps } from "src/interfaces/post";
import styled from "styled-components";
import OtherPosts from "./other-posts";
import PostTitle from "./post-title";

const Post: React.FC<PostProps> = ({
  title,
  date,
  slug,
  image,
  tags,
  children,
  next,
  previous,
  exeprt,
}) => (
  <Container>
    <PostTitle title={title} date={date} image={image} tags={tags} />

    <Article id="article">{children}</Article>
    <OtherPosts next={next} previous={previous} />
  </Container>
);

export default Post;

const Container = styled.div`
  border-radius: 5px;
  background: var(--background-secondary);
  user-select: text;
  padding: 15px 1rem;
  overflow: hidden;
  @media (min-width: 500px) {
    padding-inline: 10%;
    padding-block: 10px;
  }
`;

const Article = styled.article`
  line-height: 2;
`;
