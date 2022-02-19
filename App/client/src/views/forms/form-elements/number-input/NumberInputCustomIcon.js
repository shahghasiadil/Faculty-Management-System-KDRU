import NumberInput from '@components/number-input'
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, CardText, Row, Col } from 'reactstrap'

const NumberInputCustomIcons = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Custom Icons</CardTitle>
      </CardHeader>
      <CardBody>
        <CardText>
          Use props <code>upIcon</code> or <code>downIcon</code> to change <code>increment</code> and{' '}
          <code>decrement</code> icons.
        </CardText>
        <Row>
          <Col md='6' className='mb-md-0 mb-2'>
            <NumberInput downIcon={<ChevronDown size={14} />} upIcon={<ChevronUp size={14} />} />
          </Col>
          <Col md='6'>
            <NumberInput downIcon={<ChevronLeft size={14} />} upIcon={<ChevronRight size={14} />} />
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default NumberInputCustomIcons
