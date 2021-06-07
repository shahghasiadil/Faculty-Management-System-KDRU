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
