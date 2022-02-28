import { Button } from 'reactstrap'
import { Home, Star, Check } from 'react-feather'

const ButtonsIcon = () => {
  return (
    <div className='demo-inline-spacing'>
      <Button.Ripple outline color='primary'>
        <Home size={14} />
        <span className='align-middle ml-25'>Home</span>
      </Button.Ripple>
      <Button.Ripple color='warning'>
        <Star size={14} />
        <span className='align-middle ml-25'>Star</span>
      </Button.Ripple>
      <Button.Ripple color='flat-success'>
        <Check size={14} />
        <span className='align-middle ml-25'>Done</span>
      </Button.Ripple>
      <Button.Ripple outline color='primary' disabled>
        <Home size={14} />
        <span className='align-middle ml-25'>Home</span>
      </Button.Ripple>
    </div>
  )
}
export default ButtonsIcon
