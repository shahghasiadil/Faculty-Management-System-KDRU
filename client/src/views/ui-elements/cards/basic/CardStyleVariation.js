import { Fragment } from 'react'
import { Card, CardBody, CardTitle, CardText, Row, Col } from 'reactstrap'

const CardStyleVariation = () => {
  return (
    <Fragment>
      <h5 className='mt-3 mb-2'>Style variation</h5>
      <Row>
        <Col md='6' xl='4'>
          <Card color='primary' inverse>
            <CardBody>
              <CardTitle className='text-white' tag='h4'>
                Primary Card Title
              </CardTitle>
              <CardText>Some quick example text to build on the card title and make up.</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md='6' xl='4'>
          <Card color='secondary' inverse>
            <CardBody>
              <CardTitle className='text-white' tag='h4'>
                Secondary Card Title
              </CardTitle>
              <CardText>Some quick example text to build on the card title and make up.</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md='6' xl='4'>
          <Card color='success' inverse>
            <CardBody>
              <CardTitle className='text-white' tag='h4'>
                Success Card Title
              </CardTitle>
              <CardText>Some quick example text to build on the card title and make up.</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md='6' xl='4'>
          <Card color='danger' inverse>
            <CardBody>
              <CardTitle className='text-white' tag='h4'>
                Danger Card Title
              </CardTitle>
              <CardText>Some quick example text to build on the card title and make up.</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md='6' xl='4'>
          <Card color='warning' inverse>
            <CardBody>
              <CardTitle className='text-white' tag='h4'>
                Warning Card Title
              </CardTitle>
              <CardText>Some quick example text to build on the card title and make up.</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md='6' xl='4'>
          <Card color='info' inverse>
            <CardBody>
              <CardTitle className='text-white' tag='h4'>
                Info Card Title
              </CardTitle>
              <CardText>Some quick example text to build on the card title and make up.</CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md='6' xl='4'>
          <Card className='bg-transparent border-primary shadow-none'>
            <CardBody>
              <CardTitle tag='h4'>Primary Card Title</CardTitle>
              <CardText>Some quick example text to build on the card title and make up.</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md='6' xl='4'>
          <Card className='bg-transparent border-secondary shadow-none'>
            <CardBody>
              <CardTitle tag='h4'>Secondary Card Title</CardTitle>
              <CardText>Some quick example text to build on the card title and make up.</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md='6' xl='4'>
          <Card className='bg-transparent border-success shadow-none'>
            <CardBody>
              <CardTitle tag='h4'>Success Card Title</CardTitle>
              <CardText>Some quick example text to build on the card title and make up.</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md='6' xl='4'>
          <Card className='bg-transparent border-danger shadow-none'>
            <CardBody>
              <CardTitle tag='h4'>Danger Card Title</CardTitle>
              <CardText>Some quick example text to build on the card title and make up.</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md='6' xl='4'>
          <Card className='bg-transparent border-warning shadow-none'>
            <CardBody>
              <CardTitle tag='h4'>Warning Card Title</CardTitle>
              <CardText>Some quick example text to build on the card title and make up.</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md='6' xl='4'>
          <Card className='bg-transparent border-info shadow-none'>
            <CardBody>
              <CardTitle tag='h4'>Info Card Title</CardTitle>
              <CardText>Some quick example text to build on the card title and make up.</CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}

export default CardStyleVariation
