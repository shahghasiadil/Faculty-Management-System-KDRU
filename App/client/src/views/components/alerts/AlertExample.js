import { useState } from 'react'
import { Alert, FormGroup, Label, Input } from 'reactstrap'
import { AlertCircle } from 'react-feather'

const AlertExample = () => {
  const [inputTerm, setInputTerm] = useState('')
  const [visible, setVisible] = useState(true)

  const handleInput = e => {
    setInputTerm(e.target.value)

    if (e.target.value.length > 0 && isNaN(e.target.value)) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }

  return (
    <div className='demo-spacing-0'>
      <FormGroup>
        <Label htmlFor='numbers'>Enter numbers only</Label>
        <Input className='w-25 h-25 pl-1' placeholder='0123456789' value={inputTerm} onChange={e => handleInput(e)} />
      </FormGroup>
      <Alert color='danger' isOpen={visible}>
        <div className='alert-body'>
          <AlertCircle size={15} />{' '}
          <span className='ml-1'>
            The value is <strong>invalid</strong> you can only enter numbers
          </span>
        </div>
      </Alert>
    </div>
  )
}
export default AlertExample
