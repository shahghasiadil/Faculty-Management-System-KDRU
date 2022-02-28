import { useState } from 'react'
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  CustomInput,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  ButtonDropdown,
  UncontrolledButtonDropdown
} from 'reactstrap'
import { Wifi, WifiOff, PhoneOff, BellOff, Bell, VolumeX, Volume2 } from 'react-feather'

const icons = [
  {
    id: 1,
    item: <WifiOff size={15} />
  },
  {
    id: 2,
    item: <VolumeX size={15} />
  },
  {
    id: 3,
    item: <Volume2 size={15} />
  },
  {
    id: 4,
    item: <Bell size={15} />
  },
  {
    id: 5,
    item: <BellOff size={15} />
  },
  {
    id: 6,
    item: <PhoneOff size={15} />
  }
]

const DropdownVariations = () => {
  const [formDropdown, setFormDropdown] = useState(false)
  const [activeIcon, setActiveIcon] = useState(<Wifi size={15} />)

  const toggleIcon = icon => setActiveIcon(icon)
  const toggleFormDropdown = () => setFormDropdown(!formDropdown)

  const renderIconItem = icons.map(icon => {
    return (
      <DropdownItem tag='span' key={icon.id} onClick={() => toggleIcon(icon.item)}>
        {icon.item}
      </DropdownItem>
    )
  })
  return (
    <div className='demo-inline-spacing'>
      <UncontrolledButtonDropdown direction='up'>
        <DropdownToggle color='primary' caret>
          Group
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem href='/' tag='a' header>
            Group 1
          </DropdownItem>
          <DropdownItem href='/' tag='a'>
            Option 1
          </DropdownItem>
          <DropdownItem href='/' tag='a'>
            Option 2
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem href='/' tag='a' header>
            Group 2
          </DropdownItem>
          <DropdownItem href='/' tag='a'>
            Option 1
          </DropdownItem>
          <DropdownItem href='/' tag='a'>
            Option 2
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem href='/' tag='a' header>
            Group 3
          </DropdownItem>
          <DropdownItem href='/' tag='a'>
            Option 1
          </DropdownItem>
          <DropdownItem href='/' tag='a'>
            Option 2
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledButtonDropdown>
      <UncontrolledButtonDropdown className='dropdown-icon-wrapper' direction='up'>
        <Button color='primary'>Icons</Button>
        <DropdownToggle className='dropdown-toggle-split' color='primary' caret>
          {activeIcon}
        </DropdownToggle>
        <DropdownMenu tag='div' right>
          {renderIconItem}
        </DropdownMenu>
      </UncontrolledButtonDropdown>

      <ButtonDropdown isOpen={formDropdown} toggle={toggleFormDropdown} direction='up'>
        <DropdownToggle color='primary' caret>
          Form
        </DropdownToggle>
        <DropdownMenu>
          <Form
            className='px-2 py-2'
            onSubmit={e => {
              e.preventDefault()
              setFormDropdown(false)
            }}
          >
            <FormGroup>
              <Label for='ddEmail'>Email</Label>
              <Input type='email' placeholder='Email' name='ddemail' id='ddEmail' />
            </FormGroup>
            <FormGroup>
              <Label for='ddPassword'>Password</Label>
              <Input type='password' placeholder='Password' name='ddPassword' id='ddPassword' />
            </FormGroup>
            <FormGroup>
              <CustomInput type='checkbox' name='ddCheck' id='ddCheck' label='Remember Me' />
            </FormGroup>
            <Button color='primary' type='submit'>
              Submit
            </Button>
          </Form>
          <DropdownItem divider />
          <DropdownItem
            href='/'
            tag='a'
            href='#'
            onClick={e => {
              e.preventDefault()
              setFormDropdown(false)
            }}
          >
            New around here? Sign up
          </DropdownItem>
          <DropdownItem
            href='/'
            tag='a'
            href='#'
            onClick={e => {
              e.preventDefault()
              setFormDropdown(false)
            }}
          >
            Forgot password?
          </DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    </div>
  )
}

export default DropdownVariations
