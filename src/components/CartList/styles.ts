import { tint } from 'polished';
import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  ${({ theme }) => {
    return css`
      background: ${theme.colors.white};
      display: flex;
      flex-direction: column;
      align-self: start;
    `;
  }}
`;

export const Footer = styled.div`
  ${({ theme }) => {
    return css`
      background: ${tint(0.2, theme.colors.lightGray)};
      color: ${theme.colors.black};
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.small};
      padding: 2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.medium};
      padding: ${theme.spacings.small};
    `};
    `;
  }}
`;

export const Total = styled.span`
  ${({ theme }) => {
    return css`
      color: ${theme.colors.primary};
    `;
  }}
`;
