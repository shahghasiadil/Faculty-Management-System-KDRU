export const badgeContextual = (
  <pre>
    <code className='language-jsx'>
      {`

import { Badge } from 'reactstrap'

const BadgeContextual = () => {
  return (
    <React.Fragment>
      <Badge color='primary'>
        Primary
      </Badge>
      <Badge color='secondary'>
        Secondary
      </Badge>
      <Badge color='success'>
        Success
      </Badge>
      <Badge color='danger'>
        Danger
      </Badge>
      <Badge color='warning'>
        Warning
      </Badge>
      <Badge color='info'>
        Info
      </Badge>
      <Badge color='dark'>
        Dark
      </Badge>
    </React.Fragment>
  )
}
export default BadgeContextual
`}
    </code>
  </pre>
)

export const badgeGlow = (
  <pre>
    <code className='language-jsx'>
      {`

import { Badge } from 'reactstrap'

const BadgeGlow = () => {
  return (
    <React.Fragment>
      <Badge color='primary' className='badge-glow'>
        Primary
      </Badge>
      <Badge color='secondary' className='badge-glow'>
        Secondary
      </Badge>
      <Badge color='success' className='badge-glow'>
        Success
      </Badge>
      <Badge color='danger' className='badge-glow'>
        Danger
      </Badge>
      <Badge color='warning' className='badge-glow'>
        Warning
      </Badge>
      <Badge color='info' className='badge-glow'>
        Info
      </Badge>
      <Badge color='dark' className='badge-glow'>
        Dark
      </Badge>
    </React.Fragment>
  )
}
export default BadgeGlow
`}
    </code>
  </pre>
)

export const badgeLight = (
  <pre>
    <code className='language-jsx'>
      {`

import { Badge } from 'reactstrap'

const BadgeLight = () => {
  return (
    <React.Fragment>
      <Badge color='light-primary'>
        Primary
      </Badge>
      <Badge color='light-secondary'>
        Secondary
      </Badge>
      <Badge color='light-success'>
        Success
      </Badge>
      <Badge color='light-danger'>
        Danger
      </Badge>
      <Badge color='light-warning'>
        Warning
      </Badge>
      <Badge color='light-info'>
        Info
      </Badge>
      <Badge color='light-dark'>
        Dark
      </Badge>
    </React.Fragment>
  )
}
export default BadgeLight
`}
    </code>
  </pre>
)

export const badgeIcons = (
  <pre>
    <code className='language-jsx'>
      {`

import { Badge } from 'reactstrap'
import { Star } from 'react-feather'

const BadgeIcons = () => {
  return (
    <React.Fragment>
      <Badge color='primary'>
        <Star size={12} className='align-middle' />
        <span className='align-middle ml-25'>Primary</span>
      </Badge>
      <Badge color='secondary'>
        <Star size={12} className='align-middle' />
        <span className='align-middle ml-25'>Secondary</span>
      </Badge>
      <Badge color='success'>
        <Star size={12} className='align-middle' />
        <span className='align-middle ml-25'>Success</span>
      </Badge>
      <Badge color='danger'>
        <Star size={12} className='align-middle' />
        <span className='align-middle ml-25'>Danger</span>
      </Badge>
      <Badge color='warning'>
        <Star size={12} className='align-middle' />
        <span className='align-middle ml-25'>Warning</span>
      </Badge>
      <Badge color='info'>
        <Star size={12} className='align-middle' />
        <span className='align-middle ml-25'>Info</span>
      </Badge>
      <Badge color='dark'>
        <Star size={12} className='align-middle' />
        <span className='align-middle ml-25'>Dark</span>
      </Badge>
    </React.Fragment>
  )
}
export default BadgeIcons
`}
    </code>
  </pre>
)

export const badgeLink = (
  <pre>
    <code className='language-jsx'>
      {`

import { Badge } from 'reactstrap'
import { Link } from 'react-feather'

const BadgeLink = () => {
  return (
    <Badge color='primary' href='#'>
      <Link size={12} />
      <span>Link Badge</span>
    </Badge>
  )
}
export default BadgeLink
`}
    </code>
  </pre>
)

export const badgeBlock = (
  <pre>
    <code className='language-jsx'>
      {`

import { Badge } from 'reactstrap'

const BadgeBlock = () => {
  return (
    <Badge color='primary' className='d-block'>
      <span>Block Badge</span>
    </Badge>
  )
}
export default BadgeBlock
`}
    </code>
  </pre>
)
