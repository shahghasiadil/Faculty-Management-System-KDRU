import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'

const DropdownUncontrolled = () => {
  return (
    <UncontrolledButtonDropdown>
      <DropdownToggle color='primary' caret>
        Uncontrolled
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem href='/' tag='a'>
          Option 1
        </DropdownItem>
        <DropdownItem href='/' tag='a' disabled>
          Option 2
        </DropdownItem>
        <DropdownItem href='/' tag='a'>
          Option 3
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledButtonDropdown>
  )
}
export default DropdownUncontrolled
