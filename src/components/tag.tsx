import styled, { css } from "styled-components";

interface Props {
  title: string;
  filled?: boolean;
  isNew?: boolean;
  onClick?: () => any;
}

const Tag: React.FC<Props> = ({
  title,
  filled = false,
  isNew = false,
  onClick,
}) => (
  <StyledTag filled={filled} isNew={isNew} onClick={onClick}>
    {title}
  </StyledTag>
);

export default Tag;

const StyledTag = styled.div<{ isNew: boolean; filled: boolean }>`
  margin: 0;
  line-height: 1;
  font-size: 0.8rem;
  border: solid var(--color-primary);
  padding: 3px 5px;
  border-radius: 5px;
  user-select: none;

  ${({ filled }) =>
    filled &&
    css`
      background: var(--color-primary);
    `}
  ${({ isNew }) =>
    isNew &&
    css`
      border-color: #27ae60;
    `}
`;
