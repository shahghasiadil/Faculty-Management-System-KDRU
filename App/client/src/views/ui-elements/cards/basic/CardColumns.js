import { CardColumns, Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap'
import img1 from '@src/assets/images/slider/06.jpg'
import img2 from '@src/assets/images/slider/01.jpg'
import img3 from '@src/assets/images/slider/02.jpg'
const CardColumnsComponent = () => {
  return (
    <CardColumns>
      <Card className='position-static'>
        <CardImg top src={img1} alt='card1' />
        <CardBody>
          <CardTitle tag='h4'>Card title that wraps to a new line</CardTitle>
          <CardText>
            This is a longer card with supporting text below as a natural lead-in to additional content. This content is
            a little bit longer.
          </CardText>
        </CardBody>
      </Card>
      <Card className='position-static'>
        <blockquote className='blockquote card-body mb-0'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
          <footer className='blockquote-footer'>
            <small className='text-muted'>
              Someone famous in
              <cite title='Source Title'>Source Title</cite>
            </small>
          </footer>
        </blockquote>
      </Card>
      <Card className='position-static'>
        <CardImg top src={img2} alt='card2' />
        <CardBody>
          <CardTitle tag='h4'>Card title</CardTitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
          <CardText>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </CardText>
        </CardBody>
      </Card>
      <Card className='text-center' color='primary' inverse>
        <blockquote className='blockquote card-body mb-0'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
          <footer className='blockquote-footer'>
            <small className='text-white'>
              Someone famous in
              <cite title='Source Title'>Source Title</cite>
            </small>
          </footer>
        </blockquote>
      </Card>
      <Card className='text-center'>
        <CardBody>
          <CardTitle tag='h4'>Card title</CardTitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
          <CardText>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </CardText>
        </CardBody>
      </Card>
      <Card className='position-static'>
        <CardImg src={img3} alt='card-only' />
      </Card>
      <Card className='text-right'>
        <blockquote className='blockquote card-body mb-0'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
          <footer className='blockquote-footer'>
            <small className='text-muted'>
              Someone famous in
              <cite title='Source Title'>Source Title</cite>
            </small>
          </footer>
        </blockquote>
      </Card>
      <Card className='position-static'>
        <CardBody>
          <CardTitle tag='h4'>Card title</CardTitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in to additional content. This card has
            even longer content than the first to show that equal height action.
          </CardText>
          <CardText>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </CardText>
        </CardBody>
      </Card>
    </CardColumns>
  )
}

export default CardColumnsComponent
