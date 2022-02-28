import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  FormGroup,
  Col,
  Input,
  Form,
  Button,
  Label,
  CustomInput,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from 'reactstrap'
import { User, Mail, Smartphone, Lock } from 'react-feather'

const HorizontalFormIcons = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Horizontal Form with Icons</CardTitle>
      </CardHeader>
      <CardBody>
        <Form>
          <FormGroup row>
            <Label sm='3' for='nameIcons'>
              First Name
            </Label>
            <Col sm='9'>
              <InputGroup className='input-group-merge'>
                <InputGroupAddon addonType='prepend'>
                  <InputGroupText>
                    <User size={15} />
                  </InputGroupText>
                </InputGroupAddon>
                <Input type='text' name='name' id='nameIcons' placeholder='First Name' />
              </InputGroup>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm='3' for='EmailIcons'>
              Email
            </Label>
            <Col sm='9'>
              <InputGroup className='input-group-merge'>
                <InputGroupAddon addonType='prepend'>
                  <InputGroupText>
                    <Mail size={15} />
                  </InputGroupText>
                </InputGroupAddon>
                <Input type='email' name='Email' id='EmailIcons' placeholder='Email' />
              </InputGroup>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm='3' for='mobileIcons'>
              Mobile
            </Label>
            <Col sm='9'>
              <InputGroup className='input-group-merge'>
                <InputGroupAddon addonType='prepend'>
                  <InputGroupText>
                    <Smartphone size={15} />
                  </InputGroupText>
                </InputGroupAddon>
                <Input type='number' name='mobile' id='mobileIcons' placeholder='Mobile' />
              </InputGroup>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm='3' for='passwordIcons'>
              Password
            </Label>
            <Col sm='9'>
              <InputGroup className='input-group-merge'>
                <InputGroupAddon addonType='prepend'>
                  <InputGroupText>
                    <Lock size={15} />
                  </InputGroupText>
                </InputGroupAddon>
                <Input type='password' name='password' id='passwordIcons' placeholder='Password' />
              </InputGroup>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col md={{ size: 9, offset: 3 }}>
              <CustomInput type='checkbox' id='remember-me-icons' label='Remember Me' defaultChecked={false} />
            </Col>
          </FormGroup>

          <FormGroup className='mb-0' row>
            <Col className='d-flex' md={{ size: 9, offset: 3 }}>
              <Button.Ripple className='mr-1' color='primary' type='submit' onClick={e => e.preventDefault()}>
                Submit
              </Button.Ripple>
              <Button.Ripple outline color='secondary' type='reset'>
                Reset
              </Button.Ripple>
            </Col>
          </FormGroup>
        </Form>
      </CardBody>
    </Card>
  )
}
export default HorizontalFormIcons
