import { Badge } from 'reactstrap'

const BadgePillContextual = () => {
  return (
    <div className='demo-inline-spacing'>
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
    </div>
  )
}
export default BadgePillContextual
