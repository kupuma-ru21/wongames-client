import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import type { DefaultBreakpoints } from 'styled-media-query';

type breakpoint = keyof DefaultBreakpoints;

export type MediaMatchProps = {
  lessThan?: breakpoint;
  greaterThan?: breakpoint;
};

export const Wrapper = styled.div<MediaMatchProps>`
  ${({ lessThan, greaterThan }) => {
    return css`
      display: none;
      ${!!lessThan && mediaMatchModifiers.lessThan(lessThan)}
      ${!!greaterThan && mediaMatchModifiers.greaterThan(greaterThan)}
    `;
  }}
`;

const mediaMatchModifiers = {
  lessThan: (size: breakpoint) => {
    return css`
      ${media.lessThan(size)` display: block `}
    `;
  },

  greaterThan: (size: breakpoint) => {
    return css`
      ${media.greaterThan(size)` display: block `}
    `;
  },
};
