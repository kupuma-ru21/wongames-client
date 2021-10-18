import styled, { css } from 'styled-components';
import type { DefaultTheme } from 'styled-components';
import type { RibbonColors, RibbonProps } from '.';

type WrapperProps = Omit<RibbonProps, 'children'>;

const wrapperModifiers = {
  color: (theme: DefaultTheme, color: RibbonColors) => css`
    background-color: ${theme.colors[color]};
  `,

  normal: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
    height: 3.6rem;
  `,

  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xsmall};
    height: 2.6rem;
  `,
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, color, size }) => css`
    ${!!size && wrapperModifiers[size](theme)}
    ${!!color && wrapperModifiers.color(theme, color)}
  `}
`;
