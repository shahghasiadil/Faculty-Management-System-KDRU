import { Card, CardHeader, CardTitle, CardBody, FormGroup, Input, CustomInput, Label } from 'reactstrap'

const SelectReactstrap = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Reactstrap Select</CardTitle>
      </CardHeader>
      <CardBody>
        <FormGroup>
          <Label for='select-basic'>Basic Select</Label>
          <Input type='select' name='select' id='select-basic'>
            <option>Pulp Fiction</option>
            <option>Nightcrawler</option>
            <option>Donnie Darko</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for='select-custom'>Custom Select</Label>
          <CustomInput type='select' name='select' id='select-custom'>
            <option>Pulp Fiction</option>
            <option>Nightcrawler</option>
            <option>Donnie Darko</option>
          </CustomInput>
        </FormGroup>
        <FormGroup>
          <Label for='select-disabled'>Disabled Select</Label>
          <Input type='select' name='select' id='select-disabled' disabled>
            <option>Pulp Fiction</option>
            <option>Nightcrawler</option>
            <option>Donnie Darko</option>
          </Input>
        </FormGroup>
      </CardBody>
    </Card>
  )
}
export default SelectReactstrap
