import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'

const DescriptionListVertical = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>
          Description lists <small className='text-muted'>Vertical</small>
        </CardTitle>
      </CardHeader>

      <CardBody>
        <dl>
          <dt>Description lists</dt>
          <dd>A description list is perfect for defining terms.</dd>
          <dt>Euismod</dt>
          <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio.</dd>
          <dt>Malesuada porta</dt>
          <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
        </dl>
      </CardBody>
    </Card>
  )
}
export default DescriptionListVertical
