import { InputHTMLAttributes } from 'react'

import * as S from './styles'

type TextFieldProps = InputHTMLAttributes<HTMLInputElement>

function TextField(props: TextFieldProps) {
  return <S.Input type="text" {...props} />
}

export default TextField
