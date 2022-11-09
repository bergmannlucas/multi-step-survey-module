import userEvent from '@testing-library/user-event'
import { render, screen, waitFor } from 'utils/test-utils'

import TextField from '.'

describe('<TextField />', () => {
  it('should render with placeholder', () => {
    const { container } = render(<TextField placeholder="E-mail" />)

    expect(screen.getByPlaceholderText('E-mail')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should change its value when typing', async () => {
    const onInputChange = jest.fn()
    render(<TextField onChange={onInputChange} name="TextField" />)

    const input = screen.getByRole('textbox')
    const text = 'This is my new text'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onInputChange).toHaveBeenCalledTimes(text.length)
    })
  })
})
