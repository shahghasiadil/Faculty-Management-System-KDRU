// ** Third Party Components
import {
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  Button,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from 'reactstrap'
import { Twitter, Facebook, Instagram, GitHub, Codepen, Slack } from 'react-feather'

const UserSocialTab = () => {
  return (
    <Form onSubmit={e => e.preventDefault()}>
      <Row>
        <Col lg='4' md='6' sm='12'>
          <Label for='twitter'>Twitter</Label>
          <FormGroup tag={InputGroup} className='input-group-merge'>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Twitter size={17} />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              id='twitter'
              placeholder='https://www.twitter.com/'
              defaultValue='https://www.twitter.com/adoptionism744'
            />
          </FormGroup>
        </Col>
        <Col lg='4' md='6' sm='12'>
          <Label for='facebook'>Facebook</Label>
          <FormGroup tag={InputGroup} className='input-group-merge'>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Facebook size={17} />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              id='facebook'
              placeholder='https://www.facebook.com/'
              defaultValue='https://www.facebook.com/adoptionism664'
            />
          </FormGroup>
        </Col>
        <Col lg='4' md='6' sm='12'>
          <Label for='instagram'>Instagram</Label>
          <FormGroup tag={InputGroup} className='input-group-merge'>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Instagram size={17} />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              id='instagram'
              placeholder='https://www.instagram.com/'
              defaultValue='https://www.instagram.com/adopt-ionism744'
            />
          </FormGroup>
        </Col>

        <Col lg='4' md='6' sm='12'>
          <Label for='github'>Github</Label>
          <FormGroup tag={InputGroup} className='input-group-merge'>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <GitHub size={17} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='github' placeholder='https://www.github.com/' defaultValue='https://www.github.com/madop818' />
          </FormGroup>
        </Col>

        <Col lg='4' md='6' sm='12'>
          <Label for='codepen'>Codepen</Label>
          <FormGroup tag={InputGroup} className='input-group-merge'>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Codepen size={17} />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              id='codepen'
              placeholder='https://www.codepen.com/'
              defaultValue='https://www.codepen.com/adoptism243/'
            />
          </FormGroup>
        </Col>

        <Col lg='4' md='6' sm='12'>
          <Label for='slack'>Slack</Label>
          <FormGroup tag={InputGroup} className='input-group-merge'>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Slack size={17} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='slack' placeholder='https://www.slack.com/' defaultValue='@adoptionism744' />
          </FormGroup>
        </Col>

        <Col className='d-flex flex-sm-row flex-column mt-2' sm='12'>
          <Button className='mb-1 mb-sm-0 mr-0 mr-sm-1' color='primary'>
            Save Changes
          </Button>
          <Button color='secondary' outline>
            Reset
          </Button>
        </Col>
      </Row>
    </Form>
  )
}
export default UserSocialTab
