import TextField from 'components/TextField'

type FirstStepProps = {
  state: any
  onChange: any
}

function FirstStep({ state, onChange }: FirstStepProps) {
  return (
    <div>
      <TextField
        name={'name'}
        placeholder={'Name'}
        value={state.name}
        onChange={(event) =>
          onChange({
            name: event.target.value,
            email: state.email
          })
        }
      />
      <TextField
        name={'email'}
        placeholder={'E-mail'}
        value={state.email}
        onChange={(event) =>
          onChange({
            name: state.name,
            email: event.target.value
          })
        }
      />
    </div>
  )
}

export default FirstStep
