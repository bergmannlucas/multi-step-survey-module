import { InputHTMLAttributes } from 'react'

import * as S from './styles'

export type RadioProps = {
  options?: string[] | number[]
  label?: string
  labelFor?: string
  selectedValue?: string
} & InputHTMLAttributes<HTMLInputElement>

function Radio({
  label,
  options,
  labelFor,
  selectedValue,
  ...props
}: RadioProps) {
  return (
    <S.Wrapper>
      {!!label && <S.Label>{label}</S.Label>}
      <S.OptionWrapper>
        {options?.map((option) => (
          <div key={option}>
            <S.Input
              id={labelFor}
              type="radio"
              value={option}
              checked={selectedValue === option}
              onChange={props.onChange}
            />
            <S.Option htmlFor={labelFor}>{option}</S.Option>
          </div>
        ))}
      </S.OptionWrapper>
    </S.Wrapper>
  )
}

export default Radio
