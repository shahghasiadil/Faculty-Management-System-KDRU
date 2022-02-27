import NumberInput from '@components/number-input'
import { Card, CardHeader, CardTitle, CardBody, CardText, FormGroup } from 'reactstrap'

const NumberInputWidth = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Width</CardTitle>
      </CardHeader>
      <CardBody>
        <CardText>
          You can control width via utility classes with prop <code>className</code> such as <code>w-50</code>,{' '}
          <code>w-75</code>, <code>w-100</code>, or use <code>style</code> prop to set the width.
        </CardText>
        <FormGroup>
          <NumberInput style={{ width: '200px' }} />
        </FormGroup>
        <FormGroup>
          <NumberInput className='w-50' />
        </FormGroup>
        <FormGroup>
          <NumberInput className='w-75' />
        </FormGroup>
        <FormGroup>
          <NumberInput className='w-100' />
        </FormGroup>
      </CardBody>
    </Card>
  )
}

export default NumberInputWidth
