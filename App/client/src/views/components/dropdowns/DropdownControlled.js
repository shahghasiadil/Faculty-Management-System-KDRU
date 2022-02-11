import { useState } from 'react'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

const DropdownControlled = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
  }

  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
      <DropdownToggle color='primary' caret>
        Controlled
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
    </ButtonDropdown>
  )
}
export default DropdownControlled
