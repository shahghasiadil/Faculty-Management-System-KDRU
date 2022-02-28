import { Fragment } from 'react'
import { Button, UncontrolledTooltip } from 'reactstrap'

const TooltipUncontrolled = () => {
  return (
    <Fragment>
      <Button color='primary' id='UnControlledExample'>
        Uncontrolled
      </Button>
      <UncontrolledTooltip placement='top' target='UnControlledExample'>
        Hello World !
      </UncontrolledTooltip>
    </Fragment>
  )
}
export default TooltipUncontrolled
