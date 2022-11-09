import { render, screen } from 'utils/test-utils'

import Summary from '.'

describe('<Summary />', () => {
  const props = {
    state: [
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
    ],
    onChange: jest.fn()
  }
  it('should render all data filled', () => {
    render(<Summary {...props} />)

    expect(screen.getByText(/name/i)).toBeInTheDocument()
    expect(screen.getByText(/email/i)).toBeInTheDocument()
    expect(screen.getByText(/male/i)).toBeInTheDocument()
    expect(screen.getByText(/26/i)).toBeInTheDocument()
    expect(screen.getByText(/book/i)).toBeInTheDocument()
    expect(screen.getByText(/black/i)).toBeInTheDocument()
    expect(screen.getByText(/white/i)).toBeInTheDocument()
    expect(screen.queryByText(/red/i)).not.toBeInTheDocument()
  })
})
