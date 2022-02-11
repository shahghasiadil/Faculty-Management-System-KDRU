import { useState, Fragment } from 'react'
import { isObjEmpty } from '@utils'
import Avatar from '@components/avatar'
import { Link, User } from 'react-feather'
import { Form, Label, Input, Button, Row, Col, FormGroup } from 'reactstrap'

const SocialTabContent = ({ data }) => {
  const [twitter, setTwitter] = useState(data.socialLinks.twitter ? data.socialLinks.twitter : '')
  const [facebook, setFacebook] = useState(data.socialLinks.facebook ? data.socialLinks.facebook : '')
  const [google, setGoogle] = useState(data.socialLinks.google ? data.socialLinks.google : '')
  const [linkedIn, setLinkedIn] = useState(data.socialLinks.linkedIn ? data.socialLinks.linkedIn : '')
  const [instagram, setInstagram] = useState(data.socialLinks.instagram ? data.socialLinks.instagram : '')
  const [quora, setQuora] = useState(data.socialLinks.quora ? data.socialLinks.quora : '')

  const renderTwitterConnection = () => {
    if (!isObjEmpty(data.connections.twitter)) {
      return (
        <Fragment>
          <Avatar className='mb-1' img={data.connections.twitter.profileImg} imgHeight='40' imgWidth='40' />
          <p className='mb-0'>@{data.connections.twitter.id}</p>
          <a href='/' onClick={e => e.preventDefault()}>
            Disconnect
          </a>
        </Fragment>
      )
    } else {
      return (
        <Button.Ripple color='primary' outline>
          Connect
        </Button.Ripple>
      )
    }
  }

  const renderFacebookConnection = () => {
    if (!isObjEmpty(data.connections.facebook)) {
      return (
        <Fragment>
          <Avatar className='mb-1' img={data.connections.facebook.profileImg} imgHeight='40' imgWidth='40' />
          <p className='mb-0'>@{data.connections.facebook.id}</p>
          <a href='/' onClick={e => e.preventDefault()}>
            Disconnect
          </a>
        </Fragment>
      )
    } else {
      return (
        <Button.Ripple color='primary' outline>
          Connect
        </Button.Ripple>
      )
    }
  }

  const renderGoogleConnection = () => {
    if (!isObjEmpty(data.connections.google)) {
      return (
        <Fragment>
          <Avatar className='mb-1' img={data.connections.google.profileImg} imgHeight='40' imgWidth='40' />
          <p className='mb-0'>@{data.connections.google.id}</p>
          <a href='/' onClick={e => e.preventDefault()}>
            Disconnect
          </a>
        </Fragment>
      )
    } else {
      return (
        <Button.Ripple color='primary' outline>
          Connect
        </Button.Ripple>
      )
    }
  }

  const renderGithubConnection = () => {
    if (!isObjEmpty(data.connections.github)) {
      return (
        <Fragment>
          <Avatar className='mb-1' img={data.connections.github.profileImg} imgHeight='40' imgWidth='40' />
          <p className='mb-0'>@{data.connections.github.id}</p>
          <a href='/' onClick={e => e.preventDefault()}>
            Disconnect
          </a>
        </Fragment>
      )
    } else {
      return (
        <Button.Ripple color='primary' outline>
          Connect
        </Button.Ripple>
      )
    }
  }

  return (
    <Form onSubmit={e => e.preventDefault()}>
      <Row>
        <Col sm='12'>
          <div className='d-flex align-items-center mb-2'>
            <Link size={18} />
            <h4 className='mb-0 ml-75'>Social Links</h4>
          </div>
        </Col>
        <Col sm='6'>
          <FormGroup>
            <Label for='account-twitter'>Twitter</Label>
            <Input
              id='account-twitter'
              value={twitter}
              onChange={e => setTwitter(e.target.value)}
              placeholder='Add Link'
            />
          </FormGroup>
        </Col>
        <Col sm='6'>
          <FormGroup>
            <Label for='account-facebook'>Facebook</Label>
            <Input
              id='account-facebook'
              value={facebook}
              onChange={e => setFacebook(e.target.value)}
              placeholder='Add Link'
            />
          </FormGroup>
        </Col>
        <Col sm='6'>
          <FormGroup>
            <Label for='account-google'>Google</Label>
            <Input
              id='account-google'
              value={google}
              onChange={e => setGoogle(e.target.value)}
              placeholder='Add Link'
            />
          </FormGroup>
        </Col>
        <Col sm='6'>
          <FormGroup>
            <Label for='account-linkedIn'>LinkedIn</Label>
            <Input
              id='account-linkedIn'
              value={linkedIn}
              onChange={e => setLinkedIn(e.target.value)}
              placeholder='Add Link'
            />
          </FormGroup>
        </Col>
        <Col sm='6'>
          <FormGroup>
            <Label for='account-instagram'>Instagram</Label>
            <Input
              id='account-instagram'
              value={instagram}
              onChange={e => setInstagram(e.target.value)}
              placeholder='Add Link'
            />
          </FormGroup>
        </Col>
        <Col sm='6'>
          <FormGroup>
            <Label for='account-quora'>Quora</Label>
            <Input id='account-quora' value={quora} onChange={e => setQuora(e.target.value)} placeholder='Add Link' />
          </FormGroup>
        </Col>
        <Col sm='12'>
          <hr className='my-2' />
        </Col>
        <Col className='mt-1' sm='12'>
          <div className='d-flex align-items-center mb-3'>
            <User size={18} />
            <h4 className='mb-0 ml-75'>Profile Connections</h4>
          </div>
          <Row>
            <Col className='text-center mb-1' md='3' xs='6'>
              <p className='font-weight-bold'>Your Twitter</p>
              {renderTwitterConnection()}
            </Col>
            <Col className='text-center mb-1' md='3' xs='6'>
              <p className='font-weight-bold'>Your Facebook</p>
              {renderFacebookConnection()}
            </Col>
            <Col className='text-center mb-1' md='3' xs='6'>
              <p className='font-weight-bold'>Your Google</p>
              {renderGoogleConnection()}
            </Col>
            <Col className='text-center mb-1' md='3' xs='6'>
              <p className='font-weight-bold'>Your Github</p>
              {renderGithubConnection()}
            </Col>
          </Row>
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

export default SocialTabContent
