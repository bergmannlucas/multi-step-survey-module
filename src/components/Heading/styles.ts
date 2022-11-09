import styled, { css, DefaultTheme } from 'styled-components'
import { HeadingProps } from '.'

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
  `,

  huge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.huge};
  `
}

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, size }) => css`
    color: ${theme.colors.purple};

    font-weight: ${theme.font.bold};

    ${!!size && wrapperModifiers[size](theme)}
  `}
`
