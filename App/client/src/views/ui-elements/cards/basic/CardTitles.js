import { Button, Card, CardTitle, CardBody, CardText, CardSubtitle, CardLink, CardImg, Row, Col } from 'reactstrap'
import img1 from '@src/assets/images/slider/04.jpg'
import img2 from '@src/assets/images/slider/03.jpg'
import img3 from '@src/assets/images/slider/06.jpg'

const CardTitles = () => {
  return (
    <Row className='match-height'>
      <Col lg='4' md='6'>
        <Card>
          <CardImg top src={img1} alt='Card cap' />
          <CardBody>
            <CardTitle tag='h4'>Card Title</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </CardText>
            <Button.Ripple color='primary' outline>
              Go Somewhere
            </Button.Ripple>
          </CardBody>
        </Card>
      </Col>
      <Col lg='4' md='6'>
        <Card>
          <CardBody>
            <CardTitle tag='h4'>Card Title</CardTitle>
            <CardSubtitle className='text-muted'>Support card subtitle</CardSubtitle>
          </CardBody>
          <img className='img-fluid' src={img2} alt='Card cap' />
          <CardBody>
            <CardText>Bear claw sesame snaps gummies chocolate.</CardText>
            <CardLink href='/' onClick={e => e.preventDefault()}>
              Card Link
            </CardLink>
            <CardLink href='/' onClick={e => e.preventDefault()}>
              Another Link
            </CardLink>
          </CardBody>
        </Card>
      </Col>
      <Col lg='4' md='6'>
        <Card>
          <CardBody>
            <CardTitle tag='h4'>Card Title</CardTitle>
            <CardSubtitle className='text-muted'>Support card subtitle</CardSubtitle>
            <img className='img-fluid my-2' src={img3} alt='Card cap' />
            <CardText>Bear claw sesame snaps gummies chocolate.</CardText>
            <CardLink href='/' onClick={e => e.preventDefault()}>
              Card Link
            </CardLink>
            <CardLink href='/' onClick={e => e.preventDefault()}>
              Another Link
            </CardLink>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}

export default CardTitles
