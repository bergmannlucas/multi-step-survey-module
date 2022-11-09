import * as S from './styles'

type SummaryStepProps = {
  state: any
}

function Summary({ state }: SummaryStepProps) {
  const getColors = () => {
    const selectedColors = Object.keys(state[2].colors).filter(
      (cor) => state[2].colors[cor]
    )

    return selectedColors
  }

  return (
    <S.Wrapper>
      <S.Item>Name: {state[0].name}</S.Item>
      <S.Item>E-mail: {state[0].email}</S.Item>
      <S.Item>Age*: {state[1].age}</S.Item>
      <S.Item>Gender*: {state[1].gender}</S.Item>
      <S.Item>Favorite Book*: {state[2].book}</S.Item>
      <S.Item>Favorite Colors*: {getColors().toString()}</S.Item>
    </S.Wrapper>
  )
}

export default Summary
