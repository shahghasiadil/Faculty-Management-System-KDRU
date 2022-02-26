import { Alert } from 'reactstrap'

const AlertTitle = () => {
  return (
    <div className='demo-spacing-0'>
      <Alert color='warning'>
        <h4 className='alert-heading'>Lorem ipsum dolor sit amet</h4>
        <div className='alert-body'>
          Lorem ipsum dolor sit amet{' '}
          <a className='alert-link' href='/' onClick={e => e.preventDefault()}>
            consectetur
          </a>{' '}
          adipisicing elit. Ducimus, laborum!.
        </div>
      </Alert>
    </div>
  )
}
export default AlertTitle
