import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardBody, Input, Label } from 'reactstrap'
import classnames from 'classnames'

const TextareaCounter = () => {
  const [value, setValue] = useState('')

  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Counter</CardTitle>
      </CardHeader>

      <CardBody>
        <div className='form-label-group mb-0'>
          <Input
            type='textarea'
            name='text'
            id='exampleText'
            rows='3'
            value={value}
            placeholder='Counter'
            onChange={e => setValue(e.target.value)}
          />
          <Label>Counter</Label>
        </div>
        <span
          className={classnames('textarea-counter-value float-right', {
            'bg-danger': value.length > 20
          })}
        >
          {`${value.length}/20`}
        </span>
      </CardBody>
    </Card>
  )
}
export default TextareaCounter
