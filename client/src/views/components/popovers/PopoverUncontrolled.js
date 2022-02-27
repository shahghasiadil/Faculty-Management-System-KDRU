import { Fragment } from 'react'
import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap'

const PopoverUncontrolled = () => {
  return (
    <Fragment>
      <Button color='primary' outline id='uncontrolledPopover'>
        Uncontrolled
      </Button>
      <UncontrolledPopover placement='top' target='uncontrolledPopover'>
        <PopoverHeader>Uncontrolled Popover</PopoverHeader>
        <PopoverBody>
          Macaroon chocolate candy. I love carrot cake gingerbread cake lemon drops. Muffin sugar plum marzipan pie.
        </PopoverBody>
      </UncontrolledPopover>
    </Fragment>
  )
}
export default PopoverUncontrolled
