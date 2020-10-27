import styled from "styled-components";

const Tags: React.FC<{ tags?: string[]; isNew: boolean }> = ({
  tags,
  isNew,
}) => (
  <>
    {isNew && <NewTagTitle className="tag new">جديد</NewTagTitle>}
    {tags?.map((tag) => (
      <TagTitle className="tag" key={tag}>
        {tag}
      </TagTitle>
    ))}
  </>
);

export default Tags;

const TagTitle = styled.div`
  margin: 0;
  line-height: 1;
  font-size: 0.8rem;
  border: solid var(--color-primary);
  padding: 2.5px;
  border-radius: 5px;
  user-select: none;
`;

const NewTagTitle = styled(TagTitle)`
  border-color: #27ae60;
`;

export { NewTagTitle, TagTitle };
