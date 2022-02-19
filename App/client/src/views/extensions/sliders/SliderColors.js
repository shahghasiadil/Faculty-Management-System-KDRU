import Nouislider from 'nouislider-react'
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'

const SliderValues = ({ direction }) => {
  const colorOptions = {
    start: [40, 60],
    connect: true,
    behaviour: 'drag',
    step: 10,
    tooltips: true,
    range: {
      min: 0,
      max: 100
    },
    pips: {
      mode: 'steps',
      stepped: true,
      density: 5
    },
    direction
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Colors</CardTitle>
      </CardHeader>
      <CardBody>
        <h5 className='my-2'>Default / Primary Color Slider</h5>
        <Nouislider className='mt-md-1 mt-3 mb-4' {...colorOptions} />

        <h5 className='my-2'>Secondary Color Slider</h5>
        <Nouislider className='slider-secondary mt-md-1 mt-3 mb-4' {...colorOptions} />

        <h5 className='my-2'>Success Color Slider</h5>
        <Nouislider className='slider-success mt-md-1 mt-3 mb-4' {...colorOptions} />

        <h5 className='my-2'>Danger Color Slider</h5>
        <Nouislider className='slider-danger mt-md-1 mt-3 mb-4' {...colorOptions} />

        <h5 className='my-2'>warning Color Slider</h5>
        <Nouislider className='slider-warning mt-md-1 mt-3 mb-4' {...colorOptions} />

        <h5 className='my-2'>info Color Slider</h5>
        <Nouislider className='slider-info mt-md-1 mt-3 mb-4' {...colorOptions} />
      </CardBody>
    </Card>
  )
}

export default SliderValues
