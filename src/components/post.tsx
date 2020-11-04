import Link from "next/link";
import React from "react";
import { PostProps } from "src/interfaces/post";
import styled from "styled-components";
import PostPreview from "./post-preview";

const Post: React.FC<PostProps> = ({
  title,
  date,
  slug,
  image,
  tags,
  children,
  next,
  previous,
}) => {
  return (
    <Container>
      <Article>
        <PostPreview
          place="inside"
          title={title}
          date={date}
          image={image}
          tags={tags}
          slug={slug}
        />
        {children}
        {(previous || next) && (
          <OtherPosts>
            {previous && (
              <div>
                السابق:{" "}
                <Link href={previous.slug}>
                  <a>{previous.title}</a>
                </Link>
              </div>
            )}

            {next && (
              <div>
                التالي:{" "}
                <Link href={next.slug}>
                  <a>{next.title}</a>
                </Link>
              </div>
            )}
          </OtherPosts>
        )}
      </Article>
      {/* <Section></Section> */}
    </Container>
  );
};

export default Post;

const Container = styled.div`
  border-radius: 5px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const Article = styled.article`
  background: var(--background-secondary);
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  flex-grow: 2;
  flex-basis: 500px;
  padding: 15px 1rem;
  line-height: 2;
  overflow: hidden;

  h1 {
    padding: 0;
    margin: 5px 0px;
  }

  p {
    margin: 5px 0;
  }

  ul {
    margin-top: 0px;
    margin-bottom: 5px;
  }

  user-select: text;
  a {
    color: var(--color-primary);
    ::selection,
    :hover {
      text-decoration: underline;
      color: #eb5757;
    }
  }
`;

// const Section = styled.section`
//   background: var(--background-secondary);
//   border-radius: 5px;
//   flex-grow: 1;
//   flex-basis: 250px;
//   padding: 15px;
// `;

const OtherPosts = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 20px;
  gap: 5px;
  user-select: none;
`;
