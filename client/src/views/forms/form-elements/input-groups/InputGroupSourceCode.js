export const inputGroupBasic = (
  <pre>
    <code className='language-jsx'>
      {`

import { Search } from 'react-feather'
import InputPasswordToggle from '@components/input-password-toggle'
import { InputGroup, InputGroupAddon, Input, InputGroupText } from 'reactstrap'

const InputGroupBasic = () => {
  return (
    <React.Fragment>
      <InputGroup className='mb-2'>
        <InputGroupAddon addonType='prepend'>
          <InputGroupText>
            <Search size={14} />
          </InputGroupText>
        </InputGroupAddon>
        <Input placeholder='search...' />
      </InputGroup>
      <InputPasswordToggle className='mb-2' label='Password' htmlFor='basic-default-password' />
      <InputGroup className='mb-2'>
        <InputGroupAddon addonType='prepend'>
          <InputGroupText>@</InputGroupText>
        </InputGroupAddon>
        <Input placeholder='Username' />
      </InputGroup>
      <InputGroup className='mb-2'>
        <Input placeholder="Recipient's username" />
        <InputGroupAddon addonType='append'>
          <InputGroupText>@example.com</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup className='mb-2'>
        <InputGroupAddon addonType='prepend'>
          <InputGroupText>https://example.com/users/</InputGroupText>
        </InputGroupAddon>
        <Input />
      </InputGroup>
      <InputGroup className='mb-2'>
        <InputGroupAddon addonType='prepend'>
          <InputGroupText>$</InputGroupText>
        </InputGroupAddon>
        <Input placeholder='100' />
      </InputGroup>
      <InputGroup>
        <InputGroupAddon addonType='prepend'>
          <InputGroupText>With textarea</InputGroupText>
        </InputGroupAddon>
        <Input type='textarea' />
      </InputGroup>
    </React.Fragment>
  )
}

export default InputGroupBasic
  `}
    </code>
  </pre>
)

export const inputGroupMerged = (
  <pre>
    <code className='language-jsx'>
      {`

import { Search } from 'react-feather'
import InputPasswordToggle from '@components/input-password-toggle'
import { InputGroup, InputGroupAddon, Input, InputGroupText } from 'reactstrap'

const InputGroupMerged = () => {
  return (
    <React.Fragment>
      <InputGroup className='input-group-merge mb-2'>
        <InputGroupAddon addonType='prepend'>
          <InputGroupText>
            <Search size={14} />
          </InputGroupText>
        </InputGroupAddon>
        <Input placeholder='search...' />
      </InputGroup>
      <InputPasswordToggle className='input-group-merge mb-2' label='Password' htmlFor='basic-default-password' />
      <InputGroup className='input-group-merge mb-2'>
        <InputGroupAddon addonType='prepend'>
          <InputGroupText>@</InputGroupText>
        </InputGroupAddon>
        <Input placeholder='Username' />
      </InputGroup>
      <InputGroup className='input-group-merge mb-2'>
        <Input placeholder="Recipient's username" />
        <InputGroupAddon addonType='append'>
          <InputGroupText>@example.com</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup className='input-group-merge mb-2'>
        <InputGroupAddon addonType='prepend'>
          <InputGroupText>https://example.com/users/</InputGroupText>
        </InputGroupAddon>
        <Input />
      </InputGroup>
      <InputGroup className='input-group-merge mb-2'>
        <InputGroupAddon addonType='prepend'>
          <InputGroupText>$</InputGroupText>
        </InputGroupAddon>
        <Input placeholder='100' />
      </InputGroup>
      <InputGroup className='input-group-merg'>
        <InputGroupAddon addonType='prepend'>
          <InputGroupText>With textarea</InputGroupText>
        </InputGroupAddon>
        <Input type='textarea' />
      </InputGroup>
    </React.Fragment>
  )
}

export default InputGroupMerged
  `}
    </code>
  </pre>
)

export const inputGroupCBRadio = (
  <pre>
    <code className='language-jsx'>
      {`

import { InputGroup, InputGroupAddon, Input, InputGroupText, Row, Col, CustomInput } from 'reactstrap'

const InputGroupCbAndRadio = () => {
  return (
    <Row>
      <Col md='6' sm='12'>
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
      <Col md='6' sm='12'>
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
  `}
    </code>
  </pre>
)

