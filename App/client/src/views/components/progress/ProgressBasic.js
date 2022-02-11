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
