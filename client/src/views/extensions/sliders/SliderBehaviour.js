import Nouislider from 'nouislider-react'
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'

const SliderBehaviour = ({ direction }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Slider Behaviour</CardTitle>
      </CardHeader>
      <CardBody>
        <h5 className='mb-2'>Tap</h5>
        <Nouislider
          start={[20, 40]}
          direction={direction}
          behaviour={'tap'}
          connect={true}
          range={{
            min: 10,
            max: 50
          }}
        />
        <h5 className='my-2'>Drag</h5>
        <Nouislider
          start={[40, 60]}
          direction={direction}
          behaviour={'drag'}
          connect={true}
          range={{
            min: 20,
            max: 80
          }}
        />
        <h5 className='my-2'>Fixed dragging</h5>
        <Nouislider
          start={[40, 60]}
          direction={direction}
          behaviour={'drag-fixed'}
          connect={true}
          range={{
            min: 20,
            max: 80
          }}
        />
        <h5 className='my-2'>Combined options</h5>
        <Nouislider
          start={[40, 60]}
          direction={direction}
          behaviour={'drag-tap'}
          connect={true}
          range={{
            min: 20,
            max: 80
          }}
        />
      </CardBody>
    </Card>
  )
}

export default SliderBehaviour
