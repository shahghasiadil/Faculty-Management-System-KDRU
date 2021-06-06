import NumberInput from '@components/number-input'
import { Card, CardHeader, CardTitle, CardBody, CardText, Label } from 'reactstrap'

const NumberInputStep = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Step</CardTitle>
      </CardHeader>
      <CardBody>
        <CardText>
          The default step increment is <code>1</code>, and can be changed via the <code>step</code> prop (decimal
          values allowed). When <code>step</code> is set, the value will always be a multiple of the step size plus the
          minimum value.
        </CardText>
        <Label for='step-number-input'>Number Input with step of 0.25</Label>
        <NumberInput id='step-number-input' max={10} step={0.25} />
      </CardBody>
    </Card>
  )
}

export default NumberInputStep
