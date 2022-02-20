import * as yup from 'yup'
import { Fragment, useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import classnames from 'classnames'
import { isObjEmpty } from '@utils'
import { useForm } from 'react-hook-form'
import { ArrowLeft, ArrowRight } from 'react-feather'
import { yupResolver } from '@hookform/resolvers/yup'
import { Form, Label, Input, FormGroup, Row, Col, Button, FormFeedback } from 'reactstrap'

const AccountDetails = ({ stepper, type }) => {


  const SignupSchema = yup.object().shape({
    username: yup.string().required().min(3, 'Username must be at least 3 characters'),
    email: yup.string().email().required(),
    password: yup.string().required().min(4, "Password must be at least 4 characters")
  })

  const { studentInfo, selectedStudent } = useSelector(state => state.students)
  const { account } = studentInfo

  const [studentData, setStudentData] = useState(null)

  const { register, errors, handleSubmit, trigger, watch } = useForm({
    resolver: yupResolver(SignupSchema)
  })

  useEffect(() => {
    if (selectedStudent !== null || (selectedStudent !== null && studentData !== null && selectedStudent.id !== StudentData.id)) {
      setStudentData(selectedStudent)
    }
  }, [selectedStudent])

  const onSubmit = (value) => {
    trigger()
    if (isObjEmpty(errors)) {
      account.username = value.username
      account.email = value.email
      account.password = value.password
      stepper.next()
    }
  }

  return (
    <Fragment>
      <div className='content-header'>
        <h5 className='mb-0'>Account Details</h5>
        <small className='text-muted'>Enter Student's Account Details.</small>
      </div>
      <Form onSubmit={handleSubmit(onSubmit)} >
        <Row>
          <FormGroup tag={Col} md='6'>
            <Label for='username'>
              Username <span className='text-danger'>*</span>
            </Label>
            <Input
              name='username'
              id='username'
              defaultValue={studentData && studentData.user.name}
              placeholder='John'
              innerRef={register({ required: true })}
              invalid={errors.username && true}
              className={watch('username') ? classnames({ 'is-valid': !errors.username }) : ''}
            />
            {errors && errors.username && <FormFeedback>{errors.username.message}</FormFeedback>}
          </FormGroup>
          <FormGroup tag={Col} md='6'>
            <Label for='email'>
              Email <span className='text-danger'>*</span>
            </Label>
            <Input
              name='email'
              id='email'
              autoComplete="off"
              defaultValue={studentData && studentData.user.email}
              placeholder='John@gmail.com'
              innerRef={register({ required: true })}
              invalid={errors.email && true}
              className={watch('email') ? classnames({ 'is-valid': !errors.email }) : ''}
            />
            {errors && errors.email && <FormFeedback>{errors.email.message}</FormFeedback>}
          </FormGroup>
        </Row>
        <Row>
          <FormGroup tag={Col} md='6'>
            <Label for='passwrod'>
              Password <span className='text-danger'>*</span>
            </Label>
            <Input
              name='password'
              id='password'
              type='password'
              defaultValue={studentData && studentData.user.password}
              autoComplete="off"
              innerRef={register({ required: true })}
              invalid={errors.password && true}
              className={watch('password') ? classnames({ 'is-valid': !errors.password }) : ''}
            />
            {errors && errors.password && <FormFeedback>{errors.password.message}</FormFeedback>}
          </FormGroup>
          {/* <FormGroup tag={Col} md='6'>
            <Label for='confirm_passwrod'>
              Confirm Password <span className='text-danger'>*</span>
            </Label>
            <Input
              name='confirm_passwrod'
              id='confirm_passwrod'
              type='password'
              autoComplete="off"
              innerRef={register({ required: true })}
              invalid={errors.confirm_passwrod && true}
              className={watch('confirm_passwrod') ? classnames({ 'is-valid': !errors.confirm_passwrod }) : ''}
            />
            {errors && errors.confirm_passwrod && <FormFeedback>{errors.confirm_passwrod.message}</FormFeedback>}
          </FormGroup> */}
        </Row>
        <div className='d-flex justify-content-between'>
          <Button.Ripple color='secondary' className='btn-prev' outline disabled>
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

export default AccountDetails
