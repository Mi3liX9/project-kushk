import styled from "styled-components";

interface Props {
  title?: string;
  img?: string;
}

const HeaderTitle: React.FC<Props> = ({ img, title }) => (
  <TitleContainer>
    <SiteIcon
      id="site-icon"
      src={img ?? "/static/main-icon.png"}
      draggable="false"
    />
    <Title id="site-title">{title ?? "مايتي بلوق"}</Title>
  </TitleContainer>
);

export default HeaderTitle;

const TitleContainer = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  gap: 15px;
`;

const Title = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  white-space: nowrap;
  margin: 0;

  @media (max-width: 280px) {
    display: none;
  }
`;

const SiteIcon = styled.img`
  height: 50px;
  object-fit: contain;
  border-radius: 50%;
`;
