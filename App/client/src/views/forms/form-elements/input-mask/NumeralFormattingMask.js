import { Fragment } from 'react'
import Cleave from 'cleave.js/react'

const NumeralFormattingMask = () => {
  const options = { numeral: true, numeralThousandsGroupStyle: 'thousand' }

  return (
    <Fragment>
      <label htmlFor='numeral-formatting'>Numeral Formatting</label>
      <Cleave className='form-control' placeholder='10,000' options={options} id='numeral-formatting' />
    </Fragment>
  )
}

export default NumeralFormattingMask
