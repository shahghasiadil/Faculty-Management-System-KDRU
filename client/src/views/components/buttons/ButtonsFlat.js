import { Button } from 'reactstrap'

const FlatButtons = () => {
  return (
    <div className='demo-inline-spacing'>
      <Button.Ripple color='flat-primary'>Primary</Button.Ripple>
      <Button.Ripple color='flat-secondary'>Secondary</Button.Ripple>
      <Button.Ripple color='flat-success'>Success</Button.Ripple>
      <Button.Ripple color='flat-danger'>Danger</Button.Ripple>
      <Button.Ripple color='flat-warning'>Warning</Button.Ripple>
      <Button.Ripple color='flat-info'>Info</Button.Ripple>
      <Button.Ripple color='flat-dark'>Dark</Button.Ripple>
    </div>
  )
}
export default FlatButtons
