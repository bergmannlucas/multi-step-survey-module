import styled, { css } from 'styled-components'

export const Wrapper = styled.svg`
  ${({ theme }) => css`
    stroke: ${theme.colors.purple};
    padding: 0.1rem;
    margin: 0.2rem;

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
  `}
`
