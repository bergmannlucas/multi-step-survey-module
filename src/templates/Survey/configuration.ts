import FirstStep from 'templates/FirstStep'
import SecondStep from 'templates/SecondStep'
import Summary from 'templates/Summary'
import ThirdStep from 'templates/ThirdStep'

import { getStorageItem } from 'utils/local-storage/local-storage'

type StepField = {
  name?: string
  type: 'input' | 'select' | 'radio' | 'checkbox'
  placeholder?: string
  options?: number[] | string[]
  label?: string
}

type Step = {
  title: string
  fields?: StepField[]
  template: any
}

type SurveySteps = Step[]

export const initialState = [
  {
    name: '',
    email: ''
  },
  {
    gender: '',
    age: null
  },
  {
    book: '',
    colors: {
      black: false,
      white: false,
      red: false,
      green: false,
      blue: false,
      yellow: false,
      purple: false,
      orange: false,
      pink: false
    }
  }
]

export const getSurveyState = () => {
  const storedSurvey = getStorageItem('survey')

  return storedSurvey || initialState
}

export const SURVEY_STEPS: SurveySteps = [
  {
    template: FirstStep,
    title: 'Identity'
  },
  {
    template: SecondStep,
    title: 'Details'
  },
  {
    template: ThirdStep,
    title: 'Favorites'
  },
  {
    template: Summary,
    title: 'Summary'
  }
]
