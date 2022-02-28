import Rating from 'react-rating'
import { Star } from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'

const RatingBasic = ({ filledColor, dir }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Basic</CardTitle>
      </CardHeader>
      <CardBody>
        <Rating
          emptySymbol={<Star size={32} fill='#babfc7' stroke='#babfc7' />}
          fullSymbol={<Star size={32} fill={filledColor} stroke={filledColor} />}
          initialRating={2}
          direction={dir}
        />
      </CardBody>
    </Card>
  )
}

export default RatingBasic
