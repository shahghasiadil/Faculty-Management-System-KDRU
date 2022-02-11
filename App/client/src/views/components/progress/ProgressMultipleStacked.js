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
