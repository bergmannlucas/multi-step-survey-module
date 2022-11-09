import React from 'react'
import { ThemeProvider } from 'styled-components'

import Survey from 'templates/Survey'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Survey />
    </ThemeProvider>
  )
}

export default App