export const inputGroupButtons = (
  <pre>
    <code className='language-jsx'>
      {`

import { Button, InputGroup, InputGroupAddon, Input, FormGroup, Row, Col } from 'reactstrap'
import { Search } from 'react-feather'

const InputGroupButtons = () => {
  return (
    <Row>
      <Col className='mb-1' lg='6' md='12'>
        <InputGroup>
          <Input />
          <InputGroupAddon addonType='append'>
            <Button color='primary' outline>
              Go
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </Col>
      <Col className='mb-1' lg='6' md='12'>
        <InputGroup>
          <InputGroupAddon addonType='prepend'>
            <Button color='primary' outline>
              <Search size={12} />
            </Button>
          </InputGroupAddon>
          <Input type='text' />
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
  `}
    </code>
  </pre>
)

export const inputGroupDropdowns = (
  <pre>
    <code className='language-jsx'>
      {`
import React, { useState } from 'react'
import {
  InputGroup,
  Input,
  Row,
  Col,
  InputGroupButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  FormGroup
} from 'reactstrap'
import { Edit } from 'react-feather'

const InputGroupDropdowns = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [dropdownIcon, setDropdownIcon] = useState(false)
  const [dropdownRight, setDropdownRight] = useState(false)

  const toggleDropDown = () => {
    setDropdownOpen(!dropdownOpen)
  }
  const toggleDropdownIcon = () => {
    setDropdownIcon(!dropdownIcon)
  }
  const toggleDropDownRight = () => {
    setDropdownRight(!dropdownRight)
  }

  return (
    <Row>
      <Col lg='6' md='12'>
        <FormGroup>
          <InputGroup>
            <InputGroupButtonDropdown addonType='prepend' isOpen={dropdownOpen} toggle={toggleDropDown}>
              <DropdownToggle color='primary' caret outline>
                Action
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Action 1</DropdownItem>
                <DropdownItem disabled>Action</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Another Action</DropdownItem>
              </DropdownMenu>
            </InputGroupButtonDropdown>
            <Input />
          </InputGroup>
        </FormGroup>
      </Col>
      <Col lg='6' md='12'>
        <FormGroup>
          <InputGroup>
            <InputGroupButtonDropdown addonType='prepend' isOpen={dropdownIcon} toggle={toggleDropdownIcon}>
              <DropdownToggle color='primary' caret outline>
                <Edit size={12} />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Action 1</DropdownItem>
                <DropdownItem disabled>Action</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Another Action</DropdownItem>
              </DropdownMenu>
            </InputGroupButtonDropdown>
            <Input />
            <InputGroupButtonDropdown addonType='append' isOpen={dropdownRight} toggle={toggleDropDownRight}>
              <DropdownToggle color='primary' outline caret>
                Action
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Action 1</DropdownItem>
                <DropdownItem disabled>Action</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Another Action</DropdownItem>
              </DropdownMenu>
            </InputGroupButtonDropdown>
          </InputGroup>
        </FormGroup>
      </Col>
    </Row>
  )
}

export default InputGroupDropdowns
  `}
    </code>
  </pre>
)

export const inputGroupSizes = (
  <pre>
    <code className='language-jsx'>
      {`

import { InputGroup, InputGroupAddon, Input } from 'reactstrap'

const InputGroupSizes = () => {
  return (
    <React.Fragment>
      <InputGroup className='mb-1' size='lg'>
        <InputGroupAddon addonType='prepend'>@</InputGroupAddon>
        <Input placeholder='username' />
      </InputGroup>

      <InputGroup className='mb-1'>
        <InputGroupAddon addonType='prepend'>@</InputGroupAddon>
        <Input placeholder='username' />
      </InputGroup>

      <InputGroup size='sm'>
        <InputGroupAddon addonType='prepend'>@</InputGroupAddon>
        <Input placeholder='username' />
      </InputGroup>
    </React.Fragment>
  )
}

export default InputGroupSizes
  `}
    </code>
  </pre>
)
