import React from "react";
import styled from "styled-components";
import { useDateFormat } from "src/hooks/useTimeFormat";
import PostTitle from "src/components/post-title";

export default function Home() {
  const date = useDateFormat();
  return (
    <Container>
      <StyledMain>
        <PostTitle
          title="أهلًا مايتي بلوق!"
          date={new Date(2020, 9, 18, 16, 35)}
          tags={["مرحبا"]}
          slug="/"
        />
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
  display: flex;
  flex-direction: column;
  gap: 5px;
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
