import { Card, CardHeader, CardTitle, CardBody, Form, FormGroup, Label, Input } from 'reactstrap'

const RadioBasic = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Basic</CardTitle>
      </CardHeader>
      <CardBody>
        <Form>
          <div className='demo-inline-spacing'>
            <FormGroup check inline>
              <Label check>
                <Input type='radio' name='ex1' defaultChecked /> Active
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label check>
                <Input type='radio' name='ex1' /> Inactive
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label check>
                <Input type='radio' defaultChecked disabled /> Active Disabled
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label check>
                <Input type='radio' disabled /> Inactive Disabled
              </Label>
            </FormGroup>
          </div>
        </Form>
      </CardBody>
    </Card>
  )
}
export default RadioBasic
