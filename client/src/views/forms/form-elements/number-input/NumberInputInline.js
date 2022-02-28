import NumberInput from '@components/number-input'
import { Card, CardHeader, CardTitle, CardBody, CardText, Label, FormGroup } from 'reactstrap'

const NumberInputInline = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Inline</CardTitle>
      </CardHeader>
      <CardBody>
        <CardText>
          Use <code>flex</code> as wrapper to show Number Input as inline component
        </CardText>
        <FormGroup className='d-flex align-items-center'>
          <Label for='inline-number-input'>Inline Number Input</Label>
          <NumberInput className='w-auto ml-1' id='inline-number-input' />
        </FormGroup>
      </CardBody>
    </Card>
  )
}

export default NumberInputInline
