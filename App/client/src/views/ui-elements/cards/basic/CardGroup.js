import { CardGroup, Card, CardImg, CardBody, CardTitle, CardText, CardFooter } from 'reactstrap'
import img1 from '@src/assets/images/slider/01.jpg'
import img2 from '@src/assets/images/slider/05.jpg'
import img3 from '@src/assets/images/slider/03.jpg'

const CardGroupComponent = () => {
  return (
    <CardGroup>
      <Card>
        <CardImg top src={img1} alt='card1' />
        <CardBody>
          <CardTitle tag='h4'>Card title</CardTitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is
            a little bit longer.
          </CardText>
        </CardBody>
        <CardFooter>
          <small className='text-muted'>Last updated 3 mins ago</small>
        </CardFooter>
      </Card>
      <Card>
        <CardImg top src={img2} alt='card2' />
        <CardBody>
          <CardTitle tag='h4'>Card title</CardTitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
        </CardBody>
        <CardFooter>
          <small className='text-muted'>Last updated 3 mins ago</small>
        </CardFooter>
      </Card>
      <Card>
        <CardImg top src={img3} alt='card3' />
        <CardBody>
          <CardTitle tag='h4'>Card title</CardTitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in to additional content. This card has
            even longer content than the first to show that equal height action.
          </CardText>
        </CardBody>
        <CardFooter>
          <small className='text-muted'>Last updated 3 mins ago</small>
        </CardFooter>
      </Card>
    </CardGroup>
  )
}

export default CardGroupComponent
