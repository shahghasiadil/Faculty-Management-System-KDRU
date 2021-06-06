import { Fragment, useState } from 'react'
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap'

const PopoverControlled = () => {
  const [popoverOpen, setPopoverOpen] = useState(false)

  return (
    <Fragment>
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
          Macaroon chocolate candy. I love carrot cake gingerbread cake lemon drops. Muffin sugar plum marzipan pie.
        </PopoverBody>
      </Popover>
    </Fragment>
  )
}
export default PopoverControlled
