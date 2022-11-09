import { render, screen } from 'utils/test-utils'

import FirstStep from '.'

jest.mock('components/TextField', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock TextField"></div>
    }
  }
})

describe('<FirstStep />', () => {
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
  it('should render text fields for name and email', () => {
    render(<FirstStep {...props} />)

    expect(screen.getAllByTestId('Mock TextField')).toHaveLength(2)
  })
})
