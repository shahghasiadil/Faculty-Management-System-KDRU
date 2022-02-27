import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  FormGroup,
  Row,
  Col,
  Input,
  Form,
  Button,
  Label,
  CustomInput,
  InputGroup,
  InputGroupText,
  InputGroupAddon
} from 'reactstrap'
import { User, Mail, Smartphone, Lock } from 'react-feather'

const VerticalFormIcons = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Vertical Form with Icons</CardTitle>
      </CardHeader>
      <CardBody>
        <Form>
          <Row>
            <Col sm='12'>
              <Label for='nameVerticalIcons'>First Name</Label>
              <InputGroup className='input-group-merge' tag={FormGroup}>
                <InputGroupAddon addonType='prepend'>
                  <InputGroupText>
                    <User size={15} />
                  </InputGroupText>
                </InputGroupAddon>
                <Input type='text' name='name' id='nameVerticalIcons' placeholder='First Name' />
              </InputGroup>
            </Col>
            <Col sm='12'>
              <Label for='EmailVerticalIcons'>Email</Label>
              <InputGroup className='input-group-merge' tag={FormGroup}>
                <InputGroupAddon addonType='prepend'>
                  <InputGroupText>
                    <Mail size={15} />
                  </InputGroupText>
                </InputGroupAddon>
                <Input type='email' name='Email' id='EmailVerticalIcons' placeholder='Email' />
              </InputGroup>
            </Col>
            <Col sm='12'>
              <Label for='IconsMobile'>Mobile</Label>
              <InputGroup className='input-group-merge' tag={FormGroup}>
                <InputGroupAddon addonType='prepend'>
                  <InputGroupText>
                    <Smartphone size={15} />
                  </InputGroupText>
                </InputGroupAddon>
                <Input type='number' name='mobile' id='IconsMobile' placeholder='Mobile' />
              </InputGroup>
            </Col>
            <Col sm='12'>
              <Label for='IconsPassword'>Password</Label>
              <InputGroup className='input-group-merge' tag={FormGroup}>
                <InputGroupAddon addonType='prepend'>
                  <InputGroupText>
                    <Lock size={15} />
                  </InputGroupText>
                </InputGroupAddon>
                <Input type='password' name='password' id='IconsPassword' placeholder='Password' />
              </InputGroup>
            </Col>
            <Col sm='12'>
              <FormGroup>
                <CustomInput type='checkbox' id='remember-me-vert-icons' label='Remember Me' defaultChecked={false} />
              </FormGroup>
            </Col>
            <Col sm='12'>
              <FormGroup className='d-flex mb-0'>
                <Button.Ripple className='mr-1' color='primary' type='submit' onClick={e => e.preventDefault()}>
                  Submit
                </Button.Ripple>
                <Button.Ripple outline color='secondary' type='reset'>
                  Reset
                </Button.Ripple>
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </CardBody>
    </Card>
  )
}
export default VerticalFormIcons
