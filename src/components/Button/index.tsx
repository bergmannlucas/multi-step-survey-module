import { ButtonHTMLAttributes } from 'react'

import * as S from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

function Button({ children, ...props }: ButtonProps) {
  return (
    <S.Wrapper {...props}>
      <span>{children}</span>
    </S.Wrapper>
  )
}

export default Button
