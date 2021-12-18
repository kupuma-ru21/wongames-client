import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import type { LogoProps } from '.';

const wrapperModifiers = {
  normal: () => {
    return css`
      width: 11rem;
      height: 3.3rem;
    `;
  },
  large: () => {
    return css`
      width: 20rem;
      height: 5.9rem;
    `;
  },

  hideOnMobile: () => {
    return css`
      ${media.lessThan('medium')`
      width: 5.8rem;
      height: 4.5rem;

      svg {
        height: 4.5rem;
        pointer-events: none;
      }
      .text {
        display: none;
      }

    `}
    `;
  },
};

export const Wrapper = styled.div<LogoProps>`
  ${({ theme, color, size, hideOnMobile }) => {
    return css`
      color: ${theme.colors[color!]};
      ${!!size && wrapperModifiers[size]}
      ${!!hideOnMobile && wrapperModifiers.hideOnMobile}
    `;
  }}
`;
