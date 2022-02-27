import { Card, CardHeader, CardTitle, CardBody, CardText } from 'reactstrap'

const ListUnordered = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Lists Unordered </CardTitle>
      </CardHeader>

      <CardBody>
        <CardText>
          List of items in which the order does not explicitly matter. Use <code>.list-style-circle</code> or{' '}
          <code>.list-style-square</code> class in unordered list to add circle or square bullet points.
        </CardText>
        <ul>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Consectetur adipiscing elit</li>
          <li>Integer molestie lorem at massa</li>
          <li>Facilisis in pretium nisl aliquet</li>
          <li>
            Nulla volutpat aliquam velit
            <ul className='list-style-square'>
              <li>Phasellus iaculis neque</li>
              <li>Purus sodales ultricies</li>
              <li>Vestibulum laoreet porttitor sem</li>
              <li>Ac tristique libero volutpat at</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>consectetur adipisicing elit. At, quae?</li>
            </ul>
          </li>
          <li>Faucibus porta lacus fringilla vel</li>
          <li>Aenean sit amet erat nunc</li>
          <li>Eget porttitor lorem</li>
        </ul>
      </CardBody>
    </Card>
  )
}
export default ListUnordered
