import { render } from 'utils/test-utils'
import Spinner from '.'

describe('<Spinner />', () => {
  it('should render correctly', () => {
    const { container } = render(<Spinner />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
