import { Fragment, useState } from 'react'
import { Label } from 'reactstrap'
import Flatpickr from 'react-flatpickr'

const Timepickers = () => {
  const [basic, setBasic] = useState(new Date())

  return (
    <Fragment>
      <Label id='timepicker'>Basic 24hrs</Label>
      <Flatpickr
        className='form-control'
        value={basic}
        id='timepicker'
        options={{
          enableTime: true,
          noCalendar: true,
          dateFormat: 'H:i',
          time_24hr: true
        }}
        onChange={date => setBasic(date)}
      />
    </Fragment>
  )
}

export default Timepickers
