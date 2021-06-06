import NumberInput from '@components/number-input'
import { Card, CardHeader, CardTitle, CardBody, CardText, Label, Row, Col } from 'reactstrap'

const NumberInputStates = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Disabled & Readonly states</CardTitle>
      </CardHeader>
      <CardBody>
        <CardText>
          Setting the prop <code>disabled</code> places the component in a disabled, non-interactive state. The{' '}
          <code>readonly</code>
          prop places the component in a readonly state (focusable, but the value cannot be changed by the user).
        </CardText>
        <Row>
          <Col md='6' className='mb-md-0 mb-2'>
            <Label for='disabled-number-input'>Disabled Number Input</Label>
            <NumberInput disabled id='disabled-number-input' />
          </Col>
          <Col md='6'>
            <Label for='readonly-number-input'>Readonly Number Input</Label>
            <NumberInput readonly id='readonly-number-input' />
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default NumberInputStates
