import { Badge } from 'reactstrap'

const BadgePillGlow = () => {
  return (
    <div className='demo-inline-spacing'>
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
      <Badge color='dark' pill className='badge-glow'>
        Dark
      </Badge>
    </div>
  )
}
export default BadgePillGlow
