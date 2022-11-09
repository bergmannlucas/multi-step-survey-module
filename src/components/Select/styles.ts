import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const Select = styled.select`
  ${({ theme }) => css`
    position: relative;

    width: 100%;
    max-width: 15rem;

    cursor: pointer;
    color: ${theme.colors.white};
    background: ${theme.colors.purple};
    font-size: ${theme.font.sizes.xlarge};
    font-family: ${theme.font.family};

    text-align: center;
    border-radius: ${theme.border.radius.small};
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    margin: 0 1rem 0 0;
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.purple};
  `}
`
