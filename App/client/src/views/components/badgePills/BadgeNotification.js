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
