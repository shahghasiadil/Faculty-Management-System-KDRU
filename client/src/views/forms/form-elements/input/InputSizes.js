import { Card, CardHeader, CardTitle, CardBody, CardText, Input, FormGroup, Label, Row, Col } from 'reactstrap'

const InputSizes = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Sizing Options</CardTitle>
      </CardHeader>

      <CardBody>
        <CardText>
          Use <code>bsSize="sm / lg"</code> attribute with Input tag to change size of input.
        </CardText>
        <Row>
          <Col sm='12'>
            <FormGroup>
              <Label for='input-large'>Large</Label>
              <Input type='text' id='input-large' bsSize='lg' placeholder='Large Input' />
            </FormGroup>
          </Col>
          <Col sm='12'>
            <FormGroup>
              <Label for='input-default'>Default</Label>
              <Input type='text' id='input-default' placeholder='Default Input' />
            </FormGroup>
          </Col>
          <Col sm='12'>
            <FormGroup>
              <Label for='input-small'>Small</Label>
              <Input type='text' id='input-small' bsSize='sm' placeholder='Small Input' />
            </FormGroup>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}
export default InputSizes
