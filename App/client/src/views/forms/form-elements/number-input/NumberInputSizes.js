import NumberInput from '@components/number-input'
import { Card, CardHeader, CardTitle, CardBody, CardText, Label, FormGroup } from 'reactstrap'

const NumberInputSizes = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Sizes</CardTitle>
      </CardHeader>
      <CardBody>
        <CardText>
          Just like other Bootstrap Components, <code>&lt;NumberInput /&gt;</code> supports small and large sizing via
          setting the <code>size</code> prop to either <code>'sm'</code> or <code>'lg'</code>, respectively.
        </CardText>

        <FormGroup>
          <Label for='lg-number-input'>Large Number Input</Label>
          <NumberInput id='lg-number-input' size='lg' />
        </FormGroup>
        <FormGroup>
          <Label for='default-number-input'>Default Number Input</Label>
          <NumberInput id='default-number-input' />
        </FormGroup>
        <FormGroup>
          <Label for='sm-number-input'>Small Number Input</Label>
          <NumberInput id='sm-number-input' size='sm' />
        </FormGroup>
      </CardBody>
    </Card>
  )
}

export default NumberInputSizes
