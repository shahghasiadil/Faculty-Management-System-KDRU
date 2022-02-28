import { Fragment } from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'

const PillThemes = () => {
  return (
    <Fragment>
      <h6>Secondary</h6>
      <Nav pills className='nav-pill-secondary my-2'>
        <NavItem>
          <NavLink active>Active</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled>Disabled</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Link</NavLink>
        </NavItem>
      </Nav>

      <h6>Success</h6>
      <Nav pills className='nav-pill-success my-2'>
        <NavItem>
          <NavLink active>Active</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled>Disabled</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Link</NavLink>
        </NavItem>
      </Nav>

      <h6>Danger</h6>

      <Nav pills className='nav-pill-danger my-2'>
        <NavItem>
          <NavLink active>Active</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled>Disabled</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Link</NavLink>
        </NavItem>
      </Nav>

      <h6>Warning</h6>

      <Nav pills className='nav-pill-warning my-2'>
        <NavItem>
          <NavLink active>Active</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled>Disabled</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Link</NavLink>
        </NavItem>
      </Nav>

      <h6>Info</h6>

      <Nav pills className='nav-pill-info my-2'>
        <NavItem>
          <NavLink active>Active</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled>Disabled</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Link</NavLink>
        </NavItem>
      </Nav>
    </Fragment>
  )
}
export default PillThemes
