import Link from "next/link";
import styled from "styled-components";
import React from "react";
import { PostProps } from "src/interfaces/post";
import Tags from "../tag/tags";
import {
  getTimeDifferecne,
  getUTC3Date,
  useDateFormat,
} from "src/hooks/useTimeFormat";
interface Props extends PostProps {}

const PostPreview: React.FC<Props> = ({ title, image, date, tags, slug }) => {
  date = getUTC3Date(date);
  const timeDifference = getTimeDifferecne(date);
  const isNew = timeDifference < 7;
  const formatedDate = useDateFormat(date);

  return (
    <Link href={"blog/" + slug}>
      <Container href={"blog/" + slug}>
        <Image src={image} draggable={false} />
        <Details className="details">
          <Title className="title">{title}</Title>
          <Tags tags={tags} isNew={isNew} />
          <DateText className="date">نُشرت يوم {formatedDate}</DateText>
        </Details>
      </Container>
    </Link>
  );
};

export default PostPreview;

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
