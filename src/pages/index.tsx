import React from "react";
import styled from "styled-components";
import { useDateFormat } from "src/hooks/useTimeFormat";

export default function Home() {
  const date = useDateFormat();
  return (
    <Container>
      <StyledMain>
        <div className="article-container">
          <img src="/static/main-icon.png" />
          <div className="article-button">
            <p className="title">عنوان المقالة</p>
            <p className="date">نشرت يوم {date}</p>
          </div>
        </div>
      </StyledMain>
      <StyledSection>section</StyledSection>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const StyledMain = styled.main`
  background: var(--background-secondary);
  border-radius: 5px;
  flex-grow: 2;
  flex-basis: 500px;
  order: 2;
  padding: 15px;
  line-height: 2;
  @media (min-width: 820px) {
    order: 1;
  }

  .article-container {
    display: flex;
    align-items: center;
    height: 65px;
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    gap: 10px;
    user-select: none;
    cursor: pointer;
    :hover {
      background: var(--background-icon);
    }

    img {
      margin: 0;
      object-fit: contain;
      height: 100%;
    }
  }

  .article-button {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    /* padding: 10px 0; */
    /* gap: 5px; */

    p {
      margin: 0;
      line-height: 2;
    }

    .title {
      width: 100%;
    }
    .date {
      font-size: 0.8rem;
    }
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
