import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardText,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  Row,
  Col
} from 'reactstrap'

const InputState = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Input Validation State</CardTitle>
      </CardHeader>

      <CardBody>
        <CardText>
          Use attribute <code>valid/invalid</code> with input tag to indicate input state.
        </CardText>
        <Row>
          <Col md='6' sm='12'>
            <FormGroup>
              <Label for='validState'>Valid State</Label>
              <Input type='text' id='validState' name='validState' valid />
              <FormFeedback valid>Sweet! That name is available.</FormFeedback>
            </FormGroup>
          </Col>
          <Col md='6' sm='12'>
            <FormGroup>
              <Label for='invalidState'>Invalid State</Label>
              <Input type='text' id='invalidState' name='invalidState' invalid />
              <FormFeedback>Oh no! That name is already taken.</FormFeedback>
            </FormGroup>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}
export default InputState
