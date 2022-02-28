import { Fragment, useState } from 'react'
import { Label } from 'reactstrap'
import Flatpickr from 'react-flatpickr'

const PickerRangeDisabled = () => {
  const [picker, setPicker] = useState(new Date())
  return (
    <Fragment>
      <Label for='disabled-picker'>Disabled Range</Label>
      <Flatpickr
        value={picker}
        id='disabled-picker'
        className='form-control'
        onChange={date => setPicker(date)}
        options={{
          dateFormat: 'Y-m-d',
          disable: [
            {
              from: '2020-02-01',
              to: '2020-02-10'
            },
            {
              from: '2020-02-20',
              to: '2020-02-25'
            }
          ]
        }}
      />
    </Fragment>
  )
}

export default PickerRangeDisabled
