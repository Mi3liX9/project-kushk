import { useDateFormat } from "src/hooks/useTimeFormat";
import Link from "next/link";
import styled, { css } from "styled-components";
import React from "react";
import Image from "./post-image";
import Row from "./row";
import Tag from "./tag";
import { PostProps } from "src/interfaces/post";
import { Site } from "site";

interface Props extends PostProps {
  place?: "inside" | "outside";
}

const PostPreview: React.FC<Props> = ({
  title,
  image,
  date,
  tags,
  slug,
  place = "outside",
}) => {
  date = typeof date === "string" ? new Date(date + " utc +3") : date;
  const newDate = useDateFormat(date);
  const timeDifference =
    (new Date().getTime() - date.getTime()) / 1000 / 60 / 60 / 24;

  image = image && image.length > 4 ? image : Site.mainIcon;
  const titleComponent =
    place === "outside" ? (
      <p className="title">{title}</p>
    ) : (
      <h1 className="title">{title}</h1>
    );

  return (
    <MyContainer place={place} slug={slug}>
      <Image src={image} draggable="false" />
      <Details className="details">
        {titleComponent}
        <Row className="row">
          {timeDifference < 7 && <Tag isNew title="جديد" />}
          {tags?.map((tag) => (
            <Tag title={tag} key={tag} />
          ))}
          <p className="date">نشرت يوم {newDate}</p>
        </Row>
      </Details>
    </MyContainer>
  );
};

export default PostPreview;

const userSelectNone = css`
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

type ContainerProps = { place: "inside" } | { place: "outside"; slug: string };

const MyContainer: React.FC<ContainerProps> = ({
  place,
  children,
  ...props
}) => {
  switch (place) {
    case "outside":
      return (
        <Link href={"/blog/" + (props as any).slug!}>
          <OutsideContainer>{children}</OutsideContainer>
        </Link>
      );
    case "inside":
      return <Container>{children}</Container>;
  }
};

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 5px;
  gap: 15px;
  border-radius: 15px;

  .title,
  p,
  h1 {
    margin: 0;
    line-height: 2;
    font-size: 1rem;
  }
  .date {
    font-size: 0.8rem;
  }
  img {
    ${userSelectNone}
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

const OutsideContainer = styled(Container)`
  ${userSelectNone}
  cursor: pointer;
  :hover {
    background: var(--background-icon);
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
`;
