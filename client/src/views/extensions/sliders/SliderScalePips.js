import Nouislider from 'nouislider-react'
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'

const SliderScalePips = ({ direction }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Slider Scales / Pips</CardTitle>
      </CardHeader>
      <CardBody>
        <Nouislider
          className='mt-1 mb-3'
          start={10}
          step={10}
          tooltips={true}
          direction={direction}
          range={{
            min: 0,
            max: 100
          }}
          pips={{
            mode: 'steps',
            stepped: true,
            density: 5
          }}
        />
      </CardBody>
    </Card>
  )
}

export default SliderScalePips
