import { useState, Fragment } from 'react'
import Rating from 'react-rating'
import { Star } from 'react-feather'

const RatingsHover = ({ filledColor, dir }) => {
  const [value, setValue] = useState(0)

  const onHover = rate => {
    if (rate !== undefined) {
      setValue(rate)
    }
  }

  return (
    <Fragment>
      <Rating
        initialRating={value}
        id='ratings-hover'
        emptySymbol={<Star size={32} fill='#babfc7' stroke='#babfc7' />}
        fullSymbol={<Star size={32} fill={filledColor} stroke={filledColor} />}
        onHover={rate => onHover(rate)}
        onChange={rate => setValue(rate)}
        direction={dir}
      />
      <div className='counter-wrapper mt-1'>
        <span className='font-weight-bold'>Ratings: {value}</span>
      </div>
    </Fragment>
  )
}

export default RatingsHover
