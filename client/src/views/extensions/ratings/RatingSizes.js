import Rating from 'react-rating'
import { Star } from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'

const RatingSizes = ({ filledColor, dir }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Sizes</CardTitle>
      </CardHeader>
      <CardBody>
        <h6>Large</h6>
        <Rating
          direction={dir}
          emptySymbol={<Star size={42} fill='#babfc7' stroke='#babfc7' />}
          fullSymbol={<Star size={42} fill={filledColor} stroke={filledColor} />}
        />
        <h6 className='mt-2'>Default</h6>
        <Rating
          direction={dir}
          emptySymbol={<Star size={32} fill='#babfc7' stroke='#babfc7' />}
          fullSymbol={<Star size={32} fill={filledColor} stroke={filledColor} />}
        />
        <h6 className='mt-2'>Small</h6>
        <Rating
          direction={dir}
          emptySymbol={<Star size={20} fill='#babfc7' stroke='#babfc7' />}
          fullSymbol={<Star size={20} fill={filledColor} stroke={filledColor} />}
        />
      </CardBody>
    </Card>
  )
}

export default RatingSizes
