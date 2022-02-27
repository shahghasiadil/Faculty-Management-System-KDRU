import { Card, CardHeader, CardTitle, CardBody, FormGroup, Input, Label } from 'reactstrap'

const SelectReactstrap = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Bootstrap Sizing</CardTitle>
      </CardHeader>
      <CardBody>
        <FormGroup>
          <Label for='select-lg'>Select Large</Label>
          <Input type='select' name='select' bsSize='lg' id='select-lg'>
            <option>Pulp Fiction</option>
            <option>Nightcrawler</option>
            <option>Donnie Darko</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for='select-default'>Select Default</Label>
          <Input type='select' name='select' id='select-default'>
            <option>Pulp Fiction</option>
            <option>Nightcrawler</option>
            <option>Donnie Darko</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for='select-sm'>Select Small</Label>
          <Input type='select' name='select' bsSize='sm' id='select-sm'>
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
