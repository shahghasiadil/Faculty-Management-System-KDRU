import { Progress } from 'reactstrap'

const ProgressAnimated = () => {
  return (
    <div className='demo-vertical-spacing'>
      <Progress animated striped value={20} />
      <Progress animated striped className='progress-bar-success' value={40} />
      <Progress animated striped className='progress-bar-danger' value={60} />
      <Progress animated striped className='progress-bar-warning' value={80} />
      <Progress animated striped className='progress-bar-info' value={100} />
    </div>
  )
}
export default ProgressAnimated
