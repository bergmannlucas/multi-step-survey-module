import { render, screen } from 'utils/test-utils'
import Button from '.'

describe('<Button />', () => {
  it('should render correctly', () => {
    const { container } = render(<Button>Next</Button>)

    expect(screen.getByText(/next/i)).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render a disabled Button', () => {
    render(<Button disabled>Submit</Button>)

    expect(screen.getByRole('button', { name: /submit/i })).toHaveStyleRule(
      'cursor',
      'not-allowed',
      {
        modifier: ':disabled'
      }
    )
  })
})
