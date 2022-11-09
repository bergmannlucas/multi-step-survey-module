import styled, { css } from 'styled-components'

type SurveyWrapperProps = {
  submitted: boolean
}

const wrapperModifiers = {
  submitted: () => css`
    display: none;
  `
}

export const SurveyWrapper = styled.section<SurveyWrapperProps>`
  ${({ theme, submitted }) => css`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);

    width: 500px;
    min-height: 500px;
    height: fit-content;
    max-height: 1200px;
    padding: 2em;
    word-wrap: break-word;

    border-radius: ${theme.border.radius.huge};
    border: 4px solid ${theme.colors.purple};

    display: flex;
    flex-direction: column;

    ${!!submitted && wrapperModifiers.submitted()};
  `}
`

export const Header = styled.div`
  display: flex;
  justify-content: space-around;
`

export const Content = styled.div`
  height: 100%;
  margin: 3rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
`

export const Footer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'previous next';
`

export const PreviousButtonContainer = styled.div`
  grid-area: previous;
`
export const NextButtonContainer = styled.div`
  grid-area: next;
`
