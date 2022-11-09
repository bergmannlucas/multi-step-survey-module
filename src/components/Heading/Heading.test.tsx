import { render, screen } from 'utils/test-utils'
import Heading from '.'

describe('<Heading />', () => {
  it('should render a purple heading by default', () => {
    const { container } = render(<Heading>Identity</Heading>)
    expect(screen.getByRole('heading', { name: /identity/i })).toHaveStyle({
      color: '#9249FF'
    })
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render a heading with a small size', () => {
    render(<Heading size="small">Identity</Heading>)

    expect(screen.getByRole('heading', { name: /identity/i })).toHaveStyle({
      'font-size': '1.6rem'
    })
  })

  it('should render a heading with a huge size', () => {
    render(<Heading size="huge">Identity</Heading>)

    expect(screen.getByRole('heading', { name: /identity/i })).toHaveStyle({
      'font-size': '5.2rem'
    })
  })
})
