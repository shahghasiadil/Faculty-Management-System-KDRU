import NumberInput from '@components/number-input'
import { Card, CardHeader, CardTitle, CardBody, CardText, Label } from 'reactstrap'

const NumberInputMinMax = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Min & Max</CardTitle>
      </CardHeader>
      <CardBody>
        <CardText>
          Number Input have a default range from <code>1</code> to <code>100</code>, which can be changed by setting the
          <code>min</code> and <code>max</code> props.
        </CardText>
        <Label for='min-max-number-input'>Number Input with min 0 and max 10</Label>
        <NumberInput id='min-max-number-input' min={0} max={10} />
      </CardBody>
    </Card>
  )
}

export default NumberInputMinMax
