import { Fragment } from 'react'
import { ArrowLeft } from 'react-feather'
import { Label, FormGroup, Row, Col, Form, Input, Button } from 'reactstrap'

const SocialLinks = ({ stepper, type }) => {
  return (
    <Fragment>
      <div className='content-header'>
        <h5 className='mb-0'>Social Links</h5>
        <small>Enter Your Social Links.</small>
      </div>
      <Form onSubmit={e => e.preventDefault()}>
        <Row>
          <FormGroup tag={Col} md='6'>
            <Label className='form-label' for={`twitter-${type}`}>
              Twitter
            </Label>
            <Input type='text' id={`twitter-${type}`} name='twitter' placeholder='https://twitter.com/abc' />
          </FormGroup>
          <FormGroup tag={Col} md='6'>
            <Label className='form-label' for={`facebook-${type}`}>
              Facebook
            </Label>
            <Input type='text' id={`facebook-${type}`} name='facebook' placeholder='https://facebook.com/abc' />
          </FormGroup>
        </Row>
        <Row>
          <FormGroup tag={Col} md='6'>
            <Label className='form-label' for={`google-${type}`}>
              Google+
            </Label>
            <Input type='text' id={`google-${type}`} name='google' placeholder='https://plus.google.com/abc' />
          </FormGroup>
          <FormGroup tag={Col} md='6'>
            <Label className='form-label' for={`linkedin-${type}`}>
              Linkedin
            </Label>
            <Input type='text' id={`linkedin-${type}`} name='linkedin' placeholder='https://linkedin.com/abc' />
          </FormGroup>
        </Row>
        <div className='d-flex justify-content-between'>
          <Button.Ripple color='primary' className='btn-prev' onClick={() => stepper.previous()}>
            <ArrowLeft size={14} className='align-middle mr-sm-25 mr-0'></ArrowLeft>
            <span className='align-middle d-sm-inline-block d-none'>Previous</span>
          </Button.Ripple>
          <Button.Ripple color='success' className='btn-submit' onClick={() => alert('submitted')}>
            Submit
          </Button.Ripple>
        </div>
      </Form>
    </Fragment>
  )
}

export default SocialLinks
