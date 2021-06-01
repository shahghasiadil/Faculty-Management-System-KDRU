import Rating from 'react-rating'
import { Star } from 'react-feather'
import RatingsHover from './RatingsHover'
import { Card, CardHeader, CardTitle, CardBody, CardText, Row, Col } from 'reactstrap'

const RatingEvents = ({ filledColor, dir }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Events</CardTitle>
      </CardHeader>
      <CardBody>
        <Row>
          <Col md='6' className='d-flex flex-column align-items-start mb-md-0 mb-1'>
            <CardText className='font-weight-semibold mb-25'>On Change</CardText>
            <Rating
              emptySymbol={<Star size={32} fill='#babfc7' stroke='#babfc7' />}
              fullSymbol={<Star size={32} fill={filledColor} stroke={filledColor} />}
              onChange={rate => alert(rate)}
              direction={dir}
            />
          </Col>
          <Col md='6' className='d-flex flex-column align-items-start'>
            <CardText className='font-weight-semibold mb-25'>On Hover</CardText>
            <RatingsHover filledColor={filledColor} dir={dir} />
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default RatingEvents
