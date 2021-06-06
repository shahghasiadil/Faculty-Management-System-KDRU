import { Fragment } from 'react'
import classnames from 'classnames'
import { isObjEmpty } from '@utils'
import { useForm } from 'react-hook-form'
import { ArrowLeft } from 'react-feather'
import { Label, FormGroup, Row, Col, Button, Form, Input } from 'reactstrap'

const SocialLinks = ({ stepper, type }) => {
  const { register, errors, handleSubmit, trigger } = useForm()

  const onSubmit = () => {
    trigger()
    if (isObjEmpty(errors)) {
      alert('submitted')
    }
  }

  return (
    <Fragment>
      <div className='content-header'>
        <h5 className='mb-0'>Social Links</h5>
        <small>Enter Your Social Links.</small>
      </div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <FormGroup tag={Col} md='6'>
            <Label className='form-label' for={`twitter-${type}`}>
              Twitter
            </Label>
            <Input
              type='text'
              id={`twitter-${type}`}
              name={`twitter-${type}`}
              placeholder='https://twitter.com/abc'
              innerRef={register({ required: true })}
              className={classnames({ 'is-invalid': errors[`twitter-${type}`] })}
            />
          </FormGroup>
          <FormGroup tag={Col} md='6'>
            <Label className='form-label' for={`facebook-${type}`}>
              Facebook
            </Label>
            <Input
              type='text'
              id={`facebook-${type}`}
              name={`facebook-${type}`}
              placeholder='https://facebook.com/abc'
              innerRef={register({ required: true })}
              className={classnames({ 'is-invalid': errors[`facebook-${type}`] })}
            />
          </FormGroup>
        </Row>
        <Row>
          <FormGroup tag={Col} md='6'>
            <Label className='form-label' for={`google-${type}`}>
              Google+
            </Label>
            <Input
              type='text'
              id={`google-${type}`}
              name={`google-${type}`}
              placeholder='https://plus.google.com/abc'
              innerRef={register({ required: true })}
              className={classnames({ 'is-invalid': errors[`google-${type}`] })}
            />
          </FormGroup>
          <FormGroup tag={Col} md='6'>
            <Label className='form-label' for='linkedin'>
              Linkedin
            </Label>
            <Input
              type='text'
              id={`linkedin-${type}`}
              name={`linkedin-${type}`}
              placeholder='https://linkedin.com/abc'
              innerRef={register({ required: true })}
              className={classnames({ 'is-invalid': errors[`linkedin-${type}`] })}
            />
          </FormGroup>
        </Row>
        <div className='d-flex justify-content-between'>
          <Button.Ripple color='primary' className='btn-prev' onClick={() => stepper.previous()}>
            <ArrowLeft size={14} className='align-middle mr-sm-25 mr-0'></ArrowLeft>
            <span className='align-middle d-sm-inline-block d-none'>Previous</span>
          </Button.Ripple>
          <Button.Ripple type='submit' color='success' className='btn-submit'>
            Submit
          </Button.Ripple>
        </div>
      </Form>
    </Fragment>
  )
}

export default SocialLinks
