import { Badge } from 'reactstrap'

const BadgePillLight = () => {
  return (
    <div className='demo-inline-spacing'>
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
    </div>
  )
}
export default BadgePillLight
