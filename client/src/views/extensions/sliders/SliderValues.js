import Nouislider from 'nouislider-react'
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'

const SliderValues = ({ direction }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Slider Values</CardTitle>
      </CardHeader>
      <CardBody>
        <h5 className='mb-2'>Handles</h5>
        <Nouislider start={[4000, 8000]} direction={direction} range={{ min: [2000], max: [10000] }} />
        <h5 className='my-2'>Snapping between steps</h5>
        <Nouislider
          start={[0, 500]}
          direction={direction}
          snap={true}
          connect={true}
          range={{
            min: 0,
            '10%': 50,
            '20%': 100,
            '30%': 150,
            '40%': 500,
            '50%': 800,
            max: 1000
          }}
        />
      </CardBody>
    </Card>
  )
}

export default SliderValues
