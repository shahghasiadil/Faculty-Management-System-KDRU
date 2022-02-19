export const navBasic = (
  <pre>
    <code className='language-jsx'>
      {`

import { Nav, NavItem, NavLink } from 'reactstrap'

const NavBasic = () => {
  return (
    <Nav>
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
export default NavBasic
  `}
    </code>
  </pre>
)

export const navBorder = (
  <pre>
    <code className='language-jsx'>
      {`

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
  `}
    </code>
  </pre>
)

export const navCenter = (
  <pre>
    <code className='language-jsx'>
      {`

import { Nav, NavItem, NavLink } from 'reactstrap'

const NavCenter = () => {
  return (
    <Nav className='justify-content-center'>
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
export default NavCenter
  `}
    </code>
  </pre>
)

export const navEnd = (
  <pre>
    <code className='language-jsx'>
      {`

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
  `}
    </code>
  </pre>
)

export const navVertical = (
  <pre>
    <code className='language-jsx'>
      {`

import { Nav, NavItem, NavLink } from 'reactstrap'

const NavVertical = () => {
  return (
    <Nav vertical>
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
export default NavVertical
  `}
    </code>
  </pre>
)

export const navVerticalBorder = (
  <pre>
    <code className='language-jsx'>
      {`

import { Nav, NavItem, NavLink } from 'reactstrap'

const NavVerticalBorder = () => {
  return (
    <Nav vertical className='wrap-border'>
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
export default NavVerticalBorder
  `}
    </code>
  </pre>
)

export const navSquareBorder = (
  <pre>
    <code className='language-jsx'>
      {`

import { Nav, NavItem, NavLink } from 'reactstrap'

const NavSquareBorder = () => {
  return (
    <Nav vertical className='wrap-border square-border'>
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
export default NavSquareBorder
  `}
    </code>
  </pre>
)

export const navDivider = (
  <pre>
    <code className='language-jsx'>
      {`

import { Nav, NavItem, NavLink } from 'reactstrap'

const NavDivider = () => {
  return (
    <Nav vertical className='wrap-border square-border'>
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
      <NavItem className='dropdown-divider'>
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
export default NavDivider
  `}
    </code>
  </pre>
)
