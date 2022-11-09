import userEvent from '@testing-library/user-event'
import { render, screen, waitFor } from 'utils/test-utils'
import Radio from '.'

describe('<Radio />', () => {
  it('should render with label', () => {
    const { container } = render(
      <Radio
        options={['male']}
        selectedValue="male"
        label="radio label"
        labelFor="radio"
        onChange={jest.fn()}
      />
    )

    expect(screen.getByRole('radio')).toBeInTheDocument()
    expect(screen.getByText(/radio label/i)).toBeInTheDocument()
    expect(screen.getByText(/male/i)).toHaveAttribute('for', 'radio')

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render without label', () => {
    render(<Radio />)

    expect(screen.queryByLabelText('Radio')).not.toBeInTheDocument()
  })

  it('should dispatch onChange when click on radio button', async () => {
    const onChange = jest.fn()
    render(
      <Radio
        label="radio label"
        labelFor="radio"
        onChange={onChange}
        options={['male']}
      />
    )

    expect(onChange).not.toHaveBeenCalled()

    userEvent.click(screen.getByRole('radio'))
    await waitFor(() => {
      expect(onChange).toHaveBeenCalledTimes(1)
    })
  })

  it('should be accessible with tab', () => {
    render(
      <Radio
        label="radio label"
        labelFor="radio"
        options={['male']}
        onChange={jest.fn()}
      />
    )

    const radio = screen.getByRole('radio')

    expect(document.body).toHaveFocus()

    userEvent.tab()

    expect(radio).toHaveFocus()
  })
})
