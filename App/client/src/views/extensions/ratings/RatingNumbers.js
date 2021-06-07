import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'
import Rating from 'react-rating'

const RatingNumbers = props => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Numbers</CardTitle>
      </CardHeader>
      <CardBody>
        <Rating
          emptySymbol={<span className='font-medium-3 mr-50'>-</span>}
          fullSymbol={[1, 2, 3, 4, 5].map(n => (
            <span className='font-medium-3 mr-50'>{n}</span>
          ))}
          direction={props.dir}
        />
      </CardBody>
    </Card>
  )
}

export default RatingNumbers
