import userEvent from '@testing-library/user-event'
import { render, screen, waitFor } from 'utils/test-utils'
import Select from '.'

describe('<Select />', () => {
  it('should render with label', () => {
    const { container } = render(
      <Select options={[0, 1, 2]} label="age" onChange={jest.fn()} />
    )

    expect(screen.getByRole('combobox')).toBeInTheDocument()
    expect(screen.getByText(/age/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render without label', () => {
    render(<Select options={[0, 1, 2]} onChange={jest.fn()} />)

    expect(screen.getByRole('combobox')).toBeInTheDocument()
    expect(screen.queryByText(/age/i)).not.toBeInTheDocument()
  })

  it('should dispatch onChange when user selects an option', async () => {
    const onChange = jest.fn()
    render(<Select options={['0', '1', '2']} onChange={onChange} />)

    expect(onChange).not.toHaveBeenCalled()

    userEvent.selectOptions(screen.getByRole('combobox'), '1')
    await waitFor(() => {
      expect(onChange).toHaveBeenCalledTimes(1)
    })
  })
})
