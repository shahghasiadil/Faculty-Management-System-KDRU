import { useState } from 'react'
import Flatpickr from 'react-flatpickr'
import { Card, CardHeader, CardTitle, CardBody, Label, Button } from 'reactstrap'
import {
  AvForm,
  AvGroup,
  AvField,
  AvInput,
  AvFeedback,
  AvRadioGroup,
  AvCheckboxGroup,
  AvRadio,
  AvCheckbox
} from 'availity-reactstrap-validation-safe'

import '@styles/react/libs/flatpickr/flatpickr.scss'

const Validation = () => {
  const [picker, setPicker] = useState('')

  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Validation</CardTitle>
      </CardHeader>
      <CardBody>
        <AvForm>
          <AvGroup>
            <Label for='name'>Name</Label>
            <AvInput name='name' id='name' required />
            <AvFeedback>Please enter a valid name!</AvFeedback>
          </AvGroup>
          <AvGroup>
            <Label for='email'>Email</Label>
            <AvInput type='email' name='email' id='email' required />
            <AvFeedback>Please enter a valid email!</AvFeedback>
          </AvGroup>
          <AvGroup>
            <Label for='password'>Password</Label>
            <AvInput type='password' name='password' id='password' required />
            <AvFeedback>Please enter a valid Password!</AvFeedback>
          </AvGroup>
          <AvGroup>
            <Label for='dob'>DOB</Label>
            <AvField
              required
              id='dob'
              tag={Flatpickr}
              name='dob'
              className='form-control'
              value={picker}
              onChange={date => setPicker(date[0])}
            />
            <AvFeedback>Please enter your DOB!</AvFeedback>
          </AvGroup>
          <AvGroup>
            <Label for='country'>Country</Label>
            <AvField type='select' name='country' id='country' required>
              <option>United Kingdom</option>
              <option>United States</option>
              <option>France</option>
              <option>Australia</option>
              <option>Germany</option>
            </AvField>
            <AvFeedback>Please select a country</AvFeedback>
          </AvGroup>
          <AvGroup>
            <Label for='hobbies'>Hobbies</Label>
            <AvField type='select' name='hobbies' id='hobbies' multiple required>
              <option>Sports</option>
              <option>Movies</option>
              <option>Books</option>
            </AvField>
            <AvFeedback>Please select at least one hobby</AvFeedback>
          </AvGroup>
          <AvGroup>
            <Label for='bio'>Bio</Label>
            <AvInput type='textarea' name='bio' id='bio' required />
            <AvFeedback>Please enter Bio!</AvFeedback>
          </AvGroup>
          <AvRadioGroup name='gender' required>
            <AvRadio className='mb-1' customInput label='Male' value='Male' />
            <AvRadio customInput label='Female' value='Female' />
          </AvRadioGroup>
          <AvCheckboxGroup name='terms' required>
            <AvCheckbox customInput label='Agree to our terms and conditions' value='terms' />
            <AvFeedback>You must agree to our Terms & Conditions</AvFeedback>
          </AvCheckboxGroup>
          <Button color='primary' type='submit'>
            Submit
          </Button>
        </AvForm>
      </CardBody>
    </Card>
  )
}

export default Validation
