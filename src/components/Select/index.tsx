import { SelectHTMLAttributes } from 'react'

import * as S from './styles'

type SelectProps = {
  options?: number[] | string[]
  label?: string
} & SelectHTMLAttributes<HTMLSelectElement>

function Select({ options = [], label, ...props }: SelectProps) {
  return (
    <S.Wrapper>
      {!!label && <S.Label>{label}</S.Label>}
      <S.Select {...props}>
        {options.map((option) => {
          return <option key={option}>{option}</option>
        })}
      </S.Select>
    </S.Wrapper>
  )
}

export default Select
