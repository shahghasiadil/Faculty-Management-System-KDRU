import * as yup from 'yup'
import classnames from 'classnames'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Form, FormGroup, Row, Col, Button } from 'reactstrap'
import InputPasswordToggle from '@components/input-password-toggle'

const PasswordTabContent = () => {
  const SignupSchema = yup.object().shape({
    'old-password': yup.string().required(),
    'new-password': yup.string().required(),
    'retype-new-password': yup
      .string()
      .required()
      .oneOf([yup.ref(`new-password`), null], 'Passwords must match')
  })

  const { register, errors, handleSubmit, trigger } = useForm({
    resolver: yupResolver(SignupSchema)
  })

  const onSubmit = () => trigger()

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Row>
        <Col sm='6'>
          <FormGroup>
            <InputPasswordToggle
              label='Old Password'
              htmlFor='old-password'
              name='old-password'
              innerRef={register({ required: true })}
              className={classnames('input-group-merge', {
                'is-invalid': errors['old-password']
              })}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col sm='6'>
          <FormGroup>
            <InputPasswordToggle
              label='New Password'
              htmlFor='new-password'
              name='new-password'
              innerRef={register({ required: true })}
              className={classnames('input-group-merge', {
                'is-invalid': errors['new-password']
              })}
            />
          </FormGroup>
        </Col>
        <Col sm='6'>
          <FormGroup>
            <InputPasswordToggle
              label='Retype New Password'
              htmlFor='retype-new-password'
              name='retype-new-password'
              innerRef={register({ required: true })}
              className={classnames('input-group-merge', {
                'is-invalid': errors['retype-new-password']
              })}
            />
          </FormGroup>
        </Col>
        <Col className='mt-1' sm='12'>
          <Button.Ripple type='submit' className='mr-1' color='primary'>
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

export default PasswordTabContent
