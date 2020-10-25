import { useDateFormat } from "src/hooks/useTimeFormat";
import Link from "next/link";
import styled from "styled-components";

interface Props {
  title: string;
  image?: string;
  date: Date;
  tags: string[];
  slug: string;
}

const PostTitle: React.FC<Props> = ({ title, image, date, tags, slug }) => {
  const newDate = useDateFormat(date);

  const timeDifference = new Date().getDate() - date.getDate();

  return (
    <Link href={slug}>
      <Container>
        <Img src={image ?? "/static/main-icon.png"} />
        <Details className="details">
          <p className="title">{title}</p>
          <Row className="row">
            <Tags tags={tags} isNew={timeDifference < 7} />
            <p className="date">نشرت يوم {newDate}</p>
          </Row>
        </Details>
      </Container>
    </Link>
  );
};

export default PostTitle;

const Tags: React.FC<{ tags: string[]; isNew: boolean }> = ({
  tags,
  isNew,
}) => (
  <>
    {isNew ? (
      <Tag className="tag new" style={{ borderColor: "#27AE60" }}>
        جديد
      </Tag>
    ) : null}
    {tags.map((tag) => (
      <Tag className="tag" key={tag}>
        {tag}
      </Tag>
    ))}
  </>
);

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px;
  border-radius: 15px;
  gap: 15px;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  :hover {
    background: var(--background-icon);
  }

  p {
    margin: 0;
    line-height: 2;
  }
  .date {
    font-size: 0.8rem;
  }

  @media (max-width: 360px) {
    justify-content: center;
    flex-direction: column;
    gap: 5px;
    .details,
    .row {
      justify-content: center;
      align-items: center;
    }
    img {
      height: 90px;
      width: 90px;
      border-radius: 5px;
    }
    p {
      font-size: 1.25rem;
    }
  }
`;

const Img = styled.img`
  object-fit: contain;
  aspect-ratio: 1 / 1;
  height: 50px;
  width: 50px;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  flex-wrap: wrap;
`;

const Tag = styled.div`
  margin: 0;
  line-height: 1;
  font-size: 0.8rem;
  border: solid var(--color-primary);
  padding: 2.5px;
  border-radius: 5px;
`;
