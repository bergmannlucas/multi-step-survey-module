import { useEffect, useState } from 'react'

import Button from 'components/Button'
import Heading from 'components/Heading'
import Spinner from 'components/Spinner'

import { getSurveyState, SURVEY_STEPS } from './configuration'

import * as S from './styles'
import {
  getStorageItem,
  setStorageItem
} from 'utils/local-storage/local-storage'
import { schema } from 'utils/fields-validation'

function Survey() {
  const [loading, setLoading] = useState(true)
  const [step, setStep] = useState(getStorageItem('lastStep') || 1)
  const [submitted, setSubmitted] = useState(
    getStorageItem('submitted') || false
  )
  const [surveyState, setSurveyState] = useState(getSurveyState())

  const StepTemplate = SURVEY_STEPS[step - 1].template
  const isLastStep = step === SURVEY_STEPS.length

  useEffect(() => {
    window.addEventListener('beforeunload', () => {
      setStorageItem('lastStep', step)
    })
  })

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  useEffect(() => {
    setStorageItem('survey', surveyState)
  }, [surveyState])

  useEffect(() => {
    setStorageItem('submitted', submitted)
  }, [submitted])

  const handleOnChange = (params: any) => {
    const newSurveyState = [...surveyState]
    newSurveyState[step - 1] = params

    setSurveyState(newSurveyState)
  }

  const hasAnInvalidField = () => {
    const response = schema.validate(surveyState)
    return !!response.error
  }

  return loading ? (
    <Spinner />
  ) : (
    <S.SurveyWrapper data-testid="survey-wrapper" submitted={submitted}>
      <S.Header>
        <Heading>{SURVEY_STEPS[step - 1].title}</Heading>
        <Heading size="small">{`Step ${step} of ${SURVEY_STEPS.length}`}</Heading>
      </S.Header>
      <S.Content>
        <StepTemplate
          state={isLastStep ? surveyState : surveyState[step - 1]}
          onChange={handleOnChange}
        />
      </S.Content>
      <S.Footer>
        {step > 1 && (
          <S.PreviousButtonContainer>
            <Button onClick={() => setStep(step - 1)}>Previous</Button>
          </S.PreviousButtonContainer>
        )}
        {isLastStep ? (
          <S.NextButtonContainer>
            <Button
              disabled={hasAnInvalidField()}
              onClick={() => setSubmitted(true)}
            >
              Submit
            </Button>
          </S.NextButtonContainer>
        ) : (
          <S.NextButtonContainer>
            <Button onClick={() => setStep(step + 1)}>Next</Button>
          </S.NextButtonContainer>
        )}
      </S.Footer>
    </S.SurveyWrapper>
  )
}

export default Survey
