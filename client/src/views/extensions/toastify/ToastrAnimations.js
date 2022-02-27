import { Fragment } from 'react'
import Avatar from '@components/avatar'
import { toast, Slide, Zoom, Flip, Bounce } from 'react-toastify'
import { Check, X, AlertTriangle, Info } from 'react-feather'
import { Card, CardHeader, CardBody, CardTitle, Button } from 'reactstrap'

const SuccessToast = () => (
  <Fragment>
    <div className='toastify-header'>
      <div className='title-wrapper'>
        <Avatar size='sm' color='success' icon={<Check size={12} />} />
        <h6 className='text-success ml-50 mb-0'>Bounce!</h6>
      </div>
      <small className='text-muted'>11 Min Ago</small>
    </div>
    <div className='toastify-body'>
      <span>I do not think that word means what you think it means.</span>
    </div>
  </Fragment>
)

const WarningToast = () => (
  <Fragment>
    <div className='toastify-header'>
      <div className='title-wrapper'>
        <Avatar size='sm' color='warning' icon={<AlertTriangle size={12} />} />
        <h6 className='text-warning ml-50 mb-0'>Flip!</h6>
      </div>
      <small className='text-muted'>11 Min Ago</small>
    </div>
    <div className='toastify-body'>
      <span>I do not think that word means what you think it means.</span>
    </div>
  </Fragment>
)

const ErrorToast = () => (
  <Fragment>
    <div className='toastify-header'>
      <div className='title-wrapper'>
        <Avatar size='sm' color='danger' icon={<X size={12} />} />
        <h6 className='text-danger ml-50 mb-0'>Zoom!</h6>
      </div>
      <small className='text-muted'>11 Min Ago</small>
    </div>
    <div className='toastify-body'>
      <span>I do not think that word means what you think it means.</span>
    </div>
  </Fragment>
)

const InfoToast = () => (
  <Fragment>
    <div className='toastify-header'>
      <div className='title-wrapper'>
        <Avatar size='sm' color='info' icon={<Info size={12} />} />
        <h6 className='text-info ml-50 mb-0'>Slide!</h6>
      </div>
      <small className='text-muted'>11 Min Ago</small>
    </div>
    <div className='toastify-body'>
      <span>I do not think that word means what you think it means.</span>
    </div>
  </Fragment>
)

const ToastAnimations = () => {
  const notifyBounce = () => toast.success(<SuccessToast />, { transition: Bounce, hideProgressBar: true })
  const notifyFlip = () => toast.warning(<WarningToast />, { transition: Flip, hideProgressBar: true })
  const notifyZoom = () => toast.error(<ErrorToast />, { transition: Zoom, hideProgressBar: true })
  const notifySlide = () => toast.info(<InfoToast />, { transition: Slide, hideProgressBar: true })

  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Animations</CardTitle>
      </CardHeader>
      <CardBody>
        <div className='demo-inline-spacing'>
          <Button.Ripple color='primary' outline onClick={notifyBounce}>
            Bounce
          </Button.Ripple>

          <Button.Ripple color='primary' outline onClick={notifyFlip}>
            Flip
          </Button.Ripple>

          <Button.Ripple color='primary' outline onClick={notifyZoom}>
            Zoom
          </Button.Ripple>

          <Button.Ripple color='primary' outline onClick={notifySlide}>
            Slide
          </Button.Ripple>
        </div>
      </CardBody>
    </Card>
  )
}

export default ToastAnimations
