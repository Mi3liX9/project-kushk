import { Site } from "site";
import styled from "styled-components";

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <p>مايتي بلوق</p>
      <SocialMedia>
        {Site.socialMedia.reverse().map((cm) => (
          <a href={cm.url} target="_blank" style={{ height: 45 }} key={cm.name}>
            {/* <MyIcon src={cm.image} /> */}
          </a>
        ))}
      </SocialMedia>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  background: var(--background-secondary);
  border-radius: 5px;
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 35px;
  user-select: none;
  justify-content: space-between;
  p {
    margin: 0;
    font-size: 1.125rem;
    font-weight: bold;
  }
`;

// const MyIcon = styled(Icon)`
//   border-radius: 0px;
//   transition: all 50ms linear;
//   :hover {
//     background: transparent;
//     transform: scale(1.15) rotate(3deg);
//   }
// `;

const SocialMedia = styled.div`
  display: flex;
  gap: 10px;
`;
