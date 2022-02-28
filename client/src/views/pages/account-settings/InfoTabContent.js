import classnames from 'classnames'
import Flatpickr from 'react-flatpickr'
import { useForm, Controller } from 'react-hook-form'
import { Label, Input, FormGroup, Row, Col, Button, Form } from 'reactstrap'

import '@styles/react/libs/flatpickr/flatpickr.scss'

const InfoTabContent = ({ data }) => {
  const { register, errors, handleSubmit, control, trigger } = useForm({
    defaultValues: { dob: data.dob || new Date() }
  })

  const onSubmit = data => trigger()

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Row>
        <Col sm='12'>
          <FormGroup>
            <Label for='bio'>Bio</Label>
            <Controller
              id='bio'
              rows='4'
              as={Input}
              name='bio'
              type='textarea'
              control={control}
              defaultValue={data.bio || ''}
              placeholder='Your Bio data here...'
              innerRef={register({ required: true })}
              className={classnames({ 'is-invalid': errors.bio })}
            />
          </FormGroup>
        </Col>
        <Col sm='6'>
          <FormGroup>
            <Label for='birth-date'>Birth Date</Label>
            <Controller
              name='dob'
              as={Flatpickr}
              id='birth-date'
              control={control}
              placeholder='Birth Date'
              className={classnames('form-control', {
                'is-invalid': errors.dob
              })}
            />
          </FormGroup>
        </Col>
        <Col sm='6'>
          <FormGroup>
            <Label for='country'>Country</Label>
            <Input
              id='country'
              type='select'
              name='country'
              defaultValue={data.country || ''}
              className={classnames({
                'is-invalid': errors.country
              })}
              innerRef={register({ required: true })}
            >
              <option value='USA'>USA</option>
              <option value='France'>France</option>
              <option value='Canada'>Canada</option>
            </Input>
          </FormGroup>
        </Col>
        <Col sm='6'>
          <FormGroup>
            <Label for='website'>Website</Label>
            <Input
              type='url'
              id='website'
              name='website'
              defaultValue={data.website || ''}
              placeholder='Website Address'
              className={classnames({
                'is-invalid': errors.website
              })}
              innerRef={register({ required: true })}
            />
          </FormGroup>
        </Col>
        <Col sm='6'>
          <FormGroup>
            <Label for='phone'>Phone</Label>
            <Input
              id='phone'
              name='phone'
              defaultValue={data.phone || ''}
              placeholder='Phone Number'
              className={classnames({
                'is-invalid': errors.phone
              })}
              innerRef={register({ required: true })}
            />
          </FormGroup>
        </Col>
        <Col className='mt-1' sm='12'>
          <Button.Ripple className='mr-1' color='primary'>
            Save changes
          </Button.Ripple>
          <Button.Ripple color='secondary' outline>
            Cancel
          </Button.Ripple>
        </Col>
      </Row>
    </Form>
  )
}

export default InfoTabContent
