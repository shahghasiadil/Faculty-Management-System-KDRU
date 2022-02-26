export const badgePillLight = (
  <pre>
    <code className='language-jsx'>
      {`

import { Badge } from 'reactstrap'

const BadgePillLight = () => {
  return (
    <React.Fragment>
      <Badge color='light-primary' pill>
        Primary
      </Badge>
      <Badge color='light-secondary' pill>
        Secondary
      </Badge>
      <Badge color='light-success' pill>
        Success
      </Badge>
      <Badge color='light-danger' pill>
      Danger
      </Badge>
      <Badge color='light-warning' pill>
        Warning
      </Badge>
      <Badge color='light-info' pill>
        Info
      </Badge>
    </React.Fragment>
  )
}
export default BadgePillLight
`}
    </code>
  </pre>
)

export const badgePillGlow = (
  <pre>
    <code className='language-jsx'>
      {`

import { Badge } from 'reactstrap'

const BadgePillGlow = () => {
  return (
    <React.Fragment>
      <Badge color='primary' pill className='badge-glow'>
        Primary
      </Badge>
      <Badge color='secondary' pill className='badge-glow'>
        Secondary
      </Badge>
      <Badge color='success' pill className='badge-glow'>
        Success
      </Badge>
      <Badge color='danger' pill className='badge-glow'>
        Danger
      </Badge>
      <Badge color='warning' pill className='badge-glow'>
        Warning
      </Badge>
      <Badge color='info' pill className='badge-glow'>
        Info
      </Badge>
      <Badge color='dark' pill className='badge-glow mb-1'>
        Dark
      </Badge>
    </React.Fragment>
  )
}
export default BadgePillGlow
`}
    </code>
  </pre>
)

export const badgePillContextual = (
  <pre>
    <code className='language-jsx'>
      {`

import { Badge } from 'reactstrap'

const BadgePillContextual = () => {
  return (
    <React.Fragment>
      <Badge color='primary' pill>
        Primary
      </Badge>
      <Badge color='secondary' pill>
        Secondary
      </Badge>
      <Badge color='success' pill>
        Success
      </Badge>
      <Badge color='danger' pill>
        Danger
      </Badge>
      <Badge color='warning' pill>
        Warning
      </Badge>
      <Badge color='info' pill>
        Info
      </Badge>
      <Badge color='dark' pill>
        Dark
      </Badge>
    </React.Fragment>
  )
}
export default BadgePillContextual
`}
    </code>
  </pre>
)

export const badgePillNotification = (
  <pre>
    <code className='language-jsx'>
      {`

import { Badge } from 'reactstrap'
import { Bell } from 'react-feather'

const BadgePillNotification = () => {
  return (
    <div className='demo-inline-spacing'>
      <div className='position-relative'>
        <Badge pill color='primary' className='badge-up'>
          4
        </Badge>
        <Bell className='text-primary' size={22} />
      </div>
      <div className='position-relative'>
        <Badge pill color='danger' className='badge-up'>
          5
        </Badge>
        <Bell className='text-danger' size={22} />
      </div>
      <div className='position-relative'>
        <Badge pill color='info' className='badge-up'>
          6
        </Badge>
        <Bell className='text-info' size={22} />
      </div>
    </div>
  )
}
export default BadgePillNotification

`}
    </code>
  </pre>
)

export const badgePillLink = (
  <pre>
    <code className='language-jsx'>
      {`

import { Badge } from 'reactstrap'
import { Link } from 'react-feather'

const BadgePillLink = () => {
  return (
    <Badge color='primary' pill href='#'>
      <Link size={12} />
      <span className='align-middle ml-50'>Link Badge Pill</span>
    </Badge>
  )
}
export default BadgePillLink
`}
    </code>
  </pre>
)

export const badgePillBlock = (
  <pre>
    <code className='language-jsx'>
      {`

import { Badge } from 'reactstrap'

const BadgePillBlock = () => {
  return (
    <Badge pill color='primary' className='d-block'>
      <span>Block Badge Pill</span>
    </Badge>
  )
}
export default BadgePillBlock
`}
    </code>
  </pre>
)
