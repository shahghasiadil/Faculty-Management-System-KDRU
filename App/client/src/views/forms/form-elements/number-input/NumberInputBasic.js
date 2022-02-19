import { useState } from 'react'
import NumberInput from '@components/number-input'
import { Card, CardHeader, CardTitle, CardBody, CardText, Label, Alert } from 'reactstrap'

const NumberInputBasic = () => {
  const [count, setCount] = useState(0)

  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Basic</CardTitle>
      </CardHeader>
      <CardBody>
        <CardText>
          Number Input is used for incrementing or decrementing a numerical value within a range of a minimum and
          maximum number, with optional step value.
        </CardText>

        <div className='mt-2'>
          <Label for='basic-number-input'>Number Input</Label>
          <NumberInput id='basic-number-input' value={count} onChange={count => setCount(count)} />
          <CardText className='mt-1'>Value: {count}</CardText>
          <Alert className='mb-0' color='success'>
            <div className='alert-body'>
              <span>The ArrowUp and ArrowDown keys can be used to increment or decrement the value. </span>
            </div>
          </Alert>
        </div>
      </CardBody>
    </Card>
  )
}
export default NumberInputBasic
