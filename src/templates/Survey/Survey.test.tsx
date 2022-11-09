import { act } from 'react-dom/test-utils'
import { setStorageItem } from 'utils/local-storage/local-storage'
import { render, screen } from 'utils/test-utils'

import Survey from '.'

jest.mock('components/Heading', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Heading"></div>
    }
  }
})

jest.mock('components/Spinner', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Spinner"></div>
    }
  }
})

jest.mock('templates/FirstStep', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock FirstStep"></div>
    }
  }
})

jest.mock('templates/SecondStep', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock SecondStep"></div>
    }
  }
})

jest.mock('templates/ThirdStep', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock ThirdStep"></div>
    }
  }
})

jest.mock('templates/Summary', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Summary"></div>
    }
  }
})

describe('<Survey />', () => {
  const surveyState = [
    {
      name: 'Name',
      email: 'Email'
    },
    {
      gender: 'Male',
      age: 26
    },
    {
      book: 'Book',
      colors: {
        black: true,
        white: true,
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

  beforeEach(() => {
    window.localStorage.clear()
    setStorageItem('lastStep', 1)
    setStorageItem('submitted', false)
    setStorageItem('survey', surveyState)
  })

  afterAll(() => {
    jest.runOnlyPendingTimers()
    jest.useRealTimers()
  })

  it('should render spinner loading for two seconds', () => {
    setStorageItem('lastStep', '2')

    act(() => {
      render(<Survey />)
    })

    expect(screen.getByTestId('Mock Spinner')).toBeInTheDocument()
  })

  it('should not render survey if it is already submitted', () => {
    jest.useFakeTimers()
    setStorageItem('submitted', true)

    render(<Survey />)

    act(() => {
      jest.runAllTimers()
    })

    expect(screen.queryByTestId('Mock Spinner')).not.toBeInTheDocument()
    expect(screen.getByTestId('survey-wrapper')).toHaveStyleRule(
      'display',
      'none'
    )
  })

  it('should render survey if it is not submitted', () => {
    jest.useFakeTimers()

    render(<Survey />)

    act(() => {
      jest.runAllTimers()
    })

    expect(screen.queryByTestId('Mock Spinner')).not.toBeInTheDocument()
    expect(screen.getByTestId('survey-wrapper')).not.toHaveStyleRule(
      'display',
      'none'
    )

    expect(screen.getAllByTestId('Mock Heading')).toHaveLength(2)
    expect(screen.getByTestId('Mock FirstStep')).toBeInTheDocument()
    // expect(screen.getByTestId('Mock Button')).toBeInTheDocument()
  })

  it('should open survey in last step accessed', () => {
    jest.useFakeTimers()
    setStorageItem('lastStep', 2)

    render(<Survey />)

    act(() => {
      jest.runAllTimers()
    })

    expect(screen.getByTestId('Mock SecondStep')).toBeInTheDocument()
  })

  it('should disable submit button if any there is any invalid field', () => {
    jest.useFakeTimers()
    setStorageItem('survey', [
      {
        name: 'Name',
        email: 'Email'
      },
      {
        gender: null,
        age: 26
      },
      {
        book: 'Book',
        colors: {
          black: true,
          white: true,
          red: false,
          green: false,
          blue: false,
          yellow: false,
          purple: false,
          orange: false,
          pink: false
        }
      }
    ])
    setStorageItem('lastStep', 4)

    render(<Survey />)

    act(() => {
      jest.runAllTimers()
    })

    const submitButton = screen.getByText(/submit/i)

    expect(submitButton.closest('button')).toHaveAttribute('disabled')
  })
})
