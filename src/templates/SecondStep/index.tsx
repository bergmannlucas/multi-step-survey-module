import Select from 'components/Select'
import Radio from 'components/Radio'

type SecondStepProps = {
  state: any
  onChange: any
}

function SecondStep({ state, onChange }: SecondStepProps) {
  return (
    <div>
      <Select
        options={Array.from(Array(100).keys())}
        label="Age*:"
        value={state.age}
        onChange={(event) =>
          onChange({
            age: event.target.value,
            gender: state.gender
          })
        }
      />
      <Radio
        name="gender"
        options={['male', 'female', 'other']}
        label="Gender*"
        labelFor="gender"
        selectedValue={state.gender}
        onChange={(event) => {
          onChange({
            age: state.age,
            gender: event.target.value
          })
        }}
      />
    </div>
  )
}

export default SecondStep
