import React from 'react'

import * as S from './styles'

export type HeadingProps = {
  children: React.ReactNode
  size?: 'small' | 'huge'
}

function Heading({ size = 'huge', children }: HeadingProps) {
  return <S.Wrapper size={size}>{children}</S.Wrapper>
}

export default Heading
