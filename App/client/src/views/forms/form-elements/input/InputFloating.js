import { Card, CardHeader, CardTitle, CardBody, CardText, FormGroup, Label, Input, Row, Col } from 'reactstrap'

const InputFloating = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Floating Label Inputs</CardTitle>
      </CardHeader>

      <CardBody>
        <CardText className='mb-2'>
          For Floting Label Inputs,you'll have to use <code>.form-label-group</code> class as a wrapper & add attribute
          disabled for disabled Floating Label Input.
        </CardText>
        <Row>
          <Col md='6' sm='12'>
            <FormGroup className='form-label-group'>
              <Input type='text' id='floatingInput' placeholder='Label Placeholder' />
              <Label for='floatingInput'>Label Placeholder</Label>
            </FormGroup>
          </Col>
          <Col md='6' sm='12'>
            <FormGroup className='form-label-group'>
              <Input type='text' id='squareInputDisabled' placeholder='Label Placeholder' disabled />
              <Label for='squareInputDisabled'>Label Placeholder</Label>{' '}
            </FormGroup>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}
export default InputFloating
