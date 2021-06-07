import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap'

const PopoverPositions = () => {
  return (
    <div className='demo-inline-spacing'>
      <Button.Ripple color='primary' outline id='popTop'>
        Top
      </Button.Ripple>
      <UncontrolledPopover placement='top' target='popTop'>
        <PopoverHeader>Popover Top</PopoverHeader>
        <PopoverBody>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, cumque.</PopoverBody>
      </UncontrolledPopover>

      <Button.Ripple color='primary' outline id='popRight'>
        Right
      </Button.Ripple>
      <UncontrolledPopover placement='right' target='popRight'>
        <PopoverHeader>Popover Right</PopoverHeader>
        <PopoverBody>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, cumque.</PopoverBody>
      </UncontrolledPopover>

      <Button.Ripple color='primary' outline id='popBottom'>
        Bottom
      </Button.Ripple>
      <UncontrolledPopover placement='bottom' target='popBottom'>
        <PopoverHeader>Popover Bottom</PopoverHeader>
        <PopoverBody>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, cumque.</PopoverBody>
      </UncontrolledPopover>

      <Button.Ripple color='primary' outline id='popLeft'>
        Left
      </Button.Ripple>
      <UncontrolledPopover placement='left' target='popLeft'>
        <PopoverHeader>Popover Left</PopoverHeader>
        <PopoverBody>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, cumque.</PopoverBody>
      </UncontrolledPopover>
    </div>
  )
}

export default PopoverPositions
