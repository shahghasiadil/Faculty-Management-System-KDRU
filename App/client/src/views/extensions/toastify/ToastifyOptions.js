import { Fragment } from 'react'
import Avatar from '@components/avatar'
import { X, Loader, Info } from 'react-feather'
import { toast } from 'react-toastify'
import { Card, CardHeader, CardBody, CardTitle, Button } from 'reactstrap'

const ErrorToast = () => (
  <Fragment>
    <div className='toastify-header'>
      <div className='title-wrapper'>
        <Avatar size='sm' color='danger' icon={<X size={12} />} />
        <h6 className='text-danger ml-50 mb-0'>Delayed</h6>
      </div>
      <small className='text-muted'>11 Min Ago</small>
    </div>
    <div className='toastify-body'>
      <span>Candy jelly-o apple pie chocolate bar croissant gummies tiramisu macaroon.</span>
    </div>
  </Fragment>
)

const AutoCloseToast = () => (
  <Fragment>
    <div className='toastify-header'>
      <div className='title-wrapper'>
        <Avatar size='sm' color='primary' icon={<Loader size={12} />} />
        <h6 className='text-primary ml-50 mb-0'>Auto Close</h6>
      </div>
      <small className='text-muted'>11 Min Ago</small>
    </div>
    <div className='toastify-body'>
      <span>Candy jelly-o apple pie chocolate bar croissant gummies tiramisu macaroon.</span>
    </div>
  </Fragment>
)

const InfoToast = () => (
  <Fragment>
    <div className='toastify-header'>
      <div className='title-wrapper'>
        <Avatar size='sm' color='info' icon={<Info size={12} />} />
        <h6 className='text-info ml-50 mb-0'>Sticky Toast!</h6>
      </div>
      <small className='text-muted'>11 Min Ago</small>
    </div>
    <div className='toastify-body'>
      <span>Candy jelly-o apple pie chocolate bar croissant gummies tiramisu macaroon.</span>
    </div>
  </Fragment>
)

const Toastr = () => {
  const notifyDelay = () => toast.error(<ErrorToast />, { autoClose: 10000, hideProgressBar: true })
  const notifyAutoClose = () => toast.success(<AutoCloseToast />, { autoClose: 3000, hideProgressBar: true })
  const notifySticky = () => toast.info(<InfoToast />, { autoClose: false, hideProgressBar: true })

  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Options</CardTitle>
      </CardHeader>
      <CardBody>
        <div className='demo-inline-spacing'>
          <Button.Ripple color='primary' outline onClick={notifyDelay}>
            Delay
          </Button.Ripple>

          <Button.Ripple color='primary' outline onClick={notifyAutoClose}>
            AutoClose
          </Button.Ripple>

          <Button.Ripple color='primary' outline onClick={notifySticky}>
            Sticky
          </Button.Ripple>
        </div>
      </CardBody>
    </Card>
  )
}

export default Toastr
