import { Progress } from 'reactstrap'

const ProgressColored = () => {
  return (
    <div className='demo-vertical-spacing'>
      <Progress value={25} />
      <Progress className='progress-bar-secondary' value={35} />
      <Progress className='progress-bar-success' value={45} />
      <Progress className='progress-bar-danger' value={55} />
      <Progress className='progress-bar-warning' value={65} />
      <Progress className='progress-bar-info' value={75} />
      <Progress className='progress-bar-dark' value={85} />
    </div>
  )
}
export default ProgressColored
