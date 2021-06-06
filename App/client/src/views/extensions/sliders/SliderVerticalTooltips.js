import Nouislider from 'nouislider-react'
import wNumb from 'wnumb'
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'

const SliderTooltips = ({ direction }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Tooltips</CardTitle>
      </CardHeader>
      <CardBody className='text-center'>
        <Nouislider
          start={[20, 80]}
          direction={direction}
          orientation={'vertical'}
          tooltips={[
            wNumb({
              decimals: 1
            }),
            wNumb({
              decimals: 1
            })
          ]}
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

export default SliderTooltips
