import { Nav, NavItem, NavLink } from 'reactstrap'

const NavBorder = () => {
  return (
    <Nav className='wrap-border'>
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
export default NavBorder
