import { Card, CardHeader, CardTitle, CardBody, CardText } from 'reactstrap'

const ListUnstyled = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Lists Unstyled</CardTitle>
      </CardHeader>

      <CardBody>
        <CardText>
          Use class <code>.list-unstyled</code> for Lists Unstyled. It remove the default <code>list-style</code> and
          left margin on list items (immediate children only).
          <strong>This only applies to immediate children list items</strong>, meaning you will need to add the class
          for any nested lists as well.
        </CardText>
        <ul className='list-unstyled'>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Consectetur adipiscing elit</li>
          <li>Integer molestie lorem at massa</li>
          <li>Facilisis in pretium nisl aliquet</li>
          <li>
            Nulla volutpat aliquam velit
            <ul>
              <li>Phasellus iaculis neque</li>
              <li>Purus sodales ultricies</li>
              <li>Vestibulum laoreet porttitor sem</li>
              <li>Ac tristique libero volutpat at</li>
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
export default ListUnstyled
