import { Button, Spinner } from 'reactstrap'

const SpinnerButton = () => {
  return (
    <div className='demo-inline-spacing'>
      <Button.Ripple color='primary' outline disabled>
        <Spinner size='sm' />
      </Button.Ripple>

      <Button.Ripple color='primary' outline disabled>
        <Spinner size='sm' />
        <span className='ml-50'>Loading...</span>
      </Button.Ripple>

      <Button.Ripple color='primary' outline disabled>
        <Spinner size='sm' type='grow' />
      </Button.Ripple>

      <Button.Ripple color='primary' outline disabled>
        <Spinner size='sm' type='grow' />
        <span className='ml-50'>Loading...</span>
      </Button.Ripple>
    </div>
  )
}
export default SpinnerButton
