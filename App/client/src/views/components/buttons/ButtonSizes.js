import { Fragment } from 'react'
import { Button, Row, Col } from 'reactstrap'

const ButtonSizes = () => {
  return (
    <Fragment>
      <Row>
        <Col md={6} sm={12}>
          <div className='demo-inline-spacing'>
            <Button.Ripple color='primary' size='lg'>
              Large
            </Button.Ripple>
            <Button.Ripple color='primary'>Default</Button.Ripple>
            <Button.Ripple color='primary' size='sm'>
              Small
            </Button.Ripple>
          </div>
        </Col>
        <Col md={6} sm={12}>
          <div className='demo-inline-spacing'>
            <Button.Ripple outline color='primary' size='lg'>
              Large
            </Button.Ripple>
            <Button.Ripple outline color='primary'>
              Default
            </Button.Ripple>
            <Button.Ripple outline color='primary' size='sm'>
              Small
            </Button.Ripple>
          </div>
        </Col>
      </Row>
    </Fragment>
  )
}
export default ButtonSizes
