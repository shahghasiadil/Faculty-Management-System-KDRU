import { Button } from 'reactstrap'

const OutlineButtons = () => {
  return (
    <div className='demo-inline-spacing'>
      <Button.Ripple color='primary' outline>
        Primary
      </Button.Ripple>
      <Button.Ripple color='secondary' outline>
        Secondary
      </Button.Ripple>
      <Button.Ripple color='success' outline>
        Success
      </Button.Ripple>
      <Button.Ripple color='danger' outline>
        Danger
      </Button.Ripple>
      <Button.Ripple color='warning' outline>
        Warning
      </Button.Ripple>
      <Button.Ripple color='info' outline>
        Info
      </Button.Ripple>
      <Button.Ripple color='dark' outline>
        Dark
      </Button.Ripple>
    </div>
  )
}
export default OutlineButtons
