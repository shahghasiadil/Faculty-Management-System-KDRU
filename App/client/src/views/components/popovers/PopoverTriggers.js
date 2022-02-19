import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap'

const PopoverTriggers = () => {
  return (
    <div className='demo-inline-spacing'>
      <Button.Ripple color='primary' outline id='popFocus'>
        Focus
      </Button.Ripple>
      <UncontrolledPopover trigger='focus' placement='top' target='popFocus'>
        <PopoverHeader>Focus Trigger</PopoverHeader>
        <PopoverBody>
          Focusing on the trigging element makes this popover appear. Blurring (clicking away) makes it disappear. You
          cannot select this text as the popover will disappear when you try.
        </PopoverBody>
      </UncontrolledPopover>

      <Button.Ripple color='primary' outline id='popClick'>
        Click
      </Button.Ripple>
      <UncontrolledPopover trigger='click' placement='top' target='popClick'>
        <PopoverHeader>Click Trigger</PopoverHeader>
        <PopoverBody>
          Clicking on the triggering element makes this popover appear. Clicking on it again will make it disappear. You
          can select this text, but clicking away (somewhere other than the triggering element) will not dismiss this
          popover.
        </PopoverBody>
      </UncontrolledPopover>

      <Button.Ripple trigger='legacy' color='primary' outline id='popLegacy'>
        Legacy
      </Button.Ripple>
      <UncontrolledPopover placement='top' target='popLegacy'>
        <PopoverHeader>Legacy Trigger</PopoverHeader>
        <PopoverBody>
          Legacy is a reactstrap special trigger value (outside of bootstrap's spec/standard). Before reactstrap
          correctly supported click and focus, it had a hybrid which was very useful and has been brought back as
          trigger="legacy". One advantage of the legacy trigger is that it allows the popover text to be selected while
          also closing when clicking outside the triggering element and popover itself.
        </PopoverBody>
      </UncontrolledPopover>
    </div>
  )
}
export default PopoverTriggers
