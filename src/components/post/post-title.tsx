import styled, { css } from "styled-components";
import React from "react";
import { PostProps } from "src/interfaces/post";
import Tags from "../tag/tags";
import {
  getTimeDifferecne,
  getUTC3Date,
  useDateFormat,
} from "src/hooks/useTimeFormat";
interface Props extends Omit<PostProps, "slug"> {}

const PostTitle: React.FC<Props> = ({ title, image, date, tags }) => {
  date = getUTC3Date(date);
  const timeDifference = getTimeDifferecne(date);
  const isNew = timeDifference < 7;
  const formatedDate = useDateFormat(date);

  return (
    <Container>
      <Image src={image} draggable={false} />
      <Title id="title">{title}</Title>
      <DateText id="date">نُشرت يوم {formatedDate}</DateText>
      <Tags tags={tags} isNew={isNew} />
    </Container>
  );
};

export default PostTitle;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 7px;
  padding: 0.4rem;
`;

const Text = css`
  margin: 0;
  line-height: 1;
  opacity: 0.8;
  text-align: center;
`;

const Image = styled.img`
  object-fit: cover;
  width: min(100%, 250px);
  border-radius: 5px;
`;

const Title = styled.h1`
  ${Text}
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.5;
`;
const DateText = styled.p`
  ${Text}
  font-size: 0.8rem;
`;
