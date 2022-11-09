import styled, { css } from 'styled-components'

export const Wrapper = styled.button`
  ${({ theme }) => css`
    height: 7rem;
    width: 100%;

    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
    text-transform: uppercase;

    color: ${theme.colors.white};
    background: ${theme.colors.purple};

    border: 4px solid ${theme.colors.purple};
    border-radius: ${theme.border.radius.huge};
    cursor: pointer;

    &:hover:enabled {
      color: ${theme.colors.purple};
      background: ${theme.colors.white};
    }

    &:disabled {
      cursor: not-allowed;
      filter: saturate(10%);
    }
  `}
`
