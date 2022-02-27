// ** React Imports
import { useState } from 'react'

// ** Third Party Components
import classnames from 'classnames'
import Cleave from 'cleave.js/react'
import Flatpickr from 'react-flatpickr'
import { User, MapPin } from 'react-feather'
import 'cleave.js/dist/addons/cleave-phone.us'
import { useForm, Controller } from 'react-hook-form'
import { Row, Col, Button, Label, FormGroup, Input, CustomInput, Form } from 'reactstrap'

// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'

const UserInfoTab = () => {
  // ** State
  const [data, setData] = useState(null)

  // ** React hook form vars
  const { register, errors, handleSubmit, control, setValue, trigger } = useForm({
    defaultValues: { gender: 'gender-female', dob: null }
  })
  return (
    <Form
      onSubmit={handleSubmit(data => {
        trigger()
        setData(data)
      })}
    >
      <Row className='mt-1'>
        <Col sm='12'>
          <h4 className='mb-1'>
            <User size={20} className='mr-50' />
            <span className='align-middle'>Personal Information</span>
          </h4>
        </Col>
        <Col lg='4' md='6'>
          <FormGroup>
            <Label className='d-block' for='dob'>
              Date of birth
            </Label>
            <Controller
              id='dob'
              name='dob'
              as={Flatpickr}
              control={control}
              placeholder='YYYY-MM-DD'
              options={{ dateFormat: 'Y-m-d' }}
              className={classnames('form-control', {
                'is-invalid': errors.dob
              })}
            />
          </FormGroup>
        </Col>
        <Col lg='4' md='6'>
          <FormGroup>
            <Label for='mobileNumber'>Mobile</Label>
            <Controller
              as={Cleave}
              control={control}
              id='mobileNumber'
              name='mobileNumber'
              defaultValue='+6595895857'
              placeholder='1 234 567 8900'
              options={{ phone: true, phoneRegionCode: 'US' }}
              className={classnames('form-control', {
                'is-invalid': data !== null && (data.mobileNumber === undefined || data.mobileNumber === null)
              })}
            />
          </FormGroup>
        </Col>
        <Col lg='4' md='6'>
          <FormGroup>
            <Label for='website'>Website</Label>
            <Input
              type='url'
              id='website'
              name='website'
              placeholder='https://google.com'
              defaultValue='https://rowboat.com/insititious/Angelo'
            />
          </FormGroup>
        </Col>
        <Col lg='4' md='6'>
          <FormGroup>
            <Label for='languages'>Languages</Label>
            <Controller
              as={Input}
              type='select'
              name='status'
              id='languages'
              control={control}
              defaultValue='English'
              invalid={data !== null && (data.status === undefined || data.status === null)}
            >
              <option value='English'>English</option>
              <option value='Spanish'>Spanish</option>
              <option value='French'>French</option>
              <option value='Russian'>Russian</option>
              <option value='German'>German</option>
              <option value='Arabic'>Arabic</option>
              <option value='Sanskrit'>Sanskrit</option>
            </Controller>
          </FormGroup>
        </Col>
        <Col lg='4' md='6'>
          <FormGroup>
            <label className='d-block mb-1'>Gender</label>
            <FormGroup>
              <Controller
                name='gender'
                control={control}
                render={props => {
                  return (
                    <CustomInput
                      inline
                      type='radio'
                      label='Male'
                      value='Male'
                      id='gender-male'
                      name={props.name}
                      invalid={data !== null && (data.gender === undefined || data.gender === null)}
                      onChange={() => setValue('gender', 'male')}
                    />
                  )
                }}
              />
              <Controller
                name='gender'
                control={control}
                render={props => {
                  return (
                    <CustomInput
                      inline
                      type='radio'
                      label='Female'
                      value='Female'
                      id='gender-female'
                      name={props.name}
                      defaultChecked
                      invalid={data !== null && (data.gender === undefined || data.gender === null)}
                      onChange={() => setValue('gender', 'female')}
                    />
                  )
                }}
              />
            </FormGroup>
          </FormGroup>
        </Col>
        <Col lg='4' md='6'>
          <FormGroup>
            <label className='d-block mb-1'>Contact Options</label>
            <FormGroup>
              <CustomInput
                inline
                type='checkbox'
                name='terms'
                id='emailTerms'
                value='Email'
                label='Email'
                defaultChecked
              />
              <CustomInput
                inline
                type='checkbox'
                name='terms'
                id='msgTerms'
                value='Messages'
                label='Messages'
                defaultChecked
              />
              <CustomInput inline type='checkbox' name='terms' id='phoneTerms' value='Phone' label='Phone' />
            </FormGroup>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col sm='12'>
          <h4 className='mb-1 mt-2'>
            <MapPin size={20} className='mr-50' />
            <span className='align-middle'>Address</span>
          </h4>
        </Col>
        <Col lg='4' md='6'>
          <FormGroup>
            <Label for='address-1'>Address Line 1</Label>
            <Input
              id='address-1'
              name='address1'
              defaultValue='A-65, Belvedere Streets'
              innerRef={register({ required: true })}
              className={classnames({
                'is-invalid': errors.address1
              })}
            />
          </FormGroup>
        </Col>
        <Col lg='4' md='6'>
          <FormGroup>
            <Label for='address-2'>Address Line 2</Label>
            <Input placeholder='A-65, Belvedere Streets' id='address-2' name='address-2' />
          </FormGroup>
        </Col>
        <Col lg='4' md='6'>
          <FormGroup>
            <Label for='postcode'>Postcode</Label>
            <Input
              id='postcode'
              name='postcode'
              placeholder='597626'
              innerRef={register({ required: true })}
              invalid={errors.postcode && true}
            />
          </FormGroup>
        </Col>
        <Col lg='4' md='6'>
          <FormGroup>
            <Label for='city'>City</Label>
            <Input defaultValue='Manhattan' placeholder='Manhattan' id='city' name='city' />
          </FormGroup>
        </Col>
        <Col lg='4' md='6'>
          <FormGroup>
            <Label for='state'>State</Label>
            <Input
              defaultValue='New York'
              placeholder='New York'
              id='state'
              name='state'
              innerRef={register({ required: true })}
              invalid={errors.state && true}
            />
          </FormGroup>
        </Col>
        <Col lg='4' md='6'>
          <FormGroup>
            <Label for='country'>Country</Label>
            <Input
              placeholder='United States'
              id='country'
              name='country'
              innerRef={register({ required: true })}
              invalid={errors.country && true}
            />
          </FormGroup>
        </Col>
        <Col className='d-flex flex-sm-row flex-column mt-2'>
          <Button type='submit' color='primary' className='mb-1 mb-sm-0 mr-0 mr-sm-1'>
            Save Changes
          </Button>
          <Button type='reset' color='secondary' outline>
            Reset
          </Button>
        </Col>
      </Row>
    </Form>
  )
}
export default UserInfoTab
