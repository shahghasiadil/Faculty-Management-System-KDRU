
import * as yup from 'yup'
import { Fragment } from 'react'
import { useSelector } from 'react-redux'
import classnames from 'classnames'
import { isObjEmpty } from '@utils'
import { useForm } from 'react-hook-form'
import { ArrowLeft, ArrowRight } from 'react-feather'
import { yupResolver } from '@hookform/resolvers/yup'
import { Label, FormGroup, Row, Col, Button, Form, Input, FormFeedback } from 'reactstrap'

const Address = ({ stepper, type }) => {

  const StudentSchema = yup.object().shape({
    province: yup.string().required('Province is required field'),
    district: yup.string().required("District is required field"),
    area: yup.string().required("Area is required field"),
    streetNo: yup.string().required("Street Number is required field"),
    houseNo: yup.string().required("House Number is required field")
  })
  // ** React hook form
  const { register, errors, handleSubmit, watch, trigger } = useForm({ mode: 'onChange', resolver: yupResolver(StudentSchema) })

  const { studentInfo } = useSelector(state => state.students)
  const { address } = studentInfo

  const onSubmit = (value) => {
    trigger()
    if (isObjEmpty(errors)) {
      address.province = value.province
      address.district = value.district
      address.area = value.area
      address.street_no = value.streetNo
      address.house_no = value.houseNo
      stepper.next()
    }
  }

  return (
    <Fragment>
      <div className='content-header'>
        <h5 className='mb-0'>Address</h5>
        <small>Enter Student's Address.</small>
      </div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>

          <FormGroup tag={Col} md='4'>
            <Label for='province'>
              Province  <span className='text-danger'>*</span>
            </Label>
            <Input
              name='province'
              id='province'
              autoComplete="off"
              placeholder='Kabul'
              innerRef={register({ required: true })}
              invalid={errors.province && true}
              className={watch('province') ? classnames({ 'is-valid': !errors.province }) : ''}
            />
            {errors && errors.province && <FormFeedback>{errors.province.message}</FormFeedback>}
          </FormGroup>


          <FormGroup tag={Col} md='4'>
            <Label for='district'>
              District  <span className='text-danger'>*</span>
            </Label>
            <Input
              name='district'
              id='district'
              autoComplete="off"
              placeholder='Paghman'
              innerRef={register({ required: true })}
              invalid={errors.district && true}
              className={watch('district') ? classnames({ 'is-valid': !errors.district }) : ''}
            />
            {errors && errors.district && <FormFeedback>{errors.district.message}</FormFeedback>}
          </FormGroup>

          <FormGroup tag={Col} md='4'>
            <Label for='area'>
              Area  <span className='text-danger'>*</span>
            </Label>
            <Input
              name='area'
              id='area'
              autoComplete="off"
              placeholder='Area'
              innerRef={register({ required: true })}
              invalid={errors.area && true}
              className={watch('area') ? classnames({ 'is-valid': !errors.area }) : ''}
            />
            {errors && errors.area && <FormFeedback>{errors.area.message}</FormFeedback>}
          </FormGroup>

        </Row>
        <Row>

          <FormGroup tag={Col} md='6'>
            <Label for='streetNo'>
              Street No  <span className='text-danger'>*</span>
            </Label>
            <Input
              name='streetNo'
              id='streetNo'
              autoComplete="off"
              placeholder='8'
              innerRef={register({ required: true })}
              invalid={errors.streetNo && true}
              className={watch('streetNo') ? classnames({ 'is-valid': !errors.streetNo }) : ''}
            />
            {errors && errors.area && <FormFeedback>{errors.streetNo.message}</FormFeedback>}
          </FormGroup>

          <FormGroup tag={Col} md='6'>
            <Label for='houseNo'>
              House No  <span className='text-danger'>*</span>
            </Label>
            <Input
              name='houseNo'
              id='houseNo'
              autoComplete="off"
              placeholder='3'
              innerRef={register({ required: true })}
              invalid={errors.houseNo && true}
              className={watch('houseNo') ? classnames({ 'is-valid': !errors.houseNo }) : ''}
            />
            {errors && errors.houseNo && <FormFeedback>{errors.houseNo.message}</FormFeedback>}
          </FormGroup>

        </Row>
        <div className='d-flex justify-content-between'>
          <Button.Ripple color='primary' className='btn-prev' onClick={() => stepper.previous()}>
            <ArrowLeft size={14} className='align-middle mr-sm-25 mr-0'></ArrowLeft>
            <span className='align-middle d-sm-inline-block d-none'>Previous</span>
          </Button.Ripple>
          <Button.Ripple type='submit' color='primary' className='btn-next'>
            <span className='align-middle d-sm-inline-block d-none'>Next</span>
            <ArrowRight size={14} className='align-middle ml-sm-25 ml-0'></ArrowRight>
          </Button.Ripple>
        </div>
      </Form>
    </Fragment>
  )
}

export default Address
