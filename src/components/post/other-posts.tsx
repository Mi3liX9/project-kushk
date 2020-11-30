import React from "react";
import styled from "styled-components";
import AnotherArticle from "./another-post";

type Post = { title: string; slug: string };

interface Props {
  next?: Post;
  previous?: Post;
}
const OtherPosts: React.FC<Props> = ({ next, previous }) => (
  <OtherPostsContainer>
    {previous ? (
      <AnotherArticle post={previous} type="previous" />
    ) : (
      <FakeAnother />
    )}
    {next ? <AnotherArticle post={next} type="next" /> : <FakeAnother />}
  </OtherPostsContainer>
);

export default OtherPosts;

const OtherPostsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-block: 20px;
  gap: 5px;
  user-select: none;
`;

const FakeAnother = styled.div`
  flex-basis: 100%;
  padding: 10px;
`;
