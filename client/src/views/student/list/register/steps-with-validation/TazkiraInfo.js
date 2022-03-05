
import * as yup from 'yup'
import { Fragment } from 'react'
import { useSelector } from 'react-redux'
import classnames from 'classnames'
import { isObjEmpty } from '@utils'
import { useForm } from 'react-hook-form'
import { ArrowLeft, ArrowRight } from 'react-feather'
import { yupResolver } from '@hookform/resolvers/yup'
import { Label, FormGroup, Row, Col, Button, Form, Input, FormFeedback } from 'reactstrap'

const TazkiraInfo = ({ stepper, type }) => {

  const StudentSchema = yup.object().shape({
    tazkiraVolume: yup.string().required('Tazkira Volume is required field'),
    tazkiraPage: yup.string().required("Tazkira Page is required field"),
    registrationNo: yup.string().required("Registration Number is required field")
  })
  // ** React hook form
  const { register, errors, handleSubmit, watch, trigger } = useForm({ mode: 'onChange', resolver: yupResolver(StudentSchema) })

  const { studentInfo } = useSelector(state => state.students)
  const { tazkira } = studentInfo


  const onSubmit = (value) => {
    trigger()
    if (isObjEmpty(errors)) {
      tazkira.tazkira_volume = value.tazkiraVolume
      tazkira.tazkira_page = value.tazkiraPage
      tazkira.tazkira_registration_number = value.registrationNo
      stepper.next()
    }

  }

  return (
    <Fragment>
      <div className='content-header'>
        <h5 className='mb-0'>Tazkira</h5>
        <small>Enter Student's Tazkira Info.</small>
      </div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>

          <FormGroup tag={Col} md='6'>
            <Label for='tazkiraVolume'>
              Tazkira Volume  <span className='text-danger'>*</span>
            </Label>
            <Input
              name='tazkiraVolume'
              id='tazkiraVolume'
              autoComplete="off"
              placeholder='123-456-789'
              innerRef={register({ required: true })}
              invalid={errors.tazkiraVolume && true}
              className={watch('tazkiraVolume') ? classnames({ 'is-valid': !errors.tazkiraVolume }) : ''}
            />
            {errors && errors.tazkiraVolume && <FormFeedback>{errors.tazkiraVolume.message}</FormFeedback>}
          </FormGroup>

          <FormGroup tag={Col} md='6'>
            <Label for='tazkiraPage'>
              Tazkira Page  <span className='text-danger'>*</span>
            </Label>
            <Input
              name='tazkiraPage'
              id='tazkiraPage'
              autoComplete="off"
              placeholder='12'
              innerRef={register({ required: true })}
              invalid={errors.tazkiraPage && true}
              className={watch('tazkiraPage') ? classnames({ 'is-valid': !errors.tazkiraPage }) : ''}
            />
            {errors && errors.tazkiraPage && <FormFeedback>{errors.tazkiraPage.message}</FormFeedback>}
          </FormGroup>
        </Row>
        <Row>

          <FormGroup tag={Col} md='6'>
            <Label for='registrationNo'>
              Registration No   <span className='text-danger'>*</span>
            </Label>
            <Input
              name='registrationNo'
              id='registrationNo'
              placeholder='123'
              innerRef={register({ required: true })}
              invalid={errors.registrationNo && true}
              className={watch('registrationNo') ? classnames({ 'is-valid': !errors.registrationNo }) : ''}
            />
            {errors && errors.registrationNo && <FormFeedback>{errors.registrationNo.message}</FormFeedback>}
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

export default TazkiraInfo
