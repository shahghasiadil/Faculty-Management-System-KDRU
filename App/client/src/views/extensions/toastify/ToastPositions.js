import { Fragment } from 'react'
import { Info } from 'react-feather'
import { toast } from 'react-toastify'
import Avatar from '@components/avatar'
import { Card, CardHeader, CardBody, CardTitle, Button, Row, Col } from 'reactstrap'

const InfoToast = ({ title }) => (
  <Fragment>
    <div className='toastify-header'>
      <div className='title-wrapper'>
        <Avatar size='sm' color='info' icon={<Info size={12} />} />
        <h6 className='text-info ml-50 mb-0'>{title}</h6>
      </div>
      <small className='text-muted'>11 Min Ago</small>
    </div>
    <div className='toastify-body'>
      <span>I do not think that word means what you think it means.</span>
    </div>
  </Fragment>
)

const ToastPositions = () => {
  const notifyTopLeft = () => toast.info(<InfoToast title='Top Left!' />, {
    position: toast.POSITION.TOP_LEFT,
    hideProgressBar: true
  })
  const notifyTopCenter = () => toast.info(<InfoToast title='Top Center!' />, {
    position: toast.POSITION.TOP_CENTER,
    hideProgressBar: true
  })
  const notifyTopRight = () => toast.info(<InfoToast title='This Right!' />, {
    position: toast.POSITION.TOP_RIGHT,
    hideProgressBar: true
  })

  const notifyBottomLeft = () => toast.info(<InfoToast title='Bottom Left!' />, {
    position: toast.POSITION.BOTTOM_LEFT,
    hideProgressBar: true
  })
  const notifyBottomCenter = () => toast.info(<InfoToast title='Bottom Center!' />, {
    position: toast.POSITION.BOTTOM_CENTER,
    hideProgressBar: true
  })
  const notifyBottomRight = () => toast.info(<InfoToast title='This Right!' />, {
    position: toast.POSITION.BOTTOM_RIGHT,
    hideProgressBar: true
  })

  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Positions</CardTitle>
      </CardHeader>
      <CardBody>
        <Row>
          <Col sm='12'>
            <h5 className='mb-0'>Top Positions</h5>
            <div className='demo-inline-spacing'>
              <Button.Ripple color='primary' outline onClick={notifyTopLeft}>
                Top Left
              </Button.Ripple>
              <Button.Ripple color='primary' outline onClick={notifyTopCenter}>
                Top Center
              </Button.Ripple>
              <Button.Ripple color='primary' outline onClick={notifyTopRight}>
                Top Right
              </Button.Ripple>
            </div>
          </Col>
          <Col sm='12'>
            <h5 className='mt-2 mb-0'>Bottom Positions</h5>
            <div className='demo-inline-spacing'>
              <Button.Ripple color='primary' outline onClick={notifyBottomLeft}>
                Bottom Left
              </Button.Ripple>

              <Button.Ripple color='primary' outline onClick={notifyBottomCenter}>
                Bottom Center
              </Button.Ripple>

              <Button.Ripple color='primary' outline onClick={notifyBottomRight}>
                Bottom Right
              </Button.Ripple>
            </div>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default ToastPositions
