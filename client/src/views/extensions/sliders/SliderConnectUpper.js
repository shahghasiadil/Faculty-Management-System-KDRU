import Nouislider from 'nouislider-react'
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'

const SliderConnectUpper = ({ direction }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Connect to upper</CardTitle>
      </CardHeader>
      <CardBody className='text-center'>
        <Nouislider
          connect='upper'
          start={30}
          direction={direction}
          orientation='vertical'
          range={{
            min: 0,
            max: 100
          }}
          style={{
            height: '200px'
          }}
        />
      </CardBody>
    </Card>
  )
}

export default SliderConnectUpper
