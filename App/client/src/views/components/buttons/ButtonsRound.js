import { Button } from 'reactstrap'

const RoundButtons = () => {
  return (
    <div className='demo-inline-spacing'>
      <Button.Ripple className='round' color='primary' outline>
        Primary
      </Button.Ripple>
      <Button.Ripple className='round' color='secondary' outline>
        Secondary
      </Button.Ripple>
      <Button.Ripple className='round' color='success' outline>
        Success
      </Button.Ripple>
      <Button.Ripple className='round' color='danger' outline>
        Danger
      </Button.Ripple>
      <Button.Ripple className='round' color='warning' outline>
        Warning
      </Button.Ripple>
      <Button.Ripple className='round' color='info' outline>
        Info
      </Button.Ripple>
      <Button.Ripple className='round' color='dark' outline>
        Dark
      </Button.Ripple>
    </div>
  )
}
export default RoundButtons
