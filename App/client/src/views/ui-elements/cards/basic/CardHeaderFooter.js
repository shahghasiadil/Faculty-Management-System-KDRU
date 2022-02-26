import { Fragment } from 'react'
import { Card, CardHeader, CardTitle, CardBody, CardText, CardFooter, Row, Col, Button } from 'reactstrap'

const CardHeaderFooter = () => {
  return (
    <Fragment>
      <h6 className='text-muted my-2'>Header and footer</h6>
      <Row>
        <Col md='6' lg='4'>
          <Card>
            <CardHeader>Featured</CardHeader>
            <CardBody>
              <CardTitle tag='h4'>Special title treatment</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional content natural lead-in to additional
                content.
              </CardText>
              <Button.Ripple color='primary' outline>
                Go somewhere
              </Button.Ripple>
            </CardBody>
          </Card>
        </Col>
        <Col md='6' lg='4'>
          <Card>
            <CardHeader>Quote</CardHeader>
            <CardBody>
              <blockquote className='blockquote mb-0'>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.Lorem ipsum dolor
                  sit amet, Integer posuere erat a ante Integer posuere erat a anteconsectetur.
                </p>
                <footer className='blockquote-footer'>
                  Someone famous in
                  <cite title='Source Title'>Source Title</cite>
                </footer>
              </blockquote>
            </CardBody>
          </Card>
        </Col>
        <Col md='6' lg='4'>
          <Card className='text-center'>
            <CardHeader>Featured</CardHeader>
            <CardBody>
              <CardTitle tag='h4'>Special title treatment</CardTitle>
              <CardText>With supporting text below as a natural.</CardText>
              <Button.Ripple color='primary' outline>
                Go somewhere
              </Button.Ripple>
            </CardBody>
            <CardFooter className='text-muted'>2 days ago</CardFooter>
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}

export default CardHeaderFooter
