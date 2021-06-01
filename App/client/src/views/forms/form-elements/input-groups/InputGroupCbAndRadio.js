import { InputGroup, InputGroupAddon, Input, InputGroupText, Row, Col, CustomInput } from 'reactstrap'

const InputGroupCbAndRadio = () => {
  return (
    <Row>
      <Col className='mb-md-0 mb-1' md='6' sm='12'>
        <InputGroup>
          <InputGroupAddon addonType='prepend'>
            <InputGroupText>
              <input type='checkbox' />
            </InputGroupText>
          </InputGroupAddon>
          <Input type='text' placeholder='Message' />
        </InputGroup>
      </Col>
      <Col md='6' sm='12'>
        <InputGroup>
          <InputGroupAddon addonType='prepend'>
            <InputGroupText>
              <input type='radio' />
            </InputGroupText>
          </InputGroupAddon>
          <Input type='text' placeholder='Message' />
        </InputGroup>
      </Col>
      <small className='font-weight-semibold w-100 ml-1 my-1'>Custom checkbox and radio</small>
      <Col className='mb-md-0 mb-1' md='6' sm='12'>
        <InputGroup>
          <InputGroupAddon addonType='prepend'>
            <InputGroupText>
              <CustomInput type='checkbox' label='' id='exampleCustomCheckbox' />
            </InputGroupText>
          </InputGroupAddon>
          <Input type='text' placeholder='Message' />
        </InputGroup>
      </Col>
      <Col md='6' sm='12'>
        <InputGroup>
          <InputGroupAddon addonType='prepend'>
            <InputGroupText>
              <CustomInput type='radio' label='' id='exampleCustomRadio' />
            </InputGroupText>
          </InputGroupAddon>
          <Input type='text' placeholder='Message' />
        </InputGroup>
      </Col>
    </Row>
  )
}

export default InputGroupCbAndRadio
