export const tooltipControlled = (
  <pre>
    <code className='language-jsx'>
      {`
import React, { useState } from 'react'
import { Button, Tooltip } from 'reactstrap'

const TooltipControlled = () => {
  const [tooltipOpen, setTooltipOpen] = useState(false)

  return (
    <React.Fragment>
      <Button.Ripple color='primary' id='ControlledExample'>
        Controlled
      </Button.Ripple>
      <Tooltip
        placement='top'
        isOpen={tooltipOpen}
        target='ControlledExample'
        toggle={() => setTooltipOpen(!tooltipOpen)}
      >
        Hello World !
      </Tooltip>
    </React.Fragment>
  )
}
export default TooltipControlled
`}
    </code>
  </pre>
)

export const tooltipUncontrolled = (
  <pre>
    <code className='language-jsx'>
      {`

import { Button, UncontrolledTooltip } from 'reactstrap'

const TooltipUncontrolled = () => {
  return (
    <React.Fragment>
      <Button color='primary' id='UnControlledExample'>
        Uncontrolled
      </Button>
      <UncontrolledTooltip placement='top' target='UnControlledExample'>
        Hello World !
      </UncontrolledTooltip>
    </React.Fragment>
  )
}
export default TooltipUncontrolled
`}
    </code>
  </pre>
)

export const tooltipPosition = (
  <pre>
    <code className='language-jsx'>
      {`

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
`}
    </code>
  </pre>
)
