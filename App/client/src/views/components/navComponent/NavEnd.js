import { Nav, NavItem, NavLink } from 'reactstrap'

const NavEnd = () => {
  return (
    <Nav className='justify-content-end'>
      <NavItem>
        <NavLink href='#' active>
          Active
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href='#'>Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href='#'>Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink disabled href='#'>
          Disabled
        </NavLink>
      </NavItem>
    </Nav>
  )
}
export default NavEnd
