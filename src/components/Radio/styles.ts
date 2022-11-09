import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3rem 0;
`

export const OptionWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 25px;
`

export const Input = styled.input`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
`

export const Label = styled.span`
  ${({ theme }) => css`
    margin-bottom: 1rem;
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.purple};
  `}
`

export const Option = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors.purple};
    vertical-align: super;
  `}
`
