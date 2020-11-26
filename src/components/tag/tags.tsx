import React from "react";
import styled from "styled-components";
import Tag from "./tag";

const Tags: React.FC<{ tags: string[]; isNew: boolean }> = ({
  tags,
  isNew,
}) => {
  return (
    <Container>
      {isNew ? <Tag title="جديد" isNew /> : null}
      {tags.map((tag) => (
        <Tag title={tag} key={tag} />
      ))}
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  gap: 5px;
`;

export default Tags;
