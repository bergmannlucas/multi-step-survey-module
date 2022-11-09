import { render, screen } from 'utils/test-utils'

import ThirdStep from '.'

jest.mock('components/TextField', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock TextField"></div>
    }
  }
})

jest.mock('components/Checkbox', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Checkbox"></div>
    }
  }
})

describe('<ThirdStep />', () => {
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
  it('should render textfield and checkbox inputs', () => {
    render(<ThirdStep {...props} />)

    expect(screen.getByTestId('Mock TextField')).toBeInTheDocument()
    expect(screen.getByTestId('Mock Checkbox')).toBeInTheDocument()
  })
})
