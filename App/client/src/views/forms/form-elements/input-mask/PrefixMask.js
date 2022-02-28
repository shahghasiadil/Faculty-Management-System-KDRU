import { Fragment } from 'react'
import Cleave from 'cleave.js/react'

const PrefixMask = () => {
  const options = { prefix: '+63', blocks: [3, 3, 3, 4], uppercase: true }
  return (
    <Fragment>
      <label htmlFor='prefix'>Prefix</label>
      <Cleave className='form-control' options={options} id='prefix' />
    </Fragment>
  )
}

export default PrefixMask
