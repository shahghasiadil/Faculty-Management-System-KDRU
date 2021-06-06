import { Card, CardHeader, CardTitle, CardBody, Form, FormGroup, Label, Input } from 'reactstrap'

const CheckboxBasic = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Basic Checkboxes</CardTitle>
      </CardHeader>
      <CardBody>
        <Form>
          <div className='demo-inline-spacing'>
            <FormGroup check inline>
              <Input type='checkbox' defaultChecked id='basic-cb-checked' />
              <Label for='basic-cb-checked' check>
                Checked
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Input type='checkbox' id='basic-cb-unchecked' />
              <Label for='basic-cb-unchecked' check>
                Unchecked
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Input type='checkbox' defaultChecked disabled />
              <Label check>Checked Disabled</Label>
            </FormGroup>
            <FormGroup check inline>
              <Input type='checkbox' disabled />
              <Label check>Unchecked Disabled</Label>
            </FormGroup>
          </div>
        </Form>
      </CardBody>
    </Card>
  )
}
export default CheckboxBasic
