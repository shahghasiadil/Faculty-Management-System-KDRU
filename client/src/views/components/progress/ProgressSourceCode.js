export const progressBasic = (
  <pre>
    <code className='language-jsx'>
      {`

import { Progress } from 'reactstrap'
const ProgressBasic = () => {
  return (
    <div className='demo-vertical-spacing'>
      <div>
        <span>Reticulating splines… 0%</span>
        <Progress />
      </div>
      <div>
        <span>Reticulating splines… 25%</span>
        <Progress value='25' />
      </div>
      <div>
        <span>Reticulating splines… 50%</span>
        <Progress value={50} />
      </div>
      <div>
        <span>Reticulating splines… 75%</span>
        <Progress value={75} />
      </div>
      <div>
        <span>Reticulating splines… 100%</span>
        <Progress value='100' />
      </div>
    </div>
  )
}
export default ProgressBasic
`}
    </code>
  </pre>
)

export const progressColored = (
  <pre>
    <code className='language-jsx'>
      {`

import { Progress } from 'reactstrap'

const ProgressColored = () => {
  return (
    <React.Fragment>
      <Progress value={25} />
      <Progress className='progress-bar-secondary' value={35} />
      <Progress className='progress-bar-success' value={45} />
      <Progress className='progress-bar-danger' value={55} />
      <Progress className='progress-bar-warning' value={65} />
      <Progress className='progress-bar-info' value={75} />
      <Progress className='progress-bar-dark' value={85} />
    </React.Fragment>
  )
}
export default ProgressColored
`}
    </code>
  </pre>
)

export const progressMultipleStacked = (
  <pre>
    <code className='language-jsx'>
      {`

import { Progress } from 'reactstrap'

const ProgressMultipleStacked = () => {
  return (
     <Progress multi>
        <Progress bar color='danger' value='15'>
          15%
        </Progress>
        <Progress bar color='warning' value='50'>
          50%
        </Progress>
        <Progress bar color='primary' value='10'>
          10%
        </Progress>
    </Progress>
  )
}
export default ProgressMultipleStacked
`}
    </code>
  </pre>
)

export const progressLabeled = (
  <pre>
    <code className='language-jsx'>
      {`

import { Progress } from 'reactstrap'

const ProgressLabeled = () => {
  return (
    <div className='demo-vertical-spacing'>
      <Progress value='25'>25%</Progress>
      <Progress value='35' className='progress-bar-secondary'>
        35%
      </Progress>
      <Progress value='45' className='progress-bar-success'>
        45%
      </Progress>
      <Progress value='55' className='progress-bar-danger'>
        55%
      </Progress>
      <Progress className='progress-bar-warning' value='65'>
        65%
      </Progress>
      <Progress className='progress-bar-info' value='75'>
        75%
      </Progress>
      <Progress className='progress-bar-dark' value='85'>
        85%
      </Progress>
    </div>
  )
}
export default ProgressLabeled
`}
    </code>
  </pre>
)

export const progressStriped = (
  <pre>
    <code className='language-jsx'>
      {`

import { Progress } from 'reactstrap'
const ProgressStriped = () => {
  return (
    <React.Fragment>
      <Progress striped value={20} />
      <Progress striped className='progress-bar-success' value={40} />
      <Progress striped className='progress-bar-danger' value={60} />
      <Progress striped className='progress-bar-warning' value={80} />
      <Progress striped className='progress-bar-info' value={100} />
    </React.Fragment>
  )
}
export default ProgressStriped
`}
    </code>
  </pre>
)

export const progressAnimated = (
  <pre>
    <code className='language-jsx'>
      {`

import { Progress } from 'reactstrap'

const ProgressAnimated = () => {
  return (
    <React.Fragment>
      <Progress striped value={20} />
      <Progress striped className='progress-bar-success' value={40} />
      <Progress striped className='progress-bar-danger' value={60} />
      <Progress striped className='progress-bar-warning' value={80} />
      <Progress striped className='progress-bar-info' value={100} />
    </React.Fragment>
  )
}
export default ProgressAnimated
`}
    </code>
  </pre>
)
