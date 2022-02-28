import { Fragment } from 'react'
import { Card, CardImg, CardTitle, CardBody, CardImgOverlay, CardText, Row, Col } from 'reactstrap'
import img1 from '@src/assets/images/slider/06.jpg'
import img2 from '@src/assets/images/slider/09.jpg'
import img3 from '@src/assets/images/slider/10.jpg'

const CardImages = () => {
  return (
    <Fragment>
      <h5 className='mt-3 mb-2'>Images</h5>
      <Row>
        <Col xl='4' md='6'>
          <Card className='mb-3'>
            <CardImg top src={img1} alt='card-top' />
            <CardBody>
              <CardTitle tag='h4'>Card title</CardTitle>
              <CardText>
                This is a wider card with supporting text below as a natural lead-in to additional content. This content
                is a little bit longer.
              </CardText>
              <CardText>
                <small className='text-muted'>Last updated 3 mins ago</small>
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col xl='4' md='6'>
          <Card className='mb-3'>
            <CardBody>
              <CardTitle tag='h4'>Card title</CardTitle>
              <CardText>
                This is a wider card with supporting text below as a natural lead-in to additional content. This content
                is a little bit longer.
              </CardText>
              <CardText>
                <small className='text-muted'>Last updated 3 mins ago</small>
              </CardText>
            </CardBody>
            <CardImg top src={img2} alt='card-bottom' />
          </Card>
        </Col>
        <Col xl='4' md='6'>
          <Card className='text-white border-0'>
            <CardImg top src={img3} alt='card-overlay' />
            <CardImgOverlay className='bg-overlay'>
              <CardTitle className='text-white' tag='h4'>
                Card title
              </CardTitle>
              <CardText>
                This is a wider card with supporting text below as a natural lead-in to additional content. This content
                is a little bit longer.
              </CardText>
              <CardText>
                <small className='text-muted'>Last updated 3 mins ago</small>
              </CardText>
            </CardImgOverlay>
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}

export default CardImages
