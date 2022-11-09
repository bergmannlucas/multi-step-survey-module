import TextField from 'components/TextField'
import Checkbox from 'components/Checkbox'

type ThirdStepProps = {
  state: any
  onChange: any
}

function ThirdStep({ state, onChange }: ThirdStepProps) {
  return (
    <div>
      <TextField
        name={'book'}
        placeholder={'Favorite Book*'}
        value={state.book}
        onChange={(event) =>
          onChange({
            book: event.target.value,
            colors: state.colors
          })
        }
      />
      <Checkbox
        options={[
          'black',
          'white',
          'red',
          'green',
          'blue',
          'yellow',
          'purple',
          'orange',
          'pink'
        ]}
        label={'Favorite Colors*'}
        selectedValues={state.colors}
        labelFor="colors"
        onChange={(event) =>
          onChange({
            book: state.book,
            colors: {
              ...state.colors,
              [event.target.value]: !state.colors[event.target.value]
            }
          })
        }
      />
    </div>
  )
}

export default ThirdStep
