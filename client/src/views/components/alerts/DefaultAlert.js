import { Alert } from 'reactstrap'

const DefaultAlert = () => {
  return (
    <div className='demo-spacing-0'>
      <Alert color='primary'>
        <div className='alert-body'>
          <span className='font-weight-bold'>Good Morning!</span>
          <span> Start your day with some alerts.</span>
        </div>
      </Alert>
    </div>
  )
}
export default DefaultAlert
