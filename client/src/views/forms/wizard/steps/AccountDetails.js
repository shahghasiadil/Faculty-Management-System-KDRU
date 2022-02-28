import { Fragment } from 'react'
import { ArrowLeft, ArrowRight } from 'react-feather'
import { Label, FormGroup, Row, Col, Input, Form, Button } from 'reactstrap'

const AccountDetails = ({ stepper, type }) => {
  return (
    <Fragment>
      <div className='content-header'>
        <h5 className='mb-0'>Account Details</h5>
        <small className='text-muted'>Enter Your Account Details.</small>
      </div>
      <Form onSubmit={e => e.preventDefault()}>
        <Row>
          <FormGroup tag={Col} md='6'>
            <Label className='form-label' for={`username-${type}`}>
              Username
            </Label>
            <Input type='text' name={`username-${type}`} id={`username-${type}`} placeholder='johndoe' />
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
              aria-label='john.doe'
            />
          </FormGroup>
        </Row>
        <Row>
          <div className='form-group form-password-toggle col-md-6'>
            <Label className='form-label' for={`password-${type}`}>
              Password
            </Label>
            <Input type='password' id={`password-${type}`} />
          </div>
          <div className='form-group form-password-toggle col-md-6'>
            <Label className='form-label' for={`confirm-password-${type}`}>
              Confirm Password
            </Label>
            <Input type='password' id={`confirm-password-${type}`} />
          </div>
        </Row>
        <div className='d-flex justify-content-between'>
          <Button.Ripple color='secondary' className='btn-prev' outline disabled>
            <ArrowLeft size={14} className='align-middle mr-sm-25 mr-0'></ArrowLeft>
            <span className='align-middle d-sm-inline-block d-none'>Previous</span>
          </Button.Ripple>
          <Button.Ripple color='primary' className='btn-next' onClick={() => stepper.next()}>
            <span className='align-middle d-sm-inline-block d-none'>Next</span>
            <ArrowRight size={14} className='align-middle ml-sm-25 ml-0'></ArrowRight>
          </Button.Ripple>
        </div>
      </Form>
    </Fragment>
  )
}

export default AccountDetails
