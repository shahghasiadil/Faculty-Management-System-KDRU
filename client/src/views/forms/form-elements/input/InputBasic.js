import { Card, CardHeader, CardTitle, CardBody, FormGroup, Label, Input, FormText, Row, Col } from 'reactstrap'

const InputBasic = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Basic Inputs</CardTitle>
      </CardHeader>

      <CardBody>
        <Row>
          <Col className='mb-1' xl='4' md='6' sm='12'>
            <FormGroup>
              <Label for='basicInput'>Basic Input</Label>
              <Input type='email' id='basicInput' placeholder='Enter Email' />
            </FormGroup>
          </Col>
          <Col className='mb-1' xl='4' md='6' sm='12'>
            <FormGroup>
              <Label for='InputHelp'>Input text with help</Label>{' '}
              <small className='text-muted'>
                eg. <i>someone@example.com</i>
              </small>
              <Input type='email' id='InputHelp' />
            </FormGroup>
          </Col>
          <Col className='mb-1' xl='4' md='6' sm='12'>
            <FormGroup>
              <Label for='disabledInput'>Disabled Input</Label>
              <Input type='text' id='disabledInput' disabled />
            </FormGroup>
          </Col>
          <Col xl='4' md='6' sm='12'>
            <FormGroup>
              <Label for='helperText'>With Helper Text</Label>
              <Input type='text' id='helperText' placeholder='Name' />
              <FormText className='text-muted'>Find helper text here for given textbox.</FormText>
            </FormGroup>
          </Col>
          <Col xl='4' md='6' sm='12'>
            <FormGroup>
              <Label for='readonlyInput'>Readonly input</Label>
              <Input type='text' id='readonlyInput' readOnly value="You can't update me :P" />
            </FormGroup>
          </Col>
          <Col xl='4' md='6' sm='12'>
            <FormGroup>
              <Label for='StaticInput'>Readonly Static Text</Label>
              <p className='form-control-static' id='StaticInput'>
                email@pixinvent.com
              </p>
            </FormGroup>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}
export default InputBasic
