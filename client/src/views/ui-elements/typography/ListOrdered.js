import { Card, CardHeader, CardTitle, CardBody, CardText } from 'reactstrap'

const ListOrdered = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Lists Ordered</CardTitle>
      </CardHeader>

      <CardBody>
        <CardText>
          List of items in which the order does explicitly matter. Use <code>&ltol type="1|a|A|i|I"&gt</code>, The type
          attribute specifies the kind of marker to use in the list.
        </CardText>
        <ol>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Consectetur adipiscing elit</li>
          <li>Integer molestie lorem at massa</li>
          <li>Facilisis in pretium nisl aliquet</li>
          <li>
            Nulla volutpat aliquam velit
            <ol type='A'>
              <li>Phasellus iaculis neque</li>
              <li>Purus sodales ultricies</li>
              <li>Vestibulum laoreet porttitor sem</li>
              <li>Ac tristique libero volutpat at</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>consectetur adipisicing elit. At, quae?</li>
            </ol>
          </li>
          <li>Faucibus porta lacus fringilla vel</li>
          <li>Aenean sit amet erat nunc</li>
          <li>Eget porttitor lorem</li>
        </ol>
      </CardBody>
    </Card>
  )
}
export default ListOrdered
