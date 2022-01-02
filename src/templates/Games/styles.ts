import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import { Container } from 'components/Container';

export const Main = styled(Container)`
  ${({ theme }) => {
    return css`
      ${media.greaterThan('medium')`
        display: grid;
        grid-template-columns: 26rem 1fr;
        gap: ${theme.grid.gutter};
      `}
    `;
  }}
`;

export const ShowMore = styled.div`
  ${({ theme }) => {
    return css`
      color: ${theme.colors.white};
      text-align: center;
      padding: ${theme.spacings.medium};
      text-transform: uppercase;
      font-weight: bold;
      cursor: pointer;
      > svg {
        color: ${theme.colors.primary};
      }
    `;
  }}
`;
