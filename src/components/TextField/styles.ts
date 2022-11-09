import styled, { css } from 'styled-components'

export const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    background: transparent;
    border: 0px solid;
    color: ${theme.colors.purple};
    border-bottom: 4px solid ${theme.colors.purple};
    font-size: ${theme.font.sizes.xlarge};
    margin-bottom: ${theme.spacings.small};
  `}
`
