import { Card, CardHeader, CardTitle, CardBody, FormGroup, Input, CustomInput, Label, Row, Col } from 'reactstrap'

const SelectReactstrap = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Reactstrap Multi Select</CardTitle>
      </CardHeader>
      <CardBody>
        <Row>
          <Col md='4' sm='12'>
            <FormGroup>
              <Label for='select-multi'>Multiple Select</Label>
              <Input type='select' name='select' id='select-multi' multiple>
                <option>Square</option>
                <option>Rectangle</option>
                <option>Circle</option>
                <option>Triangle</option>
                <option>Pentagon</option>
              </Input>
            </FormGroup>
          </Col>
          <Col md='4' sm='12'>
            <FormGroup>
              <Label for='custom-select-multi'>Custom Multiple Select</Label>
              <CustomInput type='select' name='select' id='custom-select-multi' multiple>
                <option>Square</option>
                <option>Rectangle</option>
                <option>Circle</option>
                <option>Triangle</option>
                <option>Pentagon</option>
              </CustomInput>
            </FormGroup>
          </Col>
          <Col md='4' sm='12'>
            <FormGroup>
              <Label for='custom-select-size'>Custom Select Size</Label>
              <CustomInput type='select' name='select' id='custom-select-size' size={4} multiple>
                <option>Square</option>
                <option>Rectangle</option>
                <option>Circle</option>
                <option>Triangle</option>
                <option>Pentagon</option>
              </CustomInput>
            </FormGroup>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}
export default SelectReactstrap
