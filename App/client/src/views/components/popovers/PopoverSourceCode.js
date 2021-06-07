export const popoverControlled = (
  <pre>
    <code className='language-jsx'>
      {`
import React, { useState } from 'react'
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap'

const PopoverControlled = () => {
  const [popoverOpen, setPopoverOpen] = useState(false)

  return (
    <React.Fragment>
      <Button.Ripple color='primary' outline id='controlledPopover'>
        Controlled
      </Button.Ripple>
      <Popover
        placement='top'
        target='controlledPopover'
        isOpen={popoverOpen}
        toggle={() => setPopoverOpen(!popoverOpen)}
      >
        <PopoverHeader>Controlled Popover</PopoverHeader>
        <PopoverBody>
          Macaroon chocolate candy. I love carrot cake gingerbread cake lemon
          drops. Muffin sugar plum marzipan pie.
        </PopoverBody>
      </Popover>
    </React.Fragment>
  )
}
export default PopoverControlled
`}
    </code>
  </pre>
)

export const popoverUncontrolled = (
  <pre>
    <code className='language-jsx'>
      {`

import {
  Button,
  UncontrolledPopover,
  PopoverHeader,
  PopoverBody
} from 'reactstrap'

const PopoverUncontrolled = () => {
  return (
    <React.Fragment>
      <Button color='primary' outline id='uncontrolledPopover'>
        Uncontrolled
      </Button>
      <UncontrolledPopover placement='top' target='uncontrolledPopover'>
        <PopoverHeader>Uncontrolled Popover</PopoverHeader>
        <PopoverBody>
          Macaroon chocolate candy. I love carrot cake gingerbread cake lemon
          drops. Muffin sugar plum marzipan pie.
        </PopoverBody>
      </UncontrolledPopover>
    </React.Fragment>
  )
}
export default PopoverUncontrolled
`}
    </code>
  </pre>
)

export const popoverPositions = (
  <pre>
    <code className='language-jsx'>
      {`

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
`}
    </code>
  </pre>
)

export const popoverTriggers = (
  <pre>
    <code className='language-jsx'>
      {`

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
`}
    </code>
  </pre>
)
