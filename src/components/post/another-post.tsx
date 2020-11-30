import Link from "next/link";
import React from "react";
import styled from "styled-components";

interface Props {
  post: { title: string; slug: string };
  type: "next" | "previous";
}

const AnotherArticle: React.FC<Props> = ({ post, type }) => {
  return (
    <Link href={post.slug}>
      <Container>
        {type === "next" ? "التالي" : "السابق"}: <a>{post.title}</a>
      </Container>
    </Link>
  );
};

const Container = styled.div`
  background: var(--background-article);
  flex-basis: 100%;
  cursor: pointer;
  padding: 10px;
  border-radius: 5px;
  text-align: center;

  :hover {
    background: var(--color-primary);
  }
`;

export default AnotherArticle;
