import { Button, UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'

const DropdownOutline = () => {
  return (
    <div className='demo-inline-spacing'>
      <UncontrolledButtonDropdown>
        <DropdownToggle outline color='primary' caret>
          Primary
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem href='/' tag='a'>
            Option 1
          </DropdownItem>
          <DropdownItem href='/' tag='a'>
            Option 2
          </DropdownItem>
          <DropdownItem href='/' tag='a'>
            Option 3
          </DropdownItem>
          <DropdownItem divider></DropdownItem>
          <DropdownItem href='/' tag='a'>
            Separated Link
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledButtonDropdown>
      <UncontrolledButtonDropdown>
        <Button outline color='secondary'>
          Secondary
        </Button>
        <DropdownToggle outline className='dropdown-toggle-split' color='secondary' caret></DropdownToggle>
        <DropdownMenu right>
          <DropdownItem href='/' tag='a'>
            Option 1
          </DropdownItem>
          <DropdownItem href='/' tag='a'>
            Option 2
          </DropdownItem>
          <DropdownItem href='/' tag='a'>
            Option 3
          </DropdownItem>
          <DropdownItem divider></DropdownItem>
          <DropdownItem href='/' tag='a'>
            Separated Link
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledButtonDropdown>
      <UncontrolledButtonDropdown>
        <DropdownToggle outline color='success' caret>
          Success
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem href='/' tag='a'>
            Option 1
          </DropdownItem>
          <DropdownItem href='/' tag='a'>
            Option 2
          </DropdownItem>
          <DropdownItem href='/' tag='a'>
            Option 3
          </DropdownItem>
          <DropdownItem divider></DropdownItem>
          <DropdownItem href='/' tag='a'>
            Separated Link
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledButtonDropdown>
      <UncontrolledButtonDropdown>
        <DropdownToggle outline color='danger' caret>
          Danger
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem href='/' tag='a'>
            Option 1
          </DropdownItem>
          <DropdownItem href='/' tag='a'>
            Option 2
          </DropdownItem>
          <DropdownItem href='/' tag='a'>
            Option 3
          </DropdownItem>
          <DropdownItem divider></DropdownItem>
          <DropdownItem href='/' tag='a'>
            Separated Link
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledButtonDropdown>
      <UncontrolledButtonDropdown>
        <Button outline color='warning'>
          Warning
        </Button>
        <DropdownToggle outline className='dropdown-toggle-split' color='warning' caret></DropdownToggle>
        <DropdownMenu right>
          <DropdownItem href='/' tag='a'>
            Option 1
          </DropdownItem>
          <DropdownItem href='/' tag='a'>
            Option 2
          </DropdownItem>
          <DropdownItem href='/' tag='a'>
            Option 3
          </DropdownItem>
          <DropdownItem divider></DropdownItem>
          <DropdownItem href='/' tag='a'>
            Separated Link
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledButtonDropdown>
      <UncontrolledButtonDropdown>
        <DropdownToggle outline color='info' caret>
          Info
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem href='/' tag='a'>
            Option 1
          </DropdownItem>
          <DropdownItem href='/' tag='a'>
            Option 2
          </DropdownItem>
          <DropdownItem href='/' tag='a'>
            Option 3
          </DropdownItem>
          <DropdownItem divider></DropdownItem>
          <DropdownItem href='/' tag='a'>
            Separated Link
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledButtonDropdown>
    </div>
  )
}

export default DropdownOutline
