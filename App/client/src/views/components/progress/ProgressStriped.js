import { Progress } from 'reactstrap'
const ProgressStriped = () => {
  return (
    <div className='demo-vertical-spacing'>
      <Progress striped value={20} />
      <Progress striped className='progress-bar-success' value={40} />
      <Progress striped className='progress-bar-danger' value={60} />
      <Progress striped className='progress-bar-warning' value={80} />
      <Progress striped className='progress-bar-info' value={100} />
    </div>
  )
}
export default ProgressStriped
