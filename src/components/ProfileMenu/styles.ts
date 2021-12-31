import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Nav = styled.nav`
  ${({ theme }) => {
    return css`
      display: flex;
      border-bottom: 0.1rem solid ${theme.colors.lightGray};

      ${media.greaterThan('medium')`
      flex-direction: column;
      border: 0;

      a:not(:last-child) {
        border-bottom: 0.1rem solid ${theme.colors.lightGray};
      }
    `}
    `;
  }}
`;

export const Link = styled.a`
  ${({ theme }) => {
    return css`
      background: ${theme.colors.white};
      color: ${theme.colors.black};
      text-decoration: none;
      display: flex;
      align-items: center;
      padding: ${theme.spacings.xsmall} ${theme.spacings.small};
      transition: background, color, ${theme.transition.default};

      &:hover {
        background: ${theme.colors.primary};
        color: ${theme.colors.white};
      }

      > span {
        margin-left: ${theme.spacings.xsmall};
      }

      ${media.lessThan('medium')`
      justify-content: center;
      flex: 1;

      > span {
        display: none;
      }
    `}
    `;
  }}
`;
