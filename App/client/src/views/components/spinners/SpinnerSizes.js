import { Spinner } from 'reactstrap'

const SpinnerSizes = () => {
  return (
    <div className='demo-inline-spacing'>
      <div>
        <Spinner className='mr-25' size='sm' />
        <Spinner type='grow' size='sm' />
      </div>
      <div>
        <Spinner className='mr-25' />
        <Spinner type='grow' />
      </div>
      <div>
        <Spinner className='mr-25' style={{ height: '3rem', width: '3rem' }} />
        <Spinner type='grow' style={{ height: '3rem', width: '3rem' }} />
      </div>
    </div>
  )
}
export default SpinnerSizes
