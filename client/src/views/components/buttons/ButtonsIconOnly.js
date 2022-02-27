import { Button } from 'reactstrap'
import { Search, Inbox, Camera } from 'react-feather'

const ButtonsIconOnly = () => {
  return (
    <div className='demo-inline-spacing'>
      <Button.Ripple className='btn-icon' outline color='primary'>
        <Search size={16} />
      </Button.Ripple>
      <Button.Ripple className='btn-icon' color='warning'>
        <Inbox size={16} />
      </Button.Ripple>
      <Button.Ripple className='btn-icon' color='flat-success'>
        <Camera size={16} />
      </Button.Ripple>
      <Button.Ripple className='btn-icon' outline color='primary' disabled>
        <Search size={16} />
      </Button.Ripple>
      <Button.Ripple className='btn-icon rounded-circle' outline color='primary'>
        <Search size={16} />
      </Button.Ripple>
      <Button.Ripple className='btn-icon rounded-circle' color='warning'>
        <Inbox size={16} />
      </Button.Ripple>
      <Button.Ripple className='btn-icon rounded-circle' color='flat-success'>
        <Camera size={16} />
      </Button.Ripple>
      <Button.Ripple className='btn-icon rounded-circle' outline color='primary' disabled>
        <Search size={16} />
      </Button.Ripple>
    </div>
  )
}
export default ButtonsIconOnly
