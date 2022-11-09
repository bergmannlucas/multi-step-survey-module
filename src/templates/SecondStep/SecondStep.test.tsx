import { render, screen } from 'utils/test-utils'

import SecondStep from '.'

jest.mock('components/Select', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Select"></div>
    }
  }
})

jest.mock('components/Radio', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Radio"></div>
    }
  }
})

describe('<SecondStep />', () => {
  const props = {
    state: [
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
    ],
    onChange: jest.fn()
  }
  it('should render select and radio button inputs', () => {
    render(<SecondStep {...props} />)

    expect(screen.getByTestId('Mock Select')).toBeInTheDocument()
    expect(screen.getByTestId('Mock Radio')).toBeInTheDocument()
  })
})
