import { useState } from 'react'
import Select from 'react-select'
import classnames from 'classnames'
import Cleave from 'cleave.js/react'
import Flatpickr from 'react-flatpickr'
import { selectThemeColors } from '@utils'
import { useForm, Controller } from 'react-hook-form'
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from 'reactstrap'

import 'cleave.js/dist/addons/cleave-phone.us'
import '@styles/react/libs/flatpickr/flatpickr.scss'
import '@styles/react/libs/react-select/_react-select.scss'

const colourOptions = [
  { value: 'ocean', label: 'Ocean' },
  { value: 'blue', label: 'Blue' },
  { value: 'purple', label: 'Purple' },
  { value: 'red', label: 'Red' },
  { value: 'orange', label: 'Orange' }
]

const defaultValues = {
  phoneNumber: '',
  ReactSelect: null,
  reactFlatpickr: null
}

const ValidationThirdPartyComponents = () => {
  const [data, setData] = useState(null)

  const { handleSubmit, control } = useForm({ defaultValues })

  const onSubmit = data => setData(data)

  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Third Party Components</CardTitle>
      </CardHeader>
      <CardBody>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <Label for='react-select'>React Select</Label>
            <Controller
              isClearable
              as={Select}
              id='react-select'
              control={control}
              name='ReactSelect'
              options={colourOptions}
              className={classnames('react-select', { 'is-invalid': data !== null && data.ReactSelect === null })}
              classNamePrefix='select'
              theme={selectThemeColors}
            />
          </FormGroup>
          <FormGroup>
            <Label for='react-flatpickr'>React Flatpickr</Label>
            <Controller
              as={Flatpickr}
              control={control}
              id='react-flatpickr'
              name='reactFlatpickr'
              className={classnames('form-control', {
                'is-invalid': data !== null && data.reactFlatpickr === null
              })}
            />
          </FormGroup>
          <FormGroup>
            <Label for='phone-number'>Input Mask</Label>
            <InputGroup className='input-group-merge'>
              <InputGroupAddon addonType='prepend'>
                <InputGroupText
                  className={classnames({
                    'border-danger': data !== null && (data.phoneNumber === null || !data.phoneNumber.length)
                  })}
                >
                  US (+1)
                </InputGroupText>
              </InputGroupAddon>
              <Controller
                as={Cleave}
                id='phone-number'
                name='phoneNumber'
                control={control}
                className={classnames('form-control', {
                  'is-invalid': data !== null && (data.phoneNumber === null || !data.phoneNumber.length)
                })}
                placeholder='1 234 567 8900'
                options={{ phone: true, phoneRegionCode: 'US' }}
              />
            </InputGroup>
          </FormGroup>
          <FormGroup className='d-flex mb-0'>
            <Button.Ripple className='mr-1' color='primary' type='submit'>
              Submit
            </Button.Ripple>
            <Button.Ripple outline color='secondary' type='reset'>
              Reset
            </Button.Ripple>
          </FormGroup>
        </Form>
      </CardBody>
    </Card>
  )
}

export default ValidationThirdPartyComponents
