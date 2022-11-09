import userEvent from '@testing-library/user-event'
import { render, screen } from 'utils/test-utils'
import Checkbox from '.'

describe('<Checkbox />', () => {
  it('should render with label', () => {
    const { container } = render(
      <Checkbox
        options={['black']}
        selectedValues={[{ black: true }]}
        label="checkbox label"
        labelFor="check"
        onChange={jest.fn()}
      />
    )

    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument()
    expect(screen.getByText(/checkbox label/i)).toHaveAttribute('for', 'check')

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render without label', () => {
    render(<Checkbox />)

    expect(screen.queryByLabelText('Checkbox')).not.toBeInTheDocument()
  })

  it('should be accessible with tab', () => {
    render(
      <Checkbox
        options={['black']}
        selectedValues={[{ black: true }]}
        label="checkbox label"
        labelFor="check"
        onChange={jest.fn()}
      />
    )

    expect(document.body).toHaveFocus()

    userEvent.tab()

    expect(screen.getByLabelText(/checkbox/i)).toHaveFocus()
  })
})
