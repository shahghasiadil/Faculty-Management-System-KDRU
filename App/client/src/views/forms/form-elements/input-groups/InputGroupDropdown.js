import { useState } from 'react'
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
      <Col md='6' sm='12'>
        <FormGroup>
          <InputGroup>
            <InputGroupButtonDropdown addonType='prepend' isOpen={dropdownOpen} toggle={toggleDropDown}>
              <DropdownToggle color='primary' caret outline>
                Action
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem className='w-100'>Action 1</DropdownItem>
                <DropdownItem className='w-100' disabled>
                  Action
                </DropdownItem>
                <DropdownItem className='w-100' divider />
                <DropdownItem className='w-100'>Another Action</DropdownItem>
              </DropdownMenu>
            </InputGroupButtonDropdown>
            <Input />
          </InputGroup>
        </FormGroup>
      </Col>
      <Col md='6' sm='12'>
        <FormGroup>
          <InputGroup>
            <InputGroupButtonDropdown addonType='prepend' isOpen={dropdownIcon} toggle={toggleDropdownIcon}>
              <DropdownToggle color='primary' caret outline>
                <Edit size={12} />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem className='w-100'>Action 1</DropdownItem>
                <DropdownItem className='w-100' disabled>
                  Action
                </DropdownItem>
                <DropdownItem className='w-100' divider />
                <DropdownItem className='w-100'>Another Action</DropdownItem>
              </DropdownMenu>
            </InputGroupButtonDropdown>
            <Input />
            <InputGroupButtonDropdown addonType='append' isOpen={dropdownRight} toggle={toggleDropDownRight}>
              <DropdownToggle color='primary' outline caret>
                Action
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem className='w-100'>Action 1</DropdownItem>
                <DropdownItem className='w-100' disabled>
                  Action
                </DropdownItem>
                <DropdownItem className='w-100' divider />
                <DropdownItem className='w-100'>Another Action</DropdownItem>
              </DropdownMenu>
            </InputGroupButtonDropdown>
          </InputGroup>
        </FormGroup>
      </Col>
    </Row>
  )
}

export default InputGroupDropdowns
