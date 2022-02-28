import { Button } from 'reactstrap'

const FilledButtons = () => {
  return (
    <div className='demo-inline-spacing'>
      <Button.Ripple color='primary'>Primary</Button.Ripple>
      <Button.Ripple color='secondary'>Secondary</Button.Ripple>
      <Button.Ripple color='success'>Success</Button.Ripple>
      <Button.Ripple color='danger'>Danger</Button.Ripple>
      <Button.Ripple color='warning'>Warning</Button.Ripple>
      <Button.Ripple color='info'>Info</Button.Ripple>
      <Button.Ripple color='dark'>Dark</Button.Ripple>
    </div>
  )
}
export default FilledButtons
