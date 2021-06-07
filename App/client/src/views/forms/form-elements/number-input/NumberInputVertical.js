import NumberInput from '@components/number-input'
import { Card, CardHeader, CardTitle, CardBody, CardText, Label } from 'reactstrap'

const NumberInputVertical = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Vertical</CardTitle>
      </CardHeader>
      <CardBody>
        <CardText>
          Use prop <code>vertical</code> for a vertical Number Input.
        </CardText>
        <div className='d-flex justify-content-between flex-wrap'>
          <NumberInput id='wrap-number-input' vertical min={1} max={10} size='lg' />
          <NumberInput id='wrap-number-input' vertical min={1} max={10} />
          <NumberInput id='wrap-number-input' vertical min={1} max={10} size='sm' />
        </div>
      </CardBody>
    </Card>
  )
}

export default NumberInputVertical
