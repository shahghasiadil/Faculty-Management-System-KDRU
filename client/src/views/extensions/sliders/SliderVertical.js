import Nouislider from 'nouislider-react'
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'

const SliderVertical = ({ direction }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Vertical Default</CardTitle>
      </CardHeader>
      <CardBody className='text-center'>
        <Nouislider
          start={20}
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

export default SliderVertical
