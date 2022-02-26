import { Fragment } from 'react'
import { Button, ButtonGroup, Row, Col } from 'reactstrap'
import { Facebook, Twitter, Instagram } from 'react-feather'

const ButtonGroups = () => {
  return (
    <Fragment>
      <Row>
        <Col md={6} sm={12}>
          <ButtonGroup className='mb-1'>
            <Button color='primary'>Left</Button>
            <Button color='primary'>Middle</Button>
            <Button color='primary'>Right</Button>
          </ButtonGroup>
        </Col>
        <Col md={6} sm={12}>
          <ButtonGroup className='mb-1'>
            <Button outline color='primary'>
              <Facebook size={15} />
            </Button>
            <Button outline color='primary'>
              <Twitter size={15} />
            </Button>
            <Button outline color='primary'>
              <Instagram size={15} />
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
    </Fragment>
  )
}
export default ButtonGroups
