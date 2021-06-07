import { Fragment } from 'react'
import CardGroup from './CardGroup'
import CardDeck from './CardDeck'
import CardColumns from './CardColumns'
const CardLayout = () => {
  return (
    <Fragment>
      <h5 className='mt-3 mb-2'>Card layout</h5>
      <h6 className='my-3 text-muted'>Card Group</h6>
      <CardGroup />
      <h6 className='my-3 text-muted'>Card Deck</h6>
      <CardDeck />
      <h6 className='my-3 text-muted'>Card Columns</h6>
      <CardColumns />
    </Fragment>
  )
}

export default CardLayout
