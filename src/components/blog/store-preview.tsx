import React from "react";
import Link from "next/link";
import styled from "styled-components";

const StorePreview: React.FC = ({ title, image, slug, exeprt }: any) => {
  return (
    <Link href={"blog/" + slug}>
      <Container href={"blog/" + slug} title={exeprt}>
        <Image src={image} draggable={false} />
        <Details className="details">
          <Title className="title">{title}</Title>
          {/* <Tags tags={tags} isNew={isNew} /> */}
          {/* <DateText className="date">نُشرت يوم {formatedDate}</DateText> */}
        </Details>
      </Container>
    </Link>
  );
};

export default StorePreview;

const Container = styled.a`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.4rem;
  gap: 10px;
  border-radius: 15px;
  user-select: none;
  cursor: pointer;

  :hover {
    background: var(--background-icon);
    p {
      opacity: 1;
    }
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

const Image = styled.img`
  object-fit: cover;
  aspect-ratio: 1 / 1;
  height: 60px;
  width: 60px;
  border-radius: 50%;
`;

const Text = styled.p`
  margin: 0;
  font-size: 1rem;
  line-height: 1;
  opacity: 0.8;
`;

const Title = styled(Text)`
  font-weight: 500;
`;
const DateText = styled(Text)`
  font-size: 0.8rem;
`;
