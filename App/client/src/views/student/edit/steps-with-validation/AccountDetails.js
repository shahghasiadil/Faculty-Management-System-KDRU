import * as yup from 'yup'
import { Fragment } from 'react'
import classnames from 'classnames'
import { isObjEmpty } from '@utils'
import { useForm } from 'react-hook-form'
import { ArrowLeft, ArrowRight } from 'react-feather'
import { yupResolver } from '@hookform/resolvers/yup'
import { Form, Label, Input, FormGroup, Row, Col, Button } from 'reactstrap'

const AccountDetails = ({ stepper, type }) => {
  const SignupSchema = yup.object().shape({
    [`username-${type}`]: yup.string().required(),
    [`email-${type}`]: yup.string().email().required(),
    [`password-val-${type}`]: yup.string().required(),
    'confirm-password-val': yup
      .string()
      .required()
      .oneOf([yup.ref(`password-val-${type}`), null], 'Passwords must match')
  })

  const { register, errors, handleSubmit, trigger } = useForm({
    resolver: yupResolver(SignupSchema)
  })

  const onSubmit = () => {
    trigger()
    if (isObjEmpty(errors)) {
      stepper.next()
    }
  }

  return (
    <Fragment>
      <div className='content-header'>
        <h5 className='mb-0'>Account Details</h5>
        <small className='text-muted'>Enter Your Account Details.</small>
      </div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <FormGroup tag={Col} md='6'>
            <Label className='form-label' for={`username-${type}`}>
              Username
            </Label>
            <Input
              name={`username-${type}`}
              id={`username-${type}`}
              placeholder='johndoe'
              innerRef={register({ required: true })}
              className={classnames({ 'is-invalid': errors[`username-${type}`] })}
            />
          </FormGroup>
          <FormGroup tag={Col} md='6'>
            <Label className='form-label' for={`email-${type}`}>
              Email
            </Label>
            <Input
              type='email'
              name={`email-${type}`}
              id={`email-${type}`}
              placeholder='john.doe@email.com'
              innerRef={register({ required: true })}
              className={classnames({ 'is-invalid': errors[`email-${type}`] })}
            />
          </FormGroup>
        </Row>
        <Row>
          <div className='form-group form-password-toggle col-md-6'>
            <Label className='form-label' for={`password-val-${type}`}>
              Password
            </Label>
            <Input
              type='password'
              name={`password-val-${type}`}
              id={`password-val-${type}`}
              innerRef={register({ required: true })}
              className={classnames({ 'is-invalid': errors[`password-val-${type}`] })}
            />
          </div>
          <div className='form-group form-password-toggle col-md-6'>
            <Label className='form-label' for='confirm-password-val'>
              Confirm Password
            </Label>
            <Input
              type='password'
              name='confirm-password-val'
              id='confirm-password-val'
              innerRef={register({ required: true })}
              className={classnames({ 'is-invalid': errors['confirm-password-val'] })}
            />
          </div>
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
