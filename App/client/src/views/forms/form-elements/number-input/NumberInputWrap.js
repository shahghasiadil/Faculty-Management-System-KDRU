import NumberInput from '@components/number-input'
import { Card, CardHeader, CardTitle, CardBody, CardText, Label } from 'reactstrap'

const NumberInputWrap = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Number Wrapping</CardTitle>
      </CardHeader>
      <CardBody>
        <CardText>
          To allow the Number Input to wrap from max to min when incrementing (or min to max when decrementing), set the
          <code>wrap</code> prop to <code>true</code>.
        </CardText>
        <Label for='wrap-number-input'>Wrapping value Number Input</Label>
        <NumberInput id='wrap-number-input' max={10} wrap />
      </CardBody>
    </Card>
  )
}

export default NumberInputWrap
