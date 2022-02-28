import { Alert } from 'reactstrap'
import { Star } from 'react-feather'

const AlertIcon = () => {
  return (
    <div className='demo-spacing-0'>
      <Alert color='primary'>
        <div className='alert-body'>
          <Star size={15} />
          <span className='ml-1'>
            Chupa chups topping bonbon. Jelly-o toffee I love. Sweet I love wafer I love wafer.
          </span>
        </div>
      </Alert>
    </div>
  )
}
export default AlertIcon
