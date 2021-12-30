import styled, { css } from 'styled-components';
import type {
  DefaultTheme,
  FlattenSimpleInterpolation,
} from 'styled-components';
import { darken } from 'polished';
import type { ButtonProps } from '.';

export type WrapperProps = { hasIcon: boolean } & Pick<
  ButtonProps,
  'size' | 'fullWidth' | 'minimal'
>;
type WrapperModifiersKey = Required<WrapperProps>['size'];
type ReturnStyleFunc = (theme: DefaultTheme) => FlattenSimpleInterpolation;

type WrapperModifiers = {
  [key in WrapperModifiersKey]: ReturnStyleFunc;
} & {
  fullWidth: () => FlattenSimpleInterpolation;
  withIcon: ReturnStyleFunc;
  minimal: ReturnStyleFunc;
  disabled: () => FlattenSimpleInterpolation;
};

const wrapperModifiers: WrapperModifiers = {
  small: (theme: DefaultTheme) => {
    return css`
      height: 3rem;
      font-size: ${theme.font.sizes.xsmall};
    `;
  },
  medium: (theme: DefaultTheme) => {
    return css`
      height: 4rem;
      font-size: ${theme.font.sizes.small};
      padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
    `;
  },
  large: (theme: DefaultTheme) => {
    return css`
      height: 5rem;
      font-size: ${theme.font.sizes.medium};
      padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
    `;
  },
  fullWidth: () => {
    return css`
      width: 100%;
    `;
  },
  withIcon: (theme: DefaultTheme) => {
    return css`
      svg {
        width: 1.5rem;
        & + span {
          margin-left: ${theme.spacings.xxsmall};
        }
      }
    `;
  },
  minimal: (theme: DefaultTheme) => {
    return css`
      background: none;
      color: ${theme.colors.primary};
      &:hover {
        color: ${darken(0.1, theme.colors.primary)};
      }
    `;
  },
  disabled: () => {
    return css`
      &:disabled {
        cursor: not-allowed;
        filter: saturate(30%);
      }
    `;
  },
};

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, fullWidth, hasIcon, minimal, disabled }) => {
    return css`
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(180deg, #ff5f5f 0%, #f062c0 50%);
      color: ${theme.colors.white};
      border: 0;
      cursor: pointer;
      border-radius: ${theme.border.radius};
      padding: ${theme.spacings.xxsmall};
      text-decoration: none;

      &:hover {
        background: ${minimal
          ? 'none'
          : `linear-gradient(180deg, #e35565 0%, #d958a6 50%)`};
      }

      ${!!size && wrapperModifiers[size](theme)};
      ${!!fullWidth && wrapperModifiers.fullWidth()};
      ${!!hasIcon && wrapperModifiers.withIcon(theme)};
      ${!!minimal && wrapperModifiers.minimal(theme)};
      ${disabled && wrapperModifiers.disabled()};
    `;
  }}
`;
