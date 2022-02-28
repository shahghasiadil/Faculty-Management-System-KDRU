import { Button, UncontrolledTooltip } from 'reactstrap'

const TooltipPosition = () => {
  return (
    <div className='demo-inline-spacing'>
      <Button.Ripple color='primary' outline id='positionTop'>
        Top
      </Button.Ripple>
      <UncontrolledTooltip placement='top' target='positionTop'>
        Tooltip on Top
      </UncontrolledTooltip>

      <Button.Ripple color='primary' outline id='positionRight'>
        Right
      </Button.Ripple>
      <UncontrolledTooltip placement='right' target='positionRight'>
        Tooltip on Right
      </UncontrolledTooltip>

      <Button.Ripple color='primary' outline id='positionBottom'>
        Bottom
      </Button.Ripple>
      <UncontrolledTooltip placement='bottom' target='positionBottom'>
        Tooltip on Bottom
      </UncontrolledTooltip>

      <Button.Ripple color='primary' outline id='positionLeft'>
        Left
      </Button.Ripple>
      <UncontrolledTooltip placement='left' target='positionLeft'>
        Tooltip on Left
      </UncontrolledTooltip>
    </div>
  )
}
export default TooltipPosition
