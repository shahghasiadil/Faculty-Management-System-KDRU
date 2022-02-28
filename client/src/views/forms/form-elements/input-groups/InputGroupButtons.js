import { Button, InputGroup, InputGroupAddon, Input, Row, Col } from 'reactstrap'
import { Search } from 'react-feather'

const InputGroupButtons = () => {
  return (
    <Row>
      <Col className='mb-1' md='6' sm='12'>
        <InputGroup>
          <Input placeholder='Button on right side' />
          <InputGroupAddon addonType='append'>
            <Button color='primary' outline>
              Go
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </Col>
      <Col className='mb-1' md='6' sm='12'>
        <InputGroup>
          <InputGroupAddon addonType='prepend'>
            <Button color='primary' outline>
              <Search size={12} />
            </Button>
          </InputGroupAddon>
          <Input type='text' placeholder='Button on both sides' />
          <InputGroupAddon addonType='append'>
            <Button color='primary' outline>
              Search !
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </Col>
    </Row>
  )
}

export default InputGroupButtons
