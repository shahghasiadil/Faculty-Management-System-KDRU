import { Fragment } from 'react'
import Cleave from 'cleave.js/react'
import 'cleave.js/dist/addons/cleave-phone.us'
import { InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap'

const PhoneMask = () => {
  const options = { phone: true, phoneRegionCode: 'US' }
  return (
    <Fragment>
      <label htmlFor='phone-number'>Phone Number</label>
      <InputGroup className='input-group-merge'>
        <InputGroupAddon addonType='prepend'>
          <InputGroupText>US (+1)</InputGroupText>
        </InputGroupAddon>
        <Cleave className='form-control' placeholder='1 234 567 8900' options={options} id='phone-number' />
      </InputGroup>
    </Fragment>
  )
}

export default PhoneMask
