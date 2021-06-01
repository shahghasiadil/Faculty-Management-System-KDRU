import { Fragment } from 'react'
import { toast } from 'react-toastify'
import Avatar from '@components/avatar'
import { Bell, Check, X, AlertTriangle, Info } from 'react-feather'
import { Card, CardHeader, CardBody, CardTitle, Button } from 'reactstrap'

const PrimaryToast = () => (
  <Fragment>
    <div className='toastify-header'>
      <div className='title-wrapper'>
        <Avatar size='sm' color='primary' icon={<Bell size={12} />} />
        <h6 className='toast-title'>Default!</h6>
      </div>
      <small className='text-muted'>11 Min Ago</small>
    </div>
    <div className='toastify-body'>
      <span role='img' aria-label='toast-text'>
        👋 Jelly-o macaroon brownie tart ice cream croissant jelly-o apple pie.
      </span>
    </div>
  </Fragment>
)

const SuccessToast = () => (
  <Fragment>
    <div className='toastify-header'>
      <div className='title-wrapper'>
        <Avatar size='sm' color='success' icon={<Check size={12} />} />
        <h6 className='toast-title'>Success!</h6>
      </div>
      <small className='text-muted'>11 Min Ago</small>
    </div>
    <div className='toastify-body'>
      <span role='img' aria-label='toast-text'>
        👋 Jelly-o macaroon brownie tart ice cream croissant jelly-o apple pie.
      </span>
    </div>
  </Fragment>
)

const ErrorToast = () => (
  <Fragment>
    <div className='toastify-header'>
      <div className='title-wrapper'>
        <Avatar size='sm' color='danger' icon={<X size={12} />} />
        <h6 className='toast-title'>Error!</h6>
      </div>
      <small className='text-muted'>11 Min Ago</small>
    </div>
    <div className='toastify-body'>
      <span role='img' aria-label='toast-text'>
        👋 Jelly-o macaroon brownie tart ice cream croissant jelly-o apple pie.
      </span>
    </div>
  </Fragment>
)

const WarningToast = () => (
  <Fragment>
    <div className='toastify-header'>
      <div className='title-wrapper'>
        <Avatar size='sm' color='warning' icon={<AlertTriangle size={12} />} />
        <h6 className='toast-title'>Warning!</h6>
      </div>
      <small className='text-muted'>11 Min Ago</small>
    </div>
    <div className='toastify-body'>
      <span role='img' aria-label='toast-text'>
        👋 Jelly-o macaroon brownie tart ice cream croissant jelly-o apple pie.
      </span>
    </div>
  </Fragment>
)

const InfoToast = () => (
  <Fragment>
    <div className='toastify-header'>
      <div className='title-wrapper'>
        <Avatar size='sm' color='info' icon={<Info size={12} />} />
        <h6 className='toast-title'>Info!</h6>
      </div>
      <small className='text-muted'>11 Min Ago</small>
    </div>
    <div className='toastify-body'>
      <span role='img' aria-label='toast-text'>
        👋 Jelly-o macaroon brownie tart ice cream croissant jelly-o apple pie.
      </span>
    </div>
  </Fragment>
)

const SuccessProgressToast = () => (
  <Fragment>
    <div className='toastify-header'>
      <div className='title-wrapper'>
        <Avatar size='sm' color='success' icon={<Check size={12} />} />
        <h6 className='toast-title'>Progress Bar!</h6>
      </div>
      <small className='text-muted'>11 Min Ago</small>
    </div>
    <div className='toastify-body'>
      <span role='img' aria-label='toast-text'>
        👋 Jelly-o macaroon brownie tart ice cream croissant jelly-o apple pie.
      </span>
    </div>
  </Fragment>
)

const ToastTypes = () => {
  const notifyDefault = () => toast(<PrimaryToast />, { hideProgressBar: true })
  const notifySuccess = () => toast.success(<SuccessToast />, { hideProgressBar: true })
  const notifyError = () => toast.error(<ErrorToast />, { hideProgressBar: true })
  const notifyWarning = () => toast.warning(<WarningToast />, { hideProgressBar: true })
  const notifyInfo = () => toast.info(<InfoToast />, { hideProgressBar: true })
  const notifySuccessProgress = () => toast.success(<SuccessProgressToast />)

  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Types</CardTitle>
      </CardHeader>
      <CardBody>
        <div className='demo-inline-spacing'>
          <Button.Ripple color='primary' onClick={notifyDefault} outline>
            Default
          </Button.Ripple>
          <Button.Ripple color='success' onClick={notifySuccess} outline>
            Success
          </Button.Ripple>
          <Button.Ripple color='danger' onClick={notifyError} outline>
            Error
          </Button.Ripple>
          <Button.Ripple color='warning' onClick={notifyWarning} outline>
            Warning
          </Button.Ripple>
          <Button.Ripple color='info' onClick={notifyInfo} outline>
            Info
          </Button.Ripple>
          <Button.Ripple color='success' onClick={notifySuccessProgress} outline>
            Success Progress Bar
          </Button.Ripple>
        </div>
      </CardBody>
    </Card>
  )
}

export default ToastTypes
