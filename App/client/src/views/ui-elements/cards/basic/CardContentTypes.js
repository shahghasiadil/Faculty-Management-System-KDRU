import { Fragment } from 'react'
import {
  Card,
  CardTitle,
  CardBody,
  CardText,
  CardSubtitle,
  CardLink,
  CardImg,
  ListGroup,
  ListGroupItem,
  Row,
  Col
} from 'reactstrap'
import img1 from '@src/assets/images/slider/01.jpg'
import img2 from '@src/assets/images/slider/02.jpg'

const CardContentTypes = () => {
  return (
    <Fragment>
      <h5 className='mt-3'>Content types</h5>
      <Row>
        <Col md='6' lg='4'>
          <h6 className='my-2 text-muted'>Body</h6>
          <Card className='mb-4'>
            <CardBody>
              <CardText>
                This is some text within a card body. Jelly lemon drops tiramisu chocolate cake cotton candy soufflé oat
                cake sweet roll. Sugar plum marzipan dragée topping cheesecake chocolate bar. Danish muffin icing donut.
              </CardText>
            </CardBody>
          </Card>
          <h6 className='my-2 text-muted'>Titles, text, and links</h6>
          <Card className='mb-4'>
            <CardBody>
              <CardTitle tag='h4'>Card Title</CardTitle>
              <CardSubtitle className='text-muted mb-1'>Support card subtitle</CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </CardText>
              <CardLink href='/' onClick={e => e.preventDefault()}>
                Card Link
              </CardLink>
              <CardLink href='/' onClick={e => e.preventDefault()}>
                Another Link
              </CardLink>
            </CardBody>
          </Card>
          <h6 className='my-2 text-muted'>List groups</h6>
          <Card className='mb-4'>
            <ListGroup flush>
              <ListGroupItem>Cras justo odio</ListGroupItem>
              <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
              <ListGroupItem>Vestibulum at eros</ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
        <Col md='6' lg='4'>
          <h6 className='my-2 text-muted'>Images</h6>
          <Card>
            <img className='img-fluid' src={img1} alt='Card cap' />
            <CardBody>
              <CardText>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </CardText>
              <CardText>
                Cookie topping caramels jujubes gingerbread. Lollipop apple pie cupcake candy canes cookie ice cream.
                Wafer chocolate bar carrot cake jelly-o.
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md='6' lg='4'>
          <h6 className='my-2 text-muted'>Kitchen sink</h6>
          <Card>
            <CardImg top src={img2} alt='Card cap' />
            <CardBody>
              <CardTitle tag='h4'>Card Title</CardTitle>
              <CardText>Some quick example text to build on the card title.</CardText>
            </CardBody>
            <ListGroup flush>
              <ListGroupItem>Cras justo odio</ListGroupItem>
              <ListGroupItem>Vestibulum at eros</ListGroupItem>
            </ListGroup>
            <CardBody>
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
    </Fragment>
  )
}

export default CardContentTypes
