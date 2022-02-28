import { Card, CardHeader, CardTitle, CardText, CardBody, Input, FormGroup, Label, Row, Col } from 'reactstrap'

const InputSizes = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Horizontal form label sizing</CardTitle>
      </CardHeader>
      <CardBody>
        <CardText>
          Be sure to use <code>size="sm"</code> or <code>size="lg"</code> with your
          <code>&lt;Label&gt;</code>s or <code>&lt;legend&gt;</code>s to correctly follow the size of input size.
        </CardText>
        <Row>
          <Col sm='12'>
            <FormGroup row>
              <Label sm='3' size='lg' for='input-large-horizontal'>
                Large
              </Label>
              <Col sm='9'>
                <Input type='text' id='input-large-horizontal' bsSize='lg' placeholder='Large Input' />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm='3' for='input-default-horizontal'>
                Default
              </Label>
              <Col sm='9'>
                <Input type='text' id='input-default-horizontal' placeholder='Default Input' />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm='3' size='sm' for='input-small-horizontal'>
                Small
              </Label>
              <Col sm='9'>
                <Input type='text' id='input-small-horizontal' bsSize='sm' placeholder='Small Input' />
              </Col>
            </FormGroup>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}
export default InputSizes
