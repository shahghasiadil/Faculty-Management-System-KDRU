import { Badge } from 'reactstrap'

const BadgeGlow = () => {
  return (
    <div className='demo-inline-spacing'>
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
    </div>
  )
}
export default BadgeGlow
