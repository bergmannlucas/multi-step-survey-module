import { InputHTMLAttributes } from 'react'

import * as S from './styles'

type CheckboxValue = {
  [key: string]: boolean
}

type CheckboxProps = {
  labelFor?: string
  options?: string[] | number[]
  label?: string
  selectedValues?: CheckboxValue[]
} & InputHTMLAttributes<HTMLInputElement>

function Checkbox({
  labelFor = '',
  options,
  label,
  selectedValues,
  ...props
}: CheckboxProps) {
  return (
    <S.Wrapper>
      {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}
      <S.OptionWrapper>
        {options?.map((option) => (
          <div key={option}>
            <S.Input
              id={labelFor}
              type="checkbox"
              value={option}
              checked={!!selectedValues![option as number]}
              {...props}
            />
            <S.Option>{option}</S.Option>
          </div>
        ))}
      </S.OptionWrapper>
    </S.Wrapper>
  )
}

export default Checkbox
