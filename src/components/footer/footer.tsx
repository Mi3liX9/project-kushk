import { Site } from "site";
import styled from "styled-components";

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <p>كشك</p>
      <a>سياسات الاستخدام والخصوصية</a>
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
  justify-content: center;
  flex-wrap: wrap;
  p {
    margin: 0;
    font-size: 1.125rem;
    font-weight: bold;
    width: 100%;
    text-align: center;
  }
`;
