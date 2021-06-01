import Rating from 'react-rating'
import { Star } from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'

const RatingFractional = ({ filledColor, dir }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Fractional</CardTitle>
      </CardHeader>
      <CardBody>
        <Rating
          emptySymbol={<Star size={32} fill='#babfc7' stroke='#babfc7' />}
          fullSymbol={<Star size={32} fill={filledColor} stroke={filledColor} />}
          fractions={2}
          initialRating={2.5}
          direction={dir}
        />
      </CardBody>
    </Card>
  )
}

export default RatingFractional
